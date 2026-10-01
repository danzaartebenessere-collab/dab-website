import ingresso from "../../assets/images/space/ingresso.jpg";
import reception from "../../assets/images/space/reception.jpg";
import spazioAllenamento from "../../assets/images/space/spazio-allenamento.jpg";
import lezioneGruppo from "../../assets/images/space/lezione-gruppo.jpg";

const photos = [
  { src: lezioneGruppo, alt: "Una lezione di gruppo negli spazi di DAB" },
  { src: ingresso, alt: "L'ingresso di DAB a Seveso" },
  { src: reception, alt: "La reception di DAB" },
  { src: spazioAllenamento, alt: "La sala allenamento di DAB" },
];

// Striscia fotografica a scorrimento continuo: foto reali dello spazio DAB,
// per dare un'idea concreta e dinamica dell'ambiente senza appesantire la
// pagina di testo. In pausa al passaggio del mouse, ferma per chi preferisce
// meno animazioni (vedi prefers-reduced-motion in index.css).
export function PhotoGallery() {
  const loop = [...photos, ...photos];

  return (
    <div className="overflow-hidden">
      <div className="dab-scroll-track flex w-max gap-6">
        {loop.map((photo, index) => (
          <div
            key={`${photo.src}-${index}`}
            className="h-64 w-[19rem] shrink-0 overflow-hidden rounded-3xl sm:h-80 sm:w-[24rem]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
