import { weekDays, scheduleItems } from "../../data/schedule";
import { cn } from "../../lib/utils";

type ScheduleListProps = {
  className?: string;
};

// Mostra l'orario settimanale: griglia per giorno su desktop,
// card impilate su mobile. La fonte dati è schedule.ts.
export function ScheduleList({ className }: ScheduleListProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-3 lg:grid-cols-5", className)}>
      {weekDays.map((day) => {
        const items = scheduleItems
          .filter((item) => item.day === day)
          .sort((a, b) => a.startTime.localeCompare(b.startTime));

        return (
          <div
            key={day}
            className="rounded-3xl border border-dab-border bg-dab-white p-5"
          >
            <h3 className="mb-4 border-b border-dab-border pb-3 font-display text-lg text-dab-terracotta">
              {day}
            </h3>
            {items.length === 0 ? (
              <p className="text-sm text-dab-text-muted">Nessun corso in programma.</p>
            ) : (
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={item.id} className="flex flex-col gap-0.5">
                    <span className="font-sans text-xs font-semibold uppercase tracking-wide text-dab-text-muted">
                      {item.startTime} – {item.endTime}
                    </span>
                    <span className="font-sans text-[0.95rem] font-medium text-dab-brown">
                      {item.course}
                    </span>
                    {item.audience && (
                      <span className="text-xs text-dab-sage">{item.audience}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
