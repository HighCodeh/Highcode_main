"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Vinícius Pinheiro",
    role: "Arquiteto de Hardware",
    image: "/vini.jpg",
    bio: "Especialista em arquitetura de hardware e RF",
    social: {
      linkedin: "#",
      github: "#",
      email: "joao@highcode.com",
    },
  },
  {
    name: "Murilo Carlos",
    role: "Pesquisadora de Segurança",
    image: "/murilo.jpg",
    bio: "Pesquisadora líder em segurança de IoT e RF",
    social: {
      linkedin: "#",
      github: "#",
      email: "ana@highcode.com",
    },
  },
  {
    name: "Pietro",
    role: "Desenvolvedor de Firmware",
    image: "/Pietro.png",
    bio: "Desenvolvedor especializado em sistemas embarcados",
    social: {
      linkedin: "#",
      github: "#",
      email: "pedro@highcode.com",
    },
  },
  {
    name: "Vitor Hideki",
    role: "Engenheira de RF",
    image: "/vitor.jpg",
    bio: "Engenheira especializada em comunicações sem fio",
    social: {
      linkedin: "#",
      github: "#",
      email: "marina@highcode.com",
    },
  },
  {
    name: "Tassio",
    role: "Desenvolvedor de Segurança",
    image: "/tassio.jpg",
    bio: "Desenvolvedor full-stack focado em segurança",
    social: {
      linkedin: "#",
      github: "#",
      email: "lucas@highcode.com",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8C2AFF]/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Nossa <span className="text-[#8C2AFF]">Equipe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça os inovadores que estão revolucionando a segurança de hardware
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative h-[380px] bg-transparent border-0 overflow-hidden">
                <div className="absolute inset-0">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>

                <div className="relative h-full p-4 flex flex-col justify-end">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#8C2AFF] font-medium mb-2 text-sm">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{member.bio}</p>
                    <div className="flex items-center gap-3">
                      <a
                        href={member.social.github}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

