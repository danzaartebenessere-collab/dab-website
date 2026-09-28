import { faqItems } from "../data/faq";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FAQAccordion } from "../components/ui/FAQAccordion";

export function FaqSection() {
  return (
    <section className="bg-dab-background-light py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Domande frequenti" title="Qualche dubbio?" align="center" className="mx-auto" />
        <div className="mt-12">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
