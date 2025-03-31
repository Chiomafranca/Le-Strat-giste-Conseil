import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the LanguageContext
const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
 
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? savedLanguage : 'fr';
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); 
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access the language context
export const useLanguage = () => useContext(LanguageContext);
