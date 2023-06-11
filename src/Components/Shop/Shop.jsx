// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import "../Cart/Cart";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

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

  // useEffect(() => {
  //   //  step 1 get id
  //   const storedCart = getShoppingCart();
  //   // steo 2 get the product by useing id
  //   for (const id in storedCart) {
  //     //  console.log(id);
  //     const addProduct = products.find((product) => product.id === id);

  //     // step 3: get quentaty the product
  //     const quantity = storedCart[id];
  //     addProduct.quantity = quantity;
  //     console.log(addProduct);
  //   }
  // }, [products]);

  useEffect(() => {
    const stodeCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in stodeCart) {
      // step 2: get product from product state by useing id
      const addedProdect = products.find((product) => product.id === id);

      if (addedProdect) {
        // step 3 : add quantity
        const quantity = stodeCart[id];
        addedProdect.quantity = stodeCart[id];
        // step 4: add the added Product to the saved cart
        savedCart.push(addedProdect);
      }
      // console.log(addedProdect, "added Product");
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    // Adds the selected product to the cart state
    const newcart = [...cart, product];
    setCart(newcart);
    addToDb(product.id);
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

