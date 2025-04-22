// src/pages/MaleCategory.js
import React from "react";

const MaleCategory = () => {
  const maleProducts = [
    { name: "T-shirt", price: "$15" },
    { name: "Jeans", price: "$25" },
    { name: "Jacket", price: "$50" },
  ];

  return (
    <div className="category-page">
      <h1>Male Clothing</h1>
      <div className="product-list">
        {maleProducts.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaleCategory;
