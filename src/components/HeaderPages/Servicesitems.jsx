import React from 'react';
import pic6 from '../HeaderPages/images/pic6.webp';
import './Servicesitems.css';

const Serviceitems = () => {
  return (
    <div className="service-item-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Croissance Stratégique et Gestion du Changement</h2>
            <p className="lead text-muted">
              Nous travaillons en étroite collaboration avec les équipes dirigeantes pour définir les objectifs stratégiques 
              et élaborer des plans de croissance concrets. Notre approche structurée de la gestion du changement garantit 
              des transitions fluides avec un minimum de perturbations et un maximum d'engagement des employés, aidant ainsi 
              les organisations à s'adapter et à prospérer dans des marchés en constante évolution.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <div className="image-wrapper text-center">
              <img src={pic6} alt="Croissance Stratégique" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceitems;
