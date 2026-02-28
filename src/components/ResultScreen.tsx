"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { FortuneResult } from "@/lib/fortune";
import { getFortuneMessage } from "@/lib/fortune";
import type { Lang } from "@/data/i18n";
import { t } from "@/data/i18n";
import ChatBubble from "./ChatBubble";
import LuckyColorDisplay from "./LuckyColor";
import ShareButton from "./ShareButton";

interface ResultScreenProps {
  result: FortuneResult;
  lang: Lang;
  onBackToTop?: () => void;
}

export default function ResultScreen({ result, lang, onBackToTop }: ResultScreenProps) {
  const shareRef = useRef<HTMLDivElement>(null);
  const message = getFortuneMessage(result, lang);
  const fortuneLabel =
    lang === "ja" ? result.config.label.ja : result.config.label.en;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center min-h-dvh px-4 py-8 relative z-10"
    >
      {/* Shareable area */}
      <div className="w-full max-w-md mx-auto cute-card">
      <div
        ref={shareRef}
        className="w-full flex flex-col items-center bg-card rounded-3xl p-6"
      >
        {/* Today's fortune header */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-text-sub mb-2"
        >
          {t("todaysFortune", lang)}
        </motion.p>

        {/* Fortune level */}
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="text-5xl sm:text-6xl fortune-level text-accent-coral mb-6"
        >
          {result.config.emoji} {fortuneLabel}
        </motion.h2>

        {/* Character illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={result.config.image}
            alt={fortuneLabel}
            width={240}
            height={240}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Chat bubbles */}
        <div className="w-full space-y-4 mb-8">
          <ChatBubble
            character="kon"
            name={t("kon", lang)}
            message={message.fox}
            delay={0.8}
          />
          <ChatBubble
            character="pon"
            name={t("pon", lang)}
            message={message.tanuki}
            delay={1.1}
          />
        </div>

        {/* Lucky food */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="text-sm font-bold text-text-sub">
            {t("luckyFood", lang)}
          </span>
          <span className="bg-card rounded-full px-4 py-2 text-sm font-bold text-text border border-outline/20 shadow-sm">
            🍡 {message.food}
          </span>
        </motion.div>

        {/* Lucky color */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mb-6"
        >
          <LuckyColorDisplay color={result.luckyColor} lang={lang} />
        </motion.div>
      </div>
      </div>

      {/* Share button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="mt-4"
      >
        <ShareButton lang={lang} shareRef={shareRef} fortuneLabel={fortuneLabel} />
      </motion.div>

      {/* Back to top */}
      {onBackToTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          onClick={onBackToTop}
          className="mt-6 px-6 py-2 text-sm font-bold text-text-sub bg-btn/60 rounded-full border border-outline/20 hover:bg-btn transition-colors cursor-pointer"
        >
          {lang === "ja" ? "TOPにもどる" : "Back to Top"}
        </motion.button>
      )}

      {/* Come back tomorrow message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="mt-4 text-sm text-text-sub dot-divider"
      >
        {t("comeBackTomorrow", lang)}
      </motion.p>
    </motion.div>
  );
}
