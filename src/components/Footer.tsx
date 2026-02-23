import React, { useContext } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { lang } = useContext(LanguageContext);

  const texts = {
    pt: {
      closing:
        'Construindo soluções analíticas com foco em estrutura, clareza e evolução técnica contínua.',
      availability:
        'Disponível para oportunidades como Analista de Dados Jr.',
      downloadCV: 'Baixar CV',
      rights: 'Todos os direitos reservados.',
    },
    en: {
      closing:
        'Building analytical solutions with focus on structure, clarity and continuous technical growth.',
      availability:
        'Open to opportunities as Junior Data Analyst.',
      downloadCV: 'Download CV',
      rights: 'All rights reserved.',
    },
  };

  const t = texts[lang];

  return (
    <footer className="bg-[#0F1A20] text-white py-16">
      <div className="container mx-auto px-6">

        <div className="text-center mb-10">
          <p className="text-lg font-light mb-3">
            {t.closing}
          </p>

          <p className="text-sm text-gray-400">
            {t.availability}
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/brunodutraho"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BBE1FA] transition"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/brunodutraho/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BBE1FA] transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:bruno@brunoanalytics.org"
            className="hover:text-[#BBE1FA] transition"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="/bruno-dutra-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#BBE1FA] transition"
          >
            <Download className="w-5 h-5" />
            {t.downloadCV}
          </a>
        </div>

        <p className="text-gray-500 text-sm text-center">
          © {currentYear} Bruno Dutra. {t.rights}
        </p>

      </div>
    </footer>
  );
};

export default Footer;
