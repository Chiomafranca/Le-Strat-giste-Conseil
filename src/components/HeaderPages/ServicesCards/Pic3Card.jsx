import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { useLanguage } from "../../SetLanguage/LanguageContext"; 
import client1 from '../../HeaderPages/images/client1.jpg'
import client2 from '../../HeaderPages/images/client2.jpg'
import client3 from '../../HeaderPages/images/client3.jpg'
import './Pic3Card.css'; 

const Pic3Card = () => {
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

      {/* Hero Section */}
      <section className="hero bg-image text-dark d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url("your-image-url.jpg")' }}>
        <div className="text-center p-5">
          <h1>{language === 'en' ? 'Boost Interdepartmental Efficiency' : 'Améliorer l\'efficacité inter-départementale'}</h1>
          <p>{language === 'en' ? 'Streamline communication, collaboration, and productivity across departments.' : 'Rationaliser la communication, la collaboration et la productivité entre les départements.'}</p>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="container py-5">
        <h2 className="text-center mb-4">{language === 'en' ? 'Key Features' : 'Caractéristiques principales'}</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <i className="fas fa-users-cog fa-3x mb-3 mt-3"></i>
              <div className="card-body">
                <h5 className="card-title">{language === 'en' ? 'Collaborative Tools' : 'Outils collaboratifs'}</h5>
                <p>{language === 'en' ? 'Enable seamless communication between departments.' : 'Permet une communication fluide entre les départements.'}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <i className="fas fa-chart-line fa-3x mb-3 mt-3"></i>
              <div className="card-body">
                <h5 className="card-title">{language === 'en' ? 'Real-time Analytics' : 'Analytique en temps réel'}</h5>
                <p>{language === 'en' ? 'Monitor progress and identify bottlenecks instantly.' : 'Surveillez les progrès et identifiez instantanément les goulots d\'étranglement.'}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <i className="fas fa-sync-alt fa-3x mb-3 mt-3"></i>
              <div className="card-body">
                <h5 className="card-title">{language === 'en' ? 'Streamlined Processes' : 'Processus rationalisés'}</h5>
                <p>{language === 'en' ? 'Automate tasks and workflows to reduce manual effort.' : 'Automatisez les tâches et les flux de travail pour réduire l\'effort manuel.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container py-5">
        <h2 className="text-center mb-4">{language === 'en' ? 'What Our Clients Say' : 'Ce que nos clients disent'}</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card test-card">
              <img src={client1} className="card-img-top" alt="Client 1" />
              <div className="card-body">
                <p>"{language === 'en' ? 'This system has improved our interdepartmental communication and reduced delays!' : 'Ce système a amélioré notre communication inter-départementale et réduit les retards!'}</p>
                <footer className="blockquote-footer">{language === 'en' ? '- Client 1' : '- Client 1'}</footer>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card test-card">
              <img src={client2} className="card-img-top" alt="Client 2" />
              <div className="card-body">
                <p>"{language === 'en' ? 'A game changer for our internal processes and productivity!' : 'Un changement radical pour nos processus internes et notre productivité!'}</p>
                <footer className="blockquote-footer">{language === 'en' ? '- Client 2' : '- Client 2'}</footer>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card test-card">
              <img src={client3} className="card-img-top" alt="Client 3" />
              <div className="card-body">
                <p>"{language === 'en' ? 'Efficient, quick, and reliable. Highly recommend it!' : 'Efficace, rapide et fiable. Je le recommande vivement!'}</p>
                <footer className="blockquote-footer">{language === 'en' ? '- Client 3' : '- Client 3'}</footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="contact" className="text-center py-5">
        <h3>{language === 'en' ? 'Contact Us to Boost Efficiency' : 'Contactez-nous pour améliorer l\'efficacité'}</h3>
        <p>{language === 'en' ? 'Get in touch to see how we can help streamline your processes.' : 'Contactez-nous pour voir comment nous pouvons rationaliser vos processus.'}</p>
        <Link to="/contact">
          <a href="/contact" className="btn btn-primary">{language === 'en' ? 'Contact Us' : 'Contactez-nous'}</a>
        </Link>
      </section>
    </div>
  );
};

export default Pic3Card;
