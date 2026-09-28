import type { ScheduleItem } from "../types";

// Orario settimanale DAB.
// Fonte: locandina orari corsi. Aggiorna qui per riflettere le modifiche
// su tutto il sito (sezione Homepage e pagina /orari).
// L'ordine dei giorni per la vista settimanale è definito in weekDays.

export const weekDays = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"] as const;

export const scheduleItems: ScheduleItem[] = [
  // Lunedì
  { id: "lun-1", day: "Lunedì", startTime: "12:30", endTime: "13:30", course: "Tonificazione" },
  { id: "lun-2", day: "Lunedì", startTime: "13:30", endTime: "14:00", course: "Stretching & Core" },
  { id: "lun-3", day: "Lunedì", startTime: "19:00", endTime: "20:00", course: "Tonificazione" },
  { id: "lun-4", day: "Lunedì", startTime: "20:00", endTime: "21:00", course: "Zumba" },
  { id: "lun-5", day: "Lunedì", startTime: "21:00", endTime: "22:00", course: "Salsa Base" },

  // Martedì
  { id: "mar-1", day: "Martedì", startTime: "17:00", endTime: "18:00", course: "Danza Primi Passi", audience: "Bambini" },
  { id: "mar-2", day: "Martedì", startTime: "18:00", endTime: "19:00", course: "Reggaeton Teen", audience: "Ragazzi" },
  { id: "mar-3", day: "Martedì", startTime: "19:00", endTime: "20:00", course: "Bachata Base" },
  { id: "mar-4", day: "Martedì", startTime: "20:00", endTime: "21:00", course: "Salsa Base 2" },

  // Mercoledì
  { id: "mer-1", day: "Mercoledì", startTime: "9:30", endTime: "10:30", course: "Risveglio muscolare" },
  { id: "mer-2", day: "Mercoledì", startTime: "10:30", endTime: "11:00", course: "Stretching & Core" },
  { id: "mer-3", day: "Mercoledì", startTime: "12:30", endTime: "13:30", course: "Tonificazione" },
  { id: "mer-4", day: "Mercoledì", startTime: "13:30", endTime: "14:00", course: "Stretching & Core" },

  // Giovedì
  { id: "gio-1", day: "Giovedì", startTime: "17:00", endTime: "18:00", course: "Danza Primi Passi", audience: "Bambini" },
  { id: "gio-2", day: "Giovedì", startTime: "18:00", endTime: "19:00", course: "Reggaeton Teen", audience: "Ragazzi" },

  // Venerdì
  { id: "ven-1", day: "Venerdì", startTime: "9:30", endTime: "10:30", course: "Risveglio muscolare" },
  { id: "ven-2", day: "Venerdì", startTime: "10:30", endTime: "11:00", course: "Stretching & Core" },
  { id: "ven-3", day: "Venerdì", startTime: "12:30", endTime: "13:30", course: "Tonificazione" },
  { id: "ven-4", day: "Venerdì", startTime: "13:30", endTime: "14:00", course: "Stretching & Core" },
];
