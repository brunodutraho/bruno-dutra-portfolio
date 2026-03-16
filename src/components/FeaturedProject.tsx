import { motion } from 'framer-motion';
import { ExternalLink, Server, Database, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FeaturedProject() {
  const { t } = useLanguage();
  const techStack = [
  {
    name: 'Python',
    icon: Server,
    description: t('tech_python'),
    color: '#4A5C6A',
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    description: t('tech_postgresql'),
    color: '#4A5C6A',
  },
  {
    name: 'Metabase',
    icon: BarChart3,
    description: t('tech_metabase'),
    color: '#4A5C6A',
  },
];

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Background com degradê suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06141B] via-[#11212D] to-[#06141B]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#253745]/50 border border-[#4A5C6A]/30 mb-4">
            <span className="text-[#4A5C6A] text-xs md:sm font-medium uppercase tracking-widest">
              {t('featured_title')}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#CCD0CF]">
            {t('featured_project_name')}
          </h2>
        </motion.div>

        {/* Card de Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#253745]/40 to-[#11212D]/60 backdrop-blur-xl border border-[#4A5C6A]/30 rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden"
        >
          {/* Brilho decorativo no fundo do card */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4A5C6A]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col items-center">
            
            {/* Imagem do Projeto - Define a largura mestre */}
            <div className="w-full aspect-video mb-10 rounded-2xl border border-[#4A5C6A]/30 overflow-hidden bg-[#06141B] group shadow-2xl">
              <img
                src="https://i.postimg.cc/5tJMCqPk/destaque-end-to-end.png"
                alt="Featured Project"
                className="w-full h-full object-cover object-center md:object-bottom transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Bloco de Conteúdo - Alinhado à largura da imagem */}
            <div className="w-full space-y-10">
              
              {/* Descrição com leitura confortável */}
              <p className="text-lg md:text-xl text-[#CCD0CF] leading-relaxed max-w-none">
                {t('featured_description')}
              </p>

              {/* Seção de Tecnologias */}
              <div>
                <h3 className="text-sm font-bold text-[#4A5C6A] uppercase tracking-[0.2em] mb-6">
                  {t('featured_tech')}
                </h3>
                {/* Grid responsivo: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group/item bg-[#11212D]/40 backdrop-blur-md border border-[#4A5C6A]/20 rounded-2xl p-5 hover:border-[#4A5C6A]/60 hover:bg-[#253745]/40 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2.5 bg-[#253745]/60 rounded-xl text-[#4A5C6A] group-hover/item:text-[#CCD0CF] transition-colors">
                          <tech.icon size={24} />
                        </div>
                        <div>
                          <div className="font-bold text-[#CCD0CF] text-base">{tech.name}</div>
                          <div className="text-sm text-[#9BA8AB] line-clamp-1">{tech.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Botão de Call to Action */}
              <div className="flex flex-col sm:flex-row items-center pt-4">
                <motion.a
                  href="#"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-4 bg-[#CCD0CF] text-[#06141B] rounded-2xl font-bold hover:bg-white transition-all duration-300 shadow-xl shadow-black/20"
                >
                  <ExternalLink size={20} />
                  <a href="https://github.com/brunodutraho/marketing-analytics-pipeline" target="_blank" rel="noopener noreferrer">
                    {t('featured_link')}
                  </a>
                </motion.a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
