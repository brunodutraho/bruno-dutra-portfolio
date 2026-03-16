import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  const timeline = [
    {
      type: 'work',
      icon: Briefcase,
      title: t('exp1_title'),
      organization: t('exp1_company'),
      period: t('exp1_period'),
      description: t('exp1_desc'),
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: t('exp2_title'),
      organization: t('exp2_company'),
      period: t('exp2_period'),
      description: t('exp2_desc'),
    },
  ];

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#CCD0CF] mb-4">
            {t('experience_title')}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#4A5C6A]/50 via-[#4A5C6A] to-[#4A5C6A]/50 hidden lg:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div
                    className={`bg-[#253745]/30 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-2xl p-6 hover:border-[#4A5C6A] transition-all duration-300 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11212D]/50 border border-[#4A5C6A]/30 mb-3">
                      <span className="text-[#9BA8AB] text-sm">{item.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#CCD0CF] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-[#4A5C6A] mb-3">{item.organization}</p>
                    <p className="text-[#9BA8AB] leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4A5C6A] to-[#253745] flex items-center justify-center border-4 border-[#06141B] relative z-10">
                    <item.icon className="text-[#CCD0CF]" size={28} />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#4A5C6A]/20 blur-xl"></div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
