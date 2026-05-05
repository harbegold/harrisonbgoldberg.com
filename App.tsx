import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILLS } from './constants';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import AIChat from './components/AIChat';
import ContactForm from './components/ContactForm';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? 'glass shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#about" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#1d1d1f] rounded-lg flex items-center justify-center font-semibold text-white text-xs">
              H
            </div>
            <span className="font-semibold tracking-tight text-[15px] hidden sm:block">
              Harrison B. Goldberg
            </span>
          </a>
          <div className="hidden md:flex gap-8 text-[13px] font-medium text-[#1d1d1f]/80">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="hover:text-[#007aff] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#1d1d1f]/70 hover:text-white hover:bg-[#0a66c2] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.78-1.75-1.73s.78-1.74 1.75-1.74 1.75.78 1.75 1.74c0 .95-.78 1.73-1.75 1.73zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z" />
              </svg>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[13px] font-medium px-4 py-2 rounded-full bg-[#1d1d1f] text-white hover:bg-[#007aff] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <section id="about" className="pt-32 sm:pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-3 space-y-8 fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007aff]/10 border border-[#007aff]/20">
              <div className="w-1.5 h-1.5 bg-[#007aff] rounded-full animate-pulse" />
              <span className="mono text-[#007aff] text-[10px] font-semibold tracking-widest uppercase">
                Available for Summer 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              <span className="apple-gradient">Hi, I'm Harrison.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#6e6e73] leading-relaxed max-w-xl">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#1d1d1f] text-white rounded-full font-medium text-sm hover:bg-[#007aff] transition-colors"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white border border-black/[0.1] text-[#1d1d1f] rounded-full font-medium text-sm hover:border-[#007aff]/40 hover:text-[#007aff] transition-all"
              >
                Get in touch
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="px-5 py-3 bg-white border border-black/[0.1] text-[#1d1d1f] rounded-full font-medium text-sm hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:text-white transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.78-1.75-1.73s.78-1.74 1.75-1.74 1.75.78 1.75 1.74c0 .95-.78 1.73-1.75 1.73zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-6 border-t border-black/[0.06]">
              <div className="flex flex-col gap-1">
                <span className="mono text-[9px] text-[#6e6e73] uppercase tracking-[0.2em]">Location</span>
                <span className="text-sm font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="mono text-[9px] text-[#6e6e73] uppercase tracking-[0.2em]">Studying</span>
                <span className="text-sm font-medium">{PERSONAL_INFO.education.degree}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="mono text-[9px] text-[#6e6e73] uppercase tracking-[0.2em]">Building</span>
                <span className="text-sm font-medium" title="Pending name change to Harbegold LLC">Fino LLC</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 fade-in-up [animation-delay:0.15s]">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#1d1d1f] shadow-2xl shadow-black/20">
              <img
                src={PERSONAL_INFO.cover}
                alt={`${PERSONAL_INFO.name} portrait`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="mono text-[10px] text-white/70 uppercase tracking-widest">
                  ASU · Class of 2029
                </span>
                <div className="w-2 h-2 bg-[#34c759] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-[#f5f5f7]/60 border-y border-black/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="mono text-[#007aff] text-xs font-semibold uppercase tracking-[0.3em]">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight apple-gradient">
              What I work with
            </h2>
            <p className="text-[#6e6e73] max-w-2xl mx-auto">
              A blend of mechanical engineering fundamentals, digital fabrication, and full-stack iOS — chosen for the projects I'm shipping right now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map(cat => (
              <div
                key={cat.name}
                className="feature-card bg-white border border-black/[0.06] rounded-2xl p-6 space-y-4"
              >
                <h3 className="mono text-xs font-semibold text-[#007aff] uppercase tracking-widest">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-sm text-[#1d1d1f] bg-[#f5f5f7] px-3 py-1 rounded-lg border border-black/[0.04]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="mono text-[#007aff] text-xs font-semibold uppercase tracking-[0.3em]">
              Selected Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight apple-gradient">
              Projects
            </h2>
            <p className="text-[#6e6e73] max-w-2xl mx-auto">
              From production iOS apps to robotic prosthetics and aerospace prototypes — what I've designed, built, and improved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-[#f5f5f7]/60 border-y border-black/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="mono text-[#007aff] text-xs font-semibold uppercase tracking-[0.3em]">
              The Path
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight apple-gradient">
              Experience
            </h2>
          </div>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="mono text-[#007aff] text-xs font-semibold uppercase tracking-[0.3em]">
                Get in touch
              </span>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight apple-gradient">
                Let's build something.
              </h2>
              <p className="text-[#6e6e73] leading-relaxed">
                Whether you need an intern for Summer 2026, a CAD / prototyping collaborator, or an iOS engineer who's actually shipped — let's talk.
              </p>
            </div>

            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center group-hover:bg-[#007aff] group-hover:border-[#007aff] transition-colors">
                  <svg className="w-5 h-5 text-[#1d1d1f] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="mono text-[10px] text-[#6e6e73] uppercase block tracking-widest">Email</span>
                  <span className="text-[15px] font-medium text-[#1d1d1f] group-hover:text-[#007aff] transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center group-hover:bg-[#007aff] group-hover:border-[#007aff] transition-colors">
                  <svg className="w-5 h-5 text-[#1d1d1f] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.78-1.75-1.73s.78-1.74 1.75-1.74 1.75.78 1.75 1.74c0 .95-.78 1.73-1.75 1.73zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z" />
                  </svg>
                </div>
                <div>
                  <span className="mono text-[10px] text-[#6e6e73] uppercase block tracking-widest">LinkedIn</span>
                  <span className="text-[15px] font-medium text-[#1d1d1f] group-hover:text-[#007aff] transition-colors">
                    /in/harrisonbgoldberg
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-black/[0.06] bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[#6e6e73]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#1d1d1f] rounded-md flex items-center justify-center font-semibold text-white text-[10px]">
              H
            </div>
            <span className="mono text-[11px] uppercase tracking-[0.15em]">
              Harrison B. Goldberg © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex gap-6 mono text-[11px] uppercase tracking-[0.15em]">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#007aff] transition-colors">Email</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#007aff] transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
