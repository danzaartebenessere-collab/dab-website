import { ExternalLink, ClipboardList } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

type TrialFormCTAProps = {
  title?: string;
  description?: string;
  className?: string;
};

// Rimanda al modulo Google Forms usato da DAB per raccogliere le richieste
// di lezione di prova: le risposte arrivano direttamente nel Google Form.
export function TrialFormCTA({
  title = "Prenota la tua lezione di prova",
  description = "Compila il modulo con i tuoi dati e la lezione che vuoi provare: ti risponderemo per confermare la disponibilità.",
  className,
}: TrialFormCTAProps) {
  return (
    <div className={cn("flex flex-col items-start gap-5 text-left", className)}>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-dab-terracotta-light text-dab-terracotta">
        <ClipboardList className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="text-xl text-dab-brown">{title}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-dab-text-muted">{description}</p>
      </div>
      <Button href={siteConfig.trialFormUrl} target="_blank" rel="noopener noreferrer">
        Vai al modulo di prenotazione
        <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
      </Button>
    </div>
  );
}
