// src/pages/CornItem.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { cornItems } from '../data/cornItems';
import './ProductItem.css';

const CornItem = () => {
  const { slug } = useParams();
  const item = cornItems.find(i => i.slug === slug);

  if (!item) return <h2 style={{ padding: '4rem 2rem' }}>Item not found.</h2>;

  return (
    <PageWrapper>
      <div className="detail-banner corn-banner">
        <h1>{item.title}</h1>
      </div>

      <section className="detail-content">
        <img src={item.img} alt={item.title} />
        <div className="detail-text">
          <h3 className="feature-heading">Key Features</h3>
          <ul className="bullet-list">
            {item.bullets.map(b => <li key={b}>{b}</li>)}
          </ul>

          <h3 className="description-heading">Description</h3>
          <p className="description">{item.desc}</p>

          <h4 className="extra-heading">Product in use</h4>
          <img src={item.extraImg} alt={`${item.title} extra`} className="extra-img" />
        </div>
      </section>

      <div className="back-holder">
        <Link to="/products/corn-oil" className="back-btn">← Back to Corn Oil</Link>
      </div>
    </PageWrapper>
  );
};

export default CornItem;
