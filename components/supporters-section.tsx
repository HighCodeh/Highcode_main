"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from "lucide-react"

const supporters = [
  "Murilo Gonzalez", "Clark", "Felipe Longo", "Jose Jaiwilson", "Jonathan Leal Santos",
  "Ariel Alsina", "Felipe Ferreira Lemes", "Maria Luiza Santos Pequeno", "Kauã Ribeiro Vareschini",
  "Matheus Bernardes", "Andre Luiz Barbosa Pires Luiz", "André Luiz Sette Gadelha Campos",
  "Anderson Aparecido do Carmo Frasão", "Caio César Xavier E Lima", "Allan Davys",
  "Luan Fellipe Gonçalves Ribeiro", "Carlos Henrique de Oliveira", "Felipe Alencastro",
  "Felipe Gustavo", "Enzo de Castro Umehara", "Lucas Santos", "João Victor", "Afonso Pires",
  "Fábio Henrique Souza De Oliveira", "ATAHUALPA BASTOS LELIS", "Joao Victor Gomes da Silva",
  "Thalles Frasson Duarte", "Kauan Crema Dias", "Eduardo Ivalo da Silva Prado",
  "Állan Richard de Souza Gomes", "ANGELO VITOR LIMA LEMAIRE DE MEDEIROS", "Talison Zambon Breitenbach",
  "Gabriel Silva Ribeiro", "Victor Neves", "Carlos Henrique", "Ubiratan Silva de Souza Júnior",
  "Urkyn", "Calil Khalil", "Gustavo Linhares Maia", "Thyaro Hajime", "Guilherme Amor",
  "Júnior Campese", "José Vinicius da Silva Gomes", "Erik Vinicius Sirvao Machado",
  "ANDRE LUIZ SCHILLING", "Luiz Henrique Paese", "Ramires Dias Santos", "EdgeSearch Labs LTDA",
  "Israel Calros de Lima Pimentel", "Lucas Pereira", "Carlos Eduardo Campelo", "LUCAS GONCALVES DE BRITO",
  "João Lucas Jorge", "Victor Eduardo Monteiro Machado", "Luis Marco Ferreira Cabral",
  "Cesar Henrique Vasco", "Samuel Teixeira", "Luis Fernando Neckel", "Rogerio Henrique de Lima",
  "Danilo das Chagas", "Kenzo da Gama Kohara", "Cristiano Warmling", "Weslley Kirchhoff Pedroso",
  "Antonio Dancley do Nascimento Praia", "Fabricio Silva Vieira", "Vinicius Goulart", "Pietro Oliveira",
  "Gabriel Luiz Rezende Bastos", "Leonardo Inácio da Costa de Carvalho", "Igor Fernandes Maretti",
  "Gabriel Correia Silva", "Vinicius Beira", "Brian Collo Gonçalves", "Joao M Toldo", "Eder Miguel",
  "Paulo César", "Tassio Fernando Teixeira de Oliveira", "Vitor Andrade", "Matheus Banhos",
  "Fabricio Herzog Barbosa", "Gideao Martins Pimentel", "Victor Hugo Ferreira de Souza",
  "ROMULO ISRAEL SILVA COELHO", "Darciso Luis Zenatti", "Pedro Henrique Meira Dos Santos",
  "Samuel Silva Modesto Dos Santos", "Erick Moreira Cassoli de Souza", "Matheus Eduardo Mendonça Gomes",
  "Maik Kehl Godoy", "Lucas Bustamante", "Gilson Júnior Teles Salomão", "Gustavo Santos Valêncio",
  "Francisco Willian de Araújo Sena", "Myckael Soares Gonzaga", "Heric Juliani Baldez",
  "Whitney Da Silva Castro", "Felipe Barreira", "Miguel Marsari", "Rafael de Matos",
  "Vitor Hideki Mazakina", "Arthur Gabriel", "Mateus Filipe Gomes de Oliveira", "Isac Avelar",
  "Rafael Oliveira", "Jayro Gouveia", "Ayres Joaquim Neto", "Evilyn Rodrigues", "Vinícius Riquieri",
  "Eros Magnun Macedo Costa", "Adriano Silva", "Luciana G Carvalho", "Nycollas Icrad Luz Machado",
  "Alisson de Almeida", "Willem Ferreira", "Moacir Henrique Lima dos Santos", "Miguel Luidy Gleria",
  "Francisco Vitor", "Mauro Hott", "Fernando Bento Sena", "Frampe Vianna", "Gabriel Stellato",
  "Daniel Nunes", "GLAUBER NOCCIOLI DE SOUZA", "Gabriel Benassi", "Marcos Vinícius Rocha Silva",
  "Bruno Wesley Leandro", "Daniel Silva de Moura", "Marcos Felipe", "Reinaldo França", "Douglas Costa",
  "Gustavo Salata", "Valmir Bagio de Oliveira Junior", "Isardy S Miranda", "Thales Coutinho",
  "Orlando Trindade", "Isaque Cristiano", "Jonathan Dias", "Kaian de Souza Gonçalves", "Junior Tenorio",
  "Erik Cardoso", "Paulo Victor Freitas", "Luiz Fernando", "Tiago Santos", "oi.php", "wtemberg", "Tsan70s","Gabriel.ofc", "Leandro Cardoso", "Israel.A", "Carvalho","ChioZille","SrMei",
];

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
      });
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return screenSize;
}

