import React, { useContext } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { lang } = useContext(LanguageContext);

  const texts = {
    pt: { rights: 'Todos os direitos reservados.' },
    en: { rights: 'All rights reserved.' },
  };

  const t = texts[lang];

  return (
    <footer className="bg-[#1B262C] text-white py-12">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/brunodutraho" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-[#BBE1FA]" />
          </a>
          <a href="https://www.linkedin.com/in/brunodutraho/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-[#BBE1FA]" />
          </a>
          <a href="mailto:bruno@brunoanalytics.org">
            <Mail className="w-6 h-6 hover:text-[#BBE1FA]" />
          </a>
        </div>

        <p className="text-gray-400 text-sm text-center">
          © {currentYear} Bruno Dutra. {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
