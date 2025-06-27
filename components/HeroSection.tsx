"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Wifi, Bluetooth, Radio, Zap, Nfc, Rss } from 'lucide-react';
import Image from "next/image";

export default function HeroSection() {
  const handleApoiaClick = () => {
    window.open("https://pixgg.com/high_code", "_blank");
  };

  const handleGitClick = () => {
    window.open("https://github.com/HighCodeh", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#1a0d30] via-[#0a0615] to-black pt-32">

      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8C2AFF]/10 rounded-full filter blur-[150px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#4a1e99]/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div> {/* Gradiente final preto */}
        
        {/* Grade sutil */}
        <div className="absolute inset-0 bg-grid-small-white/[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Conteúdo textual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3"
            >
              <span className="size-3 rounded-full bg-[#8C2AFF] animate-pulse" />
              <span className="text-lg font-medium">Mais que uma ferramenta de hardware hacking</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="font-bold tracking-tight leading-none">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] bg-gradient-to-b from-white to-[#a15cff] text-transparent bg-clip-text leading-[0.9]">
                  HIGH BOY
                </div>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                O dispositivo multiferramenta definitivo para pentest e entusiastas de tecnologia.
              </p>
            </div>

            {/* Tecnologias */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 max-w-xl mx-auto lg:mx-0"
            >
              {[
                { icon: <Wifi className="h-6 w-6" />, label: "WiFi" },
                { icon: <Bluetooth className="h-6 w-6" />, label: "BLE" },
                { icon: <Radio className="h-6 w-6" />, label: "IR" },
                { icon: <Nfc className="h-6 w-6" />, label: "NFC" },
                { icon: <Rss className="h-6 w-6" />, label: "Sub-GHz" },
                { icon: <Zap className="h-6 w-6" />, label: "USB-C" },
              ].map((tech, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-[#8C2AFF]/30"
                >
                  <div className="text-[#a15cff]">{tech.icon}</div>
                  <span className="text-md font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Botões */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                size="xl"
                className="bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff] text-white hover:opacity-90 h-16 px-10 text-xl rounded-xl transition-all hover:shadow-[0_0_30px_rgba(140,42,255,0.5)]"
                onClick={handleApoiaClick}
              >
                Apoiar o projeto
                <ArrowRight className="ml-4 h-5 w-5" />
              </Button>

              <Button
                size="xl"
                variant="outline"
                className="border-white/30 bg-transparent hover:bg-white/10 h-16 px-10 text-xl rounded-xl"
                onClick={handleGitClick}
              >
                <Github className="mr-3 h-5 w-5" />
                Repositório
              </Button>
            </motion.div>
          </motion.div>

          {/* Imagem do dispositivo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative max-w-[600px] w-full">
              {/* Efeitos visuais */}
              <div className="absolute -inset-16 bg-gradient-radial from-[#8C2AFF]/20 to-transparent rounded-full blur-[100px] z-0" />
              
              {/* Moldura do dispositivo */}
              <div className="absolute inset-0 rounded-[40px] border border-white/10 z-10" />
              
              {/* Sombra */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-10 bg-[#8C2AFF]/30 blur-[40px] rounded-full" />
              
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#8C2AFF]/10 rounded-full blur-[60px] animate-pulse-slow" />
              
              {/* Imagem central */}
              <div className="relative z-20 p-8">
                <Image
                  src="/hb.png"
                  alt="Dispositivo High Boy"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain rotate-[5deg] transition-transform duration-500 hover:rotate-0"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}