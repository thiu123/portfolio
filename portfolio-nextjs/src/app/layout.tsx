import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body
        style={{
          fontFamily:
            'Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif',
        }}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
