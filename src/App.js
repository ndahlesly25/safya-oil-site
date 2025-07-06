// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TheStory from './pages/TheStory';
import Certificates from './pages/Certificates';
import Export from './pages/Export';
import Products from './pages/Products';
import SunflowerOil from './pages/SunflowerOil';
import CornOil from './pages/CornOil';
import CuisineChef from './pages/CuisineChef';
import Media from './pages/Media';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';
import ProductDetail from './pages/ProductDetail';
import ProductItemDetail from './pages/ProductItemDetail'; // ✅ This is the detail view for each oil item


function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corporate/about-us" element={<AboutUs />} />
        <Route path="/corporate/the-story" element={<TheStory />} />
        <Route path="/corporate/certificates" element={<Certificates />} />
        <Route path="/export" element={<Export />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/sunflower-oil" element={<SunflowerOil />} />
        <Route path="/products/corn-oil" element={<CornOil />} />
        <Route path="/products/cuisine-chef" element={<CuisineChef />} />
        <Route path="/media" element={<Media />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        

        {/* ✅ Handles all sunflower/corn product detail pages */}
        <Route path="/item/:category/:slug" element={<ProductItemDetail />} />
         
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
