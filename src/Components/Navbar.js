// import React, { useState} from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import '../Styles/Navbar.css';

// function Navbar (){
//   /// Create state to manage the click for mobile menu
//   const [click, setClick] = useState(false);

//   /// Function to handle the click event for mobile menu
//   const handleClick = () => setClick(!click);

//   // function to close the mobile menu
//   const closeMobileMenu = () => setClick(false);


//   return (
//     <div className="navbar">
//       <div className="navbar-container">

//       <Link to="/" className="navbar-logo" onClick={closeMobileMenu} > Zenith Food Mart</Link>

//        <div className="menu-icon" onClick={handleClick}>
//          {click ? <FaTimes /> : <FaBars />}
//        </div>

//        <ul className={click ?  'nav-menu active' : 'navmenu'}>
//        <li className="nav-item">
//         <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//           Home
//         </Link>
//         </li>

//         <li className="nav-item">
//          <Link to="/pizza" className="nav-links" onClick={closeMobileMenu}>
//            Pizza
//          </Link>
//         </li>

//         <li className="nav-item">
//          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
//            Product
//          </Link>
//         </li>
        
//         <li className="nav-item">
//          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
//            Contact
//          </Link>
//         </li>
        
//         <li className="nav-item">
//           <Link to="/directions" className="nav-links">
//            Direction
//           </Link>
//         </li>
//        </ul>
//       </div>
    
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Navbar.css';
import Contact from './Contact';


// Define the Navbar component
function Navbar() {
    // Create state to manage the click event for mobile menu
    const [click, setClick] = useState(false);

     // Function to handle the click event for mobile menu
    const handleClick = () => setClick(!click);

        // Function to close the mobile menu
    const closeMobileMenu = () => setClick(false);
     

  return (
    <div className='navbar'>
     <div className='navbar-container'>
     {/* Define navigation links */}

      <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
         Zenith Halal Food Mart
      </Link>
    <div className='menu-icon' onClick={handleClick}>
    {click ? <FaTimes /> : <FaBars />}
    </div>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li className='nav-item'>
      {/* Use onClick to trigger scrolling */}
    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
      Home 
    </Link>
    </li>
     
    <li className='nav-item'>
    <Link to='/pizza' className='nav-links' onClick={closeMobileMenu}>
      Pizza
    </Link>
    </li>
 
    <li className='nav-item'>
    {/* Use onClick to trigger scrolling */}
    <Link
      to="/contact"
      className='nav-links'
      onClick={closeMobileMenu}
    >
      Contact 
    </Link>
  </li>

    

    <li className='nav-item'>
    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
      Products
    </Link>
    </li>

    <li className='nav-item'>
    <Link to='/directions' className='nav-links' onClick={closeMobileMenu}>
      Direction
    </Link>
    </li>
</ul>
    
    </div>   
    </div>
  )
}

export default Navbar;
