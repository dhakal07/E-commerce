import React from "react";
import "./Home.css";

function Home() {
  const products = [
    { id: 1, name: "Shoes", img: "https://via.placeholder.com/100" },
    { id: 2, name: "Sweater", img: "https://via.placeholder.com/100" },
    { id: 3, name: "Cap", img: "https://via.placeholder.com/100" },
    { id: 4, name: "Bag", img: "https://via.placeholder.com/100" },
    { id: 5, name: "Jeans", img: "https://via.placeholder.com/100" },
    { id: 6, name: "Jacket", img: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="home">
      <h1>Shop the Latest Trends</h1>
      <button className="shop-now">Shop now</button>
      <div className="products">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
