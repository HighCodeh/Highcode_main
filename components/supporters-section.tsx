"use client"

import { useEffect, useRef, useState } from "react"

// Lista de apoiadores fornecida pelo usuário
const supporters = [
  "Murilo Gonzalez",
  "Clark",
  "Felipe Longo",
  "Jose Jaiwilson",
  "Jonathan Leal Santos",
  "Ariel Alsina",
  "Felipe Ferreira Lemes",
  "Maria Luiza Santos Pequeno",
  "Kauã Ribeiro Vareschini",
  "Matheus Bernardes",
  "Andre Luiz Barbosa Pires Luiz",
  "André Luiz Sette Gadelha Campos",
  "Anderson Aparecido do Carmo Frasão",
  "Caio César Xavier E Lima",
  "Allan Davys",
  "Luan Fellipe Gonçalves Ribeiro",
  "Carlos Henrique de Oliveira",
  "Felipe Alencastro",
  "Felipe Gustavo",
  "Enzo de Castro Umehara",
  "Lucas Santos",
  "João Victor",
  "Afonso Pires",
  "Fábio Henrique Souza De Oliveira",
  "ATAHUALPA BASTOS LELIS",
  "Joao Victor Gomes da Silva",
  "Thalles Frasson Duarte",
  "Kauan Crema Dias",
  "Eduardo Ivalo da Silva Prado",
  "Állan Richard de Souza Gomes",
  "ANGELO VITOR LIMA LEMAIRE DE MEDEIROS",
  "Talison Zambon Breitenbach",
  "Gabriel Silva Ribeiro",
  "Victor Neves",
  "Carlos Henrique",
  "Ubiratan Silva de Souza Júnior",
  "Urkyn",
  "Calil Khalil",
  "Gustavo Linhares Maia",
  "Thyaro Hajime",
  "Guilherme Amor",
  "Júnior Campese",
  "José Vinicius da Silva Gomes",
  "Erik Vinicius Sirvao Machado",
  "ANDRE LUIZ SCHILLING",
  "Luiz Henrique Paese",
  "Ramires Dias Santos",
  "EdgeSearch Labs LTDA",
  "Israel Calros de Lima Pimentel",
  "Lucas Pereira",
  "Carlos Eduardo Campelo",
  "LUCAS GONCALVES DE BRITO",
  "João Lucas Jorge",
  "Victor Eduardo Monteiro Machado",
  "Luis Marco Ferreira Cabral",
  "Cesar Henrique Vasco",
  "Samuel Teixeira",
  "Luis Fernando Neckel",
  "Rogerio Henrique de Lima",
  "Danilo das Chagas",
  "Kenzo da Gama Kohara",
  "Cristiano Warmling",
  "Weslley Kirchhoff Pedroso",
  "Antonio Dancley do Nascimento Praia",
  "Fabricio Silva Vieira",
  "Vinicius Goulart",
  "Pietro Oliveira",
  "Gabriel Luiz Rezende Bastos",
  "Leonardo Inácio da Costa de Carvalho",
  "Igor Fernandes Maretti",
  "Gabriel Correia Silva",
  "Vinicius Beira",
  "Brian Collo Gonçalves",
  "Joao M Toldo",
  "Eder Miguel",
  "Paulo César",
  "Tassio Fernando Teixeira de Oliveira",
  "Vitor Andrade",
  "Matheus Banhos",
  "Fabricio Herzog Barbosa",
  "Gideao Martins Pimentel",
  "Victor Hugo Ferreira de Souza",
  "ROMULO ISRAEL SILVA COELHO",
  "Darciso Luis Zenatti",
  "Pedro Henrique Meira Dos Santos",
  "Samuel Silva Modesto Dos Santos",
  "Erick Moreira Cassoli de Souza",
  "Matheus Eduardo Mendonça Gomes",
  "Maik Kehl Godoy",
  "Lucas Bustamante",
  "Gilson Júnior Teles Salomão",
  "Gustavo Santos Valêncio",
  "Francisco Willian de Araújo Sena",
  "Myckael Soares Gonzaga",
  "Heric Juliani Baldez",
  "Whitney Da Silva Castro",
  "Felipe Barreira",
  "Miguel Marsari",
  "Rafael de Matos",
  "Vitor Hideki Mazakina",
  "Arthur Gabriel",
  "Mateus Filipe Gomes de Oliveira",
  "Isac Avelar",
  "Rafael Oliveira",
  "Jayro Gouveia",
  "Ayres Joaquim Neto",
  "Evilyn Rodrigues",
  "Vinícius Riquieri",
  "Eros Magnun Macedo Costa",
  "Adriano Silva",
  "Luciana G Carvalho",
  "Nycollas Icrad Luz Machado",
  "Alisson de Almeida",
  "Willem Ferreira",
  "Moacir Henrique Lima dos Santos",
  "Miguel Luidy Gleria",
  "Francisco Vitor",
  "Mauro Hott",
  "Fernando Bento Sena",
  "Frampe Vianna",
  "Gabriel Stellato",
  "Daniel Nunes",
  "GLAUBER NOCCIOLI DE SOUZA",
  "Gabriel Benassi",
  "Marcos Vinícius Rocha Silva",
  "Bruno Wesley Leandro",
  "Daniel Silva de Moura",
  "Marcos Felipe",
  "Reinaldo França",
  "Douglas Costa",
  "Gustavo Salata",
  "Valmir Bagio de Oliveira Junior",
  "Isardy S Miranda",
  "Thales Coutinho",
  "Orlando Trindade",
  "Isaque Cristiano",
  "Jonathan Dias",
  "Kaian de Souza Gonçalves",
  "Junior Tenorio",
  "Erik Cardoso",
  "Paulo Victor Freitas",
  "Luiz Fernando",
];