const SupporterItem = ({ name }: { name: string }) => {
  const { isMobile, isTablet } = useScreenSize();

  const dotSize = isMobile ? "h-2.5 w-2.5" : isTablet ? "h-3 w-3" : "h-3.5 w-3.5";
  const textSize = isMobile ? "text-sm" : isTablet ? "text-base" : "text-lg";
  const padding = isMobile ? "px-4 py-2" : isTablet ? "px-5 py-2.5" : "px-6 py-3";

  return (
    <motion.div
      className={`inline-flex items-center space-x-3 ${padding} rounded-xl`}
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
      whileHover={{
        scale: 1.03,
        backgroundColor: "rgba(138, 43, 226, 0.1)",
        borderColor: "rgba(138, 43, 226, 0.3)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div
        className={`${dotSize} rounded-full bg-[#8A2BE2]`}
        style={{ boxShadow: "0 0 8px #8A2BE2" }}
      />
      <span className={`text-white ${textSize} font-medium tracking-tight`}>
        {name}
      </span>
    </motion.div>
  );
};

const SmoothMarquee = ({
  names,
  direction = "left",
  speed = 1,
  rowIndex = 0,
}: {
  names: string[];
  direction?: "left" | "right";
  speed?: number;
  rowIndex?: number;
}) => {
  const { isMobile, isTablet } = useScreenSize();
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(0);

  const gap = isMobile ? 12 : isTablet ? 16 : 20;

  useEffect(() => {
    if (!marqueeRef.current) return;

    const calculateDuration = () => {
      const marqueeWidth = marqueeRef.current?.scrollWidth || 0;
      const baseDuration = isMobile ? 60 : isTablet ? 55 : 50;
      const calculatedDuration = (baseDuration * marqueeWidth) / 1000 / speed;
      setAnimationDuration(calculatedDuration);
    };

    calculateDuration();
    const resizeHandler = () => calculateDuration();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [isMobile, isTablet, speed, names.length]);

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onHoverEnd={() => setIsPaused(false)}
    >
      <div className="absolute -left-4 top-0 w-20 sm:w-24 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute -right-4 top-0 w-20 sm:w-24 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex overflow-hidden">
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
            <SupporterItem key={`${rowIndex}-a-${index}`} name={name} />
          ))}
          {names.map((name, index) => (
            <SupporterItem key={`${rowIndex}-b-${index}`} name={name} />
          ))}
        </div>
      </div>

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
  );
};

