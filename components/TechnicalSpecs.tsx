"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Cpu, Battery, Wifi, Radio, MemoryStickIcon as Memory, Usb } from "lucide-react"

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
    icon: Wifi,
    title: "NFC",
    value: "PN7150",
    details: "NFC-A/B/F/V, P2P",
  },
  {
    icon: Battery,
    title: "Bateria",
    value: "3000mAh Li-Po",
    details: "USB-C PD",
  },
  {
    icon: Usb,
    title: "Interfaces",
    value: "USB-C OTG",
    details: "UART, SPI, I2C",
  },
]

export default function TechnicalSpecs() {
  return (
    <section className="py-24 relative bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Especificações Técnicas</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hardware de última geração para testes de penetração avançados
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
              <Card className="feature-card purple-gradient h-full">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#8c2aff]/10 rounded-lg">
                      <spec.icon className="w-6 h-6 text-[#8c2aff]" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-400 mb-1">{spec.title}</h3>
                      <p className="text-xl font-semibold text-white mb-2">{spec.value}</p>
                      <p className="text-sm text-gray-400">{spec.details}</p>
                    </div>
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

