// src/pages/CuisineChef.js
import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import './ProductDetail.css';

const CuisineChef = () => {
  return (
    <PageWrapper>
      {/* Specially Developed Section */}
      <motion.section
        className="flavorist-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="flavorist-title">
          SPECIALLY DEVELOPED FOR FLAVORISTS
          <img
            src="https://www.safyayagi.com/wp-content/uploads/2023/02/separator.png"
            alt="underline"
            className="underline-img"
          />
        </h2>
        <p className="flavorist-text">
          Safya Kitchen Chef product series was specially developed for flavorists. 4.5L X 4 Safya Cuisine Chef product series, which is produced considering the special needs of companies serving in the food sector, is suitable for professional kitchens such as in hotels, restaurants, cafeterias, patisseries, etc.
        </p>
      </motion.section>

      {/* Advantages Section */}
<section className="safya-advantages-section">
  <div className="safya-advantages-container">
    {/* Left Content */}
    <motion.div
      className="advantages-text"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h5 className="mini-title">SAFYA</h5>
      <h2 className="main-title">
        ADVANTAGES OF SAFYA CUISINE CHEF
        <img
          src="https://www.safyayagi.com/wp-content/uploads/2023/02/separator.png"
          alt="underline"
          className="underline-img"
        />
      </h2>
      <ul className="tick-list">
        <li>✔ Due to its formula specially developed for professional kitchens, there is no foaming and splashing causing oil to be wasted.</li>
        <li>✔ Since the oil does not foam during frying, the cooking process is observed much better.</li>
        <li>✔ It is resistant to high temperatures. Does not smoke or burn.</li>
        <li>✔ Due to the 6-stage production, the products are light and odorless.</li>
        <li>✔ The product, offered in 4-plastic bottles, provides the advantage of fresh use.</li>
        <li>✔ There is no dust, rust, and mold problem with the plastic bottles when compared to tin packages. It’s highly hygienic.</li>
        <li>✔ Its transparent packaging helps you to adjust the amount of use precisely.</li>
        <li>✔ Easy to carry.</li>
        <li>✔ Recyclable plastic bottles are environmentally friendly.</li>
      </ul>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="advantages-image"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img
        src="https://www.safyayagi.com/wp-content/uploads/2023/03/mutfak-sefi-dikey.jpg"
        alt="Chef"
      />
    </motion.div>
  </div>
</section>


{/* Dual Image Section */}
<section className="dual-oil-section">
  <div className="oil-container">
    <div className="oil-item">
      <img
        src="https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-45Lt-Mutfak-Sefi-Pet_en-570x684-1.jpg"
        alt="4,5X4L Cuisine Chef Sunflower Oil"
      />
      <p className="oil-label">4,5X4L Cuisine Chef Sunflower Oil</p>
    </div>
    <div className="oil-item">
      <img
        src="https://www.safyayagi.com/wp-content/uploads/2023/02/mutfaksefi-misir-570x684-1.jpg"
        alt="4,5X4L Cuisine Chef Corn Oil"
      />
      <p className="oil-label">4,5X4L Cuisine Chef Corn Oil</p>
    </div>
  </div>
</section>


    </PageWrapper>
  );
};

export default CuisineChef;
