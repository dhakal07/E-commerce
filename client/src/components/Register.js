import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, username);
      alert("Registration successful");
      navigate("/"); // Redirect to home after registration
    } catch (err) {
      setError(err.message || "Registration failed. Please check your input and try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Customer Registration</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="auth-footer">
        Already have an account? <a onClick={() => navigate("/")} style={{ cursor: "pointer", color: "#007bff" }}>Login</a>
      </p>
    </div>
  );
}

export default Register;