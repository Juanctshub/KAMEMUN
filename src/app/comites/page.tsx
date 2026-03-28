"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Skull, Scale, Search, BookOpen, Globe, Camera,
  ArrowLeft, Sparkles, AlertTriangle, Shield
} from "lucide-react";

const committees = [
  {
    id: "ndrangheta",
    name: "L'Ndrangheta",
    type: "CRISIS",
    modality: "Mixto/Agencia",
    theme: "Mafia Italiana",
    description: "Sumérgete en las entrañas de la organización criminal más poderosa de Calabria. Negociación, traición y supervivencia.",
    icon: Skull,
    gradient: "from-red-950 via-red-900/80 to-black",
    border: "border-red-500/20",
    accentColor: "text-red-400",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(220,38,38,0.15)]",
    tag: "🔴 Alto Riesgo"
  },
  {
    id: "padrino",
    name: "Juicio del Padrino Calabrés",
    type: "CORTE",
    modality: "Mixta/Individual · Mixta/Agencia",
    theme: "Tribunal Judicial",
    description: "Jurados, magistrados, defensa y fiscalía. Un juicio que definirá el destino de un imperio criminal bajo el peso de la ley.",
    icon: Scale,
    gradient: "from-amber-950 via-amber-900/60 to-black",
    border: "border-amber-500/20",
    accentColor: "text-amber-400",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(217,119,6,0.15)]",
    tag: "⚖️ Derecho"
  },
  {
    id: "sharon-tate",
    name: "Magnicidio de Sharon Tate y LaBianca",
    type: "FBI",
    modality: "Mixto/Individual",
    theme: "Investigación Criminal",
    description: "Agosto de 1969. Los Ángeles se tiñe de terror. El FBI enfrenta uno de los crímenes más atroces del siglo XX.",
    icon: Search,
    gradient: "from-slate-950 via-zinc-900/80 to-black",
    border: "border-slate-400/20",
    accentColor: "text-slate-300",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(148,163,184,0.1)]",
    tag: "🔍 Clasificado"
  },
  {
    id: "educacion",
    name: "Desfase educativo en América Latina ante el modelo de Asia Oriental",
    type: "FORO POLÍTICO",
    modality: "Mixto/Individual",
    theme: "Política Educativa",
    description: "¿Por qué Asia Oriental lidera y Latinoamérica se rezaga? Un foro para rediseñar el futuro educativo del continente.",
    icon: BookOpen,
    gradient: "from-blue-950 via-blue-900/60 to-black",
    border: "border-blue-500/20",
    accentColor: "text-blue-400",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]",
    tag: "📚 Académico"
  },
  {
    id: "cachemira",
    name: "Crisis en la región de Cachemira entre India y Pakistán",
    type: "CICA",
    modality: "Mixto/Individual",
    theme: "Geopolítica",
    description: "Dos potencias nucleares al borde del conflicto. La Conferencia de Interacción busca evitar una catástrofe en Asia.",
    icon: Globe,
    gradient: "from-emerald-950 via-emerald-900/60 to-black",
    border: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(16,185,129,0.15)]",
    tag: "🗺️ Geopolítica"
  },
  {
    id: "prensa",
    name: "Prensa",
    type: "COBERTURA MEDIÁTICA",
    modality: "Mixto/Agencia",
    theme: "Periodismo",
    description: "La verdad no se negocia. Cubre cada comité, investiga, redacta y presenta la realidad desde la trinchera informativa.",
    icon: Camera,
    gradient: "from-neutral-950 via-neutral-900/80 to-black",
    border: "border-neutral-400/20",
    accentColor: "text-neutral-300",
    hoverGlow: "group-hover:shadow-[0_0_60px_rgba(163,163,163,0.1)]",
    tag: "📰 Medios"
  }
];

