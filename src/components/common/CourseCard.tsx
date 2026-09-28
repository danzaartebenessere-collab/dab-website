import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Users } from "lucide-react";
import type { Course } from "../../types";
import { cn } from "../../lib/utils";

type CourseCardProps = {
  course: Course;
  index?: number;
};

const categoryTone: Record<string, string> = {
  "Tonificazione & Benessere": "bg-dab-sage-light text-dab-brown",
  "Balli di coppia": "bg-dab-terracotta-light text-dab-brown",
  "Bambini & Teen": "bg-dab-cream-dark text-dab-brown",
  "Su richiesta": "bg-dab-cream text-dab-brown",
};

export function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-dab-border bg-dab-white transition-shadow duration-300 hover:shadow-dab"
    >
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span
          className={cn(
            "w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
            categoryTone[course.category] ?? "bg-dab-cream text-dab-brown"
          )}
        >
          {course.category}
        </span>
        <h3 className="text-xl text-dab-brown">{course.name}</h3>
        <p className="flex-1 text-[0.95rem] leading-relaxed text-dab-text-muted">
          {course.shortDescription}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-dab-text-muted">
          {course.duration && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
              {course.duration}
            </span>
          )}
          {course.audience && (
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" strokeWidth={1.75} />
              {course.audience}
            </span>
          )}
        </div>
        <Link
          to="/contatti"
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-dab-terracotta transition-colors group-hover:text-dab-brown"
        >
          Richiedi informazioni
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
