import React from "react";
import { ArrowRight, CheckCircle2, Search, Code2, Rocket, RefreshCw, ShieldCheck, HeartHandshake, FileCode2, Terminal } from "lucide-react";
import { analytics } from "../config";

interface HowWeWorkPageProps {
  onNavigate: (page: string) => void;
}

const PHASES = [
  {
    step: "01",
    title: "Operational Diagnostic & Bottleneck Mapping",
    timeline: "Week 1",
    summary:
      "We spend time observing how your team actually works—not how an executive manual says they work. We shadow dispatchers, estimators, or finance leads, map their exact keystrokes, and identify the repetitive friction points.",
    deliverables: [
      "End-to-end operational workflow map highlighting manual clerical bottlenecks.",
      "Technical integration audit of existing ERPs, databases, and third-party tools.",
      "Concrete technical specification and architectural scope with fixed milestones.",
    ],
  },
  {
    step: "02",
    title: "Rapid Functional Prototype & Workflow Testing",
    timeline: "Weeks 2 – 3",
    summary:
      "Within ten business days, we deliver a working, clickable software prototype populated with your actual historical data. Your operational team tests the interface directly, providing feedback on friction and edge cases before production code is locked in.",
    deliverables: [
      "Working prototype web console connected to sample operational records.",
      "Direct frontline feedback loops ensuring high user adoption.",
      "Validated edge case handling (e.g. network drops, unexpected formats, partial orders).",
    ],
  },
  {
    step: "03",
    title: "Production Engineering & Deep Integration",
    timeline: "Weeks 4 – 6",
    summary:
      "We build the complete production system in modern TypeScript. We configure bidirectional database connectors, automated parsing routines, role-based security access, and fail-safe exception queues with zero downtime to your existing operations.",
    deliverables: [
      "Production-ready backend microservices and database connectors.",
      "Modern, fast web console and mobile interfaces for frontline staff.",
      "Automated unit testing, end-to-end API verification, and security hardening.",
    ],
  },
  {
    step: "04",
    title: "Deployment, Frontline Training & Evolution",
    timeline: "Week 7 Onward",
    summary:
      "We supervise live system cutover side-by-side with your team. We train your staff, monitor real-time exception logs, and provide dedicated engineering support as your transaction volume expands.",
    deliverables: [
      "On-site and live video training sessions for managers and frontline users.",
      "Complete technical documentation, architecture schematics, and runbooks.",
      "Ongoing proactive monitoring, bug fixes, and feature evolution retainer.",
    ],
  },
];

