export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  link?: string;
  date: string;
  status?: string;
  cover?: { src: string; alt: string };
  update?: { date: string; summary: string; milestones: string[]; next: string };
  media?: { type: 'image' | 'video'; src: string; poster?: string; alt: string; caption: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  location: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
