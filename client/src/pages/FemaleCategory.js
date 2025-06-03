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
      name: filename.replace(/[-_]/g, " "), // Format the filename
    };
  });
}

const images = importAll(require.context("../assets/FemaleImage", false, /\.(png|jpe?g|svg)$/));

const FemaleCategory = () => {
  const femaleProducts = images.map(({ src, name }, index) => ({
    id: index + 100, // Unique ID to avoid conflict with Male products
    name,
    price: (index + 1) * 20,
    image: src,
  }));

  return (
    <div className="category-page female-page">
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
      <h1 className="category-title">Female Clothing</h1>
      <div className="items-grid">
        {femaleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FemaleCategory;