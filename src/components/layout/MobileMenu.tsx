import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav } from "../../data/navigation";
import { siteConfig } from "../../data/siteConfig";
import { Button } from "../ui/Button";
import { InstagramIcon } from "../ui/icons/InstagramIcon";
import { cn } from "../../lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

// Menu mobile fullscreen, accessibile: chiude con Escape, blocca lo scroll
// del body mentre è aperto e sposta il focus sul primo link alla comparsa.
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu di navigazione"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] flex flex-col bg-dab-background"
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <span className="font-display text-xl text-dab-brown">DAB</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Chiudi il menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-dab-brown transition-colors hover:text-dab-terracotta"
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Navigazione mobile">
            {mainNav.map((item, index) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                ref={index === 0 ? firstLinkRef : undefined}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "border-b border-dab-border py-4 font-display text-3xl text-dab-brown transition-colors",
                    isActive && "text-dab-terracotta"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-6 px-8 pb-10">
            <Button to="/contatti" onClick={onClose} className="w-full justify-center">
              Prenota una lezione
            </Button>
            <div className="flex items-center justify-between text-sm text-dab-brown-soft">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center gap-2 hover:text-dab-terracotta"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-dab-terracotta"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
