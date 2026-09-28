export type Course = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  audience?: string;
  level?: string;
  duration?: string;
  schedule?: string;
  instructor?: string;
  image?: string;
  featured?: boolean;
};

export type Teacher = {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio?: string;
  approach?: string;
  specializations: string[];
  courses: string[];
  image?: string;
  instagramUrl?: string;
};

export type ScheduleItem = {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  course: string;
  instructor?: string;
  audience?: string;
  location?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Value = {
  id: string;
  title: string;
  description: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: "instagram" | "whatsapp" | "email" | "phone";
};
