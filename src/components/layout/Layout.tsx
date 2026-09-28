import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "../common/CookieBanner";
import { ScrollToTop } from "../common/ScrollToTop";

export function Layout() {
  const { pathname } = useLocation();

  // Riporta lo scroll in cima ad ogni cambio pagina e sposta il focus sul
  // contenuto principale per gli utenti di screen reader.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.getElementById("main-content")?.focus();
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col bg-dab-background">
      <a href="#main-content" className="skip-link">
        Vai al contenuto principale
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </div>
  );
}
