"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Cpu,
  Battery,
  Wifi,
  Radio,
  MemoryStickIcon as Memory,
  Usb,
  Nfc,
} from "lucide-react"

const specs = [
  {
    icon: Cpu,
    title: "Processador",
    value: "ESP32-S3",
    details: "Dual-core 240MHz, Wi-Fi + BLE",
  },
  {
    icon: Memory,
    title: "Memória",
    value: "8MB PSRAM",
    details: "16MB Flash",
  },
  {
    icon: Radio,
    title: "RF",
    value: "CC1101",
    details: "300-928 MHz, Multi-modulação",
  },
  {
    icon: Nfc,
    title: "NFC",
    value: "PN7150",
    details: "NFC-A/B/F/V, P2P",
  },
  {
    icon: Battery,
    title: "Bateria",
    value: "2500mAh Li-Po",
    details: "Recarregável com USB-C PD",
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#8C2AFF]/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-white tracking-tight">
            <span className="text-[#8C2AFF]">Especificações</span> Técnicas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Um hardware open source feito para <span className="text-white font-semibold">desenvolvedores exigentes</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0e0e0e] rounded-xl border border-[#8c2aff]/30 p-6 shadow-lg hover:shadow-[#8c2aff]/40 transition-all duration-300 hover:scale-[1.03] group">
                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8c2aff]/10 border border-[#8c2aff]/30 group-hover:bg-[#8c2aff]/20 transition">
                    <spec.icon className="w-6 h-6 text-[#8c2aff]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">{spec.title}</h3>
                    <p className="text-xl font-bold text-white mt-1">{spec.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{spec.details}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
