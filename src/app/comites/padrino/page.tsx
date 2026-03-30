"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Landmark, Gavel, Scale, Library, BookOpen, 
  ShieldCheck, FileText, ChevronDown, Lock, Users, Info,
  Fingerprint, Search, Award, Scroll
} from "lucide-react";

/* ===== LEX AMBIENT (ILUMINACIÓN DE MÁRMOL) ===== */
function LexAmbient({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className={`relative group ${className}`}
    >
      {/* Cold Justice Glow - Slate Blue/Silver instead of Amber */}
      <motion.div 
        animate={{ opacity: [0.05, 0.12, 0.05], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-x-40 -inset-y-60 bg-slate-400/10 blur-[180px] pointer-events-none z-0"
      />
      <div className="relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
         {children}
      </div>
    </motion.div>
  );
}

/* ===== GAVEL STRIKE LOADER (EL GOLPE DE MAZO) ===== */
function GavelLoader({ onEnter }: { onEnter: () => void }) {
  const [isStriking, setIsStriking] = useState(false);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#0a0b14] overflow-hidden flex items-center justify-center">
      {/* Stone Texture Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-marble.png')] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,70,100,0.15)_0%,transparent_80%)]" />

      <AnimatePresence>
        {!isStriking && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }} 
            className="relative z-10 flex flex-col items-center select-none"
          >
            {/* The Gavel Icon over Marble Base */}
            <div className="relative mb-20 group">
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="w-48 h-48 rounded-2xl border-2 border-slate-800 bg-[#0c0d18] flex items-center justify-center shadow-2xl relative"
               >
                  <Gavel className="w-20 h-20 text-slate-500 group-hover:text-amber-500 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,150,255,0.05)_0%,transparent_70%)]" />
               </motion.div>
               <div className="mt-4 w-56 h-4 bg-slate-900/50 blur-md rounded-full mx-auto" />
            </div>

            <button 
              onClick={() => { setIsStriking(true); setTimeout(onEnter, 1000); }} 
              className="px-14 py-6 bg-slate-900/40 border-2 border-slate-800 rounded-lg group-hover:border-amber-600/40 transition-all shadow-[0_20px_60px_rgba(0,0,0,0.5)] active:scale-95 group overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-6">
                 <span className="text-[11px] font-black tracking-[1.5em] text-slate-400 group-hover:text-white transition-all uppercase whitespace-nowrap">ENTRAR A LA CORTE</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Strike Flash Effect */}
      {isStriking && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-white z-[2100] mix-blend-overlay"
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
}

/* ===== SCALES NAVIGATION (NAV DE PLATA) ===== */
function ScalesNavigation({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <motion.div 
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[90vw] max-w-sm"
    >
      <div className="bg-[#0a0b14]/95 border-2 border-slate-800/60 backdrop-blur-3xl rounded-2xl p-2 flex items-center justify-around shadow-[0_20px_60px_rgba(0,0,0,1)] relative overflow-hidden">
        <button onClick={() => onScrollTo("dictamen")} className="flex flex-col items-center gap-2 p-4 text-slate-500 hover:text-white transition-all active:scale-90">
          <Library className="w-5 h-5" />
          <span className="text-[8px] font-black tracking-widest uppercase">DICTAMEN</span>
        </button>
        <div className="w-[1px] h-8 bg-slate-800/40" />
        <button onClick={() => onScrollTo("sala")} className="flex flex-col items-center gap-2 p-4 text-slate-500 hover:text-white transition-all active:scale-90">
          <Scale className="w-5 h-5" />
          <span className="text-[8px] font-black tracking-widest uppercase">SALA</span>
        </button>
        <div className="w-[1px] h-8 bg-slate-800/40" />
        <button onClick={() => onScrollTo("leyes")} className="flex flex-col items-center gap-2 p-4 text-slate-500 hover:text-white transition-all active:scale-90">
          <BookOpen className="w-5 h-5" />
          <span className="text-[8px] font-black tracking-widest uppercase">LEYES</span>
        </button>
        
        {/* Silver Highlight */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />
      </div>
    </motion.div>
  );
}

/* ===== TRIBUNAL MONUMENT TITLE (SIMETRÍA FORMAL) ===== */
function TribunalMonumentTitle() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none text-center">
       {/* Background Pillar silhouettes in CSS */}
       <div className="absolute inset-0 flex justify-around items-end opacity-[0.03] -z-10 pointer-events-none px-20">
          <div className="w-12 h-screen bg-white" />
          <div className="w-12 h-screen bg-white" />
       </div>

       <motion.span 
         initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
         className="text-[10vw] md:text-[5rem] font-serif tracking-[0.6em] text-slate-500 mb-6 uppercase"
       >
         JUSTICIA
       </motion.span>
       <motion.div 
         initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
         className="relative flex flex-col items-center"
       >
         <h1 className="text-[16vw] md:text-[9rem] font-serif font-black text-white leading-[0.8] mb-6 tracking-tighter uppercase drop-shadow-[0_15px_60px_rgba(0,0,0,1)]">
            EL JUICIO <br/> 
            <span className="text-amber-600/90 italic tracking-[-0.05em]">PADRINO</span>
         </h1>
       </motion.div>
       <div className="mt-8 w-24 h-[1px] bg-slate-700/50" />
    </div>
  );
}

/* ===== SEAL OVERLAY ===== */
function SealOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center p-8 bg-[#0a0b14]/98 backdrop-blur-2xl">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative max-w-sm w-full p-14 bg-[#0a0b14] border-2 border-slate-800 rounded-3xl text-center shadow-2xl">
             <button onClick={onClose} className="absolute top-10 right-10 text-slate-600 hover:text-white transition-colors">X_EXIT</button>
             <div className="w-20 h-20 rounded-full border-2 border-slate-800 flex items-center justify-center mx-auto mb-10"><Lock className="w-8 h-8 text-slate-700" /></div>
             <h3 className="text-2xl font-serif text-white mb-6 uppercase tracking-titest font-black">ACCESO RESTRINGIDO</h3>
             <p className="text-slate-500 text-[14px] leading-relaxed mb-12 font-sans italic">El expediente judicial se encuentra bajo sellado de la Corte Suprema. Próximamente disponible.</p>
             <button onClick={onClose} className="w-full py-5 bg-slate-900 border border-slate-700 text-slate-300 text-[11px] font-black tracking-[0.5em] rounded-xl hover:bg-white hover:text-black transition-all">FINALIZAR</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PadrinoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSealOpen, setIsSealOpen] = useState(false);
  
  const scrollTo = (id: string) => {
     const el = document.getElementById(id);
     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#0a0b14] text-[#f4f6fb] selection:bg-slate-700 selection:text-white font-serif overflow-x-hidden">
      
      {/* GLOBAL COURTROOM AMBIENCE (COLD & INSTITUTIONAL) */}
      <div className="fixed inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle_at_50%_40%,rgba(100,120,200,0.06)_0%,transparent_80%)] opacity-70" />
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/black-marble.png')] mix-blend-overlay" />

      <AnimatePresence>
        {isLoading && <GavelLoader key="gavel" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SealOverlay isOpen={isSealOpen} onClose={() => setIsSealOpen(false)} />
      
      {!isLoading && <ScalesNavigation onScrollTo={scrollTo} />}

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          
          <nav className="fixed top-0 w-full z-[120] p-10 pointer-events-none">
            <NextLink href="/comites" className="pointer-events-auto inline-flex items-center gap-6 py-4 px-10 bg-[#0a0b14]/80 border-2 border-slate-800 rounded-xl shadow-2xl group transition-all hover:bg-white hover:border-white">
              <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-black transition-all" />
              <span className="text-[11px] font-black tracking-[0.5em] uppercase text-slate-500 group-hover:text-black transition-all">TRIBUNALES</span>
            </NextLink>
          </nav>

          {/* HERO - LA BALANZA SUPREMA */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-8">
             <div className="absolute inset-0 z-0">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-[0.4] saturate-0 contrast-[1.2] opacity-40">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               {/* Cold Surveillance Filter */}
               <div className="absolute inset-0 bg-[#324b64]/10 mix-blend-color" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-[#0a0b14]/80" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#0a0b14_100%)]" />
             </div>

             <motion.div style={{ y: titleY, opacity: heroOpacity }} className="relative z-10 text-center pt-24">
                <div className="mb-14 inline-flex px-10 py-3 border border-slate-800 bg-[#0c0d18]/60 backdrop-blur-xl rounded-lg shadow-2xl skew-x-[-10deg]">
                   <p className="text-slate-400 font-mono text-[10px] md:text-[13px] tracking-[1.5em] uppercase font-black skew-x-[10deg]">SUPREMA.CORTE.CALABRIA</p>
                </div>
                <TribunalMonumentTitle />
                <p className="mt-20 text-3xl md:text-5xl font-light italic text-slate-500 font-serif max-w-4xl mx-auto drop-shadow-2xl select-none leading-relaxed">"Donde la ley se petrifica, la verdad florece."</p>
                <motion.div animate={{ opacity: [0.1, 0.4, 0.1], y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="mt-24 text-slate-700 flex flex-col items-center">
                   <ChevronDown className="w-10 h-10" />
                </motion.div>
             </motion.div>
          </section>

          {/* NARRATIVA INSTITUCIONAL */}
          <section id="dictamen" className="relative py-40 md:py-64 px-10 bg-[#0a0b14]">
             <div className="max-w-5xl mx-auto space-y-56 md:space-y-72 relative z-10">
                <LexAmbient>
                   <span className="text-slate-600 font-mono text-[11px] tracking-[1.2em] mb-12 block font-black uppercase text-center md:text-left">Sumario Judicial / N-2030</span>
                   <h2 className="text-[13vw] md:text-[10rem] font-serif font-black text-white leading-[0.8] tracking-tighter mb-16 uppercase drop-shadow-2xl text-center md:text-left">
                      El Juicio <br /><span className="text-slate-700 italic border-b-4 border-slate-800 pb-4">Histórico.</span>
                   </h2>
                   <p className="text-2xl md:text-4.5xl font-light text-slate-400 leading-relaxed md:leading-[1.7] text-justify md:text-left select-none max-w-5xl md:px-0 px-4">
                      Tras décadas de operar desde las sombras, la estructura de la mafia calabresa enfrente su golpe más devastador. La captura del Padrino ha puesto en marcha un proceso judicial sin precedentes, desvelando el entramado de empresas fantasma y asociación ilícita.
                   </p>
                </LexAmbient>

                <div id="leyes" className="flex flex-col items-center justify-center text-center py-48 border-2 border-slate-800 bg-slate-900/5 rounded-[4rem] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,70,100,0.1)_0%,transparent_70%)] animate-pulse" />
                   <h3 className="text-[15vw] md:text-[12rem] font-serif font-black text-white tracking-[0.2em] leading-none mb-12 select-none opacity-90 drop-shadow-2xl italic">DURA LEX <br/><span className="text-slate-900 opacity-50">SED LEX</span></h3>
                   <div className="w-32 h-[2px] bg-slate-700/30 mb-12" />
                   <p className="text-slate-500 font-mono text-[13px] md:text-[22px] tracking-[2.5em] uppercase px-4 font-black">EL VEREDICTO DE LARA</p>
                </div>
             </div>
          </section>

          {/* LAS PARTES - TABLETAS DE MÁRMOL */}
          <section id="sala" className="py-24 md:py-64 bg-[#080911] border-t border-slate-900 overflow-hidden">
             <div className="max-w-[1800px] mx-auto px-10">
                <div className="mb-48 flex flex-col items-center text-center">
                   <h2 className="text-8xl md:text-[12rem] font-serif font-black text-white italic tracking-tighter leading-tight opacity-70 drop-shadow-2xl uppercase">Dignatarios</h2>
                   <p className="mt-12 text-slate-500 font-mono text-[12px] tracking-[3em] uppercase opacity-40 italic">Orden del día / Sala Suprema</p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 overflow-x-auto md:overflow-visible pb-32 snap-x snap-mandatory scrollbar-hide">
                   {[
                     { n: "Magistrados", r: "CENTINELAS", icon: Library, id: "COURT/01", d: "Guardianes supremos de la legalidad y la sentencia histórica." },
                     { n: "Jurados", r: "CIUDADANÍA", icon: Users, id: "COURT/02", d: "Determinando la culpabilidad del linaje bajo el peso de la ley civil." },
                     { n: "Defensa", r: "PROTECTORES", icon: ShieldCheck, id: "COURT/03", d: "Asegurando el debido proceso ante el asedio institucional del Estado." },
                     { n: "Fiscalía", r: "ACREEDORES", icon: Search, id: "COURT/04", d: "Desmantelando el imperio criminal con evidencia técnica irrefutable." }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ y: -20, scale: 1.02 }}
                        className="group min-w-[88vw] md:min-w-0 snap-center relative flex flex-col p-16 md:p-20 bg-[#0a0b14] border-t-2 border-slate-700 transition-all duration-700 rounded-b-[4rem] overflow-hidden hover:bg-white hover:border-white shadow-2xl"
                     >
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-100 transition-opacity">
                           <Award className="w-16 h-16 text-slate-900" />
                        </div>
                        <div className="mb-14 w-20 h-20 rounded-full border-2 border-slate-800 flex items-center justify-center bg-[#0d0e1b] group-hover:border-slate-900 group-hover:bg-slate-100 transition-all shadow-inner">
                           <item.icon className="w-9 h-9 text-slate-600 group-hover:text-black transition-colors" />
                        </div>
                        <h4 className="text-[2.6rem] md:text-6xl font-serif text-white mb-6 uppercase font-black group-hover:text-black transition-colors leading-none tracking-tighter">{item.n}</h4>
                        <p className="text-[13px] font-black tracking-[1em] text-slate-700 mb-12 pb-8 border-b border-slate-900 group-hover:border-slate-200 group-hover:text-slate-400 transition-all uppercase">{item.r}</p>
                        <p className="text-slate-500 text-[18px] md:text-[22px] font-light italic leading-relaxed mb-12 group-hover:text-slate-400 transition-colors">{item.d}</p>
                        <div className="mt-auto flex items-center gap-8 text-[11px] font-mono text-slate-800 font-bold group-hover:text-slate-300">
                           <span className="flex-1 h-[2px] bg-slate-900/50 group-hover:bg-slate-200" />
                           <span className="tracking-[1em]">{item.id}</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </section>

          {/* RECURSOS - ESTRUCTURA MONOLÍTICA */}
          <section id="recursos" className="py-48 px-10 bg-[#0a0b14] border-t border-slate-900">
             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                  { label: "Lex Académica", icon: BookOpen },
                  { label: "Palacio Mesa", icon: Landmark },
                  { label: "Protocolos", icon: Scroll }
                ].map((btn, i) => (
                  <button key={i} onClick={() => setIsSealOpen(true)} className="group flex flex-col items-center justify-center gap-14 p-24 bg-slate-900/5 border-2 border-slate-900 rounded-3xl hover:border-white hover:bg-white transition-all shadow-[0_40px_100px_rgba(0,0,0,1)] relative overflow-hidden active:scale-95">
                     <div className="w-20 h-20 rounded-2xl border-2 border-slate-800 flex items-center justify-center text-slate-600 group-hover:text-black transition-all bg-black group-hover:bg-slate-100">
                        <btn.icon className="w-8 h-8" />
                     </div>
                     <span className="text-[13px] font-black tracking-[1.2em] text-slate-500 group-hover:text-black uppercase transition-all text-center leading-relaxed font-serif">{btn.label}</span>
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER MONUMENTAL */}
          <footer className="py-56 border-t border-slate-900 text-center bg-[#080911] px-10 pb-[28rem] md:pb-64">
            <div className="flex flex-col items-center">
               <Scale className="w-24 h-24 text-slate-900 mb-16 drop-shadow-[0_0_80px_rgba(0,0,0,13)]" />
               <div className="flex flex-wrap justify-center gap-x-24 gap-y-20 text-[14px] font-black tracking-[1.5em] uppercase text-slate-800 mb-32 italic">
                  <NextLink href="/comites" className="hover:text-slate-400 transition-all border-b-2 border-transparent hover:border-slate-800 pb-4">Tribunales</NextLink>
                  <NextLink href="/" className="hover:text-white transition-all border-b-2 border-transparent hover:border-slate-800 pb-4">Centro KAMEMUN</NextLink>
               </div>
               <p className="text-[12px] text-slate-900 tracking-[3em] uppercase italic font-black select-none">Veredicto Lara • 2030</p>
            </div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
