import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getInventoryItems = async () => {
  const response = await axios.get(`${API_URL}/inventory`);
  return response.data;
};

export const createInventoryItem = async (item) => {
  const response = await axios.post(`${API_URL}/inventory`, item);
  return response.data;
};

export const updateInventoryItem = async (id, item) => {
  const response = await axios.put(`${API_URL}/inventory/${id}`, item);
  return response.data;
};

export const deleteInventoryItem = async (id) => {
  const response = await axios.delete(`${API_URL}/inventory/${id}`);
  return response.data;
};