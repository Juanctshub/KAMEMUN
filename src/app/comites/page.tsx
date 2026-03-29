"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Skull, Scale, Search, BookOpen, Globe, Camera,
  ArrowLeft, Sparkles, AlertTriangle, Shield, ChevronRight,
  Crosshair, Fingerprint
} from "lucide-react";

const committees = [
  {
    id: "ndrangheta",
    name: "L'Ndrangheta",
    type: "CRISIS",
    modality: "Mixto/Agencia",
    theme: "Mafia Italiana",
    description: "Sumérgete en las entrañas de la organización criminal más poderosa de Calabria. Negociación, traición y supervivencia en un comité donde cada segundo cuenta.",
    icon: Skull,
    gradient: "from-red-950 via-red-900/80 to-black",
    border: "border-red-500/20",
    accentColor: "text-red-400",
    glowColor: "rgba(220,38,38,0.15)",
    tag: "🔴 Alto Riesgo",
    number: "01",
    href: "/comites/ndrangheta"
  },
  {
    id: "padrino",
    name: "Juicio del Padrino Calabrés",
    type: "CORTE",
    modality: "Mixta/Individual · Mixta/Agencia",
    theme: "Tribunal Judicial",
    description: "Jurados, magistrados, defensa y fiscalía. Un juicio que definirá el destino de un imperio criminal bajo el peso implacable de la ley.",
    icon: Scale,
    gradient: "from-amber-950 via-amber-900/60 to-black",
    border: "border-amber-500/20",
    accentColor: "text-amber-400",
    glowColor: "rgba(217,119,6,0.15)",
    tag: "⚖️ Derecho",
    number: "02",
    href: "/comites/padrino"
  },
  {
    id: "sharon-tate",
    name: "Magnicidio de Sharon Tate y LaBianca",
    type: "FBI",
    modality: "Mixto/Individual",
    theme: "Investigación Criminal",
    description: "Agosto de 1969. Los Ángeles se tiñe de terror. El FBI enfrenta uno de los crímenes más atroces y mediáticos del siglo XX.",
    icon: Search,
    gradient: "from-slate-950 via-zinc-900/80 to-black",
    border: "border-slate-400/20",
    accentColor: "text-slate-300",
    glowColor: "rgba(148,163,184,0.1)",
    tag: "🔍 Clasificado",
    number: "03"
  },
  {
    id: "educacion",
    name: "Desfase educativo en América Latina ante el modelo de Asia Oriental",
    type: "FORO POLÍTICO",
    modality: "Mixto/Individual",
    theme: "Política Educativa",
    description: "¿Por qué Asia Oriental lidera y Latinoamérica se rezaga? Un foro donde se rediseñará el futuro educativo de un continente entero.",
    icon: BookOpen,
    gradient: "from-blue-950 via-blue-900/60 to-black",
    border: "border-blue-500/20",
    accentColor: "text-blue-400",
    glowColor: "rgba(59,130,246,0.15)",
    tag: "📚 Académico",
    number: "04"
  },
  {
    id: "cachemira",
    name: "Crisis en la región de Cachemira entre India y Pakistán",
    type: "CICA",
    modality: "Mixto/Individual",
    theme: "Geopolítica Asiática",
    description: "Dos potencias nucleares al borde del conflicto. La Conferencia de Interacción busca evitar una catástrofe global en el corazón de Asia.",
    icon: Globe,
    gradient: "from-emerald-950 via-emerald-900/60 to-black",
    border: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    glowColor: "rgba(16,185,129,0.15)",
    tag: "🗺️ Geopolítica",
    number: "05"
  },
  {
    id: "prensa",
    name: "Prensa",
    type: "COBERTURA MEDIÁTICA",
    modality: "Mixto/Agencia",
    theme: "Periodismo de Guerra",
    description: "La verdad no se negocia. Cubre cada comité en tiempo real, investiga, redacta y presenta la realidad desde la trinchera informativa.",
    icon: Camera,
    gradient: "from-neutral-950 via-neutral-900/80 to-black",
    border: "border-neutral-400/20",
    accentColor: "text-neutral-300",
    glowColor: "rgba(163,163,163,0.1)",
    tag: "📰 Medios",
    number: "06"
  }
];

