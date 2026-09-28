import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type ContactLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
  external?: boolean;
  className?: string;
  tone?: "default" | "inverted";
};

// Link di contatto riutilizzabile (email, telefono, indirizzo, Instagram).
export function ContactLink({
  href,
  icon,
  label,
  external,
  className,
  tone = "default",
}: ContactLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex items-center gap-3 font-sans text-[0.98rem] transition-colors duration-300",
        tone === "inverted"
          ? "text-dab-cream hover:text-dab-white"
          : "text-dab-brown hover:text-dab-terracotta",
        className
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
          tone === "inverted"
            ? "bg-dab-white/10 text-dab-cream group-hover:bg-dab-white/20"
            : "bg-dab-cream text-dab-terracotta group-hover:bg-dab-terracotta-light"
        )}
      >
        {icon}
      </span>
      <span>{label}</span>
    </a>
  );
}
