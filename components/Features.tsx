"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Shield, Cpu, Radio, Wifi, Lock, Code, CaseUpperIcon, CaseSensitive } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Open source",
    description: "Código totalmente aberto, personalize e analise como quiser.",
  },
  {
    icon: Cpu,
    title: "Open Hardware",
    description: "Hardware open source baseado em ESP32-S3 com arquitetura extensível.",
  },
  {
    icon: Radio,
    title: "RF Analysis",
    description: "Análise completa de RF com suporte a múltiplos protocolos e frequências.",
  },
  {
    icon: Shield,
    title: "Teste de segurança",
    description: "Suite completo de ferramentas para testes em RF, NFC e dispositivos IoT.",
  },

  {
    icon: Wifi,
    title: "Wireless Hacking",
    description: "Ferramentas para análise e teste de redes sem fio.",
  },
  {
    icon: CaseSensitive,
    title: "Portátil",
    description: "Compacto, leve e fácil de levar para qualquer lugar.",
  }

]

export default function Features() {
  return (
    <section className="py-32 relative" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#8C2AFF] text-sm font-medium tracking-wider uppercase mb-4 block">Made in Brasil</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Desenvolvido 100% por <span className="text-[#8C2AFF]">Brasileiros</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            100% open source e open hardware
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10 hover:border-[#8C2AFF]/30 transition-all duration-500 group">
                <div className="size-12 rounded-lg bg-[#8C2AFF]/10 flex items-center justify-center mb-6 group-hover:bg-[#8C2AFF]/20 transition-colors duration-500">
                  <feature.icon className="size-6 text-[#8C2AFF]" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

