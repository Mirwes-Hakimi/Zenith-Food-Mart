// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Styles/Home.css';
import Pizza from "./Pizza";
import Products from "./Products";
import Contact from "./Contact";
import Direction from "./Direction";
import logo from '../Assets/logo.png';

function Home() {
  const images = [
    '/images/IMG_8305.jpg',
    '/images/IMG_8307.jpg',
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
  <div className="overlay">
  <img src={logo} alt="Zenith Logo" style={{ height: '120px', marginBottom: '1rem' }} />
  <h1>Welcome to Zenith Halal Food Mart</h1>
  <p>Fresh. Halal. Delicious. Taste the tradition.</p>
  <Link to="/pizza"><button className="hero-btn">Explore Menu</button></Link>
</div>




      <Pizza />
      <Products/>
      <Direction />
      <Contact />

      </div>
  
  );
}

export default Home;
