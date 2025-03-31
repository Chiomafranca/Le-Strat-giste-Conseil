import React, { useEffect } from 'react';
import { useLanguage } from "../SetLanguage/LanguageContext"; 
import icon1 from '../HeaderPages/images/icon1.png';
import icon2 from '../HeaderPages/images/icon2.png';
import icon3 from '../HeaderPages/images/icon3.png';
import pic11 from '../HeaderPages/images/pic11.png';
import './HomeContent.css';

const HomeContent = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Parallax Effect on Scroll
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax');
      const scrollPosition = window.pageYOffset;
      parallax.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="home-content-container">
      {/* Parallax Section */}
      <div className="parallax text-center p-5">
        <h3 className="font-weight-bold text-primary">
          {language === "fr"
            ? "Allez-vous façonner l'avenir ou être façonné par lui ?"
            : "Will you shape the future or be shaped by it?"}
        </h3>
        <p className="text-wrap text-muted">
          {language === "fr"
            ? "Nous aidons les organisations à façonner l’avenir avec confiance. En combinant notre expertise et notre innovation, nous les accompagnons vers un demain plus sûr et maîtrisé."
            : "We help organizations shape the future with confidence. By combining our expertise and innovation, we guide them toward a more secure and controlled tomorrow."}
        </p>
      </div>

      {/* Icon Features Section */}
     
      {/* Digital Marketing Section */}
      <div className="digital-marketing-section d-flex flex-wrap justify-content-center p-5 align-items-center">
        <div className="col-12 col-md-6 mb-4 text-center">
          <h1 className="fs-3 fs-md-1 text-dark font-weight-bold text-center mb-4">
            {language === "fr" ? "Marketing Numérique" : "Digital Marketing"}
          </h1>
          <p className="fs-5 text-muted">
            {language === "fr"
              ? "Boostez votre visibilité en ligne avec des stratégies de marketing numérique sur mesure pour votre entreprise."
              : "Boost your online visibility with tailored digital marketing strategies for your business."}
          </p>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={pic11} alt="Digital Marketing" className="w-100 rounded-3 shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
