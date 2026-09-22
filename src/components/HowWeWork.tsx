import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { analytics } from "../config";

interface HowWeWorkProps {
  onNavigate?: (page: string) => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: "01",
      title: "Review the workflow.",
      description: "Show us where time gets lost and what your team uses today.",
      deliverable: "Bottleneck mapping & manual re-entry audit"
    },
    {
      num: "02",
      title: "Define the right first build.",
      description: "Agree on the scope, responsibilities and what improvement should look like.",
      deliverable: "Fixed-scope architectural plan & milestone agreement"
    },
    {
      num: "03",
      title: "Build with your team.",
      description: "Test the system against real tasks and make the changes that matter.",
      deliverable: "Working iterations evaluated against live operational scenarios"
    },
    {
      num: "04",
      title: "Hand it over properly.",
      description: "Document the workflow, help your team use it, and agree on ongoing support.",
      deliverable: "Complete documentation, staff training, and maintenance plan"
    }
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-36 border-b border-[#D7E3EE] bg-[#F3F7FA]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-[880px] mb-16 md:mb-20"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.18em]">
              <span>Disciplined Engagement</span>
            </span>
          </div>
          <h2
            id="process-heading"
            className="text-[44px] sm:text-[58px] lg:text-[72px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[0.98] mb-6"
          >
            Understand first. Build second.
          </h2>
          <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#1E2E42] font-normal max-w-[62ch]">
            Practical software implementation grounded in your team's real daily tasks, not abstract roadmaps.
          </p>
        </motion.div>

        {/* Hairline Divider Rule */}
        <div className="w-full h-px bg-[#CBDDEB] mb-12" aria-hidden="true" />

        {/* 4-Step Sequence as Refined Blue-Accented Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((st, idx) => (
            <motion.div
              key={st.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#CBDDEB] hover:border-[#617594] shadow-2xs hover:shadow-[0_6px_20px_rgba(97,117,148,0.08)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-bold text-[#617594] tracking-[0.18em] uppercase">
                    Stage {st.num}
                  </span>
                  {idx < 3 && (
                    <ArrowRight className="w-4.5 h-4.5 text-[#617594] hidden lg:block" aria-hidden="true" />
                  )}
                </div>

                <h3 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] mb-3 leading-snug tracking-tight">
                  {st.title}
                </h3>

                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#1E2E42] font-normal mb-6">
                  {st.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D7E3EE]">
                <span className="text-[#2A3F5B] block font-bold text-[12px] uppercase tracking-wider mb-1">Deliverable</span>
                <span className="font-bold text-[#617594] text-[14px] sm:text-[15px] leading-snug block">{st.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-8 sm:p-10 rounded-2xl bg-white border border-[#CBDDEB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xs"
        >
          <p className="text-[16px] sm:text-[18px] text-[#1E2E42] font-normal max-w-[76ch] leading-[1.7]">
            We do not promise to ship complex production infrastructure in seconds. Meaningful operational systems require disciplined scoping, security validation, and thorough user acceptance testing.
          </p>
          <button
            type="button"
            onClick={() => {
              analytics.trackCtaClick("process_start_review");
              if (onNavigate) {
                onNavigate("schedule-demo");
              } else {
                document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full shadow-[0_4px_16px_rgba(97,117,148,0.25)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.35)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            Start with step one
          </button>
        </motion.div>

      </div>
    </section>
  );
};