const STUDIO_PRINCIPLES = [
  {
    icon: FileCode2,
    title: "100% Code & IP Ownership",
    description:
      "You own all source code, database schemas, and intellectual property from day one. If you ever hire in-house engineers, they receive a clean, well-documented TypeScript repository with zero proprietary vendor lock-in.",
  },
  {
    icon: Terminal,
    title: "Direct Access to Engineers",
    description:
      "You never speak through non-technical account managers or junior coordinators. You communicate directly with the engineers building your software, ensuring fast iterations and zero lost context.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed Milestones & Scope Rigor",
    description:
      "We do not believe in open-ended hourly billing that rewards consultants for taking longer. We scope projects with clear technical deliverables and fixed milestone pricing.",
  },
  {
    icon: HeartHandshake,
    title: "Zero Disruption to Existing Tools",
    description:
      "We don't demand that you replace your legacy ERP, accounting software, or customer database. We build bridges around them, allowing your team to modernize incrementally without operational panic.",
  },
];

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] selection:bg-[#EAF2F8] selection:text-[#0B1728]">
      {/* Editorial Header Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 bg-[#0B1728] text-white overflow-hidden border-b border-[#1B2F4A]">
        {/* Subtle Atmospheric Gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 75% 25%, rgba(62, 95, 130, 0.45) 0%, transparent 65%), radial-gradient(ellipse at 25% 85%, rgba(141, 184, 224, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[#93C5FD] text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>Engineering Methodology</span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-8">
              Understand first. Build second. No black boxes.
            </h1>

            <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal max-w-[68ch] mb-10">
              We approach consulting like high-reliability software engineering. We don't hand you a slide deck and walk away; we design, build, test, and deploy custom software that solves your team's real operational bottlenecks.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(97,117,148,0.3)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.4)] cursor-pointer"
              >
                <span>Schedule a 30-min discovery call</span>
                <ArrowRight className="w-4.5 h-4.5 ml-2" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("why-droppfloww")}
                className="inline-flex items-center justify-center bg-[#0E1D31] hover:bg-[#152943] text-white text-[16px] font-semibold px-7 py-4 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
              >
                <span>Why Droppfloww Systems</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Phases Breakdown */}
      <main className="py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          <div className="max-w-[760px] mb-16">
            <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0B1728] tracking-tight leading-[1.12] mb-6">
              A transparent, 4-stage consulting delivery roadmap.
            </h2>
            <p className="text-[19px] sm:text-[20px] text-[#1E2E42] leading-relaxed font-normal">
              Most enterprise software projects fail because of misaligned expectations. Here is exactly how an engagement with Droppfloww proceeds from initial conversation to live deployment.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {PHASES.map((phase) => (
              <div
                key={phase.step}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EAF2F8]">
                    <span className="text-[28px] font-mono font-extrabold text-[#617594]">
                      PHASE {phase.step}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-[#E7EDF5] text-[#617594] text-[12px] font-bold uppercase tracking-wider">
                      {phase.timeline}
                    </span>
                  </div>

                  <h3 className="text-[24px] sm:text-[26px] font-extrabold text-[#0B1728] tracking-tight mb-4">
                    {phase.title}
                  </h3>

                  <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal mb-8">
                    {phase.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EAF2F8]">
                  <div className="text-[13px] font-bold uppercase tracking-wider text-[#617594] mb-3">
                    Concrete Deliverables:
                  </div>
                  <ul className="space-y-2.5">
                    {phase.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-[#0B1728]">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#617594] shrink-0 mt-0.5" />
                        <span className="font-medium">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Studio Principles */}
          <div className="bg-[#0B1728] text-white rounded-3xl p-10 sm:p-16 border border-[#1B2F4A] mb-24">
            <div className="max-w-[720px] mb-12">
              <div className="text-[12px] font-bold text-[#38BDF8] uppercase tracking-[0.16em] mb-3">
                Our Operating Philosophy
              </div>
              <h3 className="text-[32px] sm:text-[44px] font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                Engineered for serious organizations.
              </h3>
              <p className="text-[18px] sm:text-[19px] text-[#CBDDEB] leading-relaxed font-normal">
                We reject the traditional agency model of junior bait-and-switch, billable hour padding, and proprietary hostage code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {STUDIO_PRINCIPLES.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.title} className="p-8 rounded-2xl bg-[#0E1D31] border border-[#1B2F4A] hover:border-[#617594] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#14253D] border border-[#617594]/40 flex items-center justify-center text-[#93C5FD] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-[22px] font-bold text-white mb-3">
                      {principle.title}
                    </h4>
                    <p className="text-[16px] sm:text-[17px] text-[#CBDDEB] leading-relaxed font-normal">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Conversion Invitation */}
          <div className="bg-white rounded-3xl p-10 sm:p-16 border border-[#CBDDEB] text-center shadow-sm">
            <h3 className="text-[34px] sm:text-[44px] font-extrabold text-[#0B1728] tracking-tight mb-4">
              Ready to map your team's workflows?
            </h3>
            <p className="text-[18px] sm:text-[20px] text-[#1E2E42] font-normal max-w-[58ch] mx-auto mb-8 leading-relaxed">
              Book a 30-minute discovery call with our founder. We will discuss your current tools, team size, and identify if a custom system makes economic sense.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-9 py-4 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] transition-all cursor-pointer"
              >
                Schedule an exploratory session
              </button>
              <button
                type="button"
                onClick={() => onNavigate("client-reviews")}
                className="inline-flex items-center justify-center bg-white hover:bg-[#E7EDF5] text-[#617594] text-[16px] font-bold px-8 py-4 rounded-full border border-[#617594] transition-all cursor-pointer"
              >
                Read client case studies
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
