import React, { useState } from "react";
import { Layers, Building2, Truck, Stethoscope, GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { analytics } from "../config";
import {
  InfrastructureDemo,
  OperationsDemo,
  LogisticsDemo,
  HealthcareDemo,
  EducationDemo,
} from "./sector-demos";

interface SectorCase {
  id: string;
  tabLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  client: string;
  headline: string;
  summary: string;
  workflow: {
    stage: string;
    description: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  workExamples: {
    title: string;
    detail: string;
    outcome: string;
  }[];
  verdict: {
    quote: string;
    person: string;
    role: string;
  };
}

export const SectorDemoConsole: React.FC = () => {
  const [activeSector, setActiveSector] = useState<number>(0);

  const sectors: SectorCase[] = [
    {
      id: "infrastructure",
      tabLabel: "Infrastructure & Energy",
      icon: Layers,
      client: "PT Bestindo Putra Mandiri",
      headline: "Connecting pipeline drawings directly to audited cost estimates.",
      summary:
        "We connected engineering CAD drawings, automated bill of quantities takeoff, and unit pricing formulas into one shared workspace. Estimators generate verified bids in minutes instead of spending days on manual spreadsheet data entry.",
      workflow: [
        {
          stage: "Drawing Intake",
          description: "CAD drawings and alignment sheets upload directly without manual tracing.",
        },
        {
          stage: "Automated Takeoff",
          description: "Pipeline lengths, valve counts, and coatings calculate automatically from source layers.",
        },
        {
          stage: "Lead Engineer Sign-off",
          description: "Chief estimators verify rates and approve final tenders with full calculation history.",
        },
      ],
      metrics: [
        {
          value: "4.2 min",
          label: "Average tender estimation turnaround, down from three full days of manual re-entry.",
        },
        {
          value: "48.0 KM",
          label: "Continuous corridor pipeline takeoff verified across 14 CAD drawing sheets.",
        },
        {
          value: "Zero",
          label: "Calculation discrepancies between design files and contractor pricing proposals.",
        },
      ],
      workExamples: [
        {
          title: "Carbon Steel Line Pipe (DN300, 12.7mm WT)",
          detail: "12,250 meters extracted directly from pipeline centerline drawing layers with automated weld prep calculations.",
          outcome: "IDR 41.9B accurate material budget without re-keying numbers.",
        },
        {
          title: "High-Pressure Ball Valve Assemblies",
          detail: "8 ANSI Class 600 units cross-referenced automatically against P&ID revision tags and block valve station drawings.",
          outcome: "Zero missed valves or mismatched pressure ratings on tender day.",
        },
        {
          title: "Field Joint Anti-Corrosion Coating",
          detail: "3,840 field joints calculated based on standard 12-meter pipe lengths with automated heat wrap coverage formulas.",
          outcome: "Material quantities locked to verified formulas before supplier purchase.",
        },
      ],
      verdict: {
        quote:
          "Estimating used to consume our entire senior engineering team for days before tender deadlines. Now the calculations are verifiable in minutes, with every number traced to an approved drawing.",
        person: "Ir. H. Prabowo",
        role: "Associate Director of Pre-Construction, PT Bestindo Putra Mandiri",
      },
    },
    {
      id: "operations",
      tabLabel: "Business Operations",
      icon: Building2,
      client: "Apex Advisory Group",
      headline: "Automating financial reconciliation and cross-tool client records.",
      summary:
        "We replaced manual copy-pasting between email attachments, bank portals, and accounting spreadsheets with a direct operational bridge that keeps client records, invoices, and executive reporting synchronized.",
      workflow: [
        {
          stage: "Record Capture",
          description: "Invoices, agreements, and client service requests enter through one clear portal.",
        },
        {
          stage: "Automated Matching",
          description: "Incoming payments match bank records and client agreements without human intervention.",
        },
        {
          stage: "Management Visibility",
          description: "Weekly executive summaries compile automatically without chasing team members.",
        },
      ],
      metrics: [
        {
          value: "14.5 hrs",
          label: "Saved every week per administrator by eliminating routine copy-and-paste data entry.",
        },
        {
          value: "99.4%",
          label: "Automated transaction reconciliation rate across wire transfers and client retainers.",
        },
        {
          value: "Zero",
          label: "Unmatched financial records at the close of each billing cycle.",
        },
      ],
      workExamples: [
        {
          title: "Enterprise Retainer Matching",
          detail: "Monthly advisory agreements automatically cross-checked against incoming wire receipts and active scopes.",
          outcome: "No delayed client billing or missed contract renewals.",
        },
        {
          title: "Multi-Platform Record Sync",
          detail: "Customer contact records and payment statuses sync between QuickBooks and client management tools simultaneously.",
          outcome: "Staff always see the current payment status before client meetings.",
        },
        {
          title: "Automated Executive Digest",
          detail: "Operational cash flow and outstanding milestone receivables compiled every Friday at 5 PM.",
          outcome: "Partners review clear financial facts without requesting manual reports.",
        },
      ],
      verdict: {
        quote:
          "Our administrative staff were spending half their week copying rows between tools. The system quietly handles the clerical movement while our team focuses on our clients.",
        person: "Marcus Vance",
        role: "Managing Partner, Apex Advisory Group",
      },
    },
    {
      id: "logistics",
      tabLabel: "Logistics & Distribution",
      icon: Truck,
      client: "Trans-Regional Freight Network",
      headline: "Linking transport orders directly to live driver manifests and margin checks.",
      summary:
        "We unified customer order intake, warehouse inventory verification, fuel surcharge rate checks, and driver route manifests into one calm coordination system that prevents margin erosion.",
      workflow: [
        {
          stage: "Order Verification",
          description: "Customer delivery orders validate instantly against depot inventory and vehicle weight limits.",
        },
        {
          stage: "Margin Protection",
          description: "Automated rules check delivery distance and live fuel rates to protect trip profitability.",
        },
        {
          stage: "Driver Dispatch",
          description: "Sequenced delivery stops dispatch directly to driver mobile devices in optimal order.",
        },
      ],
      metrics: [
        {
          value: "100%",
          label: "Of dispatched freight jobs verified against live fuel surcharges before trucks leave depot.",
        },
        {
          value: "1.8 hrs",
          label: "Cut from morning dispatch planning, getting deliveries on the road earlier every day.",
        },
        {
          value: "Zero",
          label: "Overloaded vehicles or unplanned return trips due to incorrect manifest data.",
        },
      ],
      workExamples: [
        {
          title: "Multi-Drop Route Sequencing",
          detail: "High-volume delivery manifests arranged in logical geographic order based on delivery time windows.",
          outcome: "Drivers spend more time delivering and less time stuck in backtracking traffic.",
        },
        {
          title: "Live Margin Guard Verification",
          detail: "Every transport quote evaluated against minimum gross margin thresholds before booking confirmation.",
          outcome: "Protected freight operations against sudden diesel price spikes.",
        },
        {
          title: "Proof of Delivery Integration",
          detail: "Driver recipient signatures and photo confirmations feed back into billing instantly upon completion.",
          outcome: "Invoices generate the same day goods arrive instead of days later.",
        },
      ],
      verdict: {
        quote:
          "Our dispatchers used to write manifests on whiteboards while taking orders over WhatsApp. Now the entire fleet moves in sequenced order with healthy profit margins protected.",
        person: "Hendro Wijaya",
        role: "Operations Director, Trans-Regional Freight",
      },
    },
    {
      id: "healthcare",
      tabLabel: "Healthcare & Clinics",
      icon: Stethoscope,
      client: "Apex Health & Dental Group",
      headline: "Replacing paper clipboards with smooth intake and proactive recall scheduling.",
      summary:
        "We helped multi-practitioner clinics reduce empty-chair no-shows, collect medical histories securely before appointments, and keep routine patient recalls on an automated schedule.",
      workflow: [
        {
          stage: "Pre-Visit Intake",
          description: "Patients complete medical history and insurance forms digitally prior to arrival.",
        },
        {
          stage: "Calendar Coordination",
          description: "Treatment rooms and practitioner schedules synchronize to prevent overlaps.",
        },
        {
          stage: "Care Recalls",
          description: "Routine check-up and preventive care reminders send at the clinical interval.",
        },
      ],
      metrics: [
        {
          value: "68%",
          label: "Reduction in missed appointments and late cancellations through friendly automated reminders.",
        },
        {
          value: "12 min",
          label: "Saved per patient arrival by completing registration and medical histories in advance.",
        },
        {
          value: "100%",
          label: "Digital intake forms filed directly into the practitioner chart with zero manual transcription.",
        },
      ],
      workExamples: [
        {
          title: "Digital Patient Registration",
          detail: "Intake forms completed securely on patient mobile devices before stepping foot into the reception area.",
          outcome: "Receptionists welcome patients warmly instead of handing them clipboards.",
        },
        {
          title: "Preventive Care Recall Engine",
          detail: "Automated six-month dental cleaning and annual physical reminders dispatched through WhatsApp and SMS.",
          outcome: "Consistent clinic appointment volume without staff cold-calling patients.",
        },
        {
          title: "Room & Equipment Coordination",
          detail: "Specialized examination rooms and surgical equipment reserved in lockstep with doctor schedules.",
          outcome: "Zero doctor downtime waiting for a sanitized treatment room.",
        },
      ],
      verdict: {
        quote:
          "The waiting room is calm, our receptionists aren't buried under paper forms, and our empty-chair rate dropped dramatically within the first month.",
        person: "Dr. Sarah Alatas",
        role: "Clinical Director, Apex Health Group",
      },
    },
    {
      id: "education",
      tabLabel: "Education & Academies",
      icon: GraduationCap,
      client: "Cambridge Academy Network",
      headline: "Conflict-free timetable scheduling, parent communication, and tuition tracking.",
      summary:
        "We replaced chaotic spreadsheets and manual messaging groups with a centralized academic platform that organizes class schedules, broadcasts student notices to parents, and monitors fee balances.",
      workflow: [
        {
          stage: "Timetable Optimization",
          description: "Room allocations and educator schedules align without double-booking.",
        },
        {
          stage: "Parent Broadcasts",
          description: "Attendance notices and academic schedules publish directly to guardians.",
        },
        {
          stage: "Fee Reconciliation",
          description: "Tuition deposits match bank records and update student accounts automatically.",
        },
      ],
      metrics: [
        {
          value: "Zero",
          label: "Classroom or educator double-bookings with automated conflict-free timetable checks.",
        },
        {
          value: "+42%",
          label: "Faster admissions velocity from student inquiry to confirmed enrolment and fee deposit.",
        },
        {
          value: "100%",
          label: "Parent announcements delivered through verified channels with read confirmations.",
        },
      ],
      workExamples: [
        {
          title: "Conflict-Free Class Scheduling",
          detail: "Algorithmically verified teacher, room, and laboratory schedules across 1,200 enrolled students.",
          outcome: "Academic terms begin smoothly without chaotic room reassignments.",
        },
        {
          title: "Automated Student Attendance Alerts",
          detail: "Classroom roll-call updates parent portals instantly with gentle notifications for absent students.",
          outcome: "Guardians stay informed and student safety protocols remain strictly upheld.",
        },
        {
          title: "Tuition Ledger Synchronization",
          detail: "Direct institutional bank feed reconciles term tuition payments against student balances.",
          outcome: "Finance coordinators spend zero hours cross-checking paper bank statements.",
        },
      ],
      verdict: {
        quote:
          "Term scheduling used to take our academic coordinators three stressful weeks of trial and error. The custom system produced a verified timetable in an afternoon.",
        person: "David S. Thorne",
        role: "Academic Registrar, Cambridge Academy Network",
      },
    },
  ];

  const current = sectors[activeSector];

  return (
    <div className="w-full">
      
      {/* 1. Sector Selection Tabs — Balanced spacing, compact refined pill buttons */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none" role="tablist">
          {sectors.map((sec, idx) => {
            const isActive = activeSector === idx;
            const Icon = sec.icon;
            return (
              <button
                key={sec.id}
                id={`sector-tab-${sec.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => {
                  setActiveSector(idx);
                  analytics.trackCtaClick(`demo_sector_${sec.id}`);
                }}
                className={`py-2.5 px-5 sm:px-5.5 rounded-full text-[14px] sm:text-[15px] font-bold transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? "bg-[#617594] text-white shadow-[0_4px_14px_rgba(97,117,148,0.25)] border border-[#617594]"
                    : "bg-white text-[#2A3F5B] hover:text-[#617594] hover:bg-[#E7EDF5]/40 border border-[#CBDDEB]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#617594]"}`} />
                <span>{sec.tabLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Editorial Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D7E3EE] shadow-[0_8px_30px_rgba(11,23,40,0.05)]"
        >
          
          {/* Header Block: Client & Thesis */}
          <div className="w-full mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.16em] mb-4">
              <span>Case Study • {current.client}</span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold text-[#0B1728] tracking-[-0.03em] leading-[1.1] mb-5">
              {current.headline}
            </h2>
            <p className="text-[18px] sm:text-[20px] lg:text-[21px] text-[#1E2E42] leading-[1.7] font-normal max-w-4xl">
              {current.summary}
            </p>
          </div>

          {/* Interactive Lightweight Sector Demo */}
          <div className="w-full mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-[#E7EDF5]">
            <div className="mb-6">
              <h3 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] tracking-tight">
                Interactive System Demo
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#2A3F5B] mt-1.5 font-normal">
                Experience how the custom interface operates in real conditions. Try the live controls, calculations, and sign-offs below.
              </p>
            </div>

            {current.id === "infrastructure" && <InfrastructureDemo />}
            {current.id === "operations" && <OperationsDemo />}
            {current.id === "logistics" && <LogisticsDemo />}
            {current.id === "healthcare" && <HealthcareDemo />}
            {current.id === "education" && <EducationDemo />}
          </div>

          {/* Connected Operational Flow — Clear 3-Column Narrative */}
          <div className="w-full mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-[#E7EDF5]">
            <div className="mb-6">
              <h3 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] tracking-tight">
                How the custom workflow operates
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#2A3F5B] mt-1.5 font-normal">
                Three connected steps replacing manual spreadsheet handoffs and untracked file transfers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {current.workflow.map((step, sIdx) => (
                <div
                  key={step.stage}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFD] border border-[#D7E3EE] flex flex-col justify-start h-full"
                >
                  <span className="text-[13px] font-bold text-[#617594] tracking-wider uppercase mb-2">
                    Step 0{sIdx + 1}
                  </span>
                  <h4 className="text-[18px] sm:text-[20px] font-bold text-[#0B1728] mb-2 leading-snug">
                    {step.stage}
                  </h4>
                  <p className="text-[15px] sm:text-[16px] text-[#1E2E42] leading-[1.65] font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Metrics — Perfectly Aligned on Horizontal Grid */}
          <div className="w-full mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-[#E7EDF5]">
            <div className="mb-6">
              <h3 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] tracking-tight">
                Measured operational results
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#2A3F5B] mt-1.5 font-normal">
                Quantifiable efficiency gains documented across live production deployments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {current.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFD] border border-[#D7E3EE] flex flex-col justify-start h-full"
                >
                  <div className="text-[34px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#0B1728] tracking-tight leading-none mb-2.5">
                    {m.value}
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-[#1E2E42] leading-[1.65] font-normal">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Real Work Examples — Uniform 3-Column Grid */}
          <div className="w-full mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-[#E7EDF5]">
            <div className="mb-6">
              <h3 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] tracking-tight">
                Specific operations automated
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#2A3F5B] mt-1.5 font-normal">
                Core processes transformed from repetitive administrative tasks into verified software.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {current.workExamples.map((ex) => (
                <div
                  key={ex.title}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFD] border border-[#D7E3EE] flex flex-col justify-between h-full"
                >
                  <div>
                    <h4 className="text-[18px] sm:text-[19px] font-bold text-[#0B1728] mb-2 leading-snug">
                      {ex.title}
                    </h4>
                    <p className="text-[15px] sm:text-[16px] text-[#1E2E42] leading-[1.65] mb-4 font-normal">
                      {ex.detail}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#D7E3EE] text-[14px] sm:text-[15px] font-bold text-[#617594]">
                    {ex.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Statement / Testimonial Box — Soft Blue Tinted Panel */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#E7EDF5]/70 border border-[#CBDDEB] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[19px] sm:text-[21px] font-medium text-[#0B1728] leading-relaxed mb-3">
                "{current.verdict.quote}"
              </p>
              <div>
                <span className="font-bold text-[#0B1728] text-[16px] sm:text-[17px] block">
                  {current.verdict.person}
                </span>
                <span className="text-[14px] sm:text-[15px] text-[#2A3F5B] font-normal">
                  {current.verdict.role}
                </span>
              </div>
            </div>

            <a
              href="#book-call"
              onClick={() => analytics.trackCtaClick(`demo_walkthrough_${current.id}`)}
              className="inline-flex items-center justify-center gap-2 bg-[#617594] hover:bg-[#50637F] text-white text-[15px] sm:text-[16px] font-bold px-7 py-4 rounded-full shadow-[0_4px_14px_rgba(97,117,148,0.25)] hover:shadow-[0_6px_20px_rgba(97,117,148,0.35)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Walk through this system</span>
              <ArrowRight className="w-4.5 h-4.5 text-white" />
            </a>
          </div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
};
