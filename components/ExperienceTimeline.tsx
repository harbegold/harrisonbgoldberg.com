import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      {EXPERIENCES.map((exp, idx) => (
        <div key={idx} className="relative pl-8 border-l border-black/[0.08] group">
          <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-[#007aff] rounded-full transition-all group-hover:scale-150 group-hover:shadow-[0_0_0_6px_rgba(0,122,255,0.15)]" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] tracking-tight">{exp.role}</h3>
              <p className="text-[#007aff] font-medium text-sm">{exp.company}</p>
            </div>
            <div className="text-right">
              <span className="mono text-xs text-[#6e6e73] block">{exp.period}</span>
              <span className="mono text-[10px] text-[#6e6e73]/70 uppercase tracking-widest">{exp.location}</span>
            </div>
          </div>

          <ul className="space-y-2">
            {exp.description.map((item, i) => (
              <li key={i} className="text-[#1d1d1f]/75 text-sm flex gap-3 leading-relaxed">
                <span className="text-[#007aff] mt-1 flex-shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
