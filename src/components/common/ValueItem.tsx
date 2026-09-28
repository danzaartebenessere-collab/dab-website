import { motion } from "framer-motion";
import type { Value } from "../../types";

type ValueItemProps = {
  value: Value;
  index: number;
};

// Voce singola dei "valori" DAB: layout editoriale con numero e linea,
// non una card commerciale.
export function ValueItem({ value, index }: ValueItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-5 border-t border-dab-border pt-6"
    >
      <span className="font-display text-2xl text-dab-terracotta-soft">
        0{index + 1}
      </span>
      <div>
        <h3 className="text-xl text-dab-brown">{value.title}</h3>
        <p className="mt-2 max-w-xs text-[0.98rem] leading-relaxed text-dab-text-muted">
          {value.description}
        </p>
      </div>
    </motion.div>
  );
}
