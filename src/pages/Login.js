// src/pages/Login.js

import React, { useState } from "react";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);  // State to toggle between login and register

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="login-container">
      <div className="form-header">
        <h2>{isLogin ? "Login" : "Register"}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email: <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password: <span style={{ color: 'red' }}>*</span>
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
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
        )}
        <div className="form-group">
          <input type="submit" value={isLogin ? "Login" : "Register"} />
        </div>
      </form>

      <div className="toggle-link">
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Register here" : "Already have an account? Login here"}
        </p>
      </div>
    </div>
  );
}

export default Login;
