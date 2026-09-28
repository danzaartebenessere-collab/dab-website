import { SEOHead } from "../components/common/SEOHead";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TeacherCard } from "../components/common/TeacherCard";
import { Button } from "../components/ui/Button";
import { teachers } from "../data/teachers";

export function InsegnantiPage() {
  return (
    <>
      <SEOHead
        title="Insegnanti | DAB — Danza, Arte e Benessere a Seveso"
        description="Conosci gli insegnanti di DAB a Seveso: passione, esperienza e attenzione per accompagnarti nel tuo percorso di movimento e benessere."
        path="/insegnanti"
      />

      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Le persone di DAB"
            title="Passione, esperienza e attenzione"
            description="Due professionisti della danza, con percorsi ed esperienze diverse, pronti ad accompagnarti nei corsi DAB."
          />

          <div className="mt-16 flex flex-col gap-20">
            {teachers.map((teacher, index) => (
              <div key={teacher.id} id={teacher.id} className="scroll-mt-28">
                <TeacherCard teacher={teacher} index={index} detailed />
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-[2rem] border border-dab-border bg-dab-background-light p-10 text-center">
            <h2 className="text-2xl text-dab-brown">Vuoi scoprire cosa insegniamo?</h2>
            <p className="mx-auto mt-3 max-w-md text-[0.98rem] leading-relaxed text-dab-text-muted">
              Dai un'occhiata a tutte le attività disponibili e trova il corso più adatto a te.
            </p>
            <Button to="/corsi" className="mt-6">
              Scopri i corsi
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
