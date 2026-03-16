import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { key: 'nav_home', id: 'home' },
    { key: 'nav_about', id: 'about' },
    { key: 'nav_experience', id: 'experience' },
    { key: 'nav_projects', id: 'projects' },
    { key: 'nav_contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#11212D]/80 backdrop-blur-xl border-b border-[#4A5C6A]/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-[#CCD0CF] flex"
          >
            <div className='w-[3rem] h-[3rem]'>
              <img src="logo-bruno-dutra.png" alt="Logo" />
            </div>
            <div className="ml-2 text-sm flex flex-col">
              <span className="ml-2">{t('title_header')}</span>
              <span className="ml-2 text-sm text-[#9BA8AB]">{t('subtitle_header')}</span>
            </div>

          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.id)}
                className="text-[#9BA8AB] hover:text-[#CCD0CF] transition-colors duration-200 relative group"
              >
                {t(link.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A5C6A] group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}

            <div className="flex items-center space-x-1 p-1 rounded-xl bg-[#253745]/50 border border-[#4A5C6A]/30 w-fit">
              {/* Bandeira Brasil */}
              <button
                onClick={() => language !== 'pt' && toggleLanguage()}
                className={`flex items-center justify-center p-1 rounded-lg transition-all duration-300 ${
                  language === 'pt' 
                    ? 'bg-[#4A5C6A]/40 ring-1 ring-[#9BA8AB]/50 shadow-[0_0_10px_rgba(155,168,171,0.2)]' 
                    : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                }`}
              >
                <span className="text-xl">🇧🇷</span>
              </button>

              {/* Bandeira EUA */}
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`flex items-center justify-center p-1 rounded-lg transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-[#4A5C6A]/40 ring-1 ring-[#9BA8AB]/50 shadow-[0_0_10px_rgba(155,168,171,0.2)]' 
                    : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                }`}
              >
                <span className="text-xl">🇺🇸</span>
              </button>
            </div>

          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#CCD0CF] p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#11212D]/95 backdrop-blur-xl border-b border-[#4A5C6A]/30"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-[#9BA8AB] hover:text-[#CCD0CF] py-2 transition-colors duration-200"
              >
                {t(link.key)}
              </button>
            ))}
            <div className="flex items-center space-x-2 p-1 rounded-xl bg-[#253745]/50 border border-[#4A5C6A]/30 w-fit">
            {/* Bandeira Brasil */}
            <button
              onClick={() => language !== 'pt' && toggleLanguage()}
              className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                language === 'pt' 
                  ? 'bg-[#4A5C6A]/40 ring-1 ring-[#9BA8AB]/50 shadow-[0_0_10px_rgba(155,168,171,0.2)]' 
                  : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
              }`}
            >
              <span className="text-xl">🇧🇷</span>
            </button>

            {/* Bandeira EUA */}
            <button
              onClick={() => language !== 'en' && toggleLanguage()}
              className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-[#4A5C6A]/40 ring-1 ring-[#9BA8AB]/50 shadow-[0_0_10px_rgba(155,168,171,0.2)]' 
                  : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
              }`}
            >
              <span className="text-xl">🇺🇸</span>
            </button>
          </div>

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
