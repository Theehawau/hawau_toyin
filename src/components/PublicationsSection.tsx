import React, { useState } from 'react';
import { Publication, ALL_PUBLICATIONS, SHARED_TASKS, PROFILE } from '../data/portfolioData';
import { Search, Copy, Check, ChevronDown, ChevronUp, ExternalLink, Github, BookOpen, Layers, Trophy, Globe, Database, GraduationCap } from 'lucide-react';

interface PublicationsSectionProps {
  onShowToast: (msg: string) => void;
  selectedCategoryFilter?: string | null;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  onShowToast,
  selectedCategoryFilter
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync state if selectedCategoryFilter prop changes
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      if (
        selectedCategoryFilter === 'multilingual-nlp' ||
        selectedCategoryFilter === 'speech-rec-gen' ||
        selectedCategoryFilter === 'multilingual-speech-nlp'
      ) {
        setActiveCategory('speech-multilingual-nlp');
      } else {
        setActiveCategory(selectedCategoryFilter);
      }
    }
  }, [selectedCategoryFilter]);

  const filterTabs = [
    { id: 'all', label: `All Publications (${ALL_PUBLICATIONS.length})` },
    { id: 'speech-multilingual-nlp', label: 'Speech Recognition, Generation & Multimodal NLP' },
    { id: 'data-curation', label: 'Data Curation & Annotation' }
  ];

  const handleCopyCitation = (pub: Publication) => {
    const bibtex = pub.bibtex || `@inproceedings{toyin${pub.year},
  title={${pub.title}},
  author={${pub.authors.join(' and ')}},
  booktitle={${pub.venue}},
  year={${pub.year}}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(pub.id);
    onShowToast(`Copied BibTeX citation for "${pub.title.slice(0, 30)}..."`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleDetails = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredPubs = ALL_PUBLICATIONS.filter((pub) => {
    const matchesCategory =
      activeCategory === 'all' ||
      pub.category === activeCategory;

    const matchesSearch =
      searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="publications" className="py-20 border-t border-white/5 bg-[#07080E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Curated Academic Record
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              List of Publications
            </h2>
            <p className="text-xs text-slate-400 mt-1 italic">
              * - indicates equal contribution
            </p>
          </div>
        </div>

        {/* Featured StutterBank Callout Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-[#10131F] to-[#0E111C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>Project Resource · AI for Stuttered Speech</span>
            </div>
            <p className="text-sm font-semibold text-white mt-1">
              StutterBank: Open Resources & Datasets for Stuttered Speech AI
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Explore speech pathology guidelines, survey datasets, and dual-reference atypical ASR benchmarking materials.
            </p>
          </div>

          <a
            href="https://theehawau.github.io/stutterbank/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shadow-sm shrink-0"
          >
            <span>Visit StutterBank Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#10131F] border border-white/10 rounded-xl overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-amber-400 text-black font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Keyword Search Input */}
          <div className="relative min-w-[260px] lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search title, venue, author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#10131F] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 transition-colors"
            />
          </div>

        </div>

        {/* Publications List */}
        {filteredPubs.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-white/10 bg-[#0E111C]">
            <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-sm font-medium text-slate-300">No publications matched your search.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPubs.map((pub) => {
              const isExpanded = expandedId === pub.id;
              const isCopied = copiedId === pub.id;

              return (
                <article
                  key={pub.id}
                  className={`group p-6 rounded-2xl border transition-all duration-200 ${
                    pub.award
                      ? 'border-amber-400/40 bg-[#0F1220]/90 hover:border-amber-400/70'
                      : 'border-white/10 bg-[#0E111C]/70 hover:bg-[#121626] hover:border-amber-400/40'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    
                    <div className="space-y-2 max-w-4xl">
                      
                      {/* Zero-Pill Unboxed Venue & Year */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        <span className="font-semibold text-amber-400">{pub.venue}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{pub.year}</span>
                        {pub.isEqualContribution && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-slate-300 italic">* Equal contribution</span>
                          </>
                        )}
                      </div>

                      {/* Best Paper Award Callout */}
                      {pub.award && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
                          <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{pub.award}</span>
                        </div>
                      )}

                      {/* Paper Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {pub.title}
                      </h3>

                      {/* Author List */}
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {pub.authors.map((author, i) => {
                          const isHawau = author.includes('Hawau');
                          return (
                            <span
                              key={author + i}
                              className={
                                isHawau
                                  ? 'font-bold text-white underline decoration-amber-400/60 underline-offset-2'
                                  : 'text-slate-400'
                              }
                            >
                              {author}
                              {i < pub.authors.length - 1 ? ', ' : ''}
                            </span>
                          );
                        })}
                      </p>

                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2 shrink-0 self-start md:self-auto">
                      <button
                        onClick={() => handleCopyCitation(pub)}
                        className="px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                        title="Copy BibTeX Citation"
                        aria-label="Copy BibTeX Citation"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Copied BibTeX</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>BibTeX</span>
                          </>
                        )}
                      </button>

                      {pub.links.dataset && (
                        <a
                          href={pub.links.dataset}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 hover:text-emerald-200 transition-colors inline-flex items-center gap-1.5"
                          title="Explore Dataset"
                          aria-label="Explore Dataset"
                        >
                          <Database className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Dataset</span>
                        </a>
                      )}

                      {pub.links.paper && (
                        <a
                          href={pub.links.paper}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-400 transition-colors inline-flex items-center justify-center"
                          title="Read Paper"
                          aria-label="Read Paper"
                        >
                          <BookOpen className="w-4 h-4" />
                        </a>
                      )}

                      {pub.links.scholar && (
                        <a
                          href={pub.links.scholar}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-blue-400 transition-colors inline-flex items-center justify-center"
                          title="View on Google Scholar"
                          aria-label="View on Google Scholar"
                        >
                          <GraduationCap className="w-4 h-4 text-blue-400" />
                        </a>
                      )}

                      {pub.links.code && (
                        <a
                          href={pub.links.code}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors inline-flex items-center justify-center"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Abstract & BibTeX Toggle */}
                  {(pub.abstract || pub.bibtex) && (
                    <div className="mt-4 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleDetails(pub.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          <span>{isExpanded ? 'Hide Abstract & BibTeX' : 'Read Abstract & BibTeX'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="mt-3 space-y-3 animate-in fade-in duration-200">
                          {pub.abstract && (
                            <div className="p-4 rounded-xl bg-[#090C16] border border-white/10 text-xs text-slate-300 leading-relaxed font-sans">
                              <p className="font-semibold text-[11px] text-amber-300 uppercase tracking-wider mb-1.5">
                                Abstract
                              </p>
                              <p className="text-slate-300 font-normal">
                                {pub.abstract}
                              </p>
                            </div>
                          )}

                          {pub.bibtex && (
                            <div className="p-3.5 rounded-xl bg-[#090C16] border border-white/10 text-xs text-slate-300 font-mono">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-sans font-semibold text-[11px] text-amber-300 uppercase tracking-wider">
                                  BibTeX
                                </span>
                                <button
                                  onClick={() => handleCopyCitation(pub)}
                                  className="text-[11px] text-amber-400 hover:underline flex items-center gap-1"
                                >
                                  <Copy className="w-3 h-3" />
                                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                                </button>
                              </div>
                              <pre className="overflow-x-auto text-[11px] text-slate-300 whitespace-pre-wrap leading-relaxed">
                                {pub.bibtex}
                              </pre>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                </article>
              );
            })}
          </div>
        )}

        {/* Shared Tasks Subsection */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Shared Tasks (Co-Organization & Benchmarking)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SHARED_TASKS.map((st) => (
              <div
                key={st.id}
                className="p-5 rounded-xl border border-white/10 bg-[#0E111C]/80 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-amber-400">{st.venue}</span>
                  <span className="font-mono">{st.year}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{st.title}</h4>
                <p className="text-xs text-slate-400">{st.authors.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
