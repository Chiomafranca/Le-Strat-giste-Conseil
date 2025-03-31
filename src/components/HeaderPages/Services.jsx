import React, { useState, useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom'; 
import { useLanguage } from '../SetLanguage/LanguageContext'; 
import './Services.css'; 
import pic1 from '../HeaderPages/images/pic1.jpg'; 
import ServicesContents from './ServicesContents';

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false); 
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 } // Adjust visibility trigger
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      {/* Header Section */}
            <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid d-flex justify-content-between">
            {/* Brand */}
            <Link to="/" className="navbar-brand text-light">Le Stratégiste</Link>
        
            {/* Toggler Button */}
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
        
            {/* Navbar Links */}
            <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav ms-auto d-flex flex-lg-row flex-column gap-2 gap-lg-5">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/services">
                    {language === 'en' ? 'Services' : 'Services'}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/about">
                    {language === 'en' ? 'About' : 'À propos'}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/contact">
                    {language === 'en' ? 'Contact' : 'Contact'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      {/* Mobile Menu */}
      <ul className={`list-unstyled d-md-none ${isMenuOpen ? 'show' : 'd-none'}`} id="mobile-menu">
        <li>
          <Link to="/" className="text-white text-decoration-none">
            {language === 'fr' ? 'Accueil' : 'Home'}
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-white text-decoration-none">
            {language === 'fr' ? 'Services' : 'Services'}
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white text-decoration-none">
            {language === 'fr' ? 'À propos' : 'About'}
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white text-decoration-none">
            {language === 'fr' ? 'Contact' : 'Contact'}
          </Link>
        </li>
      </ul>

      {/* Image Section */}
      <div className="parallax-container">
        <div className="image-container position-relative">
          <img
            src={pic1}
            alt="services images"
            className="full-width-img w-100 opacity-100"
          />
        
          {/* Text Overlay with Animation */}
          <div ref={textRef} className={`text-overlay position-absolute top-50 start-50 translate-middle text-center opacity-0 transition-opacity ${isVisible ? 'opacity-100 show-text' : ''}`}>
            <h2 className="fade-in-text">{language === 'fr' ? 'Nos Services' : 'Our Services'}</h2>
            <p className='text-light fade-in-text'>
              {language === 'fr'
                ? 'Nous offrons des services de haute qualité pour répondre à vos besoins. Du développement web à la consultation, notre équipe est là pour vous aider à réussir.'
                : 'We offer high-quality services to meet your needs. From web development to consulting, our team is here to help you succeed.'}
            </p>
          </div>
        </div>
      </div>

      {/* Services Content Component */}
      <ServicesContents />
    </>
  );
};

export default Services;
