"use client"

import { motion } from "framer-motion"
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6"
          >
            <span className="size-2.5 rounded-full bg-[#8C2AFF] animate-pulse" />
            <span className="text-lg font-medium">Hardware Open Source</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff]">
              Especificações Técnicas
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hardware open source projetado para <span className="text-white font-medium">desenvolvedores exigentes</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative group h-full">
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8C2AFF]/0 via-[#8C2AFF]/0 to-[#8C2AFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 group-hover:border-[#8C2AFF]/30 group-hover:shadow-[0_0_30px_rgba(140,42,255,0.1)]">
                  <div className="flex flex-col gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#8C2AFF]/10 to-[#4a1e99]/10 border border-white/10">
                      <spec.icon className="size-7 text-[#8C2AFF]" />
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 tracking-wide">
                        {spec.title}
                      </h3>
                      <p className="text-xl md:text-2xl font-bold text-white mt-1.5">
                        {spec.value}
                      </p>
                      <p className="text-gray-400 mt-2.5">
                        {spec.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Destaque adicional */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-[#8C2AFF]/10 to-[#4a1e99]/10 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                <span className="text-[#a15cff]">Extensível</span> e <span className="text-[#a15cff]">Modular</span>
              </h3>
              <p className="text-gray-300">
                O High Boy oferece interface GPIO para expansão, permitindo conectar sensores, módulos e 
                outros dispositivos. Projetado para crescer com suas necessidades.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#8C2AFF]/10 to-[#4a1e99]/10 border border-white/10 rounded-2xl p-5 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#8C2AFF] to-[#4a1e99] rounded-xl flex items-center justify-center size-14">
                  <Usb className="size-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">GPIO</div>
                  <div className="text-gray-400">Expansão Ilimitada</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}