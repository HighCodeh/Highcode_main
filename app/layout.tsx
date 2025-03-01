import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "High Boy",
  description:
    "High Boy - A ferramenta definitiva para hardware hacking, pentest e pesquisa em segurança. Equipamento profissional para análise RF, NFC e segurança IoT.",
  keywords: [
    "High Boy",
    "High Code",
    "Hardware Hacking",
    "Pentest",
    "Teste de Invasão",
    "Pesquisa em Segurança",
    "Análise RF",
    "Hacking NFC",
    "Segurança IoT",
    "Hacking Ético",
    "Testes de Segurança",
    "Segurança de Hardware",
    "Segurança Sem Fio",
    "Radiofrequência",
    "Ferramentas de Segurança",
    "Teste de Penetração",
    "Avaliação de Segurança",
    "Ferramentas Hacker",
    "Segurança Profissional",
    "Plataforma de Segurança",
    "ESP32",
    "SDR",
    "Rádio Definido por Software",
    "Hacking RFID",
    "Segurança Bluetooth",
  ],
  authors: [{ name: "Equipe High Code" }],
  creator: "High Code",
  publisher: "High Code",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://highboy.com.br",
    siteName: "High Code",
    title: "High Code",
    description:
      "Ferramenta para hardware hacking e pesquisa em segurança. Equipamento avançado para análise RF, NFC e segurança IoT.",
    images: [
      {
        url: "https://highcode.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Plataforma High Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High Code - Plataforma Avançada de Hardware Hacking",
    description: "Plataforma profissional para hardware hacking e pesquisa em segurança.",
    images: ["https://highcode.com/twitter-image.jpg"],
    creator: "@highcode",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Adicionando o favicon */}
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="any"
        />
        <link
          rel="icon"
          href="/icon.svg"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "High Boy",
              description: "Plataforma avançada para hardware hacking e pesquisa em segurança",
              brand: {
                "@type": "Brand",
                name: "High Code",
              },
              category: "Hardware de Segurança",
              keywords: "hardware hacking, pentest, pesquisa em segurança, análise RF, hacking NFC",
              manufacturer: "High Code",
              releaseDate: "2024",
              url: "https://highcode.com",
              image: "https://highcode.com/product-image.jpg",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                price: "2499.00",
                priceCurrency: "BRL",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}