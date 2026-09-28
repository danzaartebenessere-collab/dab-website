import type { Teacher } from "../types";
import lucaImage from "../assets/images/teachers/luca-giussani.jpg";
import caterinaImage from "../assets/images/teachers/caterina-manco.jpg";

// Insegnanti DAB.

export const teachers: Teacher[] = [
  {
    id: "luca-giussani",
    name: "Luca Giussani",
    role: "Insegnante DAB",
    shortBio:
      "Ballerino, insegnante e coreografo: dal 2012 insegna danze caraibiche unendo tecnica, movimento ed energia.",
    fullBio:
      "Luca Giussani si avvicina al mondo della danza nel 2006, dando inizio a un percorso di formazione e crescita che lo porta a studiare e perfezionarsi sia in Italia che a New York. Laureato in Scienze Motorie, dal 2012 insegna danze caraibiche e negli anni sviluppa la propria esperienza come ballerino, insegnante e coreografo, affiancando alla danza anche il mondo del fitness e del benessere fisico. Nelle sue lezioni unisce tecnica, movimento ed energia, mettendo le proprie competenze al servizio di percorsi pensati per migliorare forma fisica, mobilità e benessere, sempre nel rispetto delle capacità e degli obiettivi di ogni persona.",
    approach: "",
    specializations: [],
    courses: [],
    image: lucaImage,
  },
  {
    id: "caterina-manco",
    name: "Caterina Manco",
    role: "Insegnante DAB",
    shortBio:
      "Danzatrice della Saoco Dance Company di Julio Rojas, porta in ogni lezione energia, passione e amore per la danza.",
    fullBio:
      "Caterina Manco si avvicina al mondo della danza a soli 7 anni, trasformando fin da subito una grande passione in un percorso di crescita e formazione continua. Nel corso degli anni partecipa a numerose competizioni ed esperienze che la portano a esibirsi anche su palchi internazionali. Oggi fa parte della Saoco Dance Company di Julio Rojas, continuando a perfezionare il proprio stile e la propria tecnica. Nelle sue lezioni ama trasmettere non solo preparazione e disciplina, ma soprattutto l'energia, la passione e l'amore per la danza che da sempre accompagnano il suo percorso.",
    approach: "",
    specializations: [],
    courses: [],
    image: caterinaImage,
  },
];
