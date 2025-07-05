/* src/pages/ProductDetail.js */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import PageWrapper from '../components/PageWrapper';
import './ProductDetail.css';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product)
    return (
      <PageWrapper>
        <h2>Product not found</h2>
        <Link to="/products">← Back to products</Link>
      </PageWrapper>
    );

  return (
    <PageWrapper>
      <div className="detail-banner" style={{ backgroundImage: `url(${product.image})` }} />
      <section className="detail-content">
        <img src={product.image} alt={product.title} />
        <div>
          <h1>{product.title}</h1>
          <p>{product.short}</p>
          {/* put longer description here if you have it */}
          <Link to="/products" className="back-btn">← All Products</Link>
        </div>
      </section>
    </PageWrapper>
  );
}
