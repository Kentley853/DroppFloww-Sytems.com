import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { analytics } from "../config";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do we need to replace our existing software?",
      a: "Not necessarily. We first look at what can be connected or improved. If replacement makes sense, we'll explain why."
    },
    {
      q: "Is every project an AI project?",
      a: "No. Some problems need better workflows or straightforward software. We use AI where it adds useful capability."
    },
    {
      q: "What happens in a workflow review?",
      a: "We discuss one process, the tools involved, where it gets stuck and what a useful first improvement could be."
    },
    {
      q: "How long does a project take?",
      a: "It depends on the scope, integrations and review requirements. We agree on milestones after understanding the work."
    },
    {
      q: "What does it cost?",
      a: "We scope the project before quoting. Any ongoing hosting, software or model costs should be made clear separately."
    },
    {
      q: "How do you handle sensitive information?",
      a: "Access and data requirements are agreed before implementation. We aim to use only the information the workflow needs."
    },
    {
      q: "Who owns the code and provides support?",
      a: "Ownership, access, documentation and support are agreed in the project scope and contract."
    }
  ];

  const toggleAccordion = (idx: number) => {
    const nextVal = openIndex === idx ? null : idx;
    setOpenIndex(nextVal);
    if (nextVal !== null) {
      analytics.trackCtaClick(`faq_opened_${idx}`);
    }
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-36 border-b border-[#D7E3EE] bg-white scroll-mt-12"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Heading Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.18em]">
                <span>Frequently Asked Questions</span>
              </span>
            </div>
            <h2
              id="faq-heading"
              className="text-[40px] sm:text-[52px] lg:text-[58px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[1.05] mb-5"
            >
              Clear answers on how we operate.
            </h2>
            <p className="text-[19px] sm:text-[20px] leading-[1.7] text-[#1E2E42] font-normal mb-8">
              Straightforward answers about our scoping, software ownership, data security, and consulting process.
            </p>
            <div className="p-7 rounded-2xl bg-[#F8FAFD] border border-[#CBDDEB] text-[16px] sm:text-[17px] text-[#1E2E42] leading-relaxed font-normal shadow-xs">
              Have a specific workflow or question not covered here? We discuss technical feasibility directly during your walkthrough.
            </div>
          </motion.div>

          {/* Right Accordions Column */}
          <div className="lg:col-span-8 divide-y divide-[#CBDDEB] border-t border-b border-[#CBDDEB]">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="py-7"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] rounded-lg py-1 cursor-pointer"
                  >
                    <span className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] group-hover:text-[#617594] transition-colors leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#617594] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        role="region"
                        aria-labelledby={`faq-btn-${idx}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden mt-4 text-[18px] sm:text-[19px] leading-[1.75] text-[#2A3F5B] font-normal max-w-[68ch]"
                      >
                        <p className="pb-2">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
