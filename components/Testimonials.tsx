"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Analista de Segurança",
    company: "TechSec",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "O High Boy revolucionou nossa forma de realizar testes de penetração. A interface intuitiva e as ferramentas avançadas tornaram nosso trabalho muito mais eficiente.",
    rating: 5,
  },
  {
    name: "Ana Santos",
    role: "Pesquisadora",
    company: "CyberLab",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Impressionante a quantidade de recursos disponíveis em um dispositivo tão compacto. A qualidade do hardware e do software é excepcional.",
    rating: 5,
  },
  {
    name: "Ricardo Oliveira",
    role: "CISO",
    company: "SecureBank",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Implementamos o High Boy em nossa equipe e os resultados foram surpreendentes. O suporte da equipe é excelente e as atualizações constantes mantêm o dispositivo sempre atual.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-grid">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">O que dizem nossos clientes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra por que profissionais de segurança confiam no High Boy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="testimonial-card h-full">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#8c2aff] fill-[#8c2aff]" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{testimonial.content}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

