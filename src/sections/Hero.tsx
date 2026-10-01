import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { Button } from "../components/ui/Button";
import heroDance from "../assets/images/hero-dance-ai.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-52">
      {/* Immagine generata con IA: persone che ballano, velata per lasciare
          testo e pulsanti ben leggibili. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-[0.3]"
        style={{ backgroundImage: `url(${heroDance})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-dab-background)_80%)]" />

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
