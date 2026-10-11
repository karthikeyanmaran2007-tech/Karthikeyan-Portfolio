import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// Minimalist brand SVG icons
function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { contact, socialLinks } = portfolioData;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

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

  const hasGithub = Boolean(socialLinks.github && socialLinks.github.trim());
  const hasLinkedin = Boolean(socialLinks.linkedin && socialLinks.linkedin.trim());

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#272D39]/80">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeIn}
          className="bg-[#151922] border border-[#272D39] rounded-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-[#91ADFF]/10 blur-[90px] rounded-full pointer-events-none"
          />

          <span className="font-mono text-xs tracking-wider uppercase text-[#91ADFF] block mb-3">
            05 // Connect
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#EDEFF3] mb-4">
            {contact.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl font-normal leading-relaxed mb-8">
            {contact.subheading}
          </p>

          {/* Interactive Email Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 bg-[#0B0D11] border border-[#272D39] rounded-xl max-w-xl">
            <div className="flex items-center gap-3 px-4 py-2 text-sm font-mono text-[#EDEFF3] truncate flex-1">
              <Mail className="w-4 h-4 text-[#91ADFF] shrink-0" />
              <span className="truncate">{contact.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-[#EDEFF3] bg-[#151922] hover:bg-[#272D39]/60 border border-[#272D39] hover:border-[#91ADFF]/40 transition-all flex-1 sm:flex-initial"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-[#0B0D11] bg-[#EDEFF3] hover:bg-white transition-all flex-1 sm:flex-initial"
              >
                <span>Send</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0B0D11]" />
              </a>
            </div>
          </div>

          {/* External Profile Links (Rendered only when configured) */}
          {(hasGithub || hasLinkedin) && (
            <div className="mt-8 pt-6 border-t border-[#272D39]/80 flex items-center gap-4">
              <span className="text-xs font-mono text-[#9CA3AF]">Profiles:</span>
              {hasGithub && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EDEFF3] hover:text-[#91ADFF] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                </a>
              )}
              {hasLinkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#EDEFF3] hover:text-[#91ADFF] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                </a>
              )}
            </div>
          )}

          {/* Discreet note if social links are in placeholder mode */}
          {!hasGithub && !hasLinkedin && (
            <div className="mt-6 text-[11px] font-mono text-[#9CA3AF]/60">
              Direct inbox is actively monitored. External social handles configurable in portfolio profile.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
