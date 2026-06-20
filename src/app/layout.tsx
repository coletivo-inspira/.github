import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coletivo Inspira | inspira.dev.br",
  description:
    "Coletivo Inspira: arte, cultura, tecnologia e ecoturismo conectando pessoas e projetos em Bonito-MS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="bg-pattern" />
        {children}
      </body>
    </html>
  );
}
