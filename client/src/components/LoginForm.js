import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Auth.css";

function LoginForm({ onClose, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      onClose(); // Close the modal on successful login
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="login-container">
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="form-header">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email: <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password: <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Login" />
        </div>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="toggle-link" onClick={onSwitchToRegister}>
        Don't have an account? Register here
      </p>
    </div>
  );
}

export default LoginForm;