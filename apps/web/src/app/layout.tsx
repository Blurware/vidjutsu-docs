import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8",
};

export const metadata: Metadata = {
  title: {
    default: "VidJutsu | Ad compliance for Meta and TikTok",
    template: "%s | VidJutsu",
  },
  description:
    "Let your AI agent flag ad policy violations before Meta or TikTok does. VidJutsu is the policy intelligence trained on current Meta Advertising Standards and TikTok Ads Policies, updated weekly, with verbatim citations.",
  metadataBase: new URL("https://vidjutsu.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "VidJutsu | Ad compliance for Meta and TikTok",
    description:
      "Let your AI agent flag ad policy violations before Meta or TikTok does. VidJutsu is the policy intelligence trained on current Meta Advertising Standards and TikTok Ads Policies, updated weekly, with verbatim citations.",
    url: "https://vidjutsu.ai",
    siteName: "VidJutsu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VidJutsu | Ad compliance for Meta and TikTok",
    description:
      "Let your AI agent flag ad policy violations before Meta or TikTok does. VidJutsu is the policy intelligence trained on current Meta Advertising Standards and TikTok Ads Policies, updated weekly, with verbatim citations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
