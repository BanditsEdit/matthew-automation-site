export interface CaseStudyPipelineProps {
  steps: string[];
  description?: string;
}

export function CaseStudyPipeline({ steps, description }: CaseStudyPipelineProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950 border border-neutral-800 p-8 md:p-10">
      <h2 className="text-2xl font-bold text-white mb-2">System Architecture</h2>
      {description && (
        <p className="text-neutral-400 mb-8 max-w-2xl">{description}</p>
      )}
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-full max-w-sm rounded-xl bg-neutral-800/80 border border-neutral-700 px-6 py-4 text-center">
              <span className="text-white font-medium">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex flex-col items-center py-2">
                <span className="text-blue-400/80 text-xl">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
