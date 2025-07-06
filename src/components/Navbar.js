// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaSearch,
} from 'react-icons/fa';
import './Navbar.css';
import safyaLogo from '../assets/safya-logo.jpg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(null);

  useEffect(() => {
    const closeOnResize = () => {
      setOpen(false);
      setDrawerOpen(null);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  const toggleDrawerSection = (section) => {
    setDrawerOpen(drawerOpen === section ? null : section);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <span className="contact">
            <FaEnvelope className="icon" /> info@sunflower.com
          </span>
          <span className="contact">
            <FaPhone className="icon" /> +1 000 000 00 00
          </span>
        </div>

        <div className="social">
  <button type="button" className="icon-button" aria-label="Facebook"><FaFacebookF /></button>
  <button type="button" className="icon-button" aria-label="Twitter"><FaTwitter /></button>
  <button type="button" className="icon-button" aria-label="Instagram"><FaInstagram /></button>
  <button type="button" className="icon-button" aria-label="Pinterest"><FaPinterestP /></button>
  <button type="button" className="icon-button" aria-label="WhatsApp"><FaWhatsapp /></button>
</div>

      </div>

      {/* Mid Bar */}
      <div className="mid-bar">
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <h1 className="site-logo">
          <img src={safyaLogo} alt="Safya Logo" />
        </h1>

        <div className="search-lang-wrapper">
          <form className="search-box">
            <input type="text" placeholder="Search…" />
            <button type="submit" aria-label="Search">
              <FaSearch />
            </button>
          </form>

          <select className="lang-select">
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="es">🇪🇸 Español</option>
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="ar">🇸🇦 العربية</option>
          </select>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-desktop">
        <Link to="/">Home</Link>

        <div className="has-dropdown">
          <span>Corporate ▾</span>
          <div className="dropdown">
            <Link to="/corporate/about-us">About Us</Link>
            <Link to="/corporate/the-story">The Story Of Safya</Link>
            <Link to="/corporate/certificates">Certificates</Link>
          </div>
        </div>

        <Link to="/export">Export</Link>

        <div className="has-dropdown">
          <span>Products ▾</span>
          <div className="dropdown">
            <Link to="/products/sunflower-oil">Sunflower Oil</Link>
            <Link to="/products/corn-oil">Corn Oil</Link>
            <Link to="/products/cuisine-chef">Cuisine Chef</Link>
          </div>
        </div>

        <Link to="/media">Media</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      {/* Mobile Drawer Navigation */}
      <nav className={`nav-drawer ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>

        <div className="drawer-section">
          <div
            className="drawer-header"
            onClick={() => toggleDrawerSection('corporate')}
          >
            Corporate ▾
          </div>
          {drawerOpen === 'corporate' && (
            <div className="drawer-dropdown">
              <Link to="/corporate/about-us" onClick={() => setOpen(false)}>About Us</Link>
              <Link to="/corporate/the-story" onClick={() => setOpen(false)}>The Story</Link>
              <Link to="/corporate/certificates" onClick={() => setOpen(false)}>Certificates</Link>
            </div>
          )}
        </div>

        <Link to="/export" onClick={() => setOpen(false)}>Export</Link>

        <div className="drawer-section">
          <div
            className="drawer-header"
            onClick={() => toggleDrawerSection('products')}
          >
            Products ▾
          </div>
          {drawerOpen === 'products' && (
            <div className="drawer-dropdown">
              <Link to="/products/sunflower-oil" onClick={() => setOpen(false)}>Sunflower Oil</Link>
              <Link to="/products/corn-oil" onClick={() => setOpen(false)}>Corn Oil</Link>
              <Link to="/products/cuisine-chef" onClick={() => setOpen(false)}>Cuisine Chef</Link>
            </div>
          )}
        </div>

        <Link to="/media" onClick={() => setOpen(false)}>Media</Link>
        <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
