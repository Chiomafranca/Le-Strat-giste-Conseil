import React from "react";
import { Link } from 'react-router-dom'; 
import './HeaderContent.css';
import pic from '../HeaderContent/images/pic1.png';

const HeaderContent = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-between">
        {/* Text Section */}
        <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
          <h1 className="display-4 text-dark font-weight-bold mb-4">
            Innovation & Pragmatisme
          </h1>
          <p className="lead text-muted mb-4">
            Alliant innovation et pragmatisme pour concevoir des stratégies efficaces et réalisables, générant un impact concret dans le monde des affaires d'aujourd'hui.
          </p>
          
          <Link to="/solutions"> 
          <button className="btn btn-primary btn-lg shadow rounded-pill">
            Nos solutions
          </button>
             </Link>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <img src={pic} alt="rénovation" className="img-fluid rounded shadow-lg" />
        </div>
      </div>

      {/* Second Section */}
      <div className="row mt-5 text-center">
        <div className="col-12">
          <p className="lead text-muted mb-4">
            Notre expertise internationale nous permet de concevoir des solutions sur mesure, aussi uniques que les entreprises que nous accompagnons.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="row mt-4">
        <div className="col-12 text-center">
          <p className="lead text-muted">
            Peu importe votre taille, secteur ou statut, nous offrons des solutions pour vous aider à innover, agir efficacement et réaliser vos ambitions. Découvrez nos services et construisons ensemble votre succès de demain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
