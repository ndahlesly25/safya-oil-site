// src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mjkrdbyb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert("There was a problem submitting the form.");
        }
      })
      .catch(() => {
        alert("There was a problem submitting the form.");
      });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <PageWrapper>
      <motion.div
        className="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Banner Section with Background Image */}
        <div className="contact-banner">
          <div className="banner-overlay">
            <h1>Contact Us</h1>
            <p>We are here to answer any questions you may have about our products and services.</p>
          </div>
        </div>

        {/* Contact + Info Section */}
        <div className="contact-main">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Get in Touch</h2>
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                  <input type="hidden" name="_captcha" value="false" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Write your message..." required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            ) : (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Thank you!</h3>
                <p>Your message has been successfully sent. We'll get back to you soon.</p>
              </motion.div>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p><strong>Factory:</strong><br />Toroslar Mh. Gizem Sk. No: 19 Akdeniz / Mersin, Turkey</p>
            <p><strong>North America:</strong><br />301 N St NE, Washington, DC 20002, USA</p>
            <p><strong>Asia:</strong><br />981 Silom Rd, Bangkok, 10500, Thailand</p>
            <p><strong>Phone:</strong><br />+90 536 914 69 15</p>
            <p><strong>Email:</strong><br /><a href="mailto:sales@safyayagi.com">sales@safyayagi.com</a></p>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <iframe
            title="Safya Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12288.659049337937!2d30.5233997!3d50.4501001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce67f0e50835%3A0x6a697e0e36e2e8c6!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1717600000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default Contact;
