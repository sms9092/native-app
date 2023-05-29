import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = ({ item }) => (
  <View style={styles.container}>
    <Image source={{ uri: item.images }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.sku}>SKU: {item.sku}</Text>
    <Text style={styles.stock}>{item.stock_quantity}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sku: {
    fontSize: 14,
  },
  stock: {
    fontSize: 14,
  },
});

export default ProductItem;
