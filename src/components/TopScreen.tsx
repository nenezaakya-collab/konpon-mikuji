"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Lang } from "@/data/i18n";
import { t } from "@/data/i18n";

interface TopScreenProps {
  lang: Lang;
  dateStr: string;
  onDraw: () => void;
  alreadyDrawn?: boolean;
}

export default function TopScreen({
  lang,
  dateStr,
  onDraw,
  alreadyDrawn = false,
}: TopScreenProps) {
  const formattedDate =
    lang === "ja"
      ? `${dateStr.replace(/-/g, "年").replace(/年(\d+)$/, "月$1日")}`
      : new Date(dateStr).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-dvh px-6 py-10 relative z-10"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="mb-2"
      >
        <Image
          src="/assets/top.webp"
          alt="Title"
          width={300}
          height={300}
          className="drop-shadow-lg"
          priority
        />
      </motion.div>

      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xs text-text-sub mb-4 text-center max-w-[260px] leading-relaxed"
      >
        {t("appSubtitle", lang)}
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        className="mb-6 animate-float"
      >
        <Image
          src="/assets/konpon-default.webp"
          alt="Kon and Pon"
          width={260}
          height={260}
          className="drop-shadow-lg"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-sm text-text-sub mb-2 dot-divider"
      >
        {formattedDate}
      </motion.p>

      {alreadyDrawn ? (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-3 mt-4"
        >
          <div className="px-8 py-4 bg-btn/60 rounded-full text-text-sub font-bold text-lg border-2 border-outline/30">
            {t("drawButton", lang)}
          </div>
          <p className="text-sm text-accent-coral font-bold text-center whitespace-pre-line">
            {t("alreadyDrawn", lang)}
          </p>
        </motion.div>
      ) : (
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={onDraw}
          className="mt-4 px-10 py-4 bg-gradient-to-r from-accent-coral to-accent-wisteria text-white font-bold text-lg rounded-full border-2 border-outline/30 shadow-lg hover:shadow-xl transition-all cursor-pointer animate-cute-pulse"
        >
          {t("drawButton", lang)}
        </motion.button>
      )}
    </motion.div>
  );
}
