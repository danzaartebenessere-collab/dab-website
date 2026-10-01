import { SEOHead } from "../components/common/SEOHead";
import { getLocalBusinessSchema, getOrganizationSchema } from "../lib/structuredData";
import { Hero } from "../sections/Hero";
import { SpaceGallerySection } from "../sections/SpaceGallerySection";
import { IntroSection } from "../sections/IntroSection";
import { MissionVisionBlock } from "../sections/MissionVisionBlock";
import { CoursesPreview } from "../sections/CoursesPreview";
import { TeachersPreview } from "../sections/TeachersPreview";
import { BookingSection } from "../sections/BookingSection";
import { ContactSection } from "../sections/ContactSection";
import { FaqSection } from "../sections/FaqSection";
import { FinalCTA } from "../sections/FinalCTA";

export function HomePage() {
  return (
    <>
      <SEOHead
        title="DAB | Danza, Arte e Benessere a Seveso"
        description="DAB è uno spazio dedicato alla danza, al movimento e al benessere a Seveso. Scopri corsi, insegnanti, orari e prenota una lezione di prova."
        path="/"
        jsonLd={[getLocalBusinessSchema(), getOrganizationSchema()]}
      />
      <Hero />
      <SpaceGallerySection />
      <IntroSection />
      <MissionVisionBlock />
      <CoursesPreview />
      <TeachersPreview />
      <BookingSection />
      <ContactSection />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
