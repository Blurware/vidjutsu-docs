import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101721",
};

export const metadata: Metadata = {
  title: {
    default: "VidJutsu | Clone meme videos for your brand",
    template: "%s | VidJutsu",
  },
  description:
    "Give your agent typed primitives to turn a short meme reference into a brand-ready video: clone check, character, motion, overlay, and final QA.",
  metadataBase: new URL("https://vidjutsu.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "VidJutsu | Clone meme videos for your brand",
    description:
      "Give your agent typed primitives to turn a short meme reference into a brand-ready video: clone check, character, motion, overlay, and final QA.",
    url: "https://vidjutsu.ai",
    siteName: "VidJutsu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VidJutsu | Clone meme videos for your brand",
    description:
      "Give your agent typed primitives to turn a short meme reference into a brand-ready video: clone check, character, motion, overlay, and final QA.",
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
