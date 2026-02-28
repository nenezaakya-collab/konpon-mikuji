"use client";

import type { Lang } from "@/data/i18n";

interface LangToggleProps {
  lang: Lang;
  onToggle: () => void;
}

export default function LangToggle({ lang, onToggle }: LangToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-full bg-card border-2 border-outline text-sm font-bold text-text hover:bg-btn transition-colors cursor-pointer"
      aria-label="Toggle language"
    >
      {lang === "ja" ? "🇯🇵 JP" : "🇬🇧 EN"}
    </button>
  );
}
