import type { Value } from "../types";

// Valori DAB mostrati nella sezione "Introduzione" della homepage e in Chi siamo.
export const values: Value[] = [
  {
    id: "cura",
    title: "Cura",
    description:
      "Ogni persona viene accolta e accompagnata con attenzione, ascolto e professionalità.",
  },
  {
    id: "movimento",
    title: "Movimento",
    description:
      "Il movimento diventa uno strumento per ritrovare energia, equilibrio e consapevolezza.",
  },
  {
    id: "condivisione",
    title: "Condivisione",
    description:
      "DAB è uno spazio in cui creare relazioni, sentirsi parte di un gruppo e vivere nuove esperienze.",
  },
];

// Mission e vision, usate nella sezione dedicata della homepage e in Chi siamo.
export const missionVision = {
  mission:
    "Promuovere il benessere fisico ed emotivo attraverso il movimento, la danza e attività capaci di creare energia, consapevolezza e relazione.",
  vision:
    "Diventare un punto di riferimento accogliente e professionale, in cui ogni persona possa trovare il proprio modo di muoversi, esprimersi e stare bene.",
};

// Testo introduttivo DAB, riutilizzato in homepage e Chi siamo.
export const introText = {
  eyebrow: "Il nostro spazio",
  title: "Un luogo in cui sentirsi bene",
  body: "DAB nasce per offrire un luogo accogliente in cui movimento, espressione e benessere possano incontrarsi. Ogni attività è pensata per valorizzare la persona, rispettarne i tempi e creare un'esperienza autentica e coinvolgente.",
};
