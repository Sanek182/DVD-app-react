import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCartItems, updateCartItem, deleteCartItem } from '../../api/shoppingAPI';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
import './CartPage.css';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [stockQuantities, setStockQuantities] = useState({});
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (err) {
        console.error('An error occurred while fetching cart items:', err);
      }
    };
    
    fetchItems();
  }, []);

  useEffect(() => {
    const sum = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalSum(sum);
}, [cartItems]);

  const handleQuantityChange = async (cartItemId, newQuantity) => {
    const stockQuantity = stockQuantities[cartItemId];

    try {
        if (newQuantity > 0 && newQuantity <= stockQuantity) {
            const response = await updateCartItem(cartItemId, newQuantity);
            if (response && response.success) {
                const updatedItems = await fetchCartItems();
                setCartItems(updatedItems);
                toast.success('Quantity updated successfully');
            } else {
                console.error('Failed to update cart item');
            }
        } else if (newQuantity <= 0) {
            toast.error('Quantity should be greater than zero');
        } else {
            toast.error(`Quantity should be less than or equal to the amount of dvds left: (${stockQuantity})`);
        }
    } catch (err) {
      console.error('An error occurred while updating cart item:', err);
    }
  };

  const handleStockQuantity = (cartItemId, stockQuantity) => {
    setStockQuantities(prevState => ({
        ...prevState,
        [cartItemId]: stockQuantity
    })); 
};

  const handleRemoveItem = async (itemId) => {
    try {
      await deleteCartItem(itemId);
      const updatedItems = await fetchCartItems();
      setCartItems(updatedItems);
      toast.success('Item removed successfully');
    } catch (err) {
      console.error('An error occurred while removing cart item:', err);
    }
  };

  return (
    <div className="cart-page-container">
      <h1>Your Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Stock Quantity</th>
            <th>Price</th>
            <th>DVD Copis Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              handleQuantityChange={handleQuantityChange}
              handleRemoveItem={handleRemoveItem}
              handleStockQuantity={handleStockQuantity}
            />
          ))}
        </tbody>
      </table>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default CartPage;
