"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Cpu, Radio, Wifi, Shield, ChevronRight, ChevronLeft, Lock, Wrench } from "lucide-react"
import { useState } from "react"

export default function HardwareFeatures() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section className="py-24 relative bg-grid-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Recursos Avançados</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore as capacidades da plataforma definitiva para hardware hacking
          </p>
        </motion.div>

        {/* Feature Carousel */}
        <div className="relative mb-24">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-center"
                    >
                      <feature.icon className="w-12 h-12 text-[#8c2aff] mb-6" />
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-400 mb-6">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-center text-gray-400">
                            <ChevronRight className="w-5 h-5 text-[#8c2aff] mr-2" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-[400px] rounded-xl overflow-hidden bg-[#8c2aff]/5"
                    >
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 hover:bg-black/70 text-white rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 hover:bg-black/70 text-white rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-[#8c2aff]" : "bg-[#8c2aff]/20"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Hardware Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainComponents.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="feature-card h-full overflow-hidden">
                <div className="p-8">
                  <component.icon className="w-8 h-8 text-[#8c2aff] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{component.title}</h3>
                  <p className="text-gray-400 mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <ChevronRight className="w-4 h-4 text-[#8c2aff] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Radio,
    title: "Análise de RF",
    description: "Capture, analise e replique sinais de radiofrequência com precisão profissional",
    capabilities: [
      "Suporte a múltiplas frequências (300-928 MHz)",
      "Decodificação de protocolos em tempo real",
      "Captura e replay de sinais",
      "Análise espectral avançada",
      "Modulações: FSK, OOK, ASK, MSK",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Shield,
    title: "RFID & NFC",
    description: "Ferramentas completas para testes em sistemas RFID e NFC",
    capabilities: [
      "Emulação de cartões NFC/RFID",
      "Clonagem e análise de tags",
      "Suporte a múltiplos protocolos",
      "Ataques de relay e replay",
      "Dump e análise de dados",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Wifi,
    title: "Pentest Wi-Fi",
    description: "Suite completa para testes de penetração em redes sem fio",
    capabilities: [
      "Monitor mode e packet injection",
      "Deauth e evil twin attacks",
      "Captura de handshakes WPA/WPA2",
      "Análise de tráfego em tempo real",
      "Suporte a 2.4GHz e 5GHz",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Lock,
    title: "Segurança IoT",
    description: "Ferramentas especializadas para testes em dispositivos IoT",
    capabilities: [
      "Análise de protocolos IoT",
      "Fuzzing de comunicação",
      "Reverse engineering de firmware",
      "Exploração de vulnerabilidades",
      "Debug via UART/JTAG",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Wrench,
    title: "Customização",
    description: "Plataforma totalmente personalizável para suas necessidades",
    capabilities: [
      "Sistema operacional open source",
      "API completa para desenvolvimento",
      "Suporte a plugins da comunidade",
      "Interface web customizável",
      "CLI avançado para automação",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

const mainComponents = [
  {
    icon: Cpu,
    title: "ESP32-S3",
    description: "Processador dual-core de alto desempenho com Wi-Fi e Bluetooth integrados",
    features: [
      "Dual-core Xtensa LX7 até 240MHz",
      "Wi-Fi 802.11 b/g/n + Bluetooth 5.0 LE",
      "8MB PSRAM para análise avançada",
      "Flash de 16MB para armazenamento",
      "USB-C com modo device/host",
    ],
  },
  {
    icon: Radio,
    title: "CC1101 + PN7150",
    description: "Transceptor RF de baixa potência e controlador NFC avançado",
    features: [
      "Frequências: 300-348 MHz, 387-464 MHz, 779-928 MHz",
      "Modulações: 2-FSK, 4-FSK, GFSK, MSK, OOK, ASK",
      "NFC-A/B/F/V com suporte a emulação",
      "Leitura/escrita de tags RFID",
      "Baixo consumo de energia",
    ],
  },
]

