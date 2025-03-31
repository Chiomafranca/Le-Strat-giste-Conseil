import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from '../../SetLanguage/LanguageContext';
import './NavHeader.css';

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark custom-navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light">
            {language === "en" ? "The Strategist" : "Le Stratégiste"}
          </Link>

          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
  <ul className="navbar-nav mx-auto flex-lg-row flex-column gap-lg-5 me-lg-5"> {/* Added gap-lg-5 */}
    <li className="nav-item">
      <Link className="nav-link text-light" to="/services">
        {language === "en" ? "Services" : "Services"}
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-light" to="/about">
        {language === "en" ? "About" : "À propos"}
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-light" to="/contact">
        {language === "en" ? "Contact" : "Contact"}
      </Link>
    </li>
  </ul>

  {/* Language Buttons */}
  <div className="language-buttons">
    <button className="language-button" onClick={() => changeLanguage("en")}>
      Anglais
    </button>
    <button className="language-button" onClick={() => changeLanguage("fr")}>
      Français
    </button>
  </div>
</div>

        </div>
      </nav>
    </>
  );
};

export default NavHeader;
