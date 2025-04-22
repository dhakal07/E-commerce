// src/pages/FemaleCategory.js
import React from "react";

const FemaleCategory = () => {
  const femaleProducts = [
    { name: "Dress", price: "$30" },
    { name: "Skirt", price: "$20" },
    { name: "Blouse", price: "$25" },
  ];

  return (
    <div className="category-page">
      <h1>Female Clothing</h1>
      <div className="product-list">
        {femaleProducts.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FemaleCategory;
