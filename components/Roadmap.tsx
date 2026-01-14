"use client"

import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Rocket, 
  Zap, 
  Lock, 
  MoreHorizontal,
  ChevronRight
} from "lucide-react"

const roadmapItems = [
  {
    date: "Q3 2024",
    title: "Gênesis",
    status: "completed",
    description: "O ponto de partida da jornada High Boy",
    icon: Rocket,
    features: ["Início", "Idealização", "Estudos", "Planejamento"],
    highlight: "Visualização completa do conceito",
  },
  {
    date: "Q4 2024",
    title: "Evolução",
    status: "completed",
    description: "Transformando ideias em realidade",
    icon: Zap,
    features: [
      "Escolha dos componentes",
      "Testes em módulos",
      "Esquemático elétrico",
      "Projeção da Rev 1.0",
    ],
    highlight: "Primeiro protótipo funcional",
  },
  {
    date: "Q1 2025",
    title: "Nova fase",
    status: "upcoming",
    description: "Avançando para novos horizontes",
    icon: Sparkles,
    features: [
      "Estruturação da IDE",
      "Início do firmware",
      "Montagem da Rev 1.1",
      "Projeção da Rev 2.0",
    ],
    highlight: "Firmware básico funcional",
  },
];

export default function Roadmap() {
  return (
    <section className="py-24 relative bg-black overflow-hidden" id="roadmap">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6"
          >
            <span className="size-2.5 rounded-full bg-[#8C2AFF] animate-pulse" />
            <span className="text-lg font-medium">Planejamento Estratégico</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff]">
              Nossa Jornada
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Acompanhe nossa evolução rumo ao lançamento do High Boy
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Linha do tempo */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8C2AFF]/20 to-transparent" />

          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-16 pb-16 group"
            >
              {/* Ponto da linha do tempo */}
              <div className="absolute left-0 top-1 z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8C2AFF]/10 to-[#4a1e99]/10 border border-white/10 flex items-center justify-center">
                  {item.status === "completed" ? (
                    <CheckCircle2 className="size-5 text-[#8C2AFF]" />
                  ) : (
                    <Circle className="size-5 text-[#8C2AFF]" />
                  )}
                </div>
              </div>

              {/* Card */}
              <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 group-hover:border-[#8C2AFF]/30 group-hover:shadow-[0_0_30px_rgba(140,42,255,0.1)]">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-sm font-medium bg-[#8C2AFF]/10 text-[#8C2AFF] border border-[#8C2AFF]/20 rounded-full px-3 py-1">
                          {item.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-[#8C2AFF]/10">
                            <item.icon className="size-5 text-[#8C2AFF]" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-center size-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#8C2AFF]/10 group-hover:border-[#8C2AFF]/30 transition-colors">
                      <ChevronRight className="size-4 text-gray-400 group-hover:text-[#8C2AFF]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {item.status === "completed" ? (
                          <CheckCircle2 className="size-5 text-[#8C2AFF] mt-0.5 flex-shrink-0" />
                        ) : (
                          <Circle className="size-5 text-[#8C2AFF] mt-0.5 flex-shrink-0" />
                        )}
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 p-3 bg-gradient-to-r from-[#8C2AFF]/10 to-[#4a1e99]/10 rounded-lg border border-[#8C2AFF]/10">
                    <p className="text-[#8C2AFF] font-medium flex items-center gap-2">
                      <Sparkles className="size-4" />
                      {item.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Próximos passos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: roadmapItems.length * 0.1 }}
            className="relative pl-16"
          >
            {/* Ponto da linha do tempo animado */}
            <div className="absolute left-0 top-1 z-10">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8C2AFF]/10 to-[#4a1e99]/10 border border-white/10 flex items-center justify-center"
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
                <MoreHorizontal className="size-5 text-[#8C2AFF]" />
              </motion.div>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6 border-dashed">
              <div className="flex flex-col items-center justify-center py-8">
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
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#8C2AFF]/10 to-[#4a1e99]/10">
                    <Lock className="size-6 text-[#8C2AFF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-center text-white">Próximos passos</h3>
                  <div className="flex space-x-2 mt-2">
                    <motion.div
                      className="size-3 rounded-full bg-[#8C2AFF]"
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
                      className="size-3 rounded-full bg-[#8C2AFF]"
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
                      className="size-3 rounded-full bg-[#8C2AFF]"
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
                  <p className="text-gray-400 text-center mt-3 max-w-md">
                    Estamos trabalhando nas próximas fases. Novas atualizações em breve!
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}