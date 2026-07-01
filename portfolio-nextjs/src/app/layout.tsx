import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Bui Trung Hieu — Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, Vue.js, and modern web technologies. Building production-grade interfaces with clean code and exceptional user experience.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Bui Trung Hieu" }],
  openGraph: {
    title: "Bui Trung Hieu — Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, Vue.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
