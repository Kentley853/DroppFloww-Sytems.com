import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { WhatWeBuild } from "./components/WhatWeBuild";
import { HowWeWork } from "./components/HowWeWork";
import { EditorialStorySection } from "./components/EditorialStorySection";
import { WhyDroppfloww } from "./components/WhyDroppfloww";
import { BookCallSection } from "./components/BookCallSection";
import { FAQ } from "./components/FAQ";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ClientFeedbackSidebar } from "./components/ClientFeedbackSidebar";
import { PrivacyView } from "./components/PrivacyView";
import { SystemVerificationConsole } from "./components/SystemVerificationConsole";
import { WhatWeBuildPage } from "./pages/WhatWeBuildPage";
import { HowWeWorkPage } from "./pages/HowWeWorkPage";
import { WhyDroppflowwPage } from "./pages/WhyDroppflowwPage";
import { ClientReviewsPage } from "./pages/ClientReviewsPage";
import { ScheduleDemoPage } from "./pages/ScheduleDemoPage";
import { MessageSquare } from "lucide-react";
import { analytics } from "./config";
import { useLanguage } from "./i18n/LanguageContext";

type PageId =
  | "overview"
  | "what-we-build"
  | "how-we-work"
  | "why-droppfloww"
  | "client-reviews"
  | "schedule-demo"
  | "privacy";

