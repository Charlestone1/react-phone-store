import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../../context";

const CartList = () => {
  // removed value as props
  const {cart} = useGlobalContext();
  
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        //   removed value as prop just like key
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartList;
