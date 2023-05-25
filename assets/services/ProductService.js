import axios from 'axios';

const getProductData = () => {
  return axios.get('http://192.168.70.105:5000/products');
};

export default {
  getProductData,
};