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

const aboutSavkaImages = [
  "https://www.safyayagi.com/wp-content/uploads/2023/03/aves-ship.jpg",
  "https://www.safyayagi.com/wp-content/uploads/2023/03/aves-working.jpg",
  "https://www.safyayagi.com/wp-content/uploads/2023/03/aves-image.jpg",
  "https://www.safyayagi.com/wp-content/uploads/2023/03/aves-logo.jpg",
  "https://www.safyayagi.com/wp-content/uploads/2023/03/aves-men-working.jpg"
];

const Export = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSavkaIndex, setCurrentSavkaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSavkaIndex((prev) => (prev + 1) % aboutSavkaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Fix: Define missing handlers
  const handleSavkaPrev = () => {
    setCurrentSavkaIndex((prev) =>
      prev === 0 ? aboutSavkaImages.length - 1 : prev - 1
    );
  };

  const handleSavkaNext = () => {
    setCurrentSavkaIndex((prev) =>
      prev === aboutSavkaImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <PageWrapper>
      <motion.div className="export-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {/* Banner Slider */}
        <div className="export-banner-wrapper">
          <div className="export-banner-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {bannerImages.map((url, idx) => (
              <div key={idx} className="banner-image" style={{ backgroundImage: `url(${url})` }}></div>
            ))}
          </div>
          <button className="nav-button prev" onClick={() => setCurrentIndex(currentIndex === 0 ? bannerImages.length - 1 : currentIndex - 1)}>&#10094;</button>
          <button className="nav-button next" onClick={() => setCurrentIndex((currentIndex + 1) % bannerImages.length)}>&#10095;</button>
          <div className="dots-container">
            {bannerImages.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </div>

        {/* Export Info Section */}
        <section className="export-info-section">
          <motion.div className="export-info-container" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <div className="export-info-left">
              <h2>
                SIX COUNTRIES, NINE OFFICES, MORE THAN FIVE HUNDRED EMPLOYEES
                <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/separator-slider.png" alt="underline" className="underline-img" />
              </h2>
            </div>
            <div className="export-info-right">
              <p>We are proud of being among the top 500 exporters of Türkiye with the high trade volume we have established without compromising on quality since our foundation.</p>
              <p>With our extensive export network from the United States to Japan, we export edible oil to over 70 countries on six continents.</p>
              <p>Our production facility with a capacity of 1 million located in Mersin, Türkiye’s gateway to the world; we serve the whole world with our third largest oil and edible oil storage facility in Türkiye with a capacity of 220 thousand cubic meters, and our SAVKA offshore ship loading/discharging port.</p>
            </div>
          </motion.div>
        </section>

        {/* About AVES Gold Banner */}
        <motion.section className="about-aves-banner" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="about-aves-content">
            <h2>ABOUT AVES</h2>
            <p>With more than 25 years of experience in international commodity trade, AVES is one of the most significant shareholders in Türkiye’s crude sunflower oil supply and production through its companies around the world.</p>
            <p>AVES is engaged in the production and international trade of edible oils, biodiesel production, edible oil storage, real estate sector, and offshore ship loading and unloading platform. Aves serves in the national and international oil market, retail, and HORECA, with the SAFYA brand established in 2013.</p>
          </div>
        </motion.section>

        {/* About SAVKA Section */}
        <section className="about-savka-section">
          <motion.div className="about-savka-left" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h3 className="about-savka-heading">ABOUT SAVKA</h3>
            <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/separator-1.png" alt="underline" className="underline-img" />
            <p>SAVKA is the only facility with a sea platform 5 kilometers off the coast, at a draft of 12 meters, with a capacity of 80,000 DWT, where two ships can dock, unload and load simultaneously...</p>
            <p>The East and West Storage Facilities of Aves Mersin Terminal consist of 46 tanks with a capacity of 220 thousand cubic meters and volumes ranging from 1000 cubic meters to 15 thousand cubic meters.</p>
          </motion.div>
          <motion.div className="about-savka-right" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <div className="savka-slider">
              <div className="savka-image" style={{ backgroundImage: `url(${aboutSavkaImages[currentSavkaIndex]})` }}></div>
              <button className="nav-button prev" onClick={handleSavkaPrev}>&#10094;</button>
              <button className="nav-button next" onClick={handleSavkaNext}>&#10095;</button>
            </div>
          </motion.div>
        </section>
      </motion.div>

{/* Full-width Map Section */}
<section className="map-section">
  <img
    src="https://safya.com.tr/wp-content/uploads/2022/08/safya-harita.jpg"
    alt="Global Export Map"
    className="map-image"
  />
</section>

    </PageWrapper>
  );
};

export default Export;
