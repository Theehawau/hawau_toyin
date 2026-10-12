import React, { useState, useRef } from 'react';
import { PROFILE } from '../data/portfolioData';
import { ArrowDown, Github, Globe, GraduationCap, MapPin, Mail, Linkedin, Languages, ExternalLink, Award, Mic2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenCV: () => void;
  onOpenContact: () => void;
  onShowToast: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV, onOpenContact, onShowToast }) => {
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    return 'funny_face.JPG';
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    onShowToast(`Copied ${PROFILE.email} to clipboard!`);
  };

  const handleImageError = () => {
    if (avatarSrc !== PROFILE.avatar) {
      setAvatarSrc(PROFILE.avatar);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setAvatarSrc(result);
        localStorage.setItem('hawau_avatar_photo', result);
        onShowToast("Updated background portrait with your photo!");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  return (
    <section 
      id="hero"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#f8fafc] dark:bg-[#090A0F] text-slate-900 dark:text-slate-100 transition-colors duration-200"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Researcher Profile, Bio, Actions & Links */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">

            {/* Researcher Name & Affiliation with Small Round Profile Picture */}
            <div>
              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <div className="relative shrink-0 group">
                  <img
                    src={avatarSrc}
                    onError={handleImageError}
                    alt={PROFILE.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-full object-cover object-[center_18%] ring-2 ring-amber-400/80 shadow-md shadow-amber-500/15"
                  />
                  <span 
                    className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#090A0F]" 
                    title="Active PhD Researcher"
                  />
                </div>

                <div>
                  <h1
                    className="font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '42px' }}
                  >
                    {PROFILE.name}
                  </h1>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-sans font-medium mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{PROFILE.department} · {PROFILE.institution}, {PROFILE.location}</span>
                  </div>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Sub-headline / Hook */}
            <p 
              className="font-medium text-slate-700 dark:text-slate-200 leading-relaxed"
              style={{ fontSize: '16px' }}
            >
              {PROFILE.heroPunchline}
            </p>

            {/* Bio Narrative from CV */}
            <p 
              className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-normal"
              style={{ fontSize: '12px' }}
            >
              {PROFILE.bio}
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#research"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wide transition-all shadow-md shadow-amber-500/15 flex items-center gap-2"
              >
                <span>Explore Research</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenCV}
                className="px-5 py-2.5 rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white font-medium text-xs tracking-wide border border-slate-300 dark:border-white/10 transition-colors"
              >
                View Full CV
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-800 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 dark:hover:text-white font-medium text-xs tracking-wide border border-slate-300 dark:border-white/10 transition-colors"
              >
                Get in Touch
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-transparent hover:bg-slate-200/60 dark:hover:bg-white/5 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 font-mono text-xs transition-colors flex items-center gap-1.5"
                title="Copy institutional email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PROFILE.email}</span>
              </button>
            </div>

            {/* Executive AI Facilitation Spotlight Pill */}
            <div className="pt-1">
              <a
                href={PROFILE.executiveProgramUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-xs transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span className="font-semibold text-amber-600 dark:text-amber-300">Executive Facilitator:</span>
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  AI for Business Brainstorming · MBZUAI Executive Program & AI Leadership Training
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0 ml-0.5" />
              </a>
            </div>

            {/* Academic Profiles & Social Links */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px] font-sans font-semibold">
                Profiles:
              </span>

              <a
                href={PROFILE.scholar}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Scholar</span>
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PROFILE.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>theehawau.github.io</span>
              </a>
            </div>

            {/* Languages Spoken (Zero-Pill Inline Typography) */}
            <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-sans">
              <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-medium">
                <Languages className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>Languages:</span>
              </div>
              {PROFILE.languages.map((item, index) => (
                <span key={item.language} className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                  <strong className="text-slate-800 dark:text-slate-200">{item.language}</strong> ({item.proficiency})
                  {index < PROFILE.languages.length - 1 && <span className="ml-3 text-slate-400 dark:text-slate-600">·</span>}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Recent Highlights & Updates (Top Right Side) */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#10131F]/80 backdrop-blur-md shadow-lg dark:shadow-xl space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 dark:text-amber-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>Recent Highlights & Updates</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">
                  2026
                </span>
              </div>

              <div className="flex flex-col gap-3 pt-0.5">
                {/* 1. Most Recent Award */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-amber-400/30 dark:border-amber-400/25 hover:border-amber-400/50 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-300 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                        <span>Most Recent Award</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Interspeech 2026</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white mt-1.5 leading-snug">
                      Speech Pathology Australia Best Paper Award
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Aligning Stuttered-Speech Research with End-User and Clinical Needs.
                    </p>
                  </div>
                  <a
                    href={PROFILE.awardNewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 transition-colors mt-2.5 pt-1"
                  >
                    <span>Read MBZUAI News Feature</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* 2. Upcoming Talk */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-indigo-400/30 dark:border-indigo-400/25 hover:border-indigo-400/50 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-1.5">
                        <Mic2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                        <span>Upcoming Talk</span>
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px] font-semibold">Oct 13, 2026</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white mt-1.5 leading-snug">
                      STTATTS: Speech-to-Text & Text-to-Speech
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Alexandria University · Alexandria, Egypt
                    </p>
                  </div>
                  <a
                    href="https://arxiv.org/abs/2410.18607"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-300 hover:text-indigo-500 dark:hover:text-indigo-200 transition-colors mt-2.5 pt-1"
                  >
                    <span>Paper & Abstract Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
