import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { cn } from "../../lib/utils";

type WhatsAppButtonProps = {
  className?: string;
  message?: string;
  label?: string;
};

export function WhatsAppButton({ className, message, label = "Scrivici su WhatsApp" }: WhatsAppButtonProps) {
  const text = message ?? siteConfig.whatsappDefaultMessage;
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-dab-sage/50 bg-dab-sage-light px-6 py-3 font-sans text-[0.95rem] font-semibold text-dab-brown transition-all duration-300 ease-dab hover:bg-dab-sage-soft",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
      {label}
    </a>
  );
}
