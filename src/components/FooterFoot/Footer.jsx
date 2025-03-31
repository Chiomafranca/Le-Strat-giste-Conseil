import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../SetLanguage/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className="footer">
      <div className="footer-container">
        {/* Text on the left side */}
        <div className="footer-text">
          <p>
            {language === 'fr'
              ? 'Contactez-nous dès maintenant pour profiter d’une consultation gratuite !'
              : 'Contact us now to get a free consultation!'}
          </p>
        </div>

        {/* Social Media Links on the right side */}
        <div className="footer-social-media">
          <a
            href="https://www.facebook.com/profile.php?id=61571482403972&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/lestrategistee"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/105976183/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/le_strategiste_conseil?igsh=MWI0MGk4ZHNwaDV1YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Additional Paragraph text */}
      <p className="footer-bottom">
        {language === 'fr'
          ? '© 2025 Le Strategiste Conseil - Tous droits réservés'
          : '© 2025 Le Strategiste Conseil - All Rights Reserved'}
      </p>
    </div>
  );
};

export default Footer;
