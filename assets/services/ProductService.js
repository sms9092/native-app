import axios from 'axios';

const getProductData = async (page) => {
  try {
  const url = `http://192.168.70.105:5000/products?page=${page}`;
  console.log(`Productservice.js requesting page ${url}`);
  const response = await axios.get(url);
  console.log(`Productservice.js received response:`, response);
  return response.data;
  } catch (error) {
  throw error;
  }
 };

export default { getProductData };
