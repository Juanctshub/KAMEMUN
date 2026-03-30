"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Info, Users, Gavel, X, FileText, Lock, ShieldCheck,
  Archive, Users2, Scale, Balance
} from "lucide-react";

/* ===== TRIBUNAL LUME SECTION (ILUMINACIÓN DE ESTUDIO LEGAL) ===== */
function TribunalLume({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0.7 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      className={`relative group ${className}`}
    >
      <motion.div 
        animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-x-32 -inset-y-60 bg-amber-600/10 blur-[150px] pointer-events-none z-0"
      />
      <div className="relative z-10 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
         {children}
      </div>
    </motion.div>
  );
}

/* ===== TACTICAL TRIBUNAL NAVIGATION (MOBILE AURA) ===== */
function TacticalTribunalNav({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[150] md:hidden w-[92vw] max-w-sm"
    >
      <div className="absolute inset-0 bg-amber-700/15 blur-[30px] rounded-full -z-10 animate-pulse" />
      
      <div className="bg-zinc-950/95 border-2 border-amber-900/30 backdrop-blur-3xl rounded-full p-2 flex items-center justify-around shadow-[0_0_50px_rgba(0,0,0,1)] relative overflow-hidden">
        <button onClick={() => onScrollTo("expediente")} className="relative flex flex-col items-center gap-1.5 p-4 text-amber-500/40 hover:text-amber-400 transition-all active:scale-95">
          <FileText className="w-6 h-6" />
          <span className="text-[7px] font-black tracking-widest uppercase">EXPEDIENTE</span>
        </button>
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-amber-800/20 to-transparent" />
        <button onClick={() => onScrollTo("partes")} className="relative flex flex-col items-center gap-1.5 p-4 text-amber-500/40 hover:text-amber-400 transition-all active:scale-95">
          <Gavel className="w-6 h-6" />
          <span className="text-[7px] font-black tracking-widest uppercase">SENTENCIA</span>
        </button>
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-amber-800/20 to-transparent" />
        <button onClick={() => onScrollTo("leyes")} className="relative flex flex-col items-center gap-1.5 p-4 text-amber-500/40 hover:text-amber-400 transition-all active:scale-95">
          <Scale className="w-6 h-6" />
          <span className="text-[7px] font-black tracking-widest uppercase">REGLAMENTO</span>
        </button>
      </div>
    </motion.div>
  );
}

/* ===== THE LEGAL TRINITY TITLE ===== */
function LegalTrinityTitle() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none font-black tracking-tight leading-[0.7] text-white">
       <motion.div 
         initial={{ x: "-100%", opacity: 0 }}
         animate={{ x: "100%", opacity: [0, 1.2, 0] }}
         transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
         className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent skew-x-12 z-20 pointer-events-none"
       />

       <motion.span 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
         className="text-[12vw] md:text-[5rem] mb-2 text-white/40 drop-shadow-lg"
       >
         EL
       </motion.span>
       <motion.span 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
         className="text-[18vw] md:text-[8rem] mb-2 text-white drop-shadow-[0_0_30px_rgba(180,83,9,0.2)]"
       >
         JUICIO DEL
       </motion.span>
       <motion.span 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
         className="text-[22vw] md:text-[11rem] drop-shadow-[0_15px_50px_rgba(0,0,0,1)] text-amber-600 italic"
       >
         PADRINO
       </motion.span>

       <div className="absolute inset-0 -z-10 blur-[15px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 text-amber-900 translate-x-2">JUICIO</div>
          <div className="absolute inset-x-0 bottom-0 text-amber-950 translate-y-3">PADRINO</div>
       </div>
    </div>
  );
}

/* ===== TRIBUNAL LOADER (BRONCE & MARMOL) ===== */
function TribunalLoader({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#050403] overflow-hidden flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.08)_0%,transparent_100%)] opacity-40" />

      {/* Justice Gates */}
      <motion.div animate={isOpening ? { x: "-100%" } : { x: 0 }} transition={{ duration: 1.5, ease: [0.8, 0, 0.1, 1] }} className="absolute left-0 top-0 w-1/2 h-full bg-[#0d0a08] border-r-4 border-amber-900/30 z-20 shadow-[50px_0_150px_rgba(0,0,0,1)]">
        <div className="absolute inset-x-10 inset-y-20 border-[1px] border-amber-900/10 rounded-lg pointer-events-none" />
      </motion.div>
      <motion.div animate={isOpening ? { x: "100%" } : { x: 0 }} transition={{ duration: 1.5, ease: [0.8, 0, 0.1, 1] }} className="absolute right-0 top-0 w-1/2 h-full bg-[#0d0a08] border-l-4 border-amber-900/30 z-20 shadow-[-50px_0_150px_rgba(0,0,0,1)]">
        <div className="absolute inset-x-10 inset-y-20 border-[1px] border-amber-900/10 rounded-lg pointer-events-none" />
      </motion.div>

      <AnimatePresence>
        {!isOpening && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="relative z-30 flex flex-col items-center">
            <div className="relative w-48 h-48 mb-16 rounded-full border-2 border-amber-900/20 bg-black/60 flex items-center justify-center shadow-[0_0_80px_rgba(0,0,0,1)]">
               <Scale className="w-20 h-20 text-amber-600/20 drop-shadow-[0_0_20px_rgba(180,83,9,0.2)]" />
               <motion.div animate={{ rotate: 360, opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-2 border-[1px] border-dashed border-amber-800/10 rounded-full" />
            </div>
            <button onClick={() => { setIsOpening(true); setTimeout(onEnter, 1200); }} className="group flex flex-col items-center gap-10">
              <div className="w-28 h-28 rounded-full border-[3px] border-amber-800/40 flex items-center justify-center bg-amber-950/5 group-hover:border-amber-500 transition-all shadow-2xl relative">
                 <Gavel className="w-12 h-12 text-amber-700/60 group-hover:text-amber-500 transition-all" />
                 <div className="absolute inset-0 bg-amber-600/5 group-hover:bg-amber-600/15 transition-colors rounded-full" />
              </div>
              <span className="text-[11px] font-black tracking-[1em] text-white/20 uppercase group-hover:text-white transition-all">INICIAR SESIÓN</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===== OMERTÁ JUDICIAL OVERLAY ===== */
function OmertaOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center p-8 bg-black/98 backdrop-blur-3xl">
          <motion.div initial={{ scale: 0.9, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="relative max-w-sm w-full p-12 bg-zinc-950 border border-amber-900/30 rounded-[3.5rem] text-center shadow-2xl">
             <button onClick={onClose} className="absolute top-10 right-10 text-white/30 font-sans text-xs hover:text-white transition-colors">X_EXIT</button>
             <div className="w-16 h-16 rounded-full border border-amber-900/20 flex items-center justify-center mx-auto mb-10"><Lock className="w-7 h-7 text-amber-700/30" /></div>
             <h3 className="text-3xl font-serif text-white mb-6 uppercase italic font-black tracking-tighter">SENTENCIA SELLADA</h3>
             <p className="text-white/40 text-[14px] leading-relaxed mb-10 font-sans italic">El acceso a estos documentos legales está restringido por la Corte Suprema de KAMEMUN.</p>
             <button onClick={onClose} className="w-full py-5 bg-amber-950/20 border border-amber-900/50 text-amber-600 text-[11px] font-black tracking-[0.6em] rounded-3xl hover:bg-amber-600 hover:text-white transition-all">ACEPTAR</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PadrinoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOmertaOpen, setIsOmertaOpen] = useState(false);
  
  const scrollTo = (id: string) => {
     const el = document.getElementById(id);
     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#060403] text-[#f4ece4] selection:bg-amber-900 selection:text-white font-serif overflow-x-hidden">
      
      {/* AMBIENT COURTROOM LIGHTING */}
      <div className="fixed inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle_at_50%_30%,rgba(180,83,9,0.06)_0%,transparent_80%)] opacity-50" />
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.035] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] mix-blend-overlay" />

      <AnimatePresence>
        {isLoading && <TribunalLoader key="loader" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <OmertaOverlay isOpen={isOmertaOpen} onClose={() => setIsOmertaOpen(false)} />
      
      {!isLoading && <TacticalTribunalNav onScrollTo={scrollTo} />}

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          
          <nav className="fixed top-0 w-full z-[120] p-10 pointer-events-none">
            <NextLink href="/comites" className="pointer-events-auto inline-flex items-center gap-5 py-4 px-10 bg-black/80 border border-amber-900/10 rounded-full shadow-2xl group transition-all hover:bg-zinc-950 hover:border-amber-600/30">
              <ArrowLeft className="w-5 h-5 text-amber-600 group-hover:-translate-x-1.5 transition-all" />
              <span className="text-[11px] font-black tracking-[0.5em] uppercase text-white/40 group-hover:text-white transition-all">RETROCEDER</span>
            </NextLink>
          </nav>

          {/* HERO - JUSTICIA SUPREMA */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-10">
             <div className="absolute inset-0 z-0">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.5] saturate-[0.5] contrast-[1.1] md:brightness-[0.4]">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#060403] via-transparent to-[#060403]/80" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#060403_100%)]" />
             </div>

             <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 text-center pt-24">
                <div className="mb-10 inline-flex px-6 py-2 border border-amber-900/20 bg-black/40 rounded-full animate-pulse">
                   <p className="text-amber-500 font-mono text-[9px] tracking-[1em] uppercase">CASO.CALABRIA.2030</p>
                </div>
                <LegalTrinityTitle />
                <p className="mt-16 text-2xl md:text-4xl font-light italic text-amber-100/10 select-none drop-shadow-2xl font-serif">"La ley es una vara de medir, la justicia un pacto de honor."</p>
                <motion.div animate={{ opacity: [0.1, 0.4, 0.1], y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mt-20 text-amber-500/20 hidden md:flex flex-col items-center">
                   <ChevronDown className="w-8 h-8" />
                </motion.div>
             </motion.div>
          </section>

          {/* NARRATIVA LEGAL */}
          <section id="expediente" className="relative py-40 md:py-64 px-10 bg-[#060403]">
             <div className="max-w-4xl mx-auto space-y-48 md:space-y-64 relative z-10">
                <TribunalLume>
                   <span className="text-amber-900 font-mono text-[9px] tracking-[0.8em] mb-10 block font-black border-l-4 border-amber-800/40 pl-6 uppercase">Dictamen de Instrucción</span>
                   <h2 className="text-[14vw] md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12 uppercase drop-shadow-2xl">
                      El Golpe <br /><span className="text-amber-700 italic underline decoration-amber-900/30 underline-offset-8">Devastador.</span>
                   </h2>
                   <p className="text-xl md:text-3xl font-light text-white/50 leading-relaxed md:leading-[1.8] text-justify md:text-left border-l-2 border-amber-900/30 pl-10 md:pl-24 select-none">
                      Tras décadas de operar desde las sombras, la estructura de la mafia calabresa enfrenta su caída. La captura del “Padrino” ha puesto en marcha un proceso judicial sin precedentes, desvelando una red de evasión fiscal y empresas fantasma que mantenía bajo asedio la economía regional.
                   </p>
                </TribunalLume>

                <TribunalLume className="md:text-right">
                   <p className="text-4xl md:text-7xl font-serif italic text-white leading-[1.3] mb-14 drop-shadow-2xl opacity-90 select-none max-w-4xl">"Un juicio de <br /><span className="text-amber-700 underline decoration-amber-900/40">linaje y ley.</span>"</p>
                   <p className="text-xl md:text-2xl text-white/30 leading-relaxed md:ml-auto max-w-2xl text-justify md:text-right font-light">
                      El éxito del proceso depende de la validez de la evidencia técnica y la protección de la cadena de custodia. La justicia debe actuar con firmeza para demostrar que ningún líder criminal está por encima de los tribunales.
                   </p>
                </TribunalLume>

                <div className="flex flex-col items-center justify-center text-center py-32 border-y-2 border-amber-950/20 bg-amber-950/[0.03] rounded-[5rem] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.06)_0%,transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity" />
                   <h3 className="text-[17vw] md:text-[11rem] font-black text-white tracking-widest leading-none mb-14 italic select-none drop-shadow-2xl">VEREDICTO <br/><span className="text-amber-950 mix-blend-screen">FINAL</span></h3>
                   <div className="w-24 h-[3px] bg-amber-800/30 mb-12" />
                   <p className="text-amber-700 font-mono text-[11px] md:text-[18px] tracking-[2em] uppercase px-4 leading-relaxed font-black drop-shadow-md">¿LIBERTAD O CADENA PERPETUA?</p>
                </div>
             </div>
          </section>

          {/* PARTES DEL JUICIO - CAROUSEL SNAP */}
          <section id="partes" className="py-24 md:py-64 bg-[#030302] border-t border-amber-950/20 overflow-hidden">
             <div className="max-w-[1700px] mx-auto px-10">
                <div className="mb-48 flex flex-col items-center text-center">
                   <h2 className="text-7xl md:text-[10rem] font-serif font-black text-white italic tracking-tighter leading-tight opacity-80 drop-shadow-2xl">La Corte Sesiona</h2>
                   <p className="mt-10 text-amber-600 font-mono text-[11px] tracking-[2.5em] uppercase opacity-30">Actores del Proceso</p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 overflow-x-auto md:overflow-visible pb-24 snap-x snap-mandatory scrollbar-hide">
                   {[
                     { n: "Magistrados", r: "CORTE SUPREMA", icon: Balance, id: "SENTENCIA/01", d: "Guardianes de la legalidad y la sentencia definitiva." },
                     { n: "Jurados", r: "VOZ CIUDADANA", icon: Users2, id: "VEREDICTO/02", d: "Determinando la culpabilidad tras los testimonios." },
                     { n: "Defensa", r: "MURO LEGAL", icon: ShieldAlert, id: "HONOR/03", d: "Protegiendo los derechos del acusado bajo el rigor del proceso." },
                     { n: "Fiscalía", r: "CARGA DE PRUEBA", icon: Crosshair, id: "LEY/04", d: "Desmantelando el entramado financiero del imperio." }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        className="group min-w-[90vw] md:min-w-0 snap-center relative flex flex-col p-14 md:p-16 bg-zinc-950/80 border border-amber-900/10 transition-all duration-700 rounded-tr-[5rem] overflow-hidden hover:border-amber-600/40"
                     >
                        <div className="absolute top-0 left-0 h-10 w-32 bg-[#0c0a09] border-t-2 border-r-2 border-amber-950/30 -mt-2 rounded-t-2xl flex items-center justify-center">
                           <div className="w-20 h-2 bg-black/40 rounded-full" />
                        </div>
                        <div className="mb-14 w-16 h-16 rounded-3xl border border-amber-900/30 flex items-center justify-center bg-black group-hover:border-amber-500 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                           <item.icon className="w-8 h-8 text-amber-900" />
                        </div>
                        <h4 className="text-[2.2rem] md:text-5xl font-serif text-white mb-4 uppercase font-black group-hover:text-amber-500 transition-colors">{item.n}</h4>
                        <p className="text-[12px] font-black tracking-[0.5em] text-amber-800 mb-10 pb-6 border-b border-amber-950/10">{item.r}</p>
                        <p className="text-white/30 text-base font-light italic leading-relaxed mb-10">{item.d}</p>
                        <div className="mt-auto flex items-center gap-6 text-[10px] font-mono text-amber-800/40 font-black">
                           <span className="flex-1 h-[1px] bg-amber-950/10" />
                           <span className="tracking-[0.5em]">{item.id}</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
                <div className="md:hidden text-center text-amber-900/30 text-[11px] font-black tracking-[2em] mt-10 uppercase">Desliza para explorar roles</div>
             </div>
          </section>

          {/* BOTONES RECURSOS LEGALES */}
          <section id="leyes" className="py-28 px-10 bg-black border-t border-amber-950/10">
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { label: "Guía de Juicio", icon: Info },
                  { label: "Corte y Mesa", icon: Users },
                  { label: "Reglamento de Sala", icon: Gavel }
                ].map((btn, i) => (
                  <button key={i} onClick={() => setIsOmertaOpen(true)} className="group flex flex-col items-center justify-center gap-8 p-16 bg-[#080808] border border-white/5 rounded-[4rem] hover:border-amber-700/40 hover:bg-black transition-all shadow-2xl relative overflow-hidden">
                     <div className="w-14 h-14 rounded-full border border-amber-900/10 flex items-center justify-center text-amber-900 group-hover:text-white transition-all shadow-inner">
                        <btn.icon className="w-6 h-6" />
                     </div>
                     <span className="text-[12px] font-black tracking-[0.6em] text-white/10 group-hover:text-white uppercase transition-all px-6 text-center">{btn.label}</span>
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.03)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER - TRIBUNAL */}
          <footer className="py-40 border-t border-white/5 text-center bg-[#050403] px-10 pb-72">
            <div className="flex flex-col items-center">
               <Balance className="w-14 h-14 text-amber-950/20 mb-14 drop-shadow-[0_0_30px_rgba(0,0,0,1)]" />
               <div className="flex flex-wrap justify-center gap-x-14 gap-y-10 text-[12px] font-black tracking-[0.7em] uppercase text-white/5 mb-20">
                  <NextLink href="/comites" className="hover:text-amber-800 transition-all border-b border-white/5 pb-2">Selección de Casos</NextLink>
                  <NextLink href="/" className="hover:text-amber-100 transition-all border-b border-white/5 pb-2">Hogar KAMEMUN</NextLink>
               </div>
               <p className="text-[10px] text-white/5 tracking-[1.5em] uppercase italic opacity-30">Justicia Suprema • Lara 2030</p>
            </div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
