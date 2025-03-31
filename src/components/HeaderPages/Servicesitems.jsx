import React, { useEffect, useState } from 'react';
import { useLanguage } from '../SetLanguage/LanguageContext'; 
import pic6 from '../HeaderPages/images/pic6.webp';
import './Servicesitems.css';

const Serviceitems = () => {
  const { language } = useLanguage();  
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.3, // 30% of the element should be in view
      }
    );

    const fadeInElements = document.querySelectorAll('.fade-in-service-item');
    fadeInElements.forEach(item => observer.observe(item));

    return () => {
      fadeInElements.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="service-item-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 mb-4 mb-lg-0 fade-in-service-item">
            <h2 className="fw-bold mb-3">
              {language === 'fr'
                ? "Croissance Stratégique et Gestion du Changement"
                : "Strategic Growth & Change Management"}
            </h2>
            <p className="lead text-muted">
              {language === 'fr'
                ? "Nous travaillons en étroite collaboration avec les équipes dirigeantes pour définir les objectifs stratégiques et élaborer des plans de croissance concrets. Notre approche structurée de la gestion du changement garantit des transitions fluides avec un minimum de perturbations et un maximum d'engagement des employés, aidant ainsi les organisations à s'adapter et à prospérer dans des marchés en constante évolution."
                : "We work closely with leadership teams to define strategic goals and develop concrete growth plans. Our structured approach to change management ensures smooth transitions with minimal disruptions and maximum employee engagement, helping organizations adapt and thrive in ever-evolving markets."
              }
            </p>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 fade-in-service-item">
            <div className="image-wrapper text-center">
              <img src={pic6} alt={language === 'fr' ? "Croissance Stratégique" : "Strategic Growth"} className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceitems;
