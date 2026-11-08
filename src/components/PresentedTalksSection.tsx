import React from 'react';
import { TALKS_BY_LOCATION, isTalkUpcoming, isGroupUpcoming } from '../data/portfolioData';
import { MapPin, ExternalLink, Mic2 } from 'lucide-react';

const latestIsoDate = (talks: { isoDate: string }[]) =>
  talks.reduce((max, t) => (t.isoDate > max ? t.isoDate : max), '');

export const PresentedTalksSection: React.FC = () => {
  const sortedGroups = [...TALKS_BY_LOCATION].sort((a, b) =>
    latestIsoDate(b.talks).localeCompare(latestIsoDate(a.talks))
  );
  const hasUpcoming = sortedGroups.some((g) => isGroupUpcoming(g));

  return (
    <section id="talks" className="py-16 border-t border-white/5 bg-[#080A10]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <Mic2 className="w-3.5 h-3.5" />
              <span>Invited Seminars &amp; Research Presentations</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {hasUpcoming ? 'Presented & Upcoming Talks' : 'Presented Talks'}
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Research presentations grouped by host institution and delivery location.
          </p>
        </div>

        {/* Location Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedGroups.map((loc) => {
            const groupUpcoming = isGroupUpcoming(loc);
            return (
            <div
              key={loc.id}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                groupUpcoming
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

                  {groupUpcoming && (
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md shrink-0">
                      Upcoming
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
                        {talk.role && (
                          <p className="text-[11px] text-slate-400 leading-snug">
                            {talk.role}
                          </p>
                        )}
                        
                        <div className="flex items-center justify-between pt-1 gap-2 flex-wrap">
                          <span className="font-mono text-xs text-amber-400 tabular-nums font-medium flex items-center gap-1.5">
                            {isTalkUpcoming(talk) && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            )}
                            {talk.date}
                          </span>

                          <div className="flex items-center gap-2">
                            {talk.announcementUrl && (
                              <a
                                href={talk.announcementUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 text-[11px] font-semibold bg-amber-400/10 hover:bg-amber-400/20 px-2 py-0.5 rounded-md border border-amber-400/20"
                              >
                                <span>Talk Announcement</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                            {talk.paperUrl && (
                              <a
                                href={talk.paperUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center gap-1 text-[11px] font-medium"
                              >
                                <span>Paper</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
