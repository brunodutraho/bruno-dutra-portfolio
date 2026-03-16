export const projects = [
  {
    id: 1,
    title: 'Dashboard de Análise de Vendas',
    description:
      'Dashboard interativo desenvolvido em Python e Streamlit para monitoramento de KPIs de vendas, análise de receita e exploração de dados com filtros dinâmicos.',

    image: 'streamlit-dashboard.png',

    technologies: [
      'Python',
      'Streamlit',
      'Pandas',
      'Plotly',
      'CSS'
    ],

    demo: {
      url: 'https://bruno-dashboard-vendas.streamlit.app/',
      credentials: {
        user: 'admin',
        password: '1234'
      }
    },

    github: 'https://github.com/brunodutraho/analise-dados-python-pandas'
  },

  {
    id: 2,
    title: 'Dashboard de Vendas',
    description:
      'Análise de indicadores comerciais utilizando Power BI com modelagem de dados e visualizações interativas.',

    image: 'vendas-dashboard.png',

    technologies: [
      'Power BI',
      'Power Query',
      'DAX',
      'Excel',
      'SQL Server'
    ],

    demo: {
      url: 'https://app.powerbi.com/view?r=eyJrIjoiMGVmZTNlZDctZGVjYi00YzhhLWE1ZmEtY2I2MjIwY2Q4MjMxIiwidCI6ImJkYjUwNDk5LWIyNmMtNDNjNS1iM2E1LTFiYTMxZDA4NmQzYiJ9'
    },

    github: 'https://github.com/brunodutraho/dashboard-controle-vendas?tab=readme-ov-file'
  },

  {
    id: 3,
    title: 'Dashboard de Locação de Veículos',
    description:
      'Dashboard para análise de indicadores operacionais e financeiros de uma empresa de locação de veículos.',

    image: 'locacao-dashboard.png',

    technologies: [
      'Power BI',
      'Power Query',
      'DAX',
      'Excel'
    ],

    demo: {
      url: 'https://app.powerbi.com/view?r=eyJrIjoiNWY1NzBkN2QtOTJjZC00MDEwLWE2ZjUtNTQwYmY3ZDkxM2FiIiwidCI6ImJkYjUwNDk5LWIyNmMtNDNjNS1iM2E1LTFiYTMxZDA4NmQzYiJ9'
    },

    github: 'https://github.com/brunodutraho/dashboard-locacao-veiculos-powerbi?tab=readme-ov-file'
  }
];