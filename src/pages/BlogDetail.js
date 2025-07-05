// src/pages/BlogDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs';
import './BlogDetail.css';
import PageWrapper from '../components/PageWrapper';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p>Blog not found.</p>;

  return (
    <PageWrapper>
      <div className="blog-detail">
        <img src={blog.image} alt={blog.title} className="main-image" />
        <h2>{blog.title}</h2>
        <p>{blog.fullText}</p>

        <div className="gallery">
          {blog.gallery.map((img, i) => (
            <img src={img} key={i} alt={`Gallery ${i}`} />
          ))}
        </div>

        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    </PageWrapper>
  );
};

export default BlogDetail;
