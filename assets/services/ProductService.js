// api.js
import axios from 'axios';

const BASE_URL = 'http://192.168.70.105:5000';

export const fetchProducts = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/local-products?page=${page}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchID = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

