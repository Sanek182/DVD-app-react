import React, { useState, useEffect } from 'react';

function CartItem({ item, handleQuantityChange, handleRemoveItem, handleStockQuantity }) {
  const [localQuantity, setLocalQuantity] = useState(item.quantity);

  useEffect(() => {
    handleStockQuantity(item.cart_item_id, item.stock_quantity);
  }, [item]);

  return (
    <tr>
      <td>{item.movie_title}</td>
      <td>{item.product_type}</td>
      <td>{item.stock_quantity}</td>
      <td>${parseFloat(item.price).toFixed(2)}</td>
      <td>
        <input
          type="number"
          value={localQuantity}
          onChange={(e) => setLocalQuantity(e.target.value)}
        />
        <button
          onClick={() => handleQuantityChange(item.cart_item_id, localQuantity)}
        >
          Update
        </button>
      </td>
      <td>${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
      <td>
        <button onClick={() => handleRemoveItem(item.cart_item_id)}>Remove</button>
      </td>
    </tr>
  );
}

export default CartItem;
