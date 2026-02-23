import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Database, Wrench, TrendingUp } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const About = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section id="sobre" className="py-28 bg-white">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            {lang === 'pt' ? 'Sobre' : 'About'}
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGEM */}
            <div>
              <img
                src="/foto-perfil-fundo-azul.png"
                alt="Bruno Dutra"
                className="rounded-xl shadow-xl"
              />
            </div>

            {/* TEXTO */}
            <div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {lang === 'pt'
                  ? 'Sou Analista de Dados Jr com foco na construção estruturada de soluções analíticas orientadas a negócio. Acredito que dados só geram valor quando organizados com clareza arquitetural, consistência lógica e direcionamento estratégico.'
                  : 'I am a Junior Data Analyst focused on building structured, business-oriented analytical solutions. I believe data only generates value when organized with architectural clarity, logical consistency, and strategic direction.'}
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {lang === 'pt'
                  ? 'Tenho experiência com Power BI, DAX, modelagem dimensional (Star Schema), Python (Pandas) e desenvolvimento de aplicações analíticas com Streamlit, integrando tratamento de dados, definição de métricas, geração de KPIs e automação de relatórios com foco em confiabilidade e escalabilidade.'
                  : 'I have experience with Power BI, DAX, dimensional modeling (Star Schema), Python (Pandas), and the development of analytical applications with Streamlit, integrating data processing, metric definition, KPI generation, and automated reporting with a focus on reliability and scalability.'}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {lang === 'pt'
                  ? 'Atualmente direciono minha evolução para fundamentos de Engenharia de Dados, aprofundando conhecimentos em arquitetura, construção de pipelines e processamento estruturado em escala, com visão de longo prazo para ambientes orientados a dados.'
                  : 'Currently, I am directing my growth toward Data Engineering foundations, deepening my knowledge in architecture, pipeline development, and structured processing at scale, with a long-term vision for data-driven environments.'}
              </p>

            </div>
          </div>

          {/* BLOCOS ESTRATÉGICOS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

            {/* CARD 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1B262C] text-white mb-6 mx-auto">
                <Database size={22} />
              </div>

              <h3 className="text-lg font-semibold mb-4 text-center">
                {lang === 'pt' ? 'Modelagem' : 'Data Modeling'}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {lang === 'pt'
                  ? 'Star Schema, definição de métricas estratégicas e estruturação de KPIs orientados a negócio.'
                  : 'Star Schema, strategic metric definition, and business-oriented KPI structuring.'}
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1B262C] text-white mb-6 mx-auto">
                <Wrench size={22} />
              </div>

              <h3 className="text-lg font-semibold mb-4 text-center">
                {lang === 'pt' ? 'Ferramentas' : 'Tools'}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Power BI, DAX, Python, Pandas, Streamlit,
                Excel Avançado e Git.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1B262C] text-white mb-6 mx-auto">
                <TrendingUp size={22} />
              </div>

              <h3 className="text-lg font-semibold mb-4 text-center">
                {lang === 'pt' ? 'Direcionamento' : 'Direction'}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {lang === 'pt'
                  ? 'Arquitetura de Dados e evolução estruturada para Engenharia de Dados.'
                  : 'Data Architecture and structured progression toward Data Engineering.'}
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;