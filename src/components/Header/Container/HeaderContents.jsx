import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from "../../SetLanguage/LanguageContext";
import pic from "../HeaderContent/images/pic1.png";
import "./HeaderContents.css";
import icon1 from '../../HeaderPages/images/icon1.png';
import icon2 from '../../HeaderPages/images/icon2.png';
import icon3 from '../../HeaderPages/images/icon3.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations
import ContactForm from '../../Header/Container/ContactForm'

const HeaderContents = () => {
  const { language, setLanguage } = useLanguage();  

  const content = {
    fr: {
      title: "Innovation & Pragmatisme",
      description: "Alliant innovation et pragmatisme pour concevoir des stratégies efficaces et réalisables, générant un impact concret dans le monde des affaires d'aujourd'hui.",
      buttonText: "Nos solutions",
      additionalInfo1: "Notre expertise internationale nous permet de concevoir des solutions sur mesure, aussi uniques que les entreprises que nous accompagnons.",
      additionalInfo2: "Peu importe votre taille, secteur ou statut, nous offrons des solutions pour vous aider à innover, agir efficacement et réaliser vos ambitions. Découvrez nos services et construisons ensemble votre succès de demain."
    },
    en: {
      title: "Innovation & Pragmatism",
      description: "Combining innovation and pragmatism to design effective and achievable strategies that create a tangible impact in today's business world.",
      buttonText: "Our Solutions",
      additionalInfo1: "Our international expertise allows us to design tailored solutions as unique as the businesses we support.",
      additionalInfo2: "No matter your size, industry, or status, we offer solutions to help you innovate, act efficiently, and achieve your ambitions. Explore our services, and let’s build your success for tomorrow together."
    }
  };

  const { title, description, buttonText, additionalInfo1, additionalInfo2 } = content[language];

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-fluid py-5 position-relative z-3">
    

      {/* Hero Section */}
      <div className="row align-items-center mb-5">
  <div className="col-md-6 ms-auto text-center text-md-left">
    <h1 className="display-4 fw-bold mb-4">{title}</h1>
    <p className="lead mb-4">{description}</p>
    <Link to="/solutions" className="btn btn-primary btn-lg">
      {buttonText}
    </Link>
  </div>

  <div className="col-md-6 me-auto text-center">
    <img
      src={pic}
      alt="Rénovation"
      className="img-fluid shadow-lg"
      style={{ maxHeight: "350px", objectFit: "cover" }}
    />
  </div>
</div>


      {/* Additional Information Sections */}
    
      {/* Blog Section */}
      <div className="text-center mb-5 blog-card">
  <h2
    className="text-center py-3 mb-4 fs-3 fs-sm-2 fs-md-7"
    style={{
      background: "linear-gradient(90deg, #007bff, #6610f2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
      
    }}
  >
    {language === "en"
      ? "Get to know us better through posts about our work, our passions, and our culture."
      : "Apprenez à mieux nous connaître à travers des articles sur notre travail, nos passions et notre culture."}
  </h2>

  <div className="d-flex flex-wrap justify-content-between mt-4 border-top border-bottom py-3">
    <div className="px-3 col-12 col-md-4 mb-4">
      <div className="border-end text-start card-sm" data-aos="zoom-in">
        <h4>{language === "en" ? "When in doubt, improvise" : "En cas de doute, improvisez"}</h4>
        <p>
          {language === "en"
            ? "When in doubt, improvise. Kivilcim Gunay | 07/20/2022. Plan, prepare, practice. Three Ps leading to success in a world where we could always know how things will play out ahead of time. But reality is different. Sometimes, even the best plans fail. Improvisation is not just an escape—it’s a skill. It allows businesses to react quickly, seize unexpected opportunities, and pivot when necessary. Companies that embrace adaptability often thrive in dynamic environments."
            : "En cas de doute, improvisez. Kivilcim Gunay | 20/07/2022. Planifier, préparer, pratiquer. Trois P qui mènent au succès dans un monde où nous pourrions toujours savoir comment les choses vont se dérouler à l'avance. Mais la réalité est différente. Parfois, même les meilleurs plans échouent. L'improvisation n'est pas seulement une échappatoire, c'est une compétence. Elle permet aux entreprises de réagir rapidement, de saisir des opportunités inattendues et de pivoter lorsque cela est nécessaire. Les entreprises qui embrassent l'adaptabilité prospèrent souvent dans des environnements dynamiques."}
        </p>
      </div>
    </div>

    <div className="px-3 col-12 col-md-4 mb-4">
      <div className="border-end text-start card-sm" data-aos="zoom-in" data-aos-delay="200">
        <h4>{language === "en" ? "The Art of DesignOps" : "L'Art du DesignOps"}</h4>
        <p>
          {language === "en"
            ? "What is DesignOps? Design Operations enables creative teams to focus on what’s important: developing innovative and impactful ways to help clients accomplish their goals. It bridges the gap between design and development, streamlining workflows, improving collaboration, and ensuring consistency. Companies investing in DesignOps benefit from faster iteration cycles, higher-quality products, and smoother project execution. This practice is key to maintaining efficiency in fast-moving industries."
            : "Qu'est-ce que le DesignOps ? Les opérations de design permettent aux équipes créatives de se concentrer sur l'essentiel : développer des moyens innovants et percutants pour aider les clients à atteindre leurs objectifs. Cela comble le fossé entre le design et le développement, rationalisant les flux de travail, améliorant la collaboration et assurant la cohérence. Les entreprises investissant dans le DesignOps bénéficient de cycles d'itération plus rapides, de produits de meilleure qualité et d'une exécution de projet plus fluide. Cette pratique est essentielle pour maintenir l'efficacité dans les industries en évolution rapide."}
        </p>
      </div>
    </div>

    <div className="px-3 col-12 col-md-4 mb-4">
      <div className="text-start card-sm" data-aos="zoom-in" data-aos-delay="400">
        <h4>{language === "en" ? "Building effective organizational culture" : "Construire une culture organisationnelle efficace"}</h4>
        <p>
          {language === "en"
            ? "Organizational culture is the backbone of any company. It affects employee morale, client satisfaction, and ultimately, success. Building an effective culture involves fostering open communication, promoting collaboration, and supporting continuous learning and innovation. Organizations with strong cultures attract top talent, enhance employee retention, and boost productivity. A well-crafted culture gives companies the agility to thrive in competitive markets."
            : "La culture organisationnelle est l'épine dorsale de toute entreprise. Elle affecte le moral des employés, la satisfaction des clients et, en fin de compte, le succès. Construire une culture efficace implique de favoriser la communication ouverte, de promouvoir la collaboration et de soutenir l'apprentissage continu et l'innovation. Les organisations avec une culture forte attirent les meilleurs talents, améliorent la rétention des employés et augmentent la productivité. Une culture bien pensée donne aux entreprises l'agilité nécessaire pour prospérer sur des marchés compétitifs."}
        </p>
      </div>
    </div>
  </div>
</div>

{/* FORM SECTION */}
<ContactForm/>

      {/* Footer Section */}
      <div 
  className="d-flex flex-column flex-md-row justify-content-between align-items-center text-light p-4 mt-5"
  style={{ background: "linear-gradient(135deg, #007bff, #6610f2)", borderRadius: "10px" }}
>
  <div className="w-100 w-md-50 mb-3 mb-md-0 text-center text-md-start">
    <h4>{language === "en" ? "Tailor-made solutions" : "Solutions sur mesure"}</h4>
    <p className="text-light">
      {language === "en"
        ? "Our international expertise gives us the ability to create tailor-made solutions as unique as the companies we support."
        : "Notre expertise internationale nous permet de créer des solutions sur mesure aussi uniques que les entreprises que nous accompagnons."}
    </p>
  </div>
  
  <div className="w-100 w-md-50 d-flex justify-content-center justify-content-md-end">
  <ul className="list-unstyled mb-0">
    <Link to="/blogs">
      <li>
        <a href="/blog" className="hover-effect text-light text-decoration-none fw-bold">
          {language === "en" ? "The Strategist Blog" : "Le Blog Stratégiste"}
        </a>
      </li>
    </Link>
  </ul>
</div>

</div>

    </div>
  );
};

export default HeaderContents;
