import React from "react";
import '../Styles/Products.css';

function Products() {
  return (
    <div className="products-container">
      <h1 className="product-title">Our Products</h1>
      <ul className="product-list">
        {[
          {
            name: "Cookies",
            desc: "Indulge in our freshly baked cookies...",
            img: "/images/cookies.jpg",
          },
          {
            name: "Dry Fruits",
            desc: "Natural sweetness and wholesome goodness...",
            img: "/images/dry-fruits.jpg",
          },
          {
            name: "Sweets",
            desc: "A delightful array of sweets...",
            img: "/images/Jalibee1.jpg",
          },
          {
            name: "Brade",
            desc: "Rich and flavorful Afghani bread...",
            img: "/images/afghanibrade2.jpg",
          },
          {
            name: "Dairy",
            desc: "Creamy yogurts, cheeses, and milk...",
            img: "/images/creams.jpg",
          },
          {
            name: "Kitchen Essentials",
            desc: "Dishes, teapots, and tools for cooking...",
            img: "/images/kitchen.jpg",
          },
        ].map((item, index) => (
          <li className="product-card" key={index}>
            <img src={process.env.PUBLIC_URL + item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