// Dividir a lista em três grupos para as três linhas
const totalNames = supporters.length
const namesPerRow = Math.ceil(totalNames / 3)

// Dividir a lista em três grupos aproximadamente iguais
const row1 = supporters.slice(0, namesPerRow)
const row2 = supporters.slice(namesPerRow, namesPerRow * 2)
const row3 = supporters.slice(namesPerRow * 2)

// Hook personalizado para detectar o tamanho da tela
function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    isMobile: typeof window !== "undefined" ? window.innerWidth < 768 : false,
    isTablet: typeof window !== "undefined" ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
      })
    }

    // Configurar listener
    window.addEventListener("resize", handleResize)

    // Verificar tamanho inicial
    handleResize()

    // Limpar listener
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenSize
}

// Componente para cada item de apoiador
const SupporterItem = ({ name, index }: { name: string; index: number }) => {
  const { isMobile, isTablet } = useScreenSize()

  // Cores do HighBoy - roxo vibrante
  const highboyPurple = "#8A2BE2"

  // Ajustar tamanho com base no dispositivo
  const dotSize = isMobile ? "h-2 w-2" : isTablet ? "h-2.5 w-2.5" : "h-3 w-3"
  const textSize = isMobile ? "text-xs" : isTablet ? "text-sm" : "text-base"
  const padding = isMobile ? "px-2 py-1" : isTablet ? "px-3 py-1.5" : "px-4 py-2"

  // Todos os nomes têm o mesmo estilo agora
  const borderColor = "rgba(138, 43, 226, 0.3)"
  const dotColor = highboyPurple

  return (
    <div
      className={`inline-flex items-center space-x-1.5 ${padding} rounded-full transition-all duration-300 hover:scale-105`}
      style={{
        background: "rgba(20, 20, 20, 0.6)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${borderColor}`,
      }}
    >
      <div
        className={`${dotSize} rounded-full`}
        style={{
          background: dotColor,
          boxShadow: `0 0 5px ${dotColor}`,
        }}
      />
      <span
        className={`text-white ${textSize} font-medium`}
        style={{
          letterSpacing: "0.01em",
        }}
      >
        {name}
      </span>
    </div>
  )
}

