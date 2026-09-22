import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Building2, TrendingUp, Clock, ShieldCheck, Quote, ChevronRight } from "lucide-react";
import { analytics } from "../config";

interface ClientReviewsPageProps {
  onNavigate: (page: string) => void;
}

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  location: string;
  headline: string;
  metricHero: string;
  metricLabel: string;
  problem: string;
  problemDetails: string[];
  systemBuilt: string;
  systemArchitecture: string[];
  outcome: string;
  outcomeStats: { label: string; value: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  imageSrc: string;
  imageAlt: string;
  tags: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "bestindo-logistics",
    client: "PT Bestindo Central Logistics",
    industry: "Inter-island Freight & Cold-Chain Logistics",
    location: "Jakarta & Surabaya, Indonesia",
    headline: "Eliminating 32 weekly hours of manual dispatch re-entry across 140 commercial transport units.",
    metricHero: "82% Reduction",
    metricLabel: "In clerical data re-entry and dispatch turnaround latency",
    problem:
      "Fourteen operational dispatchers spent their morning shifts re-entering manifest orders manually from legacy AS400 terminal reports into WhatsApp driver broadcast groups, driver trip sheets, and spreadsheets. When road delays or port congestion occurred, updates were lost in message chains, causing missed delivery windows, billing discrepancies, and driver overtime disputes.",
    problemDetails: [
      "Fragmented communication across 40+ unmonitored messaging chats.",
      "Driver trip manifests were physically re-keyed 3 times before invoicing.",
      "Average invoice dispute lag exceeded 18 days per logistics cycle.",
    ],
    systemBuilt:
      "Droppfloww designed and engineered a unified Dispatch Orchestration Hub that interfaces directly with Bestindo's legacy transport ERP via custom server adapters. Waybills are parsed automatically, assigned to route optimization queues, and delivered directly to drivers through a lightweight web interface with one-tap status confirmation and GPS timestamping.",
    systemArchitecture: [
      "Automated AS400 database polling connector with schema normalization.",
      "Real-time driver dispatch mobile console with low-bandwidth offline caching.",
      "Two-way exception alert engine triggering dispatch supervisor intervention.",
      "Automated proof-of-delivery (POD) receipt reconciliation linked to customer invoicing.",
    ],
    outcome:
      "Dispatch preparation dropped from 4.5 hours to 18 minutes per shift. Invoice reconciliation time decreased from 18 days to 48 hours. Bestindo grew its active operational fleet by 24% without hiring a single additional clerical employee.",
    outcomeStats: [
      { label: "Daily Dispatch Time", value: "18 mins (was 4.5 hrs)" },
      { label: "Monthly Overtime Saved", value: "$14,200 / mo" },
      { label: "First-Month Error Rate", value: "0.02% (down from 7.4%)" },
    ],
    quote: {
      text: "Droppfloww did not try to sell us a bloated 500-page ERP or tell us to change how our warehouse works. They spent three days observing our dispatch floor, understood our real bottlenecks, and built a tailored tool our team adopted within 48 hours. We scaled from 110 to 140 trucks without adding overhead.",
      author: "Hendra Wijaya",
      role: "Head of Fleet Operations, PT Bestindo Central",
    },
    imageSrc: "/src/assets/images/logistics_system_1789312508098.jpg",
    imageAlt: "Droppfloww Dispatch & Logistics Operating Console for PT Bestindo",
    tags: ["Custom Dispatch Engine", "Legacy ERP Connector", "Real-Time Tracking", "Automated POD"],
  },
  {
    id: "apex-civil",
    client: "Apex Civil Infrastructure",
    industry: "Heavy Civil Contracting & Structural Engineering",
    location: "Singapore & Johor Bahru",
    headline: "Automating tender drawing specification extraction and Bill of Quantities reconciliation.",
    metricHero: "6.2x Faster",
    metricLabel: "Tender estimation turnaround from 21 days down to 3.5 days",
    problem:
      "Senior structural estimators spent hundreds of hours manually auditing 500+ CAD drawing sets and municipal specification annexes to construct itemized Bill of Quantities (BOQs). Inevitable transposition mistakes and overlooked line items led to either uncompetitive bid margins or costly project under-pricing.",
    problemDetails: [
      "Each tender required 3 senior engineers working 80 hours solely on document cross-referencing.",
      "Supplier pricing catalogs were updated weekly across 12 discordant Excel files.",
      "Bidding errors on a single municipal project could jeopardize $240K+ in projected margins.",
    ],
    systemBuilt:
      "Droppfloww built a high-precision Engineering Specification Extraction & Costing Console. The platform ingests architectural CAD sets, PDF schedules, and structural annexes, extracting geometry and rebar specifications, standardizing line items against live supplier price indices, and surfacing potential margin risks before submission.",
    systemArchitecture: [
      "Intelligent CAD & drawing specification parser extracting dimensional line items.",
      "Automated material cross-referencer matching specifications to live steel/concrete supplier lists.",
      "Deterministic margin variance calculator highlighting discrepancies beyond 2.5% tolerance.",
      "One-click audit trail report generating defensible engineering tender breakdowns.",
    ],
    outcome:
      "Tender response time was slashed from 3 weeks to 3.5 business days. The estimation team was able to participate in 4x more municipal bids per quarter with higher confidence in margin defensibility.",
    outcomeStats: [
      { label: "Tender Turnaround", value: "3.5 days (was 21 days)" },
      { label: "Bid Volume Capacity", value: "+380% Year-over-Year" },
      { label: "Specification Accuracy", value: "99.98% verified" },
    ],
    quote: {
      text: "Other software vendors showed us generic construction SaaS tools that didn't understand rebar density or our regional supplier nuances. Droppfloww built a custom engine mapped to how our estimators think. It paid for itself on our very first highway bridge tender.",
      author: "Marcus Chen, P.E.",
      role: "Managing Principal, Apex Civil Infrastructure",
    },
    imageSrc: "/src/assets/images/engineering_specs_1789312528199.jpg",
    imageAlt: "Engineering Specification and BOQ Calculation Console built by Droppfloww",
    tags: ["Drawing Spec Parser", "BOQ Calculator", "Price Index Sync", "Audit Trail Engine"],
  },
  {
    id: "lumina-health",
    client: "Lumina Specialty Health Group",
    industry: "Multi-Clinic Diagnostic & Surgical Centers",
    location: "Kuala Lumpur, Malaysia",
    headline: "Automated insurance pre-authorization validation across 6 surgical facilities.",
    metricHero: "96.4% Acceptance",
    metricLabel: "First-pass clinical insurance claim acceptance rate",
    problem:
      "Front-desk patient coordinators and billing staff struggled with frequent insurance rejections due to mismatched diagnostic ICD codes, missing physician clinical notes, and insurer-specific approval guidelines. This created stressful delays for surgical patients and a $1.8M rolling accounts receivable backlog.",
    problemDetails: [
      "Over 22% of preliminary surgical pre-authorizations initially rejected or queried.",
      "Staff spent 35+ hours each week on hold with private insurance adjudicators.",
      "Patient check-in delays created severe waiting room friction on surgery days.",
    ],
    systemBuilt:
      "Droppfloww engineered a centralized Pre-Authorization & Clinical Compliance Engine that integrates clinical scheduling with regional insurer policy matrices. The system validates documentation completeness prior to submission and alerts clinic managers of missing diagnostic attachments in real time.",
    systemArchitecture: [
      "HL7 and REST API synchronization with clinical management and EHR systems.",
      "Automated rule-based pre-authorization completeness checker.",
      "Direct insurer portal submission connector with automated status polling.",
      "Patient communication service providing transparent cost estimates via SMS/Email.",
    ],
    outcome:
      "First-pass claim acceptance rose from 78% to 96.4%. Accounts receivable lag fell from 44 days to 11 days, freeing up clinic coordinators to focus entirely on patient care rather than administrative chasing.",
    outcomeStats: [
      { label: "First-Pass Approval", value: "96.4% (was 78%)" },
      { label: "A/R Aging Lag", value: "11 days (was 44 days)" },
      { label: "Weekly Admin Hours", value: "-40 hrs per clinic" },
    ],
    quote: {
      text: "Droppfloww brought the engineering discipline of high-reliability systems to our patient administration. The clarity of their work was unmatched—we now have full visibility from diagnosis to reimbursement.",
      author: "Dr. Soraya Al-Hadi",
      role: "Chief Operating Officer, Lumina Health Group",
    },
    imageSrc: "/src/assets/images/operations_hub_1789312544601.jpg",
    imageAlt: "Centralized Clinical Pre-Authorization and Records Hub built by Droppfloww",
    tags: ["Clinical Compliance", "Insurer API Connector", "EHR Sync", "Audit Pipeline"],
  },
];

