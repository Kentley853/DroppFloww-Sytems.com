import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Language } from "../i18n/types";
import { Globe, ChevronDown, Check } from "lucide-react";
import { LanguageFlag } from "./LanguageFlag";

interface LanguageSelectorProps {
  variant?: "navbar" | "mobile" | "footer";
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = "navbar",
  className = "",
}) => {
  const { language, setLanguage, supportedLanguages, currentLanguageOption, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  // Mobile layout: Horizontal 2-column grid for clear touch targets inside drawer
  if (variant === "mobile") {
    return (
      <div className={`space-y-2.5 ${className}`}>
        <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[#617594]">
          <Globe className="w-4 h-4 text-[#617594]" />
          <span>{t("nav.language", "Language")}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {supportedLanguages.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleSelect(opt.code)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl border text-[13.5px] transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#E7EDF5] text-[#0B1728] border-[#617594] font-bold shadow-xs"
                    : "bg-white text-[#1E2E42] border-[#CBDDEB] hover:bg-[#F4F8FB] font-medium"
                }`}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <LanguageFlag code={opt.code} />
                  <span className="truncate">{opt.nativeLabel}</span>
                </span>
                {isSelected && <Check className="w-4 h-4 text-[#617594] shrink-0 ml-1.5" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Footer layout: Inline pill group
  if (variant === "footer") {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8FA6BF]">
          <Globe className="w-3.5 h-3.5 text-[#617594]" />
          <span>{t("footer.switchLanguage", "Language:")}</span>
        </span>
        <div className="inline-flex flex-wrap items-center bg-[#0E1D31] p-1 rounded-full border border-[#1B2F4A]">
          {supportedLanguages.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => setLanguage(opt.code)}
                className={`px-3 py-1 rounded-full text-[12px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#617594] text-white shadow-xs"
                    : "text-[#93A5BE] hover:text-white hover:bg-[#14253D]"
                }`}
              >
                <LanguageFlag code={opt.code} />
                <span>{opt.nativeLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop & Header Navbar layout:
  // Perfectly balanced pill button with uniform margins, vertically centered icon, text, and chevron
  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      <button
        id="language-selector-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select language, currently ${currentLanguageOption.label}`}
        className="h-[40px] md:h-[42px] px-3.5 inline-flex items-center justify-center gap-2 rounded-full border border-[#CBDDEB] bg-white hover:bg-[#E7EDF5]/60 hover:border-[#617594]/50 text-[#0B1728] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] cursor-pointer shadow-2xs select-none"
      >
        <Globe className="w-4 h-4 text-[#617594] shrink-0" />
        <span className="text-[13.5px] font-semibold tracking-tight text-[#0B1728] leading-none">
          <span className="hidden sm:inline">{currentLanguageOption.nativeLabel}</span>
          <span className="sm:hidden">{currentLanguageOption.code.toUpperCase()}</span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#617594] shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 mt-2 w-52 rounded-2xl bg-white border border-[#CBDDEB] shadow-[0_12px_36px_rgba(11,23,40,0.12)] p-1.5 z-50 focus:outline-none animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#617594] border-b border-[#EAF2F8] mb-1">
            {t("nav.language", "Select Language")}
          </div>
          {supportedLanguages.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                role="option"
                aria-selected={isSelected}
                type="button"
                onClick={() => handleSelect(opt.code)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-[14px] transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#E7EDF5] text-[#0B1728] font-bold"
                    : "text-[#1E2E42] hover:bg-[#F4F8FB] hover:text-[#0B1728] font-medium"
                }`}
              >
                <span className="flex items-center gap-2.5 min-w-0">
                  <LanguageFlag code={opt.code} />
                  <span className="truncate">{opt.nativeLabel}</span>
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#617594] bg-[#CBDDEB]/40 px-1.5 py-0.5 rounded">
                    {opt.code}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-[#617594]" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
