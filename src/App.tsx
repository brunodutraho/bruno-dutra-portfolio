import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { LanguageProvider } from './context/LanguageContext';

function Layout() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <AIAssistant />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}

export default App;