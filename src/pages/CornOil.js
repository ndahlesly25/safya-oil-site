// src/pages/CornOil.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import './ProductDetail.css';

const CornOil = () => {
  return (
    <PageWrapper>
      <div className="product-detail">
        <h1>Corn Oil</h1>
        <img src="https://www.safyayagi.com/images/urun/safya-misir-yagi.png" alt="Corn Oil" />
        <p>
          Safya Corn Oil is ideal for everyday cooking. It is cholesterol-free, rich in polyunsaturated
          fats, and gives food a great natural flavor.
        </p>
      </div>
    </PageWrapper>
  );
};

export default CornOil;
