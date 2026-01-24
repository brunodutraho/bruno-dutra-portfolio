import React, { useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { LanguageContext } from '../context/LanguageContext';

const Hero = () => {
  const { lang } = useContext(LanguageContext);

  const texts = {
    pt: {
      greeting: 'Olá, eu sou',
      subtitle:
        'Analista de Dados Júnior focado em transformar dados em insights claros e acionáveis, apoiando decisões de negócio com análises bem estruturadas e dashboards objetivos.',
      cta: 'Ver projetos',
      sequence: [
        'Bruno Dutra',
        1200,
        'Analista de Dados',
        1200,
        'Power BI • SQL • Python',
        1200,
        'Dados aplicados ao negócio',
        1200,
      ],
    },
    en: {
      greeting: 'Hi, I am',
      subtitle:
        'Junior Data Analyst focused on turning data into clear, actionable insights, supporting business decisions through well-structured analyses and dashboards.',
      cta: 'View projects',
      sequence: [
        'Bruno Dutra',
        1200,
        'Junior Data Analyst',
        1200,
        'Power BI • SQL • Python',
        1200,
        'Business-driven data',
        1200,
      ],
    },
  };

  const t = texts[lang];

  return (
    <section
      id="home"
      className="min-h-screen bg-[#1B262C] text-white flex items-center"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* TÍTULO */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.greeting}{' '}
            <TypeAnimation
              key={lang}
              sequence={t.sequence}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              className="text-[#BBE1FA]"
              title="Nome e especialidades"
            />
          </h1>

          {/* SUBTÍTULO */}
          <p
            className="text-lg md:text-2xl mb-10 text-gray-300 leading-relaxed"
            title="Resumo profissional"
          >
            {t.subtitle}
          </p>

          {/* CTA */}
          <motion.a
            href="#projetos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#BBE1FA] text-[#1B262C] px-8 py-3 rounded-full 
              font-semibold hover:bg-white transition-colors duration-300"
            title={t.cta}
          >
            {t.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
