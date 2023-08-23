import axios from 'axios';

const apiRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
}

const BASE_URL = 'http://localhost:3500/auth';

export const loginUser = (username, password) => 
  apiRequest(`${BASE_URL}/login`, { username, password });

export const registerUser = (username, email, password) =>
  apiRequest(`${BASE_URL}/register`, { username, email, password });

export const resetUser = (token, newPassword) => 
  apiRequest(`${BASE_URL}/reset-password`, { token, newPassword });