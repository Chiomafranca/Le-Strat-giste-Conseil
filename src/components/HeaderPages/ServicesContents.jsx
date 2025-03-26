import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic2 from '../HeaderPages/images/pic2.jpeg';
import pic3 from '../HeaderPages/images/pic3.jpg';
import pic4 from '../HeaderPages/images/pic4.jpeg';
import pic5 from '../HeaderPages/images/pic5.jpeg';
import './ServicesContents.css';
import Serviceitems from './Servicesitems';

const ServicesContents = () => {
  const services = [
    { img: pic2, title: "Intégration des processus et de la technologie", text: "Nous rationalisons les opérations commerciales en analysant les flux de travail, en intégrant des outils numériques et en mettant en œuvre des systèmes ERP." },
    { img: pic3, title: "Efficacité inter-départementale", text: "La collaboration efficace est la clé du succès. Nous évaluons la communication inter-départementale et les dépendances des flux de travail." },
    { img: pic4, title: "Optimisation de la chaîne d'approvisionnement et des opérations", text: "Nous améliorons la logistique, l'approvisionnement et la gestion des ressources pour améliorer le contrôle des coûts et l'efficacité." },
    { img: pic5, title: "Gestion de la performance et des risques", text: "Nous établissons des systèmes de suivi de la performance basés sur les KPI pour optimiser la productivité des équipes et aligner les opérations sur les objectifs stratégiques." }
  ];

  return (
    <>
    
      <div className="services-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
          <h1 className="fw-bold text-dark" style={{ fontSize: "2.5rem" }}>
  Nos Services
</h1>
<p className="text-dark">
  Des solutions innovantes pour optimiser votre entreprise
</p>

          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-6 d-flex" key={index}>
                <div className="card shadow-lg border-0 h-100 service-card">
                  <img src={service.img} className="card-img-top" alt={service.title} />
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title fw-bold text-primary mt-3">{service.title}</h5>
                    <p className="card-text flex-grow-1">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
   <div>
   <Serviceitems />
   </div>
    </>
  );
};

export default ServicesContents;
