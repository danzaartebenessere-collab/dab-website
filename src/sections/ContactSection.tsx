import { motion } from "framer-motion";
import { ContactStrip } from "../components/common/ContactStrip";
import { MapPreview } from "../components/common/MapPreview";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-dab-brown py-24 text-dab-cream sm:py-28">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full text-dab-terracotta sm:h-20"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0 55 C 240 100, 480 10, 720 45 S 1200 90, 1440 45 L 1440 100 L 0 100 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="mb-3 block font-sans text-sm font-semibold uppercase tracking-[0.14em] text-dab-terracotta-soft">
            Contatti
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] text-dab-white">Restiamo in contatto</h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-dab-cream/80">
            Scrivici, chiamaci o passa a trovarci: siamo felici di rispondere a ogni domanda.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ContactStrip tone="inverted" />
          <MapPreview />
        </div>
      </div>
    </section>
  );
}
