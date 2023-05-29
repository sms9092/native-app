// LoadingFooter.js
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingFooter = () => (
  <View style={{ padding: 10, alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
);

export default LoadingFooter;