import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { analytics } from "../config";
import { useLanguage } from "../i18n/LanguageContext";

interface HowWeWorkProps {
  onNavigate?: (page: string) => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  const headings: Record<string, { title: string; subtitle: string; banner: string; deliverableLabel: string; stageLabel: string }> = {
    en: {
      title: "Understand first. Build second.",
      subtitle: "Practical software implementation grounded in your team's real daily tasks, not abstract roadmaps.",
      banner: "We do not promise to ship complex production infrastructure in seconds. Meaningful operational systems require disciplined scoping, security validation, and thorough user acceptance testing.",
      deliverableLabel: "Deliverable",
      stageLabel: "Stage",
    },
    id: {
      title: "Pahami dahulu. Bangun kemudian.",
      subtitle: "Implementasi perangkat lunak praktis yang berakar pada tugas nyata harian tim Anda, bukan peta jalan abstrak.",
      banner: "Kami tidak berjanji mengirimkan infrastruktur produksi rumit dalam hitungan detik. Sistem operasional yang bermakna memerlukan perancangan berdisiplin, validasi keamanan, dan pengujian mendalam.",
      deliverableLabel: "Hasil Nyata",
      stageLabel: "Tahap",
    },
    zh: {
      title: "深刻理解在先，扎实构建在后。",
      subtitle: "扎根于您团队日常真实作业场景的工程落地，绝非空中楼阁般的空泛路线图。",
      banner: "我们绝不轻浮许诺在几天内凭空交付复杂生产系统。真正产生实效的运营系统需要严密的需求论证、安全验证与严格的用户验收测试。",
      deliverableLabel: "交付成果",
      stageLabel: "阶段",
    },
    es: {
      title: "Entender primero. Construir después.",
      subtitle: "Implementación práctica de software basada en las tareas diarias reales de su equipo, no en hojas de ruta abstractas.",
      banner: "No prometemos entregar infraestructura de producción compleja en segundos. Un sistema operativo significativo requiere diseño disciplinado, validación de seguridad y pruebas de aceptación rigurosas.",
      deliverableLabel: "Entregable",
      stageLabel: "Etapa",
    },
  };

  const stepsData = [
    {
      num: "01",
      title: t("howWeWork.stage1Name", "Review the workflow."),
      description: t("howWeWork.stage1Desc", "Show us where time gets lost and what your team uses today."),
      deliverable: t("howWeWork.stage1Deliverable", "Bottleneck mapping & manual re-entry audit"),
    },
    {
      num: "02",
      title: t("howWeWork.stage2Name", "Define the right first build."),
      description: t("howWeWork.stage2Desc", "Agree on the scope, responsibilities and what improvement should look like."),
      deliverable: t("howWeWork.stage2Deliverable", "Fixed-scope architectural plan & milestone agreement"),
    },
    {
      num: "03",
      title: t("howWeWork.stage3Name", "Build with your team."),
      description: t("howWeWork.stage3Desc", "Test the system against real tasks and make the changes that matter."),
      deliverable: t("howWeWork.stage3Deliverable", "Working iterations evaluated against live operational scenarios"),
    },
    {
      num: "04",
      title: t("howWeWork.stage4Name", "Hand it over properly."),
      description: t("howWeWork.stage4Desc", "Document the workflow, help your team use it, and agree on ongoing support."),
      deliverable: t("howWeWork.stage4Deliverable", "Complete documentation, staff training, and maintenance plan"),
    },
  ];

  const currentCopy = headings[language] || headings.en;

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
              <span>{t("howWeWork.badge", "Disciplined Engagement")}</span>
            </span>
          </div>
          <h2
            id="process-heading"
            className="text-[44px] sm:text-[58px] lg:text-[72px] font-extrabold text-[#0B1728] tracking-[-0.035em] leading-[0.98] mb-6"
          >
            {currentCopy.title}
          </h2>
          <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#1E2E42] font-normal max-w-[62ch]">
            {currentCopy.subtitle}
          </p>
        </motion.div>

        {/* Hairline Divider Rule */}
        <div className="w-full h-px bg-[#CBDDEB] mb-12" aria-hidden="true" />

        {/* 4-Step Sequence as Refined Blue-Accented Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stepsData.map((st, idx) => (
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
                    {currentCopy.stageLabel} {st.num}
                  </span>
                  {idx < 3 && (
                    <ArrowRight className="w-4.5 h-4.5 text-[#617594] hidden lg:block" aria-hidden="true" />
                  )}
                </div>

                <h3 className="text-[21px] sm:text-[23px] font-bold text-[#0B1728] mb-3 leading-snug tracking-tight">
                  {st.title}
                </h3>

                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#1E2E42] font-normal mb-6">
                  {st.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D7E3EE]">
                <span className="text-[#2A3F5B] block font-bold text-[12px] uppercase tracking-wider mb-1">
                  {currentCopy.deliverableLabel}
                </span>
                <span className="font-bold text-[#617594] text-[14px] sm:text-[15px] leading-snug block">
                  {st.deliverable}
                </span>
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
            {currentCopy.banner}
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
            {t("howWeWork.ctaStart", "Start with step one")}
          </button>
        </motion.div>

      </div>
    </section>
  );
};

