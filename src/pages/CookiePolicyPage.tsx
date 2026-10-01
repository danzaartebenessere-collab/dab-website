import { AlertTriangle } from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";
import { siteConfig } from "../data/siteConfig";

export function CookiePolicyPage() {
  return (
    <>
      <SEOHead
        title="Cookie Policy | DAB — Danza, Arte e Benessere"
        description="Informativa sui cookie utilizzati dal sito DAB — Danza, Arte e Benessere."
        path="/cookie-policy"
        noindex
      />

      <section className="pt-32 pb-24 sm:pt-40 lg:pt-52">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="text-[clamp(1.9rem,4vw,2.75rem)] text-dab-brown">Cookie Policy</h1>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dab-terracotta/30 bg-dab-terracotta-light/40 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-dab-terracotta" strokeWidth={1.75} />
            <p className="text-sm leading-relaxed text-dab-brown">
              Questo testo è una bozza informativa generica e non costituisce consulenza legale.
              Prima della pubblicazione definitiva del sito, fai verificare questo documento da un
              consulente privacy/legale in conformità al GDPR e alla normativa italiana applicabile.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-8 text-[0.98rem] leading-relaxed text-dab-brown-soft">
            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo
                dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla
                visita successiva.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Cookie tecnici</h2>
              <p>
                Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento di base
                (ad esempio per ricordare la preferenza espressa sul banner cookie). Questi cookie
                non richiedono consenso e vengono installati automaticamente.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Cookie non essenziali</h2>
              <p>
                Eventuali cookie di analisi o profilazione verranno installati solo previo
                consenso esplicito, esprimibile tramite il banner cookie mostrato alla prima
                visita. Nessun tracciamento è attivo prima di tale consenso.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-display text-xl text-dab-brown">Gestione delle preferenze</h2>
              <p>
                È possibile modificare la propria preferenza in qualsiasi momento cancellando i
                dati di navigazione del browser, oppure contattandoci a{" "}
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
