"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Info, Users, Gavel, X, FileText, Lock, ShieldCheck,
  Archive, Users2, Scale
} from "lucide-react";

/* ===== MOBILE TACTICAL NAVIGATION ===== */
function MobileTacticalNav({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] md:hidden w-[90vw] max-w-sm"
    >
      <div className="bg-black/80 backdrop-blur-3xl border border-amber-900/30 rounded-full p-2 flex items-center justify-around shadow-[0_20px_50px_rgba(0,0,0,1)]">
        <button onClick={() => onScrollTo("narrativa")} className="flex flex-col items-center gap-1 p-3 text-amber-500/40 hover:text-amber-500 transition-colors">
          <Archive className="w-5 h-5" />
          <span className="text-[7px] font-black tracking-widest uppercase">ARCHIVO</span>
        </button>
        <div className="w-px h-8 bg-amber-900/20" />
        <button onClick={() => onScrollTo("clanes")} className="flex flex-col items-center gap-1 p-3 text-amber-500/40 hover:text-amber-500 transition-colors">
          <Users2 className="w-5 h-5" />
          <span className="text-[7px] font-black tracking-widest uppercase">CLANES</span>
        </button>
        <div className="w-px h-8 bg-amber-900/20" />
        <button onClick={() => onScrollTo("recursos")} className="flex flex-col items-center gap-1 p-3 text-amber-500/40 hover:text-amber-500 transition-colors">
          <Scale className="w-5 h-5" />
          <span className="text-[7px] font-black tracking-widest uppercase">LEYES</span>
        </button>
      </div>
    </motion.div>
  );
}

/* ===== CASE FILE WRAPPER (MOBILE ONLY PAPER EFFECT) ===== */
function CaseFile({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="relative group p-8 md:p-0 bg-transparent">
       {/* Mobile-Only Paper Texture Context */}
       <div className="absolute inset-x-0 inset-y-4 bg-[#0e0c0b] border border-amber-900/10 md:hidden rounded-2xl shadow-2xl opacity-40" />
       <div className="relative z-10 md:bg-transparent">
          <div className="md:hidden mb-6 flex items-center gap-3">
             <div className="w-8 h-[2px] bg-red-800" />
             <span className="text-red-700 font-mono text-[8px] font-black tracking-[0.3em] uppercase">{title}</span>
          </div>
          {children}
       </div>
    </div>
  );
}

