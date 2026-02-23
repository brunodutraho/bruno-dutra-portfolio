import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../context/LanguageContext';

const Hero = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section
      id="home"
      className="pt-24 md:pt-28 pb-20 md:pb-28 min-h-[calc(100vh-5rem)] flex items-center bg-[#0F1A20] text-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto md:mx-0 text-center md:text-left"
        >

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {lang === 'pt'
              ? 'Construindo soluções analíticas estruturadas para decisões estratégicas.'
              : 'Building structured analytical solutions for strategic decision-making.'}
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl text-[#BBE1FA] mb-6 font-medium">
            {lang === 'pt'
              ? 'Bruno Dutra — Analista de Dados com foco em Engenharia de Dados'
              : 'Bruno Dutra — Data Analyst focused on Data Engineering'}
          </h2>

          <p className="text-gray-300 mb-10 leading-relaxed text-sm sm:text-base md:text-lg max-w-3xl mx-auto md:mx-0">
            {lang === 'pt'
              ? 'Atuo na construção de dashboards, modelagem dimensional e aplicações analíticas com Python, priorizando organização arquitetural, clareza na geração de KPIs e consistência na estrutura de dados. Direcionado à arquitetura e engenharia de dados.'
              : 'I work on building dashboards, dimensional modeling, and analytical applications using Python, prioritizing architectural organization, KPI clarity, and data structure consistency. Focused on data architecture and data engineering.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projetos"
              className="bg-[#1B262C] hover:bg-black text-white px-8 py-3 rounded-lg transition text-center"
            >
              {lang === 'pt' ? 'Ver Projetos' : 'View Projects'}
            </a>

            <a
              href="/public/bruno-dutra-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition text-center"
            >
              {lang === 'pt' ? 'Download CV' : 'Download Resume'}
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;