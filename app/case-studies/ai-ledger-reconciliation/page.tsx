import Link from "next/link";

const TITLE = "AI Operations Platform for Accounting Firms";

const SUMMARY =
  "I built an end-to-end AI-powered financial operations system that ingests documents, uses AI to extract and validate data, reconciles ledger entries, and routes cases into actionable queues. The system reduces manual review and human error while scaling operational throughput, with automation agents suggesting next actions and humans reviewing where needed.";

const PROBLEM =
  "Financial operations teams spend most of their time on manual, repetitive work: reviewing incoming documents, checking ledger entries, reconciling transactions, and flagging missing or incorrect data. This process is slow, repetitive, and prone to human error, and it does not scale as volume grows.";

const SOLUTION = [
  {
    title: "Document ingestion and AI extraction",
    detail:
      "The system ingests incoming financial documents and uses AI to extract structured data for reconciliation and routing, with confidence scoring so teams can prioritise low-confidence items.",
  },
  {
    title: "Automated reconciliation and validation",
    detail:
      "A validation engine automatically reconciles ledger entries and flags inconsistencies, so operations staff focus on exceptions rather than routine matching.",
  },
  {
    title: "Intelligent case routing",
    detail:
      "Routing logic categorises each case into queues: Needs Attention, Waiting for Client, Problems, and Processed Today. Automation agents decide the next suggested action; humans confirm or override for high-stakes decisions.",
  },
  {
    title: "Dashboard and human-in-the-loop",
    detail:
      "A React/TypeScript UI provides case queues, confidence scoring, one-click actions, and tooltips for quick guidance. Operations teams process cases quickly with full status tracking and auditability.",
  },
];

const RESULTS = [
  "Reduces manual reconciliation work and speeds up financial operations.",
  "Lowers human error by automating extraction, validation, and routing.",
  "Allows teams to process higher volumes without proportionally increasing headcount.",
  "Clear queues and confidence scoring help prioritise work and train new staff faster.",
];

export const metadata = {
  title: "AI Operations Platform for Accounting Firms | Matthew Odojukan",
  description:
    "Case study: AI-powered financial operations system for document processing, ledger reconciliation, and automated case routing.",
};

export default function AILedgerCaseStudyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="max-w-3xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xl font-semibold tracking-tight hover:text-white transition-colors"
          >
            Matthew Odojukan
          </Link>
          <Link
            href="/"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            ← Back to portfolio
          </Link>
        </div>
      </nav>

      <div className="pt-28 pb-20 max-w-3xl mx-auto px-8">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-xl p-8 relative">
          <h2 className="text-2xl font-bold mb-6 text-white">{TITLE}</h2>

          <div className="space-y-8 text-neutral-300 leading-relaxed">
            {/* Executive Summary */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Executive Summary
              </h3>
              <p>{SUMMARY}</p>
            </div>

            {/* Problem */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Problem</h3>
              <p>{PROBLEM}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Solution</h3>
              <p className="mb-4">
                I designed and implemented a comprehensive automated solution:
              </p>
              <ol className="space-y-4 list-decimal list-outside ml-5">
                {SOLUTION.map((item, i) => (
                  <li key={i}>
                    <strong className="text-white">{item.title}:</strong>{" "}
                    {item.detail}
                  </li>
                ))}
              </ol>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Results</h3>
              <ul className="space-y-3 list-disc list-outside ml-5">
                {RESULTS.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
