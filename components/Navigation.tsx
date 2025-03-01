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
      {/* Desktop Navigation Corrigido */}
      <nav className="fixed w-full z-50 flex justify-center top-6">
        <div className="nav-glass rounded-full px-6 py-3 mx-4 flex items-center justify-between max-w-5xl w-full">
          <Link 
            href="/" 
            className="text-lg font-medium tracking-tight whitespace-nowrap"
          >
            High Code
          </Link>

          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link href="#features" className="text-sm font-normal hover:text-[#8C2AFF] transition-colors px-3 py-1">
              Recursos
            </Link>
            <Link href="#team" className="text-sm font-normal hover:text-[#8C2AFF] transition-colors px-3 py-1">
              Equipe
            </Link>
            <Link href="#roadmap" className="text-sm font-normal hover:text-[#8C2AFF] transition-colors px-3 py-1">
              Roadmap
            </Link>
            <Link href="#high" className="text-sm font-normal hover:text-[#8C2AFF] transition-colors px-3 py-1">
              High Boy
            </Link>
            <Link href="https://highcode-blog.vercel.app/" className="text-sm font-normal hover:text-[#8C2AFF] transition-colors px-3 py-1">
              Blog
            </Link>
            <Link href="https://newslette-omega.vercel.app/" className="text-sm font-normal hover:text-[#8C2AFF] transition-colors px-3 py-1">
              Newsletter
            </Link>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">


            <button className="md:hidden text-white" onClick={() => onOpenChange(!isOpen)}>
              <Menu className="w-5 h-5" />
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
              className="fixed inset-0 bg-black/50 backdrop-blur-xl z-40"
              onClick={() => onOpenChange(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-black/90 backdrop-blur-xl z-50 border-l border-white/5"
            >
              <div className="p-5">
                <div className="flex justify-end mb-6">
                  <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex flex-col gap-4">
                  <Link
                    href="#features"
                    className="text-base font-normal hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    Recursos
                  </Link>
                  <Link
                    href="#team"
                    className="text-base font-normal hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    Equipe
                  </Link>
                  <Link
                    href="#roadmap"
                    className="text-base font-normal hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    Roadmap
                  </Link>
                  <Link
                    href="#high"
                    className="text-base font-normal hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    High boy
                  </Link>
                  <Link
                    href="https://highcode-blog.vercel.app/"
                    className="text-base font-normal hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="https://newslette-omega.vercel.app/"
                    className="text-base font-normal hover:text-[#8C2AFF] transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    Newsletter
                  </Link>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-white text-black hover:bg-white/90 h-9">Começar Agora</Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}