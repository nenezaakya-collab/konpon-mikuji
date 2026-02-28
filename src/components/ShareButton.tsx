"use client";

import { useCallback, useState } from "react";
import type { RefObject } from "react";
import { downloadShareImage } from "@/lib/share";
import type { Lang } from "@/data/i18n";

interface ShareButtonProps {
  lang: Lang;
  shareRef: RefObject<HTMLDivElement | null>;
  fortuneLabel?: string;
}

export default function ShareButton({
  lang,
  shareRef,
  fortuneLabel = "",
}: ShareButtonProps) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSaveImage = useCallback(async () => {
    if (!shareRef.current || saving) return;
    setSaving(true);
    try {
      await downloadShareImage(shareRef.current);
      setSaved(true);
    } finally {
      setSaving(false);
    }
  }, [shareRef, saving]);

  const shareText =
    lang === "ja"
      ? `今日のコンポンみくじは「${fortuneLabel}」でした！`
      : `My Konpon Mikuji fortune today: "${fortuneLabel}"!`;

  const hashtag = lang === "ja" ? "コンポンみくじ" : "KonponMikuji";

  const handleShareX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&hashtags=${encodeURIComponent(hashtag)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShareLINE = () => {
    const url = `https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(shareText + " #" + hashtag)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Save image */}
      <button
        onClick={handleSaveImage}
        disabled={saving}
        className="px-8 py-3 bg-accent-coral text-white font-bold rounded-full border-2 border-outline/30 hover:bg-accent-wisteria transition-colors shadow-md disabled:opacity-50 cursor-pointer"
      >
        {saving ? "..." : saved ? (lang === "ja" ? "保存しました" : "Saved!") : (lang === "ja" ? "画像を保存" : "Save Image")}
      </button>

      {/* SNS share buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleShareX}
          className="px-5 py-2 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-colors shadow-sm cursor-pointer"
        >
          X
        </button>
        <button
          onClick={handleShareLINE}
          className="px-5 py-2 bg-[#06C755] text-white text-sm font-bold rounded-full hover:bg-[#05b34d] transition-colors shadow-sm cursor-pointer"
        >
          LINE
        </button>
      </div>
    </div>
  );
}
