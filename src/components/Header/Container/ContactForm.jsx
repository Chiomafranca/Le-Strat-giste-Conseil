import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useLanguage } from "../../SetLanguage/LanguageContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email sent successfully:', result);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setSuccess(false);
    });
    
  };

  return (
    <div className="container py-5">
  
     <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg border-0 rounded-lg" style={{ backgroundColor: 'white', padding: '20px' }}>
            <div className="card-body">
              <h2 className="text-center mb-4 text-primary">{language === 'en' ? 'Contact Us' : 'Contactez-nous'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label">{language === 'en' ? 'Name' : 'Nom'}</label>
                  <input type="text" name="name" className="form-control shadow-sm" value={formData.name} onChange={handleChange} required placeholder={language === 'en' ? 'Enter your name' : 'Entrez votre nom'} />
                </div>
                <div className="mb-4">
                  <label className="form-label">{language === 'en' ? 'Email' : 'Email'}</label>
                  <input type="email" name="email" className="form-control shadow-sm" value={formData.email} onChange={handleChange} required placeholder={language === 'en' ? 'Enter your email' : 'Entrez votre email'} />
                </div>
                <div className="mb-4">
                  <label className="form-label">{language === 'en' ? 'Message' : 'Message'}</label>
                  <textarea name="message" className="form-control shadow-sm" rows="5" value={formData.message} onChange={handleChange} required placeholder={language === 'en' ? 'Write your message here' : 'Écrivez votre message ici'} />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-lg gradient-btn">{language === 'en' ? 'Send' : 'Envoyer'}</button>
                </div>
              </form>
              {success === true && (
                <div className="alert alert-success mt-4 text-center">{language === 'en' ? 'Message sent successfully!' : 'Message envoyé avec succès !'}</div>
              )}
              {success === false && (
                <div className="alert alert-danger mt-4 text-center">{language === 'en' ? 'Failed to send message.' : "Échec de l'envoi du message."}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <h1
  className="text-center mt-4"
  style={{
    color: "#fff",
    backgroundColor: 'darkblue',
    padding: "15px",
    borderRadius: "10px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
  }}
>
  {language === "en" ? "Get in Touch with Us" : "Prenez contact avec nous"}
</h1>
    </div>
  );
};

export default ContactForm;
