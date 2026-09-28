import { Info } from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ScheduleList } from "../components/common/ScheduleList";
import { Button } from "../components/ui/Button";

export function OrariPage() {
  return (
    <>
      <SEOHead
        title="Orari corsi | DAB — Danza, Arte e Benessere a Seveso"
        description="Consulta l'orario settimanale dei corsi DAB a Seveso: tonificazione, stretching, zumba, danza e balli di coppia."
        path="/orari"
      />

      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Orario settimanale"
            title="Quando ci trovi in sala"
            description="Consulta l'orario dei corsi organizzato per giorno. Per prenotare una lezione di prova, scrivici o passa a trovarci."
          />

          <div className="mt-12">
            <ScheduleList />
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-dab-border bg-dab-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="inline-flex items-start gap-2.5 text-sm text-dab-text-muted">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-dab-terracotta" strokeWidth={1.75} />
              Gli orari possono essere soggetti a variazioni. Contattaci per ricevere conferma e
              disponibilità.
            </p>
            <Button to="/contatti" size="sm" variant="secondary" className="shrink-0">
              Contattaci
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
