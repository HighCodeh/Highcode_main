"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import DeviceModel from "./DeviceModel"
import { Button } from "./ui/button"
import { ArrowRight, Maximize2 } from "lucide-react"
import Image from "next/image"

export default function ProductShowcase() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* 3D Model Viewer */}
        <div className="relative h-[500px] mb-16 rounded-2xl overflow-hidden bg-purple-900/20 backdrop-blur-xl border border-purple-500/20">
          <Suspense fallback={<div>Loading...</div>}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <DeviceModel />
            </Canvas>
          </Suspense>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-sm text-gray-400">Arraste para girar o dispositivo</p>
          </div>
        </div>

        {/* Product Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-purple-900/20 backdrop-blur-xl border border-purple-500/20 group"
          >
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="High Boy - Vista Frontal"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg font-semibold mb-1">Vista Frontal</h3>
              <p className="text-sm text-gray-300">Display OLED de alta resolução</p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-purple-900/20 backdrop-blur-xl border border-purple-500/20 group"
          >
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="High Boy - Vista Lateral"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg font-semibold mb-1">Vista Lateral</h3>
              <p className="text-sm text-gray-300">Design ergonômico e compacto</p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-purple-900/20 backdrop-blur-xl border border-purple-500/20 group"
          >
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="High Boy - Detalhes"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg font-semibold mb-1">Detalhes</h3>
              <p className="text-sm text-gray-300">Acabamento premium em alumínio</p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6"
            >
              <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <Button variant="link" className="text-purple-400 p-0 hover:text-purple-300">
                Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Cpu, Shield, Zap, Wifi, Battery, PenToolIcon as Tool } from "lucide-react"

const productFeatures = [
  {
    icon: Cpu,
    title: "Processador Potente",
    description: "ARM Cortex-M4 120MHz para execução rápida de testes e análises",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Criptografia de hardware e proteção contra adulteração",
  },
  {
    icon: Zap,
    title: "Resposta Rápida",
    description: "Tempo de resposta ultra-baixo para testes em tempo real",
  },
  {
    icon: Wifi,
    title: "Conectividade Total",
    description: "Suporte a Wi-Fi, Bluetooth 5.0, NFC e RFID",
  },
  {
    icon: Battery,
    title: "Bateria Duradoura",
    description: "Até 12 horas de uso contínuo com uma única carga",
  },
  {
    icon: Tool,
    title: "Personalizável",
    description: "Interface e ferramentas totalmente customizáveis",
  },
]

