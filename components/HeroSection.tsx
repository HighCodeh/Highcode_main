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
    window.open("https://pixgg.com/high_code", "_blank");
  };

  const handleGitClick = () => {
    window.open("https://github.com/HighCodeh", "_blank");
  };

  const handleKickstarterClick = () => {
    window.open(
      "https://www.kickstarter.com/projects/1502651892/high-boy-for-hackers-makers-and-the-curious",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0018] to-black pt-28">
      {/* Background effects */}
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
          {/* LIVE BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-[#05ce78]/20 border border-[#05ce78]/40 text-[#05ce78] font-semibold backdrop-blur-lg rounded-full px-8 py-3 shadow-[0_0_20px_rgba(5,206,120,0.4)] hover:shadow-[0_0_30px_rgba(5,206,120,0.6)] transition-all duration-300"
          >
            <span className="size-3 rounded-full bg-[#05ce78] animate-pulse"></span>
            <span className="text-lg tracking-wide">LIVE NOW ON KICKSTARTER</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-extrabold bg-gradient-to-b from-white to-[#a15cff] text-transparent bg-clip-text leading-[0.9] drop-shadow-[0_0_60px_rgba(140,42,255,0.5)]">
            HIGH BOY
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            The ultimate multi-tool for pentesters and tech explorers. Wireless, powerful, and ready to push boundaries.
          </p>

          {/* NEW: WiFi 5G Feature Announcement - Positioned after description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#8C2AFF]/10 to-[#6a11ff]/5 border border-[#8C2AFF]/40 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_rgba(140,42,255,0.25)] hover:shadow-[0_0_60px_rgba(140,42,255,0.4)] hover:border-[#8C2AFF]/60 transition-all duration-500 group"
          >
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8C2AFF]/5 via-[#a15cff]/5 to-[#8C2AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Sparkle icon */}
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
              className="absolute -top-2 -right-2 bg-[#8C2AFF]/20 rounded-full p-2"
            >
              <Sparkles className="h-5 w-5 text-[#a15cff]" />
            </motion.div>

            <div className="relative z-10 space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#8C2AFF]/20 border border-[#8C2AFF]/40 rounded-full px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#a15cff]" />
                <span className="text-xs font-bold text-[#a15cff] tracking-wider uppercase">
                  Community Requested
                </span>
              </div>

              {/* Main announcement */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  WiFi 5GHz Implementation
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  You asked, we listened! Due to high community demand, we're implementing <span className="text-[#a15cff] font-semibold">WiFi 5GHz</span> with the powerful <span className="text-white font-semibold">ESP32-C5</span> chip, featuring a <span className="text-[#8C2AFF] font-semibold">Dual-MCU architecture</span> for enhanced performance.
                </p>
              </div>

              {/* Tech specs chips */}
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
                  <Zap className="h-4 w-4 text-[#a15cff]" />
                  <span className="text-sm font-semibold text-white">Dual-MCU</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kickstarter block replaced with LIVE version */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center lg:justify-start pt-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/5 border border-white/10 px-8 py-6 rounded-2xl shadow-lg backdrop-blur-xl w-full sm:w-auto hover:border-[#05ce78]/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Image
                  src="/Kickstarter_logo_2019.svg.png"
                  alt="Kickstarter Logo"
                  width={150}
                  height={50}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="text-[#05ce78] text-base sm:text-lg font-semibold mb-2 tracking-wide">
                  LIVE RIGHT NOW
                </p>
                <Button
                  onClick={handleKickstarterClick}
                  size="lg"
                  className="bg-[#05ce78] text-black font-semibold hover:bg-[#04b96a] rounded-xl px-8 py-6 text-lg flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_25px_rgba(5,206,120,0.4)]"
                >
                  Back this project
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="bg-gradient-to-br from-[#8C2AFF]/10 to-[#4a1e99]/5 border border-[#8C2AFF]/30 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_rgba(140,42,255,0.2)] w-full max-w-2xl">
              <p className="text-center text-[#a15cff] font-semibold text-sm tracking-widest mb-4 uppercase">
                Campaign Ends In
              </p>
              <div className="grid grid-cols-4 gap-3 sm:gap-6">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Minutes" },
                  { value: timeLeft.seconds, label: "Seconds" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex flex-col items-center bg-black/40 border border-[#8C2AFF]/20 rounded-xl p-3 sm:p-4 hover:border-[#8C2AFF]/50 hover:shadow-[0_0_20px_rgba(140,42,255,0.3)] transition-all duration-300"
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-[#a15cff] text-transparent bg-clip-text tabular-nums">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 mt-1 font-medium uppercase tracking-wide">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech features */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-8 max-w-lg mx-auto lg:mx-0">
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
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#8C2AFF]/40 transition-all duration-300"
              >
                <div className="text-[#a15cff]">{tech.icon}</div>
                <span className="text-md font-medium">{tech.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
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

        {/* Device image */}
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