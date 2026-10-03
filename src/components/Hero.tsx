import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import { ArrowDown, Github, Globe, GraduationCap, MapPin, Mail, Linkedin, Languages } from 'lucide-react';

interface HeroProps {
  onOpenCV: () => void;
  onOpenContact: () => void;
  onShowToast: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV, onOpenContact, onShowToast }) => {
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    return localStorage.getItem('hawau_avatar_photo') || 'funny_face.JPG';
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    onShowToast(`Copied ${PROFILE.email} to clipboard!`);
  };

  const handleImageError = () => {
    // If funny_face.JPG cannot be directly resolved by browser relative path, fallback to her real portrait
    if (avatarSrc !== PROFILE.avatar) {
      setAvatarSrc(PROFILE.avatar);
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[450px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic & Profile Impact (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker (Unboxed text with typographic separator) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>{PROFILE.title}</span>
              <span aria-hidden="true" className="text-amber-400/50">·</span>
              <span>{PROFILE.institution}</span>
            </div>

            {/* Researcher Name */}
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {PROFILE.name}
            </h1>

            {/* Sub-headline / Hook */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 max-w-2xl leading-relaxed">
              {PROFILE.heroPunchline}
            </p>

            {/* Bio Narrative from CV */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-sans font-normal">
              {PROFILE.bio}
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#research"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wide transition-all shadow-md shadow-amber-500/15 flex items-center gap-2"
              >
                <span>Explore Research</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenCV}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs tracking-wide border border-white/10 transition-colors"
              >
                View Full CV
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs tracking-wide border border-white/10 transition-colors"
              >
                Get in Touch
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-400 hover:text-slate-200 font-mono text-xs transition-colors flex items-center gap-1.5"
                title="Copy institutional email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PROFILE.email}</span>
              </button>
            </div>

            {/* Academic Profiles & Social Links */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="text-slate-400 uppercase tracking-wider text-[11px] font-sans font-semibold">
                Profiles:
              </span>

              <a
                href={PROFILE.scholar}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Scholar</span>
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PROFILE.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>theehawau.github.io</span>
              </a>
            </div>

            {/* Languages Spoken (Zero-Pill Inline Typography) */}
            <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-sans">
              <div className="flex items-center gap-1 text-slate-300 font-medium">
                <Languages className="w-3.5 h-3.5 text-amber-400" />
                <span>Languages:</span>
              </div>
              {PROFILE.languages.map((item, index) => (
                <span key={item.language} className="hover:text-slate-200 transition-colors">
                  <strong className="text-slate-200">{item.language}</strong> ({item.proficiency})
                  {index < PROFILE.languages.length - 1 && <span className="ml-3 text-slate-600">·</span>}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Authentic Profile Photograph & Proof Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Outer container with single hairline border */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#10131F]/60 p-2 backdrop-blur-sm shadow-2xl">
                <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden rounded-xl bg-slate-900 group">
                  <img
                    src={avatarSrc}
                    onError={handleImageError}
                    alt="Hawau Olamide Toyin, PhD Researcher"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Subtle lower card overlay without phone number */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <p className="text-sm font-bold tracking-wide text-amber-300">{PROFILE.name}</p>
                    <p className="text-xs text-slate-300 font-medium">{PROFILE.department}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-300 mt-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{PROFILE.location} · {PROFILE.institution}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adjacent Quantitative Proof Card from CV */}
              <div className="mt-4 p-4 rounded-xl border border-white/10 bg-[#121522]/90 backdrop-blur-md shadow-lg">
                <div className="grid grid-cols-2 gap-3 text-left">
                  {PROFILE.stats.map((stat) => (
                    <div key={`${stat.label}-${stat.value}`} className="border-l border-amber-400/40 pl-3">
                      <p className="font-mono text-base font-bold text-white tabular-nums tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-[11px] font-semibold text-amber-400/90 leading-tight mt-0.5">
                        {stat.label}
                      </p>
                      <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
