import React from "react";
import { ArrowRight, Check, X, ShieldCheck, Zap, Users2, Code2, Award, Sparkles, MessageCircle, Mail, Phone } from "lucide-react";
import { analytics } from "../config";

interface WhyDroppflowwPageProps {
  onNavigate: (page: string) => void;
}

const COMPARISON = [
  {
    attribute: "Team Composition",
    droppfloww: "Senior software engineers & systems architects directly on your project.",
    traditional: "Senior partners sell the project; junior associates execute the code.",
    genericSaas: "No custom team; you adapt your company to rigid off-the-shelf software.",
  },
  {
    attribute: "Turnaround Time",
    droppfloww: "Working prototype in 10 days. Production deployment in 4–6 weeks.",
    traditional: "6–12 months of preliminary requirements gathering and slide decks.",
    genericSaas: "Instant sign-up, but 6+ months of messy customization and plugin hacking.",
  },
  {
    attribute: "Code & IP Ownership",
    droppfloww: "100% full source code ownership. Clean TypeScript, standard cloud hosting.",
    traditional: "Often proprietary framework lock-in with ongoing licensing fees.",
    genericSaas: "Zero ownership. If you stop paying monthly, your tools and data vanish.",
  },
  {
    attribute: "Integration Approach",
    droppfloww: "Engineered specifically to connect your existing tools without rip-and-replace.",
    traditional: "Typically demands ripping out your existing stack for a single $1M+ ERP.",
    genericSaas: "Limited to supported marketplace plugins; custom edge cases unsupported.",
  },
  {
    attribute: "Cost Structure",
    droppfloww: "Transparent fixed-milestone pricing tied to tangible system deliverables.",
    traditional: "Open-ended billable hourly rates that punish efficiency.",
    genericSaas: "Per-seat recurring monthly pricing that penalizes company growth.",
  },
];

