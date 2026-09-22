import React, { useState } from "react";
import { ArrowRight, Database, Layers, Cpu, Smartphone, Check, FileText, RefreshCw, Server, Shield, ExternalLink } from "lucide-react";
import { analytics } from "../config";

interface WhatWeBuildPageProps {
  onNavigate: (page: string) => void;
}

const SYSTEM_CATEGORIES = [
  {
    id: "operational-engines",
    title: "Custom Operational Engines",
    tagline: "Centralize fragmented workflows that live across spreadsheets and team chats.",
    description:
      "When a business grows past 20 people, spreadsheets begin breaking down. Crucial statuses get lost in message threads, numbers are double-counted, and staff spend half their week maintaining trackers rather than executing work. We build tailored operational engines that consolidate your core business logic into a calm, single-source web console.",
    capabilities: [
      "Custom relational business logic mapped exactly to your company's operational rules.",
      "Multi-role permissions: dispatchers, warehouse leads, finance managers, and executives.",
      "Live status boards replacing chaotic Google Sheets and fragmented WhatsApp updates.",
      "Automatic validation checks preventing clerical mistakes before records are stored.",
    ],
    realWorldExample:
      "For a regional logistics company, we replaced 14 shared spreadsheets with an operational dispatch engine that cut daily dispatch prep from 4.5 hours to 18 minutes.",
    stat: "80%+ reduction in manual tracking overhead",
  },
  {
    id: "erp-connectors",
    title: "Legacy ERP & Carrier Integrations",
    tagline: "Bridge old mainframe software and modern APIs without expensive rip-and-replace projects.",
    description:
      "You don't need to spend millions ripping out your existing SAP, AS400, or legacy accounting systems. Droppfloww builds resilient middleware layers and automated connectors that safely query, normalize, and update your core databases in real time, exposing clean modern web interfaces for your frontline staff.",
    capabilities: [
      "Two-way synchronization with legacy databases (SQL Server, Oracle, DB2, AS400).",
      "Automated webhooks and real-time event pipelines with retry queues.",
      "Third-party shipping, port, customs, and supplier API connectors.",
      "Zero disruption to your underlying system of record.",
    ],
    realWorldExample:
      "Built an AS400 polling adapter for a freight provider that automatically extracts morning container manifests and pushes them to drivers' mobile phones.",
    stat: "Zero downtime deployment over legacy backends",
  },
  {
    id: "document-intelligence",
    title: "Document & Technical Spec Parsers",
    tagline: "Turn hundreds of unstructured PDFs, drawings, and invoices into structured databases.",
    description:
      "High-value engineering, legal, and commercial teams waste thousands of hours manually copying numbers out of 200-page tender documents, CAD drawings, and supplier invoices. We build custom extraction engines that read complex multi-column formats, verify line items against contract rules, and flag variances automatically.",
    capabilities: [
      "Extraction of dimensional specifications from architectural and civil CAD drawings.",
      "Automated cross-referencing against live supplier price catalogs and material indices.",
      "Complex commercial invoice parsing and three-way matching against purchase orders.",
      "Deterministic audit trails with verified source-page highlighting for compliance.",
    ],
    realWorldExample:
      "An infrastructure firm now generates civil Bill of Quantities (BOQs) from 500-page structural specifications in 3.5 days instead of 3 weeks.",
    stat: "6.2x faster tender estimation cycles",
  },
  {
    id: "field-portals",
    title: "Frontline Mobile Consoles & Client Portals",
    tagline: "Fast, simple web tools designed for workers on site, in trucks, or in the warehouse.",
    description:
      "Frontline workers reject complicated corporate software. We design lightweight, high-contrast web applications optimized for mobile phones, rugged tablets, and warehouse scanners. No app store downloads required: instant loading, offline caching, and large touch targets designed for fast field execution.",
    capabilities: [
      "Driver and technician mobile web apps with GPS check-ins and offline caching.",
      "One-tap photo proof-of-delivery (POD) capture with automatic customer email dispatch.",
      "Dedicated, branded client tracking portals with live milestones and self-serve documents.",
      "Role-specific views hiding technical complexity from external vendors.",
    ],
    realWorldExample:
      "Over 140 commercial truck drivers use Droppfloww's mobile dispatch interface daily to confirm cargo deliveries with one tap on 3G connections.",
    stat: "99.4% first-week frontline adoption rate",
  },
];

