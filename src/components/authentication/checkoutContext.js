import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3500/api';

const CheckoutContext = createContext();

export const useCheckout = () => {
  return useContext(CheckoutContext);
};

export const CheckoutProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [cartId, setCartId] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/initial-state`, {
      withCredentials: true
    })
    .then((response) => {
      const data = response.data;
      setUserId(data.userId);
      setCartId(data.cartId);
      setTotalSum(data.totalSum);
      setOrderId(data.orderId);
      console.log("Data received from Axios:", data);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  }, []);

  const value = {
    userId,
    cartId,
    orderId,
    totalSum,
    setUserId,
    setCartId,
    setOrderId,
    setTotalSum,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
