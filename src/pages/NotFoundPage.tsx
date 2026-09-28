import { Compass } from "lucide-react";
import { SEOHead } from "../components/common/SEOHead";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Pagina non trovata | DAB"
        description="La pagina che cerchi non esiste o è stata spostata."
        path="/404"
        noindex
      />

      <section className="flex min-h-[70vh] items-center justify-center pt-24">
        <div className="mx-auto flex max-w-md flex-col items-center px-5 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-dab-cream text-dab-terracotta">
            <Compass className="h-6 w-6" strokeWidth={1.5} />
          </span>
          <span className="mt-6 font-display text-6xl text-dab-terracotta-soft">404</span>
          <h1 className="mt-3 text-2xl text-dab-brown">Sembra che il percorso si sia perso</h1>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-dab-text-muted">
            La pagina che cerchi non esiste più o è stata spostata. Torna alla home per ritrovare
            la strada verso DAB.
          </p>
          <Button to="/" className="mt-8">
            Torna alla home
          </Button>
        </div>
      </section>
    </>
  );
}
