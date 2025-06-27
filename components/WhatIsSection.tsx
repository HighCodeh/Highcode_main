"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhatIsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="high">
      {/* Fundo totalmente preto */}
      <div className="absolute inset-0 z-0 bg-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                O que é o <span className="text-[#8C2AFF]">High Boy</span>?
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                O High Boy é uma ferramenta de hardware hacking que combina potência, versatilidade e
                portabilidade em um único dispositivo. Projetado para profissionais de segurança e entusiastas, ele
                oferece um conjunto completo de ferramentas para análise RF, NFC, Wifi, Ble e testes de segurança IoT.
              </p>
              
              <ul className="space-y-5">
                {[
                  "Processador ESP32-S3 dual-core com Wi-Fi e Bluetooth integrados",
                  "Suporte a múltiplas frequências (300-928 MHz) para análise RF completa",
                  "Interface capacitiva com display LCD de alta resolução",
                  "Sistema operacional customizável e open-source",
                  "Bateria de longa duração com carregamento rápido",
                  "Conectividade USB-C e expansão via GPIO"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-gray-300 text-lg"
                  >
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="size-3 rounded-full bg-[#8C2AFF] flex items-center justify-center">
                        <div className="size-1.5 rounded-full bg-white animate-pulse"></div>
                      </div>
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Badge de destaque */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-xl"
            >
              <div className="bg-[#8C2AFF]/10 p-3 rounded-xl">
                <div className="size-10 bg-gradient-to-br from-[#8C2AFF] to-[#4a1e99] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu text-white">
                    <rect width="16" height="16" x="4" y="4" rx="2"/>
                    <path d="M9 9h6v6H9z"/>
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Open Source & Customizável</h3>
                <p className="text-gray-400 mt-1">Totalmente programável com suporte à comunidade</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Galeria de imagens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5 md:gap-7"
          >
            {/* Imagem 1 - Destaque */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="aspect-square relative rounded-3xl overflow-hidden col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
              <div className="absolute inset-0 border border-white/10 rounded-3xl z-10 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 text-white font-medium z-10">High Boy - Vista Frontal</div>
              <Image
                src="/hb3.png"
                alt="High Boy - Vista Frontal"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Imagem 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="aspect-square relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none"></div>
              <Image
                src="/ft1.jpeg"
                alt="High Boy - Interface"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Imagem 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none"></div>
              <Image
                src="/ft2.jpeg"
                alt="High Boy - Detalhes"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}