import React from "react";
import { analytics } from "../config";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

interface WhyDroppflowwProps {
  onNavigate?: (page: string) => void;
}

export const WhyDroppfloww: React.FC<WhyDroppflowwProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  const reassuranceText: Record<string, string> = {
    en: "No account managers, sales reps, or outsourced implementation chains. When you have a question about how your data moves, you speak directly with the engineers responsible for the system.",
    id: "Tanpa perantara manajer akun, staf penjualan, atau rantai subkontraktor luar. Ketika Anda bertanya bagaimana data Anda diproses, Anda berdiskusi langsung dengan teknisi perekayasa sistem.",
    zh: "没有层层推诿的客户经理、推销专员或外包中介。当您对数据流向或系统逻辑有任何疑问，您面对面沟通的直接就是构建系统的核心工程师。",
    es: "Sin gestores de cuentas, representantes de ventas ni cadenas de implementación tercerizadas. Cuando tiene dudas sobre cómo se mueven sus datos, habla directamente con los ingenieros responsables del sistema.",
  };

  const principleLabel: Record<string, string> = {
    en: "Principle",
    id: "Prinsip",
    zh: "核心准则",
    es: "Principio",
  };

  const principles = [
    {
      num: "01",
      title: t("whyDroppfloww.p1Title", "Start with a specific problem."),
      body: t(
        "whyDroppfloww.p1Body",
        "We don't sell sweeping digital transformations that take eighteen months to show a result. We pick one painful, high-friction workflow—like document extraction or order queuing—and solve it first."
      ),
    },
    {
      num: "02",
      title: t("whyDroppfloww.p2Title", "Keep useful tools."),
      body: t(
        "whyDroppfloww.p2Body",
        "If your team knows how to use their current spreadsheet or dispatch calendar, we build bridges instead of demanding you abandon software your staff already understands."
      ),
    },
    {
      num: "03",
      title: t("whyDroppfloww.p3Title", "Keep people in control."),
      body: t(
        "whyDroppfloww.p3Body",
        "Software and algorithms assist with classification, extraction and drafting. Critical business decisions, pricing estimates, and customer approvals always remain with your designated specialists."
      ),
    },
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
              <span>{t("whyDroppfloww.badge", "Direct Engineering Model")}</span>
            </span>
          </div>
          <h2
            id="why-heading"
            className="text-[44px] sm:text-[60px] lg:text-[76px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-6"
          >
            {t("whyDroppfloww.headline", "You work with the people building it.")}
          </h2>
          <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal">
            {t("whyDroppfloww.lead", "We keep the conversation close to the work. You bring the context. We help turn it into a practical system, explain the architectural choices, and work through every detail with your team.")}
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
                <span className="text-[12px] text-[#93C5FD] mb-4 font-bold tracking-[0.18em] uppercase block">
                  {principleLabel[language] || principleLabel.en} {pr.num}
                </span>
                <h3 className="text-[22px] sm:text-[24px] font-bold text-white mb-3.5 tracking-tight leading-snug">
                  {pr.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#CBDDEB] font-normal">
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
              {reassuranceText[language] || reassuranceText.en}
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
            <span>{t("whyDroppfloww.ctaSpeak", "Speak with a builder")}</span>
            <ArrowRight className="w-4.5 h-4.5 text-white" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

