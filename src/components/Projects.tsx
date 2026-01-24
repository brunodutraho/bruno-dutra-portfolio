import React, { useContext } from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const { lang } = useContext(LanguageContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const texts = {
    pt: {
      title: 'Projetos em Dados',
      description:
        'Projetos práticos de Análise de Dados desenvolvidos com foco em problemas reais de negócio, indicadores estratégicos, qualidade da informação e apoio à tomada de decisão.',
      code: 'Código',
      demo: 'Visualizar',
      projects: [
        {
          title: 'Relatório de Vendas',
          description:
            'Análise comercial com foco em faturamento, ticket médio, desempenho por produto e sazonalidade, estruturada para apoiar decisões estratégicas.',
        },
        {
          title: 'Dashboard Corporativo com Acesso',
          description:
            'Dashboard corporativo com controle de acesso, KPIs estratégicos e visualizações organizadas para uso gerencial.',
        },
        {
          title: 'Dashboard de RH',
          description:
            'Análise de dados de pessoas com indicadores de turnover, admissões, desligamentos e apoio à gestão de RH.',
        },
        {
          title: 'Locação de Veículos',
          description:
            'Dashboard operacional para análise de frota, faturamento, rentabilidade por veículo e indicadores de desempenho.',
        },
      ],
    },
    en: {
      title: 'Data Projects',
      description:
        'Hands-on data analysis projects focused on real business problems, strategic KPIs, data quality and decision support.',
      code: 'Code',
      demo: 'View',
      projects: [
        {
          title: 'Sales Report',
          description:
            'Commercial analysis focused on revenue, average ticket, product performance and seasonality to support decision-making.',
        },
        {
          title: 'Secure Corporate Dashboard',
          description:
            'Corporate dashboard with access control, strategic KPIs and management-oriented visualizations.',
        },
        {
          title: 'HR Dashboard',
          description:
            'People analytics project with turnover, hiring and dismissal indicators to support HR decisions.',
        },
        {
          title: 'Vehicle Rental Analysis',
          description:
            'Operational dashboard for fleet analysis, revenue, vehicle profitability and performance KPIs.',
        },
      ],
    },
  };

  const t = texts[lang];

  const projectsBase = [
    {
      image: 'https://i.imgur.com/8JtnpK6.png',
      tech: ['Power BI', 'DAX', 'Power Query', 'Modelagem Dimensional'],
      github: 'https://github.com/brunodutraho/dashboard-controle-vendas',
      demo:
        'https://app.powerbi.com/view?r=eyJrIjoiMGVmZTNlZDctZGVjYi00YzhhLWE1ZmEtY2I2MjIwY2Q4MjMxIiwidCI6ImJkYjUwNDk5LWIyNmMtNDNjNS1iM2E1LTFiYTMxZDA4NmQzYiJ9',
    },
    {
      image: 'https://i.imgur.com/uDQ1kyT.png',
      tech: ['Power BI', 'DAX', 'Row-Level Security', 'UX de Dados'],
      github: '#',
      demo:
        'https://app.powerbi.com/view?r=eyJrIjoiYTlmZGIxOWQtMmU2NS00MjM4LWFmZWUtMzBhMThjZGUxNzI5IiwidCI6ImJkYjUwNDk5LWIyNmMtNDNjNS1iM2E1LTFiYTMxZDA4NmQzYiJ9',
    },
    {
      image: 'https://i.imgur.com/CKwUsDy.png',
      tech: ['Power BI', 'People Analytics', 'KPIs', 'Tratamento de Dados'],
      github: '#',
      demo:
        'https://app.powerbi.com/view?r=eyJrIjoiZWI1MDRlMjAtMTBmNS00ZTAzLWEwMmYtMmU1N2U4ZGVkODQzIiwidCI6ImJkYjUwNDk5LWIyNmMtNDNjNS1iM2E1LTFiYTMxZDA4NmQzYiJ9',
    },
    {
      image: 'https://i.imgur.com/okCvqKK.png',
      tech: ['Power BI', 'Análise Operacional', 'KPIs', 'Modelagem de Dados'],
      github: '#',
      demo:
        'https://app.powerbi.com/view?r=eyJrIjoiNWY1NzBkN2QtOTJjZC00MDEwLWE2ZjUtNTQwYmY3ZDkxM2FiIiwidCI6ImJkYjUwNDk5LWIyNmMtNDNjNS1iM2E1LTFiYTMxZDA4NmQzYiJ9',
    },
  ];

  const projects = projectsBase.map((p, i) => ({
    ...p,
    title: t.projects[i].title,
    description: t.projects[i].description,
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="projetos" className="py-20 bg-[#BBE1FA]">
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

          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            {t.description}
          </p>

          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4 mt-auto">
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-black transition-colors"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          {t.code}
                        </a>
                      )}

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-black transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        {t.demo}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
