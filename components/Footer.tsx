"use client"

import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

const RedditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.67 13.09c.027.187.04.38.04.575 0 2.93-3.42 5.31-7.64 5.31s-7.64-2.38-7.64-5.31c0-.19.01-.377.04-.56-.84-.39-1.42-1.22-1.42-2.19 0-1.34 1.08-2.42 2.42-2.42.65 0 1.24.26 1.68.68 1.63-1.14 3.83-1.87 6.25-1.96l1.25-5.86c.03-.13.16-.22.29-.19l4.08.87c.29-.59.88-1 1.57-1 .97 0 1.75.78 1.75 1.75s-.78 1.76-1.75 1.76c-.94 0-1.7-.74-1.75-1.66l-3.66-.78-1.11 5.24c2.38.11 4.54.84 6.16 1.97.44-.43 1.03-.69 1.69-.69 1.34 0 2.42 1.08 2.42 2.42 0 .98-.59 1.81-1.43 2.2zM8.46 13.56c0 .77-.62 1.4-1.4 1.4s-1.4-.63-1.4-1.4.63-1.4 1.4-1.4 1.4.62 1.4 1.4zm6.48 0c0 .77-.62 1.4-1.4 1.4s-1.4-.63-1.4-1.4.63-1.4 1.4-1.4 1.4.62 1.4 1.4zm-.45 2.69c.15.15.15.39 0 .54-.9.9-2.6.97-3.1.97-.5 0-2.2-.07-3.1-.97-.15-.15-.15-.39 0-.54.15-.15.39-.15.54 0 .57.57 1.78.77 2.56.77.78 0 1.99-.2 2.56-.77.15-.15.39-.15.54 0z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-black py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#8C2AFF]/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#4a1e99]/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Logo and description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo image + text */}
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                <h2 className="text-2xl font-bold text-white">High Code</h2>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              More than a tool, a revolution in hardware hacking.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {[
                { icon: <Github className="size-5" />, url: "https://github.com/HighCodeh", label: "GitHub" },
                { icon: <Twitter className="size-5" />, url: "https://x.com/highcode_br", label: "X / Twitter" },
                { icon: <Instagram className="size-5" />, url: "https://www.instagram.com/highcode.br", label: "Instagram" },
                { icon: <Linkedin className="size-5" />, url: "https://www.linkedin.com/company/highcodeh/", label: "LinkedIn" },
                { icon: <RedditIcon className="size-5" />, url: "https://www.reddit.com/r/Highboy/", label: "Reddit" },
                {
                  icon: (
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  ),
                  url: "https://discord.gg/highcode",
                  label: "Discord"
                },
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

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", url: "#home" },
                { label: "Specifications", url: "#specs" },
                { label: "Roadmap", url: "#roadmap" },
                { label: "Team", url: "#team" },
                { label: "Supporters", url: "#support" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-gray-400 hover:text-[#8C2AFF] transition-colors text-lg flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#8C2AFF]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-[#8C2AFF]/10 p-2.5 rounded-lg mt-0.5">
                  <Mail className="size-5 text-[#8C2AFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-gray-300 text-lg">support@high-code.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#8C2AFF]/10 p-2.5 rounded-lg mt-0.5">
                  <MapPin className="size-5 text-[#8C2AFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-gray-300 text-lg">1716 W BABCOCK ST
BOZEMAN, MT</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#8C2AFF]/10 p-2.5 rounded-lg mt-0.5">
                  <Phone className="size-5 text-[#8C2AFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <p className="text-gray-300 text-lg">+1(406) 404-3692</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#8C2AFF]/30 to-transparent my-12" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-lg text-center md:text-left">
            © {new Date().getFullYear()} High Code. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
