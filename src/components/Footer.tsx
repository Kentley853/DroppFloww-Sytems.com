import React from "react";
import { CONFIG, analytics } from "../config";
import { DfLogo } from "./DfLogo";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

interface FooterProps {
  onNavigate?: (page: string) => void;
  onOpenPrivacy: () => void;
  onOpenReviews: () => void;
  onToggleVerification: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenReviews,
  onToggleVerification,
}) => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string, label: string) => {
    analytics.trackCtaClick(`footer_${label}`);
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      const el = document.getElementById(pageId === "schedule-demo" ? "book-call" : pageId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerMission: Record<string, string> = {
    en: "We study how your business operates, identify unnecessary manual work, and build custom operational systems around your existing tools.",
    id: "Kami menganalisis alur bisnis Anda, mengidentifikasi pekerjaan manual yang berulang, dan membangun sistem operasional kustom yang menyatu dengan alat yang sudah ada.",
    zh: "我们深度调研您的业务运转方式，定位繁重低效的人工作业，围绕您现有的工具链构建高度贴合的定制运营系统。",
    es: "Analizamos cómo opera su empresa, identificamos el trabajo manual innecesario y construimos sistemas operativos a medida que se integran con sus herramientas actuales.",
  };

  const honestDeliveryText: Record<string, string> = {
    en: "Calm operational engineering • Zero fabricated metrics • Transparent technical delivery",
    id: "Rekayasa operasional terukur • Tanpa klaim palsu • Pengiriman sistem transparan",
    zh: "沉静务实的运营工程 • 拒绝虚构数据 • 透明确凿的技术交付",
    es: "Ingeniería operativa pragmática • Cero métricas ficticias • Entrega técnica transparente",
  };

  return (
    <footer id="site-footer" className="bg-[#0B1728] border-t border-[#1B2F4A] py-16 text-[16px] text-[#A2B8CE]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1B2F4A]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-5">
              <button
                type="button"
                onClick={() => handleLinkClick("overview", "brand_logo")}
                className="focus:outline-none cursor-pointer"
              >
                <DfLogo markSize={46} theme="dark" idPrefix="footer-brand" />
              </button>
            </div>
            
            <p className="text-[20px] sm:text-[22px] text-white font-bold mb-3 tracking-tight">
              {t("hero.title", "Do more without hiring more.")}
            </p>
            
            <p className="text-[15px] sm:text-[16px] text-[#A2B8CE] font-normal max-w-[44ch] leading-relaxed mb-6">
              {footerMission[language] || footerMission.en}
            </p>

            {/* Language Selector in Footer */}
            <div className="mt-auto pt-2">
              <LanguageSelector variant="footer" />
            </div>
          </div>

          {/* Links Column 1: Navigation */}
          <div className="md:col-span-3">
            <div className="text-[16px] font-bold text-white tracking-tight mb-5">
              {t("footer.navHeading", "Pages & Systems")}
            </div>
            <ul className="space-y-3.5 text-[15px] sm:text-[16px]">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("schedule-demo", "schedule_demo")}
                  className="font-bold text-[#93C5FD] hover:text-white transition-colors focus:outline-none cursor-pointer"
                >
                  {t("nav.scheduleDemo", "Schedule a walkthrough")}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("what-we-build", "what_we_build")}
                  className="text-[#A2B8CE] hover:text-white font-normal transition-colors focus:outline-none cursor-pointer"
                >
                  {t("nav.whatWeBuild", "What we build")}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("how-we-work", "how_we_work")}
                  className="text-[#A2B8CE] hover:text-white font-normal transition-colors focus:outline-none cursor-pointer"
                >
                  {t("nav.howWeWork", "How we work")}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("why-droppfloww", "why_droppfloww")}
                  className="text-[#A2B8CE] hover:text-white font-normal transition-colors focus:outline-none cursor-pointer"
                >
                  {t("nav.whyDroppfloww", "Why Droppfloww")}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("client-reviews", "client_reviews")}
                  className="text-[#A2B8CE] hover:text-white font-normal transition-colors focus:outline-none cursor-pointer"
                >
                  {t("nav.clientReviews", "Case studies & reviews")}
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Direct Contact */}
          <div className="md:col-span-4">
            <div className="text-[16px] font-bold text-white tracking-tight mb-5">
              {t("footer.directContactHeading", "Direct Contact")}
            </div>
            <div className="space-y-4 text-[15px] sm:text-[16px]">
              <div>
                <span className="text-[#6484A8] block text-[12px] font-bold uppercase tracking-[0.14em] mb-0.5">Founder & CEO</span>
                <span className="font-bold text-white">Kentley</span>
              </div>
              <div>
                <span className="text-[#6484A8] block text-[12px] font-bold uppercase tracking-[0.14em] mb-0.5">Direct Email</span>
                <a
                  href={`mailto:${CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}`}
                  className="text-[#93C5FD] font-semibold hover:text-white hover:underline transition-colors"
                >
                  {CONFIG.DIRECT_CONTACT_EMAIL || "wongkentley@gmail.com"}
                </a>
              </div>
              <div>
                <span className="text-[#6484A8] block text-[12px] font-bold uppercase tracking-[0.14em] mb-0.5">WhatsApp</span>
                <a
                  href={CONFIG.WHATSAPP_URL || "https://wa.me/6285820467085"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#93C5FD] font-semibold hover:text-white hover:underline transition-colors"
                >
                  {CONFIG.FOUNDER_PHONE || "+62 858-2046-7085"}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#1B2F4A] flex items-center gap-6">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="hover:text-white text-[#A2B8CE] transition-colors text-[15px] font-medium cursor-pointer"
              >
                {t("footer.privacyNotice", "Privacy Notice")}
              </button>
              <button
                type="button"
                onClick={onToggleVerification}
                className="text-[14px] text-[#6484A8] hover:text-[#A2B8CE] font-normal transition-colors cursor-pointer"
              >
                Diagnostics
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-[#5D7A9C] font-normal">
          <p>
            © {currentYear} Droppfloww Systems. {t("footer.rights", "All rights reserved.")}
          </p>
          <p className="text-[13px] text-[#465E7A]">
            {honestDeliveryText[language] || honestDeliveryText.en}
          </p>
        </div>

      </div>
    </footer>
  );
};

