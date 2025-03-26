import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <div>
      <nav className="scrolling-navbar">
        <ul className="list-unstyled">
          <li>Optimisation Globale et Anslyse des Processus Operationnels</li>
          <li>Planification Financiere et Analyse</li>
          <li> Gestion Comptable & Financiere</li>
          <li>Gestion des Ressources Humanines</li>
          <li>Audit, Conseil et Accompagnement</li>
          <li>Evaluation initale</li>
          <li>Recrutement et formation</li>
          <li>Procedures internes solides</li>
          <li>solutions technologues</li>
           <li>Rapports Financiers</li>
           <li>Evaluation initale</li>
        </ul>
        <Link to="/solutions"> 
          <button className="shipping-button">Our Solutions</button>
        </Link>
        
      </nav>
    </div>
  );
};

export default Navbar;
