"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "R$ 2.499",
    description: "Ideal para iniciantes e entusiastas",
    features: [
      "Hardware básico",
      "Suporte por email",
      "Atualizações de firmware",
      "Acesso à comunidade",
      "1 ano de garantia",
    ],
  },
  {
    name: "Professional",
    price: "R$ 3.999",
    description: "Para profissionais de segurança",
    popular: true,
    features: [
      "Hardware premium",
      "Suporte prioritário 24/7",
      "Atualizações premium",
      "Acesso a recursos avançados",
      "2 anos de garantia",
      "Treinamento básico",
      "Case premium",
    ],
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Soluções personalizadas para empresas",
    features: [
      "Hardware personalizado",
      "Suporte dedicado",
      "Customizações exclusivas",
      "API empresarial",
      "3 anos de garantia",
      "Treinamento completo",
      "Suporte no local",
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Planos e Preços</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Escolha o plano ideal para suas necessidades de segurança</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${plan.popular ? "pricing-popular" : "pricing-card"}`}>
                <div className="p-6">
                  {plan.popular && <div className="text-[#8c2aff] text-sm font-medium mb-4">Mais Popular</div>}
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  <Button
                    className={`w-full mb-6 ${
                      plan.popular
                        ? "bg-[#8c2aff] hover:bg-[#8c2aff]/90"
                        : "border-[#8c2aff] text-[#8c2aff] hover:bg-[#8c2aff] hover:text-white"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Escolher Plano
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 text-[#8c2aff] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

