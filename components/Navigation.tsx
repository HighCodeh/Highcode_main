"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import Link from "next/link"

interface NavigationProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function Navigation({ isOpen, onOpenChange }: NavigationProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed w-full z-50 flex justify-center top-6">
        <div className="nav-glass rounded-full px-8 py-4 mx-4 flex items-center justify-between max-w-3xl w-full">
          <Link href="/" className="text-xl font-medium tracking-tight">
            High Code
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <Link href="#features" className="nav-link">
              Recursos
            </Link>
            <Link href="#team" className="nav-link">
              Equipe
            </Link>
            <Link href="#roadmap" className="nav-link">
              Roadmap
            </Link>
            <Link href="#about" className="nav-link">
              Sobre
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/highcode"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button variant="ghost" size="icon" className="hover-glow">
                <Github className="w-5 h-5" />
              </Button>
            </Link>

            <Button className="hidden md:flex bg-white text-black hover:bg-white/90">Começar Agora</Button>

            <button className="md:hidden text-white" onClick={() => onOpenChange(!isOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xl z-40"
              onClick={() => onOpenChange(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-black/95 backdrop-blur-2xl z-50 border-l border-white/10"
            >
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="flex flex-col gap-6">
                  <Link
                    href="#features"
                    className="text-lg font-medium hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    Recursos
                  </Link>
                  <Link
                    href="#team"
                    className="text-lg font-medium hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    Equipe
                  </Link>
                  <Link
                    href="#roadmap"
                    className="text-lg font-medium hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    Roadmap
                  </Link>
                  <Link
                    href="#about"
                    className="text-lg font-medium hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    Sobre
                  </Link>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-white text-black hover:bg-white/90">Começar Agora</Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

