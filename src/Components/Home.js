// Home.js
import React, { useState, useEffect } from "react";
import '../Styles/Home.css';
import Pizza from "./Pizza";
import Products from "./Products";
import Contact from "./Contact";
import Direction from "./Direction";

function Home() {
  const images = [
    '/images/IMG_8305.jpg',
    '/images/IMG_8307.jpg',
    // '/images/Chicken-Wings.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(nextImage, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
    <div className="slider">

      <img className="image" src={process.env.PUBLIC_URL + images[currentIndex]} alt="image" />
    
    
      </div>

      <Pizza />
      <Products/>
      <Direction />
      <Contact />

      </div>
  
  );
}

export default Home;
