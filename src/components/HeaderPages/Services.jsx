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
      <div className="header-container">
        <div className="brand-title">
          {language === 'en' ? 'The Strategist' : 'Le Stratégiste'}
        </div>

        {/* Desktop Navbar */}
        <div className="navbar-links d-none d-md-flex">
          <Link to="/" className="text-white text-decoration-none">
            {language === 'fr' ? 'Accueil' : 'Home'}
          </Link>
          <Link to="/services" className="text-white text-decoration-none">
            {language === 'fr' ? 'Services' : 'Services'}
          </Link>
          <Link to="/about" className="text-white text-decoration-none">
            {language === 'fr' ? 'À propos' : 'About'}
          </Link>
        </div>

        {/* Contact Link */}
        <div className="contact-link d-none d-md-block">
          <Link to="/contact" className="text-white text-decoration-none">
            {language === 'fr' ? 'Contact' : 'Contact'}
          </Link>
        </div>

        {/* Mobile Navbar Toggle Button */}
        <button className="navbar-toggler d-md-none" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

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
