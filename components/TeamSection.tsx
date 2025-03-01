"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Github, InstagramIcon, Mail } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Vinícius Pinheiro",
    role: "Manage - Hardware - Firmware",
    image: "/vini.webp",
    bio: "",
    social: {
      linkedin: "#",
      github: "https://www.instagram.com/vinipinheirobit/",
      email: "vpedicao@gmail.com",
    },
  },
  {
    name: "Murilo Carlos",
    role: "Back - Infra - Manage",
    image: "/murilo.webp",
    bio: "",
    social: {
      linkedin: "#",
      github: "https://www.instagram.com/murilo.c_013/",
      email: "efgs96@gmail.com",
    },
  },
  {
    name: "Pietro Oliveira",
    role: "Comunidade - Marketing",
    image: "/Pietro.webp",
    bio: "",
    social: {
      linkedin: "#",
      github: "https://www.instagram.com/pietro_o1iveira/",
      email: "williampietro@gmail.com",
    },
  },
  {
    name: "Vitor Hideki",
    role: "Front - Dados",
    image: "/vitor.webp",
    bio: "",
    social: {
      linkedin: "#",
      github: "https://www.instagram.com/vitorhidek/",
      email: "hideki.mazakina@gmail.com",
    },
  },
  {
    name: "Tassio Oliveira",
    role: "Mecânica - Manufaturamento",
    image: "/tassio.webp",
    bio: "",
    social: {
      linkedin: "#",
      github: "https://www.instagram.com/tassiofto/",
      email: "tassiofto@gmail.com",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 relative bg-black overflow-hidden" id="team">
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
            Conheça os desenvolvedores pro trá do High Boy!
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
                        <InstagramIcon className="w-4 h-4" />
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

