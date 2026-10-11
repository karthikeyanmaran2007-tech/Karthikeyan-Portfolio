import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const shouldReduceMotion = useReducedMotion();
  const education = portfolioData.education[0];

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
    <section id="education" className="py-24 px-6 border-t border-[#272D39]/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs tracking-wider uppercase text-[#91ADFF] block mb-2">
            04 // Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEFF3]">
            Education
          </h2>
        </div>

        {/* Elegant Education Information Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeIn}
          className="max-w-3xl"
        >
          <div className="bg-[#151922] border border-[#272D39] rounded-xl p-6 sm:p-8 hover:border-[#91ADFF]/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 mb-6 border-b border-[#272D39]">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#0B0D11] border border-[#272D39] flex items-center justify-center text-[#91ADFF] shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EDEFF3] leading-snug">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-medium text-[#EDEFF3]/90 mt-1">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0B0D11] border border-[#272D39] rounded text-xs font-mono text-[#91ADFF]">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
              <MapPin className="w-4 h-4 text-[#91ADFF]" />
              <span>{education.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
