// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Male from "./pages/MaleCategory";
import Female from "./pages/FemaleCategory";
import Kids from "./pages/KidsCategory";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/male" element={<Male />} />
            <Route path="/female" element={<Female />} />
            <Route path="/kids" element={<Kids />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
