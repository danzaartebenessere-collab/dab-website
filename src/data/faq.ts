import type { FaqItem } from "../types";

// Domande frequenti mostrate nella sezione FAQ della homepage.
export const faqItems: FaqItem[] = [
  {
    id: "lezione-prova",
    question: "È possibile fare una lezione di prova?",
    answer:
      "Sì, puoi prenotare una lezione di prova compilando il modulo di contatto o scrivendoci su WhatsApp: ti aiuteremo a scegliere il corso più adatto a te.",
  },
  {
    id: "iscrizione",
    question: "Come posso iscrivermi a un corso?",
    answer:
      "Puoi scriverci via email, telefono o WhatsApp, oppure passare direttamente in sede: ti guideremo passo per passo nell'iscrizione.",
  },
  {
    id: "principianti",
    question: "I corsi sono adatti anche ai principianti?",
    answer:
      "Assolutamente sì. Molti dei nostri corsi sono pensati proprio per chi si avvicina per la prima volta al movimento o alla danza.",
  },
  {
    id: "dove-siamo",
    question: "Dove si trova DAB?",
    answer: "Ci trovi in Via Trento e Trieste 47, a Seveso (MB).",
  },
  {
    id: "orari",
    question: "Come posso conoscere gli orari?",
    answer:
      "Trovi l'orario completo nella pagina Orari del sito. Gli orari possono essere soggetti a variazioni: contattaci per una conferma aggiornata.",
  },
  {
    id: "lezioni-private",
    question: "Sono disponibili lezioni private?",
    answer:
      "Sì, organizziamo lezioni private individuali o di coppia su richiesta: scrivici per costruire insieme il percorso più adatto a te.",
  },
];
