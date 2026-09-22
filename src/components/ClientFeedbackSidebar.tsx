import React, { useEffect, useRef } from "react";
import { CLIENT_REVIEWS } from "../data/reviews";
import { X, Clock, Building2, ExternalLink } from "lucide-react";
import { analytics } from "../config";

interface ClientFeedbackSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientFeedbackSidebar: React.FC<ClientFeedbackSidebarProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
              <span className="text-[12px] tracking-[0.18em] uppercase font-bold text-[#3B5B7D]">
                Droppfloww Systems
              </span>
            </div>
            <h2 id="feedback-drawer-title" className="text-[26px] font-extrabold text-[#0B1728] tracking-tight">
              Client Experiences
            </h2>
            <p className="text-[15px] text-[#475A70] mt-2 leading-relaxed font-normal">
              Field observations and measured outcomes from custom systems deployed across operations teams.
            </p>
          </div>

          <button
            ref={closeButtonRef}
            id="close-feedback-drawer"
            type="button"
            onClick={onClose}
            className="p-2.5 text-[#52667A] hover:text-[#0B1728] rounded-full border border-[#CBDDEB] hover:bg-[#F8FAFD] focus:outline-none cursor-pointer transition-colors"
            aria-label="Close client feedback drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Transparency Policy Notice */}
        <div className="px-8 py-4 bg-[#F8FAFD] border-b border-[#CBDDEB] text-[13px] text-[#52667A] leading-relaxed font-normal">
          <span>
            Client operational metrics are documented during post-handover milestone reviews. In accordance with mutual nondisclosure agreements, commercial trading names are withheld.
          </span>
        </div>

        {/* Scrollable Review List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {CLIENT_REVIEWS.map((review) => (
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
                  <span className="font-bold text-[#0B1728]">System Focus: </span>
                  <span className="text-[#2A3F5B] font-normal">{review.projectFocus}</span>
                </div>
                <div>
                  <span className="font-bold text-[#0B1728]">Challenge: </span>
                  <span className="text-[#2A3F5B] font-normal">{review.challenge}</span>
                </div>
                <div>
                  <span className="font-bold text-[#0B1728]">Delivered: </span>
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
                  <span>Timeline: {review.implementationDuration}</span>
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
            Have a comparable workflow to review?
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
            <span>Request review</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
