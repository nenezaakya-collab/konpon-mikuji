import type { FortuneResult } from "./fortune";

const STORAGE_PREFIX = "konpon-mikuji-";

interface StoredFortune {
  level: string;
  messageIndex: number;
  colorIndex: number;
  date: string;
}

export function saveFortune(result: FortuneResult): void {
  const key = `${STORAGE_PREFIX}${result.date}`;
  const data: StoredFortune = {
    level: result.level,
    messageIndex: result.messageIndex,
    colorIndex: result.colorIndex,
    date: result.date,
  };
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadTodayFortune(dateStr: string): StoredFortune | null {
  const key = `${STORAGE_PREFIX}${dateStr}`;
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredFortune;
  } catch {
    return null;
  }
}

export function hasTodayFortune(dateStr: string): boolean {
  return loadTodayFortune(dateStr) !== null;
}
