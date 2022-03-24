import React from "react";
import { useGlobalContext } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart } = useGlobalContext();
  if (cart.length > 0) {
    return (
      <section>
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList />
        <CartTotals />
      </section>
    );
  } else {
    return (
      <section>
        <EmptyCart />
      </section>
    );
  }
};

export default Cart;
