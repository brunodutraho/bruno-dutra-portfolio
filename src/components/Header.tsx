import React, { useState, useContext } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <>
      <header className="fixed top-0 left-0 w-full h-[4rem] bg-[#1B262C]/95 backdrop-blur-sm text-white z-50 border-b border-white/5 sm:h-[5.5rem]">
        <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* IDENTIDADE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="leading-tight flex flex-col"
          >
            <span className="text-base md:text-lg lg:text-xl font-semibold">
              Bruno Dutra
            </span>

            {/* Texto que deve aparecer SEMPRE */}
            <span className="text-[11px] md:text-xs text-white/60 mt-1 whitespace-nowrap">
              Python • SQL • Power BI • Streamlit
            </span>

            {/* Subtítulo estratégico controlado por 1100px */}
            <span className="hidden [@media(min-width:1100px)]:block text-sm text-[#BBE1FA] font-normal mt-1 whitespace-nowrap">
              {lang === 'pt'
                ? 'Analista de Dados | Transformando Dados em Decisões Estratégicas'
                : 'Data Analyst | Turning Data into Strategic Decisions'}
            </span>
          </motion.div>

          {/* DESKTOP AREA */}
          <div className="hidden md:flex items-center gap-6">

            {/* MENU LINKS */}
            <div className="flex gap-5">
              {menuItems.map(item => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium hover:text-[#BBE1FA] transition-colors whitespace-nowrap"
                >
                  {item.title}
                </motion.a>
              ))}
            </div>

            {/* CTA somente lg+ */}
            <motion.a
              href="#projetos"
              whileHover={{ scale: 1.05 }}
              className="hidden lg:inline-flex px-4 py-2 bg-[#BBE1FA] text-[#1B262C] rounded-md text-sm font-medium whitespace-nowrap"
            >
              {lang === 'pt' ? 'Projetos em Produção' : 'Live Projects'}
            </motion.a>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">
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
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* LANGUAGE */}
            <div className="flex items-center gap-2">
              <button onClick={() => lang !== 'pt' && toggleLanguage()}>
                <img
                  src="https://flagcdn.com/40x30/br.png"
                  className={`w-6 h-4 rounded-sm transition-opacity ${
                    lang === 'pt' ? 'opacity-100' : 'opacity-50'
                  }`}
                />
              </button>
              <button onClick={() => lang !== 'en' && toggleLanguage()}>
                <img
                  src="https://flagcdn.com/40x30/us.png"
                  className={`w-6 h-4 rounded-sm transition-opacity ${
                    lang === 'en' ? 'opacity-100' : 'opacity-50'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* MOBILE BUTTON + LANGUAGE */}
          <div className="md:hidden flex items-center gap-3">

            {/* LANGUAGE MOBILE */}
            <div className="flex items-center gap-2">
              <button onClick={() => lang !== 'pt' && toggleLanguage()}>
                <img
                  src="https://flagcdn.com/40x30/br.png"
                  className={`w-6 h-4 rounded-sm transition-opacity ${
                    lang === 'pt' ? 'opacity-100' : 'opacity-50'
                  }`}
                />
              </button>

              <button onClick={() => lang !== 'en' && toggleLanguage()}>
                <img
                  src="https://flagcdn.com/40x30/us.png"
                  className={`w-6 h-4 rounded-sm transition-opacity ${
                    lang === 'en' ? 'opacity-100' : 'opacity-50'
                  }`}
                />
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="hover:text-[#BBE1FA]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
                            
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY (INALTERADO) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-80 bg-[#1B262C] text-white z-[100] shadow-2xl p-8 flex flex-col md:hidden"
            >
              <div className="flex justify-end mb-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#BBE1FA] transition-colors"
                >
                  <X size={26} />
                </button>
              </div>

              <div className="flex flex-col space-y-6 text-lg">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="font-medium text-white hover:text-[#BBE1FA] transition-colors"
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-white/10 flex space-x-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-white hover:text-[#BBE1FA] transition-colors"
                    title={label}
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;