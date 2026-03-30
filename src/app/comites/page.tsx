"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Skull, Scale, Search, BookOpen, Globe, Camera,
  ArrowLeft, Sparkles, AlertTriangle, Shield, ChevronRight,
  Crosshair, Fingerprint, Lock, Gavel
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
    tag: "💰 Crisis",
    number: "01",
    href: "/comites/ndrangheta"
  },
  {
    id: "padrino",
    name: "Juicio del Padrino Calabrés",
    type: "CORTE",
    modality: "Mixta/Individual · Mixta/Agencia",
    theme: "Tribunal Judicial",
    description: "El Padrino ha caído. Enfrenta la justicia en el proceso más mediático de Calabria. ¿Balanza de honor o martillo de ley? Tú decides el veredicto.",
    icon: Gavel,
    gradient: "from-zinc-950 via-zinc-900 to-black",
    border: "border-amber-900/20",
    accentColor: "text-amber-600",
    glowColor: "rgba(180,83,9,0.1)",
    tag: "⚖️ Juicio",
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

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center px-8"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 relative bg-white/90 rounded-full shadow-[0_0_60px_rgba(220,38,38,0.15)] flex items-center justify-center p-2 border-2 border-red-500/20 mb-8">
          <Image src="/images/logo-oficial.png" alt="KAMEMUN" fill className="object-contain p-2" priority />
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-8 max-w-[300px]"
        />

        <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tighter mb-2">COMITÉS</h1>
        <p className="text-white/20 text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase mb-10">Expedientes Clasificados</p>

        <div className="w-48 md:w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
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
            <header className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
              <div className="flex items-center justify-between w-full max-w-6xl px-8 py-4 rounded-full bg-black/70 backdrop-blur-2xl border border-white/[0.06] shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-auto">
                <Link href="/" className="flex items-center gap-3 group">
                  <ArrowLeft className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                  <div className="w-9 h-9 relative bg-white/90 rounded-full p-[2px]">
                    <Image src="/images/logo-oficial.png" alt="KAMEMUN" fill className="object-contain" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-white/50 group-hover:text-white transition-colors">KAMEMUN</span>
                </Link>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 text-[9px] font-black tracking-[0.3em] uppercase text-red-400/40 border border-red-500/10 rounded-full px-4 py-1.5">
                    <Crosshair className="w-3 h-3" />
                    <span>COMITÉS</span>
                  </div>
                </div>
              </div>
            </header>

            <section className="relative min-h-[55vh] flex flex-col items-center justify-end text-center px-6 pt-32 pb-16">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-red-500/[0.04] blur-[200px] rounded-full pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="relative z-10 max-w-3xl"
              >
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-[1px] w-12 bg-red-500/20" />
                  <div className="flex items-center gap-2 border border-red-500/10 bg-red-500/5 rounded-full px-4 py-1.5">
                    <AlertTriangle className="w-3 h-3 text-red-500/50" />
                    <p className="text-red-400/50 font-black tracking-[0.4em] uppercase text-[9px]">Acceso Autorizado</p>
                  </div>
                  <div className="h-[1px] w-12 bg-red-500/20" />
                </div>

                <h1 className="text-4xl md:text-8xl font-serif font-black tracking-tighter mb-5 leading-[0.9]">
                  <span className="text-white/90">¿Qué Comité </span>
                  <br className="md:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-amber-500">Deseas Ver?</span>
                </h1>
                <p className="text-white/25 text-xs md:text-base font-light max-w-md mx-auto leading-relaxed italic">
                  Cada expediente contiene un universo diplomático único. Elige con cuidado.
                </p>
              </motion.div>
            </section>

            <section className="max-w-7xl mx-auto px-6 pb-32">
              <div className="flex items-center gap-4 mb-16 px-2">
                <div className="flex-1 h-[1px] bg-white/5" />
                <span className="text-[9px] font-black tracking-[0.5em] uppercase text-white/15">Expedientes Disponibles</span>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {committees.slice(0, 5).map((c, i) => (
                  <Link 
                    key={c.id} 
                    href={c.href || "#"}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.7 }}
                      className={`group relative h-full rounded-[2rem] bg-gradient-to-br ${c.gradient} border ${c.border} p-9 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                    >
                    <div className="absolute top-4 right-6 text-white/[0.03] text-7xl md:text-8xl font-serif font-black pointer-events-none select-none">{c.number}</div>

                    <div className="relative z-10 flex items-center justify-between mb-7">
                      <div className={`w-12 h-12 rounded-2xl border ${c.border} bg-white/[0.03] flex items-center justify-center group-hover:bg-white/[0.06] transition-colors`}>
                        <c.icon className={`w-6 h-6 ${c.accentColor}`} />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase text-white/15">{c.tag}</span>
                    </div>

                    <div className="relative z-10">
                      <p className={`text-[10px] font-black tracking-[0.3em] uppercase ${c.accentColor} opacity-60 mb-1.5`}>{c.type}</p>
                      <h3 className="text-xl md:text-2xl font-serif font-black text-white leading-tight mb-3 tracking-tight group-hover:text-white transition-colors">{c.name}</h3>
                      <p className="text-white/30 text-xs font-light leading-relaxed mb-5">{c.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {c.modality.split(" · ").map((mod, j) => (
                          <span key={j} className={`text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${c.border} bg-white/[0.02] ${c.accentColor} opacity-40`}>
                            {mod}
                          </span>
                        ))}
                      </div>

                      <div className="w-full h-[1px] bg-white/5 mb-5" />

                      <div className={`flex items-center justify-between ${c.accentColor}`}>
                        <div className="flex items-center gap-2 opacity-40 group-hover:opacity-80 transition-all duration-500">
                          <Sparkles className="w-4 h-4" />
                          <span className="text-[10px] font-black tracking-widest uppercase">Ver Expediente</span>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-all duration-500" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className={`group relative rounded-[2.5rem] bg-gradient-to-br ${committees[5].gradient} border ${committees[5].border} p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl`}
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl border ${committees[5].border} bg-white/[0.03] flex items-center justify-center`}>
                      <Camera className={`w-7 h-7 ${committees[5].accentColor}`} />
                    </div>
                    <div>
                      <p className={`text-[9px] font-black tracking-[0.3em] uppercase ${committees[5].accentColor} opacity-60 mb-1`}>{committees[5].type}</p>
                      <h3 className="text-2xl md:text-3xl font-serif font-black text-white tracking-tight">{committees[5].name}</h3>
                      <p className="text-white/30 text-xs font-light mt-1 max-w-md">{committees[5].description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={`text-[9px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border ${committees[5].border} bg-white/[0.02] ${committees[5].accentColor} opacity-40`}>
                      {committees[5].modality}
                    </span>
                    <ChevronRight className="w-6 h-6 text-white/20" />
                  </div>
                </div>
              </motion.div>
            </section>

            <footer className="border-t border-white/5 py-12 px-10 text-center pb-24 md:pb-12">
              <p className="text-white/15 text-[10px] uppercase tracking-widest font-black italic">KAMEMUN 2030 • Lara • Justicia y Diplomacia</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
