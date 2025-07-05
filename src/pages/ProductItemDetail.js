// src/pages/ProductItemDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import  sunflowerItems  from '../data/sunflowerItems';
import { cornItems } from '../data/cornItems';
import './ProductItemDetail.css';

const ProductItemDetail = () => {
  const { category, slug } = useParams();

  const dataSet = category === 'sunflower-oil' ? sunflowerItems : cornItems;
  const item = dataSet.find((i) => i.slug === slug);

  if (!item) {
    return <PageWrapper><p>Item not found</p></PageWrapper>;
  }

  return (
    <PageWrapper>
      {/* Top Banner */}
      <div className={`detail-banner ${category === 'sunflower-oil' ? 'sunflower-banner' : 'corn-banner'}`}>
        <h1>{item.title}</h1>
      </div>

      {/* Main Content */}
      <div className="item-detail-wrapper">
        {/* Main Image and Bullets */}
        <div className="item-info">
          <div className="item-image">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="item-bullets">
            <h3>Product Highlights</h3>
            <ul>
              {item.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Description */}
        <div className="item-desc">
          <h3>Description</h3>
          <p>{item.desc}</p>
        </div>

        {/* Extra Image Section */}
        <div className="item-extra">
          <h4>Packaging & Display</h4>
          <img src={item.extraImg} alt="Extra" />
        </div>

        {/* Back Button */}
        <div className="back-holder">
          <Link to={`/products/${category}`} className="back-btn">← Back to {category.replace('-', ' ')}</Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductItemDetail;
