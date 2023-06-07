import React from 'react'

const Cart = ({imageUrl,title}) => {
  return (
    <div className="cart">
      <img src={imageUrl} alt="img" />
      <b>{title}</b>
      <a href="/">add to Cart</a>
    </div>
  );
};

export default Cart;