"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Info, Users, Gavel, X, FileText, Lock, ShieldCheck,
  Archive, Users2, Scale, Library
} from "lucide-react";

/* ===== LUME SECTION V3 (JUSTICIA AMBARINA) ===== */
function JudicialLume({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0.7 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className={`relative group ${className}`}
    >
      {/* Increased glow for mobile visibility */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-x-32 -inset-y-48 bg-amber-600/15 blur-[120px] pointer-events-none z-0"
      />
      <div className="relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
         {children}
      </div>
    </motion.div>
  );
}

/* ===== VELVET TRIBUNAL LOADER (CORTINA DE SEDA) ===== */
function VelvetLoader({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#050403] overflow-hidden flex items-center justify-center">
      {/* Background Courtroom Silhouette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(180,83,9,0.05)_0%,transparent_80%)] opacity-30" />

      {/* Velvet Curtains (Seda Carmesí Profunda) */}
      <motion.div 
        animate={isOpening ? { x: "-110%", skewX: -5 } : { x: 0, skewX: 0 }} 
        transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }} 
        className="absolute left-0 top-0 w-1/2 h-full bg-[#1c0d0a] z-50 border-r border-amber-900/10 shadow-[20px_0_100px_rgba(0,0,0,1)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-amber-800/10 blur-sm" />
      </motion.div>
      
      <motion.div 
        animate={isOpening ? { x: "110%", skewX: 5 } : { x: 0, skewX: 0 }} 
        transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }} 
        className="absolute right-0 top-0 w-1/2 h-full bg-[#1c0d0a] z-50 border-l border-amber-900/10 shadow-[-20px_0_100px_rgba(0,0,0,1)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-amber-800/10 blur-sm" />
      </motion.div>

      <AnimatePresence>
        {!isOpening && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} 
            className="relative z-[60] flex flex-col items-center px-10 text-center"
          >
            <div className="relative w-40 h-40 mb-14">
               <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-amber-600/10 blur-[40px] rounded-full" />
               <div className="w-full h-full rounded-full border border-amber-900/20 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-2xl">
                  <Scale className="w-16 h-16 text-amber-700/50" />
               </div>
            </div>

            <button 
              onClick={() => { setIsOpening(true); setTimeout(onEnter, 1500); }} 
              className="group relative flex flex-col items-center gap-10"
            >
              <div className="px-12 py-5 border-[2px] border-amber-800/30 bg-[#0a0604] rounded-full group-hover:border-amber-500 transition-all shadow-[0_15px_60px_rgba(0,0,0,0.8)] overflow-hidden relative active:scale-95">
                 <span className="text-[10px] md:text-[12px] font-black tracking-[0.8em] text-amber-100/30 group-hover:text-amber-100 uppercase transition-all whitespace-nowrap">ABRIR SESIÓN JUDICIAL</span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              <p className="text-[9px] font-mono text-amber-900/40 uppercase tracking-[0.4em] italic">"Sub conditione honoris"</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===== TACTICAL TRIBUNAL NAVIGATION (MOBILE LUX) ===== */
function TacticalTribunalNav({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 25 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[150] md:hidden w-[94vw] max-w-sm"
    >
      {/* ORANGE NEON HALO */}
      <div className="absolute inset-0 bg-amber-600/15 blur-[25px] rounded-full -z-10 animate-pulse" />
      
      <div className="bg-zinc-950/95 border border-amber-900/30 backdrop-blur-3xl rounded-full p-2 flex items-center justify-around shadow-[0_0_40px_rgba(180,83,9,0.2)]">
        <button onClick={() => onScrollTo("narrativa")} className="relative flex flex-col items-center gap-1 p-4 text-amber-500/40 hover:text-amber-300 transition-all active:scale-90">
          <FileText className="w-5 h-5" />
          <span className="text-[7.5px] font-black tracking-widest uppercase">ARCHIVO</span>
        </button>
        <div className="w-[1px] h-8 bg-amber-900/20" />
        <button onClick={() => onScrollTo("roles")} className="relative flex flex-col items-center gap-1 p-4 text-amber-500/40 hover:text-amber-300 transition-all active:scale-90">
          <Gavel className="w-5 h-5" />
          <span className="text-[7.5px] font-black tracking-widest uppercase">SENTENCIA</span>
        </button>
        <div className="w-[1px] h-8 bg-amber-900/20" />
        <button onClick={() => onScrollTo("recursos")} className="relative flex flex-col items-center gap-1 p-4 text-amber-500/40 hover:text-amber-300 transition-all active:scale-90">
          <Library className="w-5 h-5" />
          <span className="text-[7.5px] font-black tracking-widest uppercase">LEYES</span>
        </button>
      </div>
    </motion.div>
  );
}

