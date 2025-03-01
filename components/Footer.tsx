"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Facebook, Github, Instagram,Linkedin, Mail, MapPin, Phone, Terminal, Twitter } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-background py-16 relative">
      
     <Separator className="my-8 bg-[#8c2aff] h-0.5 opacity-70" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#8c2aff] rounded-md p-2">
              
     <Separator className="my-8 bg-[#8c2aff] h-0.5 opacity-70" />
            
              </div>
              
              <h2 className="text-2xl font-bold">High Code</h2>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
            Mais que uma ferramenta.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/HighCodeh"
                className="bg-muted hover:bg-[#8c2aff]/10 p-2 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-[#8c2aff]" />
              </a>
              <a
                href="https://x.com/highcode_br"
                className="bg-muted hover:bg-[#8c2aff]/10 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-[#8c2aff]" />
              </a>
              <a
                href="https://www.facebook.com/highcode.brs"
                className="bg-muted hover:bg-[#8c2aff]/10 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#8c2aff]" />
              </a>
              <a
                href="https://www.instagram.com/highcode.br"
                className="bg-muted hover:bg-[#8c2aff]/10 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#8c2aff]" />
              </a>
            </div>
          </div>
        </div>

    

        {/* Bottom section with copyright and legal */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} High Code. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

