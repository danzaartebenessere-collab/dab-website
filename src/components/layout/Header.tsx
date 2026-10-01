import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { mainNav } from "../../data/navigation";
import { useScrolled } from "../../hooks/useScrolled";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "../../lib/utils";
import logoColor from "../../assets/logo/dab-logo-color.png";

export function Header() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-dab",
          scrolled
            ? "border-b border-dab-border bg-dab-background/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8">
          <Link to="/" className="flex items-center gap-2" aria-label="DAB — Torna alla home">
            <img src={logoColor} alt="DAB — Danza, Arte e Benessere" className="h-24 w-auto sm:h-32 lg:h-40" />
          </Link>

          <nav aria-label="Navigazione principale" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      cn(
                        "relative py-1 font-sans text-[0.95rem] font-medium text-dab-brown transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-dab-terracotta after:transition-all after:duration-300 after:ease-dab hover:text-dab-terracotta hover:after:w-full",
                        isActive && "text-dab-terracotta after:w-full"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button to="/contatti" size="sm" className="hidden sm:inline-flex">
              Prenota una lezione
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-dab-brown transition-colors hover:text-dab-terracotta lg:hidden"
              aria-label="Apri il menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
