"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { InstagramIcon, Mail } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Vinícius Pinheiro",
    role: "Manage - Hardware - Firmware",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vini-SDmjGrdqTfH39Hz7fTxIMq2GWuzn7Q.webp",
    bio: "",
    social: {
      linkedin: "#",
      github: "https://www.instagram.com/vinipinheirobit/",
      email: "vpedicao@gmail.com",
    },
  },
  {
    name: "Emanuel Magalhães",
    role: "Firmware - arquitetura",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emanuel.jpg-yqPGCdHxZbbPRrXsGZkZKoaS7Wg5fK.jpeg",
    bio: "",
    social: {
      linkedin: "#",
      github: "https://www.instagram.com/anarchyysm/",
      email: "emanuel.mag.jr@gmail.com",
    },
  },
  {
    name: "Gabriel Henrique",
    role: "Firmware - arquitetura",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gabriel.jpg-5lpbIvzey3gPQ82Yq9rvUt8AxSHtIZ.jpeg",
    bio: "",
    social: {
      linkedin: "#",
      github: "https://www.instagram.com/gabriel.ddos/",
      email: "gabrielhenrique310@hotmail.com",
    },
  },
  {
    name: "Pietro Oliveira",
    role: "Comunidade - Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pietro.png-NHaSzX1V9EFNWNR8c3j1gmOzgnz8ji.jpeg",
    objectPosition: "center top", // Position adjusted to show more of the face
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vitor-vDfwDBLGlxHr6mHOm9DzMVZCbjrdrH.webp",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tassio-ItMwGhAVPjW9Ycrwjx1pZUKNAdRd5p.webp",
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
            <span className="text-[#8C2AFF]">Nossa</span> <span className="text-white">Equipe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Conheça os desenvolvedores por trás do High Boy!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative h-[300px] bg-transparent border-0 overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    objectPosition={member.objectPosition || "center"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>

                <div className="relative h-full p-3 flex flex-col justify-end">
                  <div>
                    <h3 className="text-sm font-bold mb-1 text-white">{member.name}</h3>
                    <p className="text-[#8C2AFF] font-medium mb-2 text-xs">{member.role}</p>
                    <div className="flex items-center gap-2">
                      <a
                        href={member.social.github}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon className="w-3 h-3" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Mail className="w-3 h-3" />
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