/* ===== THE LEGAL TRINITY TITLE V2 ===== */
function LegalTrinityTitle() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none font-black tracking-tight leading-[0.7] text-white">
       <motion.div 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
         className="text-[12vw] md:text-[5rem] mb-2 text-white/30 drop-shadow-lg"
       >
         EL
       </motion.span>
       <motion.div 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
         className="text-[18vw] md:text-[8rem] mb-3 text-white drop-shadow-[0_0_30px_rgba(180,83,9,0.2)]"
       >
         JUICIO DEL
       </motion.div>
       <motion.div 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
         className="text-[22vw] md:text-[11rem] drop-shadow-[0_15px_50px_rgba(0,0,0,1)] text-amber-600 italic font-black"
       >
         PADRINO
       </motion.div>

       {/* AMBIENT LIGHTING CENTER */}
       <div className="absolute inset-0 bg-amber-600/5 blur-[100px] -z-10 animate-pulse" />
    </div>
  );
}

/* ===== SOON OVERLAY V2 ===== */
function ResourceOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center p-8 bg-black/95 backdrop-blur-3xl">
          <motion.div initial={{ scale: 0.9, y: 10 }} animate={{ scale: 1, y: 0 }} className="relative max-w-sm w-full p-12 bg-[#0c0a09] border border-amber-900/30 rounded-[3rem] text-center shadow-2xl">
             <button onClick={onClose} className="absolute top-10 right-10 text-white/20 font-sans text-[10px] hover:text-white transition-colors">X_DISMISS</button>
             <div className="w-16 h-16 rounded-3xl border border-amber-900/20 flex items-center justify-center mx-auto mb-10 bg-black shadow-inner"><Lock className="w-7 h-7 text-amber-900/40" /></div>
             <h3 className="text-3xl font-serif text-white mb-6 uppercase italic font-black tracking-tighter">SENTENCIA SELLADA</h3>
             <p className="text-white/30 text-[13px] leading-relaxed mb-10 font-sans italic">Este documento secreto judicial se revelará tras la apertura oficial de la sesión.</p>
             <button onClick={onClose} className="w-full py-5 bg-amber-950/20 border border-amber-900/40 text-amber-600 text-[11px] font-black tracking-[0.5em] rounded-2xl hover:bg-amber-600 hover:text-white transition-all">ENTENDIDO</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PadrinoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  
  const scrollTo = (id: string) => {
     const el = document.getElementById(id);
     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-amber-900 selection:text-white font-serif overflow-x-hidden">
      
      {/* GLOBAL MOOD LIGHTING (KILLS DARKNESS) */}
      <div className="fixed inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle_at_50%_40%,rgba(180,83,9,0.07)_0%,transparent_75%)] opacity-60 md:opacity-40" />
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] grayscale mix-blend-overlay" />

      <AnimatePresence>
        {isLoading && <VelvetLoader key="loader" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <ResourceOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
      
      {!isLoading && <TacticalTribunalNav onScrollTo={scrollTo} />}

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          
          <nav className="fixed top-0 w-full z-[120] p-8 md:p-10 pointer-events-none">
            <NextLink href="/comites" className="pointer-events-auto inline-flex items-center gap-5 py-4 px-8 bg-black/90 border border-amber-900/20 rounded-full shadow-2xl group transition-all hover:bg-zinc-950 hover:border-amber-600/40">
              <ArrowLeft className="w-5 h-5 text-amber-600 group-hover:-translate-x-1 transition-all" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40 group-hover:text-white transition-all">VOLVER</span>
            </NextLink>
          </nav>

          {/* HERO - JUSTICIA TRIBUNAL */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-8">
             <div className="absolute inset-0 z-0">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.55] saturate-[0.6] contrast-[1.1] md:brightness-[0.45]">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/80" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#050403_100%)]" />
             </div>

             <motion.div style={{ y: titleY, opacity: heroOpacity }} className="relative z-10 text-center pt-20">
                <div className="mb-10 inline-flex px-8 py-2.5 border border-amber-900/30 bg-[#0a0807]/60 backdrop-blur-md rounded-full shadow-2xl">
                   <p className="text-amber-600 font-mono text-[9px] md:text-[11px] tracking-[1.2em] uppercase font-black">EXPEDIENTE.JUDICIAL.02</p>
                </div>
                <LegalTrinityTitle />
                <p className="mt-16 text-xl md:text-3xl font-light italic text-amber-100/10 font-serif max-w-2xl mx-auto drop-shadow-2xl">"En este tribunal, el silencio es cómplice y la evidencia es destino."</p>
                <motion.div animate={{ opacity: [0.1, 0.3, 0.1], y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mt-16 text-amber-500/10 flex flex-col items-center">
                   <ChevronDown className="w-8 h-8" />
                </motion.div>
             </motion.div>
          </section>

          {/* CONTEXTO LEGAL */}
          <section id="narrativa" className="relative py-40 md:py-64 px-8 bg-[#050403]">
             <div className="max-w-4xl mx-auto space-y-48 md:space-y-64 relative z-10">
                <JudicialLume>
                   <h2 className="text-[14vw] md:text-[9rem] font-black text-white leading-[0.85] tracking-tighter mb-12 uppercase drop-shadow-2xl">
                      Juicio de <br /><span className="text-amber-700 italic underline decoration-amber-900/30 underline-offset-8">Instancia.</span>
                   </h2>
                   <p className="text-xl md:text-3xl font-light text-white/40 leading-relaxed md:leading-[1.8] text-justify md:text-left border-l-[3px] border-amber-900/40 pl-8 md:pl-24 select-none">
                      Tras décadas de operar desde las sombras, la estructura de la mafia calabresa enfrenta su golpe más devastador. La captura del Padrino ha puesto en marcha un proceso judicial sin precedentes, donde cada prueba es un clavo en el ataúd de la OMERTA.
                   </p>
                </JudicialLume>

                <div className="flex flex-col items-center justify-center text-center py-32 border-y-2 border-amber-950/20 bg-amber-950/[0.04] rounded-[4rem] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.06)_0%,transparent_70%)] animate-pulse" />
                   <h3 className="text-[18vw] md:text-[12rem] font-black text-white tracking-widest leading-none mb-10 italic select-none opacity-80 mix-blend-overlay">JUSTICIA <br/>SUPREMA</h3>
                   <div className="w-24 h-[1px] bg-amber-800/40 mb-10 shadow-[0_0_15px_rgba(180,83,9,0.3)]" />
                   <p className="text-amber-700 font-mono text-[11px] md:text-[18px] tracking-[1.5em] uppercase px-4 font-black drop-shadow-md">¿LIBERTAD O VEREDICTO?</p>
                </div>
             </div>
          </section>

          {/* ROLES DEL CASO - MOBILE CAROUSEL */}
          <section id="roles" className="py-24 md:py-64 bg-[#030302] border-t border-amber-950/20 overflow-hidden">
             <div className="max-w-[1700px] mx-auto px-8">
                <div className="mb-48 flex flex-col items-center text-center">
                   <h2 className="text-7xl md:text-[9rem] font-serif font-black text-white italic tracking-tighter leading-tight opacity-70 drop-shadow-2xl">Actores de Sala</h2>
                   <p className="mt-8 text-amber-600 font-mono text-[10px] tracking-[2.5em] uppercase opacity-40">Linaje vs Constitución</p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible pb-24 snap-x snap-mandatory scrollbar-hide">
                   {[
                     { n: "Magistrados", r: "PODER JUDICIAL", icon: Library, id: "S-02/MAG", d: "Guardianes de la legalidad y la sentencia definitiva en el corazón de Lara." },
                     { n: "Jurados", r: "VOZ CIVIL", icon: Users2, id: "S-02/JUR", d: "Ciudadanos determinando la culpabilidad tras las sombras del testimonio." },
                     { n: "Defensa", r: "MURO DE HONOR", icon: ShieldAlert, id: "S-02/DEF", d: "Protegiendo el linaje y el debido proceso ante el asedio del Estado." },
                     { n: "Fiscalía", r: "PESO DE LEY", icon: Crosshair, id: "S-02/FIS", d: "Desmantelando el entramado financiero del imperio calabrés con pruebas técnicas." }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        className="group min-w-[88vw] md:min-w-0 snap-center relative flex flex-col p-14 md:p-16 bg-zinc-950/90 border border-amber-900/15 transition-all duration-700 rounded-tr-[5.5rem] overflow-hidden hover:border-amber-600/40"
                     >
                        <div className="absolute top-0 left-0 px-8 py-3 bg-[#0d0b0a] border-b border-amber-950/40 rounded-br-3xl">
                           <div className="w-12 h-1 bg-amber-900/20 rounded-full" />
                        </div>
                        <div className="mb-14 w-16 h-16 rounded-3xl border border-amber-900/20 flex items-center justify-center bg-black group-hover:border-amber-500 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                           <item.icon className="w-8 h-8 text-amber-900 group-hover:text-amber-500 transition-colors" />
                        </div>
                        <h4 className="text-[2.2rem] md:text-5xl font-serif text-white mb-4 uppercase font-black group-hover:text-amber-500 transition-colors">{item.n}</h4>
                        <p className="text-[12px] font-black tracking-[0.6em] text-amber-800 mb-10 pb-6 border-b border-amber-950/20">{item.r}</p>
                        <p className="text-white/30 text-[16px] md:text-[18px] font-light italic leading-relaxed mb-10">{item.d}</p>
                        <div className="mt-auto flex items-center gap-6 text-[10px] font-mono text-amber-800/20 font-black">
                           <span className="flex-1 h-[1px] bg-amber-950/20" />
                           <span className="tracking-[0.8em]">{item.id}</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
                <div className="md:hidden text-center text-amber-900/30 text-[10px] font-black tracking-[1.5em] mt-10 uppercase">Desliza para ver cargos</div>
             </div>
          </section>

          {/* RECURSOS DEL TRIBUNAL */}
          <section id="recursos" className="py-32 px-10 bg-black border-t border-amber-950/10">
             <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { label: "Guía de Juicio", icon: FileText },
                  { label: "Mesa Judicial", icon: Users },
                  { label: "Protocolos", icon: Gavel }
                ].map((btn, i) => (
                  <button key={i} onClick={() => setIsOverlayOpen(true)} className="group flex flex-col items-center justify-center gap-10 p-20 bg-[#080808] border border-white/5 rounded-[4.5rem] hover:border-amber-700/40 hover:bg-zinc-950 transition-all shadow-2xl relative overflow-hidden active:scale-95">
                     <div className="w-16 h-16 rounded-full border border-amber-900/10 flex items-center justify-center text-amber-900 group-hover:text-white transition-all bg-black/50">
                        <btn.icon className="w-7 h-7" />
                     </div>
                     <span className="text-[12px] font-black tracking-[0.7em] text-white/10 group-hover:text-amber-500 uppercase transition-all text-center">{btn.label}</span>
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.04)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER FINAL - JUSTICIA */}
          <footer className="py-40 border-t border-white/5 text-center bg-[#050403] px-10 pb-80">
            <div className="flex flex-col items-center">
               <Scale className="w-16 h-16 text-amber-950/20 mb-14 drop-shadow-2xl" />
               <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 text-[12px] font-black tracking-[1em] uppercase text-white/5 mb-24 italic">
                  <NextLink href="/comites" className="hover:text-amber-700 transition-all">Expedientes</NextLink>
                  <NextLink href="/" className="hover:text-amber-100 transition-all">Sede Central</NextLink>
               </div>
               <p className="text-[10px] text-white/5 tracking-[2em] uppercase italic opacity-20 font-black">Justicia Suprema • Lara 2030</p>
            </div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
