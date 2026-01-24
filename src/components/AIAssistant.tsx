import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  FormEvent,
  FC,
} from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../context/LanguageContext';

type Message = {
  text: string;
  isUser: boolean;
};

const AIAssistant: FC = () => {
  const { lang } = useContext(LanguageContext);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getGreetingByTime = () => {
    const hour = new Date().getHours();
    if (lang === 'pt') {
      if (hour >= 5 && hour < 12) return 'Bom dia!';
      if (hour >= 12 && hour < 18) return 'Boa tarde!';
      return 'Boa noite!';
    }
    if (hour >= 5 && hour < 12) return 'Good morning!';
    if (hour >= 12 && hour < 18) return 'Good afternoon!';
    return 'Good evening!';
  };

  const baseTexts = {
    pt: {
      welcome: 'Seja bem-vindo ao meu portfólio de Análise de Dados.',
      askHelp:
        'Você pode perguntar sobre meus projetos, ferramentas (Power BI, SQL, Python) ou minha trajetória profissional.',
      typing: 'Digitando...',
      placeholder: 'Digite sua mensagem...',
      header: 'Assistente de Dados',
      contactLine:
        'Você pode falar comigo pelo LinkedIn: <a href="https://linkedin.com/in/brunodutraho" target="_blank">linkedin.com/in/brunodutraho</a>.',
      unknown:
        'Não encontrei uma resposta direta para isso. Algumas sugestões:',
      unknownList: `
        <ul>
          <li><strong>Projetos:</strong> "Quais são seus projetos?", "Me fale sobre o dashboard de vendas"</li>
          <li><strong>Tecnologias:</strong> "Como você usa Power BI?", "Você trabalha com SQL?"</li>
          <li><strong>Sobre você:</strong> "Quem é Bruno Dutra?", "Qual sua experiência com dados?"</li>
          <li><strong>Contato:</strong> "Como posso entrar em contato?"</li>
        </ul>
      `,
    },
    en: {
      welcome: 'Welcome to my Data Analytics portfolio.',
      askHelp:
        'You can ask about my projects, tools (Power BI, SQL, Python), or my professional background.',
      typing: 'Typing...',
      placeholder: 'Type your message...',
      header: 'Data Assistant',
      contactLine:
        'You can reach me on LinkedIn: <a href="https://linkedin.com/in/brunodutraho" target="_blank">linkedin.com/in/brunodutraho</a>.',
      unknown:
        "I couldn't find a direct answer. Here are some suggestions:",
      unknownList: `
        <ul>
          <li><strong>Projects:</strong> "What projects do you have?", "Tell me about the sales dashboard"</li>
          <li><strong>Technologies:</strong> "How do you use Power BI?", "Do you work with SQL?"</li>
          <li><strong>About you:</strong> "Who is Bruno Dutra?", "What is your data experience?"</li>
          <li><strong>Contact:</strong> "How can I contact you?"</li>
        </ul>
      `,
    },
  } as const;

  const t = baseTexts[lang];

  const handleOpen = () => {
    setIsOpen(true);
    setMessages([
      {
        text: `${getGreetingByTime()} ${t.welcome} ${t.askHelp}`,
        isUser: false,
      },
    ]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    const userInput = input.toLowerCase();

    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setInput('');
    setIsTyping(true);

    const includesSome = (terms: string[]) =>
      terms.some((term) => userInput.includes(term));

    let response = '';

    // Saudação
    if (
      includesSome([
        'olá',
        'oi',
        'bom dia',
        'boa tarde',
        'boa noite',
        'hello',
        'hi',
        'hey',
      ])
    ) {
      response = `${getGreetingByTime()} ${t.welcome} ${t.askHelp}`;
    }

    // Projetos
    else if (
      includesSome([
        'projetos',
        'portfolio',
        'portfólio',
        'projects',
      ])
    ) {
      response =
        lang === 'pt'
          ? `
<strong>Principais projetos de dados</strong><br><br>
- <strong>Dashboard de Vendas (Power BI):</strong> faturamento, ticket médio, sazonalidade e análise por produto.<br>
- <strong>Dashboard Financeiro (Power BI):</strong> receitas, despesas e indicadores financeiros.<br>
- <strong>Análise Exploratória (Python):</strong> limpeza, EDA e visualizações com Pandas.<br><br>
Todos os projetos seguem boas práticas de modelagem e foco em decisão.
`
          : `
<strong>Main data projects</strong><br><br>
- <strong>Sales Dashboard (Power BI):</strong> revenue, average ticket and seasonality.<br>
- <strong>Financial Dashboard (Power BI):</strong> income, expenses and financial KPIs.<br>
- <strong>Exploratory Analysis (Python):</strong> data cleaning and EDA with Pandas.<br><br>
All projects follow good modeling practices and decision-oriented design.
`;
    }

    // Sobre Bruno
    else if (
      includesSome([
        'quem é você',
        'sobre você',
        'who are you',
        'about you',
      ])
    ) {
      response =
        lang === 'pt'
          ? `
<strong>Sobre Bruno Dutra</strong><br><br>
Sou Analista de Dados Júnior, com foco em transformar dados em insights claros e acionáveis.<br><br>
Atuo com Power BI, SQL, Excel Avançado e Python em projetos de BI e análise exploratória, sempre buscando clareza, consistência e impacto para o negócio.
`
          : `
<strong>About Bruno Dutra</strong><br><br>
I am a Junior Data Analyst focused on turning data into clear, actionable insights.<br><br>
I work with Power BI, SQL, advanced Excel and Python in BI and exploratory analysis projects, always prioritizing clarity and business impact.
`;
    }

    // Contato
    else if (
      includesSome([
        'contato',
        'linkedin',
        'contact',
      ])
    ) {
      response = t.contactLine;
    }

    // Fallback
    else {
      response = `${t.unknown}<br><br>${t.unknownList}`;
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 900);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 bg-[#1B262C] text-white p-4 rounded-full shadow-lg hover:bg-[#2d3f48]"
        aria-label={t.header}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-full max-w-[21rem] bg-white rounded-lg shadow-xl"
          >
            <div className="bg-[#1B262C] text-white p-4 flex justify-between items-center rounded-t-lg">
              <h3 className="font-semibold">{t.header}</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-4 ${msg.isUser ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      msg.isUser
                        ? 'bg-[#1B262C] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                </div>
              ))}
              {isTyping && (
                <div className="text-left text-gray-500 italic">
                  {t.typing}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <button type="submit" className="bg-[#1B262C] text-white p-2 rounded-lg">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
