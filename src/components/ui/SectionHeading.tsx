import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleAs: Title = "h2",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 block font-sans text-sm font-semibold uppercase tracking-[0.14em] text-dab-terracotta">
          {eyebrow}
        </span>
      )}
      <Title className="text-[clamp(1.75rem,4vw,2.75rem)] text-dab-brown">{title}</Title>
      {description && (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-dab-text-muted">{description}</p>
      )}
    </motion.div>
  );
}
