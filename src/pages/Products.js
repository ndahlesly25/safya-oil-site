// src/pages/Products.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import './Products.css';
import './ProductDetail.css';


const Products = () => {
  return (
    <PageWrapper>
      <motion.div
        className="products-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="products-hero">
          <div className="hero-content">
            <h1>Our Products</h1>
            <p>Produced in world-class facilities using the latest technology and food safety systems.</p>
          </div>
        </section>

        <section className="product-cards">
          <div className="product-card">
            <img src="https://www.safyayagi.com/images/urun/safya-aycicek-yagi.png" alt="Sunflower Oil" />
            <h3>Sunflower Oil</h3>
            <p>High quality, 100% pure sunflower oil for healthy and delicious meals.</p>
            <a href="/products/sunflower-oil" className="product-link">Learn More</a>
          </div>

          <div className="product-card">
            <img src="https://www.safyayagi.com/images/urun/safya-misir-yagi.png" alt="Corn Oil" />
            <h3>Corn Oil</h3>
            <p>Golden corn oil rich in taste and ideal for everyday cooking.</p>
            <a href="/products/corn-oil" className="product-link">Learn More</a>
          </div>

          <div className="product-card">
            <img src="https://www.safyayagi.com/images/urun/safya-cuisine.png" alt="Cuisine Chef" />
            <h3>Safya Cuisine Chef</h3>
            <p>Professional-grade oil tailored for high performance in gourmet kitchens.</p>
            <a href="/products/cuisine-chef" className="product-link">Learn More</a>
          </div>
        </section>
      </motion.div>
    </PageWrapper>
  );
};

export default Products;