const PAGE_TITLES: Record<PageId, string> = {
  overview: "Droppfloww Systems • Custom Operational Engineering",
  "what-we-build": "What We Build • Droppfloww Systems",
  "how-we-work": "How We Work • Droppfloww Systems",
  "why-droppfloww": "Why Droppfloww • Droppfloww Systems",
  "client-reviews": "Client Reviews & Case Studies • Droppfloww Systems",
  "schedule-demo": "Schedule a Walkthrough • Droppfloww Systems",
  privacy: "Privacy Notice • Droppfloww Systems",
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("overview");
  const [reviewsDrawerOpen, setReviewsDrawerOpen] = useState<boolean>(false);
  const [verificationConsoleOpen, setVerificationConsoleOpen] = useState<boolean>(false);
  const { language } = useLanguage();

  const getPageTitle = (page: PageId): string => {
    if (language === "id") {
      const titles: Record<PageId, string> = {
        overview: "Droppfloww Systems • Rekayasa Sistem Operasional Kustom",
        "what-we-build": "Apa yang Kami Bangun • Droppfloww Systems",
        "how-we-work": "Cara Kami Bekerja • Droppfloww Systems",
        "why-droppfloww": "Mengapa Droppfloww • Droppfloww Systems",
        "client-reviews": "Ulasan Klien & Studi Kasus • Droppfloww Systems",
        "schedule-demo": "Jadwalkan Sesi Walkthrough • Droppfloww Systems",
        privacy: "Pemberitahuan Privasi • Droppfloww Systems",
      };
      return titles[page] || titles.overview;
    }
    if (language === "zh") {
      const titles: Record<PageId, string> = {
        overview: "Droppfloww Systems • 定制化企业运营系统工程",
        "what-we-build": "我们交付的系统 • Droppfloww Systems",
        "how-we-work": "工程作业流程 • Droppfloww Systems",
        "why-droppfloww": "为何选择 Droppfloww • Droppfloww Systems",
        "client-reviews": "客户真实实测评价 • Droppfloww Systems",
        "schedule-demo": "预约系统演示与咨询 • Droppfloww Systems",
        privacy: "数据隐私条例 • Droppfloww Systems",
      };
      return titles[page] || titles.overview;
    }
    if (language === "es") {
      const titles: Record<PageId, string> = {
        overview: "Droppfloww Systems • Ingeniería Operativa a Medida",
        "what-we-build": "Qué Construimos • Droppfloww Systems",
        "how-we-work": "Cómo Trabajamos • Droppfloww Systems",
        "why-droppfloww": "Por Qué Droppfloww • Droppfloww Systems",
        "client-reviews": "Casos de Éxito de Clientes • Droppfloww Systems",
        "schedule-demo": "Agendar Demostración • Droppfloww Systems",
        privacy: "Aviso de Privacidad • Droppfloww Systems",
      };
      return titles[page] || titles.overview;
    }
    return PAGE_TITLES[page] || PAGE_TITLES.overview;
  };

  // Sync with browser hash / location
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace(/^#/, "");
      const path = window.location.pathname.replace(/^\//, "");
      const target = (hash || path) as PageId;

      if (target && target in PAGE_TITLES) {
        setCurrentPage(target);
        document.title = getPageTitle(target);
      } else {
        setCurrentPage("overview");
        document.title = getPageTitle("overview");
      }
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, [language]);

  const navigateToPage = (target: string) => {
    const validTarget = (target in PAGE_TITLES ? target : "overview") as PageId;
    setCurrentPage(validTarget);
    document.title = getPageTitle(validTarget);
    window.history.pushState(null, "", validTarget === "overview" ? "/" : `#${validTarget}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-[#0B1728] flex flex-col font-sans selection:bg-[#E7EDF5] selection:text-[#617594]">
      {/* Primary Brand Navigation */}
      <Navbar
        activePage={currentPage}
        onNavigate={navigateToPage}
        onOpenReviews={() => setReviewsDrawerOpen(true)}
        onNavigatePrivacy={() => navigateToPage("privacy")}
      />

      {/* Main Content Area: Renders Active Page */}
      <div className="flex-1">
        {currentPage === "what-we-build" && (
          <WhatWeBuildPage onNavigate={navigateToPage} />
        )}

        {currentPage === "how-we-work" && (
          <HowWeWorkPage onNavigate={navigateToPage} />
        )}

        {currentPage === "why-droppfloww" && (
          <WhyDroppflowwPage onNavigate={navigateToPage} />
        )}

        {currentPage === "client-reviews" && (
          <ClientReviewsPage onNavigate={navigateToPage} />
        )}

        {currentPage === "schedule-demo" && (
          <ScheduleDemoPage onNavigate={navigateToPage} />
        )}

        {currentPage === "privacy" && (
          <PrivacyView onBack={() => navigateToPage("overview")} />
        )}

        {currentPage === "overview" && (
          <main id="main-content">
            {/* 1. Hero: Monumental Headline + Sector Interactive Demos */}
            <Hero onNavigate={navigateToPage} />

            {/* 2. Operational Reality & Problem Breakdown */}
            <ProblemSection />

            {/* 3. What We Build */}
            <WhatWeBuild onNavigate={navigateToPage} />

            {/* 4. How We Work */}
            <HowWeWork onNavigate={navigateToPage} />

            {/* 5. Editorial Client Story Anchor */}
            <EditorialStorySection
              onOpenReviews={() => setReviewsDrawerOpen(true)}
              onNavigate={navigateToPage}
            />

            {/* 6. Why Droppfloww */}
            <WhyDroppfloww onNavigate={navigateToPage} />

            {/* 7. Interactive Walkthrough & Calendar Booking Section */}
            <BookCallSection id="book-call" />

            {/* 8. Frequently Asked Questions */}
            <FAQ />

            {/* 9. Written Consultation Request */}
            <ContactSection onOpenPrivacy={() => navigateToPage("privacy")} />
          </main>
        )}
      </div>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateToPage}
        onOpenPrivacy={() => navigateToPage("privacy")}
        onOpenReviews={() => setReviewsDrawerOpen(true)}
        onToggleVerification={() => setVerificationConsoleOpen((prev) => !prev)}
      />

      {/* Persistent Floating Client Reviews Trigger */}
      <aside className="fixed bottom-6 right-6 z-30 hidden sm:block" aria-label="Client transparency trigger">
        <button
          type="button"
          onClick={() => {
            analytics.trackCtaClick("floating_open_reviews");
            navigateToPage("client-reviews");
          }}
          className="inline-flex items-center gap-2.5 bg-white hover:bg-[#E7EDF5] text-[#0B1728] hover:text-[#617594] text-[14px] font-bold px-4.5 py-3 rounded-full border border-[#CBDDEB] hover:border-[#617594] shadow-[0_4px_18px_rgba(11,23,40,0.08)] hover:shadow-[0_6px_22px_rgba(97,117,148,0.22)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] cursor-pointer"
          aria-label="View Client Case Studies"
        >
          <MessageSquare className="w-4 h-4 text-[#617594]" />
          <span>
            {language === "id"
              ? "Ulasan & Kasus Klien"
              : language === "zh"
              ? "客户评价与实测"
              : language === "es"
              ? "Reseñas y Casos de Clientes"
              : "Client Reviews & Cases"}
          </span>
        </button>
      </aside>

      {/* Slide-over Verified Client Feedback Sidebar Drawer */}
      <ClientFeedbackSidebar
        isOpen={reviewsDrawerOpen}
        onClose={() => setReviewsDrawerOpen(false)}
      />

      {/* System Verification Console Modal */}
      <SystemVerificationConsole
        isOpen={verificationConsoleOpen}
        onClose={() => setVerificationConsoleOpen(false)}
      />
    </div>
  );
}
