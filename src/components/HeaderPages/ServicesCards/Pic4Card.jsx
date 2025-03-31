import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { useLanguage } from "../../SetLanguage/LanguageContext"; 
import pic29 from '../../HeaderPages/images/pic29.jpg';
import pic30 from '../../HeaderPages/images/pic30.jpg'
import pic31 from '../../HeaderPages/images/pic31.jpg';
import pic32 from '../../HeaderPages/images/pic32.jpg'
import pic33 from '../../HeaderPages/images/pic33.jpg';
import pic34 from '../../HeaderPages/images/pic34.jpg';
import pic35 from '../../HeaderPages/images/pic35.jpg';


const SupplyChainOperations = () => {
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

      {/* Supply Chain Operations Page */}
      <div className="container py-5">
        <h1 className="text-center mb-4 text-dark">
          {language === 'en' ? 'Supply Chain Operations' : 'Opérations de la chaîne d\'approvisionnement'}
        </h1>

        {/* Introduction */}
        <div className="row mb-5">
          <div className="col-md-12">
            <p className="lead text-center">
              {language === 'en' ? 'Optimizing your supply chain for efficiency and success' : 'Optimisation de votre chaîne d\'approvisionnement pour l\'efficacité et le succès'}
            </p>
          </div>
        </div>

        {/* Key Elements */}
        <div className="row g-4">
          {/* Process Optimization */}
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img src={pic29} className="card-img-top" alt="Process Optimization" />
              <div className="card-body">
                <h5 className="card-title">
                  {language === 'en' ? 'Process Optimization' : 'Optimisation des Processus'}
                </h5>
                <p className="card-text">
                  {language === 'en' ? 'Improving your supply chain processes to maximize efficiency.' : 'Améliorer vos processus de chaîne d\'approvisionnement pour maximiser l\'efficacité.'}
                </p>
              </div>
            </div>
          </div>

          {/* Risk Management */}
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img src={pic30} className="card-img-top" alt="Risk Management" />
              <div className="card-body">
                <h5 className="card-title">
                  {language === 'en' ? 'Risk Management' : 'Gestion des Risques'}
                </h5>
                <p className="card-text">
                  {language === 'en' ? 'Identifying and mitigating risks in the supply chain.' : 'Identifier et atténuer les risques dans la chaîne d\'approvisionnement.'}
                </p>
              </div>
            </div>
          </div>

          {/* Inventory Management */}
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img src={pic31} className="card-img-top" alt="Inventory Management" />
              <div className="card-body">
                <h5 className="card-title">
                  {language === 'en' ? 'Inventory Management' : 'Gestion des Stocks'}
                </h5>
                <p className="card-text">
                  {language === 'en' ? 'Efficient inventory control to reduce costs and improve availability.' : 'Contrôle efficace des stocks pour réduire les coûts et améliorer la disponibilité.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
  <Link 
    to="/contact" 
    className="btn btn-lg" 
    style={{
      background: 'linear-gradient(to right, #0062E6, #33AEFF)', 
      color: '#fff', 
      border: 'none'
    }}
  >
    {language === 'en' ? 'Get in Touch for Consultation' : 'Contactez-nous pour une consultation'}
  </Link>
</div>

      </div>

      {/* Additional Sections with Improved Design */}
      <div className="container mt-5">
        <div className="row">
          {/* Recruitment and Integration */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img src={pic32} className="card-img-top" alt="Recruitment and Integration" />
              <div className="card-body">
                <h3 className="card-title text-primary">
                  {language === 'en' ? 'Recruitment and Integration' : 'Recrutement et Intégration'}
                </h3>
                <p className="card-text">
                  {language === 'en' ? 'We help you recruit the ideal talent and ensure a successful integration.' : 'Nous vous aidons à recruter les talents idéaux et à garantir une intégration réussie.'}
                </p>
              </div>
            </div>
          </div>

          {/* Compensation and Social Relations */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img src={pic33} className="card-img-top" alt="Compensation and Social Relations" />
              <div className="card-body">
                <h3 className="card-title text-primary">
                  {language === 'en' ? 'Compensation and Social Relations' : 'Rémunération et Relations Sociales'}
                </h3>
                <p className="card-text">
                  {language === 'en' ? 'We design compensation policies aligned with company objectives.' : 'Nous concevons des politiques salariales adaptées aux objectifs de l’entreprise.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Workforce Management */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img src={pic34} className="card-img-top" alt="Workforce Management" />
              <div className="card-body">
                <h3 className="card-title text-primary">
                  {language === 'en' ? 'Workforce Management' : 'Gestion des Effectifs'}
                </h3>
                <p className="card-text">
                  {language === 'en' ? 'We ensure legal compliance and promote diversity and inclusion.' : 'Nous assurons la conformité légale et promouvons la diversité et l’inclusion.'}
                </p>
              </div>
            </div>
          </div>

          {/* Performance and Development */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img src={pic35} className="card-img-top" alt="Performance and Development" />
              <div className="card-body">
                <h3 className="card-title text-primary">
                  {language === 'en' ? 'Performance and Development' : 'Performances et Développement'}
                </h3>
                <p className="card-text">
                  {language === 'en' ? 'We implement performance evaluation systems and development programs.' : 'Nous mettons en place des systèmes d’évaluation des performances et des programmes de développement.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 text-center mt-5">
        <p>{language === 'en' ? '© 2025 The Strategists Consulting' : '© 2025 Les Stratégistes Conseil'}</p>
      </footer>
    </div>
  );
};

export default SupplyChainOperations;
