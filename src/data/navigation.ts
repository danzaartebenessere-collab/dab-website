import type { NavItem } from "../types";

// Voci del menu principale (header + mobile menu).
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Corsi", href: "/corsi" },
  { label: "Orari", href: "/orari" },
  { label: "Insegnanti", href: "/insegnanti" },
  { label: "Contatti", href: "/contatti" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
