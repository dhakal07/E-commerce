// src/pages/KidsCategory.js
import React from "react";

const KidsCategory = () => {
  const kidsProducts = [
    { name: "T-shirt", price: "$12" },
    { name: "Shorts", price: "$10" },
    { name: "Sweater", price: "$18" },
  ];

  return (
    <div className="category-page">
      <h1>Kids Clothing</h1>
      <div className="product-list">
        {kidsProducts.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsCategory;
