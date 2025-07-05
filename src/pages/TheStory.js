// src/pages/TheStory.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const TheStory = () => {
  return (
    <PageWrapper>
      <motion.div
        className="the-story-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ padding: '2rem' }}
      >
        <h2>The Story of Safya</h2>
        <p>
          Safya is a leading edible oil brand established with a commitment to quality, innovation, and healthy living.
          From sourcing the finest seeds to refining with state-of-the-art technology, Safya embodies purity and excellence in every drop.
        </p>
        <p>
          Over the years, Safya has grown into a household name, trusted by families and chefs alike. Our journey continues
          with a dedication to sustainable practices and global standards.
        </p>
      </motion.div>
    </PageWrapper>
  );
};

export default TheStory;
