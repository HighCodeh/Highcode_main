"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Cpu, Zap, Wifi, Battery, Usb, Rss } from "lucide-react"

export default function WhatIsSection() {
  return (
    <section
      className="py-16 md:py-28 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0018] to-black"
      id="high"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#8C2AFF]/10 rounded-full blur-[180px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#4a1e99]/10 rounded-full blur-[140px] animate-pulse-slower" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                What is <span className="text-[#8C2AFF]">High Boy</span>?
              </h2>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                High Boy is a next-gen hardware hacking device that merges power,
                versatility, and portability into one compact tool. Designed for
                pentesters and security enthusiasts, it brings full-spectrum
                capabilities for RF, NFC, Lora, Wi-Fi, BLE, and IoT security testing.
              </p>

              {/* Feature list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: <Cpu className="w-5 h-5 text-[#a15cff]" />, text: "Dual-MCU Architecture Setup" },
                  { icon: <Rss className="w-5 h-5 text-[#a15cff]" />, text: "Multi-band RF analysis (300-928 MHz)" },
                  { icon: <Zap className="w-5 h-5 text-[#a15cff]" />, text: "Capacitive LCD high-res display" },
                  { icon: <Wifi className="w-5 h-5 text-[#a15cff]" />, text: "Open-source customizable OS" },
                  { icon: <Battery className="w-5 h-5 text-[#a15cff]" />, text: "Long-lasting fast-charging battery" },
                  { icon: <Usb className="w-5 h-5 text-[#a15cff]" />, text: "USB-C + GPIO expansion" },
                ].map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 text-gray-300 hover:border-[#8C2AFF]/40 hover:bg-white/10 transition-all"
                  >
                    {f.icon}
                    <span className="text-md font-medium">{f.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Highlight badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-xl shadow-lg"
            >
              <div className="bg-[#8C2AFF]/10 p-3 rounded-xl">
                <div className="size-10 bg-gradient-to-br from-[#8C2AFF] to-[#4a1e99] rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Open Source & Customizable</h3>
                <p className="text-gray-400 mt-1">
                  Fully programmable with community-driven support
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              // agora a imagem é bem maior no mobile
              className="relative w-[100vw] h-[45vh] sm:w-[100vw] sm:h-[75vh] md:w-[100vw] md:h-[70vh] lg:w-[90vw] lg:h-[90vh] xl:w-[120vw] xl:h-[120vh] max-h-[800px]"
            >
              {/* Glow effect */}
              <div className="absolute -inset-40 bg-gradient-radial from-[#8C2AFF]/50 via-transparent to-transparent blur-[250px] animate-pulse z-0" />

              <Image
                src="/mao1.png" // substitua pelo caminho certo do seu PNG
                alt="High Boy in Hand"
                fill
                priority
                className="object-contain relative z-10 drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
