import React from "react";
import { analytics } from "../config";
import { MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface EditorialStoryProps {
  onOpenReviews: () => void;
  onNavigate?: (page: string) => void;
}

export const EditorialStorySection: React.FC<EditorialStoryProps> = ({ onOpenReviews, onNavigate }) => {
  const handleReviewsClick = () => {
    analytics.trackCtaClick("story_open_reviews");
    if (onNavigate) {
      onNavigate("client-reviews");
    } else {
      onOpenReviews();
    }
  };

  return (
    <section
      id="client-story"
      className="py-26 md:py-40 bg-[#0B1728] text-white overflow-hidden relative border-y border-[#1B2F4A]"
      aria-labelledby="client-story-title"
    >
      {/* Soft atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(62, 95, 130, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(141, 184, 224, 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Client Story Section */}
        <div className="max-w-[1140px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[12px] font-bold text-[#8DB8E0] uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DB8E0]" />
              <span>Verified Client Story • Infrastructure & Energy</span>
            </span>
          </motion.div>

          <motion.h2
            id="client-story-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-white tracking-[-0.035em] leading-[1.12] mb-12"
          >
            “Estimating used to consume our entire senior engineering team for days before tender deadlines. Now the calculations are verifiable in minutes, with every number traced to an approved drawing.”
          </motion.h2>

          <div className="w-full h-px bg-[#1B2F4A] mb-12" aria-hidden="true" />

          {/* Client Attribution Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-5">
              <div className="text-[22px] sm:text-[24px] font-extrabold text-white mb-1 tracking-tight">
                Ir. H. Prabowo
              </div>
              <div className="text-[15px] text-[#93C5FD] mb-1 font-medium">
                Associate Director of Pre-Construction Operations
              </div>
              <div className="text-[16px] font-bold text-[#E2E8F0]">
                PT Bestindo Putra Mandiri
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="text-[13px] text-[#93C5FD] font-bold uppercase tracking-wider mb-2">
                Deployed Solution
              </div>
              <p className="text-[16px] sm:text-[17px] text-[#E2E8F0] leading-[1.7] font-normal">
                Automated pipeline takeoff engine connecting CAD drawings, Bill of Quantities (BOQ), and internal project budget (RAP) calculations.
              </p>
            </div>

            <div className="md:col-span-3 flex md:justify-end">
              <button
                type="button"
                onClick={handleReviewsClick}
                className="inline-flex items-center gap-2.5 bg-[#617594] hover:bg-[#50637F] text-white text-[15px] sm:text-[16px] font-bold px-7 py-4 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none cursor-pointer"
              >
                <MessageSquare className="w-4.5 h-4.5 text-white" />
                <span>Explore all case stories</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Editorial Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-7 rounded-2xl bg-[#0E1D31] border border-[#1B2F4A] text-[15px] sm:text-[16px] text-[#CBDDEB] leading-relaxed flex items-center justify-between flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
            <span className="text-[#E2E8F0]">
              Every case study and quote featured on Droppfloww represents verified operational engagements under mutual non-disclosure compliance.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
