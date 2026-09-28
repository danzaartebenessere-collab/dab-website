import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { mainNav } from "../../data/navigation";
import { legalNav } from "../../data/navigation";
import { ContactLink } from "../common/ContactLink";
import { InstagramIcon } from "../ui/icons/InstagramIcon";
import logoCream from "../../assets/logo/dab-logo-cream.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dab-brown text-dab-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1.2fr]">
          <div>
            <img src={logoCream} alt="DAB — Danza, Arte e Benessere" className="h-14 w-auto" />
            <p className="mt-5 max-w-xs font-display text-xl leading-snug text-dab-cream/90">
              {siteConfig.sloganShort}
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-dab-cream/60">
              Naviga
            </h2>
            <ul className="flex flex-col gap-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="font-sans text-[0.95rem] text-dab-cream/90 transition-colors hover:text-dab-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-dab-cream/60">
              Contatti
            </h2>
            <div className="flex flex-col gap-3">
              <ContactLink
                href={`mailto:${siteConfig.email}`}
                icon={<Mail className="h-4 w-4" strokeWidth={1.75} />}
                label={siteConfig.email}
                tone="inverted"
              />
              <ContactLink
                href={`tel:${siteConfig.phoneHref}`}
                icon={<Phone className="h-4 w-4" strokeWidth={1.75} />}
                label={siteConfig.phone}
                tone="inverted"
              />
              <ContactLink
                href={siteConfig.instagramUrl}
                icon={<InstagramIcon className="h-4 w-4" />}
                label={siteConfig.instagramUsername}
                tone="inverted"
                external
              />
              <ContactLink
                href={siteConfig.addressMapsUrl}
                icon={<MapPin className="h-4 w-4" strokeWidth={1.75} />}
                label={siteConfig.address}
                tone="inverted"
                external
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-dab-cream/15 pt-8 text-sm text-dab-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.fullName}. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            {legalNav.map((item) => (
              <Link key={item.href} to={item.href} className="hover:text-dab-cream">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
