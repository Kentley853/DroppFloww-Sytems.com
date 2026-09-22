import React, { useState, useMemo } from "react";
import { ArrowRight, CheckCircle2, Building2, ShieldCheck, Quote, ChevronRight } from "lucide-react";
import { analytics } from "../config";
import { useLanguage } from "../i18n/LanguageContext";
import { getCaseStudies, CaseStudy } from "../data/caseStudiesData";

interface ClientReviewsPageProps {
  onNavigate: (page: string) => void;
}

export const ClientReviewsPage: React.FC<ClientReviewsPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const caseStudies = useMemo(() => getCaseStudies(language), [language]);

  const [activeCase, setActiveCase] = useState<string>("bestindo-logistics");
  const currentCase = caseStudies.find((c) => c.id === activeCase) || caseStudies[0];

  const uiText = useMemo(() => {
    const map: Record<
      string,
      {
        heroBadge: string;
        heroTitle: string;
        heroDesc: string;
        heroCta1: string;
        heroCta2: string;
        engagementsLabel: string;
        verifiedBadge: string;
        primaryMetric: string;
        consoleDeployment: string;
        consoleBuiltBy: string;
        requestWalkthrough: string;
        step1Num: string;
        step1Title: string;
        step1Details: string;
        step2Num: string;
        step2Title: string;
        step2Details: string;
        step3Num: string;
        step3Title: string;
        bottomHeading: string;
        bottomDesc: string;
        bottomCta1: string;
        bottomCta2: string;
      }
    > = {
      en: {
        heroBadge: "Proven Operational Outcomes",
        heroTitle: "Real companies. Real systems. Measurable impact.",
        heroDesc:
          "We do not publish hypothetical case studies or vanity metrics. Every system documented below was engineered for a specific enterprise client, integrated with their existing tools, and measured by the hours and capital it saved.",
        heroCta1: "Discuss your operational bottlenecks",
        heroCta2: "See our consulting methodology",
        engagementsLabel: "Selected Engagements:",
        verifiedBadge: "Verified Client Engagements",
        primaryMetric: "Primary Operational Outcome",
        consoleDeployment: "Custom Engineering Production Deployment",
        consoleBuiltBy: "Built, deployed, and maintained exclusively by Droppfloww Systems.",
        requestWalkthrough: "Request a walkthrough of this architecture",
        step1Num: "01",
        step1Title: "The Operational Bottleneck",
        step1Details: "Critical Pain Points:",
        step2Num: "02",
        step2Title: "What Droppfloww Engineered",
        step2Details: "Technical Architecture:",
        step3Num: "03",
        step3Title: "Measurable Business Impact",
        bottomHeading: "Have a similar operational bottleneck?",
        bottomDesc:
          "We will review your workflows, analyze your existing tools, and outline what a custom system would look like for your business.",
        bottomCta1: "Schedule an operational review with Kentley",
        bottomCta2: "Explore all system architectures",
      },
      id: {
        heroBadge: "Hasil Operasional Nyata",
        heroTitle: "Perusahaan nyata. Sistem nyata. Dampak terukur.",
        heroDesc:
          "Kami tidak mempublikasikan studi kasus hipotetis atau klaim kosong. Setiap sistem di bawah dirancang untuk klien nyata, dihubungkan ke alur kerja mereka, dan diukur dari jam kerja serta efisiensi modal yang berhasil dihemat.",
        heroCta1: "Konsultasikan kendala operasional Anda",
        heroCta2: "Pelajari metodologi kerja kami",
        engagementsLabel: "Klien Pilihan:",
        verifiedBadge: "Proyek Klien Terverifikasi",
        primaryMetric: "Hasil Operasional Utama",
        consoleDeployment: "Implementasi Produksi Rekayasa Kustom",
        consoleBuiltBy: "Dibangun, di-deploy, dan dikelola langsung oleh Droppfloww Systems.",
        requestWalkthrough: "Minta tinjauan arsitektur sistem ini",
        step1Num: "01",
        step1Title: "Kendala & Hambatan Operasional",
        step1Details: "Titik Kritis Masalah:",
        step2Num: "02",
        step2Title: "Solusi Rekayasa Droppfloww",
        step2Details: "Arsitektur Teknis:",
        step3Num: "03",
        step3Title: "Dampak Bisnis Terukur",
        bottomHeading: "Menghadapi hambatan operasional serupa?",
        bottomDesc:
          "Kami akan menganalisis alur kerja Anda, memetakan sistem yang ada, dan merancang perangkat lunak kustom yang presisi untuk kebutuhan bisnis Anda.",
        bottomCta1: "Jadwalkan review alur kerja bersama Kentley",
        bottomCta2: "Jelajahi seluruh arsitektur sistem",
      },
      zh: {
        heroBadge: "真实业务成效验证",
        heroTitle: "真实企业。实装系统。可衡量的降本增效。",
        heroDesc:
          "我们从不发布假设性的概念案例或空洞的公关数据。下列每个系统均针对特定企业的重度卡点定向研发，无缝融入客户既有工具栈，并由其省下的实际工时与真金白银严格核验。",
        heroCta1: "与创始人探讨您的业务瓶颈",
        heroCta2: "了解我们的咨询研发方法论",
        engagementsLabel: "精选交付案例：",
        verifiedBadge: "实体验收投产工程",
        primaryMetric: "核心业务成效指标",
        consoleDeployment: "生产环境定制工程实装部署",
        consoleBuiltBy: "由 Droppfloww Systems 独立研发、部署与长效维护。",
        requestWalkthrough: "申请在线拆解此系统技术架构",
        step1Num: "01",
        step1Title: "核心业务瓶颈与痛点",
        step1Details: "关键阻碍清单：",
        step2Num: "02",
        step2Title: "Droppfloww 交付的技术方案",
        step2Details: "底层工程架构：",
        step3Num: "03",
        step3Title: "可衡量的商业落地回报",
        bottomHeading: "您的企业也有类似的流程卡点？",
        bottomDesc:
          "我们将深入梳理您的业务流程，拆解既有系统的阻滞点，为您量身构思最简练可靠的专属定制软件蓝图。",
        bottomCta1: "预约 Kentley 进行 30 分钟流程诊断",
        bottomCta2: "探索所有系统架构范例",
      },
      es: {
        heroBadge: "Resultados Operativos Reales",
        heroTitle: "Empresas reales. Sistemas reales. Impacto medible.",
        heroDesc:
          "No publicamos casos hipotéticos ni métricas vacías. Cada sistema documentado fue desarrollado para un cliente específico, integrado con sus herramientas actuales y medido por las horas y el capital ahorrado.",
        heroCta1: "Analizar los cuellos de botella de su empresa",
        heroCta2: "Conocer nuestra metodología de consultoría",
        engagementsLabel: "Proyectos Seleccionados:",
        verifiedBadge: "Proyectos de Clientes Verificados",
        primaryMetric: "Resultado Operativo Principal",
        consoleDeployment: "Implementación en Producción a Medida",
        consoleBuiltBy: "Desarrollado, implementado y mantenido por Droppfloww Systems.",
        requestWalkthrough: "Solicitar una demostración de esta arquitectura",
        step1Num: "01",
        step1Title: "El Cuello de Botella Operativo",
        step1Details: "Puntos Críticos de Fricción:",
        step2Num: "02",
        step2Title: "Lo que Droppfloww Desarrolló",
        step2Details: "Arquitectura Técnica:",
        step3Num: "03",
        step3Title: "Impacto Empresarial Medible",
        bottomHeading: "¿Enfrenta un cuello de botella similar?",
        bottomDesc:
          "Revisaremos sus flujos de trabajo, analizaremos sus herramientas actuales y diseñaremos el sistema a medida ideal para su organización.",
        bottomCta1: "Agendar una sesión con Kentley",
        bottomCta2: "Explorar todas las arquitecturas",
      },
    };
    return map[language] || map.en;
  }, [language]);

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] selection:bg-[#EAF2F8] selection:text-[#0B1728]">
      {/* Editorial Header Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 bg-[#0B1728] text-white overflow-hidden border-b border-[#1B2F4A]">
        {/* Subtle Atmospheric Gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 70% 10%, rgba(97, 117, 148, 0.45) 0%, transparent 65%), radial-gradient(ellipse at 20% 90%, rgba(231, 237, 245, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[#93C5FD] text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#617594]" />
              <span>{uiText.heroBadge}</span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] md:text-[80px] font-extrabold text-white tracking-[-0.035em] leading-[0.98] mb-8">
              {uiText.heroTitle}
            </h1>

            <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal max-w-[68ch] mb-10">
              {uiText.heroDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(97,117,148,0.3)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.4)] cursor-pointer"
              >
                <span>{uiText.heroCta1}</span>
                <ArrowRight className="w-4.5 h-4.5 ml-2" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("how-we-work")}
                className="inline-flex items-center justify-center bg-[#0E1D31] hover:bg-[#152943] text-white text-[16px] font-semibold px-7 py-4 rounded-full border border-[#1B2F4A] transition-all cursor-pointer"
              >
                <span>{uiText.heroCta2}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Switcher Nav Bar */}
      <section className="sticky top-[72px] z-30 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#CBDDEB] py-3.5 shadow-2xs">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-[12px] font-bold text-[#62768D] uppercase tracking-wider mr-2 hidden lg:inline">
              {uiText.engagementsLabel}
            </span>
            {caseStudies.map((cs) => {
              const isSelected = cs.id === activeCase;
              return (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => {
                    setActiveCase(cs.id);
                    analytics.trackCtaClick(`case_study_tab_${cs.id}`);
                  }}
                  className={`px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#617594] text-white shadow-xs"
                      : "bg-[#F0F5FA] hover:bg-[#EAF2F8] text-[#3B5B7D] hover:text-[#0B1728] border border-transparent"
                  }`}
                >
                  {cs.client}
                </button>
              );
            })}
          </div>

          <div className="text-[13px] text-[#52667A] font-medium hidden md:flex items-center gap-2 shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#617594]" />
            <span>{uiText.verifiedBadge}</span>
          </div>
        </div>
      </section>

      {/* Active Immersive Story Presentation */}
      <main className="py-16 md:py-28">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          {/* Client Header Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#CBDDEB] shadow-sm mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#4A6585] font-semibold mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7EDF5] text-[#617594] font-bold">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{currentCase.industry}</span>
                  </span>
                  <span>•</span>
                  <span>{currentCase.location}</span>
                </div>

                <h2 className="text-[32px] sm:text-[44px] md:text-[50px] font-extrabold text-[#0B1728] tracking-[-0.03em] leading-[1.1] mb-6">
                  {currentCase.headline}
                </h2>

                <div className="flex flex-wrap gap-2 pt-2">
                  {currentCase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] font-bold text-[#617594] bg-[#E7EDF5] border border-[#CBDDEB] px-3.5 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dominant Hero Metric */}
              <div className="lg:col-span-4 bg-[#0B1728] text-white rounded-2xl p-8 flex flex-col justify-between border border-[#1B2F4A]">
                <div>
                  <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#617594] mb-2">
                    {uiText.primaryMetric}
                  </div>
                  <div className="text-[44px] sm:text-[54px] font-extrabold text-white tracking-tight leading-none mb-3">
                    {currentCase.metricHero}
                  </div>
                  <p className="text-[15px] text-[#CBDDEB] leading-relaxed font-normal">
                    {currentCase.metricLabel}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1B2F4A] space-y-2.5 text-[14px]">
                  {currentCase.outcomeStats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between text-white">
                      <span className="text-[#93C5FD] font-medium">{stat.label}:</span>
                      <span className="font-bold font-mono">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Realistic System Interface Visual */}
          <div className="mb-20">
            <div className="relative rounded-3xl overflow-hidden border border-[#CBDDEB] shadow-xl bg-[#0B1728]">
              {/* Window Controls Bar */}
              <div className="bg-[#0B1728] border-b border-[#1B2F4A] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2A3F5B]" />
                  <span className="w-3 h-3 rounded-full bg-[#2A3F5B]" />
                  <span className="w-3 h-3 rounded-full bg-[#2A3F5B]" />
                  <span className="text-[12px] font-mono text-[#8DB8E0] ml-3">
                    system://droppfloww.internal/{currentCase.id}
                  </span>
                </div>
                <div className="text-[12px] text-[#8DB8E0] font-semibold">
                  {uiText.consoleDeployment}
                </div>
              </div>

              {/* Realistic Screenshot Visual */}
              <div className="relative aspect-video max-h-[640px] w-full bg-[#0E1D31]">
                <img
                  src={currentCase.imageSrc}
                  alt={currentCase.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Caption */}
              <div className="p-6 bg-white border-t border-[#CBDDEB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[14px] font-bold text-[#0B1728]">
                    {currentCase.imageAlt}
                  </p>
                  <p className="text-[13px] text-[#475A70] font-normal mt-0.5">
                    {uiText.consoleBuiltBy}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("schedule-demo")}
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-[#617594] hover:text-[#50637F] bg-[#E7EDF5] hover:bg-[#D9E9FD] px-5 py-2.5 rounded-full transition-all cursor-pointer"
                >
                  <span>{uiText.requestWalkthrough}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Three-Column Story Structure: Problem, System Built, Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* 1. The Operational Problem */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#F0F5FA] border border-[#CBDDEB] flex items-center justify-center text-[#3B5B7D] font-bold text-[15px] mb-6">
                {uiText.step1Num}
              </div>
              <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-4">
                {uiText.step1Title}
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal mb-6">
                {currentCase.problem}
              </p>
              <div className="pt-4 border-t border-[#EAF2F8] space-y-2.5">
                <div className="text-[13px] font-bold tracking-wider uppercase text-[#3B5B7D]">
                  {uiText.step1Details}
                </div>
                {currentCase.problemDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[15px] text-[#475A70]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E57373] mt-2 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. The System Built */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#E7EDF5] border border-[#CBDDEB] flex items-center justify-center text-[#617594] font-bold text-[15px] mb-6">
                {uiText.step2Num}
              </div>
              <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-4">
                {uiText.step2Title}
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal mb-6">
                {currentCase.systemBuilt}
              </p>
              <div className="pt-4 border-t border-[#EAF2F8] space-y-2.5">
                <div className="text-[13px] font-bold tracking-wider uppercase text-[#617594]">
                  {uiText.step2Details}
                </div>
                {currentCase.systemArchitecture.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[15px] text-[#0B1728] font-medium">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#617594] mt-0.5 shrink-0" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. The Business Outcome */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CBDDEB] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#F0F5FA] border border-[#CBDDEB] flex items-center justify-center text-[#3B5B7D] font-bold text-[15px] mb-6">
                {uiText.step3Num}
              </div>
              <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-4">
                {uiText.step3Title}
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#2A3F5B] font-normal mb-6">
                {currentCase.outcome}
              </p>
              <div className="pt-4 border-t border-[#EAF2F8] space-y-3">
                {currentCase.outcomeStats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#F4F8FB] border border-[#CBDDEB]">
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[#52667A]">
                      {stat.label}
                    </div>
                    <div className="text-[19px] font-extrabold text-[#0B1728] mt-0.5">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* High-Impact Executive Quote (Dark Navy Anchor) */}
          <div className="bg-[#0B1728] text-white rounded-3xl p-10 sm:p-14 md:p-16 border border-[#1B2F4A] shadow-xl relative overflow-hidden mb-20">
            <div className="relative z-10 max-w-[980px]">
              <Quote className="w-12 h-12 text-[#617594] mb-8" />
              <blockquote className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-white tracking-[-0.025em] leading-[1.3] mb-8">
                "{currentCase.quote.text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1B2F4A] border border-[#617594] flex items-center justify-center text-[#93C5FD] font-bold text-[18px]">
                  {currentCase.quote.author.charAt(0)}
                </div>
                <div>
                  <div className="text-[19px] font-bold text-white">
                    {currentCase.quote.author}
                  </div>
                  <div className="text-[15px] text-[#93C5FD]">
                    {currentCase.quote.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Conversion Invitation */}
          <div className="bg-white rounded-3xl p-10 sm:p-16 border border-[#CBDDEB] text-center shadow-sm">
            <h3 className="text-[34px] sm:text-[44px] font-extrabold text-[#0B1728] tracking-tight mb-4">
              {uiText.bottomHeading}
            </h3>
            <p className="text-[18px] sm:text-[20px] text-[#1E2E42] font-normal max-w-[56ch] mx-auto mb-8 leading-relaxed">
              {uiText.bottomDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("schedule-demo")}
                className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[16px] font-bold px-9 py-4 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] transition-all cursor-pointer"
              >
                {uiText.bottomCta1}
              </button>
              <button
                type="button"
                onClick={() => onNavigate("what-we-build")}
                className="inline-flex items-center justify-center bg-white hover:bg-[#E7EDF5] text-[#617594] text-[16px] font-bold px-8 py-4 rounded-full border border-[#617594] transition-all cursor-pointer"
              >
                {uiText.bottomCta2}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
