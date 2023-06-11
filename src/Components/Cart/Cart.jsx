import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart);

  let totalpice = 0;
  let totalShaping = 0;
  let quantity = 0;

  for (const product of cart) {
    product.quantity=product.quantity|| 1;
    totalpice = totalpice + product.price *product.quantity;
    totalShaping = totalShaping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalpice * 7) / 100;
  const grandTotal = tax + totalShaping + totalpice;
  return (
    <div className="cart">
      <h3>Order Samary</h3>
      <p>Selected Item :{quantity}</p>
      <p>Total Price :${totalpice.toFixed(2)}</p>
      <p>Total Shoping :${totalShaping.toFixed(2)}</p>
      <p>tax :{tax.toFixed(2)}</p>
      <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
