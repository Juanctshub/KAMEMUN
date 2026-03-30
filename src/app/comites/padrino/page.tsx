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
      <motion.div 
        animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-x-32 -inset-y-48 bg-amber-600/20 blur-[130px] pointer-events-none z-0"
      />
      <div className="relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(180,83,9,0.08)_0%,transparent_80%)] opacity-40" />

      {/* Velvet Curtains (Seda Carmesí Profunda) */}
      <motion.div 
        animate={isOpening ? { x: "-110%", skewX: -8 } : { x: 0, skewX: 0 }} 
        transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }} 
        className="absolute left-0 top-0 w-1/2 h-full bg-[#1a0c0a] z-50 border-r-2 border-amber-950/40 shadow-[30px_0_120px_rgba(0,0,0,1)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
      </motion.div>
      
      <motion.div 
        animate={isOpening ? { x: "110%", skewX: 8 } : { x: 0, skewX: 0 }} 
        transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }} 
        className="absolute right-0 top-0 w-1/2 h-full bg-[#1a0c0a] z-50 border-l-2 border-amber-950/40 shadow-[-30px_0_120px_rgba(0,0,0,1)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
      </motion.div>

      <AnimatePresence>
        {!isOpening && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.15, filter: "blur(15px)" }} 
            className="relative z-[60] flex flex-col items-center px-10 text-center"
          >
            <div className="relative w-44 h-44 mb-14 drop-shadow-[0_0_40px_rgba(180,83,9,0.3)]">
               <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-amber-600/10 blur-[50px] rounded-full" />
               <div className="w-full h-full rounded-full border-2 border-amber-900/30 bg-black/60 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
                  <Scale className="w-16 h-16 text-amber-600/50" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,0,0.05)_0%,transparent_70%)]" />
               </div>
            </div>

            <button 
              onClick={() => { setIsOpening(true); setTimeout(onEnter, 1600); }} 
              className="group relative flex flex-col items-center gap-12"
            >
              <div className="px-16 py-6 border-2 border-amber-900/40 bg-zinc-950/90 rounded-full group-hover:border-amber-500 transition-all shadow-[0_20px_80px_rgba(0,0,0,1)] relative overflow-hidden active:scale-95">
                 <span className="text-[11px] md:text-[14px] font-black tracking-[1em] text-white/20 group-hover:text-amber-500 uppercase transition-all whitespace-nowrap">ABRIR TRIBUNAL</span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              <p className="text-[10px] font-mono text-amber-900/30 uppercase tracking-[0.5em] italic font-black">"Fiat iustitia, et pereat mundus"</p>
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
      <div className="absolute inset-0 bg-amber-600/20 blur-[30px] rounded-full -z-10 animate-pulse" />
      <div className="bg-[#0c0b0a]/90 border border-amber-900/40 backdrop-blur-3xl rounded-full p-2.5 flex items-center justify-around shadow-[0_0_60px_rgba(0,0,0,1)] border-t-amber-800/40">
        <button onClick={() => onScrollTo("narrativa")} className="relative flex flex-col items-center gap-1.5 p-4 text-amber-500/30 hover:text-amber-400 transition-all active:scale-90">
          <FileText className="w-5 h-5" />
          <span className="text-[8px] font-black tracking-widest uppercase">ARCHIVO</span>
        </button>
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-amber-900/30 to-transparent" />
        <button onClick={() => onScrollTo("roles")} className="relative flex flex-col items-center gap-1.5 p-4 text-amber-500/30 hover:text-amber-400 transition-all active:scale-90">
          <Gavel className="w-5 h-5" />
          <span className="text-[8px] font-black tracking-widest uppercase">CORTE</span>
        </button>
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-amber-900/30 to-transparent" />
        <button onClick={() => onScrollTo("recursos")} className="relative flex flex-col items-center gap-1.5 p-4 text-amber-500/30 hover:text-amber-400 transition-all active:scale-90">
          <Library className="w-5 h-5" />
          <span className="text-[8px] font-black tracking-widest uppercase">LEYES</span>
        </button>
      </div>
    </motion.div>
  );
}

