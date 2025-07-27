import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "MotherCare - Gynecologist Specialist Hospital | Women's Healthcare",
  description: "MotherCare provides comprehensive women's healthcare services including obstetrics, gynecology, fertility treatment, and advanced laparoscopic surgery. Expert doctors, modern facilities, 24/7 emergency care.",
  keywords: ["gynecologist", "obstetrics", "women's health", "pregnancy care", "fertility treatment", "laparoscopic surgery", "hospital"],
  authors: [{ name: "MotherCare Hospital" }],
  creator: "MotherCare Hospital",
  publisher: "MotherCare Hospital",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mothercare.com",
    title: "MotherCare - Gynecologist Specialist Hospital",
    description: "Comprehensive women's healthcare services with expert doctors and modern facilities. 24/7 emergency care available.",
    siteName: "MotherCare Hospital",
  },
  twitter: {
    card: "summary_large_image",
    title: "MotherCare - Gynecologist Specialist Hospital",
    description: "Comprehensive women's healthcare services with expert doctors and modern facilities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
