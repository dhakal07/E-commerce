import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>Categories</h2>
      <ul>
        <li><Link to="/male" onClick={toggleSidebar}>👕 Male</Link></li>
        <li><Link to="/female" onClick={toggleSidebar}>👗 Female</Link></li>
        <li><Link to="/kids" onClick={toggleSidebar}>🧒 Kids</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
