import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../SetLanguage/LanguageContext"; // Import the useLanguage hook
import "./Contact.css";
import pic12 from "../HeaderPages/images/pic12.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import ContactForm from "../Header/Container/ContactForm";

const Contact = () => {
  const { language } = useLanguage();  // Access language context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Texts for different languages
  const text = {
    en: {
      title: "Stay in Touch",
      followUs: "Follow Us",
      contactUs: "Contact us now for a free consultation!",
      contactViaWhatsapp: "Contact us via WhatsApp",
      email: "Email",
      phone: "Phone",
      location: "Our Location",
    },
    fr: {
      title: "Restons en Contact",
      followUs: "Suivez-nous",
      contactUs: "Contactez-nous dès maintenant pour bénéficier d'une consultation gratuite !",
      contactViaWhatsapp: "Contactez-nous via WhatsApp",
      email: "Email",
      phone: "Téléphone",
      location: "Notre Localisation",
    },
  };

  return (
    <div>
      {/* Navbar */}
          <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex justify-content-between">
          {/* Brand */}
          <Link to="/" className="navbar-brand text-light">Le Stratégiste</Link>
      
          {/* Toggler Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
      
          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex flex-lg-row flex-column gap-2 gap-lg-5">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/services">
                  {language === 'en' ? 'Services' : 'Services'}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  {language === 'en' ? 'About' : 'À propos'}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">
                  {language === 'en' ? 'Contact' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="container mt-5">
        <h1
          className="text-center text-uppercase fw-bold my-4"
          style={{ color: "#ff6347" }}
        >
          {text[language].title}
        </h1>

        <div className="row g-0 d-flex flex-column flex-md-row align-items-stretch">
          {/* Left Side: Image */}
          <div className="col-12 col-md-6">
            <img
              src={pic12}
              alt="Contact Us"
              className="w-100 h-100 object-fit-cover rounded-top rounded-md-start"
            />
          </div>

          {/* Right Side: Social Links */}
          <div
            className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center text-white p-4 rounded-bottom rounded-md-end"
            style={{
              background: "linear-gradient(135deg, #004e92, #000428)",
            }}
          >
            <h2 className="mb-4 fw-bold text-uppercase text-center border-bottom pb-2 w-75">
              {text[language].followUs}
            </h2>

            <ul className="list-unstyled w-100 d-flex flex-column gap-3">
              <li className="d-flex align-items-center gap-3">
                <FaFacebook size={32} className="text-light" />
                <a
                  href="https://www.facebook.com/profile.php?id=61571482403972&mibextid=ZbWKwL"
                  className="text-light fs-5 fw-bold text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>

              <li className="d-flex align-items-center gap-3">
                <FaTwitter size={32} className="text-light" />
                <a
                  href="https://x.com/lestrategistee"
                  className="text-light fs-5 fw-bold text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter/X
                </a>
              </li>

              <li className="d-flex align-items-center gap-3">
                <FaLinkedin size={32} className="text-light" />
                <a
                  href="https://www.linkedin.com/company/105976183/admin/dashboard/"
                  className="text-light fs-5 fw-bold text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li className="d-flex align-items-center gap-3">
                <FaInstagram size={32} className="text-light" />
                <a
                  href="https://www.instagram.com/le_strategiste_conseil?igsh=MWI0MGk4ZHNwaDV1YQ=="
                  className="text-light fs-5 fw-bold text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Details */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 text-center">
            <p className="fs-5 fs-md-4 mb-4" style={{ color: "#e63946" }}>
              {text[language].contactUs}
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=&text=Hi%2C%20I%20got%20your%20WhatsApp%20information%20from%20your%20website."
              className="btn btn-success btn-sm btn-md-lg mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp me-2"></i> {text[language].contactViaWhatsapp}
            </a>

            <div className="contact-info">
              <p className="fs-6 fs-md-5 mb-2">
                <strong>{text[language].email}:</strong>{" "}
                <a
                  href="mailto:info@lestrategisteconseil.com"
                  className="text-decoration-none text-dark"
                >
                  lestrategiste6@gmail.com
                </a>
              </p>
              <p className="fs-6 fs-md-5 mb-2">
                <strong>{text[language].phone}:</strong>{" "}
                <a href="tel:+2250500396969" className="text-decoration-none text-dark">
                  +2250500396969
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* FORM SECTION */}
        <ContactForm/>

        {/* Google Map Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <h2 className="text-center mb-4 fw-bold text-uppercase">
              {text[language].location}
            </h2>
            <div className="map-container rounded shadow mb-5" style={{ maxWidth: "90vw", width: "100%" }}>
              <iframe
                title="Google Map Location"
                width="100%"
                height="550"
                style={{ border: 0, borderRadius: "10px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127118.28815348039!2d-4.062238529910965!3d5.348615500869609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan!5e0!3m2!1sen!2sci!4v1742922581234!5m2!1sen!2sci"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;
