import { SectionHeading } from "../components/ui/SectionHeading";
import { TrialFormCTA } from "../components/common/TrialFormCTA";
import { WhatsAppButton } from "../components/common/WhatsAppButton";

export function BookingSection() {
  return (
    <section className="bg-dab-background py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Prenota"
            title="Il primo passo verso il tuo benessere"
            description="Raccontaci quale attività ti interessa. Ti ricontatteremo per aiutarti a scegliere il percorso più adatto."
          />
          <div className="mt-8">
            <WhatsAppButton />
          </div>
        </div>

        <div className="rounded-[2rem] border border-dab-border bg-dab-white p-6 sm:p-10">
          <TrialFormCTA />
        </div>
      </div>
    </section>
  );
}
