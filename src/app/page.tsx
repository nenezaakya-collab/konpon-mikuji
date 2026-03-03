"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { drawFortune, getTodayDateStr, type FortuneResult } from "@/lib/fortune";
import { saveFortune, hasTodayFortune } from "@/lib/storage";
import { useLang } from "@/lib/useLang";
import SakuraPetals from "@/components/SakuraPetals";
import Confetti from "@/components/Confetti";
import LangToggle from "@/components/LangToggle";
import TopScreen from "@/components/TopScreen";
import ShakeAnimation from "@/components/ShakeAnimation";
import ResultScreen from "@/components/ResultScreen";

type Screen = "top" | "shaking" | "result";

export default function Home() {
  const { lang, toggleLang, mounted } = useLang();
  const [screen, setScreen] = useState<Screen>("top");
  const [result, setResult] = useState<FortuneResult | null>(null);
  const [alreadyDrawn, setAlreadyDrawn] = useState(false);
  const dateStr = getTodayDateStr();

  useEffect(() => {
    if (!mounted) return;
    if (hasTodayFortune(dateStr)) {
      setAlreadyDrawn(true);
    }
  }, [mounted, dateStr]);

  const handleDraw = useCallback(() => {
    setScreen("shaking");
    setTimeout(() => {
      const fortune = drawFortune(dateStr);
      saveFortune(fortune);
      setResult(fortune);
      setScreen("result");
    }, 3500);
  }, [dateStr]);

  const handleBackToTop = useCallback(() => {
    setScreen("top");
    setAlreadyDrawn(true);
  }, []);

  const sakuraIntensity = result?.level === "daikichi" ? 3 : 1;

  if (!mounted) {
    return (
      <div className="min-h-dvh bg-bg flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-btn border-t-accent-coral rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <SakuraPetals intensity={sakuraIntensity} />
      {screen === "result" && result?.level === "daikichi" && <Confetti />}
      <LangToggle lang={lang} onToggle={toggleLang} />
      <div className="fixed bottom-0 inset-x-0 py-3 text-center text-[10px] text-text-sub/60 flex items-center justify-center gap-3" style={{ zIndex: 9999 }}>
        <span>&copy; 2026</span>
        <span>·</span>
        <a href="https://kanacle.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-sub transition-colors">kanacle.com</a>
      </div>
      <AnimatePresence mode="wait">
        {screen === "top" && (
          <TopScreen
            key="top"
            lang={lang}
            dateStr={dateStr}
            onDraw={handleDraw}
            alreadyDrawn={alreadyDrawn}
          />
        )}
        {screen === "shaking" && (
          <ShakeAnimation key="shaking" lang={lang} />
        )}
        {screen === "result" && result && (
          <ResultScreen key="result" result={result} lang={lang} onBackToTop={handleBackToTop} />
        )}
      </AnimatePresence>
    </>
  );
}
