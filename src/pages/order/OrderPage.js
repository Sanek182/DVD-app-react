import React, { useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import { useNavigate } from 'react-router-dom';
import { fetchOrderItems, createShipment } from '../../api/shoppingAPI';
import { useCheckout } from "../../components/authentication/checkoutContext";
import { toast } from 'react-toastify';

function OrderPage() {
  const [orderItems, setOrderItems] = useState([]);
  const navigate = useNavigate();
  const { userId, orderId } = useCheckout();

  const generateTrackingNum = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

  const handleReturnToCart = () => {
    navigate('/cart');
  };

  const handleCompleteOrder = async () => {
    const trackingNum = generateTrackingNum();
    const shipDays = 3;
    const status = 'In Progress';
    
    try {
      const response = await createShipment(userId, orderId, trackingNum, shipDays, status);
      if (response.success) {
        toast.success('Shipment created successfully.');
        navigate('/receipt');
      } else {
        toast.warning(response.message);
      }
    } catch (error) {
      toast.error('An error occurred while creating the shipment.');
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchOrderItems();
        console.log("Received items from API:", items);
        if (Array.isArray(items)) {
          setOrderItems(items);
        } else {
          console.warn("Received non-array data:", items);
        }
      } catch (err) {
        console.error('An error occurred while fetching order items:', err);
      }
    };
  
    fetchItems();
  }, []);

  return (
    <div className="order-page-container">
      <h1>Your Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {orderItems ? orderItems.map((order, index) => (
            <OrderItem key={index} order={order} />
          )) : <tr><td colSpan="5">Loading...</td></tr>}
        </tbody>
      </table>
      <div className="order-action-buttons">
        <button onClick={handleReturnToCart}>Return to Cart</button>
        <button onClick={handleCompleteOrder}>Complete the Order</button>
      </div>
    </div>
  );
}

export default OrderPage;
