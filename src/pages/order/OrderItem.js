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
      </tr>
    </>
  );
}

export default OrderItem;
