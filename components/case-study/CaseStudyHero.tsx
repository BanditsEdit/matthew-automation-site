import Link from "next/link";

export interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  overview: string;
  techStack: string[];
  backHref?: string;
  backLabel?: string;
}

export function CaseStudyHero({
  title,
  subtitle,
  overview,
  techStack,
  backHref = "/",
  backLabel = "← Back to portfolio",
}: CaseStudyHeroProps) {
  return (
    <header className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-8 md:p-12">
      {backHref && (
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
        >
          {backLabel}
        </Link>
      )}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
        {title}
      </h1>
      <p className="text-xl text-neutral-400 mb-6 max-w-3xl">
        {subtitle}
      </p>
      <p className="text-neutral-300 leading-relaxed max-w-3xl mb-8">
        {overview}
      </p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600/15 text-blue-300 border border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </header>
  );
}
