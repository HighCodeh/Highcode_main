"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, Github, Linkedin, ChevronLeft, ChevronRight, Link } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const teamData = [
  {
    name: "Vinícius Pinheiro",
    role: "CTO - Hardware & Firmware & Manager",
    bio: "Passionate about embedded systems and open hardware development.",
    image: "/vini.jpeg",
    social: {
      instagram: "https://www.instagram.com/vinipinheirobit/",
      email: "vpedicao@gmail.com",
    },
  },
  {
    name: "Joje Mendes",
    role: "CEO - Manager & App Developer",
    bio: "Connecting people, ideas and technology worldwide.",
    image: "/joje.png",
    social: {
      instagram: "https://www.instagram.com/null__jo/",
      email: "jojemendes@icloud.com",
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
    name: "Rafa Teivfik",
    role: "Manager & App Developer",
    bio: "Turning complex challenges into elegant mobile solutions.",
    image: "/rafa.jpg",
    social: {
      instagram: "https://www.instagram.com/ruffles_teiv/",
      email: "teivik@gmail.com",
      link: "https://rafateivfik.carrd.co/"
    },
  },
  {
    name: "Pedro Henrique",
    role: "UI/UX Designer",
    bio: "Strategizing growth and building brand presence.",
    image: "/pedro.png",
    social: {
      email: "anaydasydy@gmail.com",
    },
  },
  {
    name: "Eduardo Chaves",
    role: "Marketing Specialist",
    bio: "Crafting compelling stories and engaging audiences.",
    image: "/chaves.jpg",
    social: {
      email: "eduardo9chaves@gmail.com",
    },
  },
  {
    name: "Gabriel Topfer",
    role: "Operational Manager",
    bio: "Crafting compelling stories and engaging audiences.",
    image: "/gabriel-topfer.webp",
    social: {
      instagram: "https://www.instagram.com/gtopfer",
      link: "https://br.linkedin.com/in/gtopfer"
    },
  },
]

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1150) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = teamData.length - cardsPerView
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = teamData.length - cardsPerView
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  if (teamData.length === 0) return null

  return (
    <section className="py-24 relative overflow-hidden bg-black" id="team">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#8C2AFF]/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#4a1e99]/10 rounded-full blur-[120px] animate-pulse delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-6">
            <span className="size-2.5 rounded-full bg-[#8C2AFF] animate-ping" />
            <span className="text-lg font-medium text-white">Brazilian Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Meet the <span className="text-[#8C2AFF]">Team</span>
          </h2>
        </motion.div>

        <div className="relative max-w-[1280px] mx-auto group">
          <div className="absolute top-1/2 -left-4 md:-left-16 z-30 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md transition-all hover:bg-[#8C2AFF] hover:border-[#8C2AFF] hover:scale-110 active:scale-95 shadow-2xl"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-16 z-30 -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md transition-all hover:bg-[#8C2AFF] hover:border-[#8C2AFF] hover:scale-110 active:scale-95 shadow-2xl"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="overflow-hidden rounded-xl">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 1, 0.5, 1] 
              }}
            >
              {teamData.map((member, index) => (
                <div
                  key={index}
                  style={{ minWidth: `${100 / cardsPerView}%` }}
                  className="px-4"
                >
                  <div className="relative h-[520px] flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/5 group/card transition-all duration-700 hover:border-[#8C2AFF]/40">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    <div className="relative p-8 w-full z-10">
                      <div className="min-h-[40px] flex items-end">
                        <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{member.name}</h3>
                      </div>
                      
                      <div className="min-h-[32px] flex items-start">
                        <p className="text-[#a15cff] font-medium mb-3 tracking-wide text-sm sm:text-base">{member.role}</p>
                      </div>
                      
                      <div className="min-h-[60px]">
                        <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed transition-colors group-hover/card:text-white">
                          {member.bio}
                        </p>
                      </div>
                      
                      <div className="flex gap-3">
                        {member.social.instagram && (
                          <a href={member.social.instagram} target="_blank" className="p-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-[#8C2AFF] hover:border-transparent transition-all">
                            <Instagram className="size-5 text-white" />
                          </a>
                        )}
                        {member.social.email && (<a href={`mailto:${member.social.email}`} className="p-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-[#8C2AFF] hover:border-transparent transition-all">
                          <Mail className="size-5 text-white" />
                        </a>)}
                        {member.social.link && (
                          <a href={member.social.link} target="_blank" className="p-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-[#8C2AFF] hover:border-transparent transition-all">
                            <Link className="size-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: Math.max(0, teamData.length - cardsPerView + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-700 ${
                  index === currentIndex 
                  ? 'w-12 bg-[#8C2AFF] shadow-[0_0_15px_rgba(140,42,255,0.5)]' 
                  : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}