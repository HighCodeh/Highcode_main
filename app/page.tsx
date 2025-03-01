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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navigation isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
      <main className="relative z-10">
        <HeroSection />
        <WhatIsSection />
        <Features />
        <TeamSection />
        <TechnicalSpecs />
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}

