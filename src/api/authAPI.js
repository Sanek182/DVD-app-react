import axios from 'axios';
axios.defaults.withCredentials = true;

const apiRequest = async (url, data, method = 'POST') => {
  try {
    const response = await axios({
      method,
      url,
      data
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
};

const BASE_URL = 'http://localhost:3500/auth';

export const loginUser = (username, password) => 
  apiRequest(`${BASE_URL}/login`, { username, password });

export const registerUser = (username, email, password) =>
  apiRequest(`${BASE_URL}/register`, { username, email, password });

export const requestResetUser = (email) => 
  apiRequest(`${BASE_URL}/reset-password-request`, { email });

export const resetUser = (token, newPassword) => 
  apiRequest(`${BASE_URL}/reset-password`, { token, newPassword });

export const logoutUser = () =>
  apiRequest(`${BASE_URL}/logout`, {});

export const updateUserData = (newDetails) => 
  apiRequest(`${BASE_URL}/update-user`, { ...newDetails }, 'PUT');

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/checkAuth`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
};