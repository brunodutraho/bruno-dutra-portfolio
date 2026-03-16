import { motion } from 'framer-motion';
import { Code2, Database, Cloud, BarChart, Layout } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills_languages'),
      icon: Code2,
      skills: ['Python', 'SQL'],
    },
    {
      title: t('skills_data_analysis'),
      icon: Database,
      skills: ['Pandas', 'Data Cleaning', 'EDA', 'Data Transformation'],
    },
    {
      title: t('skills_databases'),
      icon: Cloud,
      skills: ['PostgreSQL', 'SQL Server'],
    },
    {
      title: t('skills_bi'),
      icon: BarChart,
      skills: ['Power BI', 'Metabase'],
    },
    {
      title: t('skills_tools'),
      icon: Layout,
      skills: ['Git', 'GitHub', 'Docker', 'Streamlit', 'Excel'],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Decorativo - Animação de pulso suave */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-[#4A5C6A] rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#CCD0CF] mb-4">
            {t('skills_title')}
          </h2>
          <div className="h-1 w-20 bg-[#4A5C6A] mx-auto rounded-full" />
        </motion.div>

        {/* Grid System Inteligente */}
        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Animação de flutuação contínua
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                // Transição para a entrada inicial (opacity e movimento inicial)
                opacity: { duration: 0.5, delay: categoryIndex * 0.1 },
                // Transição específica para o efeito de flutuar (y)
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: categoryIndex * 0.2
                }
              }}
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-[#253745]/30 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-2xl p-6 hover:border-[#4A5C6A] hover:bg-[#253745]/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-[#11212D]/50 rounded-xl">
                  <category.icon className="text-[#4A5C6A]" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-[#CCD0CF]">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.1, color: '#CCD0CF' }}
                    className="px-3 py-1 text-sm bg-[#253745]/30 backdrop-blur-sm border border-[#4A5C6A]/20 rounded-lg text-[#9BA8AB] cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
