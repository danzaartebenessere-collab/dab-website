import { introText, values } from "../data/values";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ValueItem } from "../components/common/ValueItem";

export function IntroSection() {
  return (
    <section className="bg-dab-background-light py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow={introText.eyebrow}
            title={introText.title}
            description={introText.body}
          />
          <div className="flex flex-col gap-6">
            {values.map((value, index) => (
              <ValueItem key={value.id} value={value} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
