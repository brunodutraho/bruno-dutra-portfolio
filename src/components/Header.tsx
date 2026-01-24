import React, { useState, useContext } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../context/LanguageContext';

type MenuItem = {
  title: string;
  href: string;
};

type SocialLink = {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage } = useContext(LanguageContext);

  const menuItems: MenuItem[] = [
    { title: lang === 'pt' ? 'Início' : 'Home', href: '#home' },
    { title: lang === 'pt' ? 'Sobre' : 'About', href: '#sobre' },
    { title: lang === 'pt' ? 'Projetos' : 'Projects', href: '#projetos' },
    { title: lang === 'pt' ? 'Contato' : 'Contact', href: '#contato' },
  ];

  const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com/brunodutraho', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/brunodutraho/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bruno@brunoanalytics.org', label: 'Email' },
  ];

  return (
    <header className="fixed w-full bg-[#1B262C] text-white z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* LOGO / IDENTIDADE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-semibold tracking-wide leading-tight"
          >
            {/* Desktop */}
            <span className="hidden md:block text-xl">
              Bruno Dutra
              <span className="block text-sm text-[#BBE1FA] font-normal">
                {lang === 'pt' ? 'Analista de Dados Jr.' : 'Junior Data Analyst'}
              </span>
            </span>

            {/* Mobile */}
            <span className="md:hidden flex flex-col text-[1.1rem]">
              Bruno Dutra
              <span className="text-xs text-[#BBE1FA]">
                {lang === 'pt' ? 'Analista de Dados Jr.' : 'Junior Data Analyst'}
              </span>
            </span>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {menuItems.map(item => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="font-medium hover:text-[#BBE1FA] transition-colors"
                >
                  {item.title}
                </motion.a>
              ))}
            </div>

            {/* SOCIAL + LANG */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="hover:text-[#BBE1FA] transition-colors"
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}

              {/* LANG SWITCH */}
              <div className="flex items-center gap-2 ml-2">
                <motion.button
                  onClick={() => lang !== 'pt' && toggleLanguage()}
                  animate={{
                    scale: lang === 'pt' ? 1.15 : 1,
                    opacity: lang === 'pt' ? 1 : 0.5,
                  }}
                  className="p-[2px] rounded bg-white shadow"
                  title="Português"
                >
                  <img
                    src="https://flagcdn.com/40x30/br.png"
                    alt="Português"
                    className="w-7 h-4 rounded-sm"
                  />
                </motion.button>

                <motion.button
                  onClick={() => lang !== 'en' && toggleLanguage()}
                  animate={{
                    scale: lang === 'en' ? 1.15 : 1,
                    opacity: lang === 'en' ? 1 : 0.5,
                  }}
                  className="p-[2px] rounded bg-white shadow"
                  title="English"
                >
                  <img
                    src="https://flagcdn.com/40x30/us.png"
                    alt="English"
                    className="w-7 h-4 rounded-sm"
                  />
                </motion.button>
              </div>
            </div>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-3">
            {/* LANG */}
            <div className="flex gap-2">
              <button onClick={() => lang !== 'pt' && toggleLanguage()}>
                <img
                  src="https://flagcdn.com/40x30/br.png"
                  alt="PT"
                  className={`w-7 h-4 rounded-sm ${lang !== 'pt' && 'opacity-50'}`}
                />
              </button>
              <button onClick={() => lang !== 'en' && toggleLanguage()}>
                <img
                  src="https://flagcdn.com/40x30/us.png"
                  alt="EN"
                  className={`w-7 h-4 rounded-sm ${lang !== 'en' && 'opacity-50'}`}
                />
              </button>
            </div>

            {/* MENU TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="hover:text-[#BBE1FA]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-6 space-y-4"
          >
            {menuItems.map(item => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block font-medium hover:text-[#BBE1FA]"
              >
                {item.title}
              </a>
            ))}

            <div className="flex space-x-4 pt-4 border-t border-white/10">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#BBE1FA]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
