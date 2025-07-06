// src/pages/Home.js
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

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



const AnimatedCounter = () => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = 70;
      const duration = 1000; // 1 second
      const stepTime = Math.floor(duration / end);

      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(counter);
      }, stepTime);
    }
  }, [inView]);

  return (
    <span ref={ref} className="badge-number">
      {count}+
    </span>
  );
};



  return (
    <PageWrapper>
      <motion.div className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <section className="hero" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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
              <h1 className="headline">Safya Yagi</h1>
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
          <motion.div
            className="highlight-images"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="main-img-wrapper">
              <motion.img
                src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/ab-11-1.jpeg"
                alt="Main Visual"
                className="main-img"
                whileHover={{ scale: 1.03 }}
              />
              <motion.img
                src="https://i2-prod.cornwalllive.com/incoming/article4408187.ece/ALTERNATES/s615b/0_GMP_DCM_080820Sunflowers_12JPG.jpg"
                alt="Decorative Sunflower"
                className="decorative-img"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="highlight-text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>
              SAFYA
              <img
                src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/separator.png"
                alt="underline"
                className="underline-img"
              />
            </h2>
            <div className="text-with-float-image">
              <motion.img
                src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/Safya-Motto.png"
                alt="Oil Icon"
                className="floating-small-img"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
              <p>
                Safya is the story of pure taste and keeping that taste alive for generations. The primary secret of the most ancient flavors of Anatolian cuisine and practical recipes of today’s tables is the same, purity and naturalness.
              </p>
              <p>
                Therefore, Safya, an award winner of superior taste, promises all food lovers the purest and most unforgettable tastes of Turkish cuisine.
              </p>
              <p>
                Safya edible oils produced by Aves, one of the largest 250 industrial enterprises of Türkiye, consolidates its brand commitment of “Same quality in the first bottle and in the one millionth bottle” with the power of technology and investments.
              </p>
              <p>
                Aves, which has a large share in the supply and production of Turkish crude sunflower oil, produces 1 million tons of edible oil, pulp, and biodiesel per year, and 1500 tons of crushing, 700 tons of refinery, 1100 tons of filling oil on daily basis at the largest and fully integrated oil seed processing and biodiesel plant in Türkiye
              </p>
            </div>
          </motion.div>
        </section>

        {/* Product Showcase Section */}
        <section id="product-showcase" className="product-showcase">
          <h2 className="section-title">SAFYA PRODUCTS<img
                src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/separator.png"
                alt="underline"
                className="underline-img"
              />
            </h2>
          <div className="product-category-row">
            {/* Product categories go here (Sunflower, Corn, Cuisine) */}
            {['sunflower', 'corn', 'cuisine'].map((category) => (
              <div key={category} className="product-category-block">
                <h3 className="category-title">{category === 'cuisine' ? 'Kitchen Chef' : `${category.charAt(0).toUpperCase() + category.slice(1)} Oil`}</h3>
                <div className="product-grid">
                  {products.filter(p => p.category === category).slice(0, 3).map((prod) => (
                    <motion.div
                      key={prod.id}
                      className="product-card"
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <img src={prod.image} alt={prod.title} className="w-full h-64 object-contain" />
                      <h4 className="text-lg font-bold mt-2">{prod.title}</h4>
                      <p className="text-sm text-gray-600">{prod.short}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="all-products-wrapper">
                  <Link to={`/products/${category}-oil`} className="all-products-btn">SEE ALL PRODUCTS</Link>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Award Section */}
<section className="award-section">
  <div className="award-content">
    <motion.img
      src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/taste-award.jpg"
      alt="Taste Award"
      className="award-img"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="award-text">
      <h2>
        THE PUREST STATE OF TASTE, NOW REGISTERED!
        <img
          src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/separator.png"
          alt="underline"
          className="underline-img"
        />
      </h2>
      <p> The flavor of Safya has also been officially registered by the International Taste Institute. Safya Sunflower Oil won the “Superior Taste Award” in 2022 by receiving a successful result from the taste assessment realized by the world’s prominent chefs and sommeliers.
      </p>
    </div>
  </div>
</section>


{/* Export Section */}
<section className="export-section">
  <div className="export-container">
    <div className="export-image-box">
      <img
        src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/sunflower-world2.png"
        alt="Sunflower World"
        className="export-img"
      />
      <div className="export-badge">
        <AnimatedCounter />
        <p className="badge-label">EXPORT TO COUNTRIES</p>
      </div>
    </div>

    <div className="export-text-box">
      <h4>SAFYA</h4>
      <h2>
        EXPORT
        <img
          src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/separator.png"
          alt="underline"
          className="underline-img"
        />
      </h2>
      <p>We are proud of being among the top 500 exporters of Türkiye with the high trade volume we have established without compromising on quality since our foundation.</p>
      <p>With our wide export network from the United States to Japan, we export edible oil to over 70 countries in 6 continents.</p>
      <p>Our production facility with a capacity of 1 million located in Mersin, Türkiye’s gateway to the world; we serve the whole world with our third largest oil and edible oil storage facility in Türkiye with a capacity of 220 thousand cubic meters and our SAVKA offshore ship loading/discharging port.</p>
    </div>
  </div>
</section>







       

        

      </motion.div>
    </PageWrapper>
  );
};

export default Home;
