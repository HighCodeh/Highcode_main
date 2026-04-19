"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin } from "lucide-react"
import { useDiscordStats, formatCompact } from "@/hooks/use-discord-stats"

// Custom Discord icon (SVG)
export const Discord = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.249a18.113 18.113 0 00-5.487 0 12.58 12.58 0 00-.617-1.25.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.517.07.07 0 00-.032.027C2.136 9.045 1.557 13.578 1.865 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.038.077.077 0 00.084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105 12.497 12.497 0 01-1.781-.849.077.077 0 01-.008-.129c.12-.09.24-.18.354-.27a.075.075 0 01.079-.01c3.747 1.705 7.789 1.705 11.5 0a.075.075 0 01.08.009c.114.09.234.18.354.27a.077.077 0 01-.006.129 11.786 11.786 0 01-1.782.849.076.076 0 00-.04.106c.36.698.771 1.362 1.225 1.993a.076.076 0 00.084.028 19.9 19.9 0 006.002-3.038.077.077 0 00.03-.055c.404-5.185-.672-9.675-2.72-13.66a.062.062 0 00-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
  </svg>
)

const Reddit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.67 13.09c.027.187.04.38.04.575 0 2.93-3.42 5.31-7.64 5.31s-7.64-2.38-7.64-5.31c0-.19.01-.377.04-.56-.84-.39-1.42-1.22-1.42-2.19 0-1.34 1.08-2.42 2.42-2.42.65 0 1.24.26 1.68.68 1.63-1.14 3.83-1.87 6.25-1.96l1.25-5.86c.03-.13.16-.22.29-.19l4.08.87c.29-.59.88-1 1.57-1 .97 0 1.75.78 1.75 1.75s-.78 1.76-1.75 1.76c-.94 0-1.7-.74-1.75-1.66l-3.66-.78-1.11 5.24c2.38.11 4.54.84 6.16 1.97.44-.43 1.03-.69 1.69-.69 1.34 0 2.42 1.08 2.42 2.42 0 .98-.59 1.81-1.43 2.2zM8.46 13.56c0 .77-.62 1.4-1.4 1.4s-1.4-.63-1.4-1.4.63-1.4 1.4-1.4 1.4.62 1.4 1.4zm6.48 0c0 .77-.62 1.4-1.4 1.4s-1.4-.63-1.4-1.4.63-1.4 1.4-1.4 1.4.62 1.4 1.4zm-.45 2.69c.15.15.15.39 0 .54-.9.9-2.6.97-3.1.97-.5 0-2.2-.07-3.1-.97-.15-.15-.15-.39 0-.54.15-.15.39-.15.54 0 .57.57 1.78.77 2.56.77.78 0 1.99-.2 2.56-.77.15-.15.39-.15.54 0z" />
  </svg>
)

export default function SocialSection() {
  const { memberCount } = useDiscordStats()

  const socialMedia = [
    {
      name: "Instagram",
      icon: <Instagram className="size-5 text-white" />,
      url: "https://www.instagram.com/highcode.br",
      handle: "@highcode.br",
      followers: "~20K followers",
    },
    {
      name: "Discord",
      icon: <Discord className="size-5 text-white" />,
      url: "https://discord.gg/highcode",
      handle: "discord.gg/highcode",
      followers: `${memberCount.toLocaleString("en-US")} members`,
    },
    {
      name: "Reddit",
      icon: <Reddit className="size-5 text-white" />,
      url: "https://www.reddit.com/r/Highboy/",
      handle: "r/Highboy",
      followers: "Join the subreddit",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="size-5 text-white" />,
      url: "https://www.linkedin.com/company/highcodeh/",
      handle: "High Code",
      followers: "Follow our page",
    },
    {
      name: "Twitter",
      icon: <Twitter className="size-5 text-white" />,
      url: "https://x.com/highcode_br",
      handle: "@highcode_br",
      followers: "Follow on X",
    },
  ]

  return (
    <section className="py-24 relative bg-black overflow-hidden" id="social">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#8C2AFF]/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#4a1e99]/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff]">
              Our Socials
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Follow our journey and be part of the High Boy community
          </motion.p>
        </div>

        {/* Social media cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialMedia.map((social, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8C2AFF]/30 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="p-6 flex-1">
                <div className="flex items-center gap-4">
                  <div className="bg-[#8C2AFF]/10 p-3 rounded-xl">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{social.name}</h3>
                    <p className="text-[#8C2AFF]">{social.handle}</p>
                  </div>
                </div>
                <p className="text-gray-400 mt-4">{social.followers}</p>
              </div>

              {/* Button */}
              <div className="p-4 border-t border-white/10">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 bg-[#8C2AFF]/10 hover:bg-[#8C2AFF]/20 border border-[#8C2AFF]/20 rounded-lg text-white transition-colors"
                >
                  Follow on {social.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
