import React from "react";
import '../Styles/Products.css'

function Products(){
    return (
        <div>
        <h1 className="product">Products</h1>
        <div className="product-images">
        
        
        <ul className="items">
       
          <li className="prouct-li">
           <h2>Cookies</h2>
            <p>Indulge in our freshly baked cookies, crafted with love and the finest ingredients to satisfy your sweet cravings and brighten your day</p>
            <img
            src={process.env.PUBLIC_URL + "/images/cookies.jpg"}
            alt="cookies Image"/>
          </li>

          <li className="prouct-li">
           <h2>Dry Fruits</h2>
            <p>Indulge in the natural sweetness and wholesome goodness of Afghan dry fruits, a perfect blend of flavor and nutrition to satisfy your snacking cravings.</p>
            <img
            src={process.env.PUBLIC_URL + "/images/dry-fruits.jpg"}
            alt="cookies Image"/>
          </li>

          <li className="prouct-li">
          <h2>Sweets</h2>
          <p>Discover a delightful array of sweets that will tantalize your taste buds, from rich Afghan Jalebi to delectable pastries, all made to sweeten life's moments.</p>
          <img src={process.env.PUBLIC_URL + "/images/Jalibee1.jpg"} />
          </li>

          <li className="prouct-li">
          <h2>Brade</h2>
          <p>Experience the rich and flavorful taste of Afghani bread, a staple of Afghan cuisine, known for its soft texture and authentic ingredients.</p>
          <img src={process.env.PUBLIC_URL + "/images/afghanibrade2.jpg"} />
          </li>

          <li className="prouct-li">
          <h2>Dairy</h2>
          <p>Afghani dairy products, a testament to the country's pastoral traditions, offering a delightful array of creamy yogurts, artisanal cheeses, and fresh milk</p>
          <img src={process.env.PUBLIC_URL + "/images/creams.jpg"} />
          </li>

          <li className="prouct-li">
          <h2>Kitchen Essentials</h2>
          <p>Explore a world of culinary wonders with our exquisite collection of dishes, teapots, and an array of other kitchen essentials, each meticulously crafted to elevate your dining experience to new heights.</p>
          <img src={process.env.PUBLIC_URL + "/images/kitchen.jpg"} />
          </li>
        </ul>
        </div>

     </div>
    )
};

export default Products;