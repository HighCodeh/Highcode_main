"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Wifi, Shield, Zap, Smartphone, Lock, Radio } from "lucide-react"

export default function ProductFeatures() {
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
            Explore as funcionalidades que tornam o High Boy a escolha ideal para profissionais de segurança
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
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
                  <feature.icon className="w-8 h-8 text-[#8c2aff] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-[#8c2aff] rounded-full mr-2" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-48 mt-4">
                  <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="feature-card h-full">
                <div className="p-6">
                  <feature.icon className="w-6 h-6 text-[#8c2aff] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const mainFeatures = [
  {
    icon: Wifi,
    title: "Conectividade Avançada",
    description: "Suporte completo a múltiplos protocolos de comunicação sem fio",
    capabilities: [
      "Wi-Fi 6E com suporte a 2.4GHz/5GHz/6GHz",
      "Bluetooth 5.2 com Low Energy",
      "NFC e RFID integrados",
      "GPS de alta precisão",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Shield,
    title: "Segurança Integrada",
    description: "Sistema de segurança multicamada para proteção máxima",
    capabilities: [
      "Criptografia de hardware AES-256",
      "Secure Boot com TPM 2.0",
      "Firewall integrado",
      "VPN com túnel duplo",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

const additionalFeatures = [
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Processamento rápido e eficiente para todas as operações de segurança",
  },
  {
    icon: Smartphone,
    title: "Interface Intuitiva",
    description: "Display OLED de alta resolução com interface touch capacitiva",
  },
  {
    icon: Lock,
    title: "Controle de Acesso",
    description: "Gerenciamento avançado de permissões e autenticação biométrica",
  },
  {
    icon: Radio,
    title: "SDR Integrado",
    description: "Software Defined Radio para análise de espectro em tempo real",
  },
  {
    icon: Shield,
    title: "Pen Testing",
    description: "Ferramentas integradas para testes de penetração profissionais",
  },
  {
    icon: Wifi,
    title: "Análise de Rede",
    description: "Monitoramento e análise avançada de tráfego de rede",
  },
]

