import React, { useEffect } from 'react';
import { PROFILE, EDUCATION, EXPERIENCE, LEADERSHIP_VOLUNTEERING, ALL_PUBLICATIONS, SHARED_TASKS, HONORS_AND_AWARDS, TALKS_BY_LOCATION } from '../data/portfolioData';
import { X, Download, Printer, Mail, MapPin, Globe, Phone, Linkedin, GraduationCap } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, onShowToast }) => {
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

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onShowToast("Downloaded plain text CV snapshot.");
    const element = document.createElement("a");
    const cvText = 
`HAWAU OLAMIDE TOYIN
Email: ${PROFILE.email} | Phone: ${PROFILE.phone} | Website: ${PROFILE.website}
LinkedIn: ${PROFILE.linkedin} | Google Scholar: Hawau Olamide Toyin

RESEARCH INTERESTS:
${PROFILE.researchInterests.join('; ')}

LANGUAGES:
${PROFILE.languages.map(l => `${l.language} (${l.proficiency})`).join(', ')}

LIST OF PUBLICATIONS (* - equal contribution):
${ALL_PUBLICATIONS.map(p => `• ${p.title}\n  ${p.authors.join(', ')}\n  ${p.venue} (${p.year})`).join('\n\n')}

SHARED TASKS:
${SHARED_TASKS.map(s => `• ${s.title}\n  ${s.authors.join(', ')}\n  ${s.venue} (${s.year})`).join('\n\n')}

PRESENTED & UPCOMING TALKS:
${TALKS_BY_LOCATION.map(g => `${g.institution} (${g.location}):\n` + g.talks.map(t => `  • ${t.title} [${t.date}]`).join('\n')).join('\n\n')}

EDUCATION:
${EDUCATION.map(e => `• ${e.institution}\n  ${e.degree} (${e.period})\n  ${e.details || ''}`).join('\n\n')}

EXPERIENCE:
${EXPERIENCE.map(exp => `• ${exp.role} - ${exp.institution} (${exp.location}, ${exp.period})\n  ${exp.bullets.join('\n  ')}`).join('\n\n')}

LEADERSHIP AND VOLUNTEERING:
${LEADERSHIP_VOLUNTEERING.map(l => `• ${l.role} - ${l.organization} (${l.period})`).join('\n')}

HONORS AND AWARDS:
${HONORS_AND_AWARDS.map(a => `• ${a.title} (${a.year}) - ${a.organization}`).join('\n')}`;

    const file = new Blob([cvText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Hawau_Olamide_Toyin_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0C0E17] shadow-2xl z-10 p-6 sm:p-10 space-y-8 text-slate-200">
        
        {/* Controls Toolbar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
              Curriculum Vitae
            </span>
            <span className="text-xs text-slate-400">· Official Academic Record</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg inline-flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Download Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex px-3 py-1.5 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 border border-white/10 transition-colors ml-2"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Header (from CV page 1) */}
        <div className="space-y-3">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {PROFILE.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono">{PROFILE.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{PROFILE.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <a href={PROFILE.website} target="_blank" rel="noreferrer" className="hover:underline">
                theehawau.github.io
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                toyinhawau
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Google Scholar</span>
            </div>
          </div>
        </div>

        {/* Research Interest (from CV page 1) */}
        <div className="space-y-2 border-t border-white/10 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Research Interest
          </h2>
          <p className="text-xs text-slate-300">
            {PROFILE.researchInterests.join('; ')}
          </p>
          <p className="text-xs text-slate-400">
            <strong className="text-slate-300">Languages: </strong>
            {PROFILE.languages.map(l => `${l.language} (${l.proficiency})`).join(', ')}
          </p>
        </div>

        {/* List of Publications (from CV page 1) */}
        <div className="space-y-4 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              List of Publications
            </h2>
            <span className="text-[11px] text-slate-400 italic">* - equal contribution</span>
          </div>
          <div className="space-y-4 text-xs">
            {ALL_PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-white">
                  <span className="text-sm font-bold text-slate-100">{pub.title}</span>
                  <span className="text-amber-400 font-mono text-xs">{pub.venue}</span>
                </div>
                {pub.award && (
                  <p className="text-[11px] font-bold text-amber-300">
                    ★ {pub.award}
                  </p>
                )}
                <p className="text-slate-400">
                  {pub.authors.map((a, i) => (
                    <span key={i} className={a.includes('Hawau') ? 'text-white font-semibold underline' : ''}>
                      {a}{i < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shared Tasks (from CV page 1/2) */}
        <div className="space-y-3 border-t border-white/10 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Shared Tasks
          </h2>
          <div className="space-y-3 text-xs">
            {SHARED_TASKS.map((st, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between font-semibold text-white">
                  <span>{st.title}</span>
                  <span className="text-amber-400 font-mono">{st.venue}</span>
                </div>
                <p className="text-slate-400">{st.authors.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Presented & Upcoming Talks */}
        <div className="space-y-3 border-t border-white/10 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Presented & Upcoming Talks
          </h2>
          <div className="space-y-3 text-xs">
            {TALKS_BY_LOCATION.map((loc) => (
              <div key={loc.id} className="space-y-1.5 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span className="text-amber-300">{loc.institution}</span>
                  <span className="text-slate-400 font-normal">{loc.location}</span>
                </div>
                <div className="space-y-1 pl-2 border-l border-amber-400/40">
                  {loc.talks.map((t, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-2">
                      <span className="text-slate-200">{t.title}</span>
                      <span className="font-mono text-amber-400 font-medium shrink-0 text-[11px]">
                        {t.isUpcoming ? `Upcoming (${t.date})` : t.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education (from CV page 2) */}
        <div className="space-y-4 border-t border-white/10 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Education
          </h2>
          <div className="space-y-3 text-xs">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between font-semibold text-white text-sm">
                  <span>{edu.institution}</span>
                  <span className="text-amber-400 font-mono text-xs">{edu.period}</span>
                </div>
                <p className="text-slate-300 font-medium">{edu.degree}</p>
                {edu.details && (
                  <p className="text-slate-400 italic">◦ {edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience (from CV page 2) */}
        <div className="space-y-4 border-t border-white/10 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Experience
          </h2>
          <div className="space-y-4 text-xs">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-semibold text-white text-sm">
                  <span>{exp.role}</span>
                  <span className="text-slate-400 text-xs">{exp.location}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="font-medium text-amber-300">{exp.institution}</span>
                  <span className="font-mono text-amber-400/90">{exp.period}</span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-slate-400 pt-0.5">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership and Volunteering (from CV page 2) */}
        <div className="space-y-3 border-t border-white/10 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Leadership and Volunteering
          </h2>
          <div className="space-y-2 text-xs">
            {LEADERSHIP_VOLUNTEERING.map((lead, idx) => (
              <div key={idx} className="flex justify-between items-baseline text-slate-300">
                <div>
                  <span className="font-semibold text-white">{lead.role}</span>
                  <span className="text-slate-400"> — {lead.organization}</span>
                </div>
                <span className="font-mono text-amber-400/90 text-xs shrink-0 ml-4">{lead.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Honors and Awards (from CV page 3) */}
        <div className="space-y-3 border-t border-white/10 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Honors and Awards
          </h2>
          <div className="space-y-2 text-xs">
            {HONORS_AND_AWARDS.map((award, idx) => (
              <div key={idx} className="flex justify-between items-baseline text-slate-300">
                <div>
                  <span className="font-semibold text-white">{award.title}</span>
                  <span className="text-slate-400">, {award.organization}</span>
                </div>
                <span className="font-mono text-amber-400/90 text-xs shrink-0 ml-4">{award.year}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
