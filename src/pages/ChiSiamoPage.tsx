import { motion } from "framer-motion";
import { SEOHead } from "../components/common/SEOHead";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MissionVisionSection } from "../components/common/MissionVisionSection";
import { ValueItem } from "../components/common/ValueItem";
import { Button } from "../components/ui/Button";
import { introText, values } from "../data/values";
import { getOrganizationSchema } from "../lib/structuredData";

export function ChiSiamoPage() {
  return (
    <>
      <SEOHead
        title="Chi siamo | DAB — Danza, Arte e Benessere"
        description="Scopri la storia, la mission e i valori di DAB: uno spazio a Seveso dedicato alla danza, al movimento e al benessere della persona."
        path="/chi-siamo"
        jsonLd={getOrganizationSchema()}
      />

      <section className="pt-32 pb-20 text-center sm:pt-40 sm:pb-24">
        <motion.div
          className="mx-auto max-w-2xl px-5 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-3 block font-sans text-sm font-semibold uppercase tracking-[0.14em] text-dab-terracotta">
            Chi siamo
          </span>
          <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] text-dab-brown">
            Danza, Arte e Benessere: tre parole, un unico spazio
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[1.05rem] leading-relaxed text-dab-text-muted">
            DAB nasce a Seveso come luogo di incontro tra movimento, espressione e cura della
            persona. Un progetto giovane, costruito con l'obiettivo di offrire un ambiente
            accogliente in cui ogni allievo possa trovare il proprio ritmo, imparare cose nuove
            e stare bene.
          </p>
        </motion.div>
      </section>

      <section className="bg-dab-background-light py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading eyebrow="Il significato" title="Danza · Arte · Benessere" align="center" className="mx-auto" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="font-display text-xl text-dab-terracotta">Danza</h3>
              <p className="mt-2 text-sm leading-relaxed text-dab-text-muted">
                Il linguaggio del corpo, per esprimersi e divertirsi ballando insieme.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-xl text-dab-terracotta">Arte</h3>
              <p className="mt-2 text-sm leading-relaxed text-dab-text-muted">
                Il movimento come forma di espressione personale e creatività.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-xl text-dab-terracotta">Benessere</h3>
              <p className="mt-2 text-sm leading-relaxed text-dab-text-muted">
                La cura di sé, del corpo e della mente, in un ambiente sereno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dab-background py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <MissionVisionSection />
        </div>
      </section>

      <section className="bg-dab-background-light py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading eyebrow="I nostri valori" title="Come ci prendiamo cura di te" align="center" className="mx-auto" />
          <div className="mt-12 flex flex-col gap-6">
            {values.map((value, index) => (
              <ValueItem key={value.id} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dab-background py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Il nostro approccio"
            title="Ogni percorso parte dall'ascolto"
            description={introText.body}
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/insegnanti">Conosci gli insegnanti</Button>
            <Button to="/contatti" variant="secondary">
              Contattaci
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
