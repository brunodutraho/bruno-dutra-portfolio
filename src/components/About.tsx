import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Database, BarChart2, Github as Git, Terminal } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const About = () => {
  const { lang } = useContext(LanguageContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const texts = {
    pt: {
      title: 'Sobre Mim',
      p1: 'Sou Analista de Dados Jr. em transição de carreira, com foco em transformar dados em insights claros e acionáveis para apoiar a tomada de decisão.',
      p2: 'Tenho experiência prática com Power BI, SQL Server e Excel Avançado, desenvolvendo dashboards orientados a indicadores de negócio, métricas estratégicas e análises consistentes.',
      p3: 'Atualmente, aprofundo meus estudos em Python para análise de dados e curso Análise e Desenvolvimento de Sistemas, buscando minha primeira oportunidade profissional na área de dados.',
      categories: {
        bi: 'Business Intelligence',
        db: 'Banco de Dados',
        tools: 'Ferramentas',
        analysis: 'Análise de Dados',
      },
    },
    en: {
      title: 'About Me',
      p1: 'I am a Junior Data Analyst in career transition, focused on turning data into clear and actionable insights to support decision-making.',
      p2: 'I have hands-on experience with Power BI, SQL Server and Advanced Excel, building dashboards driven by business indicators and strategic metrics.',
      p3: 'Currently, I am deepening my studies in Python for data analysis and pursuing a degree in Systems Analysis and Development, seeking my first professional opportunity in data.',
      categories: {
        bi: 'Business Intelligence',
        db: 'Databases',
        tools: 'Tools',
        analysis: 'Data Analysis',
      },
    },
  };

  const t = texts[lang];

  const skills = [
    {
      category: t.categories.bi,
      icon: BarChart2,
      items: [
        'Power BI',
        'DAX',
        'Power Query',
        'Modelagem Dimensional (Star Schema)',
        'Storytelling com Dados',
      ],
    },
    {
      category: t.categories.db,
      icon: Database,
      items: [
        'SQL Server',
        'MySQL',
        'Consultas SQL',
        'ETL',
        'Modelagem de Dados',
      ],
    },
    {
      category: t.categories.tools,
      icon: Git,
      items: [
        'Git',
        'GitHub',
        'Excel Avançado',
        'VS Code',
      ],
    },
    {
      category: t.categories.analysis,
      icon: Terminal,
      items: [
        'Análise Descritiva',
        'KPIs',
        'Documentação Técnica',
        'Boas Práticas em Dados',
      ],
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/foto-perfil-fundo-azul.png"
                alt="Bruno Dutra"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <p className="text-gray-700 mb-6">{t.p1}</p>
              <p className="text-gray-700 mb-6">{t.p2}</p>
              <p className="text-gray-700">{t.p3}</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map(({ category, icon: Icon, items }) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.04 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-[#1B262C] mr-2" />
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
