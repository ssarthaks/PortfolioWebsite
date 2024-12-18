export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  year: string;
}