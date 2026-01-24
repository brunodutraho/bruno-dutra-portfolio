import React, { useRef, useState, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle, Mail, User, MessageSquare } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { lang } = useContext(LanguageContext);
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [botField, setBotField] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const texts = {
    pt: {
      title: 'Vamos conversar sobre dados',
      name: 'Nome',
      namePlaceholder: 'Seu nome completo',
      email: 'Email',
      emailPlaceholder: 'Seu melhor email',
      message: 'Mensagem',
      messagePlaceholder: 'Descreva seu desafio, projeto ou oportunidade',
      sending: 'Enviando...',
      send: 'Enviar mensagem',
      success: 'Mensagem enviada. Retornarei o mais breve possível.',
      error: 'Erro ao enviar mensagem. Tente novamente.',
    },
    en: {
      title: 'Let’s talk about data',
      name: 'Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'Your best email',
      message: 'Message',
      messagePlaceholder: 'Describe your challenge, project or opportunity',
      sending: 'Sending...',
      send: 'Send message',
      success: 'Message sent. I will get back to you shortly.',
      error: 'Error sending message. Please try again.',
    },
  };

  const t = texts[lang];

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
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.title}
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              className="hidden"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
            />

            <div>
              <label className="block text-gray-700 mb-2">{t.name}</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.namePlaceholder}
                  className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-[#1B262C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">{t.email}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-[#1B262C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">{t.message}</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t.messagePlaceholder}
                  className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-[#1B262C]"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1B262C] text-white py-3 rounded-lg flex justify-center gap-2"
            >
              {isSubmitting ? t.sending : t.send}
              <Send className="w-5 h-5" />
            </motion.button>

            {submitStatus && (
              <div className={`flex items-center p-4 rounded-lg ${
                submitStatus === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus === 'success'
                  ? <CheckCircle className="mr-2" />
                  : <XCircle className="mr-2" />
                }
                {submitStatus === 'success' ? t.success : t.error}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
