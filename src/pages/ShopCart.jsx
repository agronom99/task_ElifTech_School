import React from "react";
import Input from "../components/Input";
import Basket from "../components/Basket";
import TotalPrice from "../components/totalPrice";



function ShopCart() {
 
  return (
    <div>
    <div className="shopCart">
      <Input/>
      <Basket />
    </div>
    <TotalPrice />
    </div>
  
  );
};
export default ShopCart;
