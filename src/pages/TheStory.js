// src/pages/TheStory.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import './TheStory.css';

const TheStory = () => {
  return (
    <PageWrapper>
      {/* Banner Section */}
      <div className="story-banner">
        <motion.h1
          className="story-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          The Story of Safya
        </motion.h1>
      </div>

      {/* Content Section */}
      <motion.div
        className="the-story-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* SAFYA Section */}
        <section className="safya-kitchen-section">
          <div className="safya-kitchen-container">

    <motion.div
    className="safya-kitchen-headings"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h5 className="safya-small-title">SAFYA</h5>
    <h2 className="safya-main-title">
      THE PURE TASTE OF A MOTHER'S KITCHEN
      <img
        src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/separator-slider.png"
        alt="underline"
        className="underline-img"
      />
    </h2>
  </motion.div>

  
  <motion.div
    className="safya-kitchen-content"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <p>
      The kitchen is the heart of a home. The tables that bring the whole family together and the scents that nourish our most precious childhood memories belong to the tastes cooked in our mothers’ kitchen.
    </p>
    <br />
    <p>
      So, we as Safya, started off to convey our mothers’ delicious dishes into today’s kitchens.
    </p>
  </motion.div>
</div>


          {/* Yellow Quote Box */}
          <motion.div
            className="safya-quote-box yellow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>
              SAFYA HAS THE PUREST FORM OF TASTE IN ITS NAME
              <img
                src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/separator-slider.png"
                alt="underline"
                className="underline-img"
              />
            </h3>
            <div className="quote-paragraphs">
              <p>Once upon a time, there lived a mother, “Safya,” whose delicious home-cooked meals were legendary. The dishes that Safya prepared with her skillful hands were so popular that she was asked to cook at every wedding. The guests would arrive at the weddings with unusal excitement when they learned that Safya had prepared the food.</p>
              <br/>
              <p>Safya always cooked with pure sunflower oil. When asked about the secret of her cooking, her answer was always the same: Purity and naturalness.</p>
              <br/>
              <p>We got our inspiration of pure sunflower oil from that precious mother, Safya. We set out to bring pure sunflower oil, the secret behind Safya’s delicious meals, to the tables of Türkiye and the world. We crowned the name of our Safya sunflower oil, which does not compromise on quality and taste, with her honorable name.</p>
            </div>
          </motion.div>
        </section>
      </motion.div>


      {/* State-of-the-Art Innovation Section */}
<section className="innovation-section">
  <div className="innovation-container">
    {/* Left Side Image */}
    <motion.div
      className="innovation-image"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img
        src="https://www.safyayagi.com/wp-content/uploads/2023/03/safyanin-hikayesi-yuksek-inovasyon-1.jpg"
        alt="State-of-the-art lab"
      />
    </motion.div>

    {/* Right Side Text */}
    <motion.div
      className="innovation-text"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="innovation-title">
        STATE-OF-THE-ART INNOVATION LIES BEHIND THIS PURITY AND TASTE
        <img
          src="https://safyasunfloweroil.com/wp-content/uploads/2024/05/separator-slider.png"
          alt="underline"
          className="underline-img"
        />
      </h2>
      <p>
        Our inspiration comes from the talented mothers of Anatolia, and our quality stems from our belief in innovation.
        We closely follow food technologies to bring sunflower oil’s purest and most delicious form to your tables.
        Therefore, the laboratories of our fully integrated production facility located in Mersin, Türkiye’s gateway to the world,
        use state-of-the-art technologies. We work non-stop 24/7 in our state-of-the-art laboratories and meticulously control every
        stage of our production.
      </p>
    </motion.div>
  </div>
</section>


      {/* New Background Image Section */}
      <section className="clean-world-section">
  <div className="clean-world-overlay"></div>
    <div className="clean-world-content">
      {/* Left Side Titles */}
      <div className="clean-world-left">
        <h5 className="small-title">SAFYA</h5>
        <h2 className="main-title">
          EXISTS FOR A CLEAN WORLD
        </h2>
      </div>

      {/* Right Side Paragraphs */}
      <div className="clean-world-right">
        <p>
          The only real legacy we can give our children is to leave them a livable world. Therefore, preventing environmental pollution is one of the most important focal points of our work. We strive for a sustainable world in all our work, from design to production, from logistics to end-user experience.
        </p>
        <p>
          Our work for a sustainable world starts from the first stage of production. In our production facility, where we make all the necessary infrastructure investments to prevent environmental pollution, we continue our production without using any substances that harm human health.
        </p>
        <p>
          The decisions we take on behalf of the environment are not limited to our production: We also work hard to prevent waste oils from mixing with water and to recycle them. In the projects we have developed in this area, we encourage end users to save their waste oil. With our waste oil project that we started with Turkey, we are working to create recycling awareness not only in Turkey but also in the world.
        </p>
      </div>
    </div> 
</section>


{/* Empowered by Strong Women Section */}
<section className="empowered-women-section">
  <div className="empowered-women-container">
    {/* Left Text */}
    <motion.div
      className="empowered-women-text"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="empowered-title">
        THIS BRAND IS EMPOWERED BY STRONG WOMEN
      </h2>
      <p>
        We take our name from a precious mother of Anatolia and our strength from our female employees because we believe that women’s employment is one of the most critical keys to social progress. Therefore, we are proud of being one of the brands that employ the highest number of female employees in Türkiye, with our HR policies prioritizing women’s employment.
      </p>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="empowered-women-image"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img
        src="https://www.safyayagi.com/wp-content/uploads/2023/03/kadin-calisan-1.jpg"
        alt="Strong Women"
      />
    </motion.div>
  </div>
</section>


    </PageWrapper>
  );
};

export default TheStory;
