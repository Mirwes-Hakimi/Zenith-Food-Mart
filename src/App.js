// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Pizza from "./Components/Pizza";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Direction from "./Components/Direction";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/directions" element={<Direction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
