"use client";
import { useState } from "react";
import { addMinutes } from "date-fns";
import Modal from "./components/Modal";
import { BookingCalendar } from "@/components/booking-calendar";

export default function Page() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactPackage, setContactPackage] = useState<string | null>(null);

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-neutral-950/80 backdrop-blur border-b border-neutral-800 z-40">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <h1 className="font-mono text-xl font-semibold tracking-tight">Matthew Odojukan</h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#work" className="hover:text-white transition-colors">My Work</a>
            <a href="#stack" className="hover:text-white transition-colors">Technologies</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>

            <a className="px-4 py-2 border border-blue-500 rounded-md text-blue-400 hover:bg-blue-500/10 transition-colors font-medium">
              {"</>"} Resume
            </a>

            <a
              href="#advisory"
              className="px-4 py-2 border border-green-500 rounded-md text-green-400 hover:bg-green-500/10 transition-colors font-medium"
            >
              Packages
            </a>
          </div>
        </div>
      </nav>

      {/* PAGE WRAPPER */}
      <div className="pt-32 max-w-5xl mx-auto px-8 pb-12">

        {/* ==================== HERO ==================== */}
        <section id="home" className="grid md:grid-cols-2 gap-16 items-center mb-32">

          {/* LEFT CARD */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-12 shadow-xl">
            <p className="text-xs text-neutral-500 tracking-widest mb-4 uppercase">About Me</p>

            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Hi, I&apos;m Matthew
            </h1>

            <p className="text-xl text-neutral-200 mb-6 font-medium">
              AI Automation Engineer | n8n &amp; Make Expert
            </p>

            <p className="text-neutral-400 mb-8 leading-relaxed text-lg">
              I design and build production-grade automation and AI agent systems that replace
              manual business operations — documents, emails, CRMs, and decision workflows end-to-end.
            </p>

            {/* MAIN GOAL */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-8">
              <p className="text-xs text-neutral-500 tracking-widest mb-3 uppercase">Main Goal</p>
              <p className="text-neutral-200 leading-relaxed">
                Bridging business operations and AI through scalable automation systems.
              </p>
            </div>

            {/* LINKS */}
            <div className="flex gap-4">
              <a
                href="https://github.com/BanditsEdit"
                target="_blank"
                className="px-6 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-odojukan-185265134/"
                target="_blank"
                className="px-6 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01e026b27ce21dc879"
                target="_blank"
                className="px-6 py-3 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/10 transition-colors font-medium"
              >
                Upwork
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/profile.jpg"
              alt="Matthew Odojukan"
              className="w-full h-[520px] object-cover"
            />
          </div>

        </section>

        {/* ==================== AI SYSTEMS ADVISORY ==================== */}
        <section id="advisory" className="mb-32 scroll-mt-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">AI Systems Advisory</h2>
            <p className="text-xl text-neutral-400 mb-6">
              Helping teams turn AI experimentation into reliable operational systems.
            </p>
            <p className="text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              I work with companies that are actively exploring AI and automation but need help turning ideas into practical systems. My role combines consulting, architecture, and hands-on automation expertise to help teams design, troubleshoot, and scale AI-driven workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1 — Hourly Advisory */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Hourly Advisory</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Flexible support for teams that need occasional help with AI workflows or automation challenges.
              </p>
              <ul className="space-y-3 text-sm text-neutral-300 mb-8 flex-1">
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>AI workflow and automation advice</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Architecture and tooling guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Troubleshooting existing workflows</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Reviewing automation ideas before building</span>
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">£150 <span className="text-base font-normal text-neutral-400">/ hour</span></p>
              <button
                type="button"
                onClick={() => { setContactPackage("Hourly Advisory"); setContactOpen(true); }}
                className="w-full py-3 px-4 rounded-lg border border-neutral-600 text-neutral-200 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-colors font-medium"
              >
                Email to Schedule
              </button>
            </div>

            {/* Card 2 — AI Systems Advisor (Recommended) */}
            <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-blue-500/50 rounded-2xl p-8 flex flex-col shadow-lg shadow-blue-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-1">AI Systems Advisor</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Regular support to help your team turn AI experiments into reliable operational systems.
              </p>
              <ul className="space-y-3 text-sm text-neutral-300 mb-8 flex-1">
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Weekly advisory call (30–60 minutes)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Workflow and automation reviews</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Architecture and tooling guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Help diagnosing blockers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Light async support between sessions</span>
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">£500 <span className="text-base font-normal text-neutral-400">/ month</span></p>
              <button
                type="button"
                onClick={() => { setContactPackage("AI Systems Advisor"); setContactOpen(true); }}
                className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
              >
                Email to Schedule
              </button>
            </div>

            {/* Card 3 — Strategic AI Partner */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Strategic AI Partner</h3>
              <p className="text-neutral-400 text-sm mb-6">
                For teams building multiple AI systems who want ongoing architectural and strategic input.
              </p>
              <ul className="space-y-3 text-sm text-neutral-300 mb-8 flex-1">
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Weekly advisory session (up to 90 minutes)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>System architecture guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Priority troubleshooting support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Identification of high-value automation opportunities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 shrink-0">•</span>
                  <span>Strategic guidance as your AI capability grows</span>
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">£900 <span className="text-base font-normal text-neutral-400">/ month</span></p>
              <button
                type="button"
                onClick={() => { setContactPackage("Strategic AI Partner"); setContactOpen(true); }}
                className="w-full py-3 px-4 rounded-lg border border-neutral-600 text-neutral-200 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-colors font-medium"
              >
                Email to Schedule
              </button>
            </div>
          </div>

          {/* How the advisory sessions work */}
          <div className="mt-20 max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-neutral-300 mb-8">How the advisory sessions work</h3>
            <ol className="space-y-6 text-neutral-400">
              <li className="flex items-start gap-4 text-left">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-sm font-medium text-neutral-200">1</span>
                <span>Share your current workflow or challenge</span>
              </li>
              <li className="flex items-start gap-4 text-left">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-sm font-medium text-neutral-200">2</span>
                <span>We review the system together</span>
              </li>
              <li className="flex items-start gap-4 text-left">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-sm font-medium text-neutral-200">3</span>
                <span>You leave with clear next steps for your team</span>
              </li>
            </ol>
          </div>
        </section>

        {/* ==================== MY WORK ==================== */}
        <section id="work" className="mb-32 space-y-8">

          {/* ---------- Project 1: Document Chasing Agent ---------- */}
          <ProjectCard
            title="Document Chasing Agent (DCA)"
            desc="I built an AI-driven document follow-up system that detects missing documents, contacts clients via email and WhatsApp, updates CRM records, and escalates stalled cases automatically — replacing hours of manual admin work with a fully autonomous agent."
            tags={[
              { label: "n8n", emoji: "~" },
              { label: "AI Agents", emoji: "~" },
              { label: "Supabase", emoji: "~" },
              { label: "GoHighLevel", emoji: "~" },
              { label: "OpenAI", emoji: "~" },
            ]}
            caseStudy={
              <CaseStudy
                summary="As an Automation Engineer, I developed a fully autonomous Document Chasing Agent (DCA) that monitors client cases for missing documentation, sends personalized follow-up messages across multiple channels, and escalates unresponsive cases — all without human intervention."
                problem="Financial services firms lose significant revenue and compliance standing when client documents go missing or stall in the pipeline. Staff spend hours each day manually checking CRM records, sending follow-up emails, and tracking who has responded. This process is error-prone, inconsistent, and doesn't scale. The business needed an automated system that could handle hundreds of cases simultaneously while maintaining a personal touch."
                solution={[
                  { title: "CRM Integration & Missing Document Detection", detail: "Connected the agent to GoHighLevel CRM to continuously scan for cases with incomplete documentation. The system identifies exactly which documents are missing for each client and prioritizes outreach based on urgency and case value." },
                  { title: "Multi-Channel Outreach Engine", detail: "Built an intelligent outreach system that contacts clients via email and WhatsApp with personalized messages. Each message references the specific missing documents and includes direct upload links, making it effortless for clients to respond." },
                  { title: "AI-Powered Follow-Up Sequencing", detail: "Implemented an OpenAI-driven follow-up scheduler that varies messaging tone and timing based on client responsiveness. Early reminders are gentle; later ones become more urgent — mimicking how an experienced admin would handle the situation." },
                  { title: "Escalation & Reporting Pipeline", detail: "Created automatic escalation rules that flag unresponsive cases to managers after configurable thresholds. The system generates daily summary reports showing document collection progress, bottlenecks, and projected completion dates." },
                  { title: "Supabase State Management", detail: "Used Supabase to maintain a real-time state machine for every case, tracking outreach history, response status, and document completion percentage — enabling the agent to make intelligent decisions about next steps." },
                ]}
                results={[
                  "Reduced document collection time from weeks to days, with most clients responding within 48 hours of the first automated outreach.",
                  "Eliminated 15+ hours per week of manual follow-up work previously done by administrative staff.",
                  "Achieved a 92% document completion rate without any human intervention.",
                  "Scaled to handle 500+ concurrent cases with consistent follow-up quality.",
                  "Provided management with real-time visibility into the document pipeline through automated dashboards.",
                ]}
              />
            }
          />

          {/* ---------- Project 2: Case Management for Expiries ---------- */}
          <ProjectCard
            title="Case Management for Expiries Agent (CMA)"
            desc="I developed a monitoring system that tracks expiry-sensitive financial products, detects upcoming renewals, and triggers broker notifications before revenue loss occurs — automating the entire expiry management lifecycle from detection to action."
            tags={[
              { label: "n8n", emoji: "~" },
              { label: "PostgreSQL", emoji: "~" },
              { label: "AI Routing", emoji: "~" },
              { label: "Webhooks", emoji: "~" },
            ]}
            caseStudy={
              <CaseStudy
                summary="I designed and implemented a Case Management for Expiries Agent (CMA) that continuously monitors financial product expiry dates, intelligently routes cases to the appropriate brokers, and ensures no renewal opportunity is missed — protecting recurring revenue streams."
                problem="Financial brokerages manage thousands of policies with different expiry dates. Without a centralized system, brokers rely on spreadsheets and memory to track renewals, leading to missed expiries, lost clients, and significant revenue leakage. Manual tracking doesn't scale, and the lack of standardized processes means some cases slip through the cracks entirely."
                solution={[
                  { title: "Automated Expiry Detection Engine", detail: "Built a PostgreSQL-backed system that continuously scans product databases for upcoming expiries. The engine calculates optimal contact windows based on product type, client history, and renewal complexity — ensuring outreach happens at exactly the right time." },
                  { title: "AI-Powered Case Routing", detail: "Implemented intelligent routing logic that assigns expiring cases to the most appropriate broker based on product expertise, current workload, and client relationship history. The AI considers multiple factors to optimize both broker efficiency and client satisfaction." },
                  { title: "Multi-Stage Notification System", detail: "Created a tiered notification pipeline that sends alerts at 90, 60, 30, and 7 days before expiry. Each notification includes case details, client history, and recommended renewal actions, giving brokers everything they need to act quickly." },
                  { title: "Escalation & Compliance Tracking", detail: "Designed automatic escalation paths for cases that haven't been actioned within defined SLAs. The system maintains a complete audit trail for compliance purposes, documenting every notification, action, and outcome." },
                ]}
                results={[
                  "Reduced missed renewal rate from 12% to under 1%, directly protecting recurring revenue.",
                  "Automated case routing reduced broker response time from 3 days to under 4 hours on average.",
                  "Provided real-time dashboards showing renewal pipeline health, broker workloads, and at-risk cases.",
                  "Saved the business an estimated 6 figures annually in retained renewals that would have otherwise lapsed.",
                  "Created a full compliance audit trail, satisfying regulatory requirements for client communication tracking.",
                ]}
              />
            }
          />

          {/* ---------- Project 3: Email Ingestion & Routing ---------- */}
          <ProjectCard
            title="Email Ingestion & Routing Engine"
            desc="I created an AI-powered system that reads inbound emails, extracts structured case data using NLP, classifies intent, and automatically routes each message to the correct operational workflow — eliminating manual email triage entirely."
            tags={[
              { label: "n8n", emoji: "~" },
              { label: "OpenAI", emoji: "~" },
              { label: "Webhooks", emoji: "~" },
              { label: "Email APIs", emoji: "~" },
            ]}
            caseStudy={
              <CaseStudy
                summary="I built an intelligent email ingestion and routing engine that uses AI to parse inbound emails, extract structured data, classify intent, and route messages to the appropriate workflows — transforming a chaotic inbox into an organized, automated operations pipeline."
                problem="Businesses receive hundreds of emails daily from clients, partners, and internal teams. Staff spend hours manually reading emails, identifying what action is needed, extracting relevant data (case numbers, dates, amounts), and forwarding to the right person or system. This manual triage is slow, error-prone, and creates bottlenecks that delay client responses and operational throughput."
                solution={[
                  { title: "Intelligent Email Parsing Pipeline", detail: "Built an n8n workflow that monitors shared inboxes via webhooks and IMAP. Each incoming email is processed through a multi-step parsing pipeline that extracts the sender, subject context, and body content while handling attachments, reply chains, and forwarded messages." },
                  { title: "AI-Powered Data Extraction", detail: "Integrated OpenAI to extract structured data from unstructured email text. The system identifies case references, monetary amounts, dates, document types, and client details with high accuracy — even when the information is buried in conversational language." },
                  { title: "Intent Classification & Routing Logic", detail: "Developed a classification layer that categorizes emails by intent (new case, document submission, complaint, inquiry, escalation) and routes them to the appropriate workflow. The routing rules combine AI classification with business logic to ensure 99%+ accuracy." },
                  { title: "CRM & Workflow Integration", detail: "Connected the routing engine to downstream systems so that routed emails automatically create or update CRM records, trigger follow-up workflows, or notify the assigned team member — closing the loop without manual intervention." },
                ]}
                results={[
                  "Eliminated 20+ hours per week of manual email triage across the operations team.",
                  "Reduced average email response time from 8 hours to under 30 minutes through instant routing.",
                  "Achieved 97% accuracy in email classification and data extraction after initial training.",
                  "Processed 500+ emails daily with zero manual intervention for routine cases.",
                  "Freed up operations staff to focus on complex, high-value client interactions instead of inbox management.",
                ]}
              />
            }
          />

          {/* ---------- Project 4: Etsy Listing Generator ---------- */}
          <ProjectCard
            title="Etsy Listing Generator"
            desc="I built an automated listing creation system for Etsy sellers. The tool generates optimized titles, descriptions, tags, and product mockup images from a single product input, then publishes listings to Etsy — reducing listing creation time from hours to minutes."
            tags={[
              { label: "n8n", emoji: "~" },
              { label: "OpenAI", emoji: "~" },
              { label: "Supabase", emoji: "~" },
              { label: "Image Generation", emoji: "~" },
              { label: "Etsy API", emoji: "~" },
            ]}
            caseStudy={
              <CaseStudy
                summary="I developed a fully automated Etsy listing generator that takes a single product description and produces SEO-optimized titles, rich descriptions, keyword tags, and professional mockup images — then publishes directly to Etsy, turning a multi-hour manual process into a one-click operation."
                problem="Etsy sellers spend 30-60 minutes creating each listing manually — researching keywords, writing SEO-optimized titles and descriptions, selecting tags, creating product mockup images, and filling out the Etsy listing form. For sellers with hundreds of products, this process is unsustainable and prevents them from scaling their stores efficiently."
                solution={[
                  { title: "AI-Powered SEO Optimization", detail: "Integrated OpenAI to analyze the product description and generate SEO-optimized titles (up to 140 characters), bullet-pointed descriptions, and 13 high-relevance keyword tags based on current Etsy search trends and best practices." },
                  { title: "Automated Mockup Image Generation", detail: "Built an image generation pipeline that creates professional product mockup images using AI. The system generates lifestyle-style mockups, flat-lay compositions, and detail shots — matching the visual quality that top Etsy sellers use." },
                  { title: "Supabase Product Database", detail: "Used Supabase as the central product database, storing all generated content, images, and listing metadata. This enables sellers to review, edit, and reuse content across multiple listings and variations." },
                  { title: "Direct Etsy API Publishing", detail: "Connected the workflow to the Etsy API for one-click publishing. After AI generates all listing components, the system formats everything according to Etsy's requirements and creates the listing directly — including images, pricing, and shipping details." },
                  { title: "Batch Processing Pipeline", detail: "Designed the system to handle batch uploads, allowing sellers to input multiple products and have the entire store catalog generated and published in a single automated run." },
                ]}
                results={[
                  "Reduced listing creation time from 45 minutes per product to under 3 minutes.",
                  "Generated listings achieved 40% higher visibility in Etsy search compared to manually-written listings.",
                  "Processed batch uploads of 50+ products in a single automated run.",
                  "Saved Etsy sellers an estimated 20+ hours per week on listing management.",
                  "Maintained consistent brand voice and SEO quality across hundreds of listings without manual oversight.",
                ]}
              />
            }
          />

          {/* ---------- Project 5: AI Content Creation Workflow ---------- */}
          <ProjectCard
            title="AI Content Creation Workflow"
            desc="I designed a 4-stage n8n automation that scrapes top-performing YouTube videos and X posts, generates content ideas with OpenAI, validates with Perplexity research, and creates LinkedIn posts with Claude 3.7 Sonnet — complete with AI-generated images and Slack approval."
            tags={[
              { label: "n8n", emoji: "~" },
              { label: "OpenAI", emoji: "~" },
              { label: "Claude (Anthropic)", emoji: "~" },
              { label: "Perplexity", emoji: "~" },
              { label: "Apify", emoji: "~" },
              { label: "Slack", emoji: "~" },
            ]}
            caseStudy={
              <CaseStudy
                summary="I built a comprehensive AI content creation pipeline using n8n that automates the entire process from data collection to content publishing. The workflow scrapes trending content from YouTube and X, analyzes patterns with OpenAI, validates ideas with Perplexity research, and produces ready-to-publish LinkedIn posts with AI-generated images — all delivered to Slack for approval."
                problem="Creating quality content across multiple platforms is exhausting. Most marketers waste hours researching trends, writing posts, and publishing — only to get mediocre results. The process of monitoring what's working on YouTube and X, identifying patterns, researching supporting facts, and crafting engaging LinkedIn content is a multi-hour workflow that doesn't scale. Content teams need a way to automate the heavy lifting while maintaining quality and authenticity."
                solution={[
                  { title: "Data Collection via Apify", detail: "The workflow uses Apify actors to scrape top-performing YouTube videos on the given topic, automatically transcribe video content, and pull relevant trending tweets from X. Everything is compiled into one comprehensive data block that gives the AI real context about what's working in the market." },
                  { title: "AI-Powered Idea Generation", detail: "The compiled data is fed to OpenAI GPT-4o, which analyzes patterns in high-performing content, generates fresh angles and hooks, identifies optimal content formats, and selects the single best idea to develop into a LinkedIn post." },
                  { title: "Research & Validation with Perplexity", detail: "The chosen content idea is validated using Perplexity (via OpenRouter) to find supporting facts, statistics, and recent industry data. This step prevents AI hallucinations and ensures every post is backed by actual, citeable research." },
                  { title: "Content Creation with Claude 3.7 Sonnet", detail: "Claude 3.7 Sonnet writes the final LinkedIn post using the validated idea and research, producing professional, engaging content optimized for LinkedIn's algorithm and audience engagement patterns." },
                  { title: "Image Generation & Slack Delivery", detail: "DALL-E 3 generates a professional accompanying image, and the complete package — post text, image, and research sources — is delivered to a Slack channel for human review and approval before publishing." },
                ]}
                results={[
                  "Reduced content creation time from 3-4 hours to under 10 minutes per post.",
                  "Generated content consistently outperforms manually-written posts in engagement metrics.",
                  "Research validation step eliminated factual errors and AI hallucinations.",
                  "Enabled content teams to produce 5x more posts per week with the same headcount.",
                  "The Slack approval workflow ensures human quality control while automating 95% of the process.",
                ]}
              />
            }
          />

          {/* ---------- Project 6: AI Ledger Reconciliation ---------- */}
          <ProjectCard
            title="AI Ledger Reconciliation & Document Processing System"
            desc="An AI-powered financial operations system that ingests documents, extracts structured data, reconciles ledger entries, and routes cases into actionable queues — reducing manual review and human error."
            tags={[
              { label: "React", emoji: "~" },
              { label: "TypeScript", emoji: "~" },
              { label: "Python FastAPI", emoji: "~" },
              { label: "AI document analysis", emoji: "~" },
              { label: "Automation agents", emoji: "~" },
              { label: "Workflow orchestration", emoji: "~" },
            ]}
            caseStudy={
              <CaseStudy
                summary="I built an end-to-end AI-powered financial operations system that ingests documents, uses AI to extract and validate data, reconciles ledger entries, and routes cases into actionable queues. The system reduces manual review and human error while scaling operational throughput, with automation agents suggesting next actions and humans reviewing where needed."
                problem="Financial operations teams spend most of their time on manual, repetitive work: reviewing incoming documents, checking ledger entries, reconciling transactions, and flagging missing or incorrect data. This process is slow, repetitive, and prone to human error, and it does not scale as volume grows."
                solution={[
                  { title: "Document ingestion and AI extraction", detail: "The system ingests incoming financial documents and uses AI to extract structured data for reconciliation and routing, with confidence scoring so teams can prioritise low-confidence items." },
                  { title: "Automated reconciliation and validation", detail: "A validation engine automatically reconciles ledger entries and flags inconsistencies, so operations staff focus on exceptions rather than routine matching." },
                  { title: "Intelligent case routing", detail: "Routing logic categorises each case into queues: Needs Attention, Waiting for Client, Problems, and Processed Today. Automation agents decide the next suggested action; humans confirm or override for high-stakes decisions." },
                  { title: "Dashboard and human-in-the-loop", detail: "A React/TypeScript UI provides case queues, confidence scoring, one-click actions, and tooltips for quick guidance. Operations teams process cases quickly with full status tracking and auditability." },
                ]}
                results={[
                  "Reduces manual reconciliation work and speeds up financial operations.",
                  "Lowers human error by automating extraction, validation, and routing.",
                  "Allows teams to process higher volumes without proportionally increasing headcount.",
                  "Clear queues and confidence scoring help prioritise work and train new staff faster.",
                ]}
              />
            }
          />

        </section>

        {/* ==================== TECHNOLOGIES ==================== */}
        <section id="stack" className="mb-32">
          <h2 className="text-4xl font-bold mb-12">Technologies I use.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TechCard
              title="Automation & Workflow Orchestration"
              emoji="🤖"
              items={["n8n", "Make.com", "Zapier"]}
            />
            <TechCard
              title="AI & Large Language Models"
              emoji="🧠"
              items={["GPT (OpenAI)", "Claude (Anthropic)", "Perplexity", "Azure AI"]}
            />
            <TechCard
              title="Database Technologies"
              emoji="🗄️"
              items={["PostgreSQL", "Supabase", "MySQL", "Airtable"]}
            />
            <TechCard
              title="CRMs & Business Platforms"
              emoji="📋"
              items={["GoHighLevel", "Monday CRM", "Zoho CRM", "Kommo CRM"]}
            />
            <TechCard
              title="Messaging & Communication APIs"
              emoji="✉️"
              items={["Email APIs", "SMTP", "WhatsApp API", "SendGrid"]}
            />
            <TechCard
              title="DevOps & Infrastructure"
              emoji="🏗️"
              items={["Docker", "Portainer", "Redis", "RabbitMQ"]}
            />
          </div>
        </section>

        {/* ==================== REVIEWS ==================== */}
        <section id="reviews" className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Client Reviews
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ReviewCard
              name="Vadym S."
              role="Entrepreneur"
              text="Matthew delivered a sophisticated automation system that integrated AI services, CRMs, and workflow orchestration. His ability to architect complex business logic and automate operations was outstanding."
            />
            <ReviewCard
              name="Bram S."
              role="General Manager"
              text="Working with Matthew has been a great experience. He's highly knowledgeable in automation and helped streamline our processes significantly."
            />
            <ReviewCard
              name="Leonid Y."
              role="Entrepreneur"
              text="Matthew is an excellent specialist. Tasks were performed thoroughly, and he always clarified details and delivered high-quality results."
            />
            <ReviewCard
              name="James A."
              role="Technical Specialist"
              text="Matthew provided clear guidance on our n8n setup and helped design multiple automation architectures to solve the same problem efficiently."
            />
          </div>
        </section>

        {/* ==================== SCHEDULE ==================== */}
        <ScheduleSection />

      </div>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 py-8">
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Matthew Odojukan. All rights reserved.</p>
          <a href="#home" className="hover:text-white transition-colors">Back to top</a>
        </div>
      </footer>

      {/* FLOATING CONTACT BUTTON */}
      <button
        onClick={() => setContactOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-green-500 text-white text-xl shadow-xl hover:scale-110 transition hover:shadow-2xl z-40 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </button>

      {/* CONTACT MODAL */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => { setContactOpen(false); setContactPackage(null); }}
        selectedPackage={contactPackage}
      />
    </main>
  );
}


/* ================================================================
   REUSABLE COMPONENTS
   ================================================================ */

/* ---------- SCHEDULE SECTION (Calendar + Time Presets → Google Meet) ---------- */
const MEETING_DURATION_MINUTES = 30;

function ScheduleSection() {
  const [slot, setSlot] = useState<Date | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slot || !name.trim() || !email.trim()) return;
    setStatus("loading");
    setMessage("");
    try {
      const start = slot.toISOString();
      const end = addMinutes(slot, MEETING_DURATION_MINUTES).toISOString();
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startDateTime: start,
          endDateTime: end,
          name: name.trim(),
          email: email.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || data.error || "Booking failed. Please try again or email me to schedule.");
        return;
      }
      setStatus("success");
      if (data.emailError) {
        setMessage(`Meeting booked! Confirmation email could not be sent: ${data.emailError}. Check your calendar for the event.`);
      } else {
        setMessage(data.meetLink ? "Meeting booked! Check your email for the Google Meet link." : "Meeting booked! Check your email for details.");
      }
      setSlot(null);
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email me to schedule.");
    }
  };

  return (
    <section id="schedule" className="mb-20">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Schedule a Call
      </h2>
      <p className="text-neutral-400 text-center mb-10 max-w-xl mx-auto">
        Let&apos;s discuss your automation needs and how I can help streamline your business processes.
      </p>

      <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-xl p-8 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">Date & time</label>
            <BookingCalendar
              value={slot}
              onChange={setSlot}
              timePresets={["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]}
              placeholder="Pick date and time"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          {message && (
            <p className={status === "error" ? "text-red-400 text-sm" : "text-green-400 text-sm"}>
              {message}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "loading" || !slot}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
          >
            {status === "loading" ? "Booking…" : "Book Google Meet"}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------- PROJECT CARD ---------- */
function ProjectCard({
  title,
  desc,
  tags,
  caseStudy,
  caseStudyLink,
}: {
  title: string;
  desc: string;
  tags: { label: string; emoji: string }[];
  caseStudy?: React.ReactNode;
  caseStudyLink?: string;
}) {
  const [open, setOpen] = useState(false);
  const showModal = caseStudy && !caseStudyLink;
  return (
    <>
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-10 shadow-xl hover:border-neutral-700 transition-colors">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-neutral-400 mb-6 leading-relaxed text-lg">{desc}</p>

        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="px-4 py-2 rounded-full text-sm bg-blue-600/15 text-blue-300 border border-blue-500/30 font-medium"
            >
              {tag.label}
            </span>
          ))}
        </div>

        {caseStudyLink && (
          <a
            href={caseStudyLink}
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors text-white"
          >
            Learn More
          </a>
        )}
        {showModal && (
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors text-white"
          >
            Learn More
          </button>
        )}
      </div>

      {showModal && (
        <Modal
          title={title}
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          {caseStudy}
        </Modal>
      )}
    </>
  );
}


/* ---------- CASE STUDY CONTENT ---------- */
function CaseStudy({
  summary,
  problem,
  solution,
  results,
}: {
  summary: string;
  problem: string;
  solution: { title: string; detail: string }[];
  results: string[];
}) {
  return (
    <div className="space-y-8 text-neutral-300 leading-relaxed">

      {/* Executive Summary */}
      <div>
        <h3 className="text-xl font-bold text-white mb-3">Executive Summary</h3>
        <p>{summary}</p>
      </div>

      {/* Problem */}
      <div>
        <h3 className="text-xl font-bold text-white mb-3">Problem</h3>
        <p>{problem}</p>
      </div>

      {/* Solution */}
      <div>
        <h3 className="text-xl font-bold text-white mb-3">Solution</h3>
        <p className="mb-4">I designed and implemented a comprehensive automated solution:</p>
        <ol className="space-y-4 list-decimal list-outside ml-5">
          {solution.map((item, i) => (
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
          {results.map((result, i) => (
            <li key={i}>{result}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}


/* ---------- TECH CARD ---------- */
function TechCard({
  title,
  emoji,
  items,
}: {
  title: string;
  emoji: string;
  items: string[];
}) {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 shadow-xl hover:border-neutral-700 transition-colors">
      <h3 className="text-xl font-semibold mb-6">
        {emoji} {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full text-sm bg-neutral-800 border border-neutral-700 text-neutral-200 font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}


/* ---------- REVIEW CARD ---------- */
function ReviewCard({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 shadow-xl hover:border-neutral-700 transition-colors">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-semibold text-lg">
          {name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-sm text-neutral-400">{role}</p>
        </div>
      </div>

      <p className="text-neutral-300 leading-relaxed text-base italic">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}


/* ---------- CONTACT MODAL ---------- */
function ContactModal({
  isOpen,
  onClose,
  selectedPackage = null,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string | null;
}) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          ...(selectedPackage && { selectedPackage }),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Failed to send. Please try again.");
        setSending(false);
        return;
      }
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-xl w-full max-w-md p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl transition-colors"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-6">Contact me</h2>

        {selectedPackage && (
          <p className="text-xs text-neutral-500 mb-4">
            Inquiring about: <span className="text-neutral-400">{selectedPackage}</span>
          </p>
        )}

        {sent ? (
          <p className="text-green-400 text-center py-8 text-lg">Message sent! I&apos;ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2">
                {error}
              </p>
            )}
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <textarea
              placeholder="Describe your project"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
            {selectedPackage && (
              <p className="text-xs text-neutral-500">
                Your message will be sent with a note that you&apos;re inquiring about the <strong className="text-neutral-400">{selectedPackage}</strong> package.
              </p>
            )}
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
