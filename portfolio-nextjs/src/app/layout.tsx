import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bui Trung Hieu - Frontend Developer Portfolio",
  description:
    "Frontend Developer specializing in React, Next.js, Vue.js, and modern web technologies. Creating modern, responsive web applications with clean code and great user experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full relative bg-black">
              {/* X Organizations Black Background with Top Glow */} {" "}
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
              }}
            />
            <div className="relative z-10">{children}</div>;
          </div>

          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
