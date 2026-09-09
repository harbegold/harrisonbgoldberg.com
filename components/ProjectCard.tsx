import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!showModal) return;
    dialogRef.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [showModal]);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="feature-card group text-left bg-white border border-black/[0.08] rounded-2xl p-8 flex flex-col h-full hover:border-black/20 transition-all"
      >
        {project.cover && (
          <img src={project.cover.src} alt={project.cover.alt} loading="lazy" width={720} height={1280}
            className="w-full h-56 object-cover object-[center_36%] rounded-xl mb-6 bg-[#f5f5f7]" />
        )}
        <div className="flex items-start justify-between mb-6">
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-[#6e6e73]">
            {project.date}
          </span>
          {project.status && (
            <span className="mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[#007aff]/10 text-[#007aff]">
              {project.status}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-[#6e6e73] mb-6 font-medium">{project.subtitle}</p>

        <p className="text-[15px] text-[#1d1d1f]/80 leading-relaxed mb-8 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="mono text-[10px] px-2.5 py-1 rounded-md bg-[#f5f5f7] text-[#6e6e73] border border-black/[0.06]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="mono text-[10px] px-2.5 py-1 text-[#6e6e73]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-black/[0.06] flex items-center justify-between text-sm">
          <span className="font-medium text-[#1d1d1f] group-hover:text-[#007aff] transition-colors">
            Read more
          </span>
          <svg className="w-4 h-4 text-[#6e6e73] group-hover:text-[#007aff] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </button>

      {showModal && (
          <dialog
            ref={dialogRef}
            onCancel={() => setShowModal(false)}
            onClick={event => { if (event.target === event.currentTarget) setShowModal(false); }}
            aria-modal="true"
            aria-labelledby={`project-${project.id}-title`}
            className="fixed m-auto bg-white w-[calc(100%-2rem)] max-w-4xl max-h-[90vh] rounded-3xl p-0 overflow-hidden flex flex-col shadow-2xl border border-black/[0.08] backdrop:bg-black/40 backdrop:backdrop-blur-sm"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-[#1d1d1f] hover:bg-black/10 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex-1 overflow-y-auto p-6 pt-16 sm:p-14 space-y-8">
              <div className="space-y-3">
                <span className="mono text-[10px] uppercase tracking-[0.2em] text-[#6e6e73]">
                  {project.date}
                </span>
                <h2 id={`project-${project.id}-title`} className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
                  {project.title}
                </h2>
                <p className="text-lg text-[#6e6e73]">{project.subtitle}</p>
              </div>

              <div className="space-y-3">
                <h4 className="mono text-[10px] uppercase tracking-[0.2em] text-[#6e6e73] border-b border-black/[0.08] pb-2">
                  Overview
                </h4>
                <p className="text-[15px] leading-relaxed text-[#1d1d1f]/85">
                  {project.longDescription}
                </p>
              </div>

              {project.update && (
                <section className="rounded-2xl bg-[#f5f5f7] p-5 sm:p-7 space-y-4" aria-label="Latest project update">
                  <h3 className="mono text-xs uppercase tracking-wider text-[#007aff]">Latest update · {project.update.date}</h3>
                  <p className="text-lg font-medium text-[#1d1d1f]">{project.update.summary}</p>
                  <ul className="list-disc pl-5 space-y-3 text-sm leading-relaxed text-[#1d1d1f]/80">
                    {project.update.milestones.map(milestone => <li key={milestone}>{milestone}</li>)}
                  </ul>
                  <p className="text-sm leading-relaxed text-[#1d1d1f]/80"><strong>Next:</strong> {project.update.next}</p>
                </section>
              )}

              {project.media && (
                <section aria-label="Project gallery" className="space-y-6">
                  <h3 className="text-2xl font-semibold tracking-tight">From the workbench</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.media.map((media, index) => (
                      <figure key={media.src} className={media.type === 'video' || index > 4 ? 'sm:col-span-2' : ''}>
                        <div className="rounded-xl overflow-hidden border border-black/[0.08] bg-[#f5f5f7]">
                          {media.type === 'video' ? (
                            <video controls muted playsInline preload="none" poster={media.poster} aria-label={media.alt}
                              className="w-full max-h-[65vh] bg-[#16191d]">
                              <source src={media.src} type="video/mp4" />
                              Your browser cannot play this video. <a href={media.src}>Download the silent video</a>.
                            </video>
                          ) : (
                            <a href={media.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${media.alt}`}>
                              <img src={media.src} alt={media.alt} loading="lazy" decoding="async"
                                className="w-full max-h-[65vh] object-contain" />
                            </a>
                          )}
                        </div>
                        <figcaption className="text-xs leading-relaxed text-[#6e6e73] mt-3">{media.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}

              <div className="space-y-3">
                <h4 className="mono text-[10px] uppercase tracking-[0.2em] text-[#6e6e73] border-b border-black/[0.08] pb-2">
                  Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="mono text-xs bg-[#007aff]/8 border border-[#007aff]/20 text-[#007aff] px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full font-medium text-sm hover:bg-[#007aff] transition-colors"
                >
                  Visit project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </dialog>
      )}
    </>
  );
};

export default ProjectCard;
