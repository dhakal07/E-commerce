import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Auth.css";

function RegisterForm({ onClose, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, username);
      onClose(); // Close the modal on successful registration
    } catch (err) {
      setError(err.message || "Registration failed. Please check your input and try again.");
    }
  };

  return (
    <div className="login-container">
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="form-header">
        <h2>Register</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            Username: <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
          <input type="submit" value="Register" />
        </div>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="toggle-link" onClick={onSwitchToLogin}>
        Already have an account? Login here
      </p>
    </div>
  );
}

export default RegisterForm;