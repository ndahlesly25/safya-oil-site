// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Desktop hover open
  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) {
      setOpenDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setOpenDropdown(null);
    }
  };

  // Mobile click toggle
  const handleToggleDropdown = (menu) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === menu ? null : menu);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Safya Yagi</Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>

          {/* Corporate Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter('corporate')}
            onMouseLeave={handleMouseLeave}
          >
            <span onClick={() => handleToggleDropdown('corporate')}>Corporate ▾</span>
            <div className={`dropdown-menu ${openDropdown === 'corporate' ? 'show' : ''}`}>
              <Link to="/corporate/about-us" onClick={toggleMenu}>About Us</Link>
              <Link to="/corporate/the-story" onClick={toggleMenu}>The Story</Link>
              <Link to="/corporate/certificates" onClick={toggleMenu}>Certificates</Link>
            </div>
          </div>

          <Link to="/export" onClick={toggleMenu}>Export</Link>

          {/* Products Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <span onClick={() => handleToggleDropdown('products')}>Products ▾</span>
            <div className={`dropdown-menu ${openDropdown === 'products' ? 'show' : ''}`}>
              <Link to="/products/sunflower-oil" onClick={toggleMenu}>Sunflower Oil</Link>
              <Link to="/products/corn-oil" onClick={toggleMenu}>Corn Oil</Link>
              <Link to="/products/cuisine-chef" onClick={toggleMenu}>Cuisine Chef</Link>
            </div>
          </div>

          <Link to="/media" onClick={toggleMenu}>Media</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
