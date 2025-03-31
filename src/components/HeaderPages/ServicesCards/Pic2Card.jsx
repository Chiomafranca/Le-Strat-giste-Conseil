import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { useLanguage } from "../../SetLanguage/LanguageContext"; 
import pic26 from '../../HeaderPages/images/pic26.jpg';
import pic27 from '../../HeaderPages/images/pic27.avif';
import pic28 from '../../HeaderPages/images/pic28.jpg';
import './Pic2Card.css'

const Pic2Card = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
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

      {/* Process Section */}
      <section className="container mt-5">
        <h1 className="fw-bold text-center mb-5">{language === 'en' ? 'Our Process Technology' : 'Notre Technologie de Processus'}</h1>
        <div className="row text-center">
          {[{ img: pic26, title: 'Planning' }, { img: pic27, title: 'Development' }, { img: pic28, title: 'Testing' }].map((step, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={step.img} className="card-img-top" alt={step.title} />
                <div className="card-body">
                  <h5 className="card-title">{language === 'en' ? step.title : step.title === 'Planning' ? 'Planification' : step.title === 'Development' ? 'Développement' : 'Tests'}</h5>
                  <p className="card-text">{language === 'en' ? 'Detailed description about ' + step.title : 'Description détaillée sur ' + step.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center">{language === 'en' ? 'Key Features' : 'Caractéristiques principales'}</h2>
          <div className="row mt-4">
            {['High Security', 'Scalability', 'Efficiency'].map((feature, index) => (
              <div key={index} className="col-md-4 text-center">
                <h4>{feature}</h4>
                <p>{language === 'en' ? 'Ensuring top-notch ' + feature : 'Assurer un ' + feature + ' de premier ordre'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-dark text-light">
        <h3>{language === 'en' ? 'Get Started Today' : 'Commencez dès aujourd’hui'}</h3>
        <Link to="/contact">
          <button className="btn btn-primary mt-3">{language === 'en' ? 'Contact Us' : 'Contactez-nous'}</button>
        </Link>
      </section>
    </div>
  );
};

export default Pic2Card;
