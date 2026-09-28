import { Camera } from "lucide-react";
import { cn } from "../../lib/utils";

type ImagePlaceholderProps = {
  /** Percorso immagine reale. Se assente, mostra il placeholder elegante. */
  src?: string;
  alt?: string;
  /** Rapporto d'aspetto CSS, es. "4 / 5", "16 / 9", "1 / 1". */
  aspectRatio?: string;
  label?: string;
  tone?: "cream" | "sage";
  className?: string;
  rounded?: string;
};

// Placeholder elegante da usare finché una fotografia definitiva non è
// disponibile. Basta passare "src" per sostituirlo automaticamente
// con l'immagine reale, mantenendo le proporzioni corrette.
export function ImagePlaceholder({
  src,
  alt = "",
  aspectRatio = "4 / 5",
  label = "Foto in arrivo",
  tone = "cream",
  className,
  rounded = "rounded-3xl",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={cn("overflow-hidden", rounded, className)} style={{ aspectRatio }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          width={800}
          height={1000}
        />
      </div>
    );
  }

  const toneClasses =
    tone === "sage"
      ? "bg-dab-sage-light text-dab-sage"
      : "bg-dab-cream text-dab-terracotta-soft";

  return (
    <div
      role="img"
      aria-label={alt || label}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden",
        rounded,
        toneClasses,
        className
      )}
      style={{ aspectRatio }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M-10 140 C 40 100, 80 180, 130 120 S 210 60, 220 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="165" cy="45" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <Camera className="relative h-6 w-6" strokeWidth={1.5} />
      <span className="relative font-sans text-sm font-medium tracking-wide">{label}</span>
    </div>
  );
}
