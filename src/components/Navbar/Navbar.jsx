import React from 'react';
import { useLanguage } from '../SetLanguage/LanguageContext'; 
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const { language } = useLanguage(); 

  const menuItems = {
    fr: [
      "Optimisation Globale et Analyse des Processus Opérationnels",
      "Planification Financière et Analyse",
      "Gestion Comptable & Financière",
      "Gestion des Ressources Humaines",
      "Audit, Conseil et Accompagnement",
      "Évaluation Initiale",
      "Recrutement et Formation",
      "Procédures Internes Solides",
      "Solutions Technologiques",
      "Rapports Financiers",
    ],
    en: [
      "Global Optimization & Operational Process Analysis",
      "Financial Planning & Analysis",
      "Accounting & Financial Management",
      "Human Resources Management",
      "Audit, Consulting & Support",
      "Initial Assessment",
      "Recruitment & Training",
      "Strong Internal Procedures",
      "Technology Solutions",
      "Financial Reports",
    ]
  };

  return (
    <div>
      <nav className="scrolling-navbar">
        <ul className="list-unstyled">
          {menuItems[language].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link to="/solutions"> 
          <button className="shipping-button">
            {language === 'fr' ? "Nos Solutions" : "Our Solutions"}
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
