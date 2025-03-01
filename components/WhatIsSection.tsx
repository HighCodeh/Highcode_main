
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Adicionando 'export default' explicitamente
export default function WhatIsSection() {
  return (
    <section className="py-24 relative bg-black/50" id="high">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que é o <span className="text-[#8C2AFF]">High Boy</span>?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              O High Boy é uma ferramentaa de hardware hacking que combina potência, versatilidade e
              portabilidade em um único dispositivo. Projetado para profissionais de segurança e entusiasdas, ele
              oferece um conjunto completo de ferramentas para análise RF, NFC , Wifi, Ble e testes de segurança IoT.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-[#8C2AFF] mt-2 flex-shrink-0" />
                <p>Processador ESP32-S3 dual-core com Wi-Fi e Bluetooth integrados</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-[#8C2AFF] mt-2 flex-shrink-0" />
                <p>Suporte a múltiplas frequências (300-928 MHz) para análise RF completa</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-[#8C2AFF] mt-2 flex-shrink-0" />
                <p>Interface capacitiva com display LCD de alta resolução</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-2 rounded-full bg-[#8C2AFF] mt-2 flex-shrink-0" />
                <p>Sistema operacional customizável e open-source</p>
              </li>
            </ul>
          </motion.div>

          {/* Imagens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/foto1.jpeg"
                  alt="High Boy - Vista Frontal"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/foto2.jpeg"
                  alt="High Boy - Interface"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/fundo.webp"
                  alt="High Boy - Detalhes"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/foto4.jpeg"
                  alt="High Boy - Em Uso"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

