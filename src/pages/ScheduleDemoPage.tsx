import React from "react";
import { ArrowLeft, MessageCircle, Mail, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BookCallSection } from "../components/BookCallSection";
import { DfLogo } from "../components/DfLogo";

interface ScheduleDemoPageProps {
  onNavigate: (page: string) => void;
}

export const ScheduleDemoPage: React.FC<ScheduleDemoPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#0B1728] selection:bg-[#EAF2F8] selection:text-[#0B1728]">
      {/* Editorial Header Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 bg-[#0B1728] text-white overflow-hidden border-b border-[#1B2F4A]">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 10%, rgba(62, 95, 130, 0.45) 0%, transparent 70%), radial-gradient(ellipse at 85% 85%, rgba(141, 184, 224, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Back breadcrumb */}
          <div className="mb-8">
            <button
              type="button"
              onClick={() => onNavigate("overview")}
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#8DB8E0] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </button>
          </div>

          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1D31] border border-[#1B2F4A] text-[#93C5FD] text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Direct Discovery & Engineering Scoping</span>
            </div>

            <h1 className="text-[40px] sm:text-[56px] md:text-[72px] font-extrabold text-white tracking-[-0.035em] leading-[1.0] mb-6">
              Schedule an operational walkthrough.
            </h1>

            <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.7] text-[#CBDDEB] font-normal max-w-[65ch] mb-8">
              No sales pitches, no slide decks. You will speak directly with Founder & CEO Kentley to analyze your current operational bottlenecks, review existing software, and evaluate whether a custom system makes economic sense.
            </p>

            {/* Reassurance Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#1B2F4A] text-[15px] sm:text-[16px] text-[#CBDDEB]">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4.5 h-4.5 text-[#38BDF8] shrink-0" />
                <span>30-minute structured review</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#38BDF8] shrink-0" />
                <span>Strict scope confidentiality</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#38BDF8] shrink-0" />
                <span>Immediate technical assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Booking Calendar Studio */}
      <main className="py-12 md:py-20">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          
          {/* Integrated Interactive Booking Engine */}
          <BookCallSection id="dedicated-booking-widget" />

          {/* Alternative Direct Channels */}
          <div className="mt-16 pt-12 border-t border-[#CBDDEB] max-w-[800px] mx-auto text-center">
            <h3 className="text-[24px] font-extrabold text-[#0B1728] mb-3">
              Need immediate assistance or have sensitive workflow files?
            </h3>
            <p className="text-[17px] sm:text-[18px] text-[#1E2E42] mb-8 font-normal leading-relaxed">
              You can connect directly with our founder via WhatsApp or secure email.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/6285820467085"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B1728] text-[15px] font-bold px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4.5 h-4.5" />
                <span>WhatsApp: +62 858-2046-7085</span>
              </a>

              <a
                href="mailto:wongkentley@gmail.com"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#E7EDF5] text-[#617594] text-[15px] font-bold px-7 py-3.5 rounded-full border border-[#617594] transition-all cursor-pointer shadow-sm"
              >
                <Mail className="w-4.5 h-4.5 text-[#617594]" />
                <span>Email: wongkentley@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
