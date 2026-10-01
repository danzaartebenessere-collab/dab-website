import ingresso from "../../assets/images/space/ingresso.jpg";
import reception from "../../assets/images/space/reception.jpg";
import spazioAllenamento from "../../assets/images/space/spazio-allenamento.jpg";
import lezioneGruppo from "../../assets/images/space/lezione-gruppo.jpg";

const photos = [
  { src: ingresso, alt: "L'ingresso di DAB a Seveso" },
  { src: reception, alt: "La reception di DAB" },
  { src: spazioAllenamento, alt: "La sala allenamento di DAB" },
  { src: lezioneGruppo, alt: "Una lezione di gruppo negli spazi di DAB" },
];

// Striscia fotografica cinematografica a scorrimento continuo: le foto reali
// dello spazio DAB scorrono a tutta larghezza, velate da un overlay scuro con
// una scritta sopra, come l'insegna luminosa di una scuola di ballo.
// Ferma solo per chi preferisce meno animazioni (vedi prefers-reduced-motion
// in index.css), non si interrompe al passaggio del mouse.
export function PhotoGallery() {
  const loop = [...photos, ...photos];

  return (
    <div className="relative h-[420px] overflow-hidden bg-dab-brown sm:h-[520px]">
      <div className="dab-scroll-track absolute inset-0 flex h-full w-max">
        {loop.map((photo, index) => (
          <div key={`${photo.src}-${index}`} className="h-full w-[75vw] shrink-0 sm:w-[32rem]">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dab-brown/90 via-dab-brown/35 to-dab-brown/60" />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <span className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-dab-terracotta-soft">
          I nostri spazi
        </span>
        <h2 className="max-w-lg text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] text-dab-white">
          Il ritmo inizia qui.
        </h2>
      </div>
    </div>
  );
}
