"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "./ui/button"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-[300px] bg-black/90 backdrop-blur-xl p-6 z-50 border-l border-[#8c2aff]/10"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end">
                <button onClick={onClose} className="p-2 hover:text-[#8c2aff] transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 py-8">
                <nav className="flex flex-col gap-6">
                  <Link
                    href="#product"
                    className="text-lg font-medium text-white hover:text-[#8c2aff] transition-colors"
                    onClick={onClose}
                  >
                    Produto
                  </Link>
                  <Link
                    href="#specs"
                    className="text-lg font-medium text-white hover:text-[#8c2aff] transition-colors"
                    onClick={onClose}
                  >
                    Especificações
                  </Link>
                  <Link
                    href="#roadmap"
                    className="text-lg font-medium text-white hover:text-[#8c2aff] transition-colors"
                    onClick={onClose}
                  >
                    Roadmap
                  </Link>
                  <Link
                    href="#team"
                    className="text-lg font-medium text-white hover:text-[#8c2aff] transition-colors"
                    onClick={onClose}
                  >
                    Time
                  </Link>
                </nav>
              </div>
              <div>
                <Button
                  className="w-full bg-[#8c2aff] hover:bg-[#8c2aff]/90 text-white transition-all duration-300"
                  onClick={onClose}
                >
                  Comprar Agora
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

