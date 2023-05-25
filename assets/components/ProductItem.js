import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleExpand}>
      <Text style={styles.title}>{item.name}</Text>
      {expanded && (
        <View style={styles.detailsContainer}>
          <Text>Stock Quantity: {item.stock_quantity}</Text>
          <Text>Price: {item.price}</Text>
        </View>
      )}
      {item.images[0] && (
        <Image source={{ uri: item.images[0].src }} style={styles.image} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

export default ProductItem;
