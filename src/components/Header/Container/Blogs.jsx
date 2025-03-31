import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../SetLanguage/LanguageContext";
import pic25 from "../../HeaderPages/images/pic25.jpg";
import logo from "../../HeaderPages/images/logo1.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './Blogs.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations


const Blogs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null); // Fix: Added state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  
  const accordionItems = [
    { 
      title: language === 'en' ? "Payroll" : "Paie", 
      content: language === 'en' 
        ? "Define payment schedules, confidentiality, compliance with labor laws." 
        : "Définir les horaires de paiement, la confidentialité, le respect des lois du travail." 
    },
    { 
      title: language === 'en' ? "Sales" : "Ventes", 
      content: language === 'en' 
        ? "Guidelines for recording sales transactions, revenue recognition policies." 
        : "Directives pour l'enregistrement des transactions de vente, politiques de reconnaissance des revenus." 
    },
    { 
      title: language === 'en' ? "Accounting" : "Comptabilité", 
      content: language === 'en' 
        ? "General ledger management, invoice verification, payment processing." 
        : "Gestion du grand livre, vérification des factures, traitement des paiements." 
    },
    { 
      title: language === 'en' ? "Budget" : "Budget", 
      content: language === 'en' 
        ? "Budget preparation, approval mechanisms, variance analysis." 
        : "Préparation du budget, mécanismes d'approbation, analyse des écarts." 
    },
    { 
      title: language === 'en' ? "Finance" : "Finance", 
      content: language === 'en' 
        ? "Investment strategies, risk management, financial controls." 
        : "Stratégies d'investissement, gestion des risques, contrôles financiers." 
    },
    { 
      title: language === 'en' ? "Reporting" : "Rapports", 
      content: language === 'en' 
        ? "Financial statements preparation, internal and external reporting." 
        : "Préparation des états financiers, rapports internes et externes." 
    }
  ];

  return (
    <div className="bg-light">
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


      {/* Hero Section */}
      <header className="position-relative text-white text-center">
        <img src={pic25} alt="Audit Planning" className="w-100 hero-image" style={{ height: "350px", objectFit: "cover" }} />
      </header>

      {/* Blog Content */}
      <div className="container my-5">
        <div className="row">
          {/* Blog Post 1 */}
          
    <div className="col-md-6">
      <div className="card border-0 shadow-sm h-100 blog-card">
        <img src={pic25} className="card-img-top" alt={language === 'en' ? "Audit Planning" : "Planification Audit"} />
        <div className="card-body">
          <h5 className="card-title fw-bold">
            {language === 'en' ? 'Audit Planning' : 'Planification d’Audit'}
          </h5>
          <p className="card-text">
            {language === 'en' 
              ? 'Our audit planning services focus on risk assessment, defining the scope, and creating a detailed plan that complies with professional standards.' 
              : 'Nos services de planification d’audit se concentrent sur l’évaluation des risques...'}
          </p>
          <div className="card-overlay">
            <p className="text-light">
              {language === 'en' 
                ? 'Our audit planning services focus on risk assessment, defining the scope, and creating a detailed plan that complies with professional standards.' 
                : 'Nos services de planification d’audit se concentrent sur l’évaluation des risques...'}
            </p>
          </div>
        </div>
      </div>
    </div>
          {/* Blog Post 2 */}
          <div className="col-md-6">
      <div className="card border-0 shadow-sm h-100 blog-card">
        <img src={logo} className="card-img-top" alt={language === 'en' ? "Framework Development" : "Développement du Cadre"} />
        <div className="card-body">
          <h5 className="card-title fw-bold">
            {language === 'en' ? 'Framework Development' : 'Développement du Cadre'}
          </h5>
          <p className="card-text">
            {language === 'en' 
              ? 'We focus on precision, compliance, and transparency in managing financial departments, ensuring the integrity and smooth operation of financial systems.' 
              : 'Vision et objectifs : Précision, conformité, transparence...'}
          </p>
          <div className="card-overlay">
            <p className="text-light">
              {language === 'en' 
                ? 'We focus on precision, compliance, and transparency in managing financial departments, ensuring the integrity and smooth operation of financial systems.' 
                : 'Nous nous concentrons sur la précision, la conformité et la transparence dans la gestion des départements financiers, en assurant l’intégrité et le bon fonctionnement des systèmes financiers.'}
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>

        {/* Framework Development Details */}
        <div className="container my-5">
      <h4 className="fw-bold text-center mb-4">
        {language === 'en' ? 'Framework Development' : 'Développement du Cadre'}
      </h4>
      <div className="accordion" id="frameworkAccordion">
        {accordionItems.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button fw-bold ${activeIndex === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion(index)}
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
              style={{ transition: "all 0.3s ease-in-out" }}
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
        
      </div>

         {/* Blog Section */}
         <div className="text-center mb-5 blog-card">
  <h2
    className="text-center py-3 mb-4 fs-3 fs-sm-2 fs-md-7"
    style={{
      background: "linear-gradient(90deg, #007bff, #6610f2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
      
    }}
  >
    {language === "en"
      ? "Get to know us better through posts about our work, our passions, and our culture."
      : "Apprenez à mieux nous connaître à travers des articles sur notre travail, nos passions et notre culture."}
  </h2>

  <div className="d-flex flex-wrap justify-content-between mt-4 border-top border-bottom py-3">
    <div className="px-3 col-12 col-md-4 mb-4">
      <div className="border-end text-start card-sm" data-aos="zoom-in">
        <h4>{language === "en" ? "When in doubt, improvise" : "En cas de doute, improvisez"}</h4>
        <p>
          {language === "en"
            ? "When in doubt, improvise. Kivilcim Gunay | 07/20/2022. Plan, prepare, practice. Three Ps leading to success in a world where we could always know how things will play out ahead of time. But reality is different. Sometimes, even the best plans fail. Improvisation is not just an escape—it’s a skill. It allows businesses to react quickly, seize unexpected opportunities, and pivot when necessary. Companies that embrace adaptability often thrive in dynamic environments."
            : "En cas de doute, improvisez. Kivilcim Gunay | 20/07/2022. Planifier, préparer, pratiquer. Trois P qui mènent au succès dans un monde où nous pourrions toujours savoir comment les choses vont se dérouler à l'avance. Mais la réalité est différente. Parfois, même les meilleurs plans échouent. L'improvisation n'est pas seulement une échappatoire, c'est une compétence. Elle permet aux entreprises de réagir rapidement, de saisir des opportunités inattendues et de pivoter lorsque cela est nécessaire. Les entreprises qui embrassent l'adaptabilité prospèrent souvent dans des environnements dynamiques."}
        </p>
      </div>
    </div>

    <div className="px-3 col-12 col-md-4 mb-4">
      <div className="border-end text-start card-sm" data-aos="zoom-in" data-aos-delay="200">
        <h4>{language === "en" ? "The Art of DesignOps" : "L'Art du DesignOps"}</h4>
        <p>
          {language === "en"
            ? "What is DesignOps? Design Operations enables creative teams to focus on what’s important: developing innovative and impactful ways to help clients accomplish their goals. It bridges the gap between design and development, streamlining workflows, improving collaboration, and ensuring consistency. Companies investing in DesignOps benefit from faster iteration cycles, higher-quality products, and smoother project execution. This practice is key to maintaining efficiency in fast-moving industries."
            : "Qu'est-ce que le DesignOps ? Les opérations de design permettent aux équipes créatives de se concentrer sur l'essentiel : développer des moyens innovants et percutants pour aider les clients à atteindre leurs objectifs. Cela comble le fossé entre le design et le développement, rationalisant les flux de travail, améliorant la collaboration et assurant la cohérence. Les entreprises investissant dans le DesignOps bénéficient de cycles d'itération plus rapides, de produits de meilleure qualité et d'une exécution de projet plus fluide. Cette pratique est essentielle pour maintenir l'efficacité dans les industries en évolution rapide."}
        </p>
      </div>
    </div>

    <div className="px-3 col-12 col-md-4 mb-4">
      <div className="text-start card-sm" data-aos="zoom-in" data-aos-delay="400">
        <h4>{language === "en" ? "Building effective organizational culture" : "Construire une culture organisationnelle efficace"}</h4>
        <p>
          {language === "en"
            ? "Organizational culture is the backbone of any company. It affects employee morale, client satisfaction, and ultimately, success. Building an effective culture involves fostering open communication, promoting collaboration, and supporting continuous learning and innovation. Organizations with strong cultures attract top talent, enhance employee retention, and boost productivity. A well-crafted culture gives companies the agility to thrive in competitive markets."
            : "La culture organisationnelle est l'épine dorsale de toute entreprise. Elle affecte le moral des employés, la satisfaction des clients et, en fin de compte, le succès. Construire une culture efficace implique de favoriser la communication ouverte, de promouvoir la collaboration et de soutenir l'apprentissage continu et l'innovation. Les organisations avec une culture forte attirent les meilleurs talents, améliorent la rétention des employés et augmentent la productivité. Une culture bien pensée donne aux entreprises l'agilité nécessaire pour prospérer sur des marchés compétitifs."}
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="bg-dark text-center text-white py-4 mt-5">
      <p className="mb-0">
        {language === 'en' 
          ? "&copy; 2025 Le Stratégiste | All rights reserved" 
          : "&copy; 2025 Le Stratégiste | Tous droits réservés"}
      </p>
    </footer>

      {/* CSS Styles */}
      <style>
        {`
          .blog-card {
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
          }
          .blog-card:hover {
            transform: scale(1.05);
          }
          .card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.7);
            padding: 10px;
            text-align: center;
            transform: translateY(100%);
            transition: transform 0.3s ease-in-out;
          }
          .blog-card:hover .card-overlay {
            transform: translateY(0);
          }
          .accordion-button {
            transition: all 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Blogs;
