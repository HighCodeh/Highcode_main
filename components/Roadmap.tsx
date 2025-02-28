"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Sparkles, Rocket, Zap, Lock } from "lucide-react"

const roadmapItems = [
  {
    date: "Q4 2023",
    title: "Genesis Launch",
    status: "completed",
    description: "O início da revolução em hardware hacking",
    icon: Rocket,
    features: ["Interface inicial", "Suporte básico RF", "Primeiros protótipos", "Testes alpha"],
    highlight: "Lançamento do primeiro protótipo funcional",
  },
  {
    date: "Q1 2024",
    title: "Evolution",
    status: "current",
    description: "Expandindo capacidades e recursos",
    icon: Zap,
    features: ["Interface completa", "Suporte NFC avançado", "SDK público beta", "App mobile v1.0"],
    highlight: "Lançamento do SDK público",
  },
  {
    date: "Q2 2024",
    title: "Expansion",
    status: "upcoming",
    description: "Novos horizontes e possibilidades",
    icon: Sparkles,
    features: ["Cloud integration", "AI-powered analysis", "Community plugins", "Advanced RF tools"],
    highlight: "Integração com IA para análise",
  },
  {
    date: "Q3 2024",
    title: "Mastery",
    status: "upcoming",
    description: "Dominando o futuro da segurança",
    icon: Lock,
    features: ["Enterprise features", "Advanced automation", "Custom hardware mods", "Pro training platform"],
    highlight: "Plataforma de treinamento profissional",
  },
]

export default function Roadmap() {
  return (
    <section className="py-32 relative" id="roadmap">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8C2AFF]/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[#8C2AFF] text-sm font-medium tracking-wider uppercase mb-4 block">Roadmap</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Nossa <span className="text-[#8C2AFF]">jornada</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Acompanhe nossa evolução e próximos passos rumo ao lançamento !
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#8C2AFF]/20 hidden md:block" />

          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-24 last:mb-0"
            >
              <div
                className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <Card className="group bg-white/5 backdrop-blur-xl border-white/10 hover:border-[#8C2AFF]/30 transition-all duration-500 overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-[#8C2AFF]/10">
                          <item.icon className="w-6 h-6 text-[#8C2AFF]" />
                        </div>
                        <div>
                          <Badge
                            variant="secondary"
                            className="mb-2 bg-[#8C2AFF]/10 text-[#8C2AFF] border-[#8C2AFF]/20"
                          >
                            {item.date}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            {item.status === "completed" ? (
                              <CheckCircle2 className="w-5 h-5 text-[#8C2AFF]" />
                            ) : (
                              <Circle className="w-5 h-5 text-[#8C2AFF]" />
                            )}
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 bg-[#8C2AFF]/5 rounded-lg border border-[#8C2AFF]/10">
                        <p className="text-[#8C2AFF] text-sm font-medium">{item.highlight}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Timeline Point */}
                <div className="absolute left-0 md:static z-10">
                  <div className="w-12 h-12 rounded-full bg-[#8C2AFF]/10 border border-[#8C2AFF]/30 flex items-center justify-center">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="w-6 h-6 text-[#8C2AFF]" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#8C2AFF]" />
                    )}
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

