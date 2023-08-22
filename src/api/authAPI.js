import axios from 'axios';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:3500/auth/login', { username, password });
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post('http://localhost:3500/auth/register', { username, email, password });
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
};
