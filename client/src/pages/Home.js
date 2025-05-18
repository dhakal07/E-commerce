import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import maleImg from "../assets/MaleImage/pant.jpeg";
import femaleImg from "../assets/FemaleImage/images (1).jpeg";
import kidsImg from "../assets/KidsImage/download (1).jpeg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to TrendyStore</h1>
        <p>Your one-stop shop for stylish clothing for the whole family.</p>
        <button className="shop-now" onClick={() => navigate("/categories")}>
          Shop Now
        </button>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div
            className="category-card male-card"
            onClick={() => navigate("/male")}
            role="button"
            tabIndex={0}
          >
            <img src={maleImg} alt="Male Clothing" />
            <h3>Male Clothing</h3>
          </div>

          <div
            className="category-card female-card"
            onClick={() => navigate("/female")}
            role="button"
            tabIndex={0}
          >
            <img src={femaleImg} alt="Female Clothing" />
            <h3>Female Clothing</h3>
          </div>

          <div
            className="category-card kids-card"
            onClick={() => navigate("/kids")}
            role="button"
            tabIndex={0}
          >
            <img src={kidsImg} alt="Kids Clothing" />
            <h3>Kids Clothing</h3>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="why-shop">
        <h2>Why Shop With Us?</h2>
        <div className="benefits">
          <div className="benefit">
            <span role="img" aria-label="Shipping">🚚</span>
            <p>Fast & Free Shipping</p>
          </div>
          <div className="benefit">
            <span role="img" aria-label="Quality">✔️</span>
            <p>Quality Products</p>
          </div>
          <div className="benefit">
            <span role="img" aria-label="Support">🤝</span>
            <p>24/7 Customer Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
