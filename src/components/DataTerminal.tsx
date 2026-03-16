import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Activity, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function DataTerminal() {
  const { t } = useLanguage();
  const [logs, setLogs] = useState<string[]>([]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  const terminalLogs = [
    t('terminal_log1'),
    t('terminal_log2'),
    t('terminal_log3'),
    t('terminal_log4'),
    t('terminal_log5'),
    t('terminal_log6'),
    t('terminal_log7'),
    t('terminal_log8'),
  ];

  useEffect(() => {
    if (currentLogIndex < terminalLogs.length) {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, terminalLogs[currentLogIndex]]);
        setCurrentLogIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLogs([]);
        setCurrentLogIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentLogIndex, logs.length]);

  const metrics = [
    {
      icon: Cpu,
      label: t('terminal_cpu'),
      value: 68,
      color: '#4A5C6A',
    },
    {
      icon: Activity,
      label: t('terminal_throughput'),
      value: 92,
      color: '#4A5C6A',
    },
    {
      icon: Shield,
      label: t('terminal_health'),
      value: 98,
      color: '#4A5C6A',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#CCD0CF] mb-4">
            {t('terminal_title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#11212D]/50 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-2xl p-6 overflow-hidden"
          >
            <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-[#4A5C6A]/30">
              <Terminal className="text-[#4A5C6A]" size={20} />
              <span className="text-[#CCD0CF] font-mono text-sm">system_monitor.log</span>
              <div className="flex-1"></div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
            </div>

            <div className="font-mono text-sm space-y-2 h-68 w-full overflow-y-auto overflow-x-hidden">
              {logs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[#9BA8AB] break-words"
                >
                  <span className="text-[#4A5C6A]">$ </span>
                  {log}
                </motion.div>
              ))}
              {logs.length > 0 && (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-[0.4rem] h-4 bg-[#4A5C6A] ml-1"
                ></motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-[#253745]/30 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-xl p-6 hover:border-[#4A5C6A] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#11212D]/50 rounded-lg">
                      <metric.icon className="text-[#4A5C6A]" size={24} />
                    </div>
                    <span className="text-[#CCD0CF] font-medium">{metric.label}</span>
                  </div>
                  <span className="text-2xl font-bold text-[#CCD0CF]">{metric.value}%</span>
                </div>

                <div className="relative h-2 bg-[#11212D]/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${metric.color}80, ${metric.color})`,
                    }}
                  >
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
