import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inspira.dev.br"),
  title: "Coletivo Inspira | Cultura, cuidado e tecnologia",
  description:
    "Cultura, cuidado e tecnologia para movimentar pessoas, projetos e territórios em Bonito-MS, Belo Horizonte-MG e no ambiente digital.",
  applicationName: "Coletivo Inspira",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Coletivo Inspira",
    title: "Coletivo Inspira | Cultura, cuidado e tecnologia",
    description:
      "Pessoas, ideias e projetos conectados para abrir caminhos de impacto social, presença digital e cultura viva.",
  },
  twitter: {
    card: "summary",
    title: "Coletivo Inspira | Cultura, cuidado e tecnologia",
    description:
      "Pessoas, ideias e projetos conectados para movimentar territórios.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