export default function SupportersSection() {
  const { isMobile, isTablet } = useScreenSize();
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredSupporters = useMemo(() => {
    if (!searchTerm) return supporters;
    return supporters.filter(name => 
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  
  const rows = useMemo(() => {
    if (filteredSupporters.length === 0) return [[], [], []];
    
    const namesPerRow = Math.ceil(filteredSupporters.length / 3);
    return [
      filteredSupporters.slice(0, namesPerRow),
      filteredSupporters.slice(namesPerRow, namesPerRow * 2),
      filteredSupporters.slice(namesPerRow * 2)
    ];
  }, [filteredSupporters]);
  
  const titleSize = isMobile ? "text-3xl" : isTablet ? "text-4xl" : "text-5xl";
  const subtitleSize = isMobile ? "text-sm" : isTablet ? "text-base" : "text-lg";
  const sectionPadding = isMobile ? "py-16" : isTablet ? "py-24" : "py-32";
  const containerPadding = isMobile ? "py-5 px-4" : isTablet ? "py-7 px-6" : "py-10 px-8";

  return (
    // ID CORRIGIDO AQUI PARA "supporters"
    <section className={`${sectionPadding} px-4 sm:px-6 md:px-8 bg-black`} id="supporters">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="mb-24 md:mb-36"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-base uppercase tracking-[0.4em] text-gray-300 font-light mb-4">
              Official Sponsor
            </span>
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#9c4dff] to-transparent"></div>
          </div>

          <div className="flex flex-col items-center px-4">
            <div
              className="p-12 sm:p-16 rounded-[2rem] w-full max-w-6xl mx-auto overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(145deg, rgba(15,15,20,0.98) 0%, rgba(10,10,15,0.99) 100%)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex justify-center mb-12">
                <img
                  src="/pcbway.png"
                  alt="PCBWay"
                  className="w-[90vw] max-w-[500px] md:w-[600px] h-auto mx-auto"
                  style={{
                    filter: "drop-shadow(0 0 50px rgba(140, 42, 255, 0.6))",
                  }}
                />
              </div>

              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-semibold text-white mb-7 tracking-tight">
                  Professional <span className="text-[#c08fff]">PCB</span> Fabrication
                </h3>

                <p className="text-gray-300 mb-10 text-xl md:text-2xl font-light leading-relaxed tracking-wide">
                  Your trusted partner for high-quality prototyping and PCB manufacturing
                </p>

                <div className="flex justify-center">
                  <a
                    href="https://www.pcbway.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-4 bg-transparent text-white hover:text-[#e6d5ff] px-10 py-5 rounded-xl transition-all group border-2 border-white/20 hover:border-[#8C2AFF]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(140,42,255,0.2) 0%, rgba(140,42,255,0.1) 100%)",
                      boxShadow: "0 0 30px rgba(140, 42, 255, 0.3)",
                    }}
                  >
                    <span className="font-bold tracking-wider text-xl">
                      Get a Quote
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-3"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h2
            className={`${titleSize} font-bold mb-6 tracking-tight`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9c4dff] to-[#7c3aed]">
              They Made It Happen!
            </span>
          </motion.h2>

          <motion.div
            className="flex flex-col items-center space-y-3 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#8A2BE2]" />
              <p className={`text-gray-300 ${subtitleSize} font-light`}>
                Over 4000 people helped bring the High Boy project to reality
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search supporter..."
              className="w-full pl-12 pr-10 py-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]/50 focus:border-[#8A2BE2] transition-all duration-300 text-white placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-5 w-5 text-gray-500 hover:text-white transition-colors" />
              </button>
            )}
          </div>
          
          <AnimatePresence>
            {searchTerm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-center mt-3 text-gray-400 text-sm"
              >
                {filteredSupporters.length} result{filteredSupporters.length !== 1 ? 's' : ''} found
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div
            className={`${containerPadding} rounded-2xl min-h-[300px] flex items-center`}
            style={{
              background: "rgba(15, 15, 15, 0.4)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.15), transparent 40%), " +
                  "radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.15), transparent 40%)",
              }}
            />

            <AnimatePresence mode="wait">
              {filteredSupporters.length === 0 ? (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full text-center py-16"
                >
                  <div className="text-gray-500 text-lg mb-4">
                    No supporters found for "{searchTerm}"
                  </div>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-[#8A2BE2] hover:text-[#9c4dff] transition-colors font-medium"
                  >
                    Clear search
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="supporters-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  {rows[0].length > 0 && <SmoothMarquee names={rows[0]} direction="left" speed={1.3} rowIndex={0} />}
                  {rows[1].length > 0 && <div className="mt-4 md:mt-5"><SmoothMarquee names={rows[1]} direction="right" speed={1.1} rowIndex={1} /></div>}
                  {rows[2].length > 0 && <div className="mt-4 md:mt-5"><SmoothMarquee names={rows[2]} direction="left" speed={1.5} rowIndex={2} /></div>}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className={`text-gray-400 ${subtitleSize} mb-6`}>
              Built by experts, powered by you. Get your hands on it!
          </p>
          <a
            href="https://www.kickstarter.com/projects/1502651892/high-boy-for-hackers-makers-and-the-curious"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff] text-white hover:opacity-90 px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(140,42,255,0.3)] font-medium"
          >
            Get Yours Now!
          </a>
        </motion.div>
      </div>
    </section>
  );
}