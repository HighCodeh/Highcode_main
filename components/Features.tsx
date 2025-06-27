"use client"

import { motion } from "framer-motion"
import { Shield, Cpu, Radio, Wifi, Code, Briefcase, Zap, GitBranch, Cctv, WifiOff, Smartphone } from "lucide-react"

const features = [
  {
    icon: <GitBranch className="size-6" />,
    title: "Open source",
    description: "Código totalmente aberto, personalize e analise como quiser.",
  },
  {
    icon: <Cpu className="size-6" />,
    title: "Open Hardware",
    description: "Hardware open source baseado em ESP32-S3 com arquitetura extensível.",
  },
  {
    icon: <Radio className="size-6" />,
    title: "RF Analysis",
    description: "Análise completa de RF com suporte a múltiplos protocolos e frequências.",
  },
  {
    icon: <Shield className="size-6" />,
    title: "Teste de segurança",
    description: "Suite completo de ferramentas para testes em RF, NFC e dispositivos IoT.",
  },
  {
    icon: <Wifi className="size-6" />,
    title: "Wireless Hacking",
    description: "Ferramentas para análise e teste de redes sem fio.",
  },
  {
    icon: <Briefcase className="size-6" />,
    title: "Portátil",
    description: "Compacto, leve e fácil de levar para qualquer lugar.",
  },
  {
    icon: <Zap className="size-6" />,
    title: "Bateria de Longa Duração",
    description: "2500mAh com carregamento rápido via USB-C.",
  },
  {
    icon: <Cctv className="size-6" />,
    title: "Monitoramento",
    description: "Capacidade de monitorar redes e dispositivos em tempo real.",
  },
  {
    icon: <WifiOff className="size-6" />,
    title: "Análise Offline",
    description: "Funciona mesmo sem conexão com a internet.",
  },
{
  icon: <Smartphone className="size-6" />,
  title: "Infravermelho (IR)",
  description: "Controle dispositivos como TVs e ar-condicionados com IR integrado.",
}
]

export default function Features() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-black" id="features">
      {/* Fundo totalmente preto */}
      <div className="absolute inset-0 z-0 bg-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6"
          >
            <span className="size-2.5 rounded-full bg-[#8C2AFF] animate-pulse" />
            <span className="text-lg font-medium">Made in Brasil</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Desenvolvido 100% por <span className="text-[#8C2AFF]">Brasileiros</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            100% open source e open hardware com tecnologia de ponta
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-[#8C2AFF]/30 transition-all duration-500 group h-full">
                <div className="p-6 md:p-7">
                  <div className="bg-[#8C2AFF]/10 p-3 rounded-xl inline-flex mb-5 group-hover:bg-[#8C2AFF]/20 transition-colors">
                    <div className="bg-gradient-to-br from-[#8C2AFF] to-[#4a1e99] rounded-lg flex items-center justify-center size-12">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#a15cff] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-[#8C2AFF] to-[#4a1e99] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner de destaque */}
        <motion.div 
          className="mt-16 md:mt-24 bg-gradient-to-r from-[#8C2AFF]/10 to-[#4a1e99]/10 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Mais que uma ferramenta, uma <span className="text-[#a15cff]">plataforma</span>
              </h3>
              <p className="text-gray-300 mb-6">
                O High Boy evolui constantemente com novas funcionalidades através de atualizações de firmware.
                Junte-se à nossa comunidade de desenvolvedores e contribua para o futuro do dispositivo.
              </p>
              <div className="flex flex-wrap gap-4">

              </div>
            </div>
            
           
          </div>
        </motion.div>
      </div>
    </section>
  )
}