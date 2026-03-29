import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  title: "VidJutsu — Launch AI Theme Pages",
  description:
    "Launch AI theme pages on TikTok and Instagram. Top up credits, order accounts, generate content, schedule posts.",
  openGraph: {
    title: "VidJutsu — Launch AI Theme Pages",
    description:
      "Launch AI theme pages on TikTok and Instagram. Top up credits, order accounts, generate content, schedule posts.",
    url: "https://vidjutsu.ai",
    siteName: "VidJutsu",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
