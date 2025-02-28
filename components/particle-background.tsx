"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: HTMLDivElement[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.position = "absolute"
      particle.style.width = `${Math.random() * 3 + 1}px`
      particle.style.height = `${Math.random() * 3 + 1}px`
      particle.style.background = Math.random() > 0.5 ? "#8C2AFF" : "white"
      particle.style.borderRadius = "50%"
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`
      particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s linear infinite`
      particle.style.animationDelay = `${Math.random() * 5}s`
      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach((particle) => particle.remove())
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" />
      <style jsx global>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </>
  )
}

