"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Lang } from "@/data/i18n";
import { t } from "@/data/i18n";

interface ShakeAnimationProps {
  lang: Lang;
}

/* キラキラパーティクル */
function Sparkles() {
  const particles = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * 360;
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * 80;
    const y = Math.sin(rad) * 80;
    return { id: i, x, y, delay: i * 0.05, size: i % 2 === 0 ? 8 : 6 };
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0],
            x: [0, p.x * 0.5, p.x],
            y: [0, p.y * 0.5, p.y],
          }}
          transition={{ duration: 0.8, delay: p.delay, ease: "easeOut" }}
          className="absolute text-accent-gold"
          style={{ fontSize: p.size }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}

export default function ShakeAnimation({ lang }: ShakeAnimationProps) {
  const [phase, setPhase] = useState<
    "shake1" | "shake2" | "shake3" | "flash" | "stick"
  >("shake1");

  useEffect(() => {
    // モバイルでバイブレーション（対応端末のみ）
    const vibrate = (pattern: number | number[]) => {
      if (navigator.vibrate) navigator.vibrate(pattern);
    };

    // 3回振って → フラッシュ → 棒が出る
    const timers = [
      setTimeout(() => { setPhase("shake2"); vibrate(80); }, 500),
      setTimeout(() => { setPhase("shake3"); vibrate(80); }, 1000),
      setTimeout(() => { setPhase("flash"); vibrate([30, 30, 60]); }, 1500),
      setTimeout(() => setPhase("stick"), 1700),
    ];

    // 最初の振りでもバイブ
    vibrate(80);

    return () => timers.forEach(clearTimeout);
  }, []);

  const isShaking =
    phase === "shake1" || phase === "shake2" || phase === "shake3";
  const showStick = phase === "stick";
  const showFlash = phase === "flash";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-dvh relative z-10"
    >
      <div className="relative">
        {/* フラッシュエフェクト */}
        <AnimatePresence>
          {showFlash && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.5, 2, 2.5] }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
            >
              <div className="w-40 h-40 rounded-full bg-accent-gold/40 blur-2xl" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* キラキラパーティクル */}
        {(showStick || showFlash) && <Sparkles />}

        {/* おみくじ本体 */}
        <div className={isShaking ? "animate-shake" : ""}>
          <AnimatePresence mode="wait">
            {isShaking && (
              <motion.img
                key="shaking"
                src="/assets/omikuji.webp"
                alt="omikuji"
                width={160}
                height={240}
                className="drop-shadow-lg"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
              />
            )}
            {showFlash && (
              <motion.div
                key="flash-placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                className="w-[160px] h-[240px]"
              />
            )}
            {showStick && (
              <motion.img
                key="stick"
                src="/assets/omikuji-stick.webp"
                alt="omikuji stick"
                width={160}
                height={240}
                className="drop-shadow-lg"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  mass: 0.8,
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* 光の輪エフェクト */}
        {showStick && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.5, 2] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-48 h-48 rounded-full border-2 border-accent-gold/30" />
          </motion.div>
        )}
      </div>

      {/* テキスト */}
      <AnimatePresence mode="wait">
        {isShaking && (
          <motion.p
            key="shaking-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="mt-8 text-xl font-bold text-accent-coral fortune-level"
          >
            {t("shaking", lang)}
          </motion.p>
        )}
        {showStick && (
          <motion.p
            key="result-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mt-8 text-2xl font-bold text-accent-coral fortune-level"
          >
            ...！
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
