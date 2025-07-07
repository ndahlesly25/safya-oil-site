// src/pages/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import blogs from '../data/blogs';
import './Blog.css';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <PageWrapper>
      <motion.div
        className="blog-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        


        
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <Link to={`/blog/${blog.id}`} className="read-more">Read More →</Link>
            </div>
          ))}
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default Blog;