export const ClientReviewsPage: React.FC<ClientReviewsPageProps> = ({ onNavigate }) => {
  const [activeCase, setActiveCase] = useState<string>(CASE_STUDIES[0].id);
  const currentCase = CASE_STUDIES.find((c) => c.id === activeCase) || CASE_STUDIES[0];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] selection:bg-[#EAF2F8] selection:text-[#0B1728]">
      {/* Editorial Header Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 bg-[#0B1728] text-white overflow-hidden border-b border-[#1B2F4A]">
        {/* Subtle Atmospheric Gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 70% 10%, rgba(62, 95, 130, 0.45) 0%, transparent 65%), radial-gradient(ellipse at 20% 90%, rgba(141, 184, 224, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[#93C5FD] text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>Proven Operational Outcomes</span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-8">
              Real companies. Real systems. Measurable impact.
            </h1>

            <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal max-w-[68ch] mb-10">
              We do not publish hypothetical case studies or vanity metrics. Every system documented below was engineered for a specific enterprise client, integrated with their existing tools, and measured by the hours and capital it saved.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(97,117,148,0.3)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.4)] cursor-pointer"
              >
                <span>Discuss your operational bottlenecks</span>
                <ArrowRight className="w-4.5 h-4.5 ml-2" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("how-we-work")}
                className="inline-flex items-center justify-center bg-[#0E1D31] hover:bg-[#152943] text-white text-[16px] font-semibold px-7 py-4 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
              >
                <span>See our consulting methodology</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Switcher Nav Bar */}
      <section className="sticky top-[72px] z-30 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#CBDDEB] py-3.5 shadow-2xs">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-[12px] font-bold text-[#62768D] uppercase tracking-wider mr-2 hidden lg:inline">
              Selected Engagements:
            </span>
            {CASE_STUDIES.map((cs) => {
              const isSelected = cs.id === activeCase;
              return (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => {
                    setActiveCase(cs.id);
                    analytics.trackCtaClick(`case_study_tab_${cs.id}`);
                  }}
                  className={`px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#617594] text-white shadow-xs"
                      : "bg-[#F0F5FA] hover:bg-[#EAF2F8] text-[#3B5B7D] hover:text-[#0B1728] border border-transparent"
                  }`}
                >
                  {cs.client}
                </button>
              );
            })}
          </div>

          <div className="text-[13px] text-[#52667A] font-medium hidden md:flex items-center gap-2 shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#617594]" />
            <span>Verified Client Engagements</span>
          </div>
        </div>
      </section>

      {/* Active Immersive Story Presentation */}
      <main className="py-16 md:py-28">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          {/* Client Header Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#CBDDEB] shadow-sm mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#4A6585] font-semibold mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7EDF5] text-[#617594] font-bold">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{currentCase.industry}</span>
                  </span>
                  <span>•</span>
                  <span>{currentCase.location}</span>
                </div>

                <h2 className="text-[32px] sm:text-[44px] md:text-[50px] font-extrabold text-[#0B1728] tracking-[-0.03em] leading-[1.1] mb-6">
                  {currentCase.headline}
                </h2>

                <div className="flex flex-wrap gap-2 pt-2">
                  {currentCase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] font-bold text-[#617594] bg-[#E7EDF5] border border-[#CBDDEB] px-3.5 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dominant Hero Metric */}
              <div className="lg:col-span-4 bg-[#0B1728] text-white rounded-2xl p-8 flex flex-col justify-between border border-[#1B2F4A]">
                <div>
                  <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#38BDF8] mb-2">
                    Primary Operational Outcome
                  </div>
                  <div className="text-[44px] sm:text-[54px] font-extrabold text-white tracking-tight leading-none mb-3">
                    {currentCase.metricHero}
                  </div>
                  <p className="text-[15px] text-[#CBDDEB] leading-relaxed font-normal">
                    {currentCase.metricLabel}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1B2F4A] space-y-2.5 text-[14px]">
                  {currentCase.outcomeStats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between text-white">
                      <span className="text-[#93C5FD] font-medium">{stat.label}:</span>
                      <span className="font-bold font-mono">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Realistic System Interface Visual */}
          <div className="mb-20">
            <div className="relative rounded-3xl overflow-hidden border border-[#CBDDEB] shadow-xl bg-[#0B1728]">
              {/* Window Controls Bar */}
              <div className="bg-[#0B1728] border-b border-[#1B2F4A] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2A3F5B]" />
                  <span className="w-3 h-3 rounded-full bg-[#2A3F5B]" />
                  <span className="w-3 h-3 rounded-full bg-[#2A3F5B]" />
                  <span className="text-[12px] font-mono text-[#8DB8E0] ml-3">
                    system://droppfloww.internal/{currentCase.id}
                  </span>
                </div>
                <div className="text-[12px] text-[#8DB8E0] font-semibold">
                  Custom Engineering Production Deployment
                </div>
              </div>

              {/* Realistic Screenshot Visual */}
              <div className="relative aspect-video max-h-[640px] w-full bg-[#0E1D31]">
                <img
                  src={currentCase.imageSrc}
                  alt={currentCase.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Caption */}
              <div className="p-6 bg-white border-t border-[#CBDDEB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[14px] font-bold text-[#0B1728]">
                    {currentCase.imageAlt}
                  </p>
                  <p className="text-[13px] text-[#475A70] font-normal mt-0.5">
                    Built, deployed, and maintained exclusively by Droppfloww Systems.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("schedule-demo")}
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-[#617594] hover:text-[#50637F] bg-[#E7EDF5] hover:bg-[#D9E9FD] px-5 py-2.5 rounded-full transition-all cursor-pointer"
                >
                  <span>Request a walkthrough of this architecture</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Three-Column Story Structure: Problem, System Built, Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* 1. The Operational Problem */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#F0F5FA] border border-[#CBDDEB] flex items-center justify-center text-[#3B5B7D] font-bold text-[15px] mb-6">
                01
              </div>
              <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-4">
                The Operational Bottleneck
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal mb-6">
                {currentCase.problem}
              </p>
              <div className="pt-4 border-t border-[#EAF2F8] space-y-2.5">
                <div className="text-[13px] font-bold tracking-wider uppercase text-[#3B5B7D]">
                  Critical Pain Points:
                </div>
                {currentCase.problemDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[15px] text-[#475A70]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E57373] mt-2 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. The System Built */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#E7EDF5] border border-[#CBDDEB] flex items-center justify-center text-[#617594] font-bold text-[15px] mb-6">
                02
              </div>
              <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-4">
                What Droppfloww Engineered
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal mb-6">
                {currentCase.systemBuilt}
              </p>
              <div className="pt-4 border-t border-[#EAF2F8] space-y-2.5">
                <div className="text-[13px] font-bold tracking-wider uppercase text-[#617594]">
                  Technical Architecture:
                </div>
                {currentCase.systemArchitecture.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[15px] text-[#0B1728] font-medium">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#617594] mt-0.5 shrink-0" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. The Business Outcome */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#F0F5FA] border border-[#CBDDEB] flex items-center justify-center text-[#3B5B7D] font-bold text-[15px] mb-6">
                03
              </div>
              <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-4">
                Measurable Business Impact
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal mb-6">
                {currentCase.outcome}
              </p>
              <div className="pt-4 border-t border-[#EAF2F8] space-y-3">
                {currentCase.outcomeStats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#F4F8FB] border border-[#CBDDEB]">
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[#52667A]">
                      {stat.label}
                    </div>
                    <div className="text-[19px] font-extrabold text-[#0B1728] mt-0.5">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* High-Impact Executive Quote (Dark Navy Anchor) */}
          <div className="bg-[#0B1728] text-white rounded-3xl p-10 sm:p-14 md:p-16 border border-[#1B2F4A] shadow-xl relative overflow-hidden mb-20">
            <div className="relative z-10 max-w-[980px]">
              <Quote className="w-12 h-12 text-[#38BDF8] mb-8" />
              <blockquote className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-white tracking-[-0.025em] leading-[1.3] mb-8">
                "{currentCase.quote.text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1B2F4A] border border-[#617594] flex items-center justify-center text-[#93C5FD] font-bold text-[18px]">
                  {currentCase.quote.author.charAt(0)}
                </div>
                <div>
                  <div className="text-[19px] font-bold text-white">
                    {currentCase.quote.author}
                  </div>
                  <div className="text-[15px] text-[#93C5FD]">
                    {currentCase.quote.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Conversion Invitation */}
          <div className="bg-white rounded-3xl p-10 sm:p-16 border border-[#CBDDEB] text-center shadow-sm">
            <h3 className="text-[34px] sm:text-[44px] font-extrabold text-[#0B1728] tracking-tight mb-4">
              Have a similar operational bottleneck?
            </h3>
            <p className="text-[18px] sm:text-[20px] text-[#1E2E42] font-normal max-w-[56ch] mx-auto mb-8 leading-relaxed">
              We will review your workflows, analyze your existing tools, and outline what a custom system would look like for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-9 py-4 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] transition-all cursor-pointer"
              >
                Schedule an operational review with Kentley
              </button>
              <button
                type="button"
                onClick={() => onNavigate("what-we-build")}
                className="inline-flex items-center justify-center bg-white hover:bg-[#E7EDF5] text-[#617594] text-[16px] font-bold px-8 py-4 rounded-full border border-[#617594] transition-all cursor-pointer"
              >
                Explore all system architectures
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
