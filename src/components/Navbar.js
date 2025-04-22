import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <span className="menu-icon">☰</span>
        <input type="text" placeholder="search here" className="search-bar" />
      </div>
      <div className="center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Customer Service</Link>
      </div>
      <div className="right">
        <Link to="/login">🔐</Link>
        <Link to="/cart">🛒</Link>
      </div>
    </nav>
  );
}

export default Navbar;
