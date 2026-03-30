"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Landmark, Gavel, Scale, Library, BookOpen, 
  ShieldCheck, FileText, ChevronDown, Lock, Users, Info,
  Search, Award, Scroll, Shield, Briefcase, Volume2, VolumeX, AlertTriangle
} from "lucide-react";

/* ===== AMBIENTE JUDICIAL (LUCES FRÍAS) ===== */
function JudicialAmbient({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      <div className="absolute -inset-x-20 -inset-y-40 bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

/* ===== GAVEL LOADER (EXPERIENCIA DE ENTRADA) ===== */
function GavelLoader({ onEnter }: { onEnter: () => void }) {
  const [isStriking, setIsStriking] = useState(false);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#020408] flex items-center justify-center overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-marble.png')] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,120,250,0.1)_0%,transparent_80%)]" />

      <AnimatePresence>
        {!isStriking && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.5 } }}
            className="flex flex-col items-center"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mb-16"
            >
              <div className="w-56 h-56 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(30,50,100,0.3)] border-t-slate-700/50">
                <Gavel className="w-24 h-24 text-slate-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
              </div>
              <div className="absolute -inset-4 border border-slate-700/30 rounded-full animate-pulse" />
            </motion.div>
            
            <button 
              onClick={() => {
                setIsStriking(true);
                setTimeout(onEnter, 1000);
              }}
              className="relative group px-16 py-6 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md hover:border-slate-300 transition-all duration-500 active:scale-95"
            >
              <div className="relative z-10 flex items-center gap-4">
                <span className="text-[11px] font-black tracking-[0.8em] text-slate-400 group-hover:text-white uppercase transition-all">ABRIR SESIÓN JUDICIAL</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            <p className="mt-10 text-[9px] font-mono text-slate-700 uppercase tracking-[0.6em] italic">"The truth shall set you free, but first it must be heard."</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Shake & Flash on Strike */}
      {isStriking && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-white z-[2100] mix-blend-overlay"
        />
      )}
    </div>
  );
}

/* ===== TACTICAL TRIBUNAL NAV (MOBILE) ===== */
function TribunalNav({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[90vw] max-w-xs"
    >
      <div className="bg-[#05070a]/90 border border-slate-800/80 backdrop-blur-3xl rounded-3xl p-2 flex items-center justify-around shadow-[0_40px_80px_rgba(0,0,0,1)] border-t-slate-700/40">
        <button onClick={() => onScrollTo("dictamen")} className="p-4 text-slate-500 hover:text-white transition-all flex flex-col items-center gap-1">
          <FileText className="w-5 h-5" />
          <span className="text-[7px] font-bold tracking-widest uppercase opacity-60">Dictamen</span>
        </button>
        <button onClick={() => onScrollTo("sala")} className="p-4 text-slate-500 hover:text-white transition-all flex flex-col items-center gap-1">
          <Gavel className="w-5 h-5" />
          <span className="text-[7px] font-bold tracking-widest uppercase opacity-60">Sala</span>
        </button>
        <button onClick={() => onScrollTo("lex")} className="p-4 text-slate-500 hover:text-white transition-all flex flex-col items-center gap-1">
          <BookOpen className="w-5 h-5" />
          <span className="text-[7px] font-bold tracking-widest uppercase opacity-60">Leyes</span>
        </button>
      </div>
    </motion.div>
  );
}

/* ===== TÍTULO MONUMENTAL SIMÉTRICO ===== */
function MonumentTitle() {
  return (
    <div className="relative flex flex-col items-center text-center select-none pt-20">
      <motion.span 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="text-[10vw] md:text-[5rem] font-serif tracking-[0.5em] text-slate-500/50 mb-4 uppercase italic"
      >
        EL PROCESO
      </motion.span>
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1.5 }}
        className="relative"
      >
        <h1 className="text-[16vw] md:text-[11rem] font-serif font-black text-white leading-[0.8] mb-8 tracking-tighter uppercase drop-shadow-[0_20px_60px_rgba(0,0,0,1)]">
           JUICIO DEL <br /> 
           <span className="text-slate-300 italic tracking-[-0.02em]">PADRINO</span>
        </h1>
        <div className="h-[1px] w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      </motion.div>
    </div>
  );
}

