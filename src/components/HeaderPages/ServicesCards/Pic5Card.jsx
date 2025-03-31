import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { useLanguage } from "../../SetLanguage/LanguageContext"; 

const Pic5Card = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const { language } = useLanguage();
  
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

      {/* Performance vs Risk Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 text-dark">{language === 'en' ? 'Performance vs Risk' : 'Performance vs Risque'}</h2>

        <div className="row g-4">
          {/* Performance Card */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-lg bg-success text-white">
              <div className="card-body text-center">
                <i className="fas fa-tachometer-alt fa-3x mb-3"></i>
                <h4 className="card-title">{language === 'en' ? 'High Performance' : 'Haute Performance'}</h4>
                <p className="card-text text-light">
                  {language === 'en' ? 'Maximizing speed and efficiency to meet business goals.' : 'Maximiser la vitesse et l\'efficacité pour atteindre les objectifs commerciaux.'}
                </p>
                <div className="progress mb-3">
                  <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Card */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-lg bg-danger text-white">
              <div className="card-body text-center">
                <i className="fas fa-exclamation-triangle fa-3x mb-3"></i>
                <h4 className="card-title">{language === 'en' ? 'Risk Management' : 'Gestion des Risques'}</h4>
                <p className="card-text text-light">
                  {language === 'en' ? 'Identifying, mitigating, and managing risks for long-term success.' : 'Identifier, atténuer et gérer les risques pour le succès à long terme.'}
                </p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pic5Card;
