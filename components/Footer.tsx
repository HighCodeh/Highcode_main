"use client"

import { Github, MessageSquare, Terminal } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="font-semibold text-xl mb-4">NexusFlip</h3>
            <p className="text-gray-400 mb-4">Plataforma open-source para hardware hacking e pentest</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/nexusflip" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/nexusflip" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="https://t.me/nexusflip" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                <Terminal className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Documentação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                  Guia de Início
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                  Exemplos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Comunidade</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors">
                  Ferramentas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#8c2aff]/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © 2024 NexusFlip. Open Source Hardware Hacking Platform.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors text-xs md:text-sm">
                Licença
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8c2aff] transition-colors text-xs md:text-sm">
                Contribuir
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

