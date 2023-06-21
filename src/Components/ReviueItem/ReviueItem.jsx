import React from "react";
import "./trviue.css";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faTrashCan} from "@fortawesome/free-solid-svg-icons";

const ReviueItem = ({ product, handelRemoveFromCart }) => {
  const { id, name, img, price, quantity, hendelRemoveFromCart } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          price:<span className="orang-text">${price}</span>
        </p>
        <p>
          Order Quantity:<span className="orang-text">${quantity}</span>
        </p>
      </div>
      <button onClick={()=> handelRemoveFromCart(id)} className="btn-delet">
        {" "}
        <FontAwesomeIcon className="delet-icon" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviueItem;
