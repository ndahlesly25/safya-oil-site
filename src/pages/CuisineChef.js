//  src/pages/CuisineChef.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import './ProductDetail.css';

const gallery = [
  {
    id: 1,
    title: 'Cuisine Chef 18 L',
    thumb: 'https://www.safyayagi.com/images/urun/safya-cuisine-thumb.jpg',
    large: 'https://www.safyayagi.com/images/urun/safya-cuisine.png',
  },
  // add more pack shots if you like …
];

const CuisineChef = () => {
  const [active, setActive] = useState(gallery[0]);
  const nav = useNavigate();

  return (
    <PageWrapper>
      <section className="detail-banner" style={{ backgroundImage: `url(${active.large})` }} />

      <div className="detail-content">
        <motion.img
          key={active.id}
          src={active.large}
          alt={active.title}
          className="detail-main-img"
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ type: 'spring', stiffness: 260 }}
        />

        <div className="detail-text">
          <h1>Safya Cuisine Chef</h1>
          <p>
            Developed for professional kitchens, Safya Cuisine Chef delivers outstanding frying
            performance, a long fry‑life and a clean flavour profile that lets ingredients shine.
          </p>
          {/* optional illustration */}
          {/* ↓‑‑ optional medium illustration slot */}
          <img
            className="medium-illustration"
            src="https://www.safyayagi.com/wp-content/uploads/2023/03/hakkimizda-uretim.jpg"
            alt="Production Facility"
          />
        </div>
      </div>

      <div className="thumb-strip">
        {gallery.map(img => (
          <motion.button
            key={img.id}
            className={`thumb ${active.id === img.id ? 'active' : ''}`}
            onClick={() => setActive(img)}
            whileHover={{ scale: 1.05 }}
          >
            <img src={img.thumb} alt={img.title} />
            <span>{img.title}</span>
          </motion.button>
        ))}
      </div>

      <div className="back-wrapper">
        <button className="back-btn" onClick={() => nav(-1)}>
          ← Back to Products
        </button>
      </div>
    </PageWrapper>
  );
};

export default CuisineChef;

