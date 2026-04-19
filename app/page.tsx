"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import JoinDiscord from "@/components/JoinDiscord"
import WhatIsSection from "@/components/WhatIsSection"
import Features from "@/components/Features"
import Social from "@/components/Social"
import Roadmap from "@/components/Roadmap"
import TeamSection from "@/components/TeamSection"
import Footer from "@/components/Footer"
import TechnicalSpecs from "@/components/TechnicalSpecs"
import SupportersSection from "@/components/supporters-section"
import FeaturedIn from "@/components/FeaturedIn"
import AboutHighCode from "@/components/AboutHighCode"

// Verificando se todos os componentes estão sendo exportados corretamente
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />

      <main>
        <HeroSection />
        <FeaturedIn />
        <JoinDiscord />
        <WhatIsSection />
        <Features />
        <AboutHighCode />
        <TeamSection />
        <TechnicalSpecs/>
        <SupportersSection />
        <Social />
      </main>

      <Footer />
    </div>
  )
}

