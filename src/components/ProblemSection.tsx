import React from "react";
import { motion } from "motion/react";

export const ProblemSection: React.FC = () => {
  const problemPoints = [
    {
      num: "01",
      title: "Double-handling information",
      detail: "Re-keying invoice items, customer addresses, or material schedules between inboxes, project drives, and accounting software."
    },
    {
      num: "02",
      title: "Chasing file revisions",
      detail: "Searching through email threads to find which drawing was actually signed off, or which spreadsheet has the final pricing."
    },
    {
      num: "03",
      title: "Stalled internal handoffs",
      detail: "Tasks sitting in someone's inbox waiting for manual notification, without visibility into what is blocking next week's dispatch."
    }
  ];

  return (
    <section
      id="operational-problem"
      className="py-24 md:py-36 bg-[#F3F7FA] border-b border-[#D7E3EE]"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.18em]">
            <span>Operational Reality</span>
          </span>
        </motion.div>

        {/* Large Editorial Headline & Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-18 items-baseline mb-16 md:mb-24"
        >
          <div className="lg:col-span-6">
            <h2
              id="problem-heading"
              className="text-[46px] sm:text-[62px] lg:text-[76px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[0.98]"
            >
              Less repetitive work.<br />
              <span className="text-[#617594]">More useful work.</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-[26px] sm:text-[30px] font-extrabold text-[#0B1728] mb-5 tracking-tight">
              The work between the work.
            </h3>
            <p className="text-[19px] sm:text-[20px] md:text-[21px] leading-[1.7] text-[#1E2E42] max-w-[62ch] mb-6 font-normal">
              Copying the same details into another spreadsheet. Looking for the latest file. Following up on an approval that should have moved yesterday. Small tasks quietly become a massive portion of the week.
            </p>
            <div className="flex items-center gap-2.5 text-[18px] sm:text-[19px] font-bold text-[#0B1728] tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-[#617594]" />
              <span>We start right there.</span>
            </div>
          </div>
        </motion.div>

        {/* Subtle Horizontal Hairline Divider Rule */}
        <div className="w-full h-px bg-[#CBDDEB] mb-14" aria-hidden="true" />

        {/* Three Polished Blue-Tinted Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problemPoints.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#CBDDEB] hover:border-[#617594] shadow-2xs hover:shadow-[0_6px_20px_rgba(97,117,148,0.08)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[12px] font-bold tracking-[0.18em] text-[#617594] uppercase mb-4 block">
                  Problem {item.num}
                </span>
                <h4 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] mb-3 leading-snug tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#1E2E42] font-normal">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
