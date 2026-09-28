import { Clock } from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ContactStrip } from "../components/common/ContactStrip";
import { MapPreview } from "../components/common/MapPreview";
import { TrialFormCTA } from "../components/common/TrialFormCTA";
import { WhatsAppButton } from "../components/common/WhatsAppButton";
import { siteConfig } from "../data/siteConfig";
import { getLocalBusinessSchema } from "../lib/structuredData";

export function ContattiPage() {
  return (
    <>
      <SEOHead
        title="Contatti | DAB — Danza, Arte e Benessere a Seveso"
        description="Contatta DAB a Seveso: email, telefono, WhatsApp e indirizzo. Prenota una lezione di prova o chiedi informazioni sui corsi."
        path="/contatti"
        jsonLd={getLocalBusinessSchema()}
      />

      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Contatti"
            title="Parliamone insieme"
            description="Scrivici per informazioni sui corsi, per prenotare una lezione di prova o semplicemente per conoscerci meglio."
          />

          <div className="mt-14 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="flex flex-col gap-10">
              <ContactStrip />

              <div className="flex items-start gap-3 rounded-2xl border border-dab-border bg-dab-white p-5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-dab-terracotta" strokeWidth={1.75} />
                <div>
                  <p className="text-sm font-medium text-dab-brown">Orari di contatto</p>
                  <p className="mt-0.5 text-sm text-dab-text-muted">{siteConfig.contactHours}</p>
                </div>
              </div>

              <WhatsAppButton className="w-full justify-center sm:w-fit" />

              <MapPreview />

              <div className="rounded-2xl bg-dab-cream p-5 text-sm leading-relaxed text-dab-brown-soft">
                <p className="font-medium text-dab-brown">Come raggiungerci</p>
                <p className="mt-1">
                  DAB si trova in {siteConfig.address}, facilmente raggiungibile dal centro di
                  Seveso. Per indicazioni dettagliate usa il link a Google Maps qui sopra.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-dab-border bg-dab-white p-6 sm:p-10">
              <TrialFormCTA />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
