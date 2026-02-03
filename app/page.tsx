"use client";
import { useState } from "react";
import Modal from "./components/Modal";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen relative overflow-hidden">
      {/* Background Boxes */}
      <div className="fixed inset-0 w-full h-full bg-neutral-950 z-0">
        <div className="absolute inset-0 w-full h-full bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes className="absolute inset-0" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-neutral-950/80 backdrop-blur border-b border-neutral-800 z-40">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="font-mono text-xl font-semibold tracking-tight">Matthew Odojukan</h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#work" className="hover:text-white transition-colors">My Work</a>
            <a href="#stack" className="hover:text-white transition-colors">Technologies</a>
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>

            <a className="px-4 py-2 border border-blue-500 rounded-md text-blue-400 hover:bg-blue-500/10 transition-colors">
              {"</>"} Resume
            </a>

            <a 
              href="https://www.upwork.com/freelancers/~01e026b27ce21dc879"
              target="_blank" 
              className="px-4 py-2 border border-green-500 rounded-md text-green-400 hover:bg-green-500/10 transition-colors"
            >
              ⬆ Upwork
            </a>
          </div>
        </div>
      </nav>

      {/* PAGE WRAPPER */}
      <div className="pt-32 max-w-7xl mx-auto px-8 pb-24 relative z-30">

        {/* HERO */}
        <section id="home" className="grid md:grid-cols-2 gap-16 items-center mb-32">

          {/* LEFT CARD */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-12 shadow-xl">
            <p className="text-xs text-neutral-400 tracking-widest mb-4 uppercase">ABOUT ME</p>

            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Hi, I'm Matthew 👋
            </h1>

            <p className="text-xl text-neutral-200 mb-6 font-medium">
              AI Automation Engineer | n8n & Make Expert
            </p>

            <p className="text-neutral-400 mb-8 leading-relaxed text-lg">
              I design and build production-grade automation and AI agent systems that replace
              manual business operations — documents, emails, CRMs, and decision workflows end-to-end.
            </p>

            {/* MAIN GOAL */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-8">
              <p className="text-xs text-neutral-400 tracking-widest mb-3 uppercase">MAIN GOAL</p>
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

        {/* WORK SECTION */}
        <section id="work" className="mt-32 space-y-8">

          <ProjectCard
            title="Document Chasing Agent (DCA)"
            desc="AI-driven document follow-up system that detects missing documents, contacts clients, updates CRM records, and escalates stalled cases automatically."
            tags={["n8n", "AI Agents", "Supabase", "GoHighLevel"]}
          />

          <ProjectCard
            title="Case Management for Expiries Agent (CMA)"
            desc="Monitoring system that tracks expiry-sensitive financial products and triggers broker notifications before revenue loss occurs."
            tags={["n8n", "Postgres", "AI Routing"]}
          />

          <ProjectCard
            title="Email Ingestion & Routing Engine"
            desc="AI system that reads inbound emails, extracts structured case data, and automatically routes to the correct operational workflow."
            tags={["n8n", "OpenAI", "Webhooks"]}
          />

          <ProjectCard
            title="Etsy Listing Generator"
            desc="Automated listing creation system for Etsy sellers. The tool generates optimized titles, descriptions, tags, and product mockup images from a single product input, then publishes listings to Etsy — reducing listing creation time from hours to minutes."
            tags={["n8n", "OpenAI", "Supabase", "Image Generation", "Etsy"]}
          />


        </section>

        {/* TECHNOLOGIES SECTION */}
        <section id="stack" className="mt-32">
          <h2 className="text-4xl font-bold mb-12">Technologies I use.</h2>
          <div className="grid md:grid-cols-2 gap-8">
           <TechCard 
              title="Automation & Workflow Orchestration" 
              items={["n8n", "Make.com", "Zapier"]} 
           />
           <TechCard 
              title="AI & Large Language Models" 
              items={["OpenAI", "Claude", "Perplexity", "Azure AI"]} 
           />
           <TechCard 
              title="Databases" 
              items={["PostgreSQL", "Supabase", "MySQL", "Airtable"]} 
           />
           <TechCard 
              title="CRMs & Business Platforms" 
              items={["GoHighLevel", "Monday CRM", "Zoho CRM", "Kommo CRM"]} 
           />
           <TechCard 
              title="Messaging & Communication APIs" 
              items={["Email APIs", "SMTP", "WhatsApp API", "SendGrid"]} 
           />
           <TechCard 
              title="DevOps & Infrastructure" 
              items={["Docker", "Portainer", "Redis", "RabbitMQ"]} 
           />
          </div>
        </section>

        {/* CLIENT REVIEWS */}
        <section id="reviews" className="mt-32">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Client Reviews ⭐
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

    {/* SCHEDULE SECTION */}
<section id="schedule" className="mt-20 mb-20">

<h2 className="text-3xl font-bold mb-6 text-center">
  Schedule a Call
</h2>

<div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-xl p-4 max-w-3xl mx-auto">

<div
    dangerouslySetInnerHTML={{
      __html: `
        <iframe 
          src="https://sub.banditsaimarketing.com/widget/booking/aXzBDvGylBFULktsNfIU"
          style="width:100%;height:650px;border:none;overflow:hidden;"
          scrolling="yes"
          id="eEsqiv8zEit2PEuKosXE_1769130888350">
        </iframe>
        
      `,
    }}
  />

</div>
</section>

      </div>

      {/* FLOATING CONTACT BUTTON */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-green-500 text-black text-2xl shadow-xl hover:scale-110 transition hover:shadow-2xl z-40">
        ✉
      </button>
    </main>
  );
}


/* ---------- SMALL REUSABLE COMPONENT ---------- */

function ProjectCard({
  title,
  desc,
  tags,
  caseStudy,
}: {
  title: string;
  desc: string;
  tags: string[];
  caseStudy?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-10 shadow-xl hover:border-neutral-700 transition-colors">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-neutral-400 mb-6 leading-relaxed text-lg">{desc}</p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full text-sm bg-blue-600/20 text-blue-300 border border-blue-500/40 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {caseStudy && (
        <button
          onClick={() => setOpen(true)}
          className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-md font-medium"
        >
          Learn More
        </button>
      )}
      </div>

      {caseStudy && (
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

function TechCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 shadow-xl hover:border-neutral-700 transition-colors">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>

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
          {name[0]}
        </div>
        <div>
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-sm text-neutral-400">{role}</p>
        </div>
      </div>

      <p className="text-neutral-300 leading-relaxed text-base">
        "{text}"
      </p>
    </div>
  );
}
