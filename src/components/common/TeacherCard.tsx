import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Teacher } from "../../types";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { TeacherPlaceholder } from "./TeacherPlaceholder";
import { InstagramIcon } from "../ui/icons/InstagramIcon";

type TeacherCardProps = {
  teacher: Teacher;
  index?: number;
  detailed?: boolean;
};

export function TeacherCard({ teacher, index = 0, detailed = false }: TeacherCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-6 sm:grid-cols-[160px_1fr]"
    >
      {teacher.image ? (
        <ImagePlaceholder
          src={teacher.image}
          alt={teacher.name}
          aspectRatio="3 / 4"
          className="w-32 justify-self-center sm:w-full sm:justify-self-auto"
        />
      ) : (
        <TeacherPlaceholder name={teacher.name} className="w-32 justify-self-center sm:w-full sm:justify-self-auto" />
      )}
      <div className="flex flex-col justify-center gap-3">
        <div>
          <h3 className="text-2xl text-dab-brown">{teacher.name}</h3>
          <p className="mt-1 font-sans text-sm font-semibold uppercase tracking-wide text-dab-terracotta">
            {teacher.role}
          </p>
        </div>
        <p className="text-[0.98rem] leading-relaxed text-dab-text-muted">{teacher.shortBio}</p>

        {detailed && teacher.fullBio && (
          <p className="text-[0.98rem] leading-relaxed text-dab-text-muted">{teacher.fullBio}</p>
        )}

        {teacher.specializations.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {teacher.specializations.map((spec) => (
              <li
                key={spec}
                className="rounded-full bg-dab-sage-light px-3 py-1 text-xs font-medium text-dab-brown"
              >
                {spec}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-4">
          {teacher.instagramUrl && (
            <a
              href={teacher.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-dab-brown-soft hover:text-dab-terracotta"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          )}
          {!detailed && (
            <a
              href={`/insegnanti#${teacher.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-dab-terracotta hover:text-dab-brown"
            >
              Scopri di più
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
