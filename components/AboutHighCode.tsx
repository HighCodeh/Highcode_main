"use client"

import { motion } from "framer-motion"
import { ArrowRight, Cpu, Globe2, ShieldAlert } from "lucide-react"
import Link from "next/link"

const REPORT_URL = "https://research.highboy.com.br"

const locations = [
  { label: "Built in", value: "Brazil" },
  { label: "Designed in", value: "Finland" },
  { label: "Manufactured in", value: "Shenzhen" },
  { label: "Operations in", value: "Delaware" },
]

export default function AboutHighCode() {
  return (
    <section
      id="about-high-code"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0018] to-black"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#8C2AFF]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] bg-[#4a1e99]/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 mb-6">
            <Globe2 className="h-4 w-4 text-[#a15cff]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-300">
              About High Code
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            A pro-grade pentesting platform,{" "}
            <span className="text-[#a15cff]">engineered end-to-end</span>.
          </h2>

          <div className="space-y-5 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
            <p>
              The High Boy consolidates the full RF, wireless, and short-range testing
              stack into a single portable device, with Wi-Fi 6 dual-band, Sub-GHz, LoRa,
              BLE 5.3, NFC, RFID, and IR, all running on a dual-MCU ESP32-P4 + ESP32-C5
              architecture with open firmware and open hardware.
            </p>
            <p>
              Designed in Finland, manufactured in Shenzhen and built in Brazil, it's
              engineered with the same rigor we bring to our security research: no
              gimmicks, no vaporware, and a spec sheet that holds up under real-world
              pentesting and IoT security work.
            </p>
            <p className="text-white font-medium">
              The High Boy is the first product from High Code.
            </p>
          </div>

          {/* Locations strip */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {locations.map((loc) => (
              <div
                key={loc.value}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                  {loc.label}
                </div>
                <div className="text-base md:text-lg font-bold text-white mt-1">
                  {loc.value}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff4d4d]/10 hover:bg-[#ff4d4d]/20 border border-[#ff4d4d]/40 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <ShieldAlert className="h-4 w-4 text-[#ff8f8f]" />
              Read our latest security research
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#specs"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <Cpu className="h-4 w-4 text-[#a15cff]" />
              Explore the High Boy
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
