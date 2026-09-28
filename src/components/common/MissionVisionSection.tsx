import { motion } from "framer-motion";
import { missionVision } from "../../data/values";

// Sezione mission/vision: composizione asimmetrica con linea verticale,
// non due card identiche con icona.
export function MissionVisionSection() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-dab-border md:border-r md:pr-12"
      >
        <span className="font-script text-2xl text-dab-terracotta">Mission</span>
        <p className="mt-4 text-[1.35rem] leading-snug text-dab-brown font-display">
          {missionVision.mission}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="md:pl-12"
      >
        <span className="font-script text-2xl text-dab-sage">Vision</span>
        <p className="mt-4 text-[1.35rem] leading-snug text-dab-brown font-display">
          {missionVision.vision}
        </p>
      </motion.div>
    </div>
  );
}
