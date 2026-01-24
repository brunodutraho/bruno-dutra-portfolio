import React, { createContext, useState } from "react";

export const LanguageContext = createContext({
  lang: "pt",
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("pt"); // português padrão

  const toggleLanguage = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};