import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import ReviueItem from "../ReviueItem/ReviueItem";
import './Orders.css'
import { removeFromDb } from "../../../fakedb";



const Order = () => {
  const savedCart =useLoaderData();
  const [cart, setCart] = useState(savedCart)


const handelRemoveFromCart = (id)=>{

  const remaining = cart.filter(product=>product.id !==id);
  setCart (remaining);

  removeFromDb(id);
}

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviueItem key={product.id} product={product}
          handelRemoveFromCart={handelRemoveFromCart}
          ></ReviueItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
