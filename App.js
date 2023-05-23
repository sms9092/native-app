import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import axios from 'axios';


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://192.168.70.105:5000/products')
.then(response => {
  const validData = Array.isArray(response.data) &&
    response.data.every(item => item && typeof item.name === 'string' && item.price);
  if (validData) {
    setData(response.data);
  } else {
    console.error('Invalid data', response.data);
  }
  setLoading(false);
})
.catch(error => {
  console.error(error);
  setLoading(false);
});

  }, []);

 

  const renderItem = ({ item }) => (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Price: {item.price}</Text>
    </View>
  );

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
        {/* <Text>{data}</Text> */}
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default App;