export const WhatWeBuildPage: React.FC<WhatWeBuildPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(SYSTEM_CATEGORIES[0].id);
  const activeItem = SYSTEM_CATEGORIES.find((c) => c.id === selectedCategory) || SYSTEM_CATEGORIES[0];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] selection:bg-[#EAF2F8] selection:text-[#0B1728]">
      {/* Editorial Header Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 bg-[#0B1728] text-white overflow-hidden border-b border-[#1B2F4A]">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(62, 95, 130, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 15% 85%, rgba(141, 184, 224, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[#93C5FD] text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>Engineering Architecture & Solutions</span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-8">
              Custom systems built around how your business works.
            </h1>

            <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal max-w-[68ch] mb-10">
              We do not force you to abandon the tools you rely on or adopt bloated SaaS templates. We engineer custom software layers that sit between your databases, spreadsheets, and teams—automating the repetitive clerical glue.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(97,117,148,0.3)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.4)] cursor-pointer"
              >
                <span>Schedule an architectural review</span>
                <ArrowRight className="w-4.5 h-4.5 ml-2" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("client-reviews")}
                className="inline-flex items-center justify-center bg-[#0E1D31] hover:bg-[#152943] text-white text-[16px] font-semibold px-7 py-4 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
              >
                <span>Read verified case studies</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Exploration Section */}
      <main className="py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          {/* Section Introduction */}
          <div className="max-w-[760px] mb-16">
            <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0B1728] tracking-tight leading-[1.12] mb-6">
              Four core system architectures engineered by Droppfloww.
            </h2>
            <p className="text-[19px] sm:text-[20px] text-[#1E2E42] leading-relaxed font-normal">
              Every system we deliver is custom-coded in modern TypeScript, securely hosted in your cloud infrastructure or on private dedicated instances, and completely owned by your company.
            </p>
          </div>

          {/* Interactive Category Grid / Detail View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
            
            {/* Category Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-3">
              {SYSTEM_CATEGORIES.map((cat, idx) => {
                const isSelected = cat.id === selectedCategory;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      analytics.trackCtaClick(`what_we_build_cat_${cat.id}`);
                    }}
                    className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#0B1728] text-white border-[#617594] shadow-md ring-1 ring-[#617594]"
                        : "bg-white text-[#0B1728] border-[#CBDDEB] hover:bg-[#F0F5FA]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[12px] font-mono font-bold ${isSelected ? "text-[#38BDF8]" : "text-[#52667A]"}`}>
                        ARCHITECTURE 0{idx + 1}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />}
                    </div>
                    <div className="text-[19px] font-extrabold mb-1">
                      {cat.title}
                    </div>
                    <div className={`text-[14px] line-clamp-2 leading-relaxed ${isSelected ? "text-[#CBDDEB]" : "text-[#475A70]"}`}>
                      {cat.tagline}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Architecture Breakdown Card */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-[#CBDDEB] shadow-sm">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] text-[#617594] text-[12px] font-bold uppercase tracking-wider mb-6">
                <span>Architecture Specification</span>
              </div>

              <h3 className="text-[30px] sm:text-[40px] font-extrabold text-[#0B1728] tracking-tight leading-[1.15] mb-4">
                {activeItem.title}
              </h3>

              <p className="text-[18px] sm:text-[20px] text-[#617594] font-bold mb-6">
                {activeItem.tagline}
              </p>

              <p className="text-[18px] sm:text-[19px] leading-[1.8] text-[#2A3F5B] font-normal mb-8">
                {activeItem.description}
              </p>

              <div className="p-7 rounded-2xl bg-[#F4F8FB] border border-[#CBDDEB] mb-8">
                <div className="text-[13px] font-bold uppercase tracking-wider text-[#617594] mb-4">
                  Core Technical Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeItem.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#0B1728]">
                      <div className="w-5 h-5 rounded-full bg-[#E7EDF5] flex items-center justify-center text-[#617594] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Impact Snippet */}
              <div className="p-6 rounded-2xl bg-[#0B1728] text-white border border-[#1B2F4A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider mb-1">
                    Verified Deployment
                  </div>
                  <p className="text-[15px] text-[#CBDDEB] leading-relaxed max-w-[50ch]">
                    {activeItem.realWorldExample}
                  </p>
                </div>
                <div className="shrink-0 bg-[#0E1D31] px-5 py-3.5 rounded-xl border border-[#1B2F4A]">
                  <div className="text-[11px] text-[#93C5FD] font-medium">Outcome Metric</div>
                  <div className="text-[17px] font-bold text-white mt-0.5">{activeItem.stat}</div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-8 border-t border-[#CBDDEB] flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate("client-reviews")}
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-[#617594] hover:text-[#50637F] cursor-pointer"
                >
                  <span>See case study implementations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("schedule-demo")}
                  className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[15px] sm:text-[16px] font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(97,117,148,0.3)] transition-colors cursor-pointer"
                >
                  Request a system consultation
                </button>
              </div>

            </div>

          </div>

          {/* Blueprint Visualization: How Droppfloww Connects Everything */}
          <div className="bg-[#0B1728] text-white rounded-3xl p-10 sm:p-16 border border-[#1B2F4A] mb-24 relative overflow-hidden">
            <div className="max-w-[720px] mb-12 relative z-10">
              <div className="text-[12px] font-bold text-[#8DB8E0] uppercase tracking-[0.16em] mb-3">
                System Integration Paradigm
              </div>
              <h3 className="text-[32px] sm:text-[44px] font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                We connect your real-world inputs to automated operational outputs.
              </h3>
              <p className="text-[16px] text-[#9CB5CE] leading-relaxed">
                Most companies operate in a messy reality: WhatsApp chats, paper manifests, Excel spreadsheets, and legacy ERP databases. Droppfloww builds the quiet engine in the middle.
              </p>
            </div>

            {/* Pipeline Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              <div className="p-6 rounded-2xl bg-[#0E1D31] border border-[#1B2F4A]">
                <div className="text-[11px] font-mono text-[#8DB8E0] uppercase tracking-wider mb-2">
                  01. INGESTION LAYER
                </div>
                <div className="text-[18px] font-bold text-white mb-3">
                  Messy Real-World Sources
                </div>
                <ul className="space-y-2 text-[14px] text-[#CBDDEB]">
                  <li>• WhatsApp driver/vendor messages</li>
                  <li>• PDF supplier invoices & BOQs</li>
                  <li>• Legacy AS400 / SQL database records</li>
                  <li>• Customer order emails & spreadsheets</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#14253D] border border-[#3E5F82]/50 shadow-lg">
                <div className="text-[11px] font-mono text-[#8DB8E0] uppercase tracking-wider mb-2">
                  02. DROPPFLOWW ENGINE
                </div>
                <div className="text-[18px] font-bold text-white mb-3">
                  Custom Normalized Logic
                </div>
                <ul className="space-y-2 text-[14px] text-white">
                  <li>• Automatic schema normalization</li>
                  <li>• Deterministic business rule audits</li>
                  <li>• Bidirectional exception routing</li>
                  <li>• Custom web consoles for your staff</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E1D31] border border-[#1B2F4A]">
                <div className="text-[11px] font-mono text-[#8DB8E0] uppercase tracking-wider mb-2">
                  03. EXECUTION LAYER
                </div>
                <div className="text-[18px] font-bold text-white mb-3">
                  Automated Operational Actions
                </div>
                <ul className="space-y-2 text-[14px] text-[#CBDDEB]">
                  <li>• One-tap mobile dispatch confirmations</li>
                  <li>• Real-time ERP ledger reconciliations</li>
                  <li>• Customer delivery notifications & tracking</li>
                  <li>• Verified accounting-ready invoices</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom Conversion Invitation */}
          <div className="bg-white rounded-3xl p-10 sm:p-16 border border-[#CBDDEB] text-center shadow-sm">
            <h3 className="text-[34px] sm:text-[44px] font-extrabold text-[#0B1728] tracking-tight mb-4">
              Wondering if your workflow can be automated?
            </h3>
            <p className="text-[18px] sm:text-[20px] text-[#1E2E42] font-normal max-w-[58ch] mx-auto mb-8 leading-relaxed">
              Send us a description of how your team handles operations today. We will evaluate technical feasibility and propose a concrete system architecture.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-9 py-4 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] transition-all cursor-pointer"
              >
                Schedule a system scoping call
              </button>
              <button
                type="button"
                onClick={() => onNavigate("how-we-work")}
                className="inline-flex items-center justify-center bg-white hover:bg-[#E7EDF5] text-[#617594] text-[16px] font-bold px-8 py-4 rounded-full border border-[#617594] transition-all cursor-pointer"
              >
                Learn our consulting process
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
