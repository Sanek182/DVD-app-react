import React from 'react';

function OrderItem({ order }) {
  return (
    <>
      <tr>
        <td>{order.movie_title}</td>
        <td>{order.product_type}</td>
        <td>{order.quantity}</td>
        <td>{parseFloat(order.price).toFixed(2)}</td>
        <td>{order.stock_quantity > 0 ? 'Yes' : 'No'}</td>
        <td>{new Date(order.created_at).toLocaleString()}</td>
      </tr>
    </>
  );
}

export default OrderItem;
