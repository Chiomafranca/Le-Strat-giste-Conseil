import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from "../../SetLanguage/LanguageContext";
import pic from "../HeaderContent/images/pic1.png";
import "./HeaderContents.css";
import icon1 from '../../HeaderPages/images/icon1.png';
import icon2 from '../../HeaderPages/images/icon2.png';
import icon3 from '../../HeaderPages/images/icon3.png';
import pic10 from '../../HeaderPages/images/pic10.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations
import ContactForm from '../../Header/Container/ContactForm'

const HeaderContents = () => {
  const { language, setLanguage } = useLanguage();  

  const content = {
    fr: {
      title: "Innovation & Pragmatisme",
      description: "Alliant innovation et pragmatisme pour concevoir des stratégies efficaces et réalisables, générant un impact concret dans le monde des affaires d'aujourd'hui.",
      buttonText: "Nos solutions",
      additionalInfo1: "Notre expertise internationale nous permet de concevoir des solutions sur mesure, aussi uniques que les entreprises que nous accompagnons.",
      additionalInfo2: "Peu importe votre taille, secteur ou statut, nous offrons des solutions pour vous aider à innover, agir efficacement et réaliser vos ambitions. Découvrez nos services et construisons ensemble votre succès de demain."
    },
    en: {
      title: "Innovation & Pragmatism",
      description: "Combining innovation and pragmatism to design effective and achievable strategies that create a tangible impact in today's business world.",
      buttonText: "Our Solutions",
      additionalInfo1: "Our international expertise allows us to design tailored solutions as unique as the businesses we support.",
      additionalInfo2: "No matter your size, industry, or status, we offer solutions to help you innovate, act efficiently, and achieve your ambitions. Explore our services, and let’s build your success for tomorrow together."
    }
  };

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

  const { title, description, buttonText, additionalInfo1, additionalInfo2 } = content[language];

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-fluid py-5 position-relative z-3">
    

      {/* Hero Section */}
      {/* {cards.map((cards, index) => (  // Make sure index is defined here
  <div key={index} className="col-12 col-md-4 d-flex justify-content-center">
    <div 
      className="card shadow-lg border-0 p-3 text-center h-100 d-flex flex-column"
      style={{ backgroundColor: "white", color: "black", borderRadius: "12px" }}
    >
      <img 
        src={cards.icon} 
        alt={language === "en" ? cards.titleEn : cards.titleFr} 
        className="card-img-top icon mx-auto" 
      />
      <div className="card-body d-flex flex-column">
        <h4 className="card-title text-primary fw-bold">
          {language === "en" ? cards.titleEn : cards.titleFr}
        </h4>
        <p className="card-text flex-grow-1 text-muted">
          {language === "en" ? cards.textEn : cards.textFr}
        </p>
      </div>
    </div>
  </div>
))} */}



{/* FORM SECTION */}
<ContactForm/>
 {/* Cards Section */}
 <div className="container py-5">
  <div className="row g-4 justify-content-center">
    {cards.map((card, index) => (
      <div key={index} className="col-12 col-md-4 d-flex justify-content-center">
        <div 
          className="card  shadow-lg border-0 p-3 text-center h-100 d-flex flex-column"
          style={{ backgroundColor: "white", color: "black", borderRadius: "12px" }} // Inline CSS
        >
          <img 
            src={card.icon} 
            alt={language === "en" ? card.titleEn : card.titleFr} 
            className="card-img-top icon mx-auto" 
          />
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


     
    <div className="container py-5">
  <div className="row text-center justify-content-center">
    {/* Feature 1 */}
    <div className="col-12 col-md-4 mb-4">
      <img src={icon1} alt="Growth Icon" style={{ width: "60px" }} className="mb-3" />
      <h4 className="fw-bold">
        {language === "fr" ? "Croissance Stratégique et Expansion" : "Strategic Growth and Expansion"}
      </h4>
      <p className="text-muted">
        {language === "fr"
          ? "Stimulez la croissance de votre entreprise avec une planification stratégique, une expansion ciblée et des partenariats solides pour atteindre vos objectifs."
          : "Drive your business growth with strategic planning, targeted expansion, and strong partnerships to achieve your goals."}
      </p>
    </div>

    {/* Feature 2 */}
    <div className="col-12 col-md-4 mb-4">
      <img src={icon2} alt="Efficiency Icon" style={{ width: "60px" }} className="mb-3" />
      <h4 className="fw-bold">
        {language === "fr" ? "Efficacité et Clarté" : "Efficiency and Clarity"}
      </h4>
      <p className="text-muted">
        {language === "fr"
          ? "Assurez la transparence et l’efficacité de votre entreprise grâce à une organisation experte, couvrant la gestion des processus et la coordination des départements pour une performance optimale."
          : "Ensure transparency and efficiency in your business through expert organization, covering process management and department coordination for optimal performance."}
      </p>
    </div>

    {/* Feature 3 */}
    <div className="col-12 col-md-4 mb-4">
      <img src={icon3} alt="Expertise Icon" style={{ width: "60px" }} className="mb-3" />
      <h4 className="fw-bold">
        {language === "fr" ? "Organisation Experte" : "Expert Organization"}
      </h4>
      <p className="text-muted">
        {language === "fr"
          ? "Optimisez votre entreprise avec une gestion experte de la comptabilité, de l’audit interne et du contrôle des stocks pour une performance exceptionnelle."
          : "Optimize your business with expert management of accounting, internal auditing, and inventory control for exceptional performance."}
      </p>
    </div>
  </div>
</div>

    
      
     {/* Other Sections  */}
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

    
      {/* Footer Section */}
     <div 
       className="d-flex flex-column flex-md-row justify-content-between align-items-center text-light p-4 mt-5"

       style={{ background: "navy", borderRadius: "10px", padding: "10px" }}
       
      >
  <div className="w-100 w-md-50 mb-3  mb-md-0 text-center text-md-start">
    <h4 className="mr-5">{language === "en" ? "Tailor-made solutions" : "Solutions sur mesure"}</h4>
    <p 
  className="text-light"
  
>
  {language === "en"
    ? "Our international expertise gives us the ability to create tailor-made solutions as unique as the companies we support."
    : "Notre expertise internationale nous permet de créer des solutions sur mesure aussi uniques que les entreprises que nous accompagnons."}
</p>

  </div>
  
  <div className="w-100 w-md-50 d-flex justify-content-center justify-content-md-end">
  <ul className="list-unstyled mb-0">
    <Link to="/blogs">
      <li>
        <a href="/blog" className="hover-effect text-light text-decoration-none fw-bold">
          {language === "en" ? "The Strategist Blog" : "Le Blog Stratégiste"}
        </a>
      </li>
    </Link>
  </ul>
</div>

</div>

    </div>
  );
};

export default HeaderContents;
