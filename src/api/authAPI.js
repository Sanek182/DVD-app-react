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

export const loginUser = (username, password) => 
  apiRequest('http://localhost:3500/auth/login', { username, password });

export const registerUser = (username, email, password) =>
  apiRequest('http://localhost:3500/auth/register', { username, email, password });

export const resetUser = (token, newPassword) => 
  apiRequest('http://localhost:3500/auth/reset-password', { token, newPassword });