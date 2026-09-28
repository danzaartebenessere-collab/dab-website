import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-dab-background py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-2xl px-5 text-center sm:px-8"
      >
        <h2 className="text-[clamp(2rem,4.5vw,3rem)] text-dab-brown">Prenditi il tuo spazio</h2>
        <p className="mx-auto mt-4 max-w-md text-[1.05rem] leading-relaxed text-dab-text-muted">
          Scopri un nuovo modo di vivere il movimento, con serenità, energia e passione.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button to="/contatti">Prenota una lezione</Button>
          <Button to="/contatti" variant="secondary">
            Contattaci
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
