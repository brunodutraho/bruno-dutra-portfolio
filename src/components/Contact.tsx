import React, { useRef, useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { lang } = useContext(LanguageContext);

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [botField, setBotField] = useState('');

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || botField) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_k8839vs',
        'template_4pa31pd',
        formRef.current,
        't-swiMj6HAH81AYw_'
      );

      setSubmitStatus('success');
      formRef.current.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {lang === 'pt'
              ? 'Vamos construir algo orientado por dados'
              : 'Let’s build something data-driven'}
          </h2>

          <p className="text-center text-gray-600 mb-12 leading-relaxed">
            {lang === 'pt'
              ? 'Disponível para oportunidades como Analista de Dados Jr, contribuindo com estrutura, consistência e evolução técnica contínua para ambientes orientados por dados.'
              : 'Available for Junior Data Analyst opportunities, contributing with structure, consistency, and continuous technical growth in data-driven environments.'}
          </p>

          <div className="bg-white shadow-xl rounded-2xl p-10">

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                className="hidden"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
              />

              <input
                type="text"
                name="name"
                required
                placeholder={lang === 'pt' ? 'Seu nome' : 'Your name'}
                className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-[#1B262C] focus:outline-none"
              />

              <input
                type="email"
                name="email"
                required
                placeholder={lang === 'pt' ? 'Seu email' : 'Your email'}
                className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-[#1B262C] focus:outline-none"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder={
                  lang === 'pt'
                    ? 'Descreva sua oportunidade ou projeto'
                    : 'Describe your opportunity or project'
                }
                className="w-full py-3 px-4 border rounded-lg focus:ring-2 focus:ring-[#1B262C] focus:outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1B262C] hover:bg-black text-white py-3 rounded-lg flex justify-center gap-2 transition"
              >
                {isSubmitting
                  ? (lang === 'pt' ? 'Enviando...' : 'Sending...')
                  : (lang === 'pt' ? 'Enviar mensagem' : 'Send message')}
                <Send className="w-5 h-5" />
              </motion.button>

              {submitStatus && (
                <div
                  className={`flex items-center p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus === 'success'
                    ? <CheckCircle className="mr-2" />
                    : <XCircle className="mr-2" />
                  }
                  {submitStatus === 'success'
                    ? (lang === 'pt'
                        ? 'Mensagem enviada com sucesso.'
                        : 'Message sent successfully.')
                    : (lang === 'pt'
                        ? 'Erro ao enviar mensagem.'
                        : 'Error sending message.')}
                </div>
              )}

            </form>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;