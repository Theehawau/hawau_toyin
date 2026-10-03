import React from 'react';
import { TALKS_BY_LOCATION } from '../data/portfolioData';
import { MapPin, ExternalLink, Mic2 } from 'lucide-react';

export const PresentedTalksSection: React.FC = () => {
  return (
    <section id="talks" className="py-16 border-t border-white/5 bg-[#080A10]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <Mic2 className="w-3.5 h-3.5" />
              <span>Invited Seminars & Research Presentations</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Presented & Upcoming Talks
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Research presentations grouped by host institution and delivery location.
          </p>
        </div>

        {/* Location Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TALKS_BY_LOCATION.map((loc) => (
            <div
              key={loc.id}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                loc.isUpcoming
                  ? 'border-amber-400/40 bg-[#0E1220]/90 hover:border-amber-400/70 shadow-lg shadow-amber-500/5'
                  : 'border-white/10 bg-[#0E111D]/80 hover:bg-[#121626] hover:border-amber-400/30'
              }`}
            >
              {/* Delivery Location Header */}
              <div>
                <div className="flex items-start justify-between pb-4 border-b border-white/10 gap-2">
                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {loc.institution}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{loc.location}</span>
                    </div>
                  </div>

                  {loc.isUpcoming ? (
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md shrink-0">
                      Upcoming
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5 shrink-0">
                      {loc.talks.length} {loc.talks.length === 1 ? 'Talk' : 'Talks'}
                    </span>
                  )}
                </div>

                {/* List of Talks in this Location */}
                <div className="mt-5 space-y-3.5">
                  {loc.talks.map((talk, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#141828]/70 border border-white/5 space-y-1.5 hover:border-amber-400/20 transition-colors"
                    >
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300 leading-snug">
                          {talk.title}
                        </h4>
                        
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-mono text-xs text-amber-400 tabular-nums font-medium flex items-center gap-1.5">
                            {talk.isUpcoming && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            )}
                            {talk.date}
                          </span>

                          {talk.paperUrl && (
                            <a
                              href={talk.paperUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 text-[11px] font-medium"
                            >
                              <span>Paper</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-400 pt-0.5">
                        <span>{loc.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
