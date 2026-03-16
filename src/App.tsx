import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import DataTerminal from './components/DataTerminal';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NeuralNetwork from './components/NeuralNetwork';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#06141B] text-[#CCD0CF] relative overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <NeuralNetwork />
        <Navigation />
        <Hero />
        <DataTerminal />
        <About />
        <FeaturedProject />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
