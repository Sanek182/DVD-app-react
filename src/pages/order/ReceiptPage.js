import React from 'react';
import { useCheckout } from '../../components/authentication/checkoutContext';

function ReceiptPage() {
  const { userId, orderId } = useCheckout();
  const userInfo = {
    firstName: "John",
    lastName: "Doe",
    country: "USA",
  };
  const shipmentInfo = {
    days: 3
  };

  const handleCancelOrder = () => {
    navigate('/');
  }

  return (
    <div className="receipt-page-container">
      <h1>Receipt</h1>
      <p>
        Thank you {userInfo.firstName} {userInfo.lastName}. Your order # {orderId}
        is {shipmentInfo.days} days away from shipping to {userInfo.country}.
      </p>
      <button onClick={() => {
        // Handle Cancellation
      }}>
        Cancel Shipment
      </button>
      <button onClick={() => {
        // Navigate to main page
      }}>
        Go to Main Page
      </button>
    </div>
  );
}

export default ReceiptPage;
