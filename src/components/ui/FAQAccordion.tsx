import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "../../types";
import { cn } from "../../lib/utils";

type FAQAccordionProps = {
  items: FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className="divide-y divide-dab-border rounded-3xl border border-dab-border bg-dab-white">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-sans text-[1.05rem] font-medium text-dab-brown transition-colors hover:text-dab-terracotta"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-dab-terracotta transition-transform duration-300 ease-dab",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-dab",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[0.98rem] leading-relaxed text-dab-text-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
