// src/pages/SunflowerOil.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SunflowerOil.css';
//import sunflowerItems from '../data/sunflowerItems';

const sunflowerImages = [
  { id: 1, slug: '900ml-pet',  title: '900 mL PET Bottle', src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya_900mL-Harcialem-en-570x684-1.jpg' },
  { id: 2, slug: '1l-pet',    title: '1 L Safya Sultan',           src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/1LT_SafyaSultan-en-570x684-1.jpg' },
  { id: 3, slug: '1l-square', title: '1 L Pet Bottle',        src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya_1LT-Harcialem-en-570x684-1.jpg' },
  { id: 4, slug: '1l-flower', title: '1 L Flower Pet Bottle',     src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-1Lt-Cicekli-Pet_EN-570x684-1.jpg' },
  { id: 5, slug: '1.8l-pet',  title: '1 L Pet Bottle Squared',     src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/1Lt-Karepet-en-570x684-1.jpg' },
  { id: 6, slug: '2l-pet',    title: '1.8 L Pet Bottle',           src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya_1.8L-Pet-en-1-570x684-1.jpg' },
  { id: 7, slug: '2l-sultan', title: '2 L Safya Sultan',        src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya_2LT_SafyaSultan_en-570x684-1.jpg' },
  { id: 8, slug: '3l-square', title: '2 L Pet Bottle',        src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-2-Lt-Harcialem-en-570x684-1.jpg' },
  { id: 9, slug: '4l-square', title: '3 L Pet Bottle Squared',     src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-3Lt-Pet_en-570x684-1.jpg' },
  { id:10, slug: '4.5l-pet',  title: '4 L Pet Bottle Squared',         src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-4Lt-Pet_EN-570x684-1.jpg' },
  { id:11, slug: '5l-pet',    title: '4.5 L Pet Bottle Squared',           src: 'https://www.safyayagi.com/wp-content/uploads/2023/03/safya-45lt-pet_en.jpg' },
  { id:12, slug: '18l-tin',   title: '5 L Pet Bottle Squared',          src: 'https://www.safyayagi.com/wp-content/uploads/2023/02/Safya-5Lt-Sidel-Pet_EN-570x684-2.jpg' }
];

const SunflowerOil = () => (
  <PageWrapper>
    {/* banner */}
    <div className="detail-banner sunflower-banner">
      <h1>Sunflower Oil</h1>
    </div>

    {/* image gallery */}
    <section className="gallery-wrapper">
      {sunflowerImages.map(({ id, slug, title, src }) => (
        <Link to={`/item/sunflower-oil/${slug}`} className="gallery-link" key={id}>
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

    {/* back */}
    <div className="back-holder">
      <Link to="/products/sunflower-oil" className="back-btn">← Back to Products</Link>
    </div>
  </PageWrapper>
);

export default SunflowerOil;
