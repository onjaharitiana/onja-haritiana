import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Hotjar from "@hotjar/browser";
import Clarity from "@microsoft/clarity";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onja Haritiana - Développeur Web Expert PME Madagascar",
  description:
    "Développeur web expérimenté qui transforme les défis des PME malagasy en opportunités digitales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const HOTJAR_SITE_ID = process.env.HOTJAR_SITE_ID;
  const HOTJAR_VERSION = process.env.HOTJAR_VERSION;
  const CLARITY_PROJECT_ID = process.env.CLARITY_PROJECT_ID;

  Hotjar.init(Number(HOTJAR_SITE_ID), Number(HOTJAR_VERSION));
  if (CLARITY_PROJECT_ID) {
    Clarity.init(CLARITY_PROJECT_ID);
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "h-full"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
