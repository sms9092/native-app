import axios from 'axios';

const getProductData = (page) => {
  return axios.get(`http://192.168.70.105:5000/products?page=${page}`);
};

export default {
  getProductData,
};

