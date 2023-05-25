import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import Loading from '../components/Loading';
import ProductItem from '../components/ProductItem';
import ProductService from '../services/ProductService';

const ProductScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    ProductService.getProductData()
      .then((response) => {
        const validData =
          Array.isArray(response.data) &&
          response.data.every(
            (item) => 
            item && 
            typeof item.name === 'string' && 
            item.price 
          );
        if (validData) {
          setData(response.data);
        } else {
          console.error('Invalid data', response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    
  },
  flatListContent: {
    paddingBottom: 20,
    borderRadius: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default ProductScreen;
