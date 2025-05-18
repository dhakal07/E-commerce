// src/pages/KidsCategory.js
import React from "react";
import "./Category.css";

function importAll(r) {
  return r.keys().map((key) => {
    const image = r(key);
    const filename = key.replace("./", "").replace(/\.(png|jpe?g|svg)$/i, "");
    return {
      src: image.default || image,
      name: filename.replace(/[-_]/g, " "),
    };
  });
}

const images = importAll(require.context("../assets/KidsImage", false, /\.(png|jpe?g|svg)$/));

const KidsCategory = () => {
  const kidsProducts = images.map(({ src, name }, index) => ({
    name,
    price: `$${(index + 1) * 10}`, // Example pricing
    img: src,
  }));

  return (
    <div className="category-page kids-page">
      <h1 className="category-title">Kids Clothing</h1>
      <div className="items-grid">
        {kidsProducts.map((product, index) => (
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

export default KidsCategory;
