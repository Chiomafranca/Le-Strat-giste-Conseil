import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pic13 from '../HeaderPages/images/pic13.jpg';
import HomeContent from "./HomeContent";
import "./Home.css";
import { useLanguage } from '../SetLanguage/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const headers = {
    en: ["BRAND", "STRATEGY", "MARKETING", "DESIGN", "BRAND"],
    fr: ["MARQUE", "STRATÉGIE", "MARKETING", "DESIGN", "MARQUE"],
  };

  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % headers[language].length);
    }, 1000);

    return () => clearInterval(interval);
  }, [language]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="background-container">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light">
               {language === 'en' ? 'The Strategist' : 'Le Stratégiste'}
         </Link>


            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
              <ul className="navbar-nav mx-auto flex-lg-row flex-column">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/home">
                    {language === "fr" ? "Accueil" : "Home"}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/services">
                    {language === "fr" ? "Services" : "Services"}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/about">
                    {language === "fr" ? "À propos" : "About"}
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/contact">
                    {language === "fr" ? "Contact" : "Contact"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className={`hero-section ${isMenuOpen ? 'menu-open' : ''}`}>
          <div className="hero-text-overlay">
            <h1 className="hero-header">{headers[language][visibleIndex]}</h1>
            <h3 className="hero-subheader">
              {language === "fr" 
                ? "CRÉER DES MARQUES SIGNIFICATIVES. DE LA RÉALITÉ À LA STRATÉGIE."
                : "CREATING MEANINGFUL BRANDS. FROM STRATEGY TO REALITY."}
              <br />
              {language === "fr" 
                ? "AVEC DES MESSAGES ET DES DESIGNS SIMPLES, PUISSANTS ET CRÉATIFS." 
                : "WITH SIMPLE, POWERFUL, AND CREATIVE MESSAGES AND DESIGNS."}
            </h3>
            <h4 className="hero-description">
              {language === "fr" 
                ? "Agence de design et marketing, offrant des solutions créatives et innovantes,"
                : "Design and marketing agency, providing creative and innovative solutions,"}
              <br />
              {language === "fr" 
                ? "design, stratégie, marque, web, médias sociaux, événements,"
                : "design, strategy, branding, web, social media, events,"}
              <br />
              {language === "fr" 
                ? "et conseil en marketing pour des marques à travers de nombreux pays."
                : "and marketing consulting for brands across many countries."}
            </h4>
          </div>

          <div className="hero-container">
            <img src={pic13} alt="home pic" className="hero-image" />
          </div>
        </div>
      </div>

      <HomeContent />
    </>
  );
};

export default Home;
