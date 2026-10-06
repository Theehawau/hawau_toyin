/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PROFILE } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchFocus } from './components/ResearchFocus';
import { PublicationsSection } from './components/PublicationsSection';
import { PresentedTalksSection } from './components/PresentedTalksSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CVModal } from './components/CVModal';
import { ContactModal } from './components/ContactModal';
import { Toast } from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('portfolio_theme') as 'dark' | 'light') || 'dark';
  });
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [publicationFilter, setPublicationFilter] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleSelectResearchTopic = (topicId: string) => {
    setPublicationFilter(topicId);

    const pubSection = document.getElementById('publications');
    if (pubSection) {
      pubSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 selection:bg-amber-400 selection:text-black transition-colors duration-200">
      {/* Navigation Top Bar Contract */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCV={() => setCvModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Split Hero with Editorial Typographic Impact and Genuine Portrait */}
        <Hero
          onOpenCV={() => setCvModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
          onShowToast={showToast}
        />

        {/* 4 Structured Research Interests: AI for stuttered speech, Efficient Multilingual NLP, Data Curation, Speech Rec & Gen */}
        <ResearchFocus onSelectTopic={handleSelectResearchTopic} />

        {/* Full List of Publications with Interspeech 2026, Best Paper Award, StutterBank link, and Abstracts */}
        <PublicationsSection
          onShowToast={showToast}
          selectedCategoryFilter={publicationFilter}
        />

        {/* Presented Talks Section: ArTST and STTATTS at ISTI-CNR and CUHK-SZ */}
        <PresentedTalksSection />

        {/* Honors and Awards (including Speech Pathology Best Paper Award at Interspeech 2026) */}
        <AchievementsSection />

        {/* Academic Trajectory: Education, Experience & Leadership */}
        <ExperienceTimeline />
      </main>

      {/* Footer */}
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
                PhD in Natural Language Processing · Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)
              </p>
              <p className="text-xs text-amber-400/90 font-mono mt-0.5">
                {PROFILE.email} · {PROFILE.phone}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
              <a href="#research" className="hover:text-amber-400 transition-colors">Research</a>
              <a href="#publications" className="hover:text-amber-400 transition-colors">Publications</a>
              <a href="#talks" className="hover:text-amber-400 transition-colors">Talks</a>
              <a
                href={PROFILE.stutterbankUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors text-amber-300"
              >
                StutterBank Project ↗
              </a>
              <a href="#honors" className="hover:text-amber-400 transition-colors">Honors</a>
              <a href="#experience" className="hover:text-amber-400 transition-colors">Journey</a>
              <button onClick={() => setCvModalOpen(true)} className="hover:text-amber-400 transition-colors">CV</button>
              <button onClick={() => setContactModalOpen(true)} className="hover:text-amber-400 transition-colors">Contact</button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href={PROFILE.stutterbankUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-300 transition-colors"
              >
                StutterBank
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={PROFILE.scholar}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-300 transition-colors"
              >
                Google Scholar
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-300 transition-colors"
              >
                GitHub (@Theehawau)
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-300 transition-colors"
              >
                LinkedIn (@toyinhawau)
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        onShowToast={showToast}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
