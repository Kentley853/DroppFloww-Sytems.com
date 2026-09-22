import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { analytics } from "../config";

interface SelectedSystem {
  id: string;
  num: string;
  tabLabel: string;
  tag: string;
  headline: string;
  summary: string;
  beforeHeadline: string;
  beforeDetail: string;
  afterHeadline: string;
  afterDetail: string;
  capabilities: string[];
  philosophy: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  keyMetric: string;
  keyMetricLabel: string;
}

interface WhatWeBuildProps {
  onNavigate?: (page: string) => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const systems: SelectedSystem[] = [
    {
      id: "infrastructure",
      num: "01",
      tabLabel: "Infrastructure",
      tag: "SELECTED SYSTEM: INFRASTRUCTURE",
      headline: "From fragmented engineering work to one connected workflow.",
      summary:
        "Droppfloww helps engineering and infrastructure teams bring drawings, estimates, approvals, project data, and reporting into one system, reducing repetitive work and making information easier to review.",
      beforeHeadline:
        "Drawings, spreadsheets, pricing, approvals, and project information live across separate tools.",
      beforeDetail:
        "Estimators manually trace CAD drawings sheet by sheet, re-type pipe and material specifications into separate spreadsheets, and chase email approvals right before tender submission deadlines. Version mismatches create serious risk on multi-million dollar contracts.",
      afterHeadline:
        "Information moves through one structured workflow, while engineers remain in control of important decisions.",
      afterDetail:
        "Quantities extract directly from source drawings, unit cost calculations remain locked to verified formulas, and authenticated sign-offs happen inside the system with a complete audit history. Your team tenders faster with total confidence in the numbers.",
      capabilities: [
        "Drawing & document intake",
        "BOQ preparation",
        "Cost calculations",
        "Approval workflows",
        "Project reporting",
      ],
      philosophy:
        "Built around your existing process, not the other way around. We study how your estimators, project managers, and directors actually review calculations today. We do not replace your engineering judgment. We remove the clerical friction so your team can focus on technical precision.",
      imageUrl:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Civil engineers reviewing blueprints and infrastructure specifications",
      imageCaption:
        "Engineering drawings, specifications, and BOQ takeoff connected in a single audited workspace.",
      keyMetric: "30 min",
      keyMetricLabel: "Average turnaround from CAD layers to final tender budget",
    },
    {
      id: "operations",
      num: "02",
      tabLabel: "Business Operations",
      tag: "SELECTED SYSTEM: BUSINESS OPERATIONS",
      headline: "From scattered office tasks to one dependable operating backbone.",
      summary:
        "Droppfloww helps office teams reduce repetitive admin work, connect disconnected tools, and keep reporting, finance, scheduling, and customer records moving in one clean workflow.",
      beforeHeadline:
        "Customer records, invoices, bank statements, and project notes remain trapped in separate silos.",
      beforeDetail:
        "Details arrive in email threads, get typed into client spreadsheets, moved into accounting software, and manually re-compiled for Friday management updates. Teams spend valuable hours doing routine clerical copy and paste.",
      afterHeadline:
        "Data moves between tools automatically while your staff retains full visibility and oversight.",
      afterDetail:
        "Invoices match bank records as payments arrive, customer records synchronize across platforms without double entry, and weekly executive digests compile on schedule without anyone having to chase colleagues for numbers.",
      capabilities: [
        "Automated invoice matching",
        "Cross-tool record sync",
        "Approval routing",
        "Weekly executive digests",
        "Centralized operations portal",
      ],
      philosophy:
        "Built around your existing process, not the other way around. We do not ask your team to discard tools that work or adapt to bloated software with hundreds of unused menus. We build a clean, fast layer that keeps information moving between the people who need it.",
      imageUrl:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Clean modern business operations workspace with team working on financial records",
      imageCaption:
        "Centralized operational backbone connecting customer records, finance, and team scheduling.",
      keyMetric: "12+ hrs",
      keyMetricLabel: "Saved per staff member each week on repetitive clerical admin",
    },
    {
      id: "logistics",
      num: "03",
      tabLabel: "Logistics & Fleet",
      tag: "SELECTED SYSTEM: LOGISTICS & DISTRIBUTION",
      headline: "From manual dispatch sheets to live delivery and margin protection.",
      summary:
        "Droppfloww helps freight and distribution teams link customer orders directly to route manifests, protect profit margins against fluctuating transport costs, and keep dispatch running smoothly.",
      beforeHeadline:
        "Orders arrive through phone calls and messaging chats while dispatchers plan routes on paper.",
      beforeDetail:
        "Dispatchers scramble to check warehouse stock, calculate vehicle load limits on scratch pads, and negotiate fuel surcharges on the fly. Unchecked delivery rates eat into gross margins before management realizes.",
      afterHeadline:
        "Orders validate against live inventory and route manifests dispatch directly to drivers.",
      afterDetail:
        "Incoming orders verify instantly against stock records, driver route manifests generate in sequenced order, and every delivery job passes through automated margin guard logic before trucks leave the depot.",
      capabilities: [
        "Live order intake hub",
        "Sequenced driver manifests",
        "Margin guard rate checker",
        "Proof of delivery sync",
        "Warehouse stock tracking",
      ],
      philosophy:
        "Built around your existing process, not the other way around. Your dispatchers keep their fast decision pace, while the system quietly handles calculation checks, route generation, and customer status notifications in the background.",
      imageUrl:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Logistics distribution warehouse and fleet operations facility",
      imageCaption:
        "Live manifest sequencing, inventory verification, and automated transport margin guards.",
      keyMetric: "100%",
      keyMetricLabel: "Transport routes audited against live fuel and vehicle margin rules",
    },
    {
      id: "healthcare",
      num: "04",
      tabLabel: "Healthcare & Clinics",
      tag: "SELECTED SYSTEM: HEALTHCARE & LOCAL SERVICES",
      headline: "From paper clipboards and ringing phones to calm patient flow.",
      summary:
        "Droppfloww helps medical clinics, dental practices, and local service providers cut empty-chair no-shows, collect intake forms before patients arrive, and keep recall appointments on track.",
      beforeHeadline:
        "Front desk staff juggle phone calls, paper clipboards, and manual appointment ledgers.",
      beforeDetail:
        "Receptionists spend all morning confirming tomorrow's calendar by phone, paper intake sheets must be re-typed into clinic records, and forgotten appointments leave practitioners with expensive empty chairs.",
      afterHeadline:
        "Patients confirm visits on their phones and clinical staff focus entirely on care.",
      afterDetail:
        "Patients book through a clean scheduling portal, intake forms are completed on mobile phones prior to arrival, and automated WhatsApp reminders keep attendance high while recall sequences bring patients back on time.",
      capabilities: [
        "Practitioner calendar engine",
        "Automated WhatsApp reminders",
        "Mobile paperless intake",
        "Post-treatment recall sequences",
        "Treatment room coordination",
      ],
      philosophy:
        "Built around your existing process, not the other way around. Your clinical protocols remain untouched. We simply remove the administrative weight from reception so your staff can greet patients with undivided attention.",
      imageUrl:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Modern clean clinic consultation room and reception",
      imageCaption:
        "Paperless mobile intake, automated appointment confirmations, and multi-chair practitioner scheduling.",
      keyMetric: "68%",
      keyMetricLabel: "Reduction in empty-chair cancellations through automated confirmation",
    },
    {
      id: "education",
      num: "05",
      tabLabel: "Education & Academies",
      tag: "SELECTED SYSTEM: EDUCATION & ACADEMIES",
      headline: "From whiteboard timetables to structured academic coordination.",
      summary:
        "Droppfloww helps schools, tutoring academies, and training centers schedule classes without room conflicts, automate parent communications, and manage student tuition tracking with clarity.",
      beforeHeadline:
        "Timetable adjustments cause double-booked rooms and admissions scatter across chat groups.",
      beforeDetail:
        "Coordinators spend hours resolving room and teacher overlaps on dry-erase boards, tuition payments hide across personal bank transfers, and staff spend weekends manually messaging parents about schedule changes.",
      afterHeadline:
        "One central calendar synchronizes rooms, instructors, student rosters, and fee status.",
      afterDetail:
        "Room and teacher schedules adjust without conflicts, parent announcements send automatically through official channels, and student enrolment pipelines show attendance and tuition balance in real time.",
      capabilities: [
        "Conflict-free timetable planner",
        "Automated parent updates",
        "Enrolment and intake pipeline",
        "Tuition fee ledger",
        "Attendance tracking portal",
      ],
      philosophy:
        "Built around your existing process, not the other way around. We respect the academic calendar and grading rhythms of your institution. The system supports your teachers and coordinators without adding technical complexity to their day.",
      imageUrl:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Modern educational academy study and learning environment",
      imageCaption:
        "Conflict-free class scheduling, automated parent announcements, and integrated tuition tracking.",
      keyMetric: "0",
      keyMetricLabel: "Classroom double-bookings with automated conflict-free scheduling",
    },
  ];

