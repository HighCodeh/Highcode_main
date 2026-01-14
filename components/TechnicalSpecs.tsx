"use client"

import { motion } from "framer-motion"
import {
  Cpu,
  Battery,
  Radio,
  MemoryStickIcon as Memory,
  Usb,
  Nfc,
} from "lucide-react"

const specs = [
  {
    icon: Cpu,
    title: "Processor",
    value: "Dual-MCU",
    details: "ESP32-C5 + ESP32-P4, Wi-Fi Dual-Band + BLE",
  },
  {
    icon: Memory,
    title: "Memory",
    value: "16MB PSRAM",
    details: "16MB Flash",
  },
  {
    icon: Radio,
    title: "RF",
    value: "CC1101 + LoRa",
    details: "300-928 MHz, Multi-modulation",
  },
  {
    icon: Nfc,
    title: "NFC",
    value: "ST25R3916",
    details: "NFC-A/B/F/V, P2P",
  },
  {
    icon: Battery,
    title: "Battery",
    value: "2500mAh Li-Po",
    details: "Rechargeable with USB-C PD",
  },
  {
    icon: Usb,
    title: "Interfaces",
    value: "USB-C OTG",
    details: "UART, SPI, I2C, GPIO",
  },
]

export default function TechnicalSpecs() {
  return (
    <section className="py-24 relative bg-black overflow-hidden" id="specs">
      <div className="absolute inset-0 z-0">
        {/* Subtle glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#8C2AFF]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4a1e99]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6">
            <span className="size-2.5 rounded-full bg-[#8C2AFF] animate-ping" />
            <span className="text-lg font-medium">Open Source Hardware</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff]">
              Technical Specifications
            </span>
          </h2>

          <p className="text-xl text-gray-300">
            Open source hardware designed for{" "}
            <span className="text-white font-medium">demanding developers</span>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl p-6 transition-all duration-500 group-hover:border-[#8C2AFF]/40 group-hover:shadow-[0_0_35px_rgba(140,42,255,0.15)] group-hover:scale-[1.02]">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8C2AFF]/0 via-[#8C2AFF]/0 to-[#8C2AFF]/15" />

                <div className="flex flex-col gap-6 relative">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#8C2AFF]/15 to-[#4a1e99]/15 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <spec.icon className="size-7 text-[#8C2AFF] group-hover:animate-pulse" />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400 tracking-wide">
                      {spec.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-bold mt-1.5 bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff] bg-clip-text text-transparent">
                      {spec.value}
                    </p>
                    <p className="text-gray-400 mt-3 leading-relaxed">
                      {spec.details}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight */}
        <motion.div
          className="mt-20 max-w-3xl mx-auto bg-gradient-to-r from-[#8C2AFF]/10 to-[#4a1e99]/10 border border-white/10 rounded-2xl p-10 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">
                <span className="text-[#a15cff]">Extensible</span> and{" "}
                <span className="text-[#a15cff]">Modular</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                High Boy provides GPIO interface for expansion, allowing you to
                connect sensors, modules, and other devices. Designed to grow
                with your needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#8C2AFF]/20 to-[#4a1e99]/20 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
              <div className="bg-gradient-to-br from-[#8C2AFF] to-[#4a1e99] rounded-xl flex items-center justify-center size-16">
                <Usb className="size-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">GPIO</div>
                <div className="text-gray-400">Unlimited Expansion</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}