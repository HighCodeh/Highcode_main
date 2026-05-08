"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </div>
  )
}
