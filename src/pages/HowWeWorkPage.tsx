import React, { useMemo } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, FileCode2, Terminal } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { getHowWeWorkContent } from "../data/pagesTranslations";

interface HowWeWorkPageProps {
  onNavigate: (page: string) => void;
}

const PRINCIPLE_ICONS = [FileCode2, Terminal, ShieldCheck, HeartHandshake];

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const content = useMemo(() => getHowWeWorkContent(language), [language]);

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] selection:bg-[#EAF2F8] selection:text-[#0B1728]">
      {/* Editorial Header Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 bg-[#0B1728] text-white overflow-hidden border-b border-[#1B2F4A]">
        {/* Subtle Atmospheric Gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 75% 25%, rgba(62, 95, 130, 0.45) 0%, transparent 65%), radial-gradient(ellipse at 25% 85%, rgba(141, 184, 224, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[#93C5FD] text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>{content.badge}</span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-8">
              {content.title}
            </h1>

            <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal max-w-[68ch] mb-10">
              {content.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(97,117,148,0.3)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.4)] cursor-pointer"
              >
                <span>{content.ctaSchedule}</span>
                <ArrowRight className="w-4.5 h-4.5 ml-2" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("what-we-build")}
                className="inline-flex items-center justify-center bg-[#0E1D31] hover:bg-[#152943] text-white text-[16px] font-semibold px-7 py-4 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
              >
                <span>{content.ctaSystems}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Phases Breakdown */}
      <main className="py-20 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          <div className="max-w-[760px] mb-16">
            <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0B1728] tracking-tight leading-[1.12] mb-6">
              {content.phasesTitle}
            </h2>
            <p className="text-[19px] sm:text-[20px] text-[#1E2E42] leading-relaxed font-normal">
              {content.phasesSubtitle}
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {content.phases.map((phase) => (
              <div
                key={phase.step}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EAF2F8]">
                    <span className="text-[28px] font-mono font-extrabold text-[#617594]">
                      {language === "zh" ? `第 ${phase.step} 阶段` : `PHASE ${phase.step}`}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-[#E7EDF5] text-[#617594] text-[12px] font-bold uppercase tracking-wider">
                      {phase.timeline}
                    </span>
                  </div>

                  <h3 className="text-[24px] sm:text-[26px] font-extrabold text-[#0B1728] tracking-tight mb-4">
                    {phase.title}
                  </h3>

                  <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal mb-8">
                    {phase.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EAF2F8]">
                  <div className="text-[13px] font-bold uppercase tracking-wider text-[#617594] mb-3">
                    {language === "id"
                      ? "Hasil Kerja Konkret:"
                      : language === "zh"
                      ? "硬核技术交付物清单："
                      : language === "es"
                      ? "Entregables Concretos:"
                      : "Concrete Deliverables:"}
                  </div>
                  <ul className="space-y-2.5">
                    {phase.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-[#0B1728]">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#617594] shrink-0 mt-0.5" />
                        <span className="font-medium">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Studio Principles */}
          <div className="bg-[#0B1728] text-white rounded-3xl p-10 sm:p-16 border border-[#1B2F4A] mb-24">
            <div className="max-w-[720px] mb-12">
              <div className="text-[12px] font-bold text-[#38BDF8] uppercase tracking-[0.16em] mb-3">
                {language === "id"
                  ? "Filosofi Operasional Kami"
                  : language === "zh"
                  ? "工程作业哲学"
                  : language === "es"
                  ? "Filosofía Operativa"
                  : "Our Operating Philosophy"}
              </div>
              <h3 className="text-[32px] sm:text-[44px] font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                {content.principlesTitle}
              </h3>
              <p className="text-[18px] sm:text-[19px] text-[#CBDDEB] leading-relaxed font-normal">
                {content.principlesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.principles.map((principle, idx) => {
                const Icon = PRINCIPLE_ICONS[idx % PRINCIPLE_ICONS.length];
                return (
                  <div key={principle.title} className="p-8 rounded-2xl bg-[#0E1D31] border border-[#1B2F4A] hover:border-[#617594] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#14253D] border border-[#617594]/40 flex items-center justify-center text-[#93C5FD] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-[22px] font-bold text-white mb-3">
                      {principle.title}
                    </h4>
                    <p className="text-[16px] sm:text-[17px] text-[#CBDDEB] leading-relaxed font-normal">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Conversion Invitation */}
          <div className="bg-white rounded-3xl p-10 sm:p-16 border border-[#CBDDEB] text-center shadow-sm">
            <h3 className="text-[34px] sm:text-[44px] font-extrabold text-[#0B1728] tracking-tight mb-4">
              {content.bottomTitle}
            </h3>
            <p className="text-[18px] sm:text-[20px] text-[#1E2E42] font-normal max-w-[58ch] mx-auto mb-8 leading-relaxed">
              {content.bottomDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-9 py-4 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] transition-all cursor-pointer"
              >
                {content.bottomCta}
              </button>
              <button
                type="button"
                onClick={() => onNavigate("client-reviews")}
                className="inline-flex items-center justify-center bg-white hover:bg-[#E7EDF5] text-[#617594] text-[16px] font-bold px-8 py-4 rounded-full border border-[#617594] transition-all cursor-pointer"
              >
                {language === "id"
                  ? "Baca studi kasus klien"
                  : language === "zh"
                  ? "阅读客户实测案例"
                  : language === "es"
                  ? "Ver casos de éxito de clientes"
                  : "Read client case studies"}
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
