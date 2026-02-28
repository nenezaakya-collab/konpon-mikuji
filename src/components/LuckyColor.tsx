import type { LuckyColor as LuckyColorType } from "@/data/colors";
import type { Lang } from "@/data/i18n";
import { t } from "@/data/i18n";

interface LuckyColorProps {
  color: LuckyColorType;
  lang: Lang;
}

export default function LuckyColorDisplay({ color, lang }: LuckyColorProps) {
  const colorName = lang === "ja" ? color.nameJa : color.nameEn;

  return (
    <div className="flex items-center gap-3 justify-center">
      <span className="text-sm font-bold text-text-sub">
        {t("luckyColor", lang)}
      </span>
      <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-outline/20">
        <div
          className="w-5 h-5 rounded-full border border-outline/30"
          style={{ backgroundColor: color.hex }}
        />
        <span className="text-sm font-bold text-text">{colorName}</span>
      </div>
    </div>
  );
}
