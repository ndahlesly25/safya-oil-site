// src/pages/Home.js
import React, { useState, useEffect, useRef } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

const imageList = [
  'https://grace.com/content/dam/grace-site/english/hero/materials-technologies/mt-edible-oils-and-fats-sunflower-oil-bottle.jpg',
  'https://www.clinikally.com/cdn/shop/articles/Top_10_Benefits_of_Sunflower_Oil_for_Skin.png?v=1678691523',
  'https://www.pritikin.com/wp-content/uploads/2022/09/olive-oil-nutrition-facts.jpg',
  'https://www.oilexpeller.com/wp-content/uploads/2023/11/sunflower-seed-oil.jpg',
  'https://cdn.shopify.com/s/files/1/0709/5032/2394/files/360_F_823409450_9tdcdTmBQrgX4zrRoVjSnPtm2jIOF4kD.jpg'
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imageList.length);
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalRef.current);
    setTimeout(() => {
      if (!isHovered) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % imageList.length);
        }, 5000);
      }
    }, 100);
  };

  return (
    <PageWrapper>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Slideshow Section */}
        <section
          className="hero"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={imageList[currentIndex]}
              className="hero-background"
              style={{ backgroundImage: `url(${imageList[currentIndex]})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <div className="hero-overlay">
            <div className="hero-text">
              <h1 className="headline">Welcome to Safya Yagi</h1>
              <p className="subheadline">Healthy oils for a healthier life — inspired by tradition, driven by quality.</p>
              <a href="#product-showcase" className="cta-button">Explore Products</a>
            </div>
          </div>

          <div className="hero-dots">
            {imageList.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Highlight Section */}
        <section className="intro-highlight">
          <div className="highlight-text">
            <h2>Sunflower Oil & Corn Oil Suppliers</h2>
            <p>Discover the goodness of 100% pure vegetable oils, trusted by families and professionals around the world. Safya is the story of pure taste and keeping that taste alive for generations. The primary secret of the most ancient flavors of Anatolian cuisine and practical recipes of today’s tables is the same, purity and naturalness.</p>
            <br />
            <p>Safya edible oils produced by Aves, one of the largest 250 industrial enterprises of Türkiye, consolidates its brand commitment of “Same quality in the first bottle and in the one millionth bottle” with the power of technology and investments.</p>
            <br />
            <p>Aves, which has a large share in the supply and production of Turkish crude sunflower oil, produces 1 million tons of edible oil, pulp, and biodiesel per year, and 1500 tons of crushing, 700 tons of refinery, 1100 tons of filling oil on daily basis at the largest and fully integrated oil seed processing and biodiesel plant in Türkiye</p>
          </div>
          <div className="highlight-image">
            <img src="https://i2-prod.cornwalllive.com/incoming/article4408187.ece/ALTERNATES/s615b/0_GMP_DCM_080820Sunflowers_12JPG.jpg" alt="Pure Oils" />
          </div>
        </section>

        {/* Product Showcase Section */}
        <section id="product-showcase" className="product-showcase">
          <h2 className="section-title">Our Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya_900mL-Harcialem-en-570x684-1.jpg" alt="Sunflower Oil" />
              <h3>Safya 900 mL Pet Bottle</h3>
              <p></p>
            </div>
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/1LT_SafyaSultan-en-570x684-1.jpg" alt="Corn Oil" />
              <h3>1L Safya Sultan</h3>
              <p></p>
            </div>
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya_1LT-Harcialem-en-570x684-1.jpg" alt="Safya Cuisine Chef" />
              <h3>Safya 1 L Pet Bottle</h3>
              <p></p>
            </div>
          <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-1Lt-Cicekli-Pet_EN-570x684-1.jpg" alt="Corn Oil" />
              <h3>1 L Flower Pet Bottle</h3>
              <p></p>
            </div>
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/1Lt-Karepet-en-570x684-1.jpg" alt="Safya Cuisine Chef" />
              <h3>1 L Pet Bottle Squared</h3>
              <p></p>
            </div>
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya_1.8L-Pet-en-1-570x684-1.jpg" alt="1,8 L Pet Bottle" />
              <h3>1,8 L Pet Bottle</h3>
              <p></p>
            </div>
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya_2LT_SafyaSultan_en-570x684-1.jpg" alt="2L Safya Sultan" />
              <h3>2L Safya Sultan</h3>
              <p></p>
            </div>
          <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-2-Lt-Harcialem-en-570x684-1.jpg" alt="2 L Pet Bottle" />
              <h3>2 L Pet Bottle</h3>
              <p></p>
            </div>
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-3Lt-Pet_en-570x684-1.jpg" alt="3 L Pet Bottle Squared" />
              <h3>3 L Pet Bottle Squared</h3>
              <p></p>
            </div>
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-4Lt-Pet_EN-570x684-1.jpg" alt="4 L Pet Bottle Squared" />
              <h3>4 L Pet Bottle Squared</h3>
              <p></p>
            </div>
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/03/safya-45lt-pet_en.jpg" alt="4.5 L Pet Bottle Squared" />
              <h3>4.5 L Pet Bottle Squared</h3>
              <p></p>
            </div>
            <div className="product-card">
              <img src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-5Lt-Sidel-Pet_EN-570x684-2.jpg" alt="5 L Pet Bottle Squared" />
              <h3>5 L Pet Bottle Squared</h3>
              <p></p>
            </div>
            
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-wrapper">
            <h2>Our Mission</h2>
            <p>We aim to promote a healthy lifestyle by offering premium quality oils that blend nature with innovation.</p>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="newsletter-wrapper">
            <h3 className="newsletter-heading">Stay in Touch</h3>
            <p className="newsletter-subtext">Subscribe for industry insights, product updates, and nutrition tips.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </motion.div>
    </PageWrapper>
  );
};

export default Home;
