import { cn } from "../../lib/utils";

type TeacherPlaceholderProps = {
  name: string;
  className?: string;
};

// Placeholder dedicato agli insegnanti: iniziali su fondo salvia chiarissimo,
// usato quando non è ancora disponibile una fotografia verticale.
export function TeacherPlaceholder({ name, className }: TeacherPlaceholderProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-3xl bg-dab-sage-light text-dab-sage",
        className
      )}
      style={{ aspectRatio: "3 / 4" }}
      role="img"
      aria-label={`Fotografia di ${name} in arrivo`}
    >
      <span className="font-display text-4xl text-dab-brown-soft">{initials}</span>
      <span className="font-sans text-sm font-medium tracking-wide">Foto in arrivo</span>
    </div>
  );
}
