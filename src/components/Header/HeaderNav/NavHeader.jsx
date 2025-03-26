import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './NavHeader.css';

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <>
         {/* Navbar */}
             <nav className="navbar navbar-expand-lg navbar-light bg-dark">
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
    </>
  );
};

export default NavHeader;
