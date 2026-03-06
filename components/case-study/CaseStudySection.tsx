import { ReactNode } from "react";

export interface CaseStudySectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function CaseStudySection({
  id,
  title,
  children,
  className = "",
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      className={`rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950 border border-neutral-800 p-8 md:p-10 ${className}`}
    >
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="text-neutral-300 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}
