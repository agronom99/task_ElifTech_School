import React from "react";

const CartBasket = ({ imageUrl, title, price }) => {
  return (
    <div className="cart-basket">
      <img src={imageUrl} alt="img" />
      <div className="price">
        <b>{title}</b>
        <b>Price: {price}</b>
        <div className="counter">
          <b>4</b>
          <div className="button" >
            <button className="button1"> &#9650; </button>
            <button className="button2"> &#9660; </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBasket;
