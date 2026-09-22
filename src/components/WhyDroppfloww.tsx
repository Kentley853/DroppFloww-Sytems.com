import React from "react";
import { analytics } from "../config";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface WhyDroppflowwProps {
  onNavigate?: (page: string) => void;
}

export const WhyDroppfloww: React.FC<WhyDroppflowwProps> = ({ onNavigate }) => {
  const principles = [
    {
      num: "01",
      title: "Start with a specific problem.",
      body: "We don't sell sweeping digital transformations that take eighteen months to show a result. We pick one painful, high-friction workflow—like document extraction or order queuing—and solve it first."
    },
    {
      num: "02",
      title: "Keep useful tools.",
      body: "If your team knows how to use their current spreadsheet or dispatch calendar, we build bridges instead of demanding you abandon software your staff already understands."
    },
    {
      num: "03",
      title: "Keep people in control.",
      body: "Software and algorithms assist with classification, extraction and drafting. Critical business decisions, pricing estimates, and customer approvals always remain with your designated specialists."
    }
  ];

  return (
    <section
      id="why-droppfloww"
      className="py-24 md:py-36 bg-[#0B1728] text-white border-y border-[#172B44]"
      aria-labelledby="why-heading"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-[920px] mb-16 md:mb-20"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[12px] sm:text-[13px] font-bold text-[#93C5FD] uppercase tracking-[0.18em]">
              <span>Direct Engineering Model</span>
            </span>
          </div>
          <h2
            id="why-heading"
            className="text-[44px] sm:text-[60px] lg:text-[76px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-6"
          >
            You work with the people building it.
          </h2>
          <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal">
            We keep the conversation close to the work. You bring the context. We help turn it into a practical system, explain the architectural choices, and work through every detail with your team.
          </p>
        </motion.div>

        {/* Hairline Divider Rule */}
        <div className="w-full h-px bg-[#1A314E] mb-12" aria-hidden="true" />

        {/* Three Principles in Blue-Tinted Dark Navy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {principles.map((pr, idx) => (
            <motion.div
              key={pr.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0E1E34] rounded-2xl p-7 sm:p-8 border border-[#1C3352] hover:border-[#617594] hover:shadow-[0_8px_24px_rgba(97,117,148,0.2)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] text-[#38BDF8] mb-4 font-bold tracking-[0.18em] uppercase block">
                  Principle {pr.num}
                </span>
                <h3 className="text-[22px] sm:text-[24px] font-bold text-white mb-3.5 tracking-tight leading-snug">
                  {pr.title}
                </h3>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#CBDDEB] font-normal">
                  {pr.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Engagement Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 sm:p-10 rounded-2xl bg-[#0E1E34] border border-[#1C3352] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="max-w-[78ch]">
            <p className="text-[16px] sm:text-[18px] text-[#E2E8F0] leading-[1.7] font-normal">
              No account managers, sales reps, or outsourced implementation chains. When you have a question about how your data moves, you speak directly with the engineers responsible for the system.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              analytics.trackCtaClick("why_speak_builder");
              if (onNavigate) {
                onNavigate("schedule-demo");
              } else {
                document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2.5 bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full shadow-[0_4px_16px_rgba(97,117,148,0.3)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.4)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <span>Speak with a builder</span>
            <ArrowRight className="w-4.5 h-4.5 text-white" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
