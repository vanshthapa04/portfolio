import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Vansh Thapa — Full-Stack Developer",
  description:
    "Full-stack developer building AI-powered products. Seven shipped applications spanning resume intelligence, repository analysis, and developer tooling.",
  metadataBase: new URL("https://vansh-portfolio-051.vercel.app"),
  openGraph: {
    title: "Vansh Thapa — Full-Stack Developer",
    description:
      "Full-stack developer building AI-powered products. Seven shipped applications spanning resume intelligence, repository analysis, and developer tooling.",
    url: "https://vansh-portfolio-051.vercel.app",
    siteName: "Vansh Thapa",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Thapa — Full-Stack Developer",
    description:
      "Full-stack developer building AI-powered products."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className="font-sans antialiased"
        style={{ backgroundColor: "#0A0A0C", color: "#EDEDEF" }}
      >
        <ScrollProgress />
        <Background />
        {children}
      </body>
    </html>
  );
}
