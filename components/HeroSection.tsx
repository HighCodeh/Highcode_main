"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Wifi, Bluetooth, Radio, Zap, Nfc, Rss } from 'lucide-react'
import Image from "next/image"
import { ParticleBackground } from "@/components/particle-background"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-small-white/[0.02] -z-1" />
      <ParticleBackground />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
              <span className="size-3 rounded-full bg-[#8C2AFF] animate-pulse" />
              <span className="text-lg font-medium">Mais que uma ferramenta de hardware hacking</span>
            </div>

            <h1 className="flex flex-col md:flex-row font-bold tracking-tight text-center md:text-left leading-tight">
              <span className="text-[40vw] md:text-[180px] bg-gradient-to-b from-white to-[#8C2AFF] text-transparent bg-clip-text w-full mb-[-0.05em] md:mb-0">
                High
              </span>
              <span className="text-[40vw] md:text-[180px] bg-gradient-to-b from-[#8C2AFF] to-black text-transparent bg-clip-text w-full mt-[-0.05em] md:mt-0 md:ml-4">
                Boy
              </span>
            </h1>

            {/* Technology tags */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <Wifi className="h-4 w-4 text-[#8C2AFF]" />
                <span className="text-sm font-medium">WiFi</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <Bluetooth className="h-4 w-4 text-[#8C2AFF]" />
                <span className="text-sm font-medium">BLE</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <Radio className="h-4 w-4 text-[#8C2AFF]" />
                <span className="text-sm font-medium">IR</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <Nfc className="h-4 w-4 text-[#8C2AFF]" />
                <span className="text-sm font-medium">NFC</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <Rss className="h-4 w-4 text-[#8C2AFF]" />
                <span className="text-sm font-medium">Sub-GHz</span>
              </div>
            </motion.div>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Um dispositivo multiferramenta feito para penteste e geeks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-[#8C2AFF] text-black hover:opacity-90 h-12 px-6 text-base"
              >
                Apoia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-12 px-6 text-base">
                <Github className="mr-2 h-4 w-4" />
                Git
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="relative max-w-[400px] mx-auto">
              <div className="absolute -inset-10 bg-gradient-radial from-[#8C2AFF]/20 to-transparent opacity-70 blur-xl rounded-full" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3d11%20(1).png-897GWP2Vs7vWzMEqpaaZ7AXoTPGwhd.jpeg"
                alt="Dispositivo High Code"
                width={400}
                height={400}
                className="object-contain mix-blend-lighten relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
