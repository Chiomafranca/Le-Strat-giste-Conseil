import React, { useState, useEffect } from 'react';
import './Tooltip.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaPlusSquare, FaEllipsisH } from 'react-icons/fa';

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < lastScrollY) {
        setShowTooltip(true); 
      } else if (window.pageYOffset > lastScrollY) {
        setShowTooltip(false); 
      }
      setLastScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); 

  const handleClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className={`tooltip-wrapper ${!showTooltip ? 'hidden' : ''}`}>
      {showTooltip && (
        <div className="tooltip-container">
          <button className="tooltip-button" onClick={handleClick}>
            <FaPlusSquare className="tooltip-icon" />
            <span className="tooltip-text">En savoir plus</span>
            <FaEllipsisH className="dot-icon" />
          </button>
        </div>
      )}

      {/* Modale */}
      {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-hidden="false">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">En savoir plus sur notre entreprise</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <h6>À propos de nous</h6>
                <p>
                  Chez <strong>Le Stratégiste</strong>, nous nous engageons à fournir des solutions innovantes qui
                  aident les entreprises à se développer et à réussir dans le paysage numérique moderne. Nous sommes fiers d'offrir
                  des produits et services de haute qualité, adaptés à vos besoins spécifiques.
                </p>
                <p>
                  Notre équipe d'experts travaille sans relâche pour proposer des outils et des ressources de pointe afin de
                  dynamiser votre entreprise. Que vous recherchiez des solutions logicielles avancées, un support client fiable
                  ou des stratégies évolutives, nous sommes là pour vous accompagner à chaque étape.
                </p>

                <h6>Notre mission</h6>
                <p>
                  Notre mission est d'améliorer l'efficacité, d'augmenter la productivité et de créer une valeur durable pour
                  nos clients. Nous nous concentrons sur la satisfaction client et l'amélioration continue afin de bâtir des
                  relations de confiance à long terme.
                </p>

                <h6>Pourquoi nous choisir ?</h6>
                <ul>
                  <li>Des solutions innovantes adaptées à votre entreprise.</li>
                  <li>Une équipe de support dédiée, disponible 24/7.</li>
                  <li>Des produits évolutifs qui grandissent avec vos besoins.</li>
                  <li>Une expérience éprouvée et un succès reconnu dans l'industrie.</li>
                </ul>
                <p>
                  Si vous êtes prêt à faire passer votre entreprise au niveau supérieur, <strong>Le Stratégiste</strong> est
                  votre partenaire idéal. Construisons ensemble un avenir plus prometteur !
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