/* ===== THE LEGAL TRINITY TITLE V3 (FIXED & POLISHED) ===== */
function LegalTrinityTitle() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none font-black tracking-tight leading-[0.7] text-white">
       {/* Ambient glow centered on text */}
       <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-amber-600/10 blur-[120px] -z-10 animate-pulse" />

       <motion.div 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
         className="text-[13vw] md:text-[5.5rem] mb-4 text-white/20 drop-shadow-lg"
       >
         EL
       </motion.div>
       <motion.div 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
         className="text-[19vw] md:text-[8.5rem] mb-5 text-white drop-shadow-[0_0_40px_rgba(180,83,9,0.3)] font-serif"
       >
         JUICIO DEL
       </motion.div>
       <motion.div 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
         className="text-[25vw] md:text-[12.5rem] drop-shadow-[0_25px_70px_rgba(0,0,0,1)] text-amber-600 italic font-black"
       >
         PADRINO
       </motion.div>

       {/* Glitch Overlay for texture */}
       <div className="absolute inset-0 -z-20 blur-[10px] opacity-10 pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 text-amber-950 translate-y-6">PADRINO</div>
       </div>
    </div>
  );
}

/* ===== SOON OVERLAY V3 ===== */
function ResourceOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2100] flex items-center justify-center p-8 bg-black/98 backdrop-blur-3xl">
          <motion.div initial={{ scale: 0.9, y: 15 }} animate={{ scale: 1, y: 0 }} className="relative max-w-sm w-full p-14 bg-zinc-950 border border-amber-900/30 rounded-[4rem] text-center shadow-[0_0_100px_rgba(0,0,0,1)]">
             <button onClick={onClose} className="absolute top-12 right-12 text-white/20 font-sans text-[10px] hover:text-white transition-colors tracking-widest">X_CLOSE</button>
             <div className="w-20 h-20 rounded-full border border-red-900/20 flex items-center justify-center mx-auto mb-12 shadow-inner bg-black"><Lock className="w-8 h-8 text-red-900/40" /></div>
             <h3 className="text-3xl font-serif text-white mb-6 uppercase italic font-black tracking-tighter">ACCESO DENEGADO</h3>
             <p className="text-white/30 text-[14px] leading-relaxed mb-12 font-sans italic">El tribunal aún no ha liberado este acta judicial. Omertá legal vigente.</p>
             <button onClick={onClose} className="w-full py-6 bg-amber-950/20 border border-amber-900/40 text-amber-600 text-[11px] font-black tracking-[0.6em] rounded-3xl hover:bg-amber-600 hover:text-white transition-all shadow-xl">RETROCEDER</button>
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
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-900 selection:text-white font-serif overflow-x-hidden">
      
      {/* GLOBAL AMBIENT LIGHTING (ANTI-DARKNESS MOBILE) */}
      <div className="fixed inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle_at_50%_40%,rgba(180,83,9,0.08)_0%,transparent_75%)] opacity-60" />
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] grayscale mix-blend-screen" />

      <AnimatePresence>
        {isLoading && <VelvetLoader key="loader" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <ResourceOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
      
      {!isLoading && <TacticalTribunalNav onScrollTo={scrollTo} />}

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          
          <nav className="fixed top-0 w-full z-[120] p-8 md:p-12 pointer-events-none">
            <NextLink href="/comites" className="pointer-events-auto inline-flex items-center gap-5 py-4 px-10 bg-black/80 border border-amber-900/20 rounded-full shadow-2xl group transition-all hover:bg-zinc-950 hover:border-amber-600/40">
              <ArrowLeft className="w-5 h-5 text-amber-600 group-hover:-translate-x-2 transition-all" />
              <span className="text-[11px] font-black tracking-[0.5em] uppercase text-white/40 group-hover:text-white transition-all">SALIR</span>
            </NextLink>
          </nav>

          {/* HERO - JUSTICIA TRIBUNAL */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-8">
             <div className="absolute inset-0 z-0">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.6] saturate-[0.6] contrast-[1.1] md:brightness-[0.45]">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/90" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#050403_100%)]" />
             </div>

             <motion.div style={{ y: titleY, opacity: heroOpacity }} className="relative z-10 text-center pt-24">
                <div className="mb-12 inline-flex px-10 py-3 border border-amber-900/30 bg-black/60 backdrop-blur-xl rounded-full shadow-[0_10px_40px_rgba(0,0,0,1)]">
                   <p className="text-amber-600 font-mono text-[10px] md:text-[13px] tracking-[1.5em] uppercase font-black">CASO.CALABRIA.2030</p>
                </div>
                <LegalTrinityTitle />
                <p className="mt-20 text-2xl md:text-5xl font-light italic text-amber-100/10 font-serif max-w-3xl mx-auto drop-shadow-2xl select-none">"La balanza no perdona, el linaje no salva."</p>
                <motion.div animate={{ opacity: [0.1, 0.4, 0.1], y: [0, 15, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mt-20 text-amber-500/10 flex flex-col items-center">
                   <ChevronDown className="w-10 h-10" />
                </motion.div>
             </motion.div>
          </section>

          {/* CONTEXTO LEGAL */}
          <section id="narrativa" className="relative py-40 md:py-64 px-10 bg-[#050403]">
             <div className="max-w-4xl mx-auto space-y-48 md:space-y-64 relative z-10">
                <JudicialLume>
                   <span className="text-amber-900 font-mono text-[10px] tracking-[0.85em] mb-12 block font-black border-l-4 border-amber-800/40 pl-8 uppercase">Acta de Instrucción Judicial</span>
                   <h2 className="text-[14vw] md:text-[9.5rem] font-black text-white leading-[0.85] tracking-tighter mb-14 uppercase drop-shadow-2xl">
                      El Colapso <br /><span className="text-amber-800 italic underline decoration-amber-900/30 underline-offset-8">Final.</span>
                   </h2>
                   <p className="text-2xl md:text-3.5xl font-light text-white/40 leading-relaxed md:leading-[1.9] text-justify md:text-left border-l-[3px] border-amber-900/40 pl-10 md:pl-28 select-none">
                      Tras décadas de operar desde las sombras, la estructura de la mafia calabresa enfrente su golpe más devastador. La captura del Padrino ha puesto en marcha un proceso judicial sin precedentes, donde cada prueba desmantela un imperio built on OMERTA.
                   </p>
                </JudicialLume>

                <div className="flex flex-col items-center justify-center text-center py-40 border-y-2 border-amber-950/20 bg-amber-900/[0.03] rounded-[5rem] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.08)_0%,transparent_70%)] animate-pulse" />
                   <h3 className="text-[19vw] md:text-[14rem] font-black text-white tracking-widest leading-none mb-12 italic select-none opacity-90 drop-shadow-2xl">VEREDICTO <br/><span className="text-amber-950/40 select-none">SUPREMO</span></h3>
                   <div className="w-24 h-[2px] bg-amber-800/40 mb-12 shadow-[0_0_20px_rgba(180,83,9,0.3)]" />
                   <p className="text-amber-700 font-mono text-[12px] md:text-[20px] tracking-[2em] uppercase px-4 font-black drop-shadow-md">¿LIBERTAD O CADENA?</p>
                </div>
             </div>
          </section>

          {/* ROLES DE SALA - MOBILE CAROUSEL */}
          <section id="roles" className="py-24 md:py-64 bg-[#030302] border-t border-amber-950/20 overflow-hidden">
             <div className="max-w-[1800px] mx-auto px-10">
                <div className="mb-48 flex flex-col items-center text-center">
                   <h2 className="text-8xl md:text-[11rem] font-serif font-black text-white italic tracking-tighter leading-tight opacity-75 drop-shadow-2xl">Actores de Corte</h2>
                   <p className="mt-10 text-amber-600 font-mono text-[11px] tracking-[2.5em] uppercase opacity-40 italic">Orden del día: Sentencia</p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 overflow-x-auto md:overflow-visible pb-28 snap-x snap-mandatory scrollbar-hide">
                   {[
                     { n: "Magistrados", r: "TRINIDAD LEGAL", icon: Library, id: "SENT/01", d: "Guardianes de la legalidad y la sentencia definitiva del Padrino." },
                     { n: "Jurados", r: "JUICIO CIVIL", icon: Users2, id: "SENT/02", d: "Ciudadanos determinando la suerte del imperio tras el velo del testimonio." },
                     { n: "Defensa", r: "MURO DE SEDA", icon: ShieldAlert, id: "SENT/03", d: "Protegiendo el linaje y el debido proceso ante el asedio del Estado." },
                     { n: "Fiscalía", r: "PESO DE LEY", icon: Crosshair, id: "SENT/04", d: "Desmantelando el entramado financiero del Padrino con evidencia técnica." }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        className="group min-w-[90vw] md:min-w-0 snap-center relative flex flex-col p-16 md:p-20 bg-zinc-950/95 border border-amber-900/20 transition-all duration-700 rounded-tr-[5.5rem] overflow-hidden hover:border-amber-600/40 shadow-2xl"
                     >
                        <div className="absolute top-0 left-0 px-10 py-5 bg-[#0e0c0b] border-b border-amber-950/40 rounded-br-[3rem]">
                           <div className="w-14 h-1.5 bg-amber-900/30 rounded-full" />
                        </div>
                        <div className="mb-14 w-20 h-20 rounded-3xl border border-amber-900/20 flex items-center justify-center bg-black group-hover:border-amber-500 transition-all shadow-[0_15px_60px_rgba(0,0,0,1)] relative overflow-hidden">
                           <item.icon className="w-9 h-9 text-amber-900 group-hover:text-amber-500 transition-colors z-10" />
                           <div className="absolute inset-0 bg-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h4 className="text-[2.5rem] md:text-6xl font-serif text-white mb-6 uppercase font-black group-hover:text-amber-500 transition-colors">{item.n}</h4>
                        <p className="text-[13px] font-black tracking-[0.7em] text-amber-800 mb-12 pb-8 border-b border-amber-950/10">{item.r}</p>
                        <p className="text-white/30 text-[18px] md:text-[20px] font-light italic leading-relaxed mb-12">{item.d}</p>
                        <div className="mt-auto flex items-center gap-8 text-[11px] font-mono text-amber-800/15 font-black">
                           <span className="flex-1 h-[1px] bg-amber-950/20" />
                           <span className="tracking-[1em]">{item.id}</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
                <div className="md:hidden text-center text-amber-900/20 text-[11px] font-black tracking-[1.5em] mt-12 uppercase">Desliza para ver cargos</div>
             </div>
          </section>

          {/* RECURSOS - BOTONES TÁCTICOS */}
          <section id="recursos" className="py-40 px-10 bg-black border-t border-amber-950/10">
             <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { label: "Guía de Juicio", icon: FileText },
                  { label: "Mesa Suprema", icon: Users },
                  { label: "Reglamento", icon: Gavel }
                ].map((btn, i) => (
                  <button key={i} onClick={() => setIsOverlayOpen(true)} className="group flex flex-col items-center justify-center gap-12 p-20 bg-[#080808] border border-white/5 rounded-[4.5rem] hover:border-amber-700/40 hover:bg-zinc-950 transition-all shadow-[0_30px_100px_rgba(0,0,0,1)] relative overflow-hidden active:scale-95">
                     <div className="w-16 h-16 rounded-full border border-amber-900/10 flex items-center justify-center text-amber-900 group-hover:text-white transition-all bg-black/50 shadow-inner">
                        <btn.icon className="w-7 h-7" />
                     </div>
                     <span className="text-[12px] font-black tracking-[0.8em] text-white/10 group-hover:text-amber-500 uppercase transition-all text-center px-4 leading-relaxed">{btn.label}</span>
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.06)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER TRIUMPHAL */}
          <footer className="py-48 border-t border-white/5 text-center bg-[#050403] px-10 pb-96">
            <div className="flex flex-col items-center">
               <Scale className="w-20 h-20 text-amber-950/20 mb-16 drop-shadow-[0_0_50px_rgba(0,0,0,1)]" />
               <div className="flex flex-wrap justify-center gap-x-20 gap-y-16 text-[13px] font-black tracking-[1.2em] uppercase text-white/5 mb-32 italic">
                  <NextLink href="/comites" className="hover:text-amber-800 transition-all">Expedientes</NextLink>
                  <NextLink href="/" className="hover:text-amber-100 transition-all">Sede Central</NextLink>
               </div>
               <p className="text-[11px] text-white/5 tracking-[2.5em] uppercase italic opacity-20 font-black">Justicia Suprema • Lara 2030</p>
            </div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
