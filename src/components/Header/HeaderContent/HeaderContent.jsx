import React from "react";
import { Link } from 'react-router-dom';
import './HeaderContent.css';
import pic from '../HeaderContent/images/pic1.png';

const HeaderContent = () => {
  return (
    <div className="container py-5 py-sm-3 pt-sm-0">
      <div className="row align-items-center justify-content-between">
        {/* Text Section */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start">
          <h1 className="display-3 fw-bold text-primary mb-4">
            Innovation & Pragmatisme
          </h1>
          <p className="lead text-muted mb-4">
            Alliant innovation et pragmatisme pour concevoir des stratégies efficaces et réalisables, générant un impact concret dans le monde des affaires d'aujourd'hui.
          </p>
          <Link to="/solutions">
            <button className="btn btn-primary btn-lg rounded-pill shadow-lg">
              Nos solutions
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src={pic}
            alt="rénovation"
            className="img-fluid rounded-circle shadow-lg"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="row text-center mt-5">
        <div className="col-12">
          <p className="lead text-muted">
            Notre expertise internationale nous permet de concevoir des solutions sur mesure, aussi uniques que les entreprises que nous accompagnons.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="row text-center mt-4">
        <div className="col-12">
          <p className="lead text-muted">
            Peu importe votre taille, secteur ou statut, nous offrons des solutions pour vous aider à innover, agir efficacement et réaliser vos ambitions. Découvrez nos services et construisons ensemble votre succès de demain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
