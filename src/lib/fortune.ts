import {
  fortuneLevels,
  fortuneMessages,
  type FortuneLevel,
  type FortuneConfig,
  type FortuneMessage,
} from "@/data/fortunes";
import { luckyColors, type LuckyColor } from "@/data/colors";
import type { Lang } from "@/data/i18n";

export interface FortuneResult {
  level: FortuneLevel;
  config: FortuneConfig;
  message: FortuneMessage;
  luckyColor: LuckyColor;
  messageIndex: number;
  colorIndex: number;
  date: string;
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function dateToSeed(dateStr: string): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export function drawFortune(dateStr: string): FortuneResult {
  const seed = dateToSeed(dateStr);
  const rng = seededRandom(seed);

  // Pick fortune level by weight
  const totalWeight = fortuneLevels.reduce((sum, f) => sum + f.weight, 0);
  let roll = rng() * totalWeight;
  let config = fortuneLevels[0];
  for (const fl of fortuneLevels) {
    roll -= fl.weight;
    if (roll <= 0) {
      config = fl;
      break;
    }
  }

  // Pick message variant
  const messages = fortuneMessages[config.level];
  const messageIndex = Math.floor(rng() * messages.ja.length);

  // Pick lucky color
  const colorIndex = Math.floor(rng() * luckyColors.length);

  return {
    level: config.level,
    config,
    message: messages.ja[messageIndex], // default to ja, will be resolved by lang
    luckyColor: luckyColors[colorIndex],
    messageIndex,
    colorIndex,
    date: dateStr,
  };
}

export function getFortuneMessage(
  result: FortuneResult,
  lang: Lang
): FortuneMessage {
  return fortuneMessages[result.level][lang][result.messageIndex];
}

export function getTodayDateStr(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
