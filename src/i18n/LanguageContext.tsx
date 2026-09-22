import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, LanguageOption, SUPPORTED_LANGUAGES } from "./types";
import { translations, getNestedTranslation, PHRASE_DICTIONARY } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultFallback?: string) => string;
  translatePhrase: (phrase: string) => string;
  supportedLanguages: LanguageOption[];
  currentLanguageOption: LanguageOption;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "droppfloww_user_language";

function detectInitialLanguage(): Language {
  // 1. Check user saved preference
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (saved === "en" || saved === "id" || saved === "zh" || saved === "es")) {
      return saved as Language;
    }
  } catch {
    // ignore
  }

  // 2. Check browser language
  if (typeof navigator !== "undefined" && navigator.language) {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("id") || browserLang.startsWith("in")) return "id";
    if (browserLang.startsWith("zh")) return "zh";
    if (browserLang.startsWith("es")) return "es";
  }

  return "en";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Translate by dotted key e.g. "hero.title" or "nav.overview"
  const t = (key: string, defaultFallback?: string): string => {
    const langDict = translations[language];
    const val = getNestedTranslation(langDict, key);
    if (val !== undefined) return val;

    // Fallback to English
    const enVal = getNestedTranslation(translations.en, key);
    if (enVal !== undefined) return enVal;

    return defaultFallback || key;
  };

  // Translate general text phrases (buttons, tags, industry names)
  const translatePhrase = (phrase: string): string => {
    if (!phrase) return phrase;
    if (language === "en") return phrase;

    const dict = PHRASE_DICTIONARY[language];
    if (dict && dict[phrase]) {
      return dict[phrase];
    }
    return phrase;
  };

  const currentLanguageOption =
    SUPPORTED_LANGUAGES.find((opt) => opt.code === language) || SUPPORTED_LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        translatePhrase,
        supportedLanguages: SUPPORTED_LANGUAGES,
        currentLanguageOption,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
