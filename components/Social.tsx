"use client"

import { motion } from "framer-motion"
import { Instagram, Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

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

// Social media data
const socialMedia = [
  {
    name: "Instagram",
    icon: <Instagram className="size-5" />,
    url: "https://www.instagram.com/highcode.br",
    handle: "@highcode.br",
    followers: "13.5K followers",
    posts: ["/i.jpeg", "/i2.jpeg", "/i3.jpeg"],
  },
  {
    name: "Discord",
    icon: <Discord className="size-5" />,
    url: "https://discord.gg/rj7B8e4B2f",
    handle: "@HighCodeh",
    followers: "441 members",
    posts: ["/d.jpeg", "/d2.jpeg", "/d3.jpeg"],
  },
  {
    name: "Twitter",
    icon: <Twitter className="size-5" />,
    url: "https://x.com/highcode_br",
    handle: "@highcode_br",
    followers: "62 followers",
    posts: ["/x.jpeg", "/x1.jpeg", "/x2.jpeg"],
  },
]

export default function SocialSection() {
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
              className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8C2AFF]/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="bg-[#8C2AFF]/10 p-3 rounded-xl">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{social.name}</h3>
                    <p className="text-[#8C2AFF]">{social.handle}</p>
                  </div>
                </div>
                <p className="text-gray-400 mt-3">{social.followers}</p>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-3 gap-0.5 p-0.5 bg-white/10">
                {social.posts.map((post, postIndex) => (
                  <motion.div
                    key={postIndex}
                    className="aspect-square overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-white text-sm font-medium">
                        Post #{postIndex + 1}
                      </span>
                    </div>
                    <div
                      className="w-full h-full bg-gray-800"
                      style={{
                        backgroundImage: `url(${post})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </motion.div>
                ))}
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
