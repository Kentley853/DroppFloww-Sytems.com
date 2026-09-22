import React, { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { analytics } from "../config";
import { useLanguage } from "../i18n/LanguageContext";
import { getSelectedSystems, SelectedSystem } from "../data/whatWeBuildSystems";

interface WhatWeBuildProps {
  onNavigate?: (page: string) => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const systems: SelectedSystem[] = useMemo(() => {
    return getSelectedSystems(language);
  }, [language]);

  const current = systems[activeTab] || systems[0];

  const uiCopy = useMemo(() => {
    const data: Record<
      string,
      {
        badge: string;
        title: string;
        subtitle: string;
        impactLabel: string;
        capabilitiesLabel: string;
        walkthroughCta: string;
        beforeLabel: string;
        afterLabel: string;
        philosophyLabel: string;
        bottomPrompt: string;
        bottomText: string;
        bottomCta: string;
      }
    > = {
      en: {
        badge: "Custom Software Architecture",
        title: "Custom systems built for real operations.",
        subtitle:
          "Software engineered around the way your people already work: eliminating repetitive clerical drag, connecting fragmented tools, and keeping everyday decisions in human hands.",
        impactLabel: "Measured Operational Impact",
        capabilitiesLabel: "Core Capabilities",
        walkthroughCta: "Schedule a walkthrough for this system",
        beforeLabel: "Before Droppfloww",
        afterLabel: "With Droppfloww",
        philosophyLabel: "Our Engineering Philosophy",
        bottomPrompt: "Have a unique internal process?",
        bottomText:
          "We begin by studying your existing documents, spreadsheets, and bottlenecks. Then we engineer the software directly with the people doing the work.",
        bottomCta: "Review your workflow with Kentley",
      },
      id: {
        badge: "Arsitektur Perangkat Lunak Kustom",
        title: "Sistem kustom yang dibangun untuk operasional nyata.",
        subtitle:
          "Perangkat lunak yang direkayasa mengikuti alur kerja tim Anda: meniadakan beban klerikal yang berulang, menghubungkan alat yang terpisah, dan menjaga kendali keputusan penting tetap di tangan manusia.",
        impactLabel: "Dampak Operasional Terukur",
        capabilitiesLabel: "Kapabilitas Utama",
        walkthroughCta: "Jadwalkan tinjauan sistem ini",
        beforeLabel: "Sebelum Droppfloww",
        afterLabel: "Bersama Droppfloww",
        philosophyLabel: "Filosofi Rekayasa Kami",
        bottomPrompt: "Punya proses internal yang unik?",
        bottomText:
          "Kami mulai dengan mempelajari dokumen, spreadsheet, dan hambatan Anda saat ini. Kemudian kami membangun perangkat lunak langsung bersama orang-orang yang menjalankan pekerjaan tersebut.",
        bottomCta: "Tinjau alur kerja bersama Kentley",
      },
      zh: {
        badge: "定制软件系统架构",
        title: "为真实业务运营量身铸造的定制软件系统。",
        subtitle:
          "紧密契合您团队既有工作习惯而精细工程化的系统：消除繁琐机械的人工誊抄，打通割裂分散的工具数据，让关键决策始终牢牢掌握在专业人员手中。",
        impactLabel: "可量化的运营成效",
        capabilitiesLabel: "核心系统功能",
        walkthroughCta: "预约该系统的专属演示",
        beforeLabel: "引入 Droppfloww 前",
        afterLabel: "使用 Droppfloww 系统后",
        philosophyLabel: "我们的工程设计理念",
        bottomPrompt: "拥有独特的内部业务流程？",
        bottomText:
          "我们首先深入剖析您现有的文档、报表与堵点。随后与一线具体操盘的业务骨干并肩构建系统。",
        bottomCta: "与创始人 Kentley 深度评估业务流程",
      },
      es: {
        badge: "Arquitectura de Software a Medida",
        title: "Sistemas a medida construidos para operaciones reales.",
        subtitle:
          "Software diseñado en función de cómo ya trabaja su equipo: eliminando la fricción administrativa repetitiva, conectando herramientas fragmentadas y manteniendo las decisiones clave en manos humanas.",
        impactLabel: "Impacto Operativo Medido",
        capabilitiesLabel: "Capacidades Clave",
        walkthroughCta: "Programar una demostración de este sistema",
        beforeLabel: "Antes de Droppfloww",
        afterLabel: "Con Droppfloww",
        philosophyLabel: "Nuestra Filosofía de Ingeniería",
        bottomPrompt: "¿Tiene un proceso interno único?",
        bottomText:
          "Comenzamos estudiando sus documentos, hojas de cálculo y cuellos de botella actuales. Luego desarrollamos el software directamente con las personas que realizan el trabajo.",
        bottomCta: "Revise su flujo de trabajo con Kentley",
      },
    };

    return data[language] || data.en;
  }, [language]);

  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-[#FAFBFD] border-b border-[#D8E0EA]"
      aria-labelledby="what-we-build-title"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-[920px] mb-12 md:mb-16"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDF5] border border-[#CBDDEB] text-[12px] sm:text-[13px] font-bold text-[#617594] uppercase tracking-[0.18em]">
              <span>{uiCopy.badge}</span>
            </span>
          </div>
          <h2
            id="what-we-build-title"
            className="text-[44px] sm:text-[58px] lg:text-[72px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[1.02] mb-6"
          >
            {uiCopy.title}
          </h2>
          <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#1E2E42] font-normal max-w-[64ch]">
            {uiCopy.subtitle}
          </p>
        </motion.div>

        {/* Minimalist System Switcher Tabs */}
        <div className="mb-10">
          <div
            className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none"
            role="tablist"
            aria-label="Selected Systems"
          >
            {systems.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  id={`system-tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`system-panel-${item.id}`}
                  onClick={() => {
                    setActiveTab(idx);
                    analytics.trackCtaClick(`system_select_${item.id}`);
                  }}
                  className={`py-3 px-5 sm:px-6 rounded-full text-[14px] sm:text-[15px] font-bold transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] cursor-pointer ${
                    isActive
                      ? "bg-[#617594] text-white shadow-[0_4px_14px_rgba(97,117,148,0.25)] border border-[#617594]"
                      : "bg-white text-[#2A3F5B] hover:text-[#617594] hover:bg-[#E7EDF5]/40 border border-[#CBDDEB]"
                  }`}
                >
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active System Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            id={`system-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`system-tab-${current.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-[#D7E3EE] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_8px_30px_rgba(11,23,40,0.05)]"
          >
            {/* Top Headline */}
            <div className="max-w-[920px] mb-12 pb-8 border-b border-[#E7EDF5]">
              <h3 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0B1728] tracking-[-0.025em] leading-[1.1] mb-5">
                {current.headline}
              </h3>
              <p className="text-[18px] sm:text-[20px] leading-[1.7] text-[#1E2E42] font-normal max-w-[70ch]">
                {current.summary}
              </p>
            </div>

            {/* Visual Photography & System Identity Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 pb-12 border-b border-[#E7EDF5]">
              <div className="lg:col-span-8 relative overflow-hidden rounded-2xl border border-[#D7E3EE] bg-[#E7EDF5]/40 group">
                <img
                  src={current.imageUrl}
                  alt={current.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1728]/85 via-[#0B1728]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <p className="text-[16px] sm:text-[17px] text-white/95 font-medium max-w-[55ch] leading-relaxed">
                    {current.imageCaption}
                  </p>
                </div>
              </div>

              {/* Fast Stats & Capabilities Column */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                <div className="p-7 rounded-2xl bg-[#F8FAFD] border border-[#D7E3EE]">
                  <div className="text-[12px] font-bold text-[#617594] uppercase tracking-wider mb-2">
                    {uiCopy.impactLabel}
                  </div>
                  <div className="text-[44px] sm:text-[50px] font-extrabold text-[#617594] tracking-tight leading-none mb-2.5">
                    {current.keyMetric}
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-[#2A3F5B] font-medium leading-relaxed">
                    {current.keyMetricLabel}
                  </p>
                </div>

                <div>
                  <div className="text-[16px] font-bold text-[#0B1728] mb-3.5">
                    {uiCopy.capabilitiesLabel}
                  </div>
                  <div className="space-y-2.5">
                    {current.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-3 text-[15px] sm:text-[16px] text-[#0B1728] font-medium"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#617594] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href="#book-call"
                    onClick={() =>
                      analytics.trackCtaClick(`system_cta_${current.id}`)
                    }
                    className="inline-flex items-center gap-2.5 text-[15px] sm:text-[16px] font-bold text-[#617594] hover:text-[#50637F] transition-colors group cursor-pointer"
                  >
                    <span>{uiCopy.walkthroughCta}</span>
                    <ArrowRight className="w-4.5 h-4.5 text-[#617594] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Grounded Before & With Droppfloww Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Before Card */}
              <div className="p-8 sm:p-9 rounded-2xl bg-[#F8FAFD] border border-[#CBDDEB] flex flex-col justify-between">
                <div>
                  <div className="text-[12px] font-bold text-[#62768D] uppercase tracking-wider mb-3">
                    {uiCopy.beforeLabel}
                  </div>
                  <h4 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] leading-snug mb-3">
                    {current.beforeHeadline}
                  </h4>
                  <p className="text-[15px] sm:text-[16px] text-[#2A3F5B] leading-[1.7] font-normal">
                    {current.beforeDetail}
                  </p>
                </div>
              </div>

              {/* With Droppfloww Card */}
              <div className="p-8 sm:p-9 rounded-2xl bg-white border-2 border-[#617594] flex flex-col justify-between shadow-sm">
                <div>
                  <div className="text-[12px] font-bold text-[#617594] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#617594]" />
                    <span>{uiCopy.afterLabel}</span>
                  </div>
                  <h4 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] leading-snug mb-3">
                    {current.afterHeadline}
                  </h4>
                  <p className="text-[15px] sm:text-[16px] text-[#0B1728] font-medium leading-[1.7]">
                    {current.afterDetail}
                  </p>
                </div>
              </div>
            </div>

            {/* Grounded Human Philosophy Statement */}
            <div className="p-8 sm:p-9 rounded-2xl bg-[#F3F7FB] border border-[#CBDDEB]">
              <div className="text-[12px] font-bold text-[#617594] uppercase tracking-wider mb-2.5">
                {uiCopy.philosophyLabel}
              </div>
              <p className="text-[17px] sm:text-[18px] text-[#0B1728] leading-[1.75] font-normal">
                {current.philosophy}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 text-[15px] sm:text-[16px] text-[#1E2E42] font-normal border-t border-[#CBDDEB]/60"
        >
          <p className="max-w-[72ch] leading-relaxed">
            <strong className="text-[#0B1728] font-bold">{uiCopy.bottomPrompt}</strong>{" "}
            {uiCopy.bottomText}
          </p>
          <button
            type="button"
            onClick={() => {
              analytics.trackCtaClick("system_bottom_review");
              if (onNavigate) {
                onNavigate("schedule-demo");
              } else {
                document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2.5 font-bold text-[#617594] hover:text-[#50637F] whitespace-nowrap text-[15px] sm:text-[16px] cursor-pointer transition-colors"
          >
            <span>{uiCopy.bottomCta}</span>
            <ArrowRight className="w-4.5 h-4.5 text-[#617594]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
