import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

const FAVICON =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3Cdefs%3E%3ClinearGradient%20id='g'%20x1='4'%20y1='36'%20x2='36'%20y2='4'%20gradientUnits='userSpaceOnUse'%3E%3Cstop%20offset='0'%20stop-color='%236366f1'/%3E%3Cstop%20offset='.5'%20stop-color='%238b5cf6'/%3E%3Cstop%20offset='1'%20stop-color='%23a855f7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20x='1.5'%20y='1.5'%20width='37'%20height='37'%20rx='11'%20fill='url(%23g)'/%3E%3Cg%20stroke='%23fff'%20stroke-width='2.4'%20stroke-linecap='round'%20fill='none'%3E%3Cpath%20d='M8%2026C14%2018%2018%2018%2021%2022S28%2027%2032%2021'%20opacity='.55'/%3E%3Cpath%20d='M8%2021C14%2013%2018%2013%2021%2017S28%2022%2032%2016'%20opacity='.9'/%3E%3Cpath%20d='M8%2016C14%209%2018%209%2021%2013S28%2017%2032%2012'%20opacity='.4'/%3E%3C/g%3E%3C/svg%3E";

const SITE_URL = "https://aurorareviewsvoiceai.com";
const TITLE =
  "Best Speech-to-Text Models and AI Agent APIs in 2026: by Aurora Reviews";
const DESCRIPTION =
  "Independent 2026 benchmark review of speech-to-text providers — ElevenLabs, Alibaba Qwen3, AssemblyAI, Google — ranked by FLEURS Word Error Rate (WER) and full-turn latency, with recommendations by use case.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "google30d65614aafe7d83"
  },
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "speech-to-text comparison",
    "best STT API 2026",
    "Word Error Rate benchmark",
    "FLEURS WER",
    "ElevenLabs Scribe v2",
    "AssemblyAI Universal-3",
    "lowest latency voice AI",
    "real-time STT provider",
    "voice AI gateway",
    "Speko benchmark",
  ],
  authors: [{ name: "Aurora Reviews" }],
  creator: "Aurora Reviews",
  publisher: "Aurora Reviews",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "article",
    url: SITE_URL,
    siteName: "Aurora Reviews",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: { icon: FAVICON },
};

// Default to light for all first-time visitors (ignore the OS dark preference),
// but honor a returning visitor's saved choice. Runs before paint to avoid a flash.
const themeInit = `(function(){try{var t=localStorage.getItem('stt-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${mono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
