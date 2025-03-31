import React, { useEffect, useState } from 'react';
import { useLanguage } from '../SetLanguage/LanguageContext'; 
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import office1 from '../HeaderPages/images/office1.jpg';
import office2 from '../HeaderPages/images/office2.jpg';
import office3 from '../HeaderPages/images/office3.webp';
import office4 from '../HeaderPages/images/office4.avif';
import './ServicesContents.css';
import Serviceitems from './Servicesitems';

const ServicesContents = () => {
  const { language } = useLanguage(); 

  const services = [
    {
      img: office1,
      title: language === 'fr' ? "Intégration des processus et de la technologie" : "Process & Technology Integration",
      text: language === 'fr'
        ? "Nous rationalisons les opérations commerciales en analysant les flux de travail, en intégrant des outils numériques et en mettant en œuvre des systèmes ERP."
        : "We streamline business operations by analyzing workflows, integrating digital tools, and implementing ERP systems.",
      link: "/process-technology" 
    },
    {
      img: office2,
      title: language === 'fr' ? "Efficacité inter-départementale" : "Interdepartmental Efficiency",
      text: language === 'fr'
        ? "La collaboration efficace est la clé du succès. Nous évaluons la communication inter-départementale et les dépendances des flux de travail."
        : "Effective collaboration is key to success. We assess interdepartmental communication and workflow dependencies.",
      link: "/interdepartmental-efficiency" 
    },
    {
      img: office3,
      title: language === 'fr' ? "Optimisation de la chaîne d'approvisionnement et des opérations" : "Supply Chain & Operations Optimization",
      text: language === 'fr'
        ? "Nous améliorons la logistique, l'approvisionnement et la gestion des ressources pour améliorer le contrôle des coûts et l'efficacité."
        : "We enhance logistics, procurement, and resource management to improve cost control and efficiency.",
      link: "/supply-chain-operations" 
    },
    {
      img: office4,
      title: language === 'fr' ? "Gestion de la performance et des risques" : "Performance & Risk Management",
      text: language === 'fr'
        ? "Nous établissons des systèmes de suivi de la performance basés sur les KPI pour optimiser la productivité des équipes et aligner les opérations sur les objectifs stratégiques."
        : "We establish KPI-based performance tracking systems to optimize team productivity and align operations with strategic goals.",
      link: "/performance-risk" 
    }
  ];

  // Intersection Observer to detect when the service cards come into view
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
        threshold: 0.3, // 30% of the card should be in view
      }
    );

    const fadeInServices = document.querySelectorAll('.fade-in-service');
    fadeInServices.forEach(service => observer.observe(service));

    return () => {
      fadeInServices.forEach(service => observer.unobserve(service));
    };
  }, []);

  return (
    <>
      {/* Services Section */}
      <div className="services-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold text-white" style={{ fontSize: "2.5rem" }}>
              {language === 'fr' ? "Nos Services" : "Our Services"}
            </h1>
            <p className="text-white">
              {language === 'fr' ? "Des solutions innovantes pour optimiser votre entreprise" : "Innovative solutions to optimize your business"}
            </p>
          </div>

          {/* Services Grid with Scroll Effect */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-6 d-flex fade-in-service" key={index}>
                <Link to={service.link} className="text-decoration-none">
                  <div className="card shadow-lg border-0 h-100 service-card">
                    <img src={service.img} className="card-img-top" alt={service.title} />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title fw-bold text-white mt-3">{service.title}</h5>
                      <p className="card-text flex-grow-1 text-light">{service.text}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Service Items */}
      <div>
        <Serviceitems />
      </div>
    </>
  );
};

export default ServicesContents; /* Services Section Styling */