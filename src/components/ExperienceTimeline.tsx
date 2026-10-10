import React, { useState } from 'react';
import { EDUCATION, EXPERIENCE, LEADERSHIP_VOLUNTEERING } from '../data/portfolioData';
import { Building2, MapPin, GraduationCap, Users, Briefcase, ExternalLink, Sparkles } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education' | 'leadership'>('all');

  return (
    <section id="experience" className="py-20 border-t border-white/5 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Career, Education & Leadership (from CV)
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Academic Trajectory & Leadership
            </h2>
          </div>

          {/* Sub-tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#10131F] border border-white/10 rounded-xl overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Trajectory
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'education'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'experience'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Research & Facilitation
            </button>
            <button
              onClick={() => setActiveTab('leadership')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'leadership'
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Leadership & Service
            </button>
          </div>
        </div>

        {/* Executive AI Facilitation Spotlight Banner */}
        <div className="mb-10 p-6 rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-500/10 via-[#10131F]/90 to-[#0E111C] shadow-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Executive Leadership & Facilitation</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                AI for Business Brainstorming & Leadership Training
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Facilitating applied AI strategy and enterprise brainstorming sessions for the <span className="text-white font-medium">MBZUAI Executive Program</span> and specialized <span className="text-white font-medium">AI Leadership Training</span> cohorts. Guiding government officials, C-suite executives, and organizational transformation leaders through strategic AI problem formulation, multimodal roadmaps, and ethical enterprise adoption.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-amber-300/90 font-medium">
                <span>Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)</span>
                <span aria-hidden="true" className="text-amber-400/50">·</span>
                <span>Abu Dhabi, UAE</span>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="https://mbzuai.ac.ae/news-events/news/mohamed-bin-zayed-university-artificial-intelligence-hosts-ai-leadership-training"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wide transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <span>Read Leadership Training Article</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Experience & Education (Left 7 or 12 cols) */}
          <div className={`${activeTab === 'all' ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-10`}>
            
            {/* Education Section */}
            {(activeTab === 'all' || activeTab === 'education') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>

                <div className="space-y-4">
                  {EDUCATION.map((edu, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl border border-white/10 bg-[#0E111C]/80 space-y-1.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-1">
                        <span className="font-semibold text-white text-sm">{edu.degree}</span>
                        <span className="font-mono text-amber-400 font-semibold">{edu.period}</span>
                      </div>
                      <p className="text-xs text-slate-300 font-medium">{edu.institution}</p>
                      {edu.details && (
                        <p className="text-xs text-slate-400 pt-1 leading-relaxed">{edu.details}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Section */}
            {(activeTab === 'all' || activeTab === 'experience') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Briefcase className="w-4 h-4" />
                  <span>Research & Industry Experience</span>
                </div>

                <div className="relative border-l border-white/10 ml-3 pl-6 space-y-6">
                  {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#07080D] border-2 border-amber-400 group-hover:scale-125 transition-transform" />

                      <div className="p-5 rounded-xl border border-white/10 bg-[#0E111C]/60 hover:bg-[#121626] transition-colors">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-1">
                          <span className="font-bold text-white text-sm">{exp.role}</span>
                          <span className="font-mono text-amber-400">{exp.period}</span>
                        </div>

                        <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.institution}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-400">{exp.location}</span>
                        </p>

                        <ul className="mt-3 space-y-1.5">
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="text-xs text-slate-400 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 mt-1.5 shrink-0" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Leadership & Volunteering (Right 5 cols or tab) */}
          {(activeTab === 'all' || activeTab === 'leadership') && (
            <div className={`${activeTab === 'all' ? 'lg:col-span-5' : 'lg:col-span-12'} space-y-4`}>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Leadership and Volunteering</span>
              </div>

              <div className="space-y-3">
                {LEADERSHIP_VOLUNTEERING.map((lead, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/10 bg-[#0E111C]/80 hover:bg-[#121624] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-bold text-white text-xs">{lead.role}</span>
                      <span className="font-mono text-amber-400 text-[11px]">{lead.period}</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">{lead.organization}</p>
                    {lead.detail && (
                      <p className="text-[11px] text-slate-400 mt-1">{lead.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
