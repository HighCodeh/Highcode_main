"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Wifi,
  Bluetooth,
  Radio,
  Nfc,
  Rss,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleSupportClick = () => {
    window.open(
      "https://www.kickstarter.com/projects/1502651892/high-boy-for-hackers-makers-and-the-curious",
      "_blank"
    );
  };

  const handleGitClick = () => {
    window.open("https://github.com/HighCodeh", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0018] to-black pt-28">
      <div className="container relative z-10 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          {/* Kickstarter status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-white/5 backdrop-blur-xl border border-[#8C2AFF]/40 rounded-full px-4 py-2"
          >
            <CheckCircle2 className="h-4 w-4 text-[#a15cff]" />
            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
              Kickstarter Funded · $600K+ · 4,589 backers · 80+ countries · Shipping 2026
            </span>
          </motion.div>

          {/* Positioning tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-snug tracking-tight">
            Hardware security research. <span className="text-[#a15cff]">Shipped in a pocket.</span>
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-extrabold bg-gradient-to-b from-white to-[#a15cff] text-transparent bg-clip-text leading-[0.9] drop-shadow-[0_0_60px_rgba(140,42,255,0.5)]">
            HIGH BOY
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            The dual-MCU pentesting platform built by <span className="text-white font-semibold">High Code</span>. Powered by <span className="text-[#a15cff] font-semibold">ESP32-P4 + ESP32-C5</span>, with Wi-Fi 6, Sub-GHz, LoRa, NFC, RFID and IR in a single open-source, pocket-sized device.
          </p>

          {/* Support Project: primary CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#8C2AFF]/15 to-[#4a1e99]/10 border-2 border-[#8C2AFF]/50 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_rgba(140,42,255,0.3)] hover:shadow-[0_0_60px_rgba(140,42,255,0.5)] hover:border-[#a15cff]/80 transition-all duration-500 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8C2AFF]/5 via-[#a15cff]/5 to-[#8C2AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-4 right-4 bg-[#8C2AFF]/20 rounded-full p-2"
            >
              <Rocket className="h-5 w-5 text-[#a15cff]" />
            </motion.div>

            <div className="relative z-10 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 bg-[#8C2AFF]/20 border border-[#8C2AFF]/50 rounded-full px-4 py-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#a15cff]" />
                <span className="text-xs font-bold text-[#a15cff] tracking-wider uppercase">
                  Back the Project · Shipping 2026
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Support the Project
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Help us bring pro-grade hardware security tools to researchers, pentesters and makers around the world. Back High Boy and get early access to the device, firmware, and community.
                </p>
              </div>

              <Button
                size="lg"
                onClick={handleSupportClick}
                className="mt-2 w-full sm:w-auto bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff] hover:from-[#a15cff] hover:to-[#8C2AFF] text-white font-extrabold text-lg md:text-xl px-8 py-7 rounded-xl shadow-[0_0_30px_rgba(140,42,255,0.5)] hover:shadow-[0_0_50px_rgba(140,42,255,0.75)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 group/btn"
              >
                Support Project on Kickstarter
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0">
            {[
              { icon: <Wifi />, label: "Wi-Fi 6 Dual-Band" },
              { icon: <Bluetooth />, label: "BLE 5.3" },
              { icon: <Rss />, label: "Sub-GHz" },
              { icon: <Rss />, label: "LoRa" },
              { icon: <Nfc />, label: "NFC + RFID" },
              { icon: <Radio />, label: "IR" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-[#8C2AFF]/40 transition-all duration-300"
              >
                <div className="text-[#a15cff] h-5 w-5">{tech.icon}</div>
                <span className="text-sm font-semibold text-white">{tech.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent hover:bg-white/10 text-white h-14 px-8 text-lg rounded-2xl transition-all hover:scale-105 font-bold"
              onClick={handleGitClick}
            >
              <Github className="mr-3 h-5 w-5" />
              Open-Source Repository
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative max-w-[550px] w-full">
            <div className="absolute -inset-28 bg-gradient-radial from-[#8C2AFF]/30 via-[#3d1b7e]/20 to-transparent rounded-full blur-[180px] z-0 animate-pulse-slow" />
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-14 bg-[#8C2AFF]/50 blur-[90px] rounded-full" />
            <div className="relative z-20 p-4">
              <Image
                src="/highboy-render-new.png"
                alt="High Boy dual-MCU pentesting device by High Code"
                width={600}
                height={600}
                className="w-full h-auto object-contain drop-shadow-[0_0_70px_rgba(161,92,255,0.45)]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
