import Link from "next/link";

export interface CaseStudyCTAProps {
  title: string;
  buttonText: string;
  buttonHref: string;
}

export function CaseStudyCTA({
  title,
  buttonText,
  buttonHref,
}: CaseStudyCTAProps) {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-blue-950/40 to-neutral-950 border border-blue-500/30 p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {title}
      </h2>
      <Link
        href={buttonHref}
        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
      >
        {buttonText}
      </Link>
    </section>
  );
}