// Componente para a linha de apoiadores com animação
const SmoothMarquee = ({
  names,
  direction = "left",
  speed = 1,
  rowIndex = 0,
}: {
  names: string[]
  direction?: "left" | "right"
  speed?: number
  rowIndex?: number
}) => {
  const { isMobile, isTablet } = useScreenSize()
  const [isPaused, setIsPaused] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [animationDuration, setAnimationDuration] = useState(0)

  // Ajustar gap com base no tamanho da tela
  const gap = isMobile ? 8 : isTablet ? 12 : 16

  useEffect(() => {
    // Função para calcular a duração da animação
    const calculateDuration = () => {
      if (!marqueeRef.current) return

      // Obter a largura total do conteúdo
      const marqueeWidth = marqueeRef.current.scrollWidth

      // Calcular a duração com base na largura e velocidade
      // Valores mais baixos para uma animação mais rápida
      const baseDuration = isMobile ? 60 : isTablet ? 55 : 50
      const calculatedDuration = (baseDuration * marqueeWidth) / 1000 / speed

      setAnimationDuration(calculatedDuration)
    }

    // Calcular inicialmente
    calculateDuration()

    // Recalcular quando a janela for redimensionada
    window.addEventListener("resize", calculateDuration)

    return () => {
      window.removeEventListener("resize", calculateDuration)
    }
  }, [isMobile, isTablet, speed, names.length])

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Gradientes de fade nas bordas */}
      <div className="absolute -left-4 top-0 w-16 sm:w-20 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute -right-4 top-0 w-16 sm:w-20 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

      {/* Container principal */}
      <div className="flex overflow-hidden">
        {/* Primeiro conjunto de nomes */}
        <div
          ref={marqueeRef}
          className="flex items-center whitespace-nowrap"
          style={{
            gap: `${gap}px`,
            animation: `marquee-${direction}-${rowIndex} ${animationDuration}s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {names.map((name, index) => (
            <SupporterItem key={`${rowIndex}-a-${index}`} name={name} index={index} />
          ))}

          {/* Duplicar os nomes para criar um loop contínuo */}
          {names.map((name, index) => (
            <SupporterItem key={`${rowIndex}-b-${index}`} name={name} index={index} />
          ))}
        </div>
      </div>

      {/* Estilos de animação inline */}
      <style jsx>{`
        @keyframes marquee-left-${rowIndex} {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-right-${rowIndex} {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

export default function SupportersSection() {
  const { isMobile, isTablet } = useScreenSize();

  const titleSize = isMobile ? "text-3xl sm:text-4xl" : isTablet ? "text-5xl" : "text-6xl lg:text-7xl";
  const subtitleSize = isMobile ? "text-sm" : isTablet ? "text-base" : "text-lg";
  const sectionPadding = isMobile ? "py-12" : isTablet ? "py-20" : "py-32";
  const containerPadding = isMobile ? "py-4 px-2" : isTablet ? "py-6 px-4" : "py-12 px-6";

  return (
    <section className={`${sectionPadding} px-3 sm:px-4 md:px-6`} id="apoio">
      <div className="text-center mb-10 md:mb-16">
        <h2
          className={`${titleSize} font-bold mb-6`}
          style={{
            background: "linear-gradient(to right, #9c4dff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nossos Apoiadores
        </h2>

        {/* Bloco de mensagens com pontinhos */}
        <div className="flex flex-col items-center space-y-3">
          {/* Primeira mensagem */}
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-purple-600" />
            <p className={`text-gray-300 ${subtitleSize}`}>
              Agradecemos a todos que acreditam no projeto HighBoy
            </p>
          </div>

          {/* Segunda mensagem */}
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-purple-600" />
            <p className={`text-gray-300 ${subtitleSize}`}>
              Mais de 140 apoiadores!
            </p>
          </div>
        </div>
      </div>

      {/* Container dos nomes */}
      <div className="max-w-[1400px] mx-auto">
        <div
          className={`relative overflow-hidden ${containerPadding} rounded-lg sm:rounded-xl`}
          style={{
            background: "rgba(15, 15, 15, 0.4)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(138, 43, 226, 0.15)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Efeitos de fundo */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(138, 43, 226, 0.15), transparent 40%), radial-gradient(circle at 70% 60%, rgba(138, 43, 226, 0.15), transparent 40%)",
            }}
          />

          {/* Linhas de apoiadores com marquee animado */}
          <SmoothMarquee names={row1} direction="left" speed={1.3} rowIndex={0} />
          <div className="mt-4">
            <SmoothMarquee names={row2} direction="right" speed={1.1} rowIndex={1} />
          </div>
          <div className="mt-4">
            <SmoothMarquee names={row3} direction="left" speed={1.5} rowIndex={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
