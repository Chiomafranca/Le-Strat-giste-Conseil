import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
       <>
            <div className="container-fluid footer py-3"> 
            <div className="row justify-content-center mt-5">
            <div className="col-6 col-sm-3">
    <ul className="list-unstyled d-flex flex-column align-items-center">
        <li><h5 className="no-wrap">Le Consultant Stratégique</h5></li>
        <li className="text-center wrap-text">
            Votre Partenaire de Confiance en Finance et en Affaires
        </li>
    </ul>
</div>

<div className="col-6 col-sm-3">
                    <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li><h5>À Propos</h5></li>
                        <li><Link to="/team" className="footer-link">Équipe</Link></li>
                        <li><Link to="/history" className="footer-link">Histoire</Link></li>
                        <li><Link to="/careers" className="footer-link">Carrières</Link></li>
                    </ul>
                </div>

                <div className="col-6 col-sm-3">
                    <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li><h5>Confidentialité</h5></li>
                        <li><Link to="/privacy-policy" className="footer-link">Politique de Confidentialité</Link></li>
                        <li><Link to="/terms" className="footer-link">Termes et Conditions</Link></li>
                        <li><Link to="/contact" className="footer-link">Contactez-nous</Link></li>
                    </ul>
                </div>

                <div className="col-6 col-sm-3">
                    <ul className="list-unstyled d-flex flex-column align-items-center">
                        <li><h5>Réseaux Sociaux</h5></li>
                        <li><a href="https://www.facebook.com/profile.php?id=61571482403972&mibextid=ZbWKwL" className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://x.com/lestrategistee" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter/X</a></li>
                        <li><a href="https://www.linkedin.com/company/105976183/admin/dashboard/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/le_strategiste_conseil?igsh=MWI0MGk4ZHNwaDV1YQ==" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                   </ul>
                </div>
            </div>
        </div>
       </>
    );
}

export default Footer;
