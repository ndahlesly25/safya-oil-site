// src/pages/Media.js
import React, { useState, useRef } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearchPlus,
  FaSearchMinus,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaShareAlt,
  FaTimes
} from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';
import './Media.css';


import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;



// Set pdf worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Media = () => {
  const carouselRef = useRef(null);
  const [view, setView] = useState('video');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const shareCatalog = () => {
    const url = window.location.origin + '/oil-site/public/safya-catalog.pdf';
    if (navigator.share) {
      navigator.share({
        title: 'Safya Product Catalog',
        url,
      });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <PageWrapper>
      <motion.div
        className="media-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Banner */}
        <div className="media-banner">
          <h1 className="media-title">Media</h1>
          <p className="media-subtitle">
            Explore our presence in advertising, press, and promotional events.
          </p>
        </div>

        {/* Buttons */}
        <div className="media-toggle-buttons">
          <button onClick={() => setView('video')} className={view === 'video' ? 'active' : ''}>
            Video Content
          </button>
          <button onClick={() => setView('catalog')} className={view === 'catalog' ? 'active' : ''}>
            Catalog
          </button>
        </div>

        {/* Video Section */}
        {view === 'video' && (
          <div className="video-carousel-wrapper">
            <button className="carousel-arrow left" onClick={scrollLeft}>
              <FaArrowLeft />
            </button>

            <div className="video-carousel" ref={carouselRef}>
              <div className="video-item">
                <iframe src="https://www.youtube.com/embed/PuSScsCi1Kk?" title="Video 1" allowFullScreen></iframe>
              </div>
              <div className="video-item">
                <iframe src="https://www.youtube.com/embed/jDRp2AblqPE?" title="Video 2" allowFullScreen></iframe>
              </div>
              <div className="video-item">
                <iframe src="https://www.youtube.com/embed/PuSScsCi1Kk?" title="Video 3" allowFullScreen></iframe>
              </div>
              <div className="video-item">
                <iframe src="https://www.youtube.com/embed/VOrj8avUEl8" title="Video 3" allowFullScreen></iframe>
              </div>
              <div className="video-item">
                <iframe src="https://www.youtube.com/embed/zKND4-Gtajc" title="Video 3" allowFullScreen></iframe>
              </div>
              
            </div>
            

            <button className="carousel-arrow right" onClick={scrollRight}>
              <FaArrowRight />
            </button>
          </div>
        )}

        {/* Catalog Section */}
        {view === 'catalog' && (
          <div className="catalog-viewer">
            <div className="catalog-controls">
              <button onClick={() => setScale((s) => Math.min(s + 0.2, 3))}><FaSearchPlus /></button>
              <button onClick={() => setScale((s) => Math.max(s - 0.2, 0.5))}><FaSearchMinus /></button>
              <button onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}><FaChevronLeft /></button>
              <span>{pageNumber} / {numPages}</span>
              <button onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}><FaChevronRight /></button>
              <button onClick={() => document.documentElement.requestFullscreen()}><FaExpand /></button>
              <button onClick={shareCatalog}><FaShareAlt /></button>
              <button onClick={() => setView('video')}><FaTimes /></button>
            </div>

            <div className="pdf-container">
              <Document
                file="/oil-site/public/safya-catalog.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} scale={scale} />
              </Document>
            </div>
          </div>
        )}
      </motion.div>
    </PageWrapper>
  );
};

export default Media;
