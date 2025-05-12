import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Navbar.css';
import logo from '../Assets/logo.png'; // 🔹 Import logo

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='navbar'>
      <div className='navbar-container'>

        {/* 🔹 Logo + Title */}
        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Zenith Logo" className="logo-img" />
          <span>Zenith Halal Food Mart</span>
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
          <li className='nav-item'><Link to='/pizza' className='nav-links' onClick={closeMobileMenu}>Pizza</Link></li>
          <li className='nav-item'><Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link></li>
          <li className='nav-item'><Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link></li>
          <li className='nav-item'><Link to='/directions' className='nav-links' onClick={closeMobileMenu}>Direction</Link></li>
        </ul>

      </div>
    </div>
  );
}

export default Navbar;
