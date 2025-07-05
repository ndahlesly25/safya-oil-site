// src/pages/CornOil.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CornOil.css';

const cornImages = [
  { id: 1, slug: '1l-pet',        title: '900ml Pet Bottle',         src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-Corn-900mL-EN-570x684-1.jpg' },
  { id: 2, slug: '2l-pet',        title: '1 L Pet Bottle',         src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-Corn-1Lt-EN-570x684-1.jpg' },
  { id: 3, slug: '3l-pet',        title: '2 L Pet Bottle',         src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-Corn-2Lt-EN-570x684-1.jpg' },
  { id: 4, slug: '5l-pet',        title: '3 L Pet Bottle Squared',         src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-Corn-3Lt-EN-570x684-1.jpg' },
  { id: 5, slug: '18l-tin',       title: '4 L Pet Bottle Squared',        src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-Corn-4Lt-EN-570x684-1.jpg' },
  { id: 6, slug: 'bulk-ibc',      title: '5 L Pet Bottle Squared',        src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-Corn-5Lt-EN-570x684-1.jpg' },
  { id: 7, slug: 'bulk-flexi',    title: '4.5 L Pet Bottle Squared',      src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-Corn-4.5Lt-EN-570x684-1.jpg' },
 // { id: 8, slug: '1l-glass',      title: '1 L Glass',       src: 'hploapg' },
];

const CornOil = () => (
  <PageWrapper>
    <div className="detail-banner corn-banner">
      <h1>Corn Oil</h1>
    </div>

    <section className="gallery-wrapper">
      {cornImages.map(({ id, slug, title, src }) => (
        <Link to={`/item/corn-oil/${slug}`} className="gallery-link" key={id}>
          <motion.div
            className="product-card"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <img src={src} alt={title} />
            <p className="thumb-title">{title}</p>
            <span className="see-more">see more</span>
          </motion.div>
        </Link>
      ))}
    </section>

    <div className="back-holder">
      <Link to="/products/corn-oil" className="back-btn">← Back to Products</Link>
    </div>
  </PageWrapper>
);

export default CornOil;
