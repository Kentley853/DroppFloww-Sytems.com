import React from "react";
import { Language } from "../i18n/types";

interface LanguageFlagProps {
  code: Language;
  className?: string;
}

/**
 * High-definition vector flags that render consistently across all platforms
 * (Windows, macOS, Linux, iOS, Android) without relying on system emoji fonts,
 * which degrade into plain two-letter codes (like 'us', 'id') on Windows.
 */
export const LanguageFlag: React.FC<LanguageFlagProps> = ({ code, className = "" }) => {
  const baseClasses = `inline-block shrink-0 rounded-[2.5px] overflow-hidden border border-[#0B1728]/15 shadow-2xs ${className}`;

  switch (code) {
    case "en":
      // United States Flag (standard 24x16 ratio)
      return (
        <svg
          viewBox="0 0 24 16"
          className={`w-5 h-3.5 ${baseClasses}`}
          aria-label="English (United States)"
          role="img"
        >
          {/* 13 stripes: Red & White */}
          <rect width="24" height="16" fill="#B22234" />
          <path
            d="M0 1.23h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0zm0 2.46h24v1.23H0z"
            fill="#FFFFFF"
          />
          {/* Blue canton */}
          <rect width="9.6" height="8.6" fill="#3C3B6E" />
          {/* Clean star dots */}
          <circle cx="2.0" cy="1.8" r="0.6" fill="#FFFFFF" />
          <circle cx="4.8" cy="1.8" r="0.6" fill="#FFFFFF" />
          <circle cx="7.6" cy="1.8" r="0.6" fill="#FFFFFF" />
          <circle cx="3.4" cy="3.5" r="0.6" fill="#FFFFFF" />
          <circle cx="6.2" cy="3.5" r="0.6" fill="#FFFFFF" />
          <circle cx="2.0" cy="5.2" r="0.6" fill="#FFFFFF" />
          <circle cx="4.8" cy="5.2" r="0.6" fill="#FFFFFF" />
          <circle cx="7.6" cy="5.2" r="0.6" fill="#FFFFFF" />
          <circle cx="3.4" cy="6.9" r="0.6" fill="#FFFFFF" />
          <circle cx="6.2" cy="6.9" r="0.6" fill="#FFFFFF" />
        </svg>
      );

    case "id":
      // Indonesian Flag (Sang Saka Merah Putih)
      return (
        <svg
          viewBox="0 0 24 16"
          className={`w-5 h-3.5 ${baseClasses}`}
          aria-label="Bahasa Indonesia (Indonesia)"
          role="img"
        >
          <rect width="24" height="8" fill="#CE1126" />
          <rect y="8" width="24" height="8" fill="#FFFFFF" />
        </svg>
      );

    case "zh":
      // Chinese Flag (Five-star Red Flag)
      return (
        <svg
          viewBox="0 0 24 16"
          className={`w-5 h-3.5 ${baseClasses}`}
          aria-label="简体中文 (China)"
          role="img"
        >
          <rect width="24" height="16" fill="#DE2910" />
          {/* Main big star */}
          <polygon
            points="3.8,1.6 4.3,3.0 5.8,3.0 4.6,3.9 5.0,5.3 3.8,4.4 2.6,5.3 3.0,3.9 1.8,3.0 3.3,3.0"
            fill="#FFDE00"
          />
          {/* 4 small companion stars */}
          <circle cx="7.8" cy="1.8" r="0.55" fill="#FFDE00" />
          <circle cx="9.0" cy="3.2" r="0.55" fill="#FFDE00" />
          <circle cx="9.0" cy="5.0" r="0.55" fill="#FFDE00" />
          <circle cx="7.8" cy="6.4" r="0.55" fill="#FFDE00" />
        </svg>
      );

    case "es":
      // Spanish Flag (Rojigualda)
      return (
        <svg
          viewBox="0 0 24 16"
          className={`w-5 h-3.5 ${baseClasses}`}
          aria-label="Español (Spain)"
          role="img"
        >
          <rect width="24" height="4" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#F1BF00" />
          <rect y="12" width="24" height="4" fill="#AA151B" />
          {/* Stylized crest mark */}
          <rect x="4.8" y="6.2" width="2.4" height="3.6" rx="0.8" fill="#AA151B" opacity="0.85" />
          <circle cx="6.0" cy="5.4" r="0.8" fill="#AA151B" opacity="0.85" />
        </svg>
      );

    default:
      return null;
  }
};
