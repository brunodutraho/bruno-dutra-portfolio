import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    title_header: 'Bruno Dutra',
    subtitle_header: 'Analista de Dados',
    nav_home: 'Início',
    nav_about: 'Sobre',
    nav_experience: 'Experiência',
    nav_projects: 'Projetos',
    nav_contact: 'Contato',

    hero_title: 'Analista de Dados',
    hero_subtitle: 'ADS • Analista de Dados',
    hero_description: 'Construindo pipelines analíticos e dashboards de BI para transformar dados de marketing e vendas em métricas de negócio.',
    hero_projects: 'Projetos de Dados',
    hero_experience: 'Ferramentas BI',
    hero_certifications: 'Cursos',

    terminal_title: 'Status do Sistema',
    terminal_log1: '[INFO] Loading sales dataset...',
    terminal_log2: '[SUCCESS] 1.5M records ingested',
    terminal_log3: '[INFO] Running data cleaning pipeline...',
    terminal_log4: '[SUCCESS] Missing values handled',
    terminal_log5: '[INFO] Computing business metrics...',
    terminal_log6: '[SUCCESS] Analytical dataset generated',
    terminal_log7: '[INFO] Syncing dashboards...',
    terminal_log8: '[SUCCESS] BI layer updated',
    terminal_cpu: 'Carga CPU',
    terminal_throughput: 'Taxa de Transferência',
    terminal_health: 'Saúde',

    about_title: 'Sobre Mim',
    about_text1: 'Sou estudante de Análise e Desenvolvimento de Sistemas com foco em Análise de Dados e Business Intelligence. Tenho experiência prática na exploração, tratamento e visualização de dados utilizando Python, SQL, Pandas e ferramentas de BI como Power BI e Metabase.',
    about_text2: 'Ao longo dos meus projetos, desenvolvi pipelines analíticos, dashboards interativos e análises de dados aplicadas a cenários de negócio como marketing e vendas. Meu objetivo é transformar dados brutos em informações estruturadas que apoiem a tomada de decisão, explorando desde a preparação e modelagem dos dados até a construção de métricas e visualizações. Atualmente continuo aprofundando meus estudos em análise de dados e fundamentos de engenharia de dados, buscando desenvolver soluções cada vez mais completas para análise e exploração de dados.',
    about_tech: 'Tecnologias',
    about_rows_processed: 'Linhas Processadas',

    featured_title: 'Projeto em Destaque',
    featured_project_name: 'Pipeline de Analytics de Marketing End-to-End',
    featured_description: 'Pipeline de analytics de marketing que transforma dados brutos de campanhas em métricas de negócio acionáveis. O pipeline realiza ingestão de dados, limpeza e transformação com Python e Pandas, modelagem analítica em PostgreSQL utilizando Star Schema e criação de views SQL para análise. Os resultados são explorados através de um dashboard interativo no Metabase, permitindo analisar receita, conversões, ROI e desempenho por canal de marketing.',
    featured_tech: 'Stack Tecnológica',
    featured_link: 'Ver Projeto',
    tech_python: 'Processamento de Dados',
    tech_postgresql: 'Data Warehouse Analítico',
    tech_metabase: 'Dashboard de BI',

    experience_title: 'Experiência & Educação',
    exp1_title: 'Projetos de Análise de Dados (Portfólio)',
    exp1_company: 'Soluções tecnológicas Inc.',
    exp1_period: '2025 - Presente',
    exp1_desc: 'Desenvolvimento de projetos práticos de análise de dados e analytics pipelines utilizando Python, SQL e ferramentas de Business Intelligence. Os projetos simulam cenários reais de análise de negócios, incluindo preparação de dados, modelagem analítica e construção de dashboards interativos.',

    exp2_title: 'Análise e Desenvolvimento de Sistemas',
    exp2_company: 'Universidade Estácio de Sá',
    exp2_period: '2023 - 2026',
    exp2_desc: 'Graduação focada em banco de dados, engenharia de software e fundamentos de análise de sistemas para o desenvolvimento de soluções baseadas em dados.',

    skills_title: 'Habilidades Técnicas',
    skills_languages: 'Linguagens',
    skills_data_analysis: 'Análise de Dados',
    skills_databases: 'Bancos de Dados',
    skills_bi: 'Business Intelligence',
    skills_tools: 'Ferramentas',

    projects_title: 'Galeria de Projetos',
    project1_title: 'Dashboard Profissional de Análise de Vendas',
    project1_desc: 'Dashboard interativo desenvolvido em Python e Streamlit para monitoramento de KPIs de vendas, análise de receita e exploração de dados com filtros dinâmicos. Inclui sistema de autenticação, visualizações interativas com Plotly e exportação de dados em Excel.',
    project1_cred: 'Acesso de demonstração',

    project2_title: 'Dashboard de Vendas – Business Intelligence',
    project2_desc: 'Análise de indicadores comerciais desenvolvida em Power BI, permitindo acompanhar metas, faturamento e desempenho de vendedores por meio de visualizações interativas e métricas estratégicas.', 

    project3_title: 'Dashboard de Locação de Veículos — Power BI',
    project3_desc: 'Análise de indicadores operacionais de uma empresa de locação de veículos, incluindo faturamento, consumo de veículos e comportamento de clientes.',
    

    projects_view: 'Acessar projeto',
    projects_view_code: 'Ver Código',

    contact_title: 'Vamos Conectar',
    contact_subtitle: 'Aberto para oportunidades e colaborações',
    contact_location: 'Rio de Janeiro, Brasil',
    contact_download: 'Baixar CV (PDF)',
    contact_profession: 'Portfólio Analista de Dados.',
    contact_rights: 'Todos os direitos reservados',
  },
  en: {
    title_header: 'Bruno Dutra',
    subtitle_header: 'Data Analyst',
    nav_home: 'Home',
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_contact: 'Contact',

    hero_title: 'Data Analyst',
    hero_subtitle: 'ADS Student • Data Analytics',
    hero_description: 'Building analytics pipelines and BI dashboards to turn marketing and sales data into business metrics.',
    hero_projects: 'Data Projects',
    hero_experience: 'BI Tools',
    hero_certifications: 'Courses',

    terminal_title: 'System Status',
    terminal_log1: '[INFO] Connecting to Railway...',
    terminal_log2: '[SUCCESS] 1.5M rows ingested',
    terminal_log3: '[INFO] Running ETL Job...',
    terminal_log4: '[SUCCESS] Data transformation completed',
    terminal_log5: '[INFO] Syncing to Metabase...',
    terminal_log6: '[SUCCESS] Dashboard updated',
    terminal_cpu: 'CPU Load',
    terminal_throughput: 'Throughput',
    terminal_health: 'Health',

    about_title: 'About Me',
    about_text1: 'I am an Information Systems student focused on Data Analytics and Business Intelligence. I have hands-on experience in data exploration, cleaning, and visualization using Python, SQL, Pandas, and BI tools such as Power BI and Metabase.',
    about_text2: 'Throughout my projects, I have developed analytical pipelines, interactive dashboards, and data analyses applied to business scenarios such as marketing and sales. My goal is to transform raw data into structured information that supports decision-making, working across the entire data workflow — from data preparation and modeling to the creation of metrics and visualizations. Currently, I continue to deepen my studies in data analytics and data engineering fundamentals, aiming to build increasingly robust solutions for data analysis and exploration.',
    about_tech: 'Technologies',
    about_rows_processed: 'Rows Processed',

    featured_title: 'Featured Project',
    featured_project_name: 'End-to-End Marketing Analytics Pipeline',
    featured_description: 'Marketing analytics pipeline that transforms raw campaign data into actionable business insights. The pipeline performs data ingestion, cleaning, and transformation using Python and Pandas, followed by analytical modeling in PostgreSQL using a Star Schema. SQL analytical views power an interactive Metabase dashboard, enabling exploration of key marketing metrics such as revenue, conversions, ROI, and channel performance.',
    featured_tech: 'Tech Stack',
    featured_link: 'View Project',
    tech_python: 'Data Processing',
    tech_postgresql: 'Analytics Data Warehouse',
    tech_metabase: 'BI Dashboard',

    experience_title: 'Experience & Education',
    exp1_title: 'Data Analysis Projects (Portfolio)',
    exp1_company: 'Tech Solutions Inc.',
    exp1_period: '2025 - Present',
    exp1_desc: 'Developing hands-on data analysis projects and analytics pipelines using Python, SQL, and Business Intelligence tools. Projects simulate real-world business scenarios, including data preparation, analytical modeling, and the creation of interactive dashboards.',

    exp2_title: 'Systems Analysis and Development',
    exp2_company: 'Estácio de Sá University',
    exp2_period: '2023 - 2026',
    exp2_desc: 'Degree focused on database management, software engineering, and systems analysis fundamentals for developing data-driven solutions.',

    skills_title: 'Technical Skills',
    skills_languages: 'Languages',
    skills_data_analysis: 'Data Analysis',
    skills_databases: 'Databases',
    skills_bi: 'Business Intelligence',
    skills_tools: 'Tools',

    projects_title: 'Project Gallery',

    project1_title: 'Professional Sales Analytics Dashboard',
    project1_desc: 'Interactive dashboard built with Python and Streamlit for monitoring sales KPIs, revenue analysis, and data exploration with dynamic filters. Includes an authentication system, interactive visualizations using Plotly, and Excel data export.',
    project1_cred: 'Demo Access',

    project2_title: 'Sales Dashboard – Business Intelligence',
    project2_desc: 'Business performance analysis developed in Power BI, enabling monitoring of targets, revenue, and sales team performance through interactive visualizations and strategic metrics.',


    project3_title: 'Vehicle Rental Analytics Dashboard — Power BI',
    project3_desc: 'Operational analytics dashboard for a vehicle rental company, including revenue monitoring, vehicle utilization, and customer behavior analysis.',
    
    projects_view: 'Access Project',
    projects_view_code: 'View Code',

    contact_title: "Let's Connect",
    contact_subtitle: 'Open for opportunities and collaborations',
    contact_location: 'Rio de Janeiro, Brazil',
    contact_download: 'Download Resume (PDF)',
    contact_profession: 'Data Analyst Portfolio.',
    contact_rights: 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
