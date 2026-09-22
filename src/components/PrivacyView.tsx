import React from "react";
import { CONFIG } from "../config";
import { ArrowLeft } from "lucide-react";
import { DfLogo } from "./DfLogo";

interface PrivacyViewProps {
  onBack: () => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] py-12 md:py-20">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Brand Lockup & Back navigation */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            id="privacy-back-btn"
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#3B5B7D] hover:text-[#0B1728] p-1 focus:outline-none cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to main site</span>
          </button>
          
          <DfLogo markSize={34} idPrefix="privacy" />
        </div>

        {/* Title & Metadata */}
        <div className="border-b border-[#CBDDEB] pb-8 mb-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2F8] border border-[#CBDDEB] text-[11px] sm:text-[12px] font-bold text-[#3B5B7D] uppercase tracking-[0.18em]">
              <span>Information & Security</span>
            </span>
          </div>
          <h1 className="text-[38px] sm:text-[48px] font-extrabold text-[#0B1728] tracking-tight mb-3">
            Privacy Information
          </h1>
          <p className="text-[15px] text-[#52667A] font-normal">
            Effective Date: {new Date().getFullYear()} • Domain: {CONFIG.WORKING_DOMAIN}
          </p>
        </div>

        {/* Editorial Body */}
        <div className="space-y-8 text-[15px] sm:text-[16px] leading-[1.75] text-[#475A70] font-normal">
          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              1. What information we collect
            </h2>
            <p className="mb-3">
              We collect information directly provided when you request a workflow review through our website:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#0B1728] font-medium">
              <li>Your name and business email address.</li>
              <li>Your organization name (if optionally provided).</li>
              <li>The operational process description and pain points you submit for consulting review.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              2. How we use your information
            </h2>
            <p className="mb-3">
              We use this information exclusively for:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#0B1728] font-medium">
              <li>Evaluating initial technical feasibility of your operational workflow request.</li>
              <li>Responding directly with technical notes and discussing potential scoping.</li>
              <li>Communicating regarding scheduled review calls or agreed milestones.</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your contact details or process descriptions to any third-party marketing brokers.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              3. Web analytics & cookies
            </h2>
            <p>
              By default, this website does not deploy invasive tracking cookies or cross-site advertising pixels. A lightweight, privacy-focused analytics adapter is integrated to measure aggregate interactions (such as button clicks and review submissions) without collecting personal identifiers (PII), names, email addresses, or form contents.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              4. Server processing & transmission
            </h2>
            <p>
              When submitted, your enquiry payload is validated by our server-side function. If a downstream notification webhook is configured by the site administrator, the payload is forwarded securely over HTTPS with a strict request timeout. Form payloads are never written to public client logs.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-[#0B1728] mb-3">
              5. Contacting us
            </h2>
            <p>
              For inquiries regarding data retention, scope confidentiality, or to request deletion of previously submitted review inquiries, contact us directly via our published operational communication channels.
            </p>
          </section>
        </div>

        {/* Back Button Footer */}
        <div className="mt-12 pt-8 border-t border-[#CBDDEB]">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center bg-[#0B1728] text-white text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-[#14253D] transition-colors border border-[#1B2F4A] cursor-pointer"
          >
            Back to Droppfloww Systems
          </button>
        </div>

      </div>
    </div>
  );
};
