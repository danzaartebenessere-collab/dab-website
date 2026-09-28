import { AlertTriangle } from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";
import { siteConfig } from "../data/siteConfig";

export function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | DAB — Danza, Arte e Benessere"
        description="Informativa sulla privacy di DAB — Danza, Arte e Benessere."
        path="/privacy-policy"
        noindex
      />

      <section className="pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="text-[clamp(1.9rem,4vw,2.75rem)] text-dab-brown">Privacy Policy</h1>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dab-terracotta/30 bg-dab-terracotta-light/40 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-dab-terracotta" strokeWidth={1.75} />
            <p className="text-sm leading-relaxed text-dab-brown">
              Questo testo è una bozza informativa generica e non costituisce consulenza legale.
              Prima della pubblicazione definitiva del sito, fai verificare questo documento da un
              consulente privacy/legale in conformità al GDPR e alla normativa italiana applicabile.
            </p>
          </div>

          <div className="prose-content mt-10 flex flex-col gap-8 text-[0.98rem] leading-relaxed text-dab-brown-soft">
            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento dei dati raccolti tramite questo sito è {siteConfig.fullName},
                con sede in {siteConfig.address}, contattabile all'indirizzo email{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline hover:text-dab-terracotta">
                  {siteConfig.email}
                </a>{" "}
                o al numero {siteConfig.phone}.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Dati raccolti</h2>
              <p>
                Attraverso il modulo di contatto e prenotazione raccogliamo i dati che l'utente
                fornisce volontariamente: nome, cognome, email, telefono, corso di interesse,
                fascia oraria preferita ed eventuale messaggio.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Finalità del trattamento</h2>
              <p>
                I dati vengono utilizzati per rispondere alle richieste di informazioni, gestire
                prenotazioni di lezioni di prova e, solo previo consenso facoltativo, per inviare
                comunicazioni relative a corsi ed eventi DAB.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Base giuridica e conservazione</h2>
              <p>
                Il trattamento si basa sul consenso dell'interessato e sull'esecuzione di misure
                precontrattuali richieste dallo stesso. I dati sono conservati per il tempo
                necessario a evadere la richiesta e, in caso di iscrizione ai corsi, per la durata
                del rapporto e nei termini previsti dalla legge.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Diritti dell'interessato</h2>
              <p>
                In qualsiasi momento è possibile richiedere accesso, rettifica, cancellazione,
                limitazione del trattamento o revoca del consenso, scrivendo a{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline hover:text-dab-terracotta">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
