"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Sparkles, Rocket, Zap, Lock, MoreHorizontal } from "lucide-react"

const roadmapItems = [
  {
    date: "Q3 2024",
    title: "Gênesis",
    status: "completed",
    description: "O ponto de partida",
    icon: Rocket,
    features: ["Início", "Idealização", "Estudos", "Planejamento"],
    highlight: "Visualização completa",
  },
  {
    date: "Q4 2024",
    title: "Evolução",
    status: "completed",
    description: "Os primeiros passos",
    icon: Zap,
    features: [
      "Escolha dos componentes",
      "Testes em módulos",
      "Esquemático elétrico",
      "Projeção da Rev 1.1",
    ],
    highlight: "Primeiro protótipo",
  },
  {
    date: "Q1 2025",
    title: "Nova fase",
    status: "upcoming",
    description: "Novos desafios e oportunidades",
    icon: Sparkles,
    features: [
      "Estruturação da IDE",
      "Início do firmware",
      "Montagem da Rev 1.1",
      "Projeção da Rev 2.0",
    ],
    highlight: "Continua...",
  },
];


export default function Roadmap() {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative" id="roadmap">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8C2AFF]/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#8C2AFF] text-sm font-medium tracking-wider uppercase mb-4 block">Roadmap</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Nossa <span className="text-[#8C2AFF]">jornada</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Acompanhe nossa evolução e próximos passos rumo ao lançamento !
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#8C2AFF]/20 hidden md:block" />

          {/* Mobile Timeline */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-[#8C2AFF]/20" />

          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-16 md:mb-24 last:mb-0"
            >
              {/* Desktop Layout */}
              <div className={`hidden md:flex items-start gap-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
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

                {/* Desktop Timeline Point */}
                <div className="z-10">
                  <div className="w-12 h-12 rounded-full bg-[#8C2AFF]/10 border border-[#8C2AFF]/30 flex items-center justify-center">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="w-6 h-6 text-[#8C2AFF]" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#8C2AFF]" />
                    )}
                  </div>
                </div>

                <div className="flex-1" />
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex items-start">
                {/* Mobile Timeline Point */}
                <div className="z-10 mr-4">
                  <div className="w-10 h-10 rounded-full bg-[#8C2AFF]/10 border border-[#8C2AFF]/30 flex items-center justify-center">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-[#8C2AFF]" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#8C2AFF]" />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <Card className="group bg-white/5 backdrop-blur-xl border-white/10 hover:border-[#8C2AFF]/30 transition-all duration-500 overflow-hidden">
                    <div className="p-5">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-[#8C2AFF]/10">
                          <item.icon className="w-5 h-5 text-[#8C2AFF]" />
                        </div>
                        <div>
                          <Badge
                            variant="secondary"
                            className="mb-1 bg-[#8C2AFF]/10 text-[#8C2AFF] border-[#8C2AFF]/20 text-xs"
                          >
                            {item.date}
                          </Badge>
                          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            {item.status === "completed" ? (
                              <CheckCircle2 className="w-4 h-4 text-[#8C2AFF]" />
                            ) : (
                              <Circle className="w-4 h-4 text-[#8C2AFF]" />
                            )}
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 p-3 bg-[#8C2AFF]/5 rounded-lg border border-[#8C2AFF]/10">
                        <p className="text-[#8C2AFF] text-xs font-medium">{item.highlight}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Continue Loading Element - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: roadmapItems.length * 0.1 }}
            className="relative hidden md:block"
          >
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <Card className="group bg-white/5 backdrop-blur-xl border-white/10 border-dashed hover:border-[#8C2AFF]/30 transition-all duration-500 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-center">
                      <motion.div
                        className="flex flex-col items-center gap-4"
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          duration: 1.5,
                        }}
                      >
                        <div className="p-3 rounded-xl bg-[#8C2AFF]/10">
                          <Lock className="w-6 h-6 text-[#8C2AFF]" />
                        </div>
                        <h3 className="text-2xl font-bold text-center">Próximos passos</h3>
                        <div className="flex space-x-2 mt-2">
                          <motion.div
                            className="w-3 h-3 rounded-full bg-[#8C2AFF]/40"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1.5,
                              delay: 0,
                            }}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full bg-[#8C2AFF]/60"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1.5,
                              delay: 0.5,
                            }}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full bg-[#8C2AFF]/80"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1.5,
                              delay: 1,
                            }}
                          />
                        </div>
                        <p className="text-gray-400 text-center mt-2">Mais novidades em breve...</p>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Timeline Point */}
              <div className="z-10">
                <motion.div
                  className="w-12 h-12 rounded-full bg-[#8C2AFF]/10 border border-[#8C2AFF]/30 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(140, 42, 255, 0.2)",
                      "0 0 0 10px rgba(140, 42, 255, 0)",
                      "0 0 0 0 rgba(140, 42, 255, 0)",
                    ],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                  }}
                >
                  <MoreHorizontal className="w-6 h-6 text-[#8C2AFF]" />
                </motion.div>
              </div>

              <div className="flex-1" />
            </div>
          </motion.div>

          {/* Continue Loading Element - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: roadmapItems.length * 0.1 }}
            className="relative md:hidden"
          >
            <div className="flex items-start">
              {/* Mobile Timeline Point */}
              <div className="z-10 mr-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-[#8C2AFF]/10 border border-[#8C2AFF]/30 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(140, 42, 255, 0.2)",
                      "0 0 0 8px rgba(140, 42, 255, 0)",
                      "0 0 0 0 rgba(140, 42, 255, 0)",
                    ],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                  }}
                >
                  <MoreHorizontal className="w-5 h-5 text-[#8C2AFF]" />
                </motion.div>
              </div>

              <div className="flex-1">
                <Card className="group bg-white/5 backdrop-blur-xl border-white/10 border-dashed hover:border-[#8C2AFF]/30 transition-all duration-500 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center justify-center">
                      <motion.div
                        className="flex flex-col items-center gap-3"
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          duration: 1.5,
                        }}
                      >
                        <div className="p-2 rounded-lg bg-[#8C2AFF]/10">
                          <Lock className="w-5 h-5 text-[#8C2AFF]" />
                        </div>
                        <h3 className="text-xl font-bold text-center">Próximos passos</h3>
                        <div className="flex space-x-2 mt-1">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-[#8C2AFF]/40"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1.5,
                              delay: 0,
                            }}
                          />
                          <motion.div
                            className="w-2 h-2 rounded-full bg-[#8C2AFF]/60"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1.5,
                              delay: 0.5,
                            }}
                          />
                          <motion.div
                            className="w-2 h-2 rounded-full bg-[#8C2AFF]/80"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1.5,
                              delay: 1,
                            }}
                          />
                        </div>
                        <p className="text-gray-400 text-center mt-1 text-sm">Mais novidades em breve...</p>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

