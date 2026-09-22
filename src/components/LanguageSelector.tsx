import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Language } from "../i18n/types";
import { Globe, ChevronDown, Check } from "lucide-react";

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

  // Close dropdown on click outside
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

  // Mobile layout: Horizontal pill list for quick touch selection
  if (variant === "mobile") {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[#617594]">
          <Globe className="w-4 h-4 text-[#617594]" />
          <span>{t("nav.language", "Language")} / Bahasa / 语言 / Idioma</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {supportedLanguages.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleSelect(opt.code)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-[14px] font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#E7EDF5] text-[#617594] border-[#617594] font-bold shadow-xs"
                    : "bg-white text-[#1E2E42] border-[#CBDDEB] hover:bg-[#F4F8FB]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-[16px]">{opt.flag}</span>
                  <span>{opt.nativeLabel}</span>
                </span>
                {isSelected && <Check className="w-4 h-4 text-[#617594]" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Footer layout: Inline selector
  if (variant === "footer") {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#617594]">
          <Globe className="w-3.5 h-3.5 text-[#617594]" />
          <span>{t("footer.switchLanguage", "Change Language:")}</span>
        </span>
        <div className="inline-flex items-center bg-[#0E1D31] p-1 rounded-full border border-[#1B2F4A]">
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
                <span>{opt.flag}</span>
                <span>{opt.nativeLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Navbar layout: Dropdown with Flag and Native Label
  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      <button
        id="language-selector-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select language, currently ${currentLanguageOption.label}`}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#CBDDEB] bg-white hover:bg-[#E7EDF5]/50 text-[#1E2E42] hover:text-[#617594] text-[14px] font-bold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617594] cursor-pointer shadow-2xs"
      >
        <Globe className="w-4 h-4 text-[#617594]" />
        <span className="text-[15px]">{currentLanguageOption.flag}</span>
        <span className="font-semibold text-[13px] tracking-tight">{currentLanguageOption.nativeLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#617594] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-[#CBDDEB] shadow-[0_10px_30px_rgba(11,23,40,0.1)] py-2 z-50 focus:outline-none animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#617594] border-b border-[#EAF2F8] mb-1">
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
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-[14px] font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#E7EDF5] text-[#617594] font-bold"
                    : "text-[#0B1728] hover:bg-[#F4F8FB] hover:text-[#617594]"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-[18px] leading-none">{opt.flag}</span>
                  <span>{opt.nativeLabel}</span>
                </span>
                {isSelected && <Check className="w-4 h-4 text-[#617594]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
