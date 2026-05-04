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
