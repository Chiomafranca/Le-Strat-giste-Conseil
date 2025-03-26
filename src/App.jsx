import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import OurSolutions from './components/Navbar/OurSolutions';
import VidoeBackGround from './components/Header/HeaderNav/VidoeBackGround';
import Services from './components/HeaderPages/Services';
import About from './components/HeaderPages/About';
import Contact from './components/HeaderPages/Contact';
import Home from './components/HeaderPages/Home';
import Footer from './components/FooterFoot/Footer';
import Tooltip from './components/Tooltip/Tooltip';

import './App.css';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VidoeBackGround />} />
        <Route path="/home" element={<Home />} />
        <Route path="/solutions" element={<OurSolutions/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for 404 page */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      
      <Tooltip/>
      
      <Footer /> 
    </Router>
  );
}

export default App;
