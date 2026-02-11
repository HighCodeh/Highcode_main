"use client"

import { motion } from "framer-motion"

export default function Features() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-black" id="features">
      {/* Background*/}
      <div className="absolute inset-0 z-0 bg-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6"
          >
            <span className="size-2.5 rounded-full bg-[#8C2AFF] animate-pulse" />
            <span className="text-lg font-medium">Built in Brazil</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Designed & Engineered by <span className="text-[#8C2AFF]">Brazilians</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            100% open source & open hardware — merging innovation, performance, and freedom. Powered by <span className="whitespace-nowrap">Dual-MCU ESP32-C5 + ESP32-P4</span> with <span className="whitespace-nowrap">dual-band WiFi and LoRa</span>.
          </motion.p>
        </motion.div>

        {/* Highlight Banner */}
        <motion.div 
          className="mt-16 md:mt-24 bg-gradient-to-r from-[#8C2AFF]/10 to-[#4a1e99]/10 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                More than a tool — it's a <span className="text-[#a15cff]">platform</span>
              </h3>
              <p className="text-gray-300 mb-6">
                High Boy evolves constantly with new features delivered via firmware updates and apps.  
                Join our global developer community and help shape the future of this device.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}