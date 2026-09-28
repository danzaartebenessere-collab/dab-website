import { MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { cn } from "../../lib/utils";

type MapPreviewProps = {
  className?: string;
};

// Anteprima leggera della sede, senza incorporare un iframe di Google Maps
// (per non appesantire il caricamento della pagina). Il link apre la mappa
// completa in una nuova scheda.
export function MapPreview({ className }: MapPreviewProps) {
  return (
    <a
      href={siteConfig.addressMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex min-h-[260px] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-dab-sage-light p-8 text-center transition-colors hover:bg-dab-sage-soft",
        className
      )}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-dab-sage/40"
        viewBox="0 0 300 200"
      >
        <path d="M0 40 L60 40 L60 120 L140 120 L140 20 L220 20 L220 160 L300 160" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0 150 L100 150 L100 70 L200 70 L200 190 L300 190" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <MapPin className="relative h-7 w-7 text-dab-brown" strokeWidth={1.5} />
      <p className="relative font-sans text-sm font-medium text-dab-brown">{siteConfig.address}</p>
      <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-dab-brown">
        Apri in Google Maps
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}
