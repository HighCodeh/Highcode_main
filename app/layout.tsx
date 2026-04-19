import type React from "react"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const SITE_URL = "https://highboy.com.br"
const SITE_TITLE =
  "High Boy | Hardware security research in your pocket | High Code"
const SITE_DESCRIPTION =
  "High Boy is the dual-MCU (ESP32-P4 + ESP32-C5) pentesting platform built by High Code, a hardware security research company. Wi-Fi 6, Sub-GHz, LoRa, NFC, RFID and IR in a single open-source device."

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | High Boy",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "High Boy",
    "High Code",
    "Hardware Hacking",
    "Hardware Security Research",
    "Pentest",
    "Penetration Testing",
    "IoT Security",
    "Supply Chain Security",
    "NFC",
    "RFID",
    "Sub-GHz",
    "LoRa",
    "ESP32",
    "ESP32-P4",
    "ESP32-C5",
    "Wi-Fi 6",
    "BLE",
    "Security Research",
    "Bluetooth Hacking",
    "Wireless Security",
    "Ethical Hacking",
    "Open Source Hardware",
  ],
  authors: [{ name: "High Code", url: "https://high-code.com" }],
  creator: "High Code",
  publisher: "High Code",
  applicationName: "High Boy",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    url: SITE_URL,
    siteName: "High Boy",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "High Boy dual-MCU pentesting device by High Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Dual-MCU pentesting platform by High Code. Wi-Fi 6, Sub-GHz, LoRa, NFC, RFID and IR in a single open-source device.",
    images: [`${SITE_URL}/twitter-image.jpg`],
    creator: "@highcode_br",
    site: "@highcode_br",
  },
  generator: "High Code",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "High Boy",
    description:
      "Dual-MCU (ESP32-P4 + ESP32-C5) pentesting and hardware security research device with Wi-Fi 6, Sub-GHz, LoRa, NFC, RFID and IR in a single open-source tool.",
    brand: {
      "@type": "Brand",
      name: "High Code",
      logo: `${SITE_URL}/logo.png`,
    },
    sku: "HB-001",
    mpn: "HB2026",
    category: "Electronics > Security Research Hardware",
    manufacturer: {
      "@type": "Organization",
      name: "High Code",
      url: "https://high-code.com",
    },
    releaseDate: "2026",
    image: `${SITE_URL}/highboy-render-new.png`,
    url: SITE_URL,
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "High Code",
    alternateName: "High Code Security Research",
    url: "https://high-code.com",
    logo: `${SITE_URL}/logo.png`,
    description:
      "High Code is a hardware-focused cybersecurity company publishing independent security research and building professional-grade tools for pentesters and security researchers.",
    sameAs: [
      "https://github.com/HighCodeh",
      "https://x.com/highcode_br",
      "https://www.instagram.com/highcode.br",
      "https://discord.com/servers/high-code-1282001564441247815",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@high-code.com",
      contactType: "customer support",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "High Boy",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "High Code",
    },
  }

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
        <link rel="canonical" href={SITE_URL} />
        <meta name="author" content="High Code" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TRGDDQJN');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Microsoft Clarity */}
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wdbtwmc9x9");`}
        </Script>
        {/* End Microsoft Clarity */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRGDDQJN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
      <Analytics />
    </html>
  )
}