export default function PadrinoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    if (!isLoading && audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => console.log("Audio interact required"));
    }
  }, [isLoading]);

  return (
    <main className="relative min-h-screen bg-[#05070a] text-slate-200 selection:bg-slate-700 selection:text-white font-sans overflow-x-hidden">
      
      {/* BACKGROUND AUDIO */}
      <audio ref={audioRef} src="/audio/comites/padrino.mp3" loop />
      
      {/* GLOBAL MOOD LIGHTING */}
      <div className="fixed inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle_at_50%_0%,rgba(100,120,255,0.04)_0%,transparent_70%)]" />
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/black-marble.png')] mix-blend-overlay" />

      <AnimatePresence>
        {isLoading && <GavelLoader key="loader" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && <TribunalNav onScrollTo={scrollTo} />}

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          
          <nav className="fixed top-0 w-full z-[120] p-8 md:p-14 pointer-events-none flex justify-between items-center">
            <NextLink href="/comites" className="pointer-events-auto inline-flex items-center gap-6 py-4 px-10 bg-slate-950/80 border border-slate-800 rounded-xl shadow-2xl group transition-all hover:bg-white hover:border-white">
              <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-black transition-all" />
              <span className="text-[11px] font-black tracking-[0.5em] uppercase text-slate-400 group-hover:text-black transition-all">ESTODOS</span>
            </NextLink>
            
            <div className="hidden md:flex gap-14 pointer-events-auto">
                <button onClick={() => scrollTo("dictamen")} className="text-[10px] font-black tracking-[0.7em] text-slate-600 hover:text-white uppercase transition-all">EL DICTAMEN</button>
                <button onClick={() => scrollTo("sala")} className="text-[10px] font-black tracking-[0.7em] text-slate-600 hover:text-white uppercase transition-all">LA SALA</button>
                <button onClick={() => scrollTo("lex")} className="text-[10px] font-black tracking-[0.7em] text-slate-600 hover:text-white uppercase transition-all">CÓDIGO LEX</button>
            </div>

            <button 
              onClick={() => {
                if(audioRef.current) {
                  audioRef.current.muted = !isMuted;
                  setIsMuted(!isMuted);
                }
              }}
              className="pointer-events-auto p-4 bg-slate-950/80 border border-slate-800 rounded-full"
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-slate-500" /> : <Volume2 className="w-5 h-5 text-slate-500" />}
            </button>
          </nav>

          {/* HERO - MARBLE PALACE */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-10">
             <div className="absolute inset-0 z-0">
               {/* Courtroom Background with Ken Burns effect */}
               <motion.div 
                 initial={{ scale: 1.1 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                 className="w-full h-full"
               >
                 <img src="/images/comites/padrino-bg.png" className="w-full h-full object-cover grayscale brightness-[0.3] contrast-[1.2]" alt="Trial Background" />
               </motion.div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]" />
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,#05070a_100%)] opacity-80" />
             </div>

             <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10">
                <div className="mb-14 flex justify-center">
                  <span className="px-10 py-3 bg-[#0a0c10]/95 border-2 border-slate-800 rounded-lg text-slate-500 font-mono text-[11px] tracking-[1.5em] uppercase font-black shadow-2xl">
                    EXP-JUD-2030
                  </span>
                </div>
                <MonumentTitle />
                <p className="mt-20 text-xl md:text-3xl font-light italic text-slate-500 font-serif max-w-4xl mx-auto drop-shadow-2xl leading-relaxed text-center">
                  "Donde el silencio es ley, la justicia se escribe en piedra."
                </p>
                <div className="mt-24 text-slate-700 animate-bounce flex justify-center">
                   <ChevronDown className="w-12 h-12" />
                </div>
             </motion.div>
          </section>

          {/* NARRATIVA INSTITUCIONAL */}
          <section id="dictamen" className="relative py-48 md:py-80 px-10 bg-[#05070a]">
             <div className="max-w-6xl mx-auto space-y-64 md:space-y-80 relative z-10">
                <JudicialAmbient>
                   <div className="flex items-center gap-10 mb-16 justify-center">
                      <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-slate-800" />
                      <Scale className="w-8 h-8 text-slate-700" />
                      <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-slate-800" />
                   </div>
                   <h2 className="text-[13vw] md:text-[8rem] font-serif font-black text-white leading-[0.8] tracking-tighter mb-16 uppercase drop-shadow-2xl text-center">
                      LA <br /> <span className="text-[#94a3b8] italic border-b-4 border-slate-800 pb-4">SENTENCIA.</span>
                   </h2>
                   <p className="text-2xl md:text-4xl font-light text-slate-400 leading-relaxed md:leading-[1.7] text-justify md:text-center max-w-4xl mx-auto select-none">
                      Tras décadas de dominio transatlántico, la ’Ndrangheta se enfrenta a una tormenta judicial sin precedentes. La captura del “Padrino” ha puesto al descubierto una red masiva de evasión fiscal y lavado de activos que amenaza los cimientos económicos de Europa.
                   </p>
                </JudicialAmbient>

                <div className="flex flex-col items-center justify-center text-center py-48 border-2 border-slate-900 bg-slate-950/40 rounded-[6rem] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
                   <h3 className="text-[18vw] md:text-[14rem] font-serif font-black text-white tracking-widest leading-none mb-12 italic select-none opacity-5">LEX</h3>
                   <div className="w-20 h-20 rounded-full border border-slate-800 flex items-center justify-center bg-black mb-12">
                      <Shield className="w-10 h-10 text-slate-800" />
                   </div>
                   <div className="w-32 h-[1px] bg-slate-800 mb-12" />
                   <p className="text-slate-600 font-mono text-[11px] md:text-[18px] tracking-[2.5em] uppercase px-4 font-black">PROCEDIMIENTO FINAL</p>
                </div>
                
                <p className="text-2xl md:text-4xl font-light text-slate-400 leading-relaxed md:leading-[1.7] text-center max-w-4xl mx-auto select-none italic">
                  "El estado de derecho se pone a prueba no en la paz, sino ante el desafío del crimen organizado más hermético de la historia."
                </p>
             </div>
          </section>

          {/* ACTORES DE SALA (STELAE DESIGN) */}
          <section id="sala" className="py-24 md:py-64 bg-[#080a0c] border-t border-slate-900 overflow-hidden">
             <div className="max-w-[1900px] mx-auto px-10">
                <div className="mb-48 flex flex-col items-center text-center">
                   <h2 className="text-8xl md:text-[10rem] font-serif font-black text-white italic tracking-tighter leading-tight opacity-75 drop-shadow-2xl uppercase">Tribunal Supremo</h2>
                   <p className="mt-10 text-slate-500 font-mono text-[11px] tracking-[2.5em] uppercase opacity-40">Mazo vs Defensa</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-32">
                   {[
                     { n: "Magistrados", r: "PODER JUDICIAL", icon: Landmark, id: "T-01", d: "Guardianes de la ley encargados de dictar la sentencia que marcará un antes y un después en la historia calabresa." },
                     { n: "Jurados", r: "CONCLETO CIVIL", icon: Users, id: "T-02", d: "Representantes de la sociedad que deben decidir el destino del Padrino basándose en la rigurosidad de la evidencia." },
                     { n: "Defensa", r: "ESCUDO LEGAL", icon: ShieldCheck, id: "T-03", d: "Abogados encargados de garantizar el debido proceso y proteger los intereses del líder ante el asedio estatal." },
                     { n: "Fiscalía", r: "MAZO DEL ESTADO", icon: Gavel, id: "T-04", d: "Presentando las pruebas técnicas de la investigación internacional para desmantelar la red criminal desde su origen." }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ y: -20 }}
                        className="group relative flex flex-col p-16 bg-[#0d0e12] border-t-4 border-slate-800 transition-all duration-700 rounded-b-[4rem] overflow-hidden hover:bg-white hover:border-white shadow-2xl"
                     >
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-100 transition-opacity">
                           <Award className="w-16 h-16 text-slate-900" />
                        </div>
                        <div className="mb-14 w-20 h-20 rounded-2xl border border-slate-800 flex items-center justify-center bg-[#05070a] group-hover:border-slate-300 transition-all shadow-inner">
                           <item.icon className="w-10 h-10 text-slate-500 group-hover:text-black transition-colors" />
                        </div>
                        <h4 className="text-[2.6rem] md:text-5xl font-serif text-white mb-6 uppercase font-black group-hover:text-black transition-colors md:leading-none">{item.n}</h4>
                        <p className="text-[12px] font-black tracking-[0.8em] text-slate-600 mb-12 pb-8 border-b border-slate-900 group-hover:border-slate-200 transition-all uppercase">{item.r}</p>
                        <p className="text-slate-500 text-[18px] font-light italic leading-relaxed group-hover:text-slate-600 transition-colors">{item.d}</p>
                        <div className="mt-12 flex items-center gap-8 text-[11px] font-mono text-slate-800 font-black group-hover:text-slate-300">
                           <span className="flex-1 h-[2px] bg-slate-900 group-hover:bg-slate-200" />
                           <span className="tracking-[1em]">{item.id}</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </section>

          {/* RECURSOS JUDICIALES (LEX MONOLITHS) */}
          <section id="lex" className="py-48 px-10 bg-[#05070a] border-t border-slate-900 shadow-inner">
             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                  { label: "Lex Académica", icon: BookOpen },
                  { label: "Archivos", icon: Library },
                  { label: "Protocolos", icon: Scroll }
                ].map((btn, i) => (
                  <button key={i} className="group flex flex-col items-center justify-center gap-14 p-24 bg-[#0c0e12] border-2 border-slate-950 rounded-[4rem] hover:border-slate-400 hover:bg-slate-900 transition-all shadow-2xl relative overflow-hidden active:scale-95">
                     <div className="w-20 h-20 rounded-full border border-slate-800 flex items-center justify-center text-slate-600 group-hover:text-white transition-all bg-black group-hover:bg-slate-100 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <btn.icon className="w-8 h-8" />
                     </div>
                     <span className="text-[13px] font-black tracking-[1.2em] text-slate-400 group-hover:text-white uppercase transition-all text-center leading-relaxed">{btn.label}</span>
                     <div className="absolute inset-0 bg-[#cbd5e1]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER JUSTICIA */}
          <footer className="py-48 border-t border-slate-900 text-center bg-[#05070a] px-10 pb-96">
            <div className="flex flex-col items-center">
               <Scale className="w-20 h-20 text-slate-900 mb-16 drop-shadow-2xl opacity-50" />
               <div className="flex flex-wrap justify-center gap-x-20 gap-y-16 text-[13px] font-black tracking-[1.5em] uppercase text-slate-600 mb-32 italic">
                  <NextLink href="/comites" className="hover:text-white transition-all border-b border-transparent hover:border-slate-800">Tribunales</NextLink>
                  <NextLink href="/" className="hover:text-white transition-all border-b border-transparent hover:border-slate-800">Sede Central</NextLink>
               </div>
               <p className="text-[12px] text-slate-700 tracking-[3em] uppercase italic opacity-30 font-black">Justicia Suprema • Lara 2030</p>
            </div>
          </footer>
          
        </motion.div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
