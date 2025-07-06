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
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(null);

  useEffect(() => {
    const close = () => {
      setOpen(false);
      setDrawerOpen(null);
    };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const toggleDrawerSection = (section) =>
    setDrawerOpen(drawerOpen === section ? null : section);

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <span className="contact">
            <svg width="16" viewBox="0 0 24 24">
              <path d="M2 4h20v16H2z" fill="none" />
              <path d="M21 8l-9 6-9-6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            info@sunflower.com
          </span>
          <span className="contact">
            <svg width="16" viewBox="0 0 24 24">
              <path d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5v13A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" />
            </svg>
            +1 000 000 00 00
          </span>
        </div>

        <div className="social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaPinterestP /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Mid Bar */}
      <div className="mid-bar">
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <h1 className="site-logo">
          <img src={require('../assets/safya-logo.jpg')} alt="Safya" />
        </h1>

        <div className="search-lang-wrapper">
          <form className="search-box">
            <input type="text" placeholder="Search…" />
            <button type="submit" aria-label="search">
              <svg width="16" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
              </svg>
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

      {/* Desktop Nav */}
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

      {/* Mobile Nav Drawer */}
      <nav className={`nav-drawer ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>

        <div className="drawer-section">
          <div className="drawer-header" onClick={() => toggleDrawerSection('corporate')}>
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
          <div className="drawer-header" onClick={() => toggleDrawerSection('products')}>
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
