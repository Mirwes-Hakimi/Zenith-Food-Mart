import React from "react";
import '../Styles/Pizza.css'

function Pizza() {
  return (
    <div>
    <h1>Our Menu</h1>
      <ul className="menu-list">
        
        <li className="menu-item">
          <h2>Meat Combo Pizza</h2>
          <p>
            Red or white sauce, pepperoni, chicken, mushroom, red onion, tomato,
            green bell pepper
          </p>
          <img
            src={process.env.PUBLIC_URL + "/images/MeatCombo.jpg"}
            alt="Meat Combo Pizza"
          />
        </li>

        <li className="menu-item veggie-combo">
          <h2>Veggie Combo Pizza</h2>
          <p>
            Mushroom, green bell pepper, olives, garlic, onion, tomato
          </p>
          <img
            src={process.env.PUBLIC_URL + "/images/pizza3.jpg"}
            alt="Veggie Combo Pizza"
          />
        </li>

        <li className="menu-item">
          <h2>Pepperoni Pizza</h2>
          <p>Fresh baked Pepperoni pizza</p>
          <img
            src={process.env.PUBLIC_URL + "/images/Peperoni-Pizza.jpg"}
            alt="Pepperoni Pizza"
          />
        </li>

        <li className="menu-item">
          <h2>Chicken Wings</h2>
          <p>Cooked wing of a chicken coated in sauce or seasoning.</p>
          <img
            src={process.env.PUBLIC_URL + "/images/Chicken-Wings.jpg"}
            alt="Chicken Wings"
          />
        </li>

        <li className="menu-item">
          <h2>Green Garden Salad</h2>
          <p>Lettuce, spring mix, carrots.</p>
          <img
            src={process.env.PUBLIC_URL + "/images/Salads.jpg"}
            alt="Green Garden Salad"
          />
        </li>

        <li className="menu-item">
          <h2>Caesar Salad with Chicken</h2>
          <p>Green salad with Caesar dressing and cheese</p>
          <img
            src={process.env.PUBLIC_URL + "/images/Chicken-Caesar-Salad.jpg"}
            alt="Caesar Salad with Chicken"
          />
        </li>
      </ul>
    </div>
  );
}

export default Pizza;
