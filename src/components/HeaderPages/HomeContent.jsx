import React, { useEffect } from 'react';
import { useLanguage } from "../SetLanguage/LanguageContext"; 
import icon1 from '../HeaderPages/images/icon1.png';
import icon2 from '../HeaderPages/images/icon2.png';
import icon3 from '../HeaderPages/images/icon3.png';
import pic10 from '../HeaderPages/images/pic10.webp';
import pic11 from '../HeaderPages/images/pic11.png';
import './HomeContent.css';

const HomeContent = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Parallax Effect on Scroll
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax');
      const scrollPosition = window.pageYOffset;
      parallax.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const cards = [
    {
      icon: icon1,
      titleEn: "Global Optimization",
      titleFr: "Optimisation Globale",
      textEn: "Ensure transparency and efficiency across your operations with expertise in process management, department coordination, and optimization of your business functions.",
      textFr: "Assurez la transparence et l'efficacité de vos opérations grâce à une expertise en gestion des processus, coordination des départements et optimisation des fonctions de votre entreprise."
    },
    {
      icon: icon2,
      titleEn: "Financial Accounting and Bookkeeping",
      titleFr: "Comptabilité Financière et Tenue de Livres",
      textEn: "We offer two financial management solutions: fully outsourced accounting or a custom in-house system, managing your transactions, financial statements, and compliance.",
      textFr: "Nous proposons deux solutions de gestion financière : une comptabilité entièrement externalisée ou un système interne personnalisé, gérant vos transactions, états financiers et conformité."
    },
    {
      icon: icon3,
      titleEn: "Inventory Management and Costing",
      titleFr: "Gestion des Stocks et Évaluation des Coûts",
      textEn: "Adopt high-performance solutions for efficient inventory valuation and accurate cost assessment, contributing to optimized management accounting.",
      textFr: "Adoptez des solutions performantes pour une évaluation efficace des stocks et une estimation précise des coûts, contribuant à une comptabilité de gestion optimisée."
    }
  ];

  return (
    <div className="home-content-container">
      {/* Parallax Section */}
      <div className="parallax text-center p-5">
        <h3 className="font-weight-bold text-primary">
          {language === "fr"
            ? "Allez-vous façonner l'avenir ou être façonné par lui ?"
            : "Will you shape the future or be shaped by it?"}
        </h3>
        <p className="text-wrap text-muted">
          {language === "fr"
            ? "Nous aidons les organisations à façonner l’avenir avec confiance. En combinant notre expertise et notre innovation, nous les accompagnons vers un demain plus sûr et maîtrisé."
            : "We help organizations shape the future with confidence. By combining our expertise and innovation, we guide them toward a more secure and controlled tomorrow."}
        </p>
      </div>

      {/* Icon Features Section */}
      <div className="d-flex flex-wrap justify-content-center gap-5">
        <div className="text-center feature-card" style={{ maxWidth: "300px" }}>
          <img src={icon1} alt="Growth Icon" className="feature-icon mb-3" />
          <h4 className="font-weight-bold">
            {language === "fr" ? "Croissance Stratégique et Expansion" : "Strategic Growth and Expansion"}
          </h4>
          <p className="feature-text">
            {language === "fr"
              ? "Stimulez la croissance de votre entreprise avec une planification stratégique, une expansion ciblée et des partenariats solides pour atteindre vos objectifs."
              : "Drive your business growth with strategic planning, targeted expansion, and strong partnerships to achieve your goals."}
          </p>
        </div>

        <div className="text-center feature-card" style={{ maxWidth: "300px" }}>
          <img src={icon2} alt="Efficiency Icon" className="feature-icon mb-3" />
          <h4 className="font-weight-bold">
            {language === "fr" ? "Efficacité et Clarté" : "Efficiency and Clarity"}
          </h4>
          <p className="feature-text">
            {language === "fr"
              ? "Assurez la transparence et l’efficacité de votre entreprise grâce à une organisation experte, couvrant la gestion des processus et la coordination des départements pour une performance optimale."
              : "Ensure transparency and efficiency in your business through expert organization, covering process management and department coordination for optimal performance."}
          </p>
        </div>

        <div className="text-center feature-card" style={{ maxWidth: "300px" }}>
          <img src={icon3} alt="Expertise Icon" className="feature-icon mb-3" />
          <h4 className="font-weight-bold">
            {language === "fr" ? "Organisation Experte" : "Expert Organization"}
          </h4>
          <p className="feature-text">
            {language === "fr"
              ? "Optimisez votre entreprise avec une gestion experte de la comptabilité, de l’audit interne et du contrôle des stocks pour une performance exceptionnelle."
              : "Optimize your business with expert management of accounting, internal auditing, and inventory control for exceptional performance."}
          </p>
        </div>
      </div>

      {/* Other Sections */}
      <div className="financial-reports-section d-flex flex-wrap justify-content-center p-5 align-items-center">
        <div className="col-12 col-md-6 mb-4">
          <h3 className="fs-2 text-dark font-weight-bold text-center mb-4">
            {language === "fr" ? "Rapports Financiers Précis et Ponctuels" : "Accurate and Timely Financial Reports"}
          </h3>
          <p className="fs-5 text-muted">
            {language === "fr"
              ? "Chez Le Stratégiste Consultancy Firm, nous reconnaissons que des rapports financiers précis et opportuns sont des outils essentiels pour évaluer la santé financière de votre entreprise, répondre aux obligations légales et réglementaires et soutenir la prise de décisions stratégiques."
              : "At Le Stratégiste Consultancy Firm, we recognize that accurate and timely financial reports are essential tools for assessing your business's financial health, meeting legal and regulatory obligations, and supporting strategic decision-making."}
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img src={pic10} alt="Financial Reports" className="w-100 rounded-3 shadow-lg" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="container py-5">
      <div className="row g-4 justify-content-center">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card service-card shadow-lg border-0 p-3 text-center h-100 d-flex flex-column">
              <img src={card.icon} alt={language === "en" ? card.titleEn : card.titleFr} className="card-img-top icon mx-auto" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-primary fw-bold">
                  {language === "en" ? card.titleEn : card.titleFr}
                </h4>
                <p className="card-text flex-grow-1 text-muted">
                  {language === "en" ? card.textEn : card.textFr}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      

      {/* Digital Marketing Section */}
      <div className="digital-marketing-section d-flex flex-wrap justify-content-center p-5 align-items-center">
        <div className="col-12 col-md-6 mb-4 text-center">
          <h1 className="fs-3 fs-md-1 text-dark font-weight-bold text-center mb-4">
            {language === "fr" ? "Marketing Numérique" : "Digital Marketing"}
          </h1>
          <p className="fs-5 text-muted">
            {language === "fr"
              ? "Boostez votre visibilité en ligne avec des stratégies de marketing numérique sur mesure pour votre entreprise."
              : "Boost your online visibility with tailored digital marketing strategies for your business."}
          </p>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={pic11} alt="Digital Marketing" className="w-100 rounded-3 shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
