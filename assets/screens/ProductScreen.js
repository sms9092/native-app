// ProductsScreen.js
import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, StyleSheet, View } from 'react-native';
import ProductItem from '../components/ProductItem';
import LoadingFooter from '../components/LoadingFooter';
import { fetchProducts } from '../services/ProductService';
import LoadingScreen from '../components/Loading';

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const newProducts = await fetchProducts(page);
    if (newProducts) {
      setProducts(oldProducts => [...oldProducts, ...newProducts]);
      setPage(page + 1);
    }
    setLoading(false);
  };

  if (loading && products.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <View style = {styles.container}>
      
      <FlatList
        data={products}
        style={styles.list}
        renderItem={({ item }) => <ProductItem item={item}  />}
        keyExtractor={(item,index) => index.toString()}
        ListFooterComponent={loading ? LoadingFooter : null}
        onEndReached={loadProducts}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  list: {
    margin: 10,
  },
});
export default ProductsScreen;
