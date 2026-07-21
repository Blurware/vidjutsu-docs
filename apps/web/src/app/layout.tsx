import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101721",
};

export const metadata: Metadata = {
  title: {
    default: "VidJutsu | Video primitives for agents",
    template: "%s | VidJutsu",
  },
  description:
    "Give your agent typed video primitives: scrape and download social posts, watch and transcribe video, check compliance, burn overlays and disclaimers, then distribute.",
  metadataBase: new URL("https://vidjutsu.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "VidJutsu | Video primitives for agents",
    description:
      "Give your agent typed video primitives: scrape and download social posts, watch and transcribe video, check compliance, burn overlays and disclaimers, then distribute.",
    url: "https://vidjutsu.ai",
    siteName: "VidJutsu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VidJutsu | Video primitives for agents",
    description:
      "Give your agent typed video primitives: scrape and download social posts, watch and transcribe video, check compliance, burn overlays and disclaimers, then distribute.",
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
