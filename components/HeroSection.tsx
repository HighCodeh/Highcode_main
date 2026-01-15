"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Wifi,
  Bluetooth,
  Radio,
  Zap,
  Nfc,
  Rss,
  Sparkles,
  Cpu,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date("2026-01-01T12:30:00").getTime();
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSupportClick = () => {
    window.open(
      "https://www.kickstarter.com/projects/1502651892/high-boy-for-hackers-makers-and-the-curious",
      "_blank"
    );
  };

  const handleGitClick = () => {
    window.open("https://github.com/HighCodeh", "_blank");
  };

  const handleDiscordClick = () => {
    window.open("https://discord.com/servers/high-code-1282001564441247815", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0018] to-black pt-28">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#8C2AFF]/20 rounded-full blur-[250px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#4a1e99]/20 rounded-full blur-[200px] animate-pulse-slower"></div>
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-10 bg-cover bg-center"></div>
      </div>

      <div className="container relative z-10 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-10 text-center lg:text-left"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-extrabold bg-gradient-to-b from-white to-[#a15cff] text-transparent bg-clip-text leading-[0.9] drop-shadow-[0_0_60px_rgba(140,42,255,0.5)]">
            HIGH BOY
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            The ultimate multi-tool for pentesters and tech explorers. Powered by <span className="text-[#a15cff] font-semibold">Dual-MCU ESP32-C5 + ESP32-P4</span>. Wireless, powerful, and ready to push boundaries.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#8C2AFF]/10 to-[#6a11ff]/5 border border-[#8C2AFF]/40 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_rgba(140,42,255,0.25)] hover:shadow-[0_0_60px_rgba(140,42,255,0.4)] hover:border-[#8C2AFF]/60 transition-all duration-500 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8C2AFF]/5 via-[#a15cff]/5 to-[#8C2AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-0 -right-0 bg-[#8C2AFF]/20 rounded-full p-2"
            >
              <Sparkles className="h-5 w-5 text-[#a15cff]" />
            </motion.div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#8C2AFF]/20 border border-[#8C2AFF]/40 rounded-full px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#a15cff]" />
                <span className="text-xs font-bold text-[#a15cff] tracking-wider uppercase">
                  Community Requested
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Dual-MCU Architecture
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  You asked, we listened! Due to high community demand, we're implementing <span className="text-[#a15cff] font-semibold">WiFi 5GHz</span> with a powerful <span className="text-[#8C2AFF] font-semibold">Dual-MCU setup: ESP32-C5 + ESP32-P4</span>. The <span className="text-white font-semibold">ESP32-C5</span> handles WiFi connectivity while the <span className="text-white font-semibold">ESP32-P4</span> powers advanced processing for enhanced performance.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <div className="flex items-center gap-2 bg-black/30 border border-[#8C2AFF]/30 rounded-lg px-3 py-1.5 hover:border-[#a15cff]/50 transition-all">
                  <Wifi className="h-4 w-4 text-[#a15cff]" />
                  <span className="text-sm font-semibold text-white">WiFi 5GHz</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 border border-[#8C2AFF]/30 rounded-lg px-3 py-1.5 hover:border-[#a15cff]/50 transition-all">
                  <Cpu className="h-4 w-4 text-[#a15cff]" />
                  <span className="text-sm font-semibold text-white">ESP32-C5</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 border border-[#8C2AFF]/30 rounded-lg px-3 py-1.5 hover:border-[#a15cff]/50 transition-all">
                  <Cpu className="h-4 w-4 text-[#a15cff]" />
                  <span className="text-sm font-semibold text-white">ESP32-P4</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 border border-[#8C2AFF]/30 rounded-lg px-3 py-1.5 hover:border-[#a15cff]/50 transition-all">
                  <Zap className="h-4 w-4 text-[#a15cff]" />
                  <span className="text-sm font-semibold text-white">Dual-MCU</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative overflow-visible bg-gradient-to-br from-[#5865F2]/10 to-[#5865F2]/5 border border-[#5865F2]/40 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_rgba(88,101,242,0.25)] hover:shadow-[0_0_60px_rgba(88,101,242,0.4)] hover:border-[#5865F2]/60 transition-all duration-500 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/5 via-[#7289DA]/5 to-[#5865F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <motion.div
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-0 -right-0 bg-[#5865F2]/20 rounded-full p-2"
            >
              <Users className="h-5 w-5 text-[#5865F2]" />
            </motion.div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#5865F2]/20 border border-[#5865F2]/40 rounded-full px-4 py-1.5">
                <svg className="h-3.5 w-3.5 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="text-xs font-bold text-[#5865F2] tracking-wider uppercase">
                  Active Community
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Join Our Discord
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Our Discord is where the magic happens! Connect with hackers, makers, and enthusiasts. Share ideas, get support, and help shape High Boy's development. The community drives our innovation.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-400">Community online now</span>
              </div>

              <button
                onClick={handleDiscordClick}
                className="w-full mt-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(88,101,242,0.5)] flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord Server
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 max-w-2xl mx-auto lg:mx-0">
            {[
              { icon: <Wifi className="h-6 w-6" />, label: "WiFi 2.4" },
              { icon: <Wifi className="h-6 w-6" />, label: "WiFi 5" },
              { icon: <Bluetooth className="h-6 w-6" />, label: "BLE" },
              { icon: <Radio className="h-6 w-6" />, label: "IR" },
              { icon: <Nfc className="h-6 w-6" />, label: "NFC" },
              { icon: <Rss className="h-6 w-6" />, label: "Sub-GHz" },
              { icon: <Rss className="h-6 w-6" />, label: "LoRa" },
              { icon: <Zap className="h-6 w-6" />, label: "USB-C" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#8C2AFF]/40 transition-all duration-300"
              >
                <div className="text-[#a15cff]">{tech.icon}</div>
                <span className="text-md font-medium">{tech.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-12">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative max-w-[550px] w-full">
            <div className="absolute -inset-28 bg-gradient-radial from-[#8C2AFF]/30 via-[#3d1b7e]/20 to-transparent rounded-full blur-[180px] z-0 animate-pulse-slow" />
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-14 bg-[#8C2AFF]/50 blur-[90px] rounded-full" />
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