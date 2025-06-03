import React from "react";
import "./Category.css";
import ProductCard from "../components/ProductCard";
import { NavLink } from "react-router-dom";

function importAll(r) {
  return r.keys().map((key) => {
    const image = r(key);
    const filename = key.replace("./", "").replace(/\.(png|jpe?g|svg)$/i, "");
    return {
      src: image.default || image,
      name: filename.replace(/[-_]/g, " "), // Clean the name
    };
  });
}

const images = importAll(require.context("../assets/KidsImage", false, /\.(png|jpe?g|svg)$/));

const KidsCategory = () => {
  const kidsProducts = images.map(({ src, name }, index) => ({
    id: index + 200, // Ensure unique IDs for cart tracking
    name,
    price: (index + 1) * 10, // Numeric price
    image: src,
  }));

  return (
    <div className="category-page kids-page">
      {/* Category Navigation with active styling */}
      <div className="category-nav">
        <NavLink to="/male" activeClassName="active" style={{ marginRight: "10px" }}>
          Male Clothing
        </NavLink> |
        <NavLink to="/female" activeClassName="active" style={{ margin: "0 10px" }}>
          Female Clothing
        </NavLink> |
        <NavLink to="/kids" activeClassName="active" style={{ marginLeft: "10px" }}>
          Kids Clothing
        </NavLink>
      </div>
      <h1 className="category-title">Kids Clothing</h1>
      <div className="items-grid">
        {kidsProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsCategory;