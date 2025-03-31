import React, { useState, useEffect } from 'react';
import { useLanguage } from '../SetLanguage/LanguageContext'; 
import './Tooltip.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaPlusSquare, FaEllipsisH } from 'react-icons/fa';

const Tooltip = () => {
  const { language } = useLanguage(); 
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className={`tooltip-wrapper ${!showTooltip ? 'hidden' : ''}`}>
      {showTooltip && (
        <div className="tooltip-container">
          <button className="tooltip-button" onClick={handleClick}>
            <FaPlusSquare className="tooltip-icon" />
            <span className="tooltip-text">
              {language === 'fr' ? "En savoir plus" : "Learn More"}
            </span>
            <FaEllipsisH className="dot-icon" />
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-hidden="false">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {language === 'fr' ? "En savoir plus sur notre entreprise" : "Learn More About Our Company"}
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <h6>{language === 'fr' ? "À propos de nous" : "About Us"}</h6>
                <p>
                  {language === 'fr'
                    ? "Chez Le Stratégiste, nous nous engageons à fournir des solutions innovantes qui aident les entreprises à réussir."
                    : "At Le Stratégiste, we are committed to providing innovative solutions that help businesses succeed."}
                </p>

                <h6>{language === 'fr' ? "Notre mission" : "Our Mission"}</h6>
                <p>
                  {language === 'fr'
                    ? "Notre mission est d'améliorer l'efficacité, d'augmenter la productivité et de créer une valeur durable."
                    : "Our mission is to enhance efficiency, increase productivity, and create lasting value."}
                </p>

                <h6>{language === 'fr' ? "Pourquoi nous choisir ?" : "Why Choose Us?"}</h6>
                <ul>
                  <li>{language === 'fr' ? "Des solutions innovantes adaptées à votre entreprise." : "Innovative solutions tailored to your business."}</li>
                  <li>{language === 'fr' ? "Une équipe de support dédiée, disponible 24/7." : "A dedicated support team available 24/7."}</li>
                  <li>{language === 'fr' ? "Des produits évolutifs qui grandissent avec vos besoins." : "Scalable products that grow with your needs."}</li>
                  <li>{language === 'fr' ? "Une expérience éprouvée et un succès reconnu." : "Proven experience and recognized success."}</li>
                </ul>
                <p>
                  {language === 'fr'
                    ? "Si vous êtes prêt à faire passer votre entreprise au niveau supérieur, Le Stratégiste est votre partenaire idéal."
                    : "If you're ready to take your business to the next level, Le Stratégiste is your ideal partner."}
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  {language === 'fr' ? "Fermer" : "Close"}
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
