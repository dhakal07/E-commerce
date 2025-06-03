import React, { createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";

// Default API URL if environment variable is not set
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { clearCart } = useContext(CartContext);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("Loaded user from localStorage:", parsedUser); // Debug log
      setToken(storedToken);
      setUser(parsedUser); // Ensure user includes role
    }
  }, []);

  const register = async (email, password, username) => {
    try {
      console.log("Attempting to register with:", { email, password, username });
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      console.log("Fetch response status:", res.status);
      const text = await res.text();
      if (!res.ok) {
        let errorMessage = `Registration failed with status ${res.status}`;
        try {
          const errorData = JSON.parse(text);
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          errorMessage = text || errorMessage;
        }
        throw new Error(errorMessage);
      }
      const data = JSON.parse(text);
      setUser(data.user);
      if (data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
      }
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error("Register fetch error:", {
        message: error.message,
        name: error.name,
        stack: error.stack,
      });
      throw new Error(error.message || "Failed to register");
    }
  };

  const login = async (email, password) => {
    try {
      console.log("Attempting to login with:", { email, password });
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log("Fetch response status:", res.status);
      const text = await res.text();
      if (!res.ok) {
        let errorMessage = `Login failed with status ${res.status}`;
        try {
          const errorData = JSON.parse(text);
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          errorMessage = text || errorMessage;
        }
        throw new Error(errorMessage);
      }
      const data = JSON.parse(text);
      console.log("Login response data:", data); // Debug log
      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Login fetch error:", {
        message: error.message,
        name: error.name,
        stack: error.stack,
      });
      throw new Error(error.message || "Failed to login");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    clearCart();
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};