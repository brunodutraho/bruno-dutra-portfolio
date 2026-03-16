import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, MapPin, Phone, FileDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/brunodutraho',
      link: 'https://www.linkedin.com/in/brunodutraho/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/brunodutraho',
      link: 'https://github.com/brunodutraho',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'bruno@brunoanalytics.org',
      link: 'mailto:bruno@brunoanalytics.org',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 21 98307-3223',
      link: 'https://wa.me/5521983073223',
    },
  ];

  return (
    <footer id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#11212D] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#CCD0CF] mb-4">
            {t('contact_title')}
          </h2>
          <p className="text-xl text-[#9BA8AB]">{t('contact_subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#253745]/30 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-2xl p-6 hover:border-[#4A5C6A] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-[#11212D]/50 rounded-xl mb-4">
                  <method.icon className="text-[#4A5C6A]" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-[#CCD0CF] mb-2">
                  {method.label}
                </h3>
                <p className="text-sm text-[#9BA8AB]">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="flex items-center space-x-2 text-[#9BA8AB]">
            <MapPin size={20} className="text-[#4A5C6A]" />
            <span>{t('contact_location')}</span>
          </div>

          <motion.a
            href="https://drive.google.com/file/d/1vXRSEqQ11d86vYPUxDILM47V6nxs_SOh/view?usp=sharing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A5C6A] to-[#253745] rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#4A5C6A] to-[#253745] text-[#CCD0CF] rounded-xl font-semibold">
              <FileDown size={20} />
              <a href="https://drive.google.com/file/d/1vXRSEqQ11d86vYPUxDILM47V6nxs_SOh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                {t('contact_download')}
              </a>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
              ></motion.div>
            </div>
          </motion.a>
        </motion.div>

        <div className="border-t border-[#4A5C6A]/30 pt-8">
          <div className="text-center text-[#9BA8AB]">
            <p>&copy; {new Date().getFullYear()} {t('contact_profession')} {t('contact_rights')}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
