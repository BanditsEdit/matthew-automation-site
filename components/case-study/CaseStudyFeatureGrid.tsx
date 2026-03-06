export interface CaseStudyFeatureCard {
  title: string;
  description: string;
}

export interface CaseStudyFeatureGridProps {
  title?: string;
  features: CaseStudyFeatureCard[];
}

export function CaseStudyFeatureGrid({
  title = "Key Features",
  features,
}: CaseStudyFeatureGridProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-6 hover:border-neutral-700 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
