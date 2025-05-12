import React from "react";
import '../Styles/Pizza.css'

function Pizza() {
  return (
    <div>
    <h1>Our Menu</h1>
      <ul  className="menu-list" >
        
        <li className="menu-item">
          <h2 className="menu-title"  >Halal Meat Combo Pizza</h2>
          <p className="menu-pragraph" >
            Red or white sauce, pepperoni, chicken, mushroom, red onion, tomato,
            green bell pepper
          </p>
          <img
            src={process.env.PUBLIC_URL + "/images/IMG-9212.jpg"}
            alt="Meat Combo Pizza"
          />
        </li>

        <li className="menu-item veggie-combo">
          <h2 className="menu-title" >Veggie Combo Pizza</h2>
          <p className="menu-pragraph">
            Mushroom, green bell pepper, olives, garlic, onion, tomato
          </p>
          <img
            src={process.env.PUBLIC_URL + "/images/IMG-9217.jpg"}
            alt="Veggie Combo Pizza"
          />
        </li>

        <li className="menu-item">
          <h2 className="menu-title">Halal Pepperoni Pizza</h2>
          <p className="menu-pragraph">Fresh baked Pepperoni pizza</p>
          <img
            src={process.env.PUBLIC_URL + "/images/Peperoni-Pizza.jpg"}
            alt="Pepperoni Pizza"
          />
        </li>

        <li className="menu-item">
          <h2 className="menu-title">Halal Chicken Wings</h2>
          <p className="menu-pragraph">Cooked wing of a chicken coated in sauce or seasoning.</p>
          <img
            src={process.env.PUBLIC_URL + "/images/Chicken-Wings.jpg"}
            alt="Chicken Wings"
          />
        </li>

        <li className="menu-item">
          <h2 className="menu-title">Green Garden Salad</h2>
          <p className="menu-pragraph">Lettuce, spring mix, carrots.</p>
          <img
            src={process.env.PUBLIC_URL + "/images/Salads.jpg"}
            alt="Green Garden Salad"
          />
        </li>

      </ul>
    </div>
  );
}

export default Pizza;
