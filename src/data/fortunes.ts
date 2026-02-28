export type FortuneLevel =
  | "daikichi"
  | "kichi"
  | "chukichi"
  | "shokichi"
  | "suekichi"
  | "kyo";

export interface FortuneMessage {
  fox: string;
  tanuki: string;
  food: string;
}

export interface FortuneConfig {
  level: FortuneLevel;
  label: { ja: string; en: string };
  emoji: string;
  weight: number;
  image: string;
}

export const fortuneLevels: FortuneConfig[] = [
  {
    level: "daikichi",
    label: { ja: "大吉", en: "Great Blessing" },
    emoji: "✨",
    weight: 8,
    image: "/assets/daikichi.webp",
  },
  {
    level: "kichi",
    label: { ja: "吉", en: "Blessing" },
    emoji: "🌸",
    weight: 20,
    image: "/assets/kichi.webp",
  },
  {
    level: "chukichi",
    label: { ja: "中吉", en: "Middle Blessing" },
    emoji: "🍊",
    weight: 25,
    image: "/assets/kichi.webp",
  },
  {
    level: "shokichi",
    label: { ja: "小吉", en: "Small Blessing" },
    emoji: "🍃",
    weight: 25,
    image: "/assets/suekichi.webp",
  },
  {
    level: "suekichi",
    label: { ja: "末吉", en: "Future Blessing" },
    emoji: "🌙",
    weight: 15,
    image: "/assets/suekichi.webp",
  },
  {
    level: "kyo",
    label: { ja: "凶", en: "Misfortune (but it gets better!)" },
    emoji: "👹",
    weight: 7,
    image: "/assets/suekichi.webp",
  },
];

export const fortuneMessages: Record<
  FortuneLevel,
  { ja: FortuneMessage[]; en: FortuneMessage[] }
