import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { Activity, Globe2, Database, Radio, ArrowRight, ExternalLink, Trophy } from 'lucide-react';

interface ResearchFocusProps {
  onSelectTopic: (topicId: string) => void;
}

export const ResearchFocus: React.FC<ResearchFocusProps> = ({ onSelectTopic }) => {
  const pillars = [
    {
      id: "stuttered-speech",
      title: "AI for stuttered speech",
      icon: <Activity className="w-5 h-5 text-amber-400" />,
      shortDesc: "Pioneering clinically grounded dual-reference benchmarks, scoping reviews, and automatic severity annotations to make speech technologies equitable for people who stutter.",
      award: "Speech Pathology Best Paper Award (Speech Pathology Australia @ Interspeech 2026)",
      projectLink: {
        title: "StutterBank Project Page",
        url: "https://theehawau.github.io/stutterbank/"
      },
      bullets: [
        "Aligning Stuttered-Speech Research with End-User Needs (Interspeech 2026)",
        "What Counts as an Error? Dual-Reference Benchmarking (Interspeech 2026)",
        "Clinical Annotations for Automatic Stuttering Severity Assessment",
        "StutterBank Open Research Resource"
      ]
    },
    {
      id: "multilingual-nlp",
      title: "Efficient, Multilingual & Multimodal NLP",
      icon: <Globe2 className="w-5 h-5 text-indigo-400" />,
      shortDesc: "Developing parameter-efficient models, evaluating large language models on African and low-resource languages, and auditing vision-language systems across 100 culturally diverse languages.",
      bullets: [
        "Are LLMs Good Text Diacritizers? Arabic & Yoruba Case Study (LREC 2026)",
        "Evaluating LMMs on Culturally Diverse 100 Languages (CVPR 2025)",
        "Evaluating LLM Performance on African Languages (ACL 2025)",
        "Limits of Detecting Machine-Generated Text (COLING 2025)"
      ]
    },
    {
      id: "data-curation",
      title: "Data Curation & Annotation",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      shortDesc: "Curating specialized speech datasets, clinical acoustic disfluency taxonomies, historical language retrieval benchmarks, and multidialectal evaluation corpora.",
      bullets: [
        "ArVoice: Multi-Speaker Dataset for Arabic Speech Synthesis (Interspeech 2025)",
        "Gretino: Greek & Latin Classical Language Dataset (LREC 2026)",
        "PolyWER Code-Switched Transliteration & Translation Annotations",
        "NADI & Iqra’Eval Arabic Speech Shared Tasks (ArabicNLP 2025)"
      ]
    },
    {
      id: "speech-rec-gen",
      title: "Speech Recognition & Generation",
      icon: <Radio className="w-5 h-5 text-pink-400" />,
      shortDesc: "Architecting unified multi-task speech-to-text and text-to-speech models, foundational Arabic transformers, and causal temporal acoustic representations.",
      award: "Best Paper Award (ArabicNLP @ EMNLP 2023 for ArTST)",
      bullets: [
        "STTATTS: Unified Speech-to-Text & Text-to-Speech Model (EMNLP 2024)",
        "ArTST: Arabic Text and Speech Transformer (Best Paper Award)",
        "Dialectal Coverage and Generalization in Arabic ASR (ACL 2025)",
        "Infant Cry Detection Using Causal Temporal Representation (ICASSP 2025)"
      ]
    }
  ];

  return (
    <section id="research" className="py-20 border-t border-white/5 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Core Inquiry
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Research Interests
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Organized across four foundational research programs spanning atypical speech, multilingual NLP, data curation, and acoustic modeling.
          </p>
        </div>

        {/* 4 Research Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group relative p-7 rounded-2xl border border-white/10 bg-[#0E111C]/70 hover:bg-[#121625] transition-all duration-300 hover:border-amber-400/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs text-slate-500 tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                {/* Award badge if present */}
                {pillar.award && (
                  <div className="mt-2.5 flex items-start gap-1.5 text-xs text-amber-300 font-semibold bg-amber-500/10 border border-amber-400/20 rounded-lg p-2">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{pillar.award}</span>
                  </div>
                )}

                <p className="text-sm text-slate-300 leading-relaxed mt-3 mb-5">
                  {pillar.shortDesc}
                </p>

                {/* Dedicated Project Link for AI for Stuttered Speech */}
                {pillar.projectLink && (
                  <div className="mb-4">
                    <a
                      href={pillar.projectLink.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/30 text-amber-300 hover:text-amber-200 text-xs font-semibold transition-colors"
                    >
                      <span>Explore StutterBank Project Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              <div>
                {/* Zero-Pill Sub-topics with typographic separators */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs text-slate-400 leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
                    {pillar.bullets.map((area, i) => (
                      <React.Fragment key={area}>
                        <span className="hover:text-white transition-colors">{area}</span>
                        {i < pillar.bullets.length - 1 && (
                          <span aria-hidden="true" className="text-amber-400/50">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectTopic(pillar.id)}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Filter {pillar.title} publications</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
