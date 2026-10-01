import { courses } from "../data/courses";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CourseCard } from "../components/common/CourseCard";
import { Button } from "../components/ui/Button";

export function CoursesPreview() {
  const featured = courses.filter((course) => course.featured).slice(0, 4);

  return (
    <section className="bg-dab-background-light py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Le nostre attività"
            title="Trova il tuo movimento"
            description="Attività diverse, unite dallo stesso obiettivo: aiutarti a stare bene, divertirti e dedicare tempo a te."
          />
          <Button to="/corsi" className="hidden sm:inline-flex">
            Tutti i corsi
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        <Button to="/corsi" className="mt-10 w-full justify-center sm:hidden">
          Tutti i corsi
        </Button>
      </div>
    </section>
  );
}
