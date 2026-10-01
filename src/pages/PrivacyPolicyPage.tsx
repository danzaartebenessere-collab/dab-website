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

      <section className="pt-32 pb-24 sm:pt-40 lg:pt-52">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="text-[clamp(1.9rem,4vw,2.75rem)] text-dab-brown">Privacy Policy</h1>

          <p className="mt-6 text-sm text-dab-text-muted">Ultimo aggiornamento: ottobre 2026</p>

          <div className="prose-content mt-8 flex flex-col gap-8 text-[0.98rem] leading-relaxed text-dab-brown-soft">
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
                Questo sito non raccoglie dati personali tramite moduli propri. Per prenotare una
                lezione di prova, il modulo "Vai al modulo di prenotazione" rimanda a un Google
                Form esterno: i dati inseriti lì (nome, contatti, corso di interesse) sono raccolti
                e trattati direttamente da Google LLC secondo la sua informativa privacy, e sono
                consultati da {siteConfig.fullName} al solo scopo di gestire la richiesta. Se scrivi
                via email, telefono o WhatsApp, trattiamo i dati che ci fornisci volontariamente in
                quel messaggio (es. nome, contatti, richiesta).
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Finalità del trattamento</h2>
              <p>
                I dati raccolti tramite il Google Form o i canali di contatto diretto vengono
                utilizzati esclusivamente per rispondere alle richieste di informazioni e gestire
                prenotazioni di lezioni di prova o iscrizioni ai corsi.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Base giuridica e conservazione</h2>
              <p>
                Il trattamento si basa sul consenso dell'interessato e sull'esecuzione di misure
                precontrattuali richieste dallo stesso. I dati sono conservati per il tempo
                necessario a evadere la richiesta e, in caso di iscrizione ai corsi, per la durata
                del rapporto e nei termini previsti dalla legge. Per i dati raccolti tramite Google
                Form si applicano anche i termini di conservazione della piattaforma Google.
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
