import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, Mail, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Subtle background ambient mesh (very subtle, non-distracting) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30"
      >
        <div className="w-[600px] h-[350px] bg-gradient-to-tr from-[#91ADFF]/10 to-transparent blur-[120px] rounded-full transform -translate-y-12" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Small introductory mono label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-medium tracking-wider uppercase text-[#91ADFF] bg-[#151922] border border-[#272D39] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#91ADFF] animate-pulse" />
              {portfolioData.personal.heroIntro}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#EDEFF3] leading-[1.08] mb-6"
          >
            Building thoughtful software,{' '}
            <span className="text-[#9CA3AF] font-normal">one problem at a time.</span>
          </motion.h1>

          {/* Supporting Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl font-normal leading-relaxed mb-10"
          >
            {portfolioData.personal.heroDescription}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#project"
              onClick={(e) => handleScrollTo(e, '#project')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md text-sm font-medium text-[#0B0D11] bg-[#EDEFF3] hover:bg-white hover:shadow-[0_0_20px_rgba(237,239,243,0.15)] transition-all duration-200"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 text-[#0B0D11]" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md text-sm font-medium text-[#EDEFF3] bg-[#151922] hover:bg-[#151922]/90 border border-[#272D39] hover:border-[#91ADFF]/40 transition-all duration-200"
            >
              <span>Get in Touch</span>
              <Mail className="w-4 h-4 text-[#9CA3AF]" />
            </a>
          </motion.div>

          {/* Subtle metadata bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-[#272D39]/60 w-full flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#9CA3AF]"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#91ADFF]">•</span>
              <span>Based in Chennai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <span>B.Tech AI & ML</span>
              <span className="text-[#272D39]">/</span>
              <span>R.M.D. Engineering College</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
