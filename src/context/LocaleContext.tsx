import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";

// Supported languages
const LANGS = ["en", "es"] as const;
type Lang = typeof LANGS[number];

type Translations = typeof en;

interface LocaleContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const getInitialLang = (): Lang => {
    const browserLang = navigator.language.slice(0, 2);
    return LANGS.includes(browserLang as Lang) ? (browserLang as Lang) : "en";
  };

  const [lang, setLang] = useState<Lang>(getInitialLang());
  const [t, setT] = useState<Translations>(lang === "es" ? es : en);

  useEffect(() => {
    setT(lang === "es" ? es : en);
  }, [lang]);

  return (
    <LocaleContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within a LocaleProvider");
  return context;
}; 