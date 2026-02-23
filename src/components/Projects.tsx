import React, { useContext, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const Projects = () => {
  const { lang } = useContext(LanguageContext);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showCredentials, setShowCredentials] = useState(false);

  const texts = {
    pt: {
      title: 'Projetos & Arquitetura Analítica',
      intro:
        'Soluções desenvolvidas com foco em modelagem consistente, organização estrutural de dados e construção de aplicações analíticas voltadas a cenários reais de negócio.',

      featuredTitle: 'Case Técnico — Aplicação Analítica Web',
      featuredDescription:
        'Aplicação desenvolvida em Python com Streamlit, estruturada com autenticação de usuários, organização modular e deploy em ambiente web. Integra tratamento de dados com Pandas, geração de KPIs estratégicos e exportação de relatórios.',

      architectureTitle: 'Arquitetura & Estrutura',
      architecturePoints: [
        'Autenticação de usuários (controle de acesso)',
        'Estrutura modular organizada',
        'Tratamento e limpeza de dados com Pandas',
        'Geração de KPIs estratégicos',
        'Exportação de relatórios em Excel',
        'Deploy em ambiente web',
      ],

      credentialsTitle: 'Ver credenciais de demonstração',
      credentialsText:
        'A aplicação possui autenticação simulando ambiente corporativo. Utilize as credenciais abaixo para acesso:',

      code: 'Código',
      demo: 'Acessar Aplicação',

      biTitle: 'Biblioteca de Soluções em Business Intelligence',
      biIntro:
        'Coleção de dashboards desenvolvidos com foco em modelagem dimensional, construção de KPIs estratégicos e suporte à tomada de decisão.',

      viewProject: 'Visualizar',
    },

    en: {
      title: 'Projects & Analytical Architecture',
      intro:
        'Solutions built with a focus on structured data modeling and analytical applications designed for real business scenarios.',

      featuredTitle: 'Technical Case — Web Analytical Application',
      featuredDescription:
        'Python application built with Streamlit featuring authentication, modular structure and web deployment. Integrates data processing, KPI generation and report export.',

      architectureTitle: 'Architecture & Structure',
      architecturePoints: [
        'User authentication (access control)',
        'Modular organized structure',
        'Data cleaning and processing',
        'Strategic KPI generation',
        'Excel report export',
        'Web deployment',
      ],

      credentialsTitle: 'View demo credentials',
      credentialsText:
        'The application includes authentication simulating a corporate environment. Use the credentials below:',

      code: 'Code',
      demo: 'Access Application',

      biTitle: 'Business Intelligence Solutions Library',
      biIntro:
        'Collection of dashboards focused on dimensional modeling, strategic KPI development and decision support.',

      viewProject: 'View',
    },
  };

  const t = texts[lang];

  const biProjects = [
    {
      title: 'Análise Estratégica de Vendas',
      description:
        'Modelagem dimensional (Star Schema), métricas de faturamento, ticket médio e análise de desempenho comercial.',
      image: 'https://i.postimg.cc/Zq45wcwN/mockup-vendas.png',
      github: 'https://github.com/brunodutraho/dashboard-controle-vendas',
      demo:
        'https://app.powerbi.com/view?r=eyJrIjoiMGVmZTNlZDctZGVjYi00YzhhLWE1ZmEtY2I2MjIwY2Q4MjMxIiwidCI6ImJkYjUwNDk5LWIyNmMtNDNjNS1iM2E1LTFiYTMxZDA4NmQzYiJ9',
      tech: ['Power BI', 'DAX', 'Modelagem Dimensional'],
    },
    {
      title: 'People Analytics – RH',
      description:
        'Indicadores de turnover, admissões e desligamentos com foco em gestão estratégica de pessoas.',
      image: 'https://i.postimg.cc/6qk9nL7G/mockup-rh.png',
      github: '#',
      demo:
        'https://app.powerbi.com/view?r=eyJrIjoiZWI1MDRlMjAtMTBmNS00ZTAzLWEwMmYtMmU1N2U4ZGVkODQzIiwidCI6ImJkYjUwNDk5LWIyNmMtNDNjNS1iM2E1LTFiYTMxZDA4NmQzYiJ9',
      tech: ['Power BI', 'KPIs', 'People Analytics'],
    },
    {
      title: 'Análise Operacional – Locação',
      description:
        'Dashboard operacional com foco em rentabilidade por ativo, desempenho de frota e indicadores financeiros.',
      image: 'https://i.postimg.cc/c6GSrxjK/mockup-locacao.png',
      github: '#',
      demo:
        'https://app.powerbi.com/view?r=eyJrIjoiNWY1NzBkN2QtOTJjZC00MDEwLWE2ZjUtNTQwYmY3ZDkxM2FiIiwidCI6ImJkYjUwNDk5LWIyNmMtNDNjNS1iM2E1LTFiYTMxZDA4NmQzYiJ9',
      tech: ['Power BI', 'KPIs', 'Análise Operacional'],
    },
  ];

  return (
    <section id="projetos" className="py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {t.title}
          </h2>

          <p className="text-center text-gray-600 mb-20 max-w-3xl mx-auto">
            {t.intro}
          </p>

          {/* CASE PRINCIPAL */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-32 border border-gray-100">
            <div className="grid lg:grid-cols-2">

              <img
                src="https://i.postimg.cc/kM8VzRcz/dashboard-executivo-vendas.png"
                alt="Web Application"
                className="w-full h-64 sm:h-80 lg:h-full object-cover"
              />

              <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                  {t.featuredTitle}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
                  {t.featuredDescription}
                </p>

                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500">
                  {t.architectureTitle}
                </h4>

                <ul className="space-y-2 text-gray-600 mb-8 text-sm sm:text-base">
                  {t.architecturePoints.map((point, index) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-6 mb-6">
                  <a
                    href="https://github.com/brunodutraho/analise-dados-python-pandas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    {t.code}
                  </a>

                  <a
                    href="https://bruno-dashboard-vendas.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t.demo}
                  </a>
                </div>

                <button
                  onClick={() => setShowCredentials(!showCredentials)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ChevronDown className="w-4 h-4 mr-2" />
                  {t.credentialsTitle}
                </button>

                {showCredentials && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-100">
                    <p className="mb-3">{t.credentialsText}</p>
                    <p><strong>Usuário:</strong> admin | <strong>Senha:</strong> 1234</p>
                    <p><strong>Usuário:</strong> bruno | <strong>Senha:</strong> abcd</p>
                  </div>
                )}
              </div>
            </div>
          </div>


          {/* BI SECTION */}
          <h3 className="text-2xl font-bold text-center mb-6">
            {t.biTitle}
          </h3>

          <p className="text-center text-gray-600 mb-20 max-w-3xl mx-auto">
            {t.biIntro}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {biProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* IMAGEM COM PROPORÇÃO CORRETA */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-3">
                    {project.title}
                  </h4>

                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 text-sm">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        {t.code}
                      </a>
                    )}

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      {t.viewProject}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
