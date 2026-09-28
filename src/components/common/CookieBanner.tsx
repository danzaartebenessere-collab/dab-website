import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getStoredConsent, storeConsent } from "../../lib/cookieConsent";
import { Button } from "../ui/Button";

// Cookie banner discreto: nessun tracking attivo finché l'utente non
// accetta esplicitamente. La preferenza viene salvata in localStorage.
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    storeConsent(accepted ? "accepted" : "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Preferenze cookie"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-2xl flex-col gap-4 rounded-2xl border border-dab-border bg-dab-white p-6 shadow-dab sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm leading-relaxed text-dab-brown-soft">
            Usiamo cookie tecnici necessari al funzionamento del sito e, solo con il tuo consenso,
            cookie non essenziali.{" "}
            <Link to="/cookie-policy" className="underline hover:text-dab-terracotta">
              Scopri di più
            </Link>
            .
          </p>
          <div className="flex shrink-0 gap-3">
            <Button variant="secondary" size="sm" onClick={() => handleChoice(false)}>
              Rifiuta
            </Button>
            <Button size="sm" onClick={() => handleChoice(true)}>
              Accetta
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
