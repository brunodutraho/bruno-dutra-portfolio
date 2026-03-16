import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#11212D]/50 to-[#06141B]"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4A5C6A]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#253745]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-[#253745]/50 border border-[#4A5C6A]/30 mb-6"
            >
              <span className="text-[#9BA8AB] text-sm font-medium">
                {t('hero_subtitle')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#CCD0CF] mb-6 leading-tight"
            >
              {t('hero_title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#9BA8AB] mb-8 leading-relaxed"
            >
              {t('hero_description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Database, label: t('hero_projects'), value: 8 },
                { icon: Zap, label: t('hero_experience'), value: 3 },
                { icon: Award, label: t('hero_certifications'), value: 8 },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#253745]/30 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-xl p-4 hover:border-[#4A5C6A] transition-all duration-300"
                >
                  <stat.icon className="text-[#4A5C6A] mb-2" size={24} />
                  <div className="text-3xl font-bold text-[#CCD0CF] mb-1">
                    <AnimatedCounter end={stat.value} />
                    {index === 1 && '+'}
                  </div>
                  <div className="text-sm text-[#9BA8AB]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A5C6A]/30 to-[#253745]/30 rounded-full blur-2xl"></div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#253745]/50 to-[#11212D]/50 backdrop-blur-xl rounded-full border border-[#4A5C6A]/30 flex items-center justify-center"></div>

                <div className="absolute inset-6 bg-gradient-to-br from-[#4A5C6A]/20 to-transparent rounded-full">
                  <div className="absolute inset-8 bg-gradient-to-br from-[#4A5C6A]/20 to-transparent rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="foto-perfil-fundo-azul.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-1 -right-3 w-16 h-16 bg-[#253745]/50 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-xl flex items-center justify-center"
                >
                  <Zap className="text-[#4A5C6A]" size={24} />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-3 -left-1 w-16 h-16 bg-[#253745]/50 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-xl flex items-center justify-center"
                >
                  <Award className="text-[#4A5C6A]" size={24} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
