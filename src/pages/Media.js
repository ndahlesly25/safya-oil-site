// src/pages/Media.js
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import './Media.css';

const mediaItems = [
  {
    title: "Advertising Films",
    image: "https://www.safyayagi.com/images/galeri/video-1.jpg",
    link: "https://www.youtube.com/watch?v=1c0LZ5JXx0k"
  },
  {
    title: "Press Appearances",
    image: "https://www.safyayagi.com/images/galeri/basin-1.jpg",
    link: "https://www.safyayagi.com/galeri/basin-yansimalari"
  },
  {
    title: "Promotional Events",
    image: "https://www.safyayagi.com/images/galeri/video-2.jpg",
    link: "https://www.youtube.com/watch?v=Z2GrF7OMZ5U"
  }
];

const Media = () => {
  return (
    <PageWrapper>
      <motion.div
  className="media-page"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <div className="media-banner">
    <h1 className="media-title">Media Gallery</h1>
    <p className="media-subtitle">Explore our presence in advertising, press, and promotional events.</p>
  </div>

  <div className="media-grid">
    {mediaItems.map((item, index) => (
      <a
        key={index}
        href={item.link}
        className="media-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={item.image} alt={item.title} className="media-img" />
        <h3>{item.title}</h3>
      </a>
    ))}
  </div>
</motion.div>

    </PageWrapper>
  );
};

export default Media;
