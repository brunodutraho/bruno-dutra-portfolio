import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function AnimatedCounter({
  end,
  duration = 2000,
  start
}: {
  end: number;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return <span>{formatNumber(count)}</span>;
}

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <section id="about" className="relative py-20 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4A5C6A]/5 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-[#CCD0CF] mb-4">
        {t('about_title')}
      </h2>
    </motion.div>

    {/* items-stretch garante que as duas colunas tenham a mesma altura */}
    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative flex flex-col"
      >
        <div className="relative w-full max-w-[32rem] mx-auto h-full flex flex-col">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A5C6A]/30 to-transparent rounded-3xl blur-xl"></div>
          
          {/* Container da Imagem - Agora com h-full para esticar */}
          <div className="relative flex-1 bg-gradient-to-br from-[#253745]/50 to-[#11212D]/50 backdrop-blur-xl rounded-3xl border border-[#4A5C6A]/30 flex items-center justify-center overflow-hidden">
            <img
              src="https://i.postimg.cc/tR6Q2ML5/foto-perfil-fundo-azul.png"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
            {/* Gradiente de sobreposição para suavizar a base */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#11212D]/60 to-transparent"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col justify-between space-y-6"
      >
        <div className="bg-[#253745]/30 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-2xl p-8 flex-1">
          <p className="text-lg text-[#CCD0CF] leading-relaxed mb-6">
            {t('about_text1')}
          </p>
          <p className="text-lg text-[#9BA8AB] leading-relaxed">
            {t('about_text2')}
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { value: 7, label: t('about_tech'), suffix: '+' },
            { value: 100000, label: t('about_rows_processed'), suffix: '+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#11212D]/50 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-xl p-4 hover:border-[#4A5C6A] transition-all duration-300"
            >
              <div className="text-3xl font-bold text-[#CCD0CF] mb-1">
                <AnimatedCounter end={stat.value} start={isInView} />
                {stat.suffix}
              </div>

              <div className="text-sm text-[#9BA8AB]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

  );
}
