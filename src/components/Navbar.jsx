import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Project', href: '#project' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      setIsOpen(false);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0B0D11]/90 backdrop-blur-md border-b border-[#272D39]'
          : 'bg-[#0B0D11]/40 backdrop-blur-sm border-b border-[#272D39]/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-1 font-mono text-base font-semibold tracking-tight text-[#EDEFF3] hover:text-white transition-colors"
          aria-label="Karthikeyan M home"
        >
          <span>KM</span>
          <span className="text-[#91ADFF] transition-transform duration-200 group-hover:scale-125">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-[#EDEFF3]'
                    : 'text-[#9CA3AF] hover:text-[#EDEFF3]'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#91ADFF] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Quick Contact Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="font-mono text-xs text-[#9CA3AF] hover:text-[#EDEFF3] border border-[#272D39] hover:border-[#91ADFF]/40 bg-[#151922]/60 px-3 py-1.5 rounded transition-all"
          >
            Get in touch &rarr;
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#9CA3AF] hover:text-[#EDEFF3] rounded-md border border-[#272D39] focus:outline-none"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#272D39] bg-[#0B0D11]/98 backdrop-blur-xl px-6 py-5 transition-all">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between py-2 text-base font-medium transition-colors ${
                    isActive ? 'text-[#EDEFF3]' : 'text-[#9CA3AF] hover:text-[#EDEFF3]'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#91ADFF]" />
                  )}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#272D39]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block text-center w-full font-mono text-xs text-[#EDEFF3] bg-[#151922] border border-[#272D39] py-2.5 rounded hover:border-[#91ADFF]/50 transition-colors"
              >
                Get in touch &rarr;
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
