import React, { useState, useEffect, useRef } from "react";
import { analytics } from "../config";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";
import { DfLogo } from "./DfLogo";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenReviews: () => void;
  onNavigatePrivacy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenReviews,
  onNavigatePrivacy,
}) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const NAV_ITEMS = [
    { id: "overview", labelKey: "nav.overview", fallback: "Overview" },
    { id: "what-we-build", labelKey: "nav.whatWeBuild", fallback: "What We Build" },
    { id: "how-we-work", labelKey: "nav.howWeWork", fallback: "How We Work" },
    { id: "why-droppfloww", labelKey: "nav.whyDroppfloww", fallback: "Why Droppfloww" },
    { id: "client-reviews", labelKey: "nav.clientReviews", fallback: "Client Reviews" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard trap and Escape key handler for accessible mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    if (mobileMenuOpen) {
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
  }, [mobileMenuOpen]);

  const handlePageClick = (pageId: string, label: string) => {
    analytics.trackCtaClick(`nav_${label.toLowerCase().replace(/\s+/g, "_")}`);
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFBFD]/95 backdrop-blur-md border-b border-[#CBDDEB] py-3.5 shadow-[0_2px_12px_rgba(11,23,40,0.04)]"
          : "bg-[#FAFBFD]/80 backdrop-blur-xs border-b border-[#CBDDEB]/60 py-4 md:py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Prominent Droppfloww Systems Logo Lockup */}
        <button
          id="nav-brand-logo"
          type="button"
          onClick={() => handlePageClick("overview", "home_logo")}
          className="focus:outline-none cursor-pointer flex items-center group"
          aria-label="Droppfloww Systems - Return to Overview"
        >
          <DfLogo markSize={46} idPrefix="nav" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            const label = t(item.labelKey, item.fallback);
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                type="button"
                onClick={() => handlePageClick(item.id, label)}
                className={`text-[14px] xl:text-[15px] font-semibold px-3.5 xl:px-4 py-2 rounded-full transition-all duration-150 focus:outline-none cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#E7EDF5] text-[#617594] font-bold shadow-2xs border border-[#CBDDEB]"
                    : "text-[#2A3F5B] hover:text-[#617594] hover:bg-[#E7EDF5]/60"
                }`}
              >
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Right CTAs with Language Switcher */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector variant="navbar" />

          <button
            id="nav-cta-book"
            type="button"
            onClick={() => handlePageClick("schedule-demo", "Schedule a demo")}
            className="inline-flex items-center justify-center bg-[#617594] hover:bg-[#50637F] text-white text-[14px] xl:text-[15px] font-bold px-5 xl:px-6 py-2.5 rounded-full shadow-[0_3px_12px_rgba(97,117,148,0.25)] hover:shadow-[0_4px_18px_rgba(97,117,148,0.35)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] cursor-pointer whitespace-nowrap"
          >
            <span>{t("nav.scheduleDemo", "Schedule a walkthrough")}</span>
          </button>
        </div>

        {/* Mobile Menu Trigger & Quick Lang Switcher */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector variant="navbar" />
          <button
            ref={menuButtonRef}
            id="mobile-menu-trigger"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 text-[#0B1728] focus:outline-none rounded-full border border-[#CBDDEB] hover:bg-[#F0F5FA] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop and Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 lg:hidden bg-[#0B1728]/50 backdrop-blur-xs flex flex-col justify-end"
        >
          <div className="bg-white border-t border-[#CBDDEB] rounded-t-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-5 border-b border-[#CBDDEB]">
              <DfLogo markSize={38} idPrefix="nav-mobile" />
              <button
                ref={closeButtonRef}
                id="mobile-menu-close"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                className="p-2 text-[#52667A] hover:text-[#0B1728] rounded-full border border-[#CBDDEB] focus:outline-none cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Language Selector */}
            <div className="pt-4 pb-2 border-b border-[#CBDDEB]">
              <LanguageSelector variant="mobile" />
            </div>

            <nav className="flex flex-col py-4 space-y-2" aria-label="Mobile Menu Links">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                const label = t(item.labelKey, item.fallback);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handlePageClick(item.id, label)}
                    className={`flex items-center justify-between text-[17px] font-bold py-3.5 px-4 rounded-xl text-left cursor-pointer transition-colors ${
                      isActive
                        ? "bg-[#E7EDF5] text-[#617594] border border-[#CBDDEB]"
                        : "text-[#0B1728] hover:bg-[#E7EDF5]/50"
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronRight className="w-4 h-4 text-[#617594]" />
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigatePrivacy();
                }}
                className="text-[15px] text-[#2A3F5B] py-2 px-4 text-left hover:text-[#617594] cursor-pointer"
              >
                {t("nav.privacy", "Privacy Notice")}
              </button>
            </nav>

            <div className="pt-2 pb-4">
              <button
                id="mobile-cta-book"
                type="button"
                onClick={() => handlePageClick("schedule-demo", "Schedule a demo mobile")}
                className="w-full flex items-center justify-center bg-[#617594] text-white text-[16px] font-bold py-4 rounded-full hover:bg-[#50637F] transition-all shadow-[0_4px_14px_rgba(97,117,148,0.25)] cursor-pointer"
              >
                {t("nav.scheduleDemo", "Schedule a walkthrough")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