/* ===== LOADING SCREEN ===== */
function ComitesLoading({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)", scale: 1.02 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)" }} />

      {/* Rotating Rings */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute w-72 h-72 md:w-96 md:h-96 border border-white/[0.03] rounded-full" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute w-56 h-56 md:w-72 md:h-72 border border-red-500/[0.06] rounded-full" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-40 h-40 md:w-56 md:h-56 border border-white/[0.02] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center px-8"
      >
        {/* Logo */}
        <div className="w-20 h-20 md:w-24 md:h-24 relative bg-white/90 rounded-full shadow-[0_0_60px_rgba(220,38,38,0.15)] flex items-center justify-center p-2 border-2 border-red-500/20 mb-8">
          <Image src="/images/logo-oficial.png" alt="KAMEMUN" fill className="object-contain p-2" priority />
        </div>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-8 max-w-[300px]"
        />

        <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tighter mb-2">COMITÉS</h1>
        <p className="text-white/20 text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase mb-10">Expedientes Clasificados</p>

        {/* Progress Bar */}
        <div className="w-48 md:w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-white/15 text-[9px] font-mono tracking-widest mt-4">
          CARGANDO EXPEDIENTES... {Math.min(Math.round(progress), 100)}%
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ===== MAIN PAGE ===== */
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
            {/* ===== NAVBAR ===== */}
            <header className="fixed top-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
              <div className="flex items-center justify-between w-full max-w-6xl px-5 py-3 md:px-8 md:py-4 rounded-full bg-black/70 backdrop-blur-2xl border border-white/[0.06] shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-auto">
                <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-white/30 group-hover:text-white transition-colors" />
                  <div className="w-7 h-7 md:w-9 md:h-9 relative bg-white/90 rounded-full p-[2px]">
                    <Image src="/images/logo-oficial.png" alt="KAMEMUN" fill className="object-contain" />
                  </div>
                  <span className="text-xs md:text-sm font-bold tracking-widest text-white/50 group-hover:text-white transition-colors">KAMEMUN</span>
                </Link>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 text-[9px] font-black tracking-[0.3em] uppercase text-red-400/40 border border-red-500/10 rounded-full px-4 py-1.5">
                    <Crosshair className="w-3 h-3" />
                    <span>COMITÉS</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-black tracking-[0.2em] uppercase text-white/15 border border-white/5 rounded-full px-3 py-1.5">
                    <Shield className="w-3 h-3" />
                    <span className="hidden sm:inline">Clasificado</span>
                  </div>
                </div>
              </div>
            </header>

            {/* ===== HERO ===== */}
            <section className="relative min-h-[45vh] md:min-h-[55vh] flex flex-col items-center justify-end text-center px-6 pt-28 md:pt-32 pb-12 md:pb-16">
              {/* Background Glows */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-red-500/[0.04] blur-[200px] rounded-full pointer-events-none" />
              <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-amber-500/[0.02] blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-500/[0.02] blur-[100px] rounded-full pointer-events-none" />
              
              {/* Decorative Side Lines */}
              <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 opacity-10 pointer-events-none">
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-red-500 to-transparent" />
                <Fingerprint className="w-4 h-4 text-red-400" />
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-red-500 to-transparent" />
              </div>
              <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 opacity-10 pointer-events-none">
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent" />
                <AlertTriangle className="w-4 h-4 text-white" />
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="relative z-10 max-w-3xl"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-8 md:w-12 h-[1px] bg-red-500/20" />
                  <div className="flex items-center gap-2 border border-red-500/10 bg-red-500/5 rounded-full px-4 py-1.5">
                    <AlertTriangle className="w-3 h-3 text-red-500/50" />
                    <p className="text-red-400/50 font-black tracking-[0.4em] uppercase text-[8px] md:text-[9px]">Acceso Autorizado</p>
                  </div>
                  <div className="w-8 md:w-12 h-[1px] bg-red-500/20" />
                </div>

                <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter mb-5 leading-[0.9]">
                  <span className="text-white/90">¿Qué Comité </span>
                  <br className="md:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-amber-500">Deseas Ver?</span>
                </h1>
                <p className="text-white/25 text-xs md:text-base font-light max-w-md mx-auto leading-relaxed">
                  Cada expediente contiene un universo diplomático único. Elige con cuidado — tu decisión define tu campo de batalla.
                </p>

                {/* Scroll Indicator */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-10 flex flex-col items-center text-white/10"
                >
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </motion.div>
              </motion.div>
            </section>

            {/* ===== COMMITTEE GRID ===== */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 pb-24 md:pb-32">
              {/* Section Divider */}
              <div className="flex items-center gap-4 mb-12 md:mb-16 px-2">
                <div className="flex-1 h-[1px] bg-white/5" />
                <span className="text-[9px] font-black tracking-[0.5em] uppercase text-white/15">6 Expedientes Disponibles</span>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>

              {/* Main 5 Committees - 2 on top, 3 on bottom for desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                {committees.slice(0, 5).map((c, i) => (
                  <Link 
                    key={c.id} 
                    href={c.href || "#"}
                    className={`${!c.href ? 'pointer-events-none' : ''}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.7 }}
                      className={`group relative h-full rounded-2xl md:rounded-[2rem] bg-gradient-to-br ${c.gradient} border ${c.border} p-6 md:p-9 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2`}
                      style={{ boxShadow: `0 0 0 0 transparent` }}
                      onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 20px 80px ${c.glowColor}`}
                      onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 0 transparent`}
                    >
                    {/* Noise */}
                    <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                    
                    {/* Background Icon (watermark) */}
                    <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
                      <c.icon className="w-44 h-44 md:w-56 md:h-56" />
                    </div>

                    {/* Number Watermark */}
                    <div className="absolute top-4 right-6 text-white/[0.03] text-7xl md:text-8xl font-serif font-black pointer-events-none select-none">{c.number}</div>

                    {/* Top Row */}
                    <div className="relative z-10 flex items-center justify-between mb-5 md:mb-7">
                      <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl border ${c.border} bg-white/[0.03] flex items-center justify-center group-hover:bg-white/[0.06] transition-colors`}>
                        <c.icon className={`w-5 h-5 md:w-6 md:h-6 ${c.accentColor}`} />
                      </div>
                      <span className="text-[9px] md:text-[10px] font-black tracking-widest uppercase text-white/15">{c.tag}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <p className={`text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase ${c.accentColor} opacity-60 mb-1.5`}>{c.type}</p>
                      <h3 className="text-lg md:text-xl font-serif font-black text-white leading-tight mb-3 tracking-tight group-hover:text-white/100 transition-colors">{c.name}</h3>
                      <p className="text-white/30 text-[11px] md:text-xs font-light leading-relaxed mb-5">{c.description}</p>
                      
                      {/* Modality Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {c.modality.split(" · ").map((mod, j) => (
                          <span key={j} className={`text-[8px] md:text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${c.border} bg-white/[0.02] ${c.accentColor} opacity-40`}>
                            {mod}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="w-full h-[1px] bg-white/5 mb-5" />

                      {/* CTA */}
                      <div className={`flex items-center justify-between ${c.accentColor}`}>
                        <div className="flex items-center gap-2 opacity-40 group-hover:opacity-80 transition-all duration-500">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-black tracking-widest uppercase">Ver Expediente</span>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-all duration-500 translate-x-[-8px] group-hover:translate-x-0" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
              </div>

              {/* Prensa - Full Width Special Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className={`group relative rounded-2xl md:rounded-[2rem] bg-gradient-to-br ${committees[5].gradient} border ${committees[5].border} p-6 md:p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1`}
                style={{ boxShadow: `0 0 0 0 transparent` }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 20px 80px ${committees[5].glowColor}`}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 0 transparent`}
              >
                <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none">
                  <Camera className="w-56 h-56" />
                </div>
                <div className="absolute top-4 right-6 text-white/[0.02] text-8xl font-serif font-black pointer-events-none select-none">06</div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`w-12 h-12 rounded-2xl border ${committees[5].border} bg-white/[0.03] flex items-center justify-center flex-shrink-0`}>
                      <Camera className={`w-6 h-6 ${committees[5].accentColor}`} />
                    </div>
                    <div>
                      <p className={`text-[9px] font-black tracking-[0.3em] uppercase ${committees[5].accentColor} opacity-60 mb-1`}>{committees[5].type}</p>
                      <h3 className="text-xl md:text-2xl font-serif font-black text-white tracking-tight">{committees[5].name}</h3>
                      <p className="text-white/30 text-[11px] md:text-xs font-light mt-1 max-w-md">{committees[5].description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className={`text-[8px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border ${committees[5].border} bg-white/[0.02] ${committees[5].accentColor} opacity-40`}>
                      {committees[5].modality}
                    </span>
                    <div className={`flex items-center gap-2 ${committees[5].accentColor} opacity-40 group-hover:opacity-80 transition-all`}>
                      <span className="text-[10px] font-black tracking-widest uppercase hidden md:inline">Ver Expediente</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="border-t border-white/5 py-10 pb-28 md:pb-10 px-6 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/15 text-[10px] uppercase tracking-widest">
                <Link href="/" className="hover:text-white/40 transition-colors flex items-center gap-2">
                  <ArrowLeft className="w-3 h-3" />
                  Volver al Inicio
                </Link>
                <span className="hidden md:inline opacity-30">|</span>
                <span className="opacity-50">KAMEMUN © {new Date().getFullYear()}</span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
