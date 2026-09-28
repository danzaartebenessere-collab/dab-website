import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { ContactLink } from "./ContactLink";
import { InstagramIcon } from "../ui/icons/InstagramIcon";
import { cn } from "../../lib/utils";

type ContactStripProps = {
  className?: string;
  tone?: "default" | "inverted";
};

// Blocco contatti riutilizzabile: email, telefono, Instagram, indirizzo.
// Usato in homepage, pagina Contatti e footer.
export function ContactStrip({ className, tone = "default" }: ContactStripProps) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2", className)}>
      <ContactLink
        href={`mailto:${siteConfig.email}`}
        icon={<Mail className="h-4 w-4" strokeWidth={1.75} />}
        label={siteConfig.email}
        tone={tone}
      />
      <ContactLink
        href={`tel:${siteConfig.phoneHref}`}
        icon={<Phone className="h-4 w-4" strokeWidth={1.75} />}
        label={siteConfig.phone}
        tone={tone}
      />
      <ContactLink
        href={siteConfig.instagramUrl}
        icon={<InstagramIcon className="h-4 w-4" />}
        label={siteConfig.instagramUsername}
        tone={tone}
        external
      />
      <ContactLink
        href={siteConfig.addressMapsUrl}
        icon={<MapPin className="h-4 w-4" strokeWidth={1.75} />}
        label={siteConfig.address}
        tone={tone}
        external
      />
    </div>
  );
}
