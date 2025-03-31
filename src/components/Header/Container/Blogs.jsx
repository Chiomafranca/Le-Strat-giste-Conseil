import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../SetLanguage/LanguageContext";
import pic25 from "../../HeaderPages/images/pic25.jpg";
import logo from "../../HeaderPages/images/logo1.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './Blogs.css';


const Blogs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null); // Fix: Added state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  
  const accordionItems = [
    { 
      title: language === 'en' ? "Payroll" : "Paie", 
      content: language === 'en' 
        ? "Define payment schedules, confidentiality, compliance with labor laws." 
        : "Définir les horaires de paiement, la confidentialité, le respect des lois du travail." 
    },
    { 
      title: language === 'en' ? "Sales" : "Ventes", 
      content: language === 'en' 
        ? "Guidelines for recording sales transactions, revenue recognition policies." 
        : "Directives pour l'enregistrement des transactions de vente, politiques de reconnaissance des revenus." 
    },
    { 
      title: language === 'en' ? "Accounting" : "Comptabilité", 
      content: language === 'en' 
        ? "General ledger management, invoice verification, payment processing." 
        : "Gestion du grand livre, vérification des factures, traitement des paiements." 
    },
    { 
      title: language === 'en' ? "Budget" : "Budget", 
      content: language === 'en' 
        ? "Budget preparation, approval mechanisms, variance analysis." 
        : "Préparation du budget, mécanismes d'approbation, analyse des écarts." 
    },
    { 
      title: language === 'en' ? "Finance" : "Finance", 
      content: language === 'en' 
        ? "Investment strategies, risk management, financial controls." 
        : "Stratégies d'investissement, gestion des risques, contrôles financiers." 
    },
    { 
      title: language === 'en' ? "Reporting" : "Rapports", 
      content: language === 'en' 
        ? "Financial statements preparation, internal and external reporting." 
        : "Préparation des états financiers, rapports internes et externes." 
    }
  ];

  return (
    <div className="bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light">Le Stratégiste</Link>
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

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto flex-lg-row flex-column">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/home">
                {language === 'en' ? 'Home' : 'Accueil'}
              </Link>
            </li>
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
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                {language === 'en' ? 'Contact' : 'Contact'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      {/* Hero Section */}
      <header className="position-relative text-white text-center">
        <img src={pic25} alt="Audit Planning" className="w-100 hero-image" style={{ height: "350px", objectFit: "cover" }} />
      </header>

      {/* Blog Content */}
      <div className="container my-5">
        <div className="row">
          {/* Blog Post 1 */}
          
    <div className="col-md-6">
      <div className="card border-0 shadow-sm h-100 blog-card">
        <img src={pic25} className="card-img-top" alt={language === 'en' ? "Audit Planning" : "Planification Audit"} />
        <div className="card-body">
          <h5 className="card-title fw-bold">
            {language === 'en' ? 'Audit Planning' : 'Planification d’Audit'}
          </h5>
          <p className="card-text">
            {language === 'en' 
              ? 'Our audit planning services focus on risk assessment, defining the scope, and creating a detailed plan that complies with professional standards.' 
              : 'Nos services de planification d’audit se concentrent sur l’évaluation des risques...'}
          </p>
          <div className="card-overlay">
            <p className="text-light">
              {language === 'en' 
                ? 'Our audit planning services focus on risk assessment, defining the scope, and creating a detailed plan that complies with professional standards.' 
                : 'Nos services de planification d’audit se concentrent sur l’évaluation des risques...'}
            </p>
          </div>
        </div>
      </div>
    </div>
          {/* Blog Post 2 */}
          <div className="col-md-6">
      <div className="card border-0 shadow-sm h-100 blog-card">
        <img src={logo} className="card-img-top" alt={language === 'en' ? "Framework Development" : "Développement du Cadre"} />
        <div className="card-body">
          <h5 className="card-title fw-bold">
            {language === 'en' ? 'Framework Development' : 'Développement du Cadre'}
          </h5>
          <p className="card-text">
            {language === 'en' 
              ? 'We focus on precision, compliance, and transparency in managing financial departments, ensuring the integrity and smooth operation of financial systems.' 
              : 'Vision et objectifs : Précision, conformité, transparence...'}
          </p>
          <div className="card-overlay">
            <p className="text-light">
              {language === 'en' 
                ? 'We focus on precision, compliance, and transparency in managing financial departments, ensuring the integrity and smooth operation of financial systems.' 
                : 'Nous nous concentrons sur la précision, la conformité et la transparence dans la gestion des départements financiers, en assurant l’intégrité et le bon fonctionnement des systèmes financiers.'}
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>

        {/* Framework Development Details */}
        <div className="container my-5">
      <h4 className="fw-bold text-center mb-4">
        {language === 'en' ? 'Framework Development' : 'Développement du Cadre'}
      </h4>
      <div className="accordion" id="frameworkAccordion">
        {accordionItems.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button fw-bold ${activeIndex === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion(index)}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
              style={{ transition: "all 0.3s ease-in-out" }}
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
        
      </div>

      {/* Footer */}
      <footer className="bg-dark text-center text-white py-4 mt-5">
      <p className="mb-0">
        {language === 'en' 
          ? "&copy; 2025 Le Stratégiste | All rights reserved" 
          : "&copy; 2025 Le Stratégiste | Tous droits réservés"}
      </p>
    </footer>

      {/* CSS Styles */}
      <style>
        {`
          .blog-card {
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
          }
          .blog-card:hover {
            transform: scale(1.05);
          }
          .card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.7);
            padding: 10px;
            text-align: center;
            transform: translateY(100%);
            transition: transform 0.3s ease-in-out;
          }
          .blog-card:hover .card-overlay {
            transform: translateY(0);
          }
          .accordion-button {
            transition: all 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Blogs;
