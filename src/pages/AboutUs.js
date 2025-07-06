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
          <h1 className="about-heading">ABOUT US</h1>
        </div>

        <section className="about-story-section">
      <div className="about-content">
        {/* Left Side - Heading */}
        <div className="about-heading">
          <h2>SAFYA</h2>
          <h2>
            THE STORY OF PURE TASTE AND KEEPING THAT TASTE ALIVE FOR GENERATIONS
            <img
              src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/separator-slider.png"
              alt="underline"
              className="underline-separator"
            />
          </h2>
        </div>

        {/* Right Side - Paragraphs */}
        <div className="about-paragraphs">
          <p>
            Safya is the story of pure taste and keeping that taste alive for generations. The primary secret of the most ancient flavors of Anatolian cuisine and practical recipes of today’s tables is the same; purity and naturalness.
          </p>
          <p>
            Therefore, Safya, an award winner of superior taste, promises all food lovers the purest and most unforgettable flavors of Turkish cuisine.
          </p>
          <p>
            Safya edible oils, Safya sunflower oil produced by Aves, one of the largest 250 industrial enterprises of Türkiye, consolidates its brand commitment of “Same quality in the first bottle and in the one millionth bottle” with the power of technology and investments.
          </p>
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
      <div className="image-caption-box">
        <div className="caption-number">70+</div>
        <div className="caption-text">EXPORT TO COUNTRIES</div>
      </div>
    </div>
    <div className="about-text">
      <h5 className="small-heading">TÜRKİYE'NİN</h5>
      <h2 className="big-heading">
        LARGEST FULLY INTEGRATED<br />
        OIL SEED PROCESSING<br />
        AND BIODIESEL PLANT
      </h2>
      <img
        src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/separator-slider.png"
        alt="underline"
        className="underline-img"
      />
      <p>
        Aves, which has a large share in the supply of Turkish crude sunflower oil, produces 1 million tons of edible oil, pulp, and biodiesel per year, 1500 tons of crushing, and 600 tons of refinery oil daily at the largest and fully integrated oil seed processing and biodiesel plant in Türkiye established on 120 decares in Mersin.
      </p>
      <br />
      <p>
        AVES, which can carry out all kinds of production processes from the field to the consumer thanks to Safya, which guarantees the same quality in the first and the one-millionth bottle, is increasing its market share in Türkiye and abroad every passing day.
      </p>
      <br />
      <p>
        In the AVES edible oil facility, high-quality production is carried out in laboratories equipped with the latest technology at international standards, with 24/7 monitoring and analysis of samples obtained at every stage of production.
      </p>
    </div>
  </div>
</section>

      </div>
    </PageWrapper>
  );
};

export default About;
