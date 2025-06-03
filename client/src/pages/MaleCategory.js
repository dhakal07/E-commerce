import React from "react";
import "./Category.css";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

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
    id: index + 1,
    name,
    price: (index + 1) * 15,
    image: src,
  }));

  return (
    <div className="category-page male-page">
      {/* Category Navigation */}
      <div className="category-nav">
        <Link to="/male">Male Clothing</Link> | 
        <Link to="/female">Female Clothing</Link> | 
        <Link to="/kids">Kids Clothing</Link>
      </div>
      <h1 className="category-title">Male Clothing</h1>
      <div className="items-grid">
        {maleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MaleCategory;