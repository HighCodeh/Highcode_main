"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { ExternalLink, Github, ArrowUpRight, BarChart2, DollarSign, PieChart as PieChartIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

const data = [
  { name: "Desenvolvimento", value: 8500, color: "#007AFF" },
  { name: "Recompensas", value: 4200, color: "#34C759" },
  { name: "Fretes", value: 2800, color: "#FF9500" },
  { name: "Impostos", value: 3610, color: "#FF3B30" },
  { name: "Marketing", value: 2161, color: "#AF52DE" },
]

const total = data.reduce((acc, item) => acc + item.value, 0)

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload
    const percentage = ((item.value / total) * 100).toFixed(1)
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: item.color }}
          />
          <p className="font-medium text-white">{item.name}</p>
        </div>
        <p className="text-2xl font-light text-white mb-1">R$ {item.value.toLocaleString("pt-BR")}</p>
        <p className="text-gray-400 text-sm">{percentage}% do total</p>
      </motion.div>
    )
  }
  return null
}

export default function FinancialReport() {
  // Estado para controlar responsividade
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para atualizar estado de mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Definir valor inicial
    handleResize();
    
    // Adicionar listener de redimensionamento
    window.addEventListener("resize", handleResize);
    
    // Limpar listener ao desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-white/10 py-8 md:py-12"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1 md:px-6 md:py-2 mb-4 md:mb-6"
            >
              <span className="size-2 rounded-full bg-[#8C2AFF] animate-pulse" />
              <span className="text-sm font-medium">Relatório Financeiro</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            >
              High Boy <span className="text-[#8C2AFF]">Finances</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Transparência completa no uso dos recursos do projeto
            </motion.p>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Summary Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm sm:text-base font-medium">Total do Apoia.se</CardTitle>
                  <DollarSign className="text-[#8C2AFF] size-4 sm:size-5" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl sm:text-3xl font-bold">R$ {total.toLocaleString("pt-BR")}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm sm:text-base font-medium">Categorias</CardTitle>
                  <PieChartIcon className="text-[#8C2AFF] size-4 sm:size-5" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl sm:text-3xl font-bold">{data.length}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm sm:text-base font-medium">Status</CardTitle>
                  <BarChart2 className="text-[#8C2AFF] size-4 sm:size-5" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-lg sm:text-xl font-medium">Em Desenvolvimento</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Data Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-4 sm:p-6">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold">Distribuição de Recursos</CardTitle>
                  <CardDescription>Como cada real foi investido no projeto</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] sm:h-[350px] md:h-[400px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          labelLine={false}
                        >
                          {data.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.color} 
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth={1}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend 
                          layout={isMobile ? "horizontal" : "vertical"}
                          verticalAlign={isMobile ? "bottom" : "middle"}
                          align={isMobile ? "center" : "right"}
                          wrapperStyle={isMobile ? { paddingTop: '20px' } : {}}
                          formatter={(value, entry: any, index) => (
                            <span className="text-white text-xs sm:text-sm">
                              {value} ({(entry.payload.value / total * 100).toFixed(1)}%)
                            </span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Detailed Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2 space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold">Detalhamento Financeiro</h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Cada categoria representa um aspecto crucial do desenvolvimento do High Boy, garantindo qualidade
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                {data.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl hover:border-[#8C2AFF]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div 
                        className="size-2 sm:size-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm sm:text-base font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm sm:text-base font-bold">R$ {item.value.toLocaleString("pt-BR")}</p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {((item.value / total) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#8C2AFF]/10 to-[#4a1e99]/10 border border-[#8C2AFF]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Impacto no Projeto</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Estes investimentos permitiram acelerar o desenvolvimento do High Boy, uma ferramenta revolucionária para profissionais de segurança.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 sm:mt-20 lg:mt-24 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Quer saber mais sobre o projeto?</h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Button 
                className="bg-gradient-to-r from-[#8C2AFF] to-[#6a11ff] text-white text-sm sm:text-base"
                onClick={() => window.open("https://highboy.com.br", "_blank")}
                size="sm"
              >
                Visitar Site Oficial
                <ArrowUpRight className="ml-1 sm:ml-2 size-3 sm:size-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-sm sm:text-base"
                onClick={() => window.open("https://github.com/HighCodeh", "_blank")}
                size="sm"
              >
                <Github className="mr-1 sm:mr-2 size-3 sm:size-4" />
                Repositório GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12 mt-12 sm:mt-16 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm sm:text-base">
                Relatório Financeiro • High Boy • {new Date().getFullYear()}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Projeto desenvolvido com transparência e excelência
              </p>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  )
}