export type Lang = "ja" | "en";

export const uiText = {
  appTitle: { ja: "コンポンみくじ", en: "Konpon Mikuji" },
  appSubtitle: {
    ja: "しっかり者のきつねコンと、食いしん坊でマイペースのたぬきポンの小さなお社",
    en: "A tiny shrine of Fox & Tanuki",
  },
  drawButton: { ja: "おみくじを引く", en: "Draw your fortune" },
  todaysFortune: { ja: "今日の運勢", en: "Today's Fortune" },
  luckyColor: { ja: "ラッキーカラー", en: "Lucky Color" },
  luckyFood: { ja: "ラッキーフード", en: "Lucky Food" },
  share: { ja: "シェアする", en: "Share" },
  comeBackTomorrow: { ja: "また明日引いてね", en: "Come back tomorrow!" },
  fromKon: { ja: "🦊 コンより", en: "🦊 From Kon" },
  fromPon: { ja: "🍡 ポンより", en: "🍡 From Pon" },
  kon: { ja: "コン", en: "Kon" },
  pon: { ja: "ポン", en: "Pon" },
  shaking: { ja: "シャカシャカ…", en: "Shaka shaka..." },
  alreadyDrawn: {
    ja: "おみくじは1日1回まで！\nまた明日引いてね",
    en: "Fortune is once a day!\nCome back tomorrow!",
  },
} as const;

export function t(key: keyof typeof uiText, lang: Lang): string {
  return uiText[key][lang];
}
