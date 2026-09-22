import React from "react";
import { analytics } from "../config";
import { MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

interface EditorialStoryProps {
  onOpenReviews: () => void;
  onNavigate?: (page: string) => void;
}

export const EditorialStorySection: React.FC<EditorialStoryProps> = ({ onOpenReviews, onNavigate }) => {
  const { t, language } = useLanguage();

  const handleReviewsClick = () => {
    analytics.trackCtaClick("story_open_reviews");
    if (onNavigate) {
      onNavigate("client-reviews");
    } else {
      onOpenReviews();
    }
  };

  const storyContent: Record<
    string,
    {
      badge: string;
      quote: string;
      role: string;
      solutionHeading: string;
      solutionBody: string;
      cta: string;
      compliance: string;
    }
  > = {
    en: {
      badge: "Verified Client Story • Infrastructure & Energy",
      quote:
        "“Estimating used to consume our entire senior engineering team for days before tender deadlines. Now the calculations are verifiable in minutes, with every number traced to an approved drawing.”",
      role: "Associate Director of Pre-Construction Operations",
      solutionHeading: "Deployed Solution",
      solutionBody:
        "Automated pipeline takeoff engine connecting CAD drawings, Bill of Quantities (BOQ), and internal project budget (RAP) calculations.",
      cta: "Explore all case stories",
      compliance:
        "Every case study and quote featured on Droppfloww represents verified operational engagements under mutual non-disclosure compliance.",
    },
    id: {
      badge: "Kisah Klien Terverifikasi • Infrastruktur & Energi",
      quote:
        "“Proses estimasi tender biasanya menguras tenaga seluruh teknisi senior kami berhari-hari menjelang tenggat. Kini kalkulasi dapat diverifikasi dalam hitungan menit, dengan setiap angka terlacak ke gambar kerja yang disetujui.”",
      role: "Associate Director Operasional Pra-Konstruksi",
      solutionHeading: "Solusi yang Diterapkan",
      solutionBody:
        "Mesin otomatisasi takeoff pipa yang menghubungkan gambar CAD, Bill of Quantities (BOQ), dan kalkulasi Rencana Anggaran Proyek (RAP) internal.",
      cta: "Jelajahi seluruh studi kasus",
      compliance:
        "Setiap studi kasus dan kutipan di Droppfloww mencerminkan kerja sama operasional nyata yang terverifikasi sesuai kepatuhan perjanjian kerahasiaan bersama (NDA).",
    },
    zh: {
      badge: "真实客户交付实录 • 基础设施与能源",
      quote:
        "“过去每逢招投标截止前，测算工作都会耗尽我们整个资深工程团队数天的心力。现在所有工程量计算在几分钟内即可完成核验，每一笔数字都能精准溯源至已签核的蓝图图纸。”",
      role: "预施工运营副总监",
      solutionHeading: "已落地方案",
      solutionBody:
        "自动工程算量引擎，无缝贯通 CAD 施工图、工程量清单 (BOQ) 以及企业内部项目预算 (RAP) 核心测算。",
      cta: "查看全部客户案例",
      compliance:
        "Droppfloww 上展示的所有案例与引言，均源自真实签订保密协议并完成验收的实际运营工程交付。",
    },
    es: {
      badge: "Caso de Cliente Verificado • Infraestructura y Energía",
      quote:
        "“La estimación solía absorber a todo nuestro equipo de ingenieros sénior durante días antes de los plazos de licitación. Ahora los cálculos se verifican en minutos, con cada cifra trazada hasta el plano aprobado.”",
      role: "Director Asociado de Operaciones de Pre-Construcción",
      solutionHeading: "Solución Implementada",
      solutionBody:
        "Motor automatizado de cubicación que conecta planos CAD, Lista de Cantidades (BOQ) y presupuestos internos de obra (RAP).",
      cta: "Explorar todos los casos",
      compliance:
        "Cada estudio de caso y cita en Droppfloww representa compromisos operativos verificados bajo estricto acuerdo de confidencialidad mutuo.",
    },
  };

  const copy = storyContent[language] || storyContent.en;

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
              <span>{copy.badge}</span>
            </span>
          </motion.div>

          <motion.h2
            id="client-story-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[62px] font-extrabold text-white tracking-[-0.035em] leading-[1.12] mb-12"
          >
            {copy.quote}
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
                {copy.role}
              </div>
              <div className="text-[16px] font-bold text-[#E2E8F0]">
                PT Bestindo Putra Mandiri
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="text-[13px] text-[#93C5FD] font-bold uppercase tracking-wider mb-2">
                {copy.solutionHeading}
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#E2E8F0] leading-[1.7] font-normal">
                {copy.solutionBody}
              </p>
            </div>

            <div className="md:col-span-3 flex md:justify-end">
              <button
                type="button"
                onClick={handleReviewsClick}
                className="inline-flex items-center gap-2.5 bg-[#617594] hover:bg-[#50637F] text-white text-[15px] sm:text-[16px] font-bold px-7 py-4 rounded-full shadow-[0_4px_18px_rgba(97,117,148,0.35)] hover:shadow-[0_6px_24px_rgba(97,117,148,0.45)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none cursor-pointer"
              >
                <MessageSquare className="w-4.5 h-4.5 text-white" />
                <span>{copy.cta}</span>
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
          className="p-6 sm:p-7 rounded-2xl bg-[#0E1D31] border border-[#1B2F4A] text-[14px] sm:text-[15px] text-[#CBDDEB] leading-relaxed flex items-center justify-between flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
            <span className="text-[#E2E8F0]">
              {copy.compliance}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