  const current = systems[activeTab];

  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-[#FAFBFD] border-b border-[#D8E0EA]"
      aria-labelledby="what-we-build-title"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        
        {/* Section Header: Broad Selected Systems & What We Build */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-[920px] mb-12 md:mb-16"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.18em]">
              <span>Custom Software Architecture</span>
            </span>
          </div>
          <h2
            id="what-we-build-title"
            className="text-[44px] sm:text-[58px] lg:text-[72px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[1.02] mb-6"
          >
            Custom systems built for real operations.
          </h2>
          <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#1E2E42] font-normal max-w-[64ch]">
            Software engineered around the way your people already work: eliminating repetitive clerical drag, connecting fragmented tools, and keeping everyday decisions in human hands.
          </p>
        </motion.div>

        {/* Minimalist System Switcher Tabs */}
        <div className="mb-10">
          <div
            className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none"
            role="tablist"
            aria-label="Selected Systems"
          >
            {systems.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  id={`system-tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`system-panel-${item.id}`}
                  onClick={() => {
                    setActiveTab(idx);
                    analytics.trackCtaClick(`system_select_${item.id}`);
                  }}
                  className={`py-3 px-5 sm:px-6 rounded-full text-[14px] sm:text-[15px] font-bold transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] cursor-pointer ${
                    isActive
                      ? "bg-[#617594] text-white shadow-[0_4px_14px_rgba(97,117,148,0.25)] border border-[#617594]"
                      : "bg-white text-[#2A3F5B] hover:text-[#617594] hover:bg-[#E7EDF5]/40 border border-[#CBDDEB]"
                  }`}
                >
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active System Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            id={`system-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`system-tab-${current.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-[#D7E3EE] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_8px_30px_rgba(11,23,40,0.05)]"
          >
            {/* Top Headline */}
            <div className="max-w-[920px] mb-12 pb-8 border-b border-[#E7EDF5]">
              <h3 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0B1728] tracking-[-0.025em] leading-[1.1] mb-5">
                {current.headline}
              </h3>
              <p className="text-[18px] sm:text-[20px] leading-[1.7] text-[#1E2E42] font-normal max-w-[70ch]">
                {current.summary}
              </p>
            </div>

            {/* Visual Photography & System Identity Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 pb-12 border-b border-[#E7EDF5]">
              <div className="lg:col-span-8 relative overflow-hidden rounded-2xl border border-[#D7E3EE] bg-[#E7EDF5]/40 group">
                <img
                  src={current.imageUrl}
                  alt={current.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1728]/85 via-[#0B1728]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <p className="text-[16px] sm:text-[17px] text-white/95 font-medium max-w-[55ch] leading-relaxed">
                    {current.imageCaption}
                  </p>
                </div>
              </div>

              {/* Fast Stats & Capabilities Column */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div className="p-7 rounded-2xl bg-[#F8FAFD] border border-[#D7E3EE]">
                  <div className="text-[12px] font-bold text-[#617594] uppercase tracking-wider mb-2">
                    Measured Operational Impact
                  </div>
                  <div className="text-[44px] sm:text-[50px] font-extrabold text-[#617594] tracking-tight leading-none mb-2.5">
                    {current.keyMetric}
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-[#2A3F5B] font-medium leading-relaxed">
                    {current.keyMetricLabel}
                  </p>
                </div>

                <div>
                  <div className="text-[16px] font-bold text-[#0B1728] mb-3.5">
                    Core Capabilities
                  </div>
                  <div className="space-y-2.5">
                    {current.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-3 text-[16px] sm:text-[17px] text-[#0B1728] font-medium"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#617594] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href="#book-call"
                    onClick={() =>
                      analytics.trackCtaClick(`system_cta_${current.id}`)
                    }
                    className="inline-flex items-center gap-2.5 text-[16px] font-bold text-[#617594] hover:text-[#50637F] transition-colors group cursor-pointer"
                  >
                    <span>Schedule a walkthrough for this system</span>
                    <ArrowRight className="w-4.5 h-4.5 text-[#617594] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Grounded Before & With Droppfloww Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Before Card */}
              <div className="p-8 sm:p-9 rounded-2xl bg-[#F8FAFD] border border-[#CBDDEB] flex flex-col justify-between">
                <div>
                  <div className="text-[12px] font-bold text-[#62768D] uppercase tracking-wider mb-3">
                    Before Droppfloww
                  </div>
                  <h4 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] leading-snug mb-3">
                    {current.beforeHeadline}
                  </h4>
                  <p className="text-[16px] sm:text-[17px] text-[#2A3F5B] leading-[1.7] font-normal">
                    {current.beforeDetail}
                  </p>
                </div>
              </div>

              {/* With Droppfloww Card */}
              <div className="p-8 sm:p-9 rounded-2xl bg-white border-2 border-[#617594] flex flex-col justify-between shadow-sm">
                <div>
                  <div className="text-[12px] font-bold text-[#617594] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#617594]" />
                    <span>With Droppfloww</span>
                  </div>
                  <h4 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] leading-snug mb-3">
                    {current.afterHeadline}
                  </h4>
                  <p className="text-[16px] sm:text-[17px] text-[#0B1728] font-medium leading-[1.7]">
                    {current.afterDetail}
                  </p>
                </div>
              </div>
            </div>

            {/* Grounded Human Philosophy Statement */}
            <div className="p-8 sm:p-9 rounded-2xl bg-[#F3F7FB] border border-[#CBDDEB]">
              <div className="text-[12px] font-bold text-[#617594] uppercase tracking-wider mb-2.5">
                Our Engineering Philosophy
              </div>
              <p className="text-[18px] sm:text-[19px] text-[#0B1728] leading-[1.75] font-normal">
                {current.philosophy}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Section Footer: Solid & Direct Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 text-[16px] sm:text-[17px] text-[#1E2E42] font-normal border-t border-[#CBDDEB]/60"
        >
          <p className="max-w-[72ch] leading-relaxed">
            <strong className="text-[#0B1728] font-bold">Have a unique internal process?</strong> We begin by studying your existing documents, spreadsheets, and bottlenecks. Then we engineer the software directly with the people doing the work.
          </p>
          <button
            type="button"
            onClick={() => {
              analytics.trackCtaClick("system_bottom_review");
              if (onNavigate) {
                onNavigate("schedule-demo");
              } else {
                document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2.5 font-bold text-[#617594] hover:text-[#50637F] whitespace-nowrap text-[16px] sm:text-[17px] cursor-pointer transition-colors"
          >
            <span>Review your workflow with Kentley</span>
            <ArrowRight className="w-4.5 h-4.5 text-[#617594]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
