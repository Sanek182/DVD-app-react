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

export const createOrder = async (userId, cartId, specificDetails, addExpenses, totalSum) => {
    console.log("userId:", userId);
    console.log("cartId:", cartId);
    console.log("totalSum:", totalSum);  
  if (!userId || !cartId || !totalSum) {
        console.error('Missing required parameters');
        return null;
    }
    try {
        const response = await axios.post(`${BASE_URL}/create-order`, {
          userId,
          cartId,
          specificDetails,
          addExpenses,
          totalSum
        }, {
        withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('An error occurred while creating order:', error);
        return null;
    }
};

export const fetchOrderItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/order-items`);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching order items:', error);
    return null;
  }
};
  
export const createShipment = async (userId, orderId, trackingNum, shipDays, status) => {
  try {
    const response = await axios.post(`${BASE_URL}/create-shipment`, {
      userId,
      orderId,
      trackingNum,
      shipDays,
      status,
    }, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("An error occurred while creating shipment:", error);
    return { success: false, message: 'Failed to create shipment.' };
  }
};

export const fetchReceiptInfo = async (orderId) => {
  try {
    const response = await axios.get(`${BASE_URL}/receipt-info/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching receipt info:', error);
    return null;
  }
};


export const cancelShipment = async (orderId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/cancel-shipment`, { data: { orderId } });
    return response.data;
  } catch (error) {
    console.error("An error occurred while cancelling the shipment:", error);
    return null;
  }
};
