import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>Productify</h1>
      <div className="navbar-links">
        <Link to="/" class="navbar-link">Home</Link>
        <Link to="/dashboard" class="navbar-link">Dashboard</Link>
        <Link to="/cart" class="navbar-link">Cart</Link>
        <Link to="/addproduct" class="navbar-link">Add Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
