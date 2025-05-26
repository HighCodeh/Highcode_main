"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Instagram, ChevronLeft, ChevronRight, MessageCircle, Ruler, ZoomIn } from "lucide-react"
import { useState } from "react"

export default function HighCodeLanding() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)



  const images = [
    {
      src: "person-front-new.png",
      alt: "Camiseta High Code High Boy - Frente",
      title: "Design Front",
    },
    {
      src: "person-back-new.png",
      alt: "Camiseta High Code High Boy - Costas",
      title: "Design Back",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleWhatsApp = () => {
  
    window.open(`https://wa.me/5511989757202?text=Ol%C3%A1!%20Tenho%20interesse%20na%20camiseta%20High%20Code%20High%20Boy%20.%20%0AGostaria%20de%20saber%20mais%20detalhes%20sobre%20tamanhos%20dispon%C3%ADveis%2C%20formas%20de%20pagamento%20e%20entrega.`, "_blank")
  }

  const handleInstagram = () => {
    window.open(`https://www.instagram.com/highcode.br/`, "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black"></div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <Image
              src="highcode-logo.png"
              alt="High Code"
              width={180}
              height={50}
              className="h-8 w-auto opacity-90"
              priority
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full mb-4">
              <span className="text-purple-300 text-sm font-medium">EDIÇÃO LIMITADA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              CAMISETA
              <span className="block font-medium bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                HIGH BOY
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
              Faça parte da evolução.
            </p>
          </div>

          {/* Product Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Carousel */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-violet-600/30 to-purple-600/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image container with better cropping */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800/50">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={images[currentImage].src || "/placeholder.svg"}
                      alt={images[currentImage].alt}
                      fill
                      className="object-cover object-center transition-all duration-500"
                      style={{ objectPosition: "center 20%" }}
                      priority
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image Title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                        <p className="text-white text-sm font-medium">{images[currentImage].title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-6">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImage ? "bg-purple-500 scale-110" : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Features */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium text-white">Camiseta High Boy Edição Limitada</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">100% Algodão</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Design Tech Exclusivo</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Estampa de Alta Qualidade</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Tamanhos P, M, G, GG</span>
                  </div>
                </div>

                {/* Size Chart Button - Mais bonito */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 py-4 rounded-xl font-medium text-base transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-purple-500/25">
                      <Ruler className="w-5 h-5 mr-3" />
                      Ver Tabela de Tamanhos
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl bg-black/95 border-purple-500/30 p-6">
                    <div className="relative w-full">
                      {/* Botão de zoom */}
                      <div className="absolute top-4 right-4 z-10">
                        <Button
                          onClick={() => setIsZoomed(!isZoomed)}
                          className="bg-purple-600/80 hover:bg-purple-700/80 text-white p-2 rounded-lg backdrop-blur-sm"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Imagem com zoom */}
                      <div className={`transition-all duration-300 ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}>
                        <Image
                          src="size-chart.png"
                          alt="Tabela de Tamanhos High Boy"
                          width={1000}
                          height={750}
                          className={`w-full h-auto rounded-lg transition-transform duration-300 ${
                            isZoomed ? "scale-150 origin-center" : "scale-100"
                          }`}
                          onClick={() => setIsZoomed(!isZoomed)}
                          priority
                        />
                      </div>

                      {/* Instruções */}
                      <div className="mt-4 text-center">
                        <p className="text-purple-300 text-sm">
                          {isZoomed ? "Clique para diminuir" : "Clique na imagem ou no botão para ampliar"}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Pricing */}
              <div className="space-y-3">
                <div className="flex items-baseline space-x-4">
                  <span className="text-4xl font-light text-white">R$ 99,00</span>
                  <span className="text-xl text-gray-500 line-through font-light">R$ 129,99</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-4">
                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-full font-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Comprar pelo WhatsApp
                </Button>

                <Button
                  size="lg"
                  onClick={handleInstagram}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg py-6 rounded-full font-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  Comprar pela DM
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center pb-16">
            <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
              <span>Entrega em todo o Brasil</span>
            </div>
          </div>
        </div>
      </main>

      {/* Ambient lighting effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  )
}