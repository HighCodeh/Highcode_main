"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Vinícius Pinheiro",
    role: "Hardware & Firmware & Manager",
    bio: "Passionate about embedded systems and open hardware development.",
    image: "/vini.jpeg",
    social: {
      instagram: "https://www.instagram.com/vinipinheirobit/",
      email: "vpedicao@gmail.com",
    },
  },
  {
    name: "Emanuel Magalhães",
    role: "Firmware Architect",
    bio: "Focused on scalable firmware and IoT security.",
    image: "/teste.jpeg",
    social: {
      instagram: "https://www.instagram.com/anarchyysm/",
      email: "emanuel.mag.jr@gmail.com",

    },
  },
  {
    name: "Luis Thiago",
    role: "Software Engineer",
    bio: "Bringing ideas to life through clean and efficient code.",
    image: "/luis.jpeg",
    social: {
      instagram: "https://www.instagram.com/lthiagovs/",
      email: "luisthiago.dev@gmail.com",

    },
  },
  {
    name: "Joje Mendes",
    role: "Manager & App Developer",
    bio: "Connecting people, ideas and technology worldwide.",
    image: "/joje.png",
    social: {
      instagram: "https://www.instagram.com/null__jo/",
      email: "jojemendes@icloud.com",

    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="team">
      {/* Subtle animated blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#8C2AFF]/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#4a1e99]/10 rounded-full blur-[120px] animate-pulse delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6"
          >
            <span className="size-2.5 rounded-full bg-[#8C2AFF] animate-ping" />
            <span className="text-lg font-medium">Brazilian Team</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Meet the <span className="text-[#8C2AFF]">Team</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300"
          >
            The creators and visionaries behind <span className="text-white font-semibold">High Boy</span>.
          </motion.p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group perspective"
            >
              <div className="relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md transition-all duration-500 group-hover:border-[#8C2AFF]/40 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(140,42,255,0.3)]">
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />
                </div>
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#a15cff] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio || "Enthusiast about technology and open-source."}</p>
                  
                  {/* Socials */}
                  <div className="flex items-center gap-3">
                    {member.social.instagram && (
                      <a href={member.social.instagram} target="_blank" className="p-2 rounded-full bg-white/10 hover:bg-[#8C2AFF]/30 transition-colors">
                        <Instagram className="size-4 text-white" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" className="p-2 rounded-full bg-white/10 hover:bg-[#8C2AFF]/30 transition-colors">
                        <Github className="size-4 text-white" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" className="p-2 rounded-full bg-white/10 hover:bg-[#8C2AFF]/30 transition-colors">
                        <Linkedin className="size-4 text-white" />
                      </a>
                    )}
                    <a href={`mailto:${member.social.email}`} className="p-2 rounded-full bg-white/10 hover:bg-[#8C2AFF]/30 transition-colors">
                      <Mail className="size-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Want to join our team?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We’re always looking for passionate people who love technology, hardware and security.
          </p>
          <a 
            href="mailto:highcodeh@gmail.com" 
            className="bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff] text-white hover:opacity-90 px-8 py-3.5 rounded-xl transition-all duration-500 hover:shadow-[0_0_35px_rgba(140,42,255,0.6)] font-medium"
          >
            Join the team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
