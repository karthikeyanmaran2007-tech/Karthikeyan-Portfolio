import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Terminal, Layout, Server, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const categoryIcons = {
  Programming: Terminal,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const skills = portfolioData.skills;

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
    <section id="skills" className="py-24 px-6 border-t border-[#272D39]/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs tracking-wider uppercase text-[#91ADFF] block mb-2">
            03 // Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEFF3]">
            Technical Skills
          </h2>
          <p className="mt-2 text-base text-[#9CA3AF] max-w-xl font-normal">
            Languages, frameworks, and tools used for building full-stack applications and intelligent software.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([category, items]) => {
            const Icon = categoryIcons[category] || Terminal;
            return (
              <div
                key={category}
                className="bg-[#151922] border border-[#272D39] rounded-xl p-6 transition-all duration-200 hover:border-[#91ADFF]/30 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-[#272D39]">
                  <div className="w-8 h-8 rounded-lg bg-[#0B0D11] border border-[#272D39] flex items-center justify-center text-[#91ADFF]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#EDEFF3]">
                      {category}
                    </h3>
                    <span className="text-[11px] font-mono text-[#9CA3AF]">
                      {items.length} technologies
                    </span>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded bg-[#0B0D11] text-[#EDEFF3] border border-[#272D39] group-hover:border-[#91ADFF]/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
