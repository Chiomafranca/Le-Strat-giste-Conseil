import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import pic1 from '../HeaderPages/images/pic1.jpg'
import ServicesContents from './ServicesContents';

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    
      <div className="header-container">
      
        <div className="brand-title">Le Stratégiste</div>

       
        <div className="navbar-links d-none d-md-flex">
          <Link to="/" className="text-white text-decoration-none">Accueil</Link>
          <Link to="/services" className="text-white text-decoration-none">Services</Link>
          <Link to="/about" className="text-white text-decoration-none">À propos</Link>
        </div>

       
        <div className="contact-link d-none d-md-block">
          <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
        </div>

       
        <button className="navbar-toggler d-md-none" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

    
      <ul className={`list-unstyled d-md-none ${isMenuOpen ? 'show' : ''}`} id="mobile-menu">
        <li><Link to="/" className="text-white text-decoration-none">Accueil</Link></li>
        <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
        <li><Link to="/about" className="text-white text-decoration-none">À propos</Link></li>
        <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
      </ul>

      {/* BODY CONTENTS */}
      <div className="image-container ">
        <img src={pic1} alt="services images" className="full-width-img" />
        <div className="text-overlay">
          <h2>Nos Services</h2>
          <p >Nous offrons des services de haute qualité pour répondre à vos besoins. Du développement web à la consultation, notre équipe est là pour vous aider à réussir.</p>
        </div>
      </div>

      <ServicesContents/>
    </>
  );
};

export default Services;
