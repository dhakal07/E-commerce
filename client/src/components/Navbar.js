import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./Navbar.css";

function Navbar({ toggleSidebar }) {
  const { cartItems } = useCart();
  const { user, logout } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <span className="menu-icon" onClick={toggleSidebar} style={{ cursor: "pointer" }}>
            ☰
          </span>
          <input
            type="text"
            placeholder="Search here"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Customer Service</Link>
        </div>
        <div className="right">
          {user ? (
            <>
              <Link to="/profile">{user.email}</Link>
              {user.role === "admin" && (
                <>
                  <Link to="/admin-dashboard" style={{ marginLeft: "10px" }}>
                    Admin Dashboard
                  </Link>
                  <span style={{ color: "green", marginLeft: "5px" }}> (Admin)</span>
                </>
              )}
              <span onClick={handleSignOut} style={{ cursor: "pointer", marginLeft: "10px" }}>
                Sign Out
              </span>
            </>
          ) : (
            <>
              <span onClick={openLogin} style={{ cursor: "pointer" }}>🔐</span>
              <span onClick={openRegister} style={{ cursor: "pointer", marginLeft: "10px" }}>
                Register
              </span>
            </>
          )}
          <Link to="/cart">
            🛒{cartItems.length > 0 && <span>({cartItems.length})</span>}
          </Link>
        </div>
      </nav>

      {showLogin && (
        <div className="modal-backdrop">
          <LoginForm onClose={closeModal} onSwitchToRegister={openRegister} />
        </div>
      )}

      {showRegister && (
        <div className="modal-backdrop">
          <RegisterForm onClose={closeModal} onSwitchToLogin={openLogin} />
        </div>
      )}
    </>
  );
}

export default Navbar;