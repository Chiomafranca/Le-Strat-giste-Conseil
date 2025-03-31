import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic14 from "../HeaderPages/images/pic14.png";
import pic15 from "../HeaderPages/images/pic15.webp";
import pic16 from '../HeaderPages/images/pic16.jpeg';
import { useLanguage } from "../SetLanguage/LanguageContext"; // Import the useLanguage hook
import './About.css'; // Import the CSS for hover effect

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage(); // Get the current language

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
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

      {/* BODY */}
      <div className="py-5" style={{ backgroundColor: "#f8f9fa", color: "#333" }}>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ fontSize: "2.5rem", color: "#0d6efd" }}>
            {language === 'en' ? 'About Us' : 'À Propos de Nous'}
          </h1>
          <h5 className="text-muted">
            {language === 'en' ? 'Excellence in Your Finances and Management' : 'L’Excellence au Service de Vos Finances et de Votre Gestion'}
          </h5>
        </div>

        {/* Content Section (Text + Image) */}
        <div className="container">
          <div className="row justify-content-center align-items-stretch">
            {/* Left: Text */}
            <div className="col-lg-6 col-md-10 d-flex align-items-stretch">
              <div className="p-4 bg-white rounded shadow w-100 d-flex flex-column justify-content-center h-100">
                <p className="fs-5" style={{ lineHeight: "1.8" }}>
                  <strong>{language === 'en' ? 'The Strategists Consulting' : 'Les Stratégistes Conseil'}</strong>
                  {language === 'en' ? 'is a strategic consulting firm that helps organizations navigate complexity and achieve sustainable success through deep expertise and innovative approaches.' : 
                  'est un cabinet de conseil stratégique qui aide les organisations à naviguer dans la complexité et à atteindre un succès durable grâce à une expertise approfondie et des approches innovantes.'} 
                  {language === 'en' ? 'We foster collaborative partnerships, data-driven analysis, and customized solutions to maximize your performance.' : 'Nous favorisons des partenariats collaboratifs, des analyses basées sur les données et des solutions personnalisées pour maximiser votre performance.'}
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="col-lg-6 col-md-10 d-flex align-items-stretch">
              <img src={pic14} alt="Finance Strategy" className="img-fluid rounded shadow w-100 h-100 object-fit-cover" />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Left: Image */}
            <div className="col-lg-5 col-md-10 text-center mb-4 mb-lg-0">
              <img src={pic15} alt="Mission" className="img-fluid rounded shadow-lg w-100" />
            </div>

            {/* Right: Mission Content */}
            <div className="col-lg-7 col-md-10">
              <h3 className="fw-bold text-primary text-center text-lg-start">
                {language === 'en' ? 'Our Mission' : 'Notre Mission'}
              </h3>

              <div className="d-flex flex-wrap gap-3 mt-3">
                <div className="w-100 w-md-50">
                  ✅ <strong>{language === 'en' ? 'Custom Strategies' : 'Stratégies sur Mesure'}:</strong> {language === 'en' ? 'Market alignment' : 'Alignement avec le marché'}.
                </div>
                <div className="w-100 w-md-50">
                  ✅ <strong>{language === 'en' ? 'Operational Excellence' : 'Excellence Opérationnelle'}:</strong> {language === 'en' ? 'Performance optimization' : 'Optimisation des performances'}.
                </div>
                <div className="w-100 w-md-50">
                  ✅ <strong>{language === 'en' ? 'Financial Clarity' : 'Clarté Financière'}:</strong> {language === 'en' ? 'Informed decision-making with accurate data' : 'Décisions éclairées grâce à des données précises'}.
                </div>
                <div className="w-100 w-md-50">
                  ✅ <strong>{language === 'en' ? 'Talent Development' : 'Développement des Talents'}:</strong> {language === 'en' ? 'Building high-performing teams' : 'Constitution d’équipes performantes'}.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mt-5">
          <h3 className="text-center fw-bold text-primary mb-4">
            {language === 'en' ? 'Our Services' : 'Nos Services'}
          </h3>
          <div className="row g-4">
            {/* Service 1 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow text-center d-flex flex-column justify-content-between h-100 card-hover">
                <h5 className="fw-bold">{language === 'en' ? 'Financial Consulting' : 'Conseil Financier'}</h5>
                <p>{language === 'en' ? 'Planning & analysis, budgeting, cost optimization, risk management' : 'Planification & analyse, budgétisation, optimisation des coûts, gestion des risques'}</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow text-center d-flex flex-column justify-content-between h-100 card-hover">
                <h5 className="fw-bold">{language === 'en' ? 'Market Strategy' : 'Stratégie de Marché'}</h5>
                <p>{language === 'en' ? 'Competitive analysis, go-to-market strategies, market expansion' : 'Analyse concurrentielle, stratégies de mise sur le marché, expansion du marché'}</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow text-center d-flex flex-column justify-content-between h-100 card-hover">
                <h5 className="fw-bold">{language === 'en' ? 'Operational Optimization' : 'Optimisation Opérationnelle'}</h5>
                <p>{language === 'en' ? 'Process improvement, supply chain optimization, lean management' : 'Amélioration des processus, optimisation de la chaîne d’approvisionnement, gestion lean'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
