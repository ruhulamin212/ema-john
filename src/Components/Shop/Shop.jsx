// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import "../Cart/Cart";
import Cart from "../Cart/Cart";

const Shop = () => {
  // State for storing the products and cart items
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetches product data from "products.json" when the component mounts
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    // Adds the selected product to the cart state
    const newcart = [...cart, product];
    setCart(newcart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {/* Renders each product in the products array */}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