/* ===== PALAZZO LOADER V4 (REDENCIÓN) ===== */
function PalazzoLoader({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#050403] overflow-hidden flex items-center justify-center">
      {/* Dynamic Keyhole Glow on Mobile */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} 
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[80vw] h-[80vw] bg-amber-500/5 blur-[120px] md:hidden"
      />

      {/* Gates (Nogal) */}
      <motion.div animate={isOpening ? { x: "-100%" } : { x: 0 }} transition={{ duration: 1.5, ease: [0.8, 0, 0.1, 1] }} className="absolute left-0 top-0 w-1/2 h-full bg-[#0a0807] border-r border-amber-950/40 z-20 shadow-[40px_0_120px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-30 mix-blend-overlay" />
      </motion.div>
      <motion.div animate={isOpening ? { x: "100%" } : { x: 0 }} transition={{ duration: 1.5, ease: [0.8, 0, 0.1, 1] }} className="absolute right-0 top-0 w-1/2 h-full bg-[#0a0807] border-l border-amber-950/40 z-20 shadow-[-40px_0_120px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-30 mix-blend-overlay" />
      </motion.div>

      <AnimatePresence>
        {!isOpening && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-30 flex flex-col items-center">
            <div className="relative w-40 h-40 md:w-64 md:h-64 mb-16 rounded-full border border-amber-900/20 bg-black/40 flex items-center justify-center">
               <Skull className="w-16 h-16 md:w-24 md:h-24 text-amber-500/20" />
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border border-dashed border-amber-900/10 rounded-full" />
            </div>
            <button onClick={() => { setIsOpening(true); setTimeout(onEnter, 1200); }} className="group flex flex-col items-center gap-6">
              <div className="w-24 h-24 rounded-full border-2 border-amber-900/40 flex items-center justify-center bg-red-950/5 group-hover:border-red-600 transition-all">
                 <ShieldCheck className="w-10 h-10 text-red-600/50 group-hover:text-red-500" />
              </div>
              <span className="text-[10px] font-black tracking-[1em] text-white/20 uppercase">AUTENTICANDO</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===== SOON OVERLAY ===== */
function SoonOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/98">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} className="relative max-w-sm w-full p-10 bg-[#0c0a09] border border-amber-900/20 rounded-[3rem] text-center shadow-2xl">
             <button onClick={onClose} className="absolute top-8 right-8 text-white/20 font-sans text-xs hover:text-white transition-colors">X</button>
             <div className="w-16 h-16 rounded-full border border-red-950/20 flex items-center justify-center mx-auto mb-10"><Lock className="w-6 h-6 text-red-700/30" /></div>
             <h3 className="text-3xl font-serif text-white mb-6 uppercase italic font-black">ACCESO SELLADO</h3>
             <p className="text-white/40 text-[13px] leading-relaxed mb-10">Este archivo está bajo <span className="text-red-900 font-bold">OMERTA</span>. Visibilidad bloqueada hasta el inicio de sala.</p>
             <button onClick={onClose} className="w-full py-4 bg-red-950/10 border border-red-900/40 text-red-600 text-[10px] font-black tracking-widest rounded-2xl">CONFIRMAR</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NdranghetaPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoonOpen, setIsSoonOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
     const el = document.getElementById(id);
     if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-800 selection:text-white font-serif overflow-x-hidden">
      
      {/* SCANLINES & GRAIN */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] mix-blend-overlay" />

      <AnimatePresence>
        {isLoading && <PalazzoLoader key="gates" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SoonOverlay isOpen={isSoonOpen} onClose={() => setIsSoonOpen(false)} />
      
      {!isLoading && <MobileTacticalNav onScrollTo={scrollTo} />}

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          
          {/* NAV */}
          <nav className="fixed top-0 w-full z-[120] p-8 pointer-events-none">
            <NextLink href="/comites" className="pointer-events-auto inline-flex items-center gap-4 py-3 px-8 bg-black/80 border border-white/5 rounded-full shadow-2xl">
              <ArrowLeft className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">REGRESAR</span>
            </NextLink>
          </nav>

          {/* HERO - VERTICAL TITLE ON MOBILE */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-8">
             <div className="absolute inset-0 z-0">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.5] saturate-[0.6] contrast-[1.1] scale-110">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/60" />
               <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, #050403 95%)" />
             </div>

             <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 text-center flex flex-col items-center">
                <div className="mb-10 px-6 py-2 border border-amber-900/30 bg-black/40 rounded-full">
                   <p className="text-amber-500 font-mono text-[9px] tracking-[0.8em] uppercase">EVIDENCIA.OMERTA.2030</p>
                </div>

                {/* Vertical Title (Mobile-First) */}
                <h1 className="md:hidden flex flex-col font-black leading-[0.7] tracking-tight text-white mb-8 select-none">
                   <span className="text-[18vw]">L'</span>
                   <span className="text-[18vw]">NDRAN</span>
                   <span className="text-[18vw]">GHETA</span>
                </h1>
                
                {/* Desktop Title */}
                <h1 className="hidden md:block text-[12vw] font-black tracking-[-0.07em] leading-[0.75] text-white select-none">
                   L'NDRANGHETA
                </h1>

                <p className="md:mt-8 text-xl md:text-3xl font-light italic text-amber-100/20 max-w-[80vw] mx-auto leading-relaxed">Donde la sangre escribe la historia</p>
             </motion.div>
          </section>

          {/* NARRATIVA - CASE FILE DOSSIER */}
          <section id="narrativa" className="relative py-32 md:py-48 px-8 bg-[#050403]">
             <div className="max-w-4xl mx-auto space-y-32 md:space-y-48">
                <CaseFile title="PROTOCOLO_01">
                   <h2 className="text-5xl md:text-8xl font-black text-white leading-[1] tracking-tighter mb-10">
                      2030: El <br /><span className="text-amber-800 italic">Punto de Inflexión.</span>
                   </h2>
                   <p className="text-lg md:text-xl font-light text-white/40 leading-relaxed text-justify md:text-left md:border-l border-amber-900/50 md:pl-16 outline-none">
                      Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía.
                   </p>
                </CaseFile>

                <CaseFile title="INTELIGENCIA_02">
                   <div className="md:text-right">
                      <p className="text-3xl md:text-6xl font-serif italic text-white leading-[1.2] mb-10 opacity-80">"Guerra de desgaste en <br /><span className="text-amber-800">territorio hostil.</span>"</p>
                      <p className="text-lg md:text-xl text-white/20 leading-relaxed md:ml-auto max-w-2xl text-justify md:text-right font-light">
                        Mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio.
                      </p>
                   </div>
                </CaseFile>

                <div id="recursos" className="flex flex-col items-center justify-center text-center py-24 border-y border-amber-950/20 bg-amber-950/[0.02] rounded-3xl">
                   <h3 className="text-[12vw] md:text-[8rem] font-black text-white tracking-widest leading-none mb-10">¿UNIDAD O <br/><span className="text-amber-900 italic">DESTRUCCIÓN?</span></h3>
                   <div className="w-12 h-[1px] bg-amber-800/40 mb-6" />
                   <p className="text-amber-700 font-mono text-[9px] tracking-[1em] uppercase opacity-40">CALABRIA DECIDE</p>
                </div>
             </div>
          </section>

          {/* CLANES - CAROUSEL ON MOBILE */}
          <section id="clanes" className="py-24 md:py-48 bg-[#030303] border-t border-white/5 overflow-hidden">
             <div className="max-w-[1400px] mx-auto px-8">
                <div className="mb-32 flex flex-col items-center text-center">
                   <h2 className="text-7xl md:text-8xl font-serif font-black text-white italic tracking-tighter leading-tight opacity-90">L'Onorata Società</h2>
                   <p className="mt-8 text-amber-500 font-mono text-[9px] tracking-[1.5em] uppercase opacity-20">Expedientes de las Cuatro Coronas</p>
                </div>

                {/* Mobile: Snap Carousel / Desktop: Grid */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-12 snap-x snap-mandatory scrollbar-hide">
                   {[
                     { n: "Pelle-Vottari", r: "FINANZAS", icon: Globe, id: "D_01/PV", d: "Lavado de activos en paraísos fiscales." },
                     { n: "Nirta-Strangio", r: "FUERZA TÁCTICA", icon: Crosshair, id: "D_02/NS", d: "Seguridad y fuerza de choque de alto nivel." },
                     { n: "Piromalli-Molè", r: "LOGÍSTICA", icon: Landmark, id: "D_03/PM", d: "Control total de nodos logísticos críticos." },
                     { n: "De Stefano", r: "ALTO PODER", icon: ShieldAlert, id: "D_04/DS", d: "Influencia profunda en la rama judicial." }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        className="group min-w-[85vw] md:min-w-0 snap-center relative flex flex-col p-10 pt-16 bg-[#0a0a0a] border border-white/5 transition-all duration-500 rounded-tr-[4rem] rounded-bl-[4rem]"
                     >
                        <div className="absolute top-0 left-0 h-10 w-32 bg-[#0c0a09] border-t border-r border-amber-950/40 -mt-2 rounded-t-2xl flex items-center justify-center">
                           <div className="w-20 h-2 bg-black/40 rounded-full" />
                        </div>
                        <div className="mb-10 w-14 h-14 rounded-2xl border border-amber-900/20 flex items-center justify-center bg-black transition-all group-hover:bg-amber-500/10">
                           <item.icon className="w-6 h-6 text-amber-900" />
                        </div>
                        <h4 className="text-3xl font-serif text-white mb-2 uppercase font-black group-hover:text-amber-600 transition-colors tracking-tighter">{item.n}</h4>
                        <p className="text-[10px] font-black tracking-[0.5em] text-amber-800 mb-6">{item.r}</p>
                        <p className="text-sm text-white/20 leading-relaxed font-sans mb-8">{item.d}</p>
                        <div className="mt-auto pt-6 border-t border-amber-900/10 flex items-center gap-4 text-[8px] font-mono text-amber-700/20">
                           <span className="flex-1 h-px bg-amber-900/10" />
                           <span className="uppercase font-black">{item.id}</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
                <div className="md:hidden text-center text-amber-900/20 text-[8px] font-black tracking-widest mt-4">DESLIZA PARA VER MÁS</div>
             </div>
          </section>

          {/* BOTONES FINALES */}
          <section className="py-32 px-10 bg-black border-t border-white/5">
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { label: "Guia Academica", icon: Info },
                  { label: "Conoce a tu Mesa", icon: Users },
                  { label: "Reglamento Especializado", icon: Gavel }
                ].map((btn, i) => (
                  <button key={i} onClick={() => setIsSoonOpen(true)} className="group flex flex-col items-center justify-center gap-6 p-12 bg-[#080808] border border-white/5 rounded-[4rem] hover:border-red-900/40 transition-all shadow-2xl overflow-hidden">
                     <div className="w-12 h-12 rounded-2xl border border-amber-900/30 flex items-center justify-center text-amber-900 group-hover:text-white transition-all">
                        <btn.icon className="w-6 h-6" />
                     </div>
                     <span className="text-[10px] font-black tracking-[0.6em] text-white/10 group-hover:text-white uppercase text-center transition-all px-4">{btn.label}</span>
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER */}
          <footer className="py-24 border-t border-white/10 text-center bg-[#050403] px-10 pb-40">
            <div className="flex flex-col items-center">
               <Skull className="w-12 h-12 text-amber-950 mb-10 opacity-30" />
               <div className="flex justify-center gap-x-12 text-[10px] font-black tracking-[0.5em] uppercase text-white/5 mb-14">
                  <NextLink href="/comites" className="hover:text-amber-800">Archivo Central</NextLink>
                  <NextLink href="/" className="hover:text-amber-800">KAMEMUN</NextLink>
               </div>
               <p className="text-[8px] text-white/5 tracking-[0.8em] uppercase italic opacity-20">Modelo de Naciones Unidas • Estado Lara</p>
            </div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
