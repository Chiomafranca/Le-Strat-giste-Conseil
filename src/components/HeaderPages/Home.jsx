import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pic13 from '../HeaderPages/images/pic13.jpg';
import HomeContent from "./HomeContent";
import "./Home.css";

const Home = () => {
  const headers = ["MARQUE", "STRATÉGIE", "MARKETING", "DESIGN", "MARQUE"];
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % headers.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="background-container">
        <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                  <Link to="/" className="navbar-brand text-light">Le Stratégiste</Link>
        
                  <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                  </button>
        
                  <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
                    <ul className="navbar-nav mx-auto flex-lg-row flex-column">
                      <li className="nav-item text-start">
                        <Link className="nav-link text-light" to="/home">Accueil</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-light" to="/services">Services</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-light" to="/about">À propos</Link>
                      </li>
                    </ul>
        
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link text-light" to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-text-overlay">
            <h1 className="hero-header">{headers[visibleIndex]}</h1>
            <h3 className="hero-subheader">
              CRÉER DES MARQUES SIGNIFICATIVES. DE LA STRATÉGIE À LA RÉALITÉ.
              <br />
              AVEC DES MESSAGES ET DES DESIGNS SIMPLES, PUISSANTS ET CRÉATIFS.
            </h3>
            <h4 className="hero-description">
              Agence de design et marketing, offrant des solutions créatives et innovantes,
              <br />
              design, stratégie, marque, web, médias sociaux, événements,
              <br />
              et conseil en marketing pour des marques à travers de nombreux pays.
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
