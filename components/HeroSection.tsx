"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Wifi, Bluetooth, Radio, Zap, Nfc, Rss } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleSupportClick = () => {
    window.open("https://pixgg.com/high_code", "_blank");
  };

  const handleGitClick = () => {
    window.open("https://github.com/HighCodeh", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0018] to-black pt-28">
      {/* Space-like background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#8C2AFF]/20 rounded-full blur-[250px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#4a1e99]/20 rounded-full blur-[200px] animate-pulse-slower"></div>
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-10 bg-cover bg-center"></div>
      </div>

      <div className="container relative z-10 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-10 text-center lg:text-left"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 py-3 shadow-lg"
          >
            <span className="size-3 rounded-full bg-[#8C2AFF] animate-pulse" />
            <span className="text-lg font-medium tracking-wide">Beyond a hacking tool</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-extrabold bg-gradient-to-b from-white to-[#a15cff] text-transparent bg-clip-text leading-[0.9] drop-shadow-[0_0_60px_rgba(140,42,255,0.5)]">
            HIGH BOY
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            The ultimate multi-tool for pentesters and tech enthusiasts.
          </p>

          {/* Tech features */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-6 max-w-lg mx-auto lg:mx-0">
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
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#8C2AFF]/40 transition-all duration-300"
              >
                <div className="text-[#a15cff]">{tech.icon}</div>
                <span className="text-md font-medium">{tech.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-10">
            <Button
              size="xl"
              className="bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff] text-white hover:opacity-95 h-16 px-10 text-xl rounded-2xl shadow-[0_0_40px_rgba(140,42,255,0.6)] transition-all hover:scale-105"
              onClick={handleSupportClick}
            >
              Support Project
              <ArrowRight className="ml-4 h-5 w-5" />
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="border-white/30 bg-transparent hover:bg-white/10 h-16 px-10 text-xl rounded-2xl transition-all hover:scale-105"
              onClick={handleGitClick}
            >
              <Github className="mr-3 h-5 w-5" />
              Repository
            </Button>
          </div>
        </motion.div>

        {/* Device image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative max-w-[550px] w-full">
            {/* Aura glow */}
            <div className="absolute -inset-28 bg-gradient-radial from-[#8C2AFF]/30 via-[#3d1b7e]/20 to-transparent rounded-full blur-[180px] z-0 animate-pulse-slow" />

            {/* Flame-like bottom glow */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-14 bg-[#8C2AFF]/50 blur-[90px] rounded-full" />

            {/* Device */}
            <div className="relative z-20 p-4">
              <Image
                src="/hg.png"
                alt="High Boy Device"
                width={600}
                height={600}
                className="w-full h-auto object-contain transition-transform duration-700 drop-shadow-[0_0_70px_rgba(161,92,255,0.45)]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
