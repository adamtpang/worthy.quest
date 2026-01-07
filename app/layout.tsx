import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Worthy.Quest | The Market for Meaning",
  description: "Open-source dashboard ranking humanity's greatest problems. Find the Quests worth solving based on Meaning, Suffering Cap, and Economic Cost of Inaction.",
  keywords: ["effective altruism", "longtermism", "global problems", "aging", "biosecurity", "desalination", "open source"],
  authors: [{ name: "Worthy.Quest Contributors" }],
  openGraph: {
    title: "Worthy.Quest | The Market for Meaning",
    description: "Open-source dashboard ranking humanity's greatest problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505]`}
      >
        {children}
      </body>
    </html>
  );
}
