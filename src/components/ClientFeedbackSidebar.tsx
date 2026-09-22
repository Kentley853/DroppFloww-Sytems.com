import React, { useEffect, useRef, useMemo } from "react";
import { getClientReviews } from "../data/reviews";
import { X, Clock, Building2, ExternalLink } from "lucide-react";
import { analytics } from "../config";
import { useLanguage } from "../i18n/LanguageContext";

interface ClientFeedbackSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientFeedbackSidebar: React.FC<ClientFeedbackSidebarProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const reviews = useMemo(() => getClientReviews(language), [language]);

  const uiText = useMemo(() => {
    const data: Record<
      string,
      {
        headerTitle: string;
        headerDesc: string;
        transparency: string;
        focusLabel: string;
        challengeLabel: string;
        deliveredLabel: string;
        timelineLabel: string;
        footerQuestion: string;
        footerBtn: string;
        closeAria: string;
      }
    > = {
      en: {
        headerTitle: "Client Experiences",
        headerDesc: "Field observations and measured outcomes from custom systems deployed across operations teams.",
        transparency:
          "Client operational metrics are documented during post-handover milestone reviews. In accordance with mutual nondisclosure agreements, commercial trading names are withheld.",
        focusLabel: "System Focus: ",
        challengeLabel: "Challenge: ",
        deliveredLabel: "Delivered: ",
        timelineLabel: "Timeline",
        footerQuestion: "Have a comparable workflow to review?",
        footerBtn: "Request review",
        closeAria: "Close client feedback drawer",
      },
      id: {
        headerTitle: "Pengalaman Klien",
        headerDesc: "Observasi lapangan dan hasil terukur dari perangkat lunak operasional kustom yang telah diimplementasikan.",
        transparency:
          "Metrik operasional klien didokumentasikan saat tinjauan tonggak capaian pasca-serah-terima. Sesuai perjanjian kerahasiaan (NDA), nama dagang klien dirahasiakan.",
        focusLabel: "Fokus Sistem: ",
        challengeLabel: "Tantangan: ",
        deliveredLabel: "Solusi Diserahkan: ",
        timelineLabel: "Waktu Pengerjaan",
        footerQuestion: "Punya alur kerja serupa untuk dievaluasi?",
        footerBtn: "Minta evaluasi",
        closeAria: "Tutup panel pengalaman klien",
      },
      zh: {
        headerTitle: "客户实装反馈与评价",
        headerDesc: "来自实际生产一线团队的现场实测数据与真实业务成效复盘。",
        transparency:
          "所有运营指标均在项目投产后里程碑复核中严谨测定。依据双方商业保密协议 (NDA)，严格隐去客户商业法人全称。",
        focusLabel: "系统聚焦：",
        challengeLabel: "原始卡点：",
        deliveredLabel: "交付方案：",
        timelineLabel: "交付周期",
        footerQuestion: "也有类似的业务流程待梳理改造？",
        footerBtn: "申请流程评估",
        closeAria: "关闭客户反馈抽屉",
      },
      es: {
        headerTitle: "Experiencias de Clientes",
        headerDesc: "Observaciones de campo y métricas reales de sistemas personalizados implementados en operaciones.",
        transparency:
          "Las métricas operativas se documentan durante auditorías posteriores a la entrega. Conforme a acuerdos de confidencialidad mutua (NDA), se reservan los nombres comerciales.",
        focusLabel: "Enfoque del Sistema: ",
        challengeLabel: "Desafío: ",
        deliveredLabel: "Entregado: ",
        timelineLabel: "Cronograma",
        footerQuestion: "¿Tiene un flujo de trabajo similar para revisar?",
        footerBtn: "Solicitar revisión",
        closeAria: "Cerrar panel de comentarios de clientes",
      },
    };
    return data[language] || data.en;
  }, [language]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="client-feedback-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden bg-[#0B1728]/50 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px] bg-white h-full shadow-2xl flex flex-col border-l border-[#CBDDEB] animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 border-b border-[#CBDDEB] flex items-start justify-between bg-white">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/df-monogram.svg" alt="" className="w-5 h-5 object-contain" />
              <span className="text-[12px] tracking-[0.18em] uppercase font-bold text-[#617594]">
                Droppfloww Systems
              </span>
            </div>
            <h2 id="feedback-drawer-title" className="text-[26px] font-extrabold text-[#0B1728] tracking-tight">
              {uiText.headerTitle}
            </h2>
            <p className="text-[15px] text-[#475A70] mt-2 leading-relaxed font-normal">
              {uiText.headerDesc}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            id="close-feedback-drawer"
            type="button"
            onClick={onClose}
            className="p-2.5 text-[#52667A] hover:text-[#0B1728] rounded-full border border-[#CBDDEB] hover:bg-[#F8FAFD] focus:outline-none cursor-pointer transition-colors"
            aria-label={uiText.closeAria}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Transparency Policy Notice */}
        <div className="px-8 py-4 bg-[#F8FAFD] border-b border-[#CBDDEB] text-[13px] text-[#52667A] leading-relaxed font-normal">
          <span>{uiText.transparency}</span>
        </div>

        {/* Scrollable Review List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-[#F8FAFD] p-6 rounded-2xl border border-[#CBDDEB] text-[15px]"
            >
              {/* Reviewer & Industry Metadata */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#CBDDEB] mb-4">
                <div>
                  <div className="flex items-center gap-2 text-[17px] font-bold text-[#0B1728]">
                    <Building2 className="w-4.5 h-4.5 text-[#617594]" />
                    <span>{review.clientIndustry}</span>
                  </div>
                  <div className="text-[14px] text-[#52667A] mt-0.5 font-normal">
                    {review.reviewerRole}
                  </div>
                </div>
                <span className="text-[12px] text-[#617594] bg-[#E7EDF5] px-3 py-1 rounded-full border border-[#CBDDEB] font-bold">
                  {review.organizationType.split("(")[0]}
                </span>
              </div>

              {/* Quote */}
              <div className="relative mb-5 pl-4 border-l-2 border-[#617594]">
                <p className="text-[16px] leading-relaxed text-[#0B1728] italic font-medium">
                  "{review.quote}"
                </p>
              </div>

              {/* Specifics: Challenge & Delivered Solution */}
              <div className="space-y-2 mb-5 text-[15px]">
                <div>
                  <span className="font-bold text-[#0B1728]">{uiText.focusLabel}</span>
                  <span className="text-[#2A3F5B] font-normal">{review.projectFocus}</span>
                </div>
                <div>
                  <span className="font-bold text-[#0B1728]">{uiText.challengeLabel}</span>
                  <span className="text-[#2A3F5B] font-normal">{review.challenge}</span>
                </div>
                <div>
                  <span className="font-bold text-[#0B1728]">{uiText.deliveredLabel}</span>
                  <span className="text-[#2A3F5B] font-normal">{review.deliveredSystem}</span>
                </div>
              </div>

              {/* Outcome Highlight */}
              <div className="p-4 bg-white rounded-xl border border-[#CBDDEB] mb-4">
                <div className="font-bold text-[#0B1728] text-[16px]">
                  {review.outcomeMetric}
                </div>
                <div className="flex items-center gap-1.5 text-[13px] text-[#52667A] mt-1.5 font-normal">
                  <Clock className="w-3.5 h-3.5 text-[#617594]" />
                  <span>{uiText.timelineLabel}: {review.implementationDuration}</span>
                </div>
              </div>

              {/* Transparency Note */}
              <div className="text-[13px] text-[#52667A] border-t border-[#CBDDEB]/70 pt-3 font-normal">
                <span className="italic">{review.transparencyNote}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-[#CBDDEB] bg-[#F8FAFD] flex items-center justify-between gap-4">
          <div className="text-[15px] text-[#1E2E42] font-normal">
            {uiText.footerQuestion}
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              analytics.trackCtaClick("drawer_request_review");
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-[#617594] hover:bg-[#50637F] text-white text-[14px] font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm cursor-pointer"
          >
            <span>{uiText.footerBtn}</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
