import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "High Boy - The ultimate multi-tool for pentesters and tech enthusiasts",
  description:
    "High Boy is the ultimate tool for hardware hacking, pentesting, and security research. Professional-grade equipment for RF, NFC, BLE, and IoT security analysis.",
  keywords: [
    "High Boy",
    "High Code",
    "Hardware Hacking",
    "Pentest",
    "Penetration Testing",
    "IoT Security",
    "NFC",
    "Sub-GHz",
    "ESP32",
    "Security Research",
    "Bluetooth Hacking",
    "Wireless Security",
    "Ethical Hacking",
  ],
  authors: [{ name: "High Code Team" }],
  creator: "High Code",
  publisher: "High Code",
  robots: "index, follow",
  metadataBase: new URL("https://highboy.com.br"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://highboy.com.br",
    siteName: "High Boy",
    title: "High Boy - The ultimate multi-tool for pentesters and tech enthusiasts",
    description:
      "A portable device for pentesters and security researchers. RF, NFC, and IoT hacking in one single tool.",
    images: [
      {
        url: "https://highboy.com.br/og-image.jpg", // replace with your official image
        width: 1200,
        height: 630,
        alt: "High Boy Device",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High Boy - Advanced Hardware Hacking Tool",
    description:
      "The ultimate device for pentesters and security enthusiasts. RF, NFC, BLE, and IoT analysis in one platform.",
    images: ["https://highboy.com.br/twitter-image.jpg"], // replace with your official image
    creator: "@highcode",
  },
  generator: "High Code",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Basic SEO */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#0a0018" />
        <link rel="canonical" href="https://highboy.com.br" />
        <meta name="author" content="High Code Team" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "High Boy",
              description:
                "An advanced platform for hardware hacking and security research.",
              brand: {
                "@type": "Brand",
                name: "High Code",
                logo: "https://highboy.com.br/logo.png", // replace with your official logo
              },
              sku: "HB-001",
              mpn: "HB2024",
              category: "Electronics",
              manufacturer: {
                "@type": "Organization",
                name: "High Code",
                url: "https://highcode.com.br",
              },
              releaseDate: "2025",
              image: "https://highboy.com.br/product-image.jpg", // replace with your official product image
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/PreOrder",
                price: "2499.00",
                priceCurrency: "BRL",
                url: "https://highboy.com.br/pre-order",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
