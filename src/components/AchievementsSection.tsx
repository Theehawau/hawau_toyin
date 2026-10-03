import React from 'react';
import { HONORS_AND_AWARDS } from '../data/portfolioData';
import { Award, Trophy, Star, GraduationCap, Sparkles } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getIcon = (badge?: string) => {
    if (badge?.includes('Champion')) return <Trophy className="w-5 h-5 text-amber-400" />;
    if (badge?.includes('Best Paper')) return <Award className="w-5 h-5 text-amber-300" />;
    if (badge?.includes('Scholarship') || badge?.includes('Fellowship')) return <GraduationCap className="w-5 h-5 text-indigo-400" />;
    return <Sparkles className="w-5 h-5 text-amber-400" />;
  };

  return (
    <section id="honors" className="py-20 border-t border-white/5 bg-[#090B12]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Recognition & Distinctions (from CV)
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Honors and Awards
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Awards, hackathon championships, international research grants, and commencement leadership honors.
          </p>
        </div>

        {/* Grid of Honors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HONORS_AND_AWARDS.map((item) => (
            <div
              key={item.title + item.year}
              className="p-6 rounded-2xl border border-white/10 bg-[#0E111C]/80 hover:bg-[#121624] transition-all duration-200 hover:border-amber-400/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {getIcon(item.badge)}
                  </div>
                  <span className="font-mono text-xs text-amber-400 font-semibold tabular-nums">
                    {item.year}
                  </span>
                </div>

                <div className="text-xs text-slate-400 mb-1">
                  <span className="font-medium text-slate-300">{item.organization}</span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              {item.badge && (
                <div className="pt-4 mt-3 border-t border-white/5">
                  <span className="text-[11px] font-semibold text-amber-300">
                    {item.badge}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
