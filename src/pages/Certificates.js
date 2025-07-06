import React from 'react';
import PageWrapper from '../components/PageWrapper';
import './Certificates.css';
import { motion } from 'framer-motion';

const Certificates = () => {
  return (
    <PageWrapper>
      {/* Banner Section */}
      <div className="certificates-banner">
        <motion.h1
          className="certificates-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Certificates & Awards
        </motion.h1>
      </div>

      {/* New Section - Factory Info */}
      <section className="factory-info-section">
        <div className="factory-info-container">
          {/* Left side */}
          <motion.div
            className="factory-info-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h5 className="factory-small-title">TÜRKİYE'S</h5>
            <h2 className="factory-main-title">
              LARGEST FULLY INTEGRATED EDIBLE OIL FACTORY WITH CRUSHING CAPACITY
              <img
                src="https://www.safyayagi.com/wp-content/uploads/2023/02/separator-1.png"
                alt="underline"
                className="underline-img"
              />
            </h2>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="factory-info-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>
              Safya carries out its oil production at the fully integrated edible oil factory with the largest crushing capacity in Türkiye, located in Mersin, within the body of Aves AŞ. Safya sunflower oil, which is produced by a fully automated system untouched by human hands throughout the entire production and offered from the field to the table, reflects the principle of “Same quality in the first and the one millionth bottle” with its quality and bottle design. Safya is produced in a fully integrated structure with the latest technology within the body of Aves, which carries out 35 percent of Türkiye’s oil supply alone and is also one of the largest producers of the sector in terms of exports.
            </p>
            <p>
              Safya follows and applies national and international food quality standards with its packaging series that refer to purity and cleanliness and its easy-to-use bottle design and logo that touches the purity and lightness of the oil.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Certificates List Section */}
<section className="certificates-list-section">
  <div className="certificates-list-container">
    {/* Left - List */}
    <div className="certificates-list-left">
      <ul className="certificate-items">
        <li>AVES GIMDES HALAL AND TAYYIB CERTIFICATE<br /><span className="sub">Halal and Tayyib certificate issued by GIMDES</span></li>
        <li>AVES HALAL 22-2013 PRODUCT DOCUMENT<br /><span className="sub">Bureau Veritas Halal Documentation</span></li>
        <li>ISO 27001 INFORMATION SECURITY MANAGEMENT SYSTEM CERTIFICATE</li>
        <li>KOSHER CERTIFICATE</li>
        <li>FSSC FOOD SAFETY SYSTEM CERTIFICATE TSE DOCUMENT</li>
        <li>OUR INFORMATION SECURITY POLICY</li>
        <li>EDITABLE SUNFLOWER OIL PRODUCT DOCUMENT</li>
        <li>US-FDA DOCUMENT</li>
        <li>ISO 9001 2015 TSE QUALITY MANAGEMENT SYSTEMS DOCUMENT</li>
        <li>ISO 14001-2015 TSE ENVIRONMENTAL MANAGEMENT SYSTEMS DOCUMENT</li>
        <li>ISO 45001-2018 TSE OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEMS DOCUMENT</li>
        <li>COVID 19 SAFE PRODUCTION DOCUMENT</li>
      </ul>
    </div>

    {/* Right - Image */}
    <div className="certificates-list-right">
      <img
        src="https://www.safyayagi.com/wp-content/uploads/2023/03/safya-dessert.jpg"
        alt="Safya Dessert"
      />
    </div>
  </div>
</section>


    </PageWrapper>
  );
};

export default Certificates;
