export interface Project {
  id: string;
  title: string;
  slug: string;
  featured: boolean;
  category: string;
  thumbnail: string;
  description?: string;
  year?: number;
  mobileThumbnail?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
    socialLinks: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  }
}