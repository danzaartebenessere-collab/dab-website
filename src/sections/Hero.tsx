import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { Button } from "../components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Forma curva decorativa, richiama il movimento senza essere invasiva */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] text-dab-sage-light opacity-60 sm:-right-10"
        viewBox="0 0 400 400"
      >
        <path
          d="M60 320 C 20 240, 80 120, 180 90 S 360 120, 340 220 S 220 360, 140 340 S 60 320, 60 320 Z"
          fill="currentColor"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 h-40 w-[280px] text-dab-terracotta-light opacity-70"
        viewBox="0 0 280 140"
      >
        <path
          d="M0 90 C 50 60, 90 120, 140 90 S 230 60, 280 90 L 280 140 L 0 140 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-dab-cream px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-dab-terracotta">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            {siteConfig.eyebrow}
          </span>

          <h1 className="whitespace-pre-line text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08] text-dab-brown">
            {siteConfig.slogan}
          </h1>

          <p className="mx-auto mt-6 max-w-md text-[1.05rem] leading-relaxed text-dab-text-muted">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button to="/corsi">Scopri i corsi</Button>
            <Button to="/contatti" variant="secondary">
              Prenota una lezione di prova
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
