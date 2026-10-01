import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { Button } from "../components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-52">
      {/* Forme astratte decorative: richiamano il movimento con colori
          del brand, senza bisogno di una fotografia. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 h-[560px] w-[560px] text-dab-sage-light opacity-70 sm:-right-16"
        viewBox="0 0 400 400"
      >
        <path
          d="M60 320 C 20 240, 80 120, 180 90 S 360 120, 340 220 S 220 360, 140 340 S 60 320, 60 320 Z"
          fill="currentColor"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-0 h-[380px] w-[480px] text-dab-terracotta-light opacity-80"
        viewBox="0 0 480 380"
      >
        <path
          d="M0 260 C 90 180, 170 320, 260 240 S 420 140, 480 220 L 480 380 L 0 380 Z"
          fill="currentColor"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 text-dab-cream-dark opacity-60 sm:top-16"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" />
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

          <div className="mt-9 flex flex-col items-center gap-4">
            <Button
              to="/corsi"
              className="w-full max-w-xs px-8 py-4 text-base shadow-[0_18px_40px_rgba(185,111,80,0.35)] transition-transform duration-300 hover:scale-[1.04] sm:max-w-sm sm:px-9 sm:py-5 sm:text-lg"
            >
              Scopri i corsi
            </Button>
            <Button
              to="/contatti"
              variant="secondary"
              className="w-full max-w-xs border-2 border-dab-brown px-8 py-4 text-base text-dab-brown transition-transform duration-300 hover:scale-[1.04] hover:bg-dab-brown hover:text-dab-white sm:max-w-sm sm:px-9 sm:py-5 sm:text-lg"
            >
              Prenota una lezione di prova
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
