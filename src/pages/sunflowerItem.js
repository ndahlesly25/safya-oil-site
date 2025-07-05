// src/pages/SunflowerItem.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import sunflowerItems from '../data/sunflowerItems'; // ✅ Correct import

const SunflowerItem = () => {
  const { slug } = useParams();
  const item = sunflowerItems.find(i => i.slug === slug);

  if (!item) {
    return (
      <PageWrapper>
        <h2>Item not found</h2>
        <Link to="/products/sunflower-oil">← Back to Sunflower Oil</Link>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="detail-banner sunflower-banner">
        <h1>{item.title}</h1>
      </div>

      <div className="item-detail">
        <img src={item.img} alt={item.title} className="main-img" />

        <div className="item-info">
          <h2>Key Benefits</h2>
          <ul>
            {item.bullets.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="desc-section">
        <h2>Description</h2>
        <p>{item.desc}</p>

        <h3>More Product View</h3>
        <img src={item.extraImg} alt="extra" className="extra-img" />
      </div>

      <div className="back-holder">
        <Link to="/products/sunflower-oil" className="back-btn">← Back to Sunflower Oil</Link>
      </div>
    </PageWrapper>
  );
};

export default SunflowerItem;
