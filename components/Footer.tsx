"use client"

import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black py-16 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#8C2AFF]/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#4a1e99]/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Logo e descrição */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-[#8C2AFF] to-[#6a11ff] rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#8C2AFF]"></div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white">High Code</h2>
            </div>
            
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Mais que uma ferramenta, uma revolução no hardware hacking.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: <Github className="size-5" />, url: "https://github.com/HighCodeh", label: "GitHub" },
                { icon: <Twitter className="size-5" />, url: "https://x.com/highcode_br", label: "Twitter" },
                { icon: <Instagram className="size-5" />, url: "https://www.instagram.com/highcode.br", label: "Instagram" },
     
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-3 transition-all duration-300"
                  aria-label={social.label}
                >
                  <div className="text-white">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Navegação</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", url: "#home" },
                { label: "Especificações", url: "#specs" },
                { label: "Roadmap", url: "#roadmap" },
                { label: "Equipe", url: "#team" },
                { label: "Apoiadores", url: "#apoio" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-gray-400 hover:text-[#8C2AFF] transition-colors text-lg flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#8C2AFF]"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-[#8C2AFF]/10 p-2.5 rounded-lg mt-0.5">
                  <Mail className="size-5 text-[#8C2AFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-gray-300 text-lg">highcodeh@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#8C2AFF]/10 p-2.5 rounded-lg mt-0.5">
                  <MapPin className="size-5 text-[#8C2AFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Localização</p>
                  <p className="text-gray-300 text-lg">São Paulo, Brasil</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#8C2AFF]/10 p-2.5 rounded-lg mt-0.5">
                  <Phone className="size-5 text-[#8C2AFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Telefone</p>
                  <p className="text-gray-300 text-lg">+55 (11) 98975-7202</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#8C2AFF]/30 to-transparent my-12" />

        {/* Direitos autorais */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-lg text-center md:text-left">
            © {new Date().getFullYear()} High Code. Todos os direitos reservados.
          </p>
          
          
        </div>
      </div>
    </footer>
  )
}