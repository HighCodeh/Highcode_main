"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import WhatIsSection from "@/components/WhatIsSection"
import Features from "@/components/Features"
import Roadmap from "@/components/Roadmap"
import TeamSection from "@/components/TeamSection"
import Footer from "@/components/Footer"
import TechnicalSpecs from "@/components/TechnicalSpecs"

// Verificando se todos os componentes estão sendo exportados corretamente
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />

      <main>
        <HeroSection />
        <WhatIsSection />
        <Features />
        <TeamSection />
        <TechnicalSpecs/>
        <Roadmap />
      </main>

      <Footer />
    </div>
  )
}

