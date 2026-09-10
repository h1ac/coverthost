import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Covert Host — Private VPS Hosting, Paid in Crypto",
    template: "%s | Covert Host",
  },
  description:
    "Anonymous VPS hosting paid with crypto. Deploy in minutes, pay with BTC, XMR or USDT. No account, no ID, no logs.",
  applicationName: SITE_NAME,
  keywords: [
    "crypto vps",
    "anonymous vps",
    "privacy vps",
    "no kyc vps",
    "bitcoin vps hosting",
    "monero vps hosting",
    "vps pay with crypto",
    "offshore vps",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "Covert Host — Private VPS Hosting, Paid in Crypto",
    description:
      "Deploy a private Linux VPS in minutes and pay with Bitcoin, Monero, USDT and 15+ other coins. No account, no ID, no logs.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Covert Host — Private VPS Hosting, Paid in Crypto",
    description:
      "Anonymous VPS hosting paid with crypto. Deploy in minutes, pay with BTC, XMR or USDT. No account, no ID, no logs.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
