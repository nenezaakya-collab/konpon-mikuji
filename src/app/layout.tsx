import type { Metadata } from "next";
import { Zen_Maru_Gothic, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-maru",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://konpon.kanacle.com"),
  title: "コンポンみくじ — きつねとたぬきの毎日おみくじ",
  description:
    "きつねのコンとたぬきのポンが毎日の運勢を届けます。和菓子カラーのゆるかわドット絵おみくじアプリ。",
  manifest: "/manifest.json",
  openGraph: {
    title: "コンポンみくじ — きつねとたぬきの毎日おみくじ",
    description:
      "きつねのコンとたぬきのポンが毎日の運勢を届けます。和菓子カラーのゆるかわドット絵おみくじアプリ。",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "コンポンみくじ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "コンポンみくじ",
    description: "きつねとたぬきの毎日おみくじ",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaru.variable} ${shipporiMincho.variable} antialiased`}
        style={{ fontFamily: "var(--font-maru)" }}
      >
        {children}
        <footer className="fixed bottom-0 inset-x-0 z-[9999] py-2.5 text-center text-[11px] text-text-sub flex items-center justify-center gap-2">
          <span>&copy; 2026</span>
          <span>&middot;</span>
          <a
            href="https://kanacle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-sub no-underline hover:text-text transition-colors"
          >
            kanacle.com
          </a>
        </footer>
      </body>
    </html>
  );
}
