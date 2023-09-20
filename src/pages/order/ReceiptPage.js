import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../../components/authentication/checkoutContext';
import { cancelShipment } from '../../api/shoppingAPI';
import { fetchReceiptInfo } from '../../api/shoppingAPI';
import { toast } from 'react-toastify';

function ReceiptPage() {
  const navigate = useNavigate();
  const { userId, orderId } = useCheckout();
  const [userInfo, setUserInfo] = useState(null);
  const [shipmentInfo, setShipmentInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReceiptInfo(orderId);
      if (data) {
        setUserInfo(data.userInfo);
        setShipmentInfo(data.shipmentInfo);
      }
    };

    fetchData();
  }, [orderId]);

  const handleCancelOrder = async () => {
    try {
      const response = await cancelShipment(orderId);
      if(response !== null) {  // Check if response is not null
        if (response.success) {
          toast.success('Shipment cancelled successfully.');
          navigate('/');
        } else {
          toast.warning(response.message);
        }
      } else {
        toast.error('An error occurred while cancelling the shipment.');
      }
    } catch (error) {
      toast.error('An error occurred while cancelling the shipment.');
    }
    };
  

  const handleGoToMain = () => {
    navigate('/');
  };

  return (
    <div className="receipt-page-container">
      <h1>Receipt</h1>
      {userInfo && shipmentInfo ? (
        <>
          <p>
            Thank you {userInfo.firstName} {userInfo.lastName}. Your order # {orderId}
            is {shipmentInfo.days} days away from shipping to {userInfo.country}.
          </p>
          <p>
            <strong>Tracking Number:</strong> {shipmentInfo.trackingNum}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleCancelOrder}>Cancel Shipment</button>
      <button onClick={handleGoToMain}>Go to Main Page</button>
    </div>
  );
}

export default ReceiptPage;
