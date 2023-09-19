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

export const fetchAllDVDs = async (filterParams) => {
  try {
    let url = `${BASE_URL}/all-dvds`;
    if(filterParams) {
      const queryParams = new URLSearchParams(filterParams).toString();
      url += `?${queryParams}`;
    }
    const response = await axios.get(url);
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

export const searchDVDs = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/dvds/search`, {
      params: { query }
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while searching DVDs:', error);
    return null;
  }
};