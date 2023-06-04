// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Product.css";

const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const { img, name, seller, ratings, price } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p>Pricse :${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>reting: {ratings}stas</p>
      </div>

      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