> = {
  daikichi: {
    ja: [
      {
        fox: "本日は大変よい運勢でございます。やりたかったこと、今日始めてみてくださいね",
        tanuki:
          "わぁ〜大吉だぁ〜！すごいねぇ！お祝いに桜餅食べよぉ〜。ピンクのもの食べるといいことあるんだってぇ",
        food: "桜餅",
      },
      {
        fox: "人からのお誘いに乗ると、大きなご縁につながりますよ。フットワーク軽めが吉です",
        tanuki:
          "いいことあるんだねぇ〜！たい焼き食べてお祝いしよぉ。頭から食べたら金運もいいんだってぇ。へへ",
        food: "たい焼き",
      },
      {
        fox: "直感がとても冴えている日です。迷ったら最初にピンときた方を選んでみてください",
        tanuki:
          "ぴぴっときたらそっちだよぉ〜。わらび餅食べながら考えよぉ。ぷるぷるしてると頭もやわらかくなるよぉ",
        food: "わらび餅",
      },
    ],
    en: [
      {
        fox: "Today's fortune is truly wonderful. If there's something you've been wanting to start, today is the day.",
        tanuki:
          "Wow, that's amazing~! Let's celebrate with sakura mochi! They say eating pink things brings good luck, you know~",
        food: "Sakura Mochi",
      },
      {
        fox: "Accepting invitations today could lead to a wonderful connection. Keep your schedule open if you can.",
        tanuki:
          "Good things are coming~! Let's have taiyaki to celebrate! If you eat it from the head, it's good for money luck too~ Hehe",
        food: "Taiyaki",
      },
      {
        fox: "Your intuition is very sharp today. If you're torn between choices, trust the one that felt right first.",
        tanuki:
          "Go with your gut feeling~! Let's have warabi mochi while we think. Jiggly things make your brain all flexible~ Hehe",
        food: "Warabi Mochi",
      },
    ],
  },
  kichi: {
    ja: [
      {
        fox: "穏やかですが、いい流れが来ていますよ。自然体で過ごすのが一番の開運法です",
        tanuki:
          "いい感じだねぇ〜。どら焼きでも食べてのんびりしよぉ。あんこってなんかホッとするよねぇ",
        food: "どら焼き",
      },
      {
        fox: "身の回りを整えると運気が上がります。まずはお部屋の片付けからいかがですか？",
        tanuki:
          "お片付けしたらおはぎ食べよぉ〜。もちもちの粘り強さで乗り切れるんだってぇ。えへへ",
        food: "おはぎ",
      },
      {
        fox: "今日の小さな親切は、あとで自分に返ってきますよ。誰かの力になってみてくださいね",
        tanuki:
          "やさしいことするの、いいよねぇ〜。みたらし団子食べて気持ちもまぁるくなろぉ",
        food: "みたらし団子",
      },
    ],
    en: [
      {
        fox: "A calm but favorable current is flowing your way. Being yourself is the best way to attract good fortune today.",
        tanuki:
          "Things are looking nice~ Let's relax with some dorayaki. Sweet bean paste just makes everything feel cozy, you know~",
        food: "Dorayaki",
      },
      {
        fox: "Tidying up your surroundings can boost your luck. How about starting with your desk or room?",
        tanuki:
          "After cleaning up, let's have ohagi~ The sticky rice gives you sticking power to get through anything! Hehe",
        food: "Ohagi",
      },
      {
        fox: "A small act of kindness today will come back to you later. Try doing something nice for someone.",
        tanuki:
          "Being kind is so wonderful~ Let's have mitarashi dango and let our hearts get all warm and round~",
        food: "Mitarashi Dango",
      },
    ],
  },
  chukichi: {
    ja: [
      {
        fox: "焦らなくて大丈夫ですよ。じっくり考えてから動いても遅くはありません",
        tanuki:
          "だいじょうぶだいじょうぶ〜。大福でも食べて元気出そぉ。中に幸せ詰まってるみたいでかわいいよねぇ",
        food: "大福",
      },
      {
        fox: "誰かの何気ないひと言にヒントがありそうです。今日は聞き上手でいてみてくださいね",
        tanuki:
          "おはなし聞くのって楽しいよねぇ〜。かりんとう食べながらゆっくりしよぉ",
        food: "かりんとう",
      },
      {
        fox: "いつものルーティンを少し変えてみるといい発見がありますよ。違う道を歩いてみては？",
        tanuki:
          "おさんぽいいねぇ〜。くず餅食べてから出かけよぉ。ぷるんとしてるとなんかいい気分だよぉ",
        food: "くず餅",
      },
    ],
    en: [
      {
        fox: "There's no need to rush. Taking time to think things through will lead to a good outcome.",
        tanuki:
          "It's okay, it's okay~ Let's have some daifuku to cheer up. They're like little packages of happiness, so cute~",
        food: "Daifuku",
      },
      {
        fox: "Someone's casual remark might hold a valuable hint for you. Try being a good listener today.",
        tanuki:
          "Listening to people is so nice~ Let's have karinto while we chat~",
        food: "Karinto",
      },
      {
        fox: "Changing your routine slightly today could lead to a pleasant discovery. Maybe try a different path?",
        tanuki:
          "A little walk sounds lovely~ Let's have kuzu mochi before we go. Jiggly things put you in a good mood~",
        food: "Kuzu Mochi",
      },
    ],
  },
  shokichi: {
    ja: [
      {
        fox: "派手な変化はありませんが、着実に進んでいますよ。コツコツ続けていることは間違いありません",
        tanuki:
          "がんばってるの、ぼく知ってるよぉ。おせんべいでもかじって一息つこぉ。パリパリしてると気持ちいいよねぇ",
        food: "おせんべい",
      },
      {
        fox: "今日はご自分のための時間を作ってあげてください。頑張りすぎなくていいのですよ",
        tanuki:
          "むりしなくていいんだよぉ。あんみつ食べてのんびりしよぉ。甘いものはこころのお薬だよぉ",
        food: "あんみつ",
      },
      {
        fox: "小さな目標をひとつ決めて達成してみてください。自信がついて、流れが変わりますよ",
        tanuki:
          "ちいさいことからでいいんだよぉ〜。最中食べよぉ。パカッとしたら気持ちも開くよぉ。えへへ",
        food: "最中",
      },
    ],
    en: [
      {
        fox: "No dramatic changes, but you're making steady progress. What you've been working on is absolutely on the right track.",
        tanuki:
          "I know how hard you've been working~ Let's crunch on some senbei and take a little break. The crunchiness feels so good~",
        food: "Senbei",
      },
      {
        fox: "Please take some time for yourself today. You don't have to push so hard, you know.",
        tanuki:
          "You don't have to try so hard~ Let's have anmitsu and take it easy. Sweet things are medicine for the heart~",
        food: "Anmitsu",
      },
      {
        fox: "Try setting one small goal and achieving it. That little confidence boost can change the whole flow.",
        tanuki:
          "Starting small is totally fine~ Let's have monaka! When it goes 'snap' open, your luck opens up too~ Hehe",
        food: "Monaka",
      },
    ],
  },
  suekichi: {
    ja: [
      {
        fox: "ゆっくりですが、ちゃんといい方向に向かっていますよ。ご自分のペースで大丈夫です",
        tanuki:
          "あせらなくていいんだよぉ〜。ぜんざいでもあったまろぉ。あったかいもの食べると気持ちもほかほかだよぉ",
        food: "ぜんざい",
      },
      {
        fox: "今は種まきの時期です。目に見える結果はまだですが、ちゃんと根は育っていますよ",
        tanuki:
          "お花が咲くの楽しみだねぇ〜。草餅食べながら待とぉ。よもぎの匂いってなんか落ち着くよぉ",
        food: "草餅",
      },
      {
        fox: "深呼吸して、今あるものに目を向けてみてください。意外と恵まれていることに気づけますよ",
        tanuki:
          "ぼくはここにいるよぉ〜。きんつば食べよぉ。地味にうまいって最高だよねぇ。へへ",
        food: "きんつば",
      },
    ],
    en: [
      {
        fox: "Things are moving slowly, but they are moving in a good direction. It's perfectly fine to go at your own pace.",
        tanuki:
          "No need to hurry~ Let's warm up with some zenzai. Warm food makes your heart feel all toasty too~",
        food: "Zenzai",
      },
      {
        fox: "This is a time for planting seeds. The results aren't visible yet, but the roots are growing strong.",
        tanuki:
          "Waiting for flowers to bloom is exciting~ Let's have kusa mochi while we wait. The mugwort smell is so calming~",
        food: "Kusa Mochi",
      },
      {
        fox: "Take a deep breath and look at what you already have. You might notice you're more fortunate than you thought.",
        tanuki:
          "I'm right here with you~ Let's have kintsuba. Things that are quietly delicious are the best, you know~ Hehe",
        food: "Kintsuba",
      },
    ],
  },
  kyo: {
    ja: [
      {
        fox: "凶が出ましたが、どうかご安心を。厄を先に出し切ったということは、ここから上がるだけですよ",
        tanuki:
          "だいじょうぶだよぉ、ぼくがいるよぉ。おしるこ食べてあったまろぉ。おいしいもの食べたら絶対元気出るからねぇ",
        food: "おしるこ",
      },
      {
        fox: "今日は無理に動かず、ご自分を休める日にしてくださいね。充電したぶん、明日からの運気は倍返しです",
        tanuki:
          "おやすみの日なんだねぇ〜。豆大福もぐもぐしよぉ。お豆ってなんか元気出るよぉ。えへへ",
        food: "豆大福",
      },
      {
        fox: "凶は『これ以上悪くならない』のサインです。底を打ちましたので、あとは上がるだけですよ",
        tanuki:
          "ぜんぶだいじょうぶだよぉ。カステラ食べよぉ。ふわふわしてたらなんか大丈夫な気がするよぉ",
        food: "カステラ",
      },
    ],
    en: [
      {
        fox: "You drew misfortune, but please don't worry. Getting the bad luck out of the way means things can only go up from here.",
        tanuki:
          "It's okay, I'm right here with you~ Let's have some warm oshiruko. Yummy food always makes everything better, I promise~",
        food: "Oshiruko",
      },
      {
        fox: "Today is a day to rest and recharge. The energy you save now will come back doubled tomorrow.",
        tanuki:
          "It's a rest day~ Let's munch on mame daifuku together. Beans just have this energy to them, you know~ Hehe",
        food: "Mame Daifuku",
      },
      {
        fox: "Misfortune means 'it can't get worse than this.' You've hit the bottom, so the only way is up.",
        tanuki:
          "Everything's gonna be alright~ Let's have castella. Fluffy things just make you feel like it's all gonna be okay~",
        food: "Castella",
      },
    ],
  },
};
