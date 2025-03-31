import React from 'react';
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
import { LanguageProvider } from './components/SetLanguage/LanguageContext';  
import Blogs from './components/Header/Container/Blogs';
import Pic2Card from './components/HeaderPages/ServicesCards/Pic2Card';
import Pic3Card from './components/HeaderPages/ServicesCards/Pic3Card';
import Pic4Card from './components/HeaderPages/ServicesCards/Pic4Card';
import Pic5Card from './components/HeaderPages/ServicesCards/Pic5Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <LanguageProvider>  {/* Wrap the app in LanguageProvider */}
      <Router>
        <Navbar />
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<VidoeBackGround />} />
          <Route path="/home" element={<Home />} />
          <Route path="/solutions" element={<OurSolutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Cards Routes */}
          <Route path="/process-technology" element={<Pic2Card />} />
          <Route path="/interdepartmental-efficiency" element={<Pic3Card />} />
          <Route path="/supply-chain-operations" element={<Pic4Card />} />
          <Route path="/performance-risk" element={<Pic5Card />} />
          
          {/* Error Route */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h2 style={{ color: 'red' }}>404 - Page Not Found</h2>
              <p>The page you're looking for doesn't exist. Please check the URL or go back to the homepage.</p>
            </div>
          } />
          
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        
        <Tooltip />
        
        <Footer /> 
      </Router>
    </LanguageProvider>
  );
}

export default App;
