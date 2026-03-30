import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8",
};

export const metadata: Metadata = {
  title: "VidJutsu — Let Your Agent Earn Digital Income for You",
  description:
    "Your agent researches your niche, writes the creative brief, reviews every video, posts daily, and tells you what's working. $99 to start, $96/week to run.",
  openGraph: {
    title: "VidJutsu — Let Your Agent Earn Digital Income for You",
    description:
      "Your agent researches your niche, writes the creative brief, reviews every video, posts daily, and tells you what's working. $99 to start, $96/week to run.",
    url: "https://vidjutsu.ai",
    siteName: "VidJutsu",
    type: "website",
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
