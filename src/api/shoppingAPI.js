import axios from 'axios';

const BASE_URL = 'http://localhost:3500/api';

export const addToCart = async (dvdId, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/add-to-cart`, {
      dvdId,
      userId
    }, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while adding item to cart:', error);
    return null;
  }
};

export const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cart-items`);
      return response.data;
    } catch (error) {
      console.error('An error occurred while fetching cart items:', error);
      return null;
    }
};

export const updateCartItem = async (cartItemId, newQuantity) => {
    try {
      const response = await axios.put(`${BASE_URL}/update-cart-item`, {
        cartItemId,
        newQuantity
      }, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error('An error occurred while updating cart item:', error);
      return null;
    }
};
  
export const deleteCartItem = async (cartItemId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-cart-item`, {
        data: { cartItemId },
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error('An error occurred while deleting cart item:', error);
      return null;
    }
};
  
