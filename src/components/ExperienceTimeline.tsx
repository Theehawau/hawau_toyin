import React, { useState } from 'react';
import { EDUCATION, EXPERIENCE, LEADERSHIP_VOLUNTEERING } from '../data/portfolioData';
import { Building2, MapPin, GraduationCap, Users, Briefcase } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education' | 'leadership'>('all');

  return (
    <section id="experience" className="py-20 border-t border-white/5 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Career, Education & Leadership (from CV)
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Academic Trajectory
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
              Research Experience
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
