import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../SetLanguage/LanguageContext";
import './OurSolutions.css';
import pic17 from '../HeaderPages/images/pic17.jpeg';
import pic18 from '../HeaderPages/images/pic18.jpeg';
import pic19 from '../HeaderPages/images/pic19.jpeg';
import { FaBolt, FaUsers, FaBoxes, FaChartBar, FaLink, FaSearch, FaCogs, FaDatabase } from "react-icons/fa";
import ContactForm from "../Header/Container/ContactForm";

const OurSolutions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const solutionsContent = {
    fr: {
      hero: "Votre Transformation Digitale",
      description: "Optimisez vos processus et boostez votre croissance avec nos solutions de transformation digitale.",
      services: [
        { title: "Optimisation des Processus", description: "Réorganisation efficace des processus pour maximiser la productivité et réduire les coûts." },
        { title: "Synergie Organisationnelle", description: "Amélioration des interactions internes pour favoriser la collaboration et la performance." },
        { title: "Excellence Logistique", description: "Optimisation de votre chaîne logistique pour des flux rapides et rentables." },
      ],
      inventory: "Gestion des Stocks",
      inventoryDescription: "Optimisez votre gestion des stocks grâce à des outils performants et une analyse stratégique.",
      erp: "Intégration ERP & E-commerce",
      erpDescription: "Connectez vos outils ERP et e-commerce pour une gestion centralisée et automatisée.",
      features: [
        { title: "Sélection ERP", description: "Nous vous aidons à choisir la meilleure solution ERP adaptée à vos besoins." },
        { title: "Installation & Configuration", description: "Mise en place complète et paramétrage personnalisé pour une solution clé en main." },
        { title: "Migration & Formation", description: "Transition fluide et formation des équipes pour une adoption réussie." },
      ],
      footer: "Prêt à passer au niveau supérieur ? Contactez-nous dès aujourd’hui !",
    },
    en: {
      hero: "Your Digital Transformation",
      description: "Optimize your processes and boost your growth with our digital transformation solutions.",
      services: [
        { title: "Process Optimization", description: "Efficient reorganization of processes to maximize productivity and reduce costs." },
        { title: "Organizational Synergy", description: "Improving internal interactions to foster collaboration and performance." },
        { title: "Logistics Excellence", description: "Optimizing your logistics chain for fast and cost-effective flows." },
      ],
      inventory: "Inventory Management",
      inventoryDescription: "Optimize your inventory management with powerful tools and strategic analysis.",
      erp: "ERP & E-commerce Integration",
      erpDescription: "Connect your ERP and e-commerce tools for centralized and automated management.",
      features: [
        { title: "ERP Selection", description: "We help you choose the best ERP solution tailored to your needs." },
        { title: "Installation & Configuration", description: "Complete setup and personalized configuration for a turnkey solution." },
        { title: "Migration & Training", description: "Smooth transition and team training for successful adoption." },
      ],
      footer: "Ready to level up? Contact us today!",
    }
  };

  const content = solutionsContent[language];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
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
                <Link className="nav-link text-light" to="/home">{language === 'fr' ? 'Accueil' : 'Home'}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/services">{language === 'fr' ? 'Services' : 'Services'}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">{language === 'fr' ? 'À propos' : 'About'}</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">{language === 'fr' ? 'Contact' : 'Contact'}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="bg-light py-5 content-wrapper">
        {/* Hero Section */}
        <div className="container text-center">
          <h1 className="fw-bold text-dark display-4 mb-4">
            <FaBolt className="text-primary me-2" /> {content.hero}
          </h1>
          <p className="lead text-muted">
            {content.description}
          </p>
          <img
            src={pic17}
            alt="Digital Transformation"
            className="img-fluid rounded-4 shadow-lg mt-3 custom-img"
            style={{ maxWidth: "450px" }}
          />
        </div>

        {/* Services Section */}
        <div className="container mt-5">
          <div className="row g-4">
            {content.services.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-lg p-4 h-100 text-center">
                  <FaBolt className="text-primary fs-1 mb-3" />
                  <h3 className="text-primary">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Management Section */}
        <div className="container text-center mt-5">
          <h2 className="fw-bold text-dark">
            <FaChartBar className="text-warning me-2" /> {content.inventory}
          </h2>
          <img
            width={400}
            height={300}
            src={pic18}
            alt="Inventory Management"
            className="img-fluid rounded-4 shadow-lg mt-3 custom-img"
          />
          <p className="mt-3 text-muted">
            {content.inventoryDescription}
          </p>
        </div>

        {/* ERP Section */}
        <div className="container text-center mt-5">
          <h2 className="fw-bold text-dark">
            <FaLink className="text-info me-2" /> {content.erp}
          </h2>
          <img
            width={400}
            height={300}
            src={pic19}
            alt="ERP Solution"
            className="img-fluid rounded-4 shadow-lg mt-3 custom-img"
          />
          <p className="mt-3 text-muted">
            {content.erpDescription}
          </p>
        </div>

        {/* Features Section */}
        <div className="container mt-5">
          <div className="row g-4">
            {content.features.map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-lg p-4 h-100 text-center">
                  <FaSearch className="text-primary fs-1 mb-3" />
                  <h4 className="text-primary">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm/>

        {/* Footer Section */}
        <div className="text-center mt-5 py-4 bg-black text-white">
          <p className="mb-0">
            <FaBolt className="me-2 text-warning" /> {content.footer}
          </p>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
