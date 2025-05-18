// src/pages/MaleCategory.js
import React from "react";
import "./Category.css";

function importAll(r) {
  return r.keys().map((key) => {
    const image = r(key);
    const filename = key.replace("./", "").replace(/\.(png|jpe?g|svg)$/i, "");
    return {
      src: image.default || image,
      name: filename.replace(/[-_]/g, " "), // Replace dash/underscore with space
    };
  });
}

const images = importAll(require.context("../assets/MaleImage", false, /\.(png|jpe?g|svg)$/));

const MaleCategory = () => {
  const maleProducts = images.map(({ src, name }, index) => ({
    name,
    price: `$${(index + 1) * 15}`, // Just a sample price, you can adjust or keep it simple
    img: src,
  }));

  return (
    <div className="category-page male-page">
      <h1 className="category-title">Male Clothing</h1>
      <div className="items-grid">
        {maleProducts.map((product, index) => (
          <div key={index} className="item-card">
            <img
              src={product.img}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3 className="item-name">{product.name}</h3>
            <p className="item-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaleCategory;
