import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#272D39] py-12 px-6 bg-[#0B0D11]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-mono font-semibold text-sm text-[#EDEFF3]">
            {portfolioData.personal.name}
          </span>
          <span className="text-xs font-mono text-[#9CA3AF]">
            — {portfolioData.personal.location.split(',')[0]}, India
          </span>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs font-mono text-[#9CA3AF]">
            © {new Date().getFullYear()} Karthikeyan M. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded bg-[#151922] border border-[#272D39] text-[#9CA3AF] hover:text-[#EDEFF3] hover:border-[#91ADFF]/40 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
