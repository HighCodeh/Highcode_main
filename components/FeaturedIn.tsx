"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShieldAlert } from "lucide-react"
import Link from "next/link"

type Outlet = {
  name: string
  url: string
  locale?: string
}

const REPORT_URL = "https://research.highboy.com.br"

// Logos vão ser enviados depois — por ora usamos wordmarks estilizados
// como placeholder textual em escala de cinza. Cada item já é clicável.
const outlets: Outlet[] = [
  { name: "CoinDesk", url: "#" },
  { name: "Tom's Hardware", url: "#" },
  { name: "Cointelegraph", url: "#" },
  { name: "Crypto.news", url: "#" },
  { name: "Blockonomi", url: "#" },
  { name: "Cybersecurity News", url: "#" },
  { name: "Blockchain.news", url: "#" },
  { name: "TradingView", url: "#" },
  { name: "Binance Square", url: "#" },
  { name: "BTC-Echo", url: "#", locale: "DE" },
  { name: "Cryptoast", url: "#", locale: "FR" },
  { name: "Cointelegraph TR", url: "#", locale: "TR" },
]

export default function FeaturedIn() {
  return (
    <section
      className="py-14 md:py-20 relative bg-black border-y border-white/5 overflow-hidden"
      id="press"
      aria-labelledby="featured-in-title"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          id="featured-in-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gray-400 mb-3"
        >
          Featured in
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-center text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Our research on the counterfeit Ledger Nano S Plus supply-chain attack
          has been covered by <span className="text-white font-semibold">20+ international outlets</span>.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-4">
          {outlets.map((outlet, i) => (
            <motion.div
              key={outlet.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="flex items-center justify-center"
            >
              <Link
                href={outlet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-full h-12 px-3 rounded-lg text-center transition-colors"
                aria-label={`Read coverage on ${outlet.name}`}
              >
                <span className="text-sm md:text-base font-semibold text-gray-500 group-hover:text-white transition-colors tracking-tight">
                  {outlet.name}
                </span>
                {outlet.locale && (
                  <span className="ml-2 text-[9px] font-bold uppercase tracking-wider text-gray-600 group-hover:text-[#a15cff] transition-colors">
                    {outlet.locale}
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Ledger Report CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 md:mt-14 max-w-3xl mx-auto"
        >
          <Link
            href={REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#1a0010] via-[#2a0020] to-[#1a0010] border border-[#ff4d4d]/40 hover:border-[#ff6b6b]/80 rounded-2xl px-5 sm:px-6 py-5 transition-all hover:shadow-[0_0_40px_rgba(255,77,77,0.25)]"
          >
            <div className="flex items-start sm:items-center gap-4 text-left">
              <div className="shrink-0 bg-[#ff4d4d]/15 border border-[#ff4d4d]/40 rounded-xl p-3">
                <ShieldAlert className="h-6 w-6 text-[#ff8f8f]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#ff4d4d]/20 border border-[#ff4d4d]/40 text-[#ffb0b0] rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d4d] animate-pulse" />
                  New Research
                </div>
                <div className="text-white font-semibold text-base md:text-lg leading-tight">
                  Counterfeit Ledger Nano S Plus with ESP32 Implant
                </div>
                <div className="text-gray-400 text-sm mt-0.5">
                  Full forensic analysis — $9.5M+ losses across 50+ victims.
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#ff4d4d]/10 group-hover:bg-[#ff4d4d]/20 border border-[#ff4d4d]/40 text-white font-semibold px-5 py-3 rounded-xl whitespace-nowrap transition-colors">
              Read the report
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
