// src/pages/Export.js
import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import './Export.css';

const bannerImages = [
  "https://primalcom.com/wp-content/uploads/elementor/thumbs/The-Importance-of-Container-Depot-Management-Software--qsce3ufn5dnzvepeki3ai373qjj015yj1p2tkbn1g6.jpg",
  "https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-720.jpg",
  "https://www.black-sea.com.tr/wp-content/uploads/2024/06/sunflower-oil-1456x750.jpg",
  "https://greenvectoragro.com/wp-content/uploads/2025/01/SUNFLOWER-OIL-PRIVATE-LABEL-1.png"
];

const Export = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? bannerImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === bannerImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <PageWrapper>
      <motion.div
        className="export-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="export-banner-wrapper">
          <div className="export-banner-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {bannerImages.map((url, idx) => (
              <div className="banner-image" key={idx} style={{ backgroundImage: `url(${url})` }}></div>
            ))}
          </div>

          {/* Arrows */}
          <button className="nav-button prev" onClick={handlePrev}>&#10094;</button>
          <button className="nav-button next" onClick={handleNext}>&#10095;</button>

          {/* Dots */}
          <div className="dots-container">
            {bannerImages.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
              ></span>
            ))}
          </div>
        </div>

        <section className="export-content">
          <h1>Export</h1>
          <p>
            Safya is proud to deliver high-quality edible oils to international markets.
            With our strong production infrastructure and logistics, we serve global customers
            with consistency, safety, and efficiency.
          </p>
          <p>
            Our export operations span multiple countries, adapting to global demands while
            maintaining exceptional standards. We continue to grow internationally by building
            strong partnerships and reliable supply chains.
          </p>
        </section>
      </motion.div>
    </PageWrapper>
  );
};

export default Export;