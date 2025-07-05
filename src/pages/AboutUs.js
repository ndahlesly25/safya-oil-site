// src/pages/About.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import './About.css';
import CountUp from 'react-countup';
import { FaIndustry, FaTint, FaFlask, FaTruckMoving } from 'react-icons/fa';

const About = () => {
  return (
    <PageWrapper>
      <div className="about-page">
        {/* Hero Banner */}
        <div className="about-hero-banner">
          <h1 className="about-heading">CORPORATE</h1>
        </div>

        <section className="about-start section">
  <div className="about-container">
    
    <div className="about-writeup">
      <h2>Safya’s Journey of Purity</h2>
      <p>
        Safya is produced by Aves, one of the largest 250 industrial enterprises of Türkiye.
        With a fully integrated seed processing and biodiesel plant, Aves is proud to deliver consistent
        high-quality sunflower oil to over 40 countries around the world.
      </p>
      <p>
        Each drop of Safya oil is the result of world-class infrastructure, advanced R&D, and a passion
        for healthy living. Our products are consumed globally by millions who believe in nourishing
        families with natural and trusted ingredients.
      </p>
    </div>

    <div className="about-image1">
      <img
        src="https://www.safyayagi.com/wp-content/uploads/2023/03/hakkimizda-uretim.jpg"
        alt="About Safya"
      />
    </div>

  </div>
</section>


        {/* Stats Section */}
<section className="about-stats">
  <div className="stats-wrapper">
    <h2 className="stats-heading">1 MILLION TONS PER YEAR</h2>
    <p className="stats-subheading">Total Production Capacity</p>

    <div className="stats-container">
      <div className="stat-item">
        <FaIndustry className="stat-icon" />
        <h3><CountUp end={450000} duration={3} separator="," /></h3>
        <p>Tons of Crushing</p>
      </div>
      <div className="stat-item">
        <FaTint className="stat-icon" />
        <h3><CountUp end={200000} duration={3} separator="," /></h3>
        <p>Tons of Refined Oil</p>
      </div>
      <div className="stat-item">
        <FaFlask className="stat-icon" />
        <h3><CountUp end={300000} duration={3} separator="," /></h3>
        <p>Tons of Filling Oil</p>
      </div>
      <div className="stat-item">
        <FaTruckMoving className="stat-icon" />
        <h3><CountUp end={50000} duration={3} separator="," /></h3>
        <p>Tons of Biodiesel</p>
      </div>
    </div>
  </div>
</section>

        {/* Intro Section */}
        <section className="about-section intro">
          <div className="about-container">
            <div className="about-image">
              <img
                src="https://www.safyayagi.com/wp-content/uploads/2023/03/hakkimizda-uretim.jpg"
                alt="About Safya"
              />
            </div>
            <div className="about-text">
              <h2>Safya’s Journey of Purity</h2>
              <p>
                Safya is produced by Aves, one of the largest 250 industrial enterprises of Türkiye.
                With a fully integrated seed processing and biodiesel plant, Aves is proud to deliver consistent
                high-quality sunflower oil to over 40 countries around the world.
              </p>
              <p>
                Each drop of Safya oil is the result of world-class infrastructure, advanced R&D, and a passion
                for healthy living. Our products are consumed globally by millions who believe in nourishing
                families with natural and trusted ingredients.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;