export const WhyDroppflowwPage: React.FC<WhyDroppflowwPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] selection:bg-[#EAF2F8] selection:text-[#0B1728]">
      {/* Editorial Header Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 bg-[#0B1728] text-white overflow-hidden border-b border-[#1B2F4A]">
        {/* Subtle Atmospheric Gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(62, 95, 130, 0.45) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(141, 184, 224, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[#93C5FD] text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>Studio Philosophy & Advantage</span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-8">
              You work with the engineers who actually build your system.
            </h1>

            <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal max-w-[68ch] mb-10">
              Droppfloww is a boutique technology studio founded on a single conviction: growing companies don't need another generic SaaS subscription or an army of junior management consultants. They need serious custom operational software built by engineers who understand real business.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(97,117,148,0.3)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.4)] cursor-pointer"
              >
                <span>Speak directly with our founder</span>
                <ArrowRight className="w-4.5 h-4.5 ml-2" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("client-reviews")}
                className="inline-flex items-center justify-center bg-[#0E1D31] hover:bg-[#152943] text-white text-[16px] font-semibold px-7 py-4 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
              >
                <span>Read client reviews</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Comparison */}
      <main className="py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          {/* Studio Principles Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#E7EDF5] flex items-center justify-center text-[#617594] font-bold mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-3">
                No Junior Delegation
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal">
                Big agencies send their best directors to pitch you, then quietly hand off your technical architecture to unvetted junior staff. At Droppfloww, every line of code and database schema is crafted by experienced systems engineers.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#E7EDF5] flex items-center justify-center text-[#617594] font-bold mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-3">
                Software Built to Outlast Us
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal">
                We use standard, enterprise-grade technologies: TypeScript, Node.js, PostgreSQL, and clean REST/GraphQL APIs. No weird proprietary low-code platforms that break when an API changes or hold your data hostage.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#E7EDF5] flex items-center justify-center text-[#617594] font-bold mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-3">
                Human Decisions Stay Human
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal">
                We automate clerical re-entry, data synchronization, and document extraction so your people can focus on customer relationships, supplier negotiations, and complex strategic judgments.
              </p>
            </div>

          </div>

          {/* Detailed Comparison Table */}
          <div className="mb-24">
            <div className="max-w-[760px] mb-12">
              <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0B1728] tracking-tight leading-[1.12] mb-4">
                How Droppfloww compares.
              </h2>
              <p className="text-[19px] sm:text-[20px] text-[#1E2E42] font-normal leading-relaxed">
                Why operational leaders choose our custom engineering studio over traditional alternatives.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-[#CBDDEB] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[760px]">
                  <thead>
                    <tr className="border-b border-[#CBDDEB] bg-[#F4F8FB]">
                      <th className="p-6 text-[15px] font-bold text-[#0B1728] w-1/4">
                        Comparison Metric
                      </th>
                      <th className="p-6 text-[15px] font-extrabold text-[#617594] bg-[#E7EDF5] border-x border-[#CBDDEB] w-1/3">
                        Droppfloww Systems
                      </th>
                      <th className="p-6 text-[15px] font-semibold text-[#52667A] w-1/5">
                        Traditional Consultancies
                      </th>
                      <th className="p-6 text-[15px] font-semibold text-[#52667A] w-1/5">
                        Generic Off-the-Shelf SaaS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#CBDDEB]">
                    {COMPARISON.map((row) => (
                      <tr key={row.attribute} className="hover:bg-[#FBFDFF] transition-colors">
                        <td className="p-6 text-[16px] font-bold text-[#0B1728]">
                          {row.attribute}
                        </td>
                        <td className="p-6 text-[15px] sm:text-[16px] text-[#0B1728] bg-[#F8FAFD] border-x border-[#CBDDEB] font-medium leading-relaxed">
                          <div className="flex items-start gap-2.5">
                            <Check className="w-4.5 h-4.5 text-[#617594] shrink-0 mt-0.5" />
                            <span>{row.droppfloww}</span>
                          </div>
                        </td>
                        <td className="p-6 text-[15px] text-[#52667A] leading-relaxed">
                          {row.traditional}
                        </td>
                        <td className="p-6 text-[15px] text-[#52667A] leading-relaxed">
                          {row.genericSaas}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Founder Profile & Direct Line (Dark Navy Anchor) */}
          <div className="bg-[#0B1728] text-white rounded-3xl p-10 sm:p-16 border border-[#1B2F4A] mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-4">
                <div className="relative mx-auto lg:mx-0 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-[#0E1D31] border-2 border-[#617594] p-2 flex flex-col items-center justify-center text-center shadow-xl">
                  <div className="w-20 h-20 rounded-full bg-[#1B2F4A] flex items-center justify-center text-[#93C5FD] font-extrabold text-[32px] mb-3">
                    K
                  </div>
                  <div className="text-[20px] font-extrabold text-white">Kentley</div>
                  <div className="text-[13px] text-[#93C5FD] font-medium mt-0.5">Founder & CEO</div>
                  <div className="text-[12px] text-[#CBDDEB] mt-2 font-mono">wongkentley@gmail.com</div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="text-[12px] font-bold text-[#38BDF8] uppercase tracking-[0.16em] mb-3">
                  Leadership & Accountability
                </div>
                <h3 className="text-[28px] sm:text-[40px] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                  "We don't build software to sell equity. We build tools that make businesses run better."
                </h3>
                <p className="text-[18px] sm:text-[19px] text-[#CBDDEB] leading-[1.8] font-normal mb-8">
                  As Founder & CEO, I personally oversee technical architecture for every client engagement. When you schedule a walkthrough with Droppfloww, you speak directly with me—not a commission-incentivized business development rep. We take pride in craftsmanship, speed, and real operational longevity.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/6285820467085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B1728] text-[15px] font-bold px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct (+62 858-2046-7085)</span>
                  </a>

                  <a
                    href="mailto:wongkentley@gmail.com"
                    className="inline-flex items-center gap-2 bg-[#0E1D31] hover:bg-[#152943] text-white text-[15px] font-semibold px-6 py-3.5 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-[#93C5FD]" />
                    <span>wongkentley@gmail.com</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Conversion Invitation */}
          <div className="bg-white rounded-3xl p-10 sm:p-16 border border-[#CBDDEB] text-center shadow-sm">
            <h3 className="text-[34px] sm:text-[44px] font-extrabold text-[#0B1728] tracking-tight mb-4">
              Let's evaluate your operational stack.
            </h3>
            <p className="text-[18px] sm:text-[20px] text-[#1E2E42] font-normal max-w-[58ch] mx-auto mb-8 leading-relaxed">
              No pressure, no hard sell. In 30 minutes, we will tell you honestly whether custom software can unlock meaningful operating leverage for your team.
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
                onClick={() => onNavigate("what-we-build")}
                className="inline-flex items-center justify-center bg-white hover:bg-[#E7EDF5] text-[#617594] text-[16px] font-bold px-8 py-4 rounded-full border border-[#617594] transition-all cursor-pointer"
              >
                Explore systems we build
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
