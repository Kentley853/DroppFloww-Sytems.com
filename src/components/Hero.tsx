import React from "react";
import { analytics } from "../config";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { SectorDemoConsole } from "./SectorDemoConsole";
import { useLanguage } from "../i18n/LanguageContext";

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  const handleCta = (page: string, ctaName: string) => {
    analytics.trackCtaClick(ctaName);
    if (onNavigate) {
      onNavigate(page);
    } else {
      const el = document.getElementById(page === "schedule-demo" ? "book-call" : "services");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const directLineLabels: Record<string, string> = {
    en: "Direct line with Founder & CEO Kentley:",
    id: "Jalur langsung bersama Pendiri & CEO Kentley:",
    zh: "创始人兼首席执行官 Kentley 直通联系：",
    es: "Línea directa con el Fundador y CEO Kentley:",
  };

  return (
    <section
      id="hero"
      className="relative pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden bg-[#FAFBFD] border-b border-[#CBDDEB]"
      aria-labelledby="hero-title"
    >
      {/* Figma-Inspired Soft Atmospheric Background (Ethereal Blue Gradient Mesh) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(203, 221, 235, 0.55) 0%, rgba(234, 242, 248, 0.4) 40%, rgba(250, 251, 253, 0) 80%), radial-gradient(circle at 10% 20%, rgba(141, 184, 224, 0.15) 0%, transparent 45%), radial-gradient(circle at 90% 30%, rgba(62, 95, 130, 0.12) 0%, transparent 45%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Cinematic Narrative Block */}
        <div className="max-w-[1180px] mb-16 md:mb-24">
          
          {/* Brand Intro Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[#617594] text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.14em] mb-8 shadow-2xs"
          >
            <img src="/df-monogram.svg" alt="" className="w-4.5 h-4.5 object-contain" />
            <span>{t("hero.badge", "Droppfloww Systems • Custom Operational Engineering")}</span>
          </motion.div>

          {/* Monumental Headline */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-[54px] sm:text-[76px] md:text-[98px] lg:text-[118px] xl:text-[130px] font-extrabold text-[#0B1728] tracking-[-0.045em] leading-[0.92] mb-12 md:mb-16"
          >
            {t("hero.title", "Do more without hiring more.")}
          </motion.h1>

          {/* Clear Typographic Hierarchy Split */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline"
          >
            {/* Dominant Subtitle Statement */}
            <div className="lg:col-span-6">
              <p className="text-[26px] sm:text-[32px] md:text-[38px] font-extrabold text-[#0B1728] tracking-[-0.03em] leading-[1.2]">
                {t("hero.subtitleLead", "We find where your operations lose time, then engineer the system that")}{" "}
                <span className="text-[#617594]">{t("hero.subtitleHighlight", "removes it.")}</span>
              </p>
            </div>

            {/* Explanatory Body Copy & Refined CTAs */}
            <div className="lg:col-span-6">
              <p className="text-[18px] sm:text-[20px] md:text-[21px] leading-[1.7] text-[#1E2E42] font-normal max-w-[58ch] mb-10">
                {t("hero.body", "Droppfloww Systems builds custom operational software around how your business already works—connecting fragmented tools, eliminating repetitive clerical drag, and keeping important decisions in human hands.")}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="hero-primary-cta"
                  type="button"
                  onClick={() => handleCta("schedule-demo", "hero_schedule_demo")}
                  className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] sm:text-[17px] font-bold px-8 sm:px-9 py-4 sm:py-4.5 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.28)] hover:shadow-[0_8px_26px_rgba(97,117,148,0.38)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] cursor-pointer"
                >
                  <span>{t("hero.primaryCta", "Schedule a walkthrough")}</span>
                  <ArrowRight className="w-4.5 h-4.5 ml-2" />
                </button>

                <button
                  id="hero-secondary-cta"
                  type="button"
                  onClick={() => handleCta("what-we-build", "hero_view_systems")}
                  className="group inline-flex items-center gap-2 text-[16px] sm:text-[17px] font-bold text-[#0B1728] hover:text-[#617594] bg-white hover:bg-[#E7EDF5]/40 border border-[#CBDDEB] hover:border-[#617594] rounded-full px-7 sm:px-8 py-4 sm:py-4.5 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  <span>{t("hero.secondaryCta", "See what we build")}</span>
                  <span className="text-[#617594] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </button>
              </div>

              {/* Founder Direct Line Channel */}
              <div className="mt-8 text-[14px] sm:text-[15px] text-[#1E2E42] font-normal flex flex-wrap items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span>{directLineLabels[language] || directLineLabels.en}</span>
                <a
                  href="https://wa.me/6285820467085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#617594] hover:text-[#50637F] font-bold underline decoration-[#CBDDEB] underline-offset-2 transition-colors"
                >
                  WhatsApp (+62 858-2046-7085)
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Hairline Divider */}
        <div className="w-full h-px bg-[#CBDDEB] mb-10 md:mb-14" aria-hidden="true" />

        {/* Hero Interactive System Visual Console */}
        <motion.div
          id="hero-case-study-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <SectorDemoConsole />
        </motion.div>

      </div>
    </section>
  );
};

