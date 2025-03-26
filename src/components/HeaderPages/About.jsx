import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic14 from "../HeaderPages/images/pic14.png";
import pic15 from "../HeaderPages/images/pic15.webp";
import pic16 from '../HeaderPages/images/pic16.jpeg'

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light">Le Stratégiste</Link>

          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto flex-lg-row flex-column">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/home">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">À propos</Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* BODY */}
      <div className="py-5" style={{ backgroundColor: "#f8f9fa", color: "#333" }}>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ fontSize: "2.5rem", color: "#0d6efd" }}>À Propos de Nous</h1>
          <h5 className="text-muted">L’Excellence au Service de Vos Finances et de Votre Gestion</h5>
        </div>

        {/* Content Section (Text + Image) */}
        {/* Content Section (Text + Image) */}
<div className="container">
  <div className="row justify-content-center align-items-stretch">
    
    {/* Left: Text */}
    <div className="col-lg-6 col-md-10 d-flex align-items-stretch">
      <div className="p-4 bg-white rounded shadow w-100 d-flex flex-column justify-content-center h-100">
        <p className="fs-5" style={{ lineHeight: "1.8" }}>
          <strong>Les Stratégistes Conseil</strong> est un cabinet de conseil stratégique qui aide les organisations 
          à naviguer dans la complexité et à atteindre un succès durable grâce à une expertise approfondie et des approches 
          innovantes. Nous favorisons des <span className="fw-bold text-primary">partenariats collaboratifs</span>, des analyses 
          basées sur les données et des solutions personnalisées pour maximiser votre performance.
        </p>
      </div>
    </div>

    {/* Right: Image */}
    <div className="col-lg-6 col-md-10 d-flex align-items-stretch">
      <img src={pic14} alt="Finance Strategy" className="img-fluid rounded shadow w-100 h-100 object-fit-cover" />
    </div>

  </div>
</div>


        {/* Mission Section */}
       {/* Mission Section */}
<div className="container mt-5">
  <div className="row align-items-center">
    {/* Left: Image */}
    <div className="col-lg-5 col-md-10 text-center mb-4 mb-lg-0">
      <img src={pic15} alt="Mission" className="img-fluid rounded shadow-lg w-100" />
    </div>

    {/* Right: Mission Content */}
    <div className="col-lg-7 col-md-10">
      <h3 className="fw-bold text-primary text-center text-lg-start">Notre Mission</h3>
      
      <div className="d-flex flex-wrap gap-3 mt-3">
        <div className="w-100 w-md-50">
          ✅ <strong>Stratégies sur Mesure:</strong> Alignement avec le marché.
        </div>
        <div className="w-100 w-md-50">
          ✅ <strong>Excellence Opérationnelle:</strong> Optimisation des performances.
        </div>
        <div className="w-100 w-md-50">
          ✅ <strong>Clarté Financière:</strong> Décisions éclairées grâce à des données précises.
        </div>
        <div className="w-100 w-md-50">
          ✅ <strong>Développement des Talents:</strong> Constitution d’équipes performantes.
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Services Section */}
        <div className="container mt-5">
          <h3 className="text-center fw-bold text-primary mb-4">Nos Services</h3>
          <div className="row g-4">
            {/* Service 1 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow text-center d-flex flex-column justify-content-between h-100">
                <h5 className="fw-bold">📊 Conseil Financier</h5>
                <p>Planification & analyse, budgétisation, optimisation des coûts, gestion des risques.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow text-center d-flex flex-column justify-content-between h-100">
                <h5 className="fw-bold">⚙️ Amélioration Opérationnelle</h5>
                <p>Optimisation des processus, gestion de la performance, Lean Six Sigma.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow text-center d-flex flex-column justify-content-between h-100">
                <h5 className="fw-bold">👥 Capital Humain</h5>
                <p>Acquisition & développement des talents, transformation culturelle.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container text-center mt-5">
          <h3 className="fw-bold text-primary">Pourquoi Nous Choisir?</h3>
          <p className="mx-auto mt-3" style={{ maxWidth: "700px", lineHeight: "1.8" }}>
            Nous combinons <strong>innovation, expertise et excellence</strong> pour vous offrir des solutions 
            personnalisées qui garantissent votre succès dans un monde en perpétuelle évolution.
          </p>
        </div>

        <div className="container my-5">
  <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between p-5 rounded shadow-lg" 
       style={{ background: "linear-gradient(135deg, #0d6efd, #6610f2)", color: "#fff" }}>
    
    {/* Left: Text Content */}
    <div className="text-center text-lg-start mb-4 mb-lg-0">
  <h3 className="fw-bold" style={{ fontSize: "2rem", lineHeight: "1.5" }}>
    Prêt à faire passer votre entreprise au niveau supérieur ?
  </h3>
  <p className="mt-3" style={{ fontSize: "1.2rem" }}>
    Découvrez de nouvelles opportunités de croissance grâce à nos solutions expertes.
  </p>
  <Link to="/solutions">
      <button className="btn btn-light fw-bold mt-3 px-4 py-2">
  
         Nos Solutions  
    </button>
  </Link>
  
</div>


    {/* Right: Image */}
    <div>
      <img 
        src={pic16} 
        alt="Business Growth" 
        className="img-fluid rounded-circle shadow-lg w-100" 
        style={{ maxWidth: "350px", height: "auto" }} 
      />
    </div>

  </div>
</div>

      </div>
    </div>
  );
};

export default About;
