import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D11] text-[#EDEFF3] flex flex-col selection:bg-[#91ADFF]/20 selection:text-[#91ADFF]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedProject />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
