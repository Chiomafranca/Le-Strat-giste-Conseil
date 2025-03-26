import React, { useState } from "react";
import { Link } from "react-router-dom";
import './OurSolutions.css'; 
import pic17 from '../HeaderPages/images/pic17.jpeg';
import pic18 from '../HeaderPages/images/pic18.jpeg';
import pic19 from '../HeaderPages/images/pic19.jpeg';
import { FaBolt, FaUsers, FaBoxes, FaChartBar, FaLink, FaSearch, FaCogs, FaDatabase } from "react-icons/fa";

const OurSolutions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark custom-navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light">Le Stratégiste</Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto flex-lg-row flex-column">
              <li className="nav-item">
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

      {/* SOLUTION CONTENTS */}
      <div className="bg-light py-5">
        {/* Hero Section */}
        <div className="container text-center">
          <h1 className="fw-bold text-dark display-4 mb-4">
            <FaBolt className="text-primary me-2" /> Votre Transformation Digitale
          </h1>
          <p className="lead text-muted">
            Optimisez vos processus et boostez votre croissance avec nos solutions de transformation digitale.
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
            {/* Process Optimization */}
            <div className="col-md-4">
              <div className="card border-0 shadow-lg p-4 h-100 text-center">
                <FaBolt className="text-primary fs-1 mb-3" />
                <h3 className="text-primary">Optimisation des Processus</h3>
                <p>Réorganisation efficace des processus pour maximiser la productivité et réduire les coûts.</p>
              </div>
            </div>

            {/* Organizational Synergy */}
            <div className="col-md-4">
              <div className="card border-0 shadow-lg p-4 h-100 text-center">
                <FaUsers className="text-success fs-1 mb-3" />
                <h3 className="text-success">Synergie Organisationnelle</h3>
                <p>Amélioration des interactions internes pour favoriser la collaboration et la performance.</p>
              </div>
            </div>

            {/* Operational Excellence */}
            <div className="col-md-4">
              <div className="card border-0 shadow-lg p-4 h-100 text-center">
                <FaBoxes className="text-danger fs-1 mb-3" />
                <h3 className="text-danger">Excellence Logistique</h3>
                <p>Optimisation de votre chaîne logistique pour des flux rapides et rentables.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Management */}
        <div className="container text-center mt-5">
          <h2 className="fw-bold text-dark">
            <FaChartBar className="text-warning me-2" /> Gestion des Stocks
          </h2>
          <img
            src={pic18}
            alt="Inventory Management"
            className="img-fluid rounded-4 shadow-lg mt-3 custom-img"
          />
          <p className="mt-3 text-muted">
            Optimisez votre gestion des stocks grâce à des outils performants et une analyse stratégique.
          </p>
        </div>

        {/* ERP Section */}
        <div className="container text-center mt-5">
          <h2 className="fw-bold text-dark">
            <FaLink className="text-info me-2" /> Intégration ERP & E-commerce
          </h2>
          <img
            src={pic19}
            alt="ERP Solution"
            className="img-fluid rounded-4 shadow-lg mt-3 custom-img"
          />
          <p className="mt-3 text-muted">
            Connectez vos outils ERP et e-commerce pour une gestion centralisée et automatisée.
          </p>
        </div>

        {/* Features Section */}
        <div className="container mt-5">
          <div className="row g-4">
            {/* ERP Selection */}
            <div className="col-md-4">
              <div className="card border-0 shadow-lg p-4 h-100 text-center">
                <FaSearch className="text-primary fs-1 mb-3" />
                <h4 className="text-primary">Sélection ERP</h4>
                <p>Nous vous aidons à choisir la meilleure solution ERP adaptée à vos besoins.</p>
              </div>
            </div>

            {/* Installation & Configuration */}
            <div className="col-md-4">
              <div className="card border-0 shadow-lg p-4 h-100 text-center">
                <FaCogs className="text-success fs-1 mb-3" />
                <h4 className="text-success">Installation & Configuration</h4>
                <p>Mise en place complète et paramétrage personnalisé pour une solution clé en main.</p>
              </div>
            </div>

            {/* Migration & Training */}
            <div className="col-md-4">
              <div className="card border-0 shadow-lg p-4 h-100 text-center">
                <FaDatabase className="text-danger fs-1 mb-3" />
                <h4 className="text-danger">Migration & Formation</h4>
                <p>Transition fluide et formation des équipes pour une adoption réussie.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-5 py-4 bg-black text-white">
          <p className="mb-0">
            <FaBolt className="me-2 text-warning" /> Prêt à passer au niveau supérieur ? Contactez-nous dès aujourd’hui !
          </p>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
