import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ShieldCheck,
  FileSearch,
  ScanFace,
  Layers,
  Database,
  Link as LinkIcon,
  X,
  ExternalLink,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Lock,
  Workflow,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function FeaturedProject() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const shouldReduceMotion = useReducedMotion();
  const project = portfolioData.featuredProject;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDetailOpen) {
        setIsDetailOpen(false);
      }
    };
    if (isDetailOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDetailOpen]);

  return (
    <section id="project" className="py-24 px-6 border-t border-[#272D39]/80 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-[#91ADFF]">
            <span>02 // Flagship Project</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#91ADFF]" />
            <span className="text-[#9CA3AF]">Dedicated Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEFF3]">
            {project.name}
          </h2>
          <p className="mt-3 text-lg text-[#9CA3AF] max-w-2xl font-normal">
            {project.subtitle}
          </p>
        </div>

        {/* Flagship Project Showcase Card */}
        <div className="bg-[#151922] border border-[#272D39] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#91ADFF]/40 group">
          {/* Top Browser Header Chrome */}
          <div className="bg-[#0B0D11] border-b border-[#272D39] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#272D39] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#272D39] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#272D39] inline-block" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1 bg-[#151922] border border-[#272D39] rounded text-xs font-mono text-[#9CA3AF] max-w-xs sm:max-w-md w-full justify-center">
              <Lock className="w-3 h-3 text-[#91ADFF]" />
              <span className="truncate">screening-system.internal/verify/dashboard</span>
            </div>

            <div className="text-[11px] font-mono text-[#9CA3AF] hidden sm:block">
              v1.0-release
            </div>
          </div>

          {/* High-Fidelity UI Illustration / Visual Dashboard Frame */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-[#151922] to-[#0B0D11]/90">
            {/* Verification Result Dashboard Mockup */}
            <div className="bg-[#0B0D11] border border-[#272D39] rounded-xl p-5 sm:p-6 shadow-inner">
              {/* Mockup Top Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-[#272D39]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#91ADFF]/10 border border-[#91ADFF]/30 flex items-center justify-center text-[#91ADFF]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#9CA3AF]">INSPECTION WORKSPACE</div>
                    <div className="text-sm font-semibold text-[#EDEFF3]">Identity Verification Pipeline</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#151922] border border-[#272D39] text-xs font-mono text-[#91ADFF]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Pipeline Active
                  </span>
                  <span className="text-xs font-mono px-2 py-1 bg-[#272D39]/40 text-[#9CA3AF] rounded">
                    Audit Log #8492
                  </span>
                </div>
              </div>

              {/* 3-Column Mockup Data Display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Module 1: Document OCR & Tamper Analysis */}
                <div className="bg-[#151922] border border-[#272D39] rounded-lg p-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-3">
                    <span className="flex items-center gap-1.5">
                      <FileSearch className="w-3.5 h-3.5 text-[#91ADFF]" />
                      OCR & Tampering
                    </span>
                    <span className="text-emerald-400 font-semibold">Analyzed</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-[#0B0D11] p-2 rounded border border-[#272D39]/60 flex justify-between">
                      <span className="text-[#9CA3AF]">Field Extraction:</span>
                      <span className="text-[#EDEFF3]">Full Match</span>
                    </div>
                    <div className="bg-[#0B0D11] p-2 rounded border border-[#272D39]/60 flex justify-between">
                      <span className="text-[#9CA3AF]">Edge & Font Consistency:</span>
                      <span className="text-emerald-400">Normal</span>
                    </div>
                    <div className="bg-[#0B0D11] p-2 rounded border border-[#272D39]/60 flex justify-between">
                      <span className="text-[#9CA3AF]">MRZ / QR Checksum:</span>
                      <span className="text-[#91ADFF]">Validated</span>
                    </div>
                  </div>
                </div>

                {/* Module 2: Facial Comparison & Duplicate Check */}
                <div className="bg-[#151922] border border-[#272D39] rounded-lg p-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-3">
                    <span className="flex items-center gap-1.5">
                      <ScanFace className="w-3.5 h-3.5 text-[#91ADFF]" />
                      Biometric & Duplicates
                    </span>
                    <span className="text-emerald-400 font-semibold">Screened</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-[#0B0D11] p-2 rounded border border-[#272D39]/60 flex justify-between">
                      <span className="text-[#9CA3AF]">Face Alignment:</span>
                      <span className="text-[#EDEFF3]">Standardized</span>
                    </div>
                    <div className="bg-[#0B0D11] p-2 rounded border border-[#272D39]/60 flex justify-between">
                      <span className="text-[#9CA3AF]">Embeddings Match:</span>
                      <span className="text-emerald-400">High Confidence</span>
                    </div>
                    <div className="bg-[#0B0D11] p-2 rounded border border-[#272D39]/60 flex justify-between">
                      <span className="text-[#9CA3AF]">Duplicate Database:</span>
                      <span className="text-[#91ADFF]">No Prior Collision</span>
                    </div>
                  </div>
                </div>

                {/* Module 3: Rule-Based Risk & Anchoring */}
                <div className="bg-[#151922] border border-[#272D39] rounded-lg p-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Workflow className="w-3.5 h-3.5 text-[#91ADFF]" />
                      Risk & Audit Trail
                    </span>
                    <span className="text-[#91ADFF] font-semibold">Anchored</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-[#0B0D11] p-2 rounded border border-[#272D39]/60 flex justify-between">
                      <span className="text-[#9CA3AF]">Risk Tier:</span>
                      <span className="text-emerald-400">Tier 1 (Cleared)</span>
                    </div>
                    <div className="bg-[#0B0D11] p-2 rounded border border-[#272D39]/60 flex justify-between">
                      <span className="text-[#9CA3AF]">Audit Ledger:</span>
                      <span className="text-[#EDEFF3]">SQLite Recorded</span>
                    </div>
                    <div className="bg-[#0B0D11] p-2 rounded border border-[#272D39]/60 flex justify-between">
                      <span className="text-[#9CA3AF]">State Digest:</span>
                      <span className="text-xs text-[#91ADFF] truncate max-w-[90px]">0x7f4a...92b</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption placeholder note */}
              <div className="mt-4 pt-3 border-t border-[#272D39]/40 flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
                <span>Modular screening dashboard preview</span>
                <span className="text-[#9CA3AF]/70">[System Interface Representation]</span>
              </div>
            </div>

            {/* Overview Text & Technology Badges */}
            <div className="mt-8">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#91ADFF] mb-2">
                System Overview
              </h3>
              <p className="text-[#EDEFF3] text-base leading-relaxed mb-6 font-normal">
                {project.overview}
              </p>

              {/* Technologies list */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-[#0B0D11] text-[#EDEFF3] border border-[#272D39]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Core Features Overview (Compact Grid) */}
              <div className="border-t border-[#272D39] pt-6 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-4">
                  Key Verification Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {project.coreFeatures.slice(0, 6).map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#0B0D11]/60 border border-[#272D39]/70 text-xs"
                    >
                      <span className="text-[#91ADFF] font-mono mr-1.5">•</span>
                      <span className="text-[#EDEFF3] font-medium">{feat.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deep Dive Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#272D39]">
                <button
                  type="button"
                  onClick={() => setIsDetailOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium text-[#0B0D11] bg-[#EDEFF3] hover:bg-white hover:shadow-lg transition-all"
                >
                  <Maximize2 className="w-4 h-4 text-[#0B0D11]" />
                  <span>View Full System Architecture & Details</span>
                </button>

                <span className="font-mono text-xs text-[#9CA3AF]">
                  Full-Stack & Computer Vision Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {isDetailOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsDetailOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B0D11] border border-[#272D39] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-[#272D39] flex items-center justify-between bg-[#151922]">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#91ADFF] block mb-1">
                    System Deep Dive
                  </span>
                  <h3 id="modal-title" className="text-xl font-bold text-[#EDEFF3]">
                    {project.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDetailOpen(false)}
                  className="p-2 rounded-lg text-[#9CA3AF] hover:text-[#EDEFF3] hover:bg-[#272D39]/50 transition-colors"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs inside modal */}
              <div className="flex border-b border-[#272D39] px-6 bg-[#0B0D11] overflow-x-auto text-xs font-mono">
                {[
                  { id: 'overview', label: 'Overview & Problem' },
                  { id: 'architecture', label: 'Architecture & Stack' },
                  { id: 'features', label: 'Core Features (9)' },
                  { id: 'challenges', label: 'Engineering Challenges' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 border-b-2 font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'border-[#91ADFF] text-[#EDEFF3]'
                        : 'border-transparent text-[#9CA3AF] hover:text-[#EDEFF3]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed text-[#9CA3AF]">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#91ADFF] mb-2">
                        Project Overview
                      </h4>
                      <p className="text-base text-[#EDEFF3] leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#151922] border border-[#272D39]">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#91ADFF] mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#91ADFF]" />
                        Problem Being Addressed
                      </h4>
                      <p className="text-[#EDEFF3] leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-3">
                        Operational Flow
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                        <div className="p-3 bg-[#151922] border border-[#272D39] rounded-lg">
                          <span className="text-[#91ADFF] block mb-1">01. Ingestion</span>
                          <span>Upload credentials via React UI and trigger asynchronous FastAPI extraction.</span>
                        </div>
                        <div className="p-3 bg-[#151922] border border-[#272D39] rounded-lg">
                          <span className="text-[#91ADFF] block mb-1">02. Screening</span>
                          <span>Computer vision routines verify tamper signals, face comparison, and checksums.</span>
                        </div>
                        <div className="p-3 bg-[#151922] border border-[#272D39] rounded-lg">
                          <span className="text-[#91ADFF] block mb-1">03. Review & Ledger</span>
                          <span>Rule-based risk classification, SQLite audit records, and Solidity state anchoring.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#91ADFF] mb-3">
                        System Architecture Breakdown
                      </h4>
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-[#151922] border border-[#272D39]">
                          <span className="text-xs font-mono text-[#91ADFF] block mb-1">Client Layer</span>
                          <span className="text-sm font-semibold text-[#EDEFF3] block mb-1">React + Vite</span>
                          <p className="text-xs text-[#9CA3AF]">{project.architecture.client}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#151922] border border-[#272D39]">
                          <span className="text-xs font-mono text-[#91ADFF] block mb-1">Backend & Pipeline Orchestration</span>
                          <span className="text-sm font-semibold text-[#EDEFF3] block mb-1">Python & FastAPI</span>
                          <p className="text-xs text-[#9CA3AF]">{project.architecture.api}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#151922] border border-[#272D39]">
                          <span className="text-xs font-mono text-[#91ADFF] block mb-1">Computer Vision Engine</span>
                          <span className="text-sm font-semibold text-[#EDEFF3] block mb-1">Computer Vision & OCR</span>
                          <p className="text-xs text-[#9CA3AF]">{project.architecture.cvEngine}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#151922] border border-[#272D39]">
                          <span className="text-xs font-mono text-[#91ADFF] block mb-1">Persistence & Relational Store</span>
                          <span className="text-sm font-semibold text-[#EDEFF3] block mb-1">SQLite</span>
                          <p className="text-xs text-[#9CA3AF]">{project.architecture.storage}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#151922] border border-[#272D39]">
                          <span className="text-xs font-mono text-[#91ADFF] block mb-1">Immutable Verification Anchoring</span>
                          <span className="text-sm font-semibold text-[#EDEFF3] block mb-1">Solidity</span>
                          <p className="text-xs text-[#9CA3AF]">{project.architecture.integrity}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-3">
                        Technologies Deployed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((t) => (
                          <span key={t} className="px-3 py-1.5 bg-[#151922] border border-[#272D39] text-[#EDEFF3] rounded font-mono text-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#91ADFF] mb-2">
                      All 9 Core Modules & Implementation Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.coreFeatures.map((feat, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl bg-[#151922] border border-[#272D39] space-y-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-[#91ADFF]">{String(index + 1).padStart(2, '0')}.</span>
                            <h5 className="font-semibold text-sm text-[#EDEFF3]">
                              {feat.title}
                            </h5>
                          </div>
                          <p className="text-xs text-[#9CA3AF] leading-relaxed">
                            {feat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'challenges' && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#91ADFF] mb-2">
                      Technical Challenges Addressed
                    </h4>
                    <div className="space-y-4">
                      {project.technicalChallenges.map((item, index) => (
                        <div
                          key={index}
                          className="p-5 rounded-xl bg-[#151922] border border-[#272D39] space-y-2"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-[#91ADFF]">Issue {index + 1}:</span>
                            <h5 className="font-semibold text-sm text-[#EDEFF3]">
                              {item.challenge}
                            </h5>
                          </div>
                          <div className="pt-2 border-t border-[#272D39]/60 text-xs">
                            <span className="text-[#9CA3AF] block font-mono mb-1">Implementation Approach:</span>
                            <p className="text-[#EDEFF3] leading-relaxed">
                              {item.approach}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-[#272D39] bg-[#151922] flex items-center justify-between text-xs font-mono">
                <span className="text-[#9CA3AF]">
                  Press <kbd className="px-1.5 py-0.5 bg-[#0B0D11] border border-[#272D39] rounded text-[#EDEFF3]">ESC</kbd> to exit
                </span>
                <button
                  type="button"
                  onClick={() => setIsDetailOpen(false)}
                  className="px-4 py-2 bg-[#0B0D11] hover:bg-[#272D39]/40 border border-[#272D39] text-[#EDEFF3] rounded transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
