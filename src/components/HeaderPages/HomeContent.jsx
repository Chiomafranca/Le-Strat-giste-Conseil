import React from "react";
import icon1 from '../HeaderPages/images/icon1.png';
import icon2 from '../HeaderPages/images/icon2.png';
import icon3 from '../HeaderPages/images/icon3.png';
import pic10 from '../HeaderPages/images/pic10.webp';
import pic11 from '../HeaderPages/images/pic11.png';
import './HomeContent.css';

const HomeContent = () => {
  return (
    <div className="home-content-container">
      {/* Intro Section */}
      <div className="text-center p-5">
        <h3 className="font-weight-bold text-primary">Allez-vous façonner l'avenir ou être façonné par lui ?</h3>
        <p className="text-wrap text-muted">
          Nous aidons les organisations à façonner l’avenir avec confiance. <br />
          En combinant notre expertise et notre innovation, <br />
          nous les accompagnons vers un demain plus sûr et maîtrisé.
        </p>
      </div>

      {/* Icon Features Section */}
      <div className="d-flex flex-wrap justify-content-center gap-5">
        <div className="text-center feature-card" style={{ maxWidth: "300px" }}>
          <img src={icon1} alt="Growth Icon" className="feature-icon mb-3" />
          <h4 className="font-weight-bold">Croissance Stratégique et Expansion</h4>
          <p className="feature-text">
            Stimulez la croissance de votre entreprise avec une planification stratégique,
            une expansion ciblée et des partenariats solides pour atteindre vos objectifs.
          </p>
        </div>

        <div className="text-center feature-card" style={{ maxWidth: "300px" }}>
          <img src={icon2} alt="Efficiency Icon" className="feature-icon mb-3" />
          <h4 className="font-weight-bold">Efficacité et Clarté</h4>
          <p className="feature-text">
            Assurez la transparence et l’efficacité de votre entreprise grâce à une organisation experte,
            couvrant la gestion des processus et la coordination des départements pour une performance optimale.
          </p>
        </div>

        <div className="text-center feature-card" style={{ maxWidth: "300px" }}>
          <img src={icon3} alt="Expertise Icon" className="feature-icon mb-3" />
          <h4 className="font-weight-bold">Organisation Experte</h4>
          <p className="feature-text">
            Optimisez votre entreprise avec une gestion experte de la comptabilité,
            de l’audit interne et du contrôle des stocks pour une performance exceptionnelle.
          </p>
        </div>
      </div>

   {/* Financial Reports Section */}
<div className="financial-reports-section d-flex flex-wrap justify-content-center p-5 align-items-center">
  <div className="col-12 col-md-6 mb-4">
    <h3 className="fs-2 text-dark font-weight-bold text-center mb-4">Rapports Financiers Précis et Ponctuels</h3>
    <p className="fs-5 text-muted">
      Chez Le Stratégiste Consultancy Firm, nous reconnaissons que des rapports financiers
      précis et opportuns sont des outils essentiels pour évaluer la santé financière de votre
      entreprise, répondre aux obligations légales et réglementaires et soutenir la prise de décisions stratégiques.
    </p>
  </div>
  <div className="col-12 col-md-6">
    <img src={pic10} alt="Financial Reports" className="w-100 rounded-3 shadow-lg" />
  </div>
</div>

{/* Digital Marketing Section */}
<div className="digital-marketing-section d-flex flex-wrap justify-content-center p-5 align-items-center">
  <div className="col-12 col-md-6 mb-4 text-center">
    <h1 className="fs-3 fs-md-1 text-dark font-weight-bold mb-4">Marketing Digital</h1>
    <p className="fs-5 text-muted">
      Adoptez des stratégies innovantes en marketing digital pour maximiser votre
      visibilité en ligne et atteindre efficacement vos objectifs commerciaux.
    </p>
  </div>
  <div className="col-12 col-md-6">
    <img src={pic11} alt="Digital Marketing" className="w-100 rounded-3 shadow-lg img-fluid" style={{ height: '350px', objectFit: 'cover' }} />
    <p className="fs-md-4 text-muted mt-3 text-center">
      Nous aidons les organisations à façonner l'avenir avec confiance. En combinant notre expertise et notre
      innovation, nous les guidons vers un avenir plus sécurisé et maîtrisé.
    </p>
  </div>
</div>


    </div>
  );
};

export default HomeContent;
