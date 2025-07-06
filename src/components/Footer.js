import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import safyaLogo from '../assets/safya-logo.jpg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

         {/* Logo and Contact Info on the Right */}
        <div className="footer-logo-section">
          <img src={safyaLogo} alt="Safya Logo" className="footer-logo" />

          <div className="footer-contact-info">
            <p>
              <svg className="icon" viewBox="0 0 384 512" width="16" height="16" fill="black">
                <path d="M168 0C75.1 0 0 75.1 0 168c0 87.7 143 331.4 155.9 351.1a24 24 0 0 0 38.2 0C177 499.4 320 255.7 320 168 320 75.1 244.9 0 168 0zM168 232a64 64 0 1 1 64-64 64 64 0 0 1-64 64z" />
              </svg> 123 Main Street, City, Country
            </p>
            <p>
              <svg className="icon" viewBox="0 0 512 512" width="16" height="16" fill="black">
                <path d="M511.7 387.9l-99.3-42.6c-15.1-6.5-32.7-1-42.2 12.6l-35.3 49.2c-58.9-29.5-107.1-77.7-136.6-136.6l49.2-35.3c13.7-9.5 19-27.1 12.6-42.2l-42.6-99.3c-7.2-16.9-27.6-26-45.2-19.2l-76.4 30.6c-17.5 7-29.5 24.7-29 43.1 2.4 102.8 86.6 186.9 189.4 189.4 18.4.5 36.1-11.5 43.1-29l30.6-76.4c6.8-17.6-2.3-38-19.2-45.2z"/>
              </svg> +90 216 123 4567
            </p>
            <p>
              <svg className="icon" viewBox="0 0 512 512" width="16" height="16" fill="black">
                <path d="M502.3 190.8l-192-160a48 48 0 0 0-60.6 0l-192 160A48 48 0 0 0 48 240v192a48 48 0 0 0 48 48h320a48 48 0 0 0 48-48V240a48 48 0 0 0-13.7-49.2zM256 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/>
              </svg> info@safyayagi.com
            </p>
          </div>
        </div>

        {/* Pages */}
        <div className="footer-section">
          <h4>Pages</h4>
          <ul className="footer-links show">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/export">Export</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Corporate */}
        <div className="footer-section">
          <h4>Corporate</h4>
          <ul className="footer-links show">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/the-story">The Story</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-section">
          <h4>Products</h4>
          <ul className="footer-links show">
            <li><Link to="/products/sunflower-oil">Sunflower Oil</Link></li>
            <li><Link to="/products/corn-oil">Corn Oil</Link></li>
            <li><Link to="/products/cuisine-chef">Cuisine Chef</Link></li>
          </ul>
        </div>

      

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://www.facebook.com/SafyaYagi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
            <svg width="20" height="20" fill="black" viewBox="0 0 320 512">
              <path d="M279.14 288l14.22-92.66h-88.91V131.33c0-25.35 12.42-50.06 52.24-50.06H293V6.26S273.48 0 256.36 0c-73.22 0-121 44.38-121 124.72V195.3H89.09V288h46.27v224h92.66V288z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/SafyaYagi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
            <svg width="20" height="20" fill="black" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8s114.9-51.3 114.9-114.9S287.6 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.5C385.3 7.8 353.7-.4 318 0c-35.6-.4-142.4-.4-178 0-35.7-.4-67.3 9.9-93.5 36.2C7.8 62.7-.4 94.3 0 130c-.4 35.6-.4 142.4 0 178 1.7 35.7 9.9 67.3 36.2 93.5 26.2 26.2 57.8 34.4 93.5 36.2 35.6.4 142.4.4 178 0 35.7 1.7 67.3-9.9 93.5-36.2 26.2-26.2 34.4-57.8 36.2-93.5.4-35.6.4-142.4 0-178zM398.8 388c-6.5 16.3-19 29-35.3 35.3-24.5 9.7-82.7 7.5-139.4 7.5s-114.9 2.2-139.4-7.5c-16.3-6.5-29-19-35.3-35.3-9.7-24.5-7.5-82.7-7.5-139.4s-2.2-114.9 7.5-139.4c6.5-16.3 19-29 35.3-35.3 24.5-9.7 82.7-7.5 139.4-7.5s114.9-2.2 139.4 7.5c16.3 6.5 29 19 35.3 35.3 9.7 24.5 7.5 82.7 7.5 139.4s2.2 114.9-7.5 139.4z"/>
            </svg>
          </a>
          <a href="https://twitter.com/SafyaYagi" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
            <svg width="20" height="20" fill="black" viewBox="0 0 512 512">
              <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.7-298.7 298.7-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.8 1.6 25.6 1.6 49.3 0 94.6-16.8 130.7-45-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 20.2 1.6 9.4 0 18.7-1.3 27.4-3.6-48.4-9.7-84.8-52.4-84.8-103.5v-1.3c14.3 7.9 30.8 12.9 48.3 13.6-28.4-18.9-47.1-51-47.1-87.4 0-19.1 5.2-36.9 14.3-52.3 52.2 64.3 130.4 106.5 218.2 111-1.6-7.9-2.6-16.1-2.6-24.3 0-58.7 47.4-106.1 106.1-106.1 30.5 0 58.1 12.9 77.5 33.7 24.3-4.5 47.1-13.6 67.6-25.6-7.9 24.6-24.6 45.4-46.1 58.4z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/safyayagi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
            <svg width="20" height="20" fill="black" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.8 0 53.5S24.09-1 53.79-1s53.79 24.2 53.79 54.5-24.08 54.6-53.79 54.6zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.6 0-37.6 15.8-43.8 31-2.3 5.5-2.8 13.2-2.8 20.9V448h-92.78s1.2-241.7 0-266.1h92.78v37.7c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.4-46.2 83.7-46.2 61 0 106.7 39.8 106.7 125.3V448z"/>
            </svg>
          </a>
        </div>

        </div>

     <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} Safya Yagi. All rights reserved.</p>
        </div>

    </footer>



    





  );
};

export default Footer;
