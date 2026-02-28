"use client";

import { useState, useEffect, useCallback } from "react";
import type { Lang } from "@/data/i18n";

const LANG_KEY = "konpon-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "ja";
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === "ja" || stored === "en") return stored;
  const browserLang = navigator.language;
  return browserLang.startsWith("ja") ? "ja" : "en";
}

export function useLang() {
  const [lang, setLangState] = useState<Lang>("ja");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLangState(getInitialLang());
    setMounted(true);
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(LANG_KEY, newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "ja" ? "en" : "ja");
  }, [lang, setLang]);

  return { lang, setLang, toggleLang, mounted };
}
