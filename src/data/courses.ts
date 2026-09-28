import type { Course } from "../types";

// Catalogo corsi DAB.
// Testi e orari provvisori dove non ancora confermati: modifica liberamente
// questo file per aggiornare nome, descrizione, categoria, livello, orario e immagine.
// "category" è usato dai filtri nella pagina /corsi.

export const courseCategories = [
  "Tutti",
  "Tonificazione & Benessere",
  "Balli di coppia",
  "Bambini & Teen",
  "Su richiesta",
] as const;

export const courses: Course[] = [
  {
    id: "tonificazione",
    slug: "tonificazione",
    name: "Tonificazione",
    shortDescription:
      "Esercizi funzionali con pesi leggeri per tonificare i principali gruppi muscolari.",
    fullDescription:
      "Con l'ausilio di pesi leggeri proponiamo esercizi funzionali per i principali gruppi muscolari, per migliorare il tono ed aumentare la resistenza e la forza generale.",
    category: "Tonificazione & Benessere",
    audience: "Adulti",
    level: "Tutti i livelli",
    duration: "1 ora",
    schedule: "Lunedì 12:30 e 19:00 · Mercoledì 12:30 · Venerdì 12:30",
    featured: true,
  },
  {
    id: "risveglio-muscolare",
    slug: "risveglio-muscolare",
    name: "Risveglio muscolare",
    shortDescription:
      "Un'ora dolce per riattivare il tono muscolare, pensata per chi riparte da zero.",
    fullDescription:
      "Corso rivolto a chi non si approccia all'attività sportiva da molti anni. Proponiamo un'ora di esercizi di tonificazione volti a riattivare il tono muscolare e al miglioramento di tutti quei movimenti che ritroviamo nella vita quotidiana.",
    category: "Tonificazione & Benessere",
    audience: "Adulti",
    level: "Principianti",
    duration: "1 ora",
    schedule: "Mercoledì 9:30 · Venerdì 9:30",
    featured: true,
  },
  {
    id: "stretching-core",
    slug: "stretching-core",
    name: "Stretching & Core",
    shortDescription:
      "Mezz'ora di rinforzo addominale seguita da mezz'ora di stretching mirato.",
    fullDescription:
      "Corso suddiviso in due parti da mezz'ora ciascuna. Nella prima lavoriamo sul rinforzo e l'allenamento della fascia addominale; nella seconda, con esercizi di stretching mirati, andiamo a rilassare e allungare i principali gruppi muscolari.",
    category: "Tonificazione & Benessere",
    audience: "Adulti",
    level: "Tutti i livelli",
    duration: "1 ora (2 x 30 min)",
    schedule: "Lunedì 13:30 · Mercoledì 10:30 e 13:30 · Venerdì 10:30 e 13:30",
    featured: false,
  },
  {
    id: "zumba",
    slug: "zumba",
    name: "Zumba",
    shortDescription: "Ritmi latini, coreografie semplici e tanto divertimento in un'ora di ballo.",
    fullDescription:
      "Fatti travolgere dai ritmi latini in una lezione aerobica di ballo e divertimento: con coreografie semplici e intuitive andiamo a bruciare energia unendo esercizio e divertimento.",
    category: "Tonificazione & Benessere",
    audience: "Adulti",
    level: "Tutti i livelli",
    duration: "1 ora",
    schedule: "Lunedì 20:00",
    featured: true,
  },
  {
    id: "bachata-base",
    slug: "bachata-base",
    name: "Bachata base",
    shortDescription: "Il ballo di coppia caraibico, tra atmosfera intima e ritmo coinvolgente.",
    fullDescription:
      "Hai voglia di imparare a ballare? Ti insegniamo noi. La bachata è un genere musicale e un ballo di coppia caraibico originario della Repubblica Dominicana, nato intorno agli anni '60. Caratterizzato da un'atmosfera intima, fluida e passionale, si basa su una struttura ritmica semplice ma espressiva, che lascia ampio spazio all'improvvisazione e alla sintonia tra i partner.",
    category: "Balli di coppia",
    audience: "Adulti",
    level: "Principianti",
    duration: "1 ora",
    schedule: "Martedì 19:00",
    featured: true,
  },
  {
    id: "salsa-base",
    slug: "salsa-base",
    name: "Salsa primi passi",
    shortDescription: "Il punto di partenza ideale per chi non ha mai ballato salsa.",
    fullDescription:
      "Corso per chi non ha mai mosso un passo di danza: la salsa è uno dei balli di coppia più popolari al mondo, nato a Cuba intorno agli anni trenta e sviluppatosi come un mix di ritmi latini e afro-caraibici.",
    category: "Balli di coppia",
    audience: "Adulti",
    level: "Principianti",
    duration: "1 ora",
    schedule: "Lunedì 21:00",
    featured: false,
  },
  {
    id: "salsa-base-2",
    slug: "salsa-base-2",
    name: "Salsa base 2",
    shortDescription: "Per chi ha già iniziato e vuole affinare stile e tecnica.",
    fullDescription:
      "Vieni a migliorare il tuo stile e il tuo bagaglio di conoscenze con i nostri maestri. Se hai già iniziato a ballare salsa e vuoi migliorarti, questo è il corso che fa per te.",
    category: "Balli di coppia",
    audience: "Adulti",
    level: "Intermedio",
    duration: "1 ora",
    schedule: "Martedì 20:00",
    featured: false,
  },
  {
    id: "danza-primi-passi",
    slug: "danza-primi-passi",
    name: "Danza primi passi",
    shortDescription: "Il primo approccio alla danza per i più piccoli, tra gioco e movimento.",
    fullDescription:
      "Un percorso pensato per i più piccoli, per muovere i primi passi nel mondo della danza con giochi, musica e movimento. Descrizione completa in arrivo.",
    category: "Bambini & Teen",
    audience: "Bambini",
    level: "Principianti",
    duration: "1 ora",
    schedule: "Martedì 17:00 · Giovedì 17:00",
    featured: true,
  },
  {
    id: "reggaeton-teen",
    slug: "reggaeton-teen",
    name: "Reggaeton Teen",
    shortDescription: "Energia, ritmo e coreografie pensate per ragazze e ragazzi.",
    fullDescription:
      "Un corso dedicato ai più giovani per scoprire il reggaeton attraverso coreografie energiche e divertenti, in un ambiente accogliente e attento. Descrizione completa in arrivo.",
    category: "Bambini & Teen",
    audience: "Ragazzi",
    level: "Tutti i livelli",
    duration: "1 ora",
    schedule: "Martedì 18:00 · Giovedì 18:00",
    featured: false,
  },
  {
    id: "lezioni-private",
    slug: "lezioni-private",
    name: "Lezioni private",
    shortDescription: "Un percorso su misura, individuale o di coppia, con il tuo insegnante.",
    fullDescription:
      "Per chi desidera un percorso personalizzato, individuale o in coppia, costruito insieme all'insegnante in base ai propri obiettivi e tempi. Contattaci per costruire il tuo programma.",
    category: "Su richiesta",
    audience: "Adulti",
    level: "Tutti i livelli",
    schedule: "Su prenotazione",
    featured: false,
  },
  {
    id: "eventi-attivita-speciali",
    slug: "eventi-attivita-speciali",
    name: "Eventi e attività speciali",
    shortDescription: "Workshop, serate a tema ed eventi che animano la vita di DAB.",
    fullDescription:
      "Durante l'anno organizziamo workshop, serate a tema ed eventi speciali per vivere DAB anche fuori dagli orari dei corsi regolari. Il calendario verrà pubblicato progressivamente.",
    category: "Su richiesta",
    audience: "Tutti",
    level: "Tutti i livelli",
    schedule: "Calendario in aggiornamento",
    featured: false,
  },
];
