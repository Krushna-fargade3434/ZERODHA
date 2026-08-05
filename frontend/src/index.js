import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from './landing-page/Home/HomePage.js';
import Signup from './landing-page/signup/Signup.js';
import AboutPage from './landing-page/about/AboutPage.js';
import ProductsPage from './landing-page/products/ProductsPage.js';
import PricingPage from './landing-page/pricing/PricingPage.js';
import SupportPage from './landing-page/support/SupportPage.js';
import Navbar from './landing-page/Navbar.js'
import Footer from './landing-page/Footer.js'
import NotFound from './landing-page/NotFound.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductsPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
