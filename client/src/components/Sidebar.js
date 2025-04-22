// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li><Link to="/male">👕 Male</Link></li>
        <li><Link to="/female">👗 Female</Link></li>
        <li><Link to="/kids">🧒 Kids</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
