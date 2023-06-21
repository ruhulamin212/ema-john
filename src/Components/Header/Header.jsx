// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />

      <div>
        <Link to="/shop ">Shop</Link>
        <Link to="/order">Ordeer</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Loigin</Link>
      </div>
    </nav>
  );
};

export default Header;
