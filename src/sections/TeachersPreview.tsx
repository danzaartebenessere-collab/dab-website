import { teachers } from "../data/teachers";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TeacherCard } from "../components/common/TeacherCard";
import { Button } from "../components/ui/Button";

export function TeachersPreview() {
  return (
    <section className="bg-dab-background py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Le persone di DAB"
          title="Passione, esperienza e attenzione"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-14 sm:grid-cols-2">
          {teachers.map((teacher, index) => (
            <TeacherCard key={teacher.id} teacher={teacher} index={index} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/insegnanti" variant="secondary">
            Conosci tutti gli insegnanti
          </Button>
        </div>
      </div>
    </section>
  );
}
