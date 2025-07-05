// src/pages/SunflowerOil.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import './ProductDetail.css';

const SunflowerOil = () => {
  return (
    <PageWrapper>
      <div className="product-detail">
        <h1>Sunflower Oil</h1>
        <img src="https://www.safyayagi.com/images/urun/safya-aycicek-yagi.png" alt="Sunflower Oil" />
        <p>
          Safya Sunflower Oil is 100% pure and natural, extracted using the most advanced refining
          processes. It’s rich in vitamin E, low in saturated fat, and perfect for both cooking and
          frying.
        </p>
      </div>
    </PageWrapper>
  );
};

export default SunflowerOil;