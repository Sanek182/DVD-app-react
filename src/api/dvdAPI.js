import axios from 'axios';

const BASE_URL = 'http://localhost:3500/api';

export const fetchLatestDVDs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/latest-dvds`);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching DVDs:', error);
    return null;
  }
};

export const fetchDVDById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/dvd/${id}`);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching DVD by ID:", error);
    return null;
  }
};