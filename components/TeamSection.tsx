

"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Vinícius Pinheiro",
    role: "Hardware & Firmware Lead",
    bio: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vini-SDmjGrdqTfH39Hz7fTxIMq2GWuzn7Q.webp",
    social: {
      instagram: "https://www.instagram.com/vinipinheirobit/",
      email: "vpedicao@gmail.com",
    },
  },
  {
    name: "Emanuel Magalhães",
    role: "Firmware Architect",
    bio: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emanuel.jpg-yqPGCdHxZbbPRrXsGZkZKoaS7Wg5fK.jpeg",
    social: {
      instagram: "https://www.instagram.com/anarchyysm/",
      email: "emanuel.mag.jr@gmail.com",
    },
  },
  {
    name: "Luiz Thiago",
    role: "Software Engineer",
    bio: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gabriel.jpg-5lpbIvzey3gPQ82Yq9rvUt8AxSHtIZ.jpeg",
    social: {
      instagram: "https://www.instagram.com/lthiagovs/",
      email: "luisthiago.dev@gmail.com",
    },
  },
  {
    name: "Pietro Oliveira",
    role: "Community & Marketing",
    bio: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pietro.png-NHaSzX1V9EFNWNR8c3j1gmOzgnz8ji.jpeg",
    social: {
      instagram: "https://www.instagram.com/pietro_o1iveira/",
      email: "williampietro@gmail.com",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="team">
      {/* Efeitos visuais sutil */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#8C2AFF]/5 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#4a1e99]/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6"
          >
            <span className="size-2.5 rounded-full bg-[#8C2AFF] animate-pulse" />
            <span className="text-lg font-medium">Equipe Brasileira</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-white">Conheça o</span> <span className="text-[#8C2AFF]">Time</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Os Desenvolvedores por trás do High Boy
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:border-[#8C2AFF]/30">
                {/* Imagem com efeito de zoom sutil */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />
                </div>
                
                {/* Informações */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-[#a15cff] font-medium mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {member.role}
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-300 text-sm mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {member.bio}
                  </motion.p>
                  
                  {/* Redes sociais */}
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-[#8C2AFF]/20 transition-colors"
                      aria-label={`Instagram de ${member.name}`}
                    >
                      <Instagram className="size-4 text-white" />
                    </a>
                    
                    
             
                    
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-full bg-white/10 hover:bg-[#8C2AFF]/20 transition-colors"
                      aria-label={`Enviar email para ${member.name}`}
                    >
                      <Mail className="size-4 text-white" />
                    </a>
                  </motion.div>
                </div>
                
                {/* Efeito de hover */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8C2AFF]/0 via-[#8C2AFF]/0 to-[#8C2AFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            Quer fazer parte do nosso time?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Estamos sempre em busca de pessoas apaixonados por tecnologia e segurança.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:highcodeh@gmail.com" 
              className="bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff] text-white hover:opacity-90 px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(140,42,255,0.5)] font-medium"
            >
              Quero ser do time
            </a>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}