import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8",
};

export const metadata: Metadata = {
  title: {
    default:
      "VidJutsu — Managed Instagram Pages That Post Daily and Drive Traffic",
    template: "%s | VidJutsu",
  },
  description:
    "VidJutsu gives you a managed Instagram page that posts your videos daily and drives traffic to your product. Your agent handles niche research, scheduling, posting, and analytics. Live in 7 days. $99 to start, $96/week to run.",
  metadataBase: new URL("https://vidjutsu.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "VidJutsu — Managed Instagram Pages That Post Daily and Drive Traffic",
    description:
      "A managed Instagram page that posts your videos daily and drives traffic to your product. Niche research, scheduling, posting, and analytics — handled by your agent.",
    url: "https://vidjutsu.ai",
    siteName: "VidJutsu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VidJutsu — Managed Instagram Pages That Post Daily and Drive Traffic",
    description:
      "A managed Instagram page that posts your videos daily and drives traffic to your product. Live in 7 days.",
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
