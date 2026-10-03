import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { Github, GraduationCap, Globe, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenCV: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-white/10 bg-[#06070B] text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/5">
          <div>
            <span
              className="text-lg font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {PROFILE.name}
            </span>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              PhD Researcher in Natural Language Processing & Speech AI at MBZUAI. Visiting Scholar at ISTI-CNR.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#research" className="hover:text-amber-400 transition-colors">Research</a>
            <a href="#publications" className="hover:text-amber-400 transition-colors">Publications</a>
            <a href="#honors" className="hover:text-amber-400 transition-colors">Honors</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Journey</a>
            <button onClick={onOpenCV} className="hover:text-amber-400 transition-colors">CV</button>
            <button onClick={onOpenContact} className="hover:text-amber-400 transition-colors">Contact</button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Hawau Olamide Toyin. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE.scholar}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Scholar</span>
            </a>
            <a
              href={PROFILE.huggingface}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>Hugging Face</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
