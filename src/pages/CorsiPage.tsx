import { useMemo, useState } from "react";
import { SEOHead } from "../components/common/SEOHead";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CourseCard } from "../components/common/CourseCard";
import { Button } from "../components/ui/Button";
import { WhatsAppButton } from "../components/common/WhatsAppButton";
import { courses, courseCategories } from "../data/courses";
import { cn } from "../lib/utils";

export function CorsiPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tutti");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "Tutti") return courses;
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEOHead
        title="Corsi | DAB — Danza, Arte e Benessere a Seveso"
        description="Scopri tutti i corsi DAB a Seveso: tonificazione, danza, balli di coppia, attività per bambini e ragazzi. Trova il corso più adatto a te."
        path="/corsi"
      />

      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Le nostre attività"
            title="Trova il tuo movimento"
            description="Attività diverse, unite dallo stesso obiettivo: aiutarti a stare bene, divertirti e dedicare tempo a te. Filtra per categoria per trovare il corso più adatto."
          />

          <div
            role="group"
            aria-label="Filtra i corsi per categoria"
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {courseCategories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 font-sans text-sm font-medium transition-colors duration-300",
                  activeCategory === category
                    ? "border-dab-terracotta bg-dab-terracotta text-dab-white"
                    : "border-dab-border bg-dab-white text-dab-brown hover:border-dab-terracotta hover:text-dab-terracotta"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <p className="mt-12 text-center text-dab-text-muted">
              Nessun corso trovato in questa categoria al momento.
            </p>
          )}
        </div>
      </section>

      <section className="bg-dab-background-light py-20 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.25rem)] text-dab-brown">
            Non sai quale corso scegliere?
          </h2>
          <p className="max-w-md text-[1.02rem] leading-relaxed text-dab-text-muted">
            Scrivici: ti aiutiamo a trovare il percorso più adatto a te, anche con una lezione di
            prova.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contatti">Prenota una lezione</Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
