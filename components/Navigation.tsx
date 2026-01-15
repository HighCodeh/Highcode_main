"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Menu, X, Code, Users, Zap, Heart, BookOpen } from "lucide-react"
import Link from "next/link"

interface NavigationProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function Navigation({ isOpen, onOpenChange }: NavigationProps) {
  const navItems = [
    { id: "features", label: "Features", icon: <Zap className="w-4 h-4" /> },
    { id: "team", label: "Team", icon: <Users className="w-4 h-4" /> },
    { id: "product", label: "High Boy", icon: <Code className="w-4 h-4" /> },
    { id: "supporters", label: "Supporters", icon: <Heart className="w-4 h-4" /> },
    {
      href: "https://highcode-blog.vercel.app/",
      label: "Blog",
      icon: <BookOpen className="w-4 h-4" />,
    },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed w-full z-50 top-0 py-4">
        <div className="container mx-auto px-4">
          <motion.div
            className="nav-glass rounded-2xl px-6 py-3 flex items-center justify-between backdrop-blur-xl border border-white/10 shadow-xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold tracking-tight whitespace-nowrap bg-gradient-to-r from-white to-[#a15cff] text-transparent bg-clip-text flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8C2AFF] to-[#4a1e99] flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              </div>
              High Code
            </Link>

            {/* Centered Navigation Items */}
            <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id || item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item.id ? (
                    <Link
                      href={`#${item.id}`}
                      className="text-sm font-medium hover:bg-white/5 transition-all px-4 py-2 rounded-xl flex items-center gap-2 group"
                    >
                      {item.icon}
                      <span className="group-hover:text-[#a15cff] transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <Link
                      href={item.href!}
                      target="_blank"
                      className="text-sm font-medium hover:bg-white/5 transition-all px-4 py-2 rounded-xl flex items-center gap-2 group"
                    >
                      {item.icon}
                      <span className="group-hover:text-[#a15cff] transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* GitHub Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="https://github.com/HighCodeh"
                target="_blank"
                className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2 transition-all group"
              >
                <Github className="w-4 h-4 group-hover:text-[#a15cff]" />
                <span className="text-sm font-medium group-hover:text-[#a15cff]">GitHub</span>
              </Link>
            </motion.div>

            {/* Mobile Toggle */}
            <motion.button
              className="md:hidden text-white bg-white/5 border border-white/10 rounded-xl p-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenChange(!isOpen)}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40"
              onClick={() => onOpenChange(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-gradient-to-b from-[#0a0615] to-[#1a0d30] z-50 border-l border-white/10 shadow-2xl"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                  <div className="text-xl font-bold bg-gradient-to-r from-white to-[#a15cff] text-transparent bg-clip-text">
                    High Code
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl border border-white/10 hover:bg-white/5"
                    onClick={() => onOpenChange(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Nav Items */}
                <div className="flex flex-col gap-3 flex-1">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.id || item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.id ? (
                        <Link
                          href={`#${item.id}`}
                          className="flex items-center gap-3 text-lg p-4 rounded-xl hover:bg-white/5 transition-all group"
                          onClick={() => onOpenChange(false)}
                        >
                          <div className="text-[#a15cff]">{item.icon}</div>
                          <span className="group-hover:text-[#a15cff] transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      ) : (
                        <Link
                          href={item.href!}
                          target="_blank"
                          className="flex items-center gap-3 text-lg p-4 rounded-xl hover:bg-white/5 transition-all group"
                          onClick={() => onOpenChange(false)}
                        >
                          <div className="text-[#a15cff]">{item.icon}</div>
                          <span className="group-hover:text-[#a15cff] transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Footer GitHub */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-6 border-t border-white/10"
                >
                  <Link
                    href="https://github.com/HighCodeh"
                    target="_blank"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <Github className="w-5 h-5 group-hover:text-[#a15cff]" />
                    <span className="font-medium group-hover:text-[#a15cff]">GitHub</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}