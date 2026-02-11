"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react";
import Image from "next/image"

const handleDiscordClick = () => {
  window.open("https://discord.com/servers/high-code-1282001564441247815", "_blank");
};

export default function JoinDiscord() {
    return(
        <section className="py-24 md:py-32 relative overflow-hidden" id="join-discord">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#5865F2]/10 to-[#5865F2]/5 border border-[#5865F2]/40 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_rgba(88,101,242,0.25)] hover:shadow-[0_0_60px_rgba(88,101,242,0.4)] hover:border-[#5865F2]/60 transition-all duration-500 group max-w-6xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#04072A] to-[#190133]/30 pointer-events-none" />

            <div className="absolute top-0 right-0 h-full w-full md:w-full z-0 opacity-90 pointer-events-none">
              <Image 
                src="/discord-background.png" 
                alt="Background"
                fill
                className="object-cover"
              />
            </div>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/5 via-[#7289DA]/5 to-[#5865F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" /> */}
            
            <motion.div
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-4 right-4 bg-[#5865F2]/20 rounded-full p-2"
            >
              <Users className="h-5 w-5 text-[#5865F2]" />
            </motion.div>

            <div className="relative z-10 space-y-4 text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* <div className="inline-flex items-center gap-2 bg-[#5865F2]/20 border border-[#5865F2]/40 rounded-full px-4 py-1.5">
                <Users className="h-3.5 w-3.5 text-[#5865F2]" />
                <span className="text-xs font-bold text-[#5865F2] tracking-wider uppercase">
                  Active Community
                </span>
              </div> */}
              <div>
                <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white leading-tight">
                    Join Our Discord
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Our Discord is where the magic happens! Connect with hackers, makers, and enthusiasts. Share ideas, get support, and help shape High Boy's development. The community drives our innovation.
                  </p>
                </div>

                <button
                  onClick={handleDiscordClick}
                  className="w-full mt-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  Join Discord Server
                </button>
              </div>
              
              <div className="flex flex-col items-center w-full"> 
                <div className="relative w-full max-w-[120px] aspect-square overflow-hidden shadow-lg">
                  <Image 
                    src="/discord_symbol.png"
                    alt="Community Preview"
                    fill
                    // className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <div className="h-5 w-5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xl font-medium text-white">433 Online</span>
                </div>
              </div>
              
            </div>
          </motion.div>
        </section>
    )
}