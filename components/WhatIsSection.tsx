"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Cpu, Zap, Wifi, Battery, Usb, Rss, GitBranch, Radio, Shield, Briefcase, Cctv, WifiOff, Smartphone } from "lucide-react"

const features = [
  {
    icon: <GitBranch className="size-6" />,
    title: "Open Source",
    description: "Fully open-source codebase. Customize, audit, and build your own features.",
  },
  {
    icon: <Cpu className="size-6" />,
    title: "Open Hardware",
    description: "Dual-MCU architecture: ESP32-C5 + ESP32-P4 with full hardware documentation and extensibility.",
  },
  {
    icon: <Radio className="size-6" />,
    title: "RF Analysis",
    description: "Full-spectrum RF analysis with Sub-GHz, LoRa, and multi-protocol support.",
  },
  {
    icon: <Shield className="size-6" />,
    title: "Security Testing",
    description: "All-in-one toolkit for RF, NFC, Wi-Fi, BLE, LoRa, and IoT security research.",
  },
  {
    icon: <Wifi className="size-6" />,
    title: "Dual-Band WiFi",
    description: "Advanced dual-band WiFi (2.4GHz + 5GHz) for auditing and pentesting wireless networks.",
  },
  {
    icon: <Briefcase className="size-6" />,
    title: "Portable Design",
    description: "Lightweight, compact, and easy to carry anywhere you go.",
  },
  {
    icon: <Zap className="size-6" />,
    title: "Long Battery Life",
    description: "2500mAh rechargeable battery with fast USB-C charging.",
  },
  {
    icon: <Cctv className="size-6" />,
    title: "Real-Time Monitoring",
    description: "Track, monitor, and log network activity in real time.",
  },
  {
    icon: <WifiOff className="size-6" />,
    title: "Offline Capabilities",
    description: "Works even without an internet connection — anytime, anywhere.",
  },
  {
    icon: <Smartphone className="size-6" />,
    title: "Infrared (IR) Control",
    description: "Control TVs, AC units, and IR-enabled devices seamlessly.",
  },
]

export default function WhatIsSection() {
  return (
    <section
      className="py-16 md:py-28 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0018] to-black"
      id="high"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#8C2AFF]/10 rounded-full blur-[180px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#4a1e99]/10 rounded-full blur-[140px] animate-pulse-slower" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-10 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                What is <span className="text-[#8C2AFF]">High Boy</span>?
              </h2>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto text-left">
                High Boy is a next-gen hardware hacking device that merges power, versatility, and portability into one compact tool. Designed for pentesters and security enthusiasts, it brings full-spectrum capabilities for RF, NFC, Lora, Wi-Fi, BLE, and IoT security testing.
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-left">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-[#8C2AFF]/30 transition-all duration-500 group h-full flex flex-col">
                      <div className="p-6 md:p-7 flex-1 flex flex-col">
                        <div className="bg-[#8C2AFF]/10 p-3 rounded-xl inline-flex mb-5 group-hover:bg-[#8C2AFF]/20 transition-colors w-fit">
                          <div className="bg-gradient-to-br from-[#8C2AFF] to-[#4a1e99] rounded-lg flex items-center justify-center size-12">
                            {feature.icon}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#a15cff] transition-colors">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-400 flex-1">
                          {feature.description}
                        </p>
                      </div>
                      
                      <div className="h-1 bg-gradient-to-r from-[#8C2AFF] to-[#4a1e99] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
