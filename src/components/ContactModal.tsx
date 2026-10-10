import React, { useState, useEffect } from 'react';
import { PROFILE } from '../data/portfolioData';
import { X, Mail, Copy, Check, Github, GraduationCap, Send, Phone, Linkedin, Globe } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Research Collaboration Inquiry');
  const [userNote, setUserNote] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    onShowToast(`Copied ${PROFILE.email} to clipboard!`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(userNote || 'Hello Hawau,\n\nI came across your speech and NLP research...')}`;
    window.location.href = mailto;
    onClose();
  };

  const subjectOptions = [
    'Research Collaboration Inquiry',
    'AI for Business Brainstorming / Executive Training',
    'Speech Recognition / Atypical Speech Research',
    'Speaking or Seminar Invitation',
    'Academic Question or Paper Inquiry',
    'General Communication'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-y-auto rounded-2xl border border-white/15 bg-[#0E111D] shadow-2xl z-10 p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Direct Academic Contact
            </p>
            <h2
              className="text-2xl font-extrabold text-white mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get in Touch
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 border border-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Primary Contact Details (from CV) */}
        <div className="p-4 rounded-xl border border-white/10 bg-[#141828] space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="truncate">
                <p className="text-[10px] text-slate-400 uppercase font-semibold">Institutional Email</p>
                <p className="text-xs sm:text-sm font-mono text-white truncate">{PROFILE.email}</p>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold shrink-0 inline-flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 pt-2 border-t border-white/5">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-slate-400">{PROFILE.phone}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">{PROFILE.location}</span>
          </div>
        </div>

        {/* Quick Message Form */}
        <form onSubmit={handleSendEmail} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#141828] border border-white/10 text-slate-200 focus:outline-none focus:border-amber-400/60"
            >
              {subjectOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#0E111D] text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300">Message Note</label>
            <textarea
              rows={3}
              placeholder="Brief note about your research inquiry, paper discussion, or collaboration proposal..."
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#141828] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open Email Client</span>
          </button>
        </form>

        {/* Professional Profiles from CV */}
        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <a
            href={PROFILE.scholar}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>Google Scholar</span>
          </a>
          <span aria-hidden="true" className="text-white/20">·</span>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span aria-hidden="true" className="text-white/20">·</span>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </div>
  );
};
