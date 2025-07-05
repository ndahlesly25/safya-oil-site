// src/pages/CuisineChef.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import './ProductDetail.css';

const CuisineChef = () => {
  return (
    <PageWrapper>
      <div className="product-detail">
        <h1>Safya Cuisine Chef</h1>
        <img src="https://www.safyayagi.com/images/urun/safya-cuisine.png" alt="Safya Cuisine Chef" />
        <p>
          Developed for professional kitchens, Safya Cuisine Chef offers outstanding frying performance,
          long shelf life, and superior taste. It’s the first choice of top chefs.
        </p>
      </div>
    </PageWrapper>
  );
};

export default CuisineChef;