function ComitesLoading({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 md:w-80 md:h-80 border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 md:w-64 md:h-64 border border-red-500/10 rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 relative bg-white/90 rounded-full shadow-[0_0_50px_rgba(220,38,38,0.2)] flex items-center justify-center p-2 border-2 border-red-500/30 mb-8">
          <Image src="/images/logo-oficial.png" alt="KAMEMUN" fill className="object-contain p-2" priority />
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent mb-8 max-w-xs"
        />

        <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tighter mb-3">
          COMITÉS
        </h1>
        <p className="text-white/30 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase">
          Expedientes Clasificados
        </p>

        {/* Animated dots */}
        <div className="flex items-center gap-2 mt-8">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-red-500/60"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ComitesPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <AnimatePresence>
        {isLoading && <ComitesLoading onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            {/* ===== HEADER ===== */}
            <header className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
              <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full bg-black/80 backdrop-blur-2xl border border-white/5 shadow-2xl pointer-events-auto">
                <Link href="/" className="flex items-center gap-3 group">
                  <ArrowLeft className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                  <div className="w-8 h-8 relative bg-white/90 rounded-full p-[2px]">
                    <Image src="/images/logo-oficial.png" alt="KAMEMUN" fill className="object-contain" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-white/60 group-hover:text-white transition-colors">KAMEMUN</span>
                </Link>
                <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-white/20">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Clasificado</span>
                </div>
              </div>
            </header>

            {/* ===== HERO ===== */}
            <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
              {/* Background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-red-500/5 blur-[200px] rounded-full pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="relative z-10"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-10 h-[1px] bg-red-500/30" />
                  <AlertTriangle className="w-4 h-4 text-red-500/50" />
                  <p className="text-red-400/60 font-black tracking-[0.5em] uppercase text-[10px]">Acceso Autorizado</p>
                  <AlertTriangle className="w-4 h-4 text-red-500/50" />
                  <div className="w-10 h-[1px] bg-red-500/30" />
                </div>

                <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter mb-4">
                  <span className="text-white">Selección de </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Comités</span>
                </h1>
                <p className="text-white/30 text-sm md:text-lg font-light max-w-xl mx-auto leading-relaxed">
                  Elige tu campo de batalla diplomática. Cada comité es un universo con sus propias reglas, riesgos y recompensas.
                </p>
              </motion.div>
            </section>

            {/* ===== COMMITTEE GRID ===== */}
            <section className="max-w-7xl mx-auto px-6 pb-32">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {committees.map((c, i) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    className={`group relative rounded-[2rem] bg-gradient-to-br ${c.gradient} border ${c.border} p-8 md:p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${c.hoverGlow}`}
                  >
                    {/* Noise */}
                    <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
                    
                    {/* Background Icon */}
                    <div className="absolute -right-6 -bottom-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                      <c.icon className="w-48 h-48" />
                    </div>

                    {/* Top Row */}
                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl border ${c.border} bg-white/[0.03] flex items-center justify-center`}>
                        <c.icon className={`w-6 h-6 ${c.accentColor}`} />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase text-white/20">{c.tag}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <p className={`text-[10px] font-black tracking-[0.3em] uppercase ${c.accentColor} opacity-70 mb-2`}>{c.type}</p>
                      <h3 className="text-xl md:text-2xl font-serif font-black text-white leading-tight mb-3 tracking-tight">{c.name}</h3>
                      <p className="text-white/40 text-xs font-light leading-relaxed mb-6">{c.description}</p>
                      
                      {/* Modality Tag */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {c.modality.split(" · ").map((mod, j) => (
                          <span key={j} className={`text-[9px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border ${c.border} bg-white/[0.02] ${c.accentColor} opacity-50`}>
                            {mod}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className={`flex items-center gap-3 ${c.accentColor} opacity-0 group-hover:opacity-70 transition-all duration-500 translate-y-2 group-hover:translate-y-0`}>
                        <span className="text-xs font-black tracking-widest uppercase">Próximamente</span>
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="border-t border-white/5 py-10 px-6 text-center">
              <div className="flex items-center justify-center gap-4 text-white/20 text-[10px] uppercase tracking-widest">
                <Link href="/" className="hover:text-white/50 transition-colors">← Volver al Inicio</Link>
                <span>|</span>
                <span>KAMEMUN © {new Date().getFullYear()}</span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
