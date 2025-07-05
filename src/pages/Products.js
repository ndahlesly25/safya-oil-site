/* src/pages/Products.js */
import React from 'react';
import { products } from '../data/products';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => (
  <PageWrapper>
    {/* Banner */}
    <div className="products-banner">
      <h1>All Safya Products</h1>
    </div>

    {/* Grid */}
    <section className="products-grid">
      {products.map((p) => (
        <motion.div
          key={p.id}
          className="product-card"
          whileHover={{ y: -6, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
        >
          <Link to={`/products/${p.slug}`}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
          </Link>
        </motion.div>
      ))}
    </section>
  </PageWrapper>
);

export default Products;
