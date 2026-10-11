import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, GraduationCap, Code2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="py-24 px-6 border-t border-[#272D39]/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="mb-12">
          <span className="font-mono text-xs tracking-wider uppercase text-[#91ADFF] block mb-2">
            01 // About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEFF3]">
            {portfolioData.about.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Editorial Text (7 columns) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeIn}
            className="lg:col-span-7 space-y-6 text-[#9CA3AF] text-base sm:text-lg leading-relaxed font-normal"
          >
            {portfolioData.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[#9CA3AF] leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-6 border-t border-[#272D39]/60 grid grid-cols-2 gap-4 text-sm font-mono text-[#EDEFF3]">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#91ADFF]" />
                <span>Full-Stack & Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#91ADFF]" />
                <span>AI & Computer Vision</span>
              </div>
            </div>
          </motion.div>

          {/* Minimalist Editorial Card (5 columns) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeIn}
            className="lg:col-span-5"
          >
            <div className="bg-[#151922] border border-[#272D39] rounded-xl p-6 sm:p-7 relative overflow-hidden group hover:border-[#91ADFF]/30 transition-colors duration-300">
              {/* Subtle architectural grid pattern */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#EDEFF3_1px,transparent_1px)] [background-size:16px_16px]"
              />

              {/* Profile Monogram Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#272D39]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#0B0D11] border border-[#272D39] flex items-center justify-center font-mono font-semibold text-xl text-[#EDEFF3] shadow-inner">
                    KM<span className="text-[#91ADFF]">.</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-[#EDEFF3]">
                      {portfolioData.personal.name}
                    </h3>
                    <p className="text-xs font-mono text-[#9CA3AF]">
                      Undergraduate Student
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[11px] text-[#91ADFF] bg-[#0B0D11] border border-[#272D39] px-2.5 py-1 rounded">
                  2024 — Present
                </span>
              </div>

              {/* Verified Profile Key Facts */}
              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3 text-[#9CA3AF]">
                  <GraduationCap className="w-4 h-4 text-[#91ADFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#EDEFF3] block font-medium">B.Tech Artificial Intelligence and Machine Learning</span>
                    <span className="text-[#9CA3AF]">R.M.D. Engineering College (Second Year)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[#9CA3AF]">
                  <MapPin className="w-4 h-4 text-[#91ADFF] shrink-0" />
                  <div>
                    <span className="text-[#EDEFF3]">Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Focus areas pill tags */}
              <div className="mt-6 pt-5 border-t border-[#272D39] flex flex-wrap gap-1.5">
                {['Full-Stack Development', 'Intelligent Systems', 'Software Engineering'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0B0D11] text-[#9CA3AF] border border-[#272D39]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
