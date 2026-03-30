"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Info, Users, Gavel, X, FileText, Lock, ShieldCheck,
  Archive, Users2, Scale
} from "lucide-react";

/* ===== LUME SECTION WRAPPER (ILUMINACIÓN ÁMBAR) ===== */
function LumeSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className={`relative group ${className}`}
    >
      {/* Dynamic Ambient Glow (Mobile & Desktop) */}
      <motion.div 
        animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-x-20 -inset-y-40 bg-amber-600/10 blur-[120px] pointer-events-none z-0"
      />
      <div className="relative z-10">
         {children}
      </div>
    </motion.div>
  );
}

/* ===== TRINITY HERO TITLE (MOBILE-FIRST) ===== */
function TrinityTitle() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none font-black tracking-tight leading-[0.7] text-white">
       {/* SHINE SWEEP OVERLAY */}
       <motion.div 
         initial={{ x: "-100%", opacity: 0 }}
         animate={{ x: "100%", opacity: [0, 1, 0] }}
         transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-20 pointer-events-none"
       />

       {/* THE TRINITY TRIANGLE */}
       <motion.span 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
         className="text-[12vw] md:text-[5rem] mb-2 opacity-60 flex items-center justify-center"
       >
         L'
       </motion.span>
       <motion.span 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
         className="text-[20vw] md:text-[9rem] mb-2 drop-shadow-2xl"
       >
         NDRAN
       </motion.span>
       <motion.span 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
         className="text-[24vw] md:text-[11rem] drop-shadow-[0_20px_60px_rgba(0,0,0,1)]"
       >
         GHETA
       </motion.span>

       {/* GLITCH SHADOWS (TRINITY COLORS) */}
       <div className="absolute inset-0 -z-10 blur-[10px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 text-red-900 translate-x-2">NDRAN</div>
          <div className="absolute inset-x-0 bottom-0 text-amber-900 translate-y-2">GHETA</div>
       </div>
    </div>
  );
}

/* ===== PALAZZO LOADER V5 (TRINITY) ===== */
function PalazzoLoader({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#050403] overflow-hidden flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.05)_0%,transparent_100%)]" />

      {/* Gates (Nogal) */}
      <motion.div animate={isOpening ? { x: "-100%" } : { x: 0 }} transition={{ duration: 1.4, ease: [0.8, 0, 0.1, 1] }} className="absolute left-0 top-0 w-1/2 h-full bg-[#0a0807] border-r border-amber-950/20 z-20 shadow-[40px_0_120px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-20" />
      </motion.div>
      <motion.div animate={isOpening ? { x: "100%" } : { x: 0 }} transition={{ duration: 1.4, ease: [0.8, 0, 0.1, 1] }} className="absolute right-0 top-0 w-1/2 h-full bg-[#0a0807] border-l border-amber-950/20 z-20 shadow-[-40px_0_120px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-20" />
      </motion.div>

      <AnimatePresence>
        {!isOpening && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} className="relative z-30 flex flex-col items-center">
            <div className="relative w-44 h-44 mb-14 rounded-full border border-amber-900/10 bg-black/60 flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,1)]">
               <Skull className="w-16 h-16 text-amber-500/10" />
               <motion.div animate={{ rotate: 360, opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-6 border-[1px] border-amber-700/10 rounded-full" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
            </div>
            <button onClick={() => { setIsOpening(true); setTimeout(onEnter, 1200); }} className="group flex flex-col items-center gap-8">
              <div className="w-24 h-24 rounded-full border border-amber-900/40 flex items-center justify-center bg-red-950/5 group-hover:border-red-600 transition-all shadow-2xl relative overflow-hidden">
                 <ShieldCheck className="w-10 h-10 text-red-600/40 group-hover:text-red-500 transition-all" />
                 <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors" />
              </div>
              <span className="text-[10px] font-black tracking-[0.8em] text-white/10 uppercase group-hover:text-white transition-all">INICIAR OMERTÀ</span>
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/98 backdrop-blur-2xl">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} className="relative max-w-sm w-full p-12 bg-[#0c0a09] border border-amber-900/20 rounded-[3rem] text-center shadow-2xl">
             <button onClick={onClose} className="absolute top-8 right-8 text-white/20 font-sans text-xs hover:text-white transition-colors">X_EXIT</button>
             <div className="w-16 h-16 rounded-full border border-red-950/10 flex items-center justify-center mx-auto mb-10"><Lock className="w-6 h-6 text-red-700/20" /></div>
             <h3 className="text-3xl font-serif text-white mb-6 uppercase italic font-black tracking-tight">ACCESO CERRADO</h3>
             <p className="text-white/30 text-[13px] leading-relaxed mb-10 font-sans px-4 italic">Archivo bajo código rojo. Se habilitará en la sesión oficial.</p>
             <button onClick={onClose} className="w-full py-4 bg-red-950/10 border border-red-900/40 text-red-600 text-[10px] font-black tracking-widest rounded-2xl hover:bg-red-600 hover:text-white transition-all">OK_ENTENDIDO</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NdranghetaPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoonOpen, setIsSoonOpen] = useState(false);
  
  const scrollTo = (id: string) => {
     const el = document.getElementById(id);
     if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-800 selection:text-white font-serif overflow-x-hidden">
      
      {/* SCANLINES OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] mix-blend-overlay" />

      <AnimatePresence>
        {isLoading && <PalazzoLoader key="gates" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SoonOverlay isOpen={isSoonOpen} onClose={() => setIsSoonOpen(false)} />
      
      {!isLoading && (
        <motion.div 
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] md:hidden w-[90vw] max-w-sm"
        >
          <div className="bg-black/80 backdrop-blur-3xl border border-amber-900/20 rounded-full p-2 flex items-center justify-around shadow-2xl">
            <button onClick={() => scrollTo("narrativa")} className="p-4 text-amber-500/40 hover:text-amber-500 transition-colors"><Archive className="w-5 h-5" /></button>
            <div className="w-px h-8 bg-amber-900/10" />
            <button onClick={() => scrollTo("clanes")} className="p-4 text-amber-500/40 hover:text-amber-500 transition-colors"><Users2 className="w-5 h-5" /></button>
            <div className="w-px h-8 bg-amber-900/10" />
            <button onClick={() => scrollTo("recursos")} className="p-4 text-amber-500/40 hover:text-amber-500 transition-colors"><Scale className="w-5 h-5" /></button>
          </div>
        </motion.div>
      )}

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          
          <nav className="fixed top-0 w-full z-[120] p-10 pointer-events-none">
            <NextLink href="/comites" className="pointer-events-auto inline-flex items-center gap-4 py-3 px-8 bg-black/80 border border-white/5 rounded-full shadow-2xl group transition-all hover:bg-black">
              <ArrowLeft className="w-4 h-4 text-amber-600 group-hover:-translate-x-1 transition-all" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40 group-hover:text-white transition-all">SALIR</span>
            </NextLink>
          </nav>

          {/* HERO - TRINITY SYMBOLISM */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-10">
             <div className="absolute inset-0 z-0">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.45] saturate-[0.6] contrast-[1.1] scale-110">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/60" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#050403_100%)]" />
             </div>

             <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 text-center pt-20">
                <TrinityTitle />
                <p className="mt-14 text-xl md:text-3xl font-light italic text-amber-100/10 select-none drop-shadow-lg font-serif">"Donde la sangre escribe la historia"</p>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-16 text-white/5 md:flex flex-col items-center hidden">
                   <ChevronDown className="w-6 h-6" />
                </motion.div>
             </motion.div>
          </section>

          {/* NARRATIVA - LUME SECTIONS */}
          <section id="narrativa" className="relative py-40 md:py-60 px-10 bg-[#050403]">
             <div className="max-w-4xl mx-auto space-y-40 md:space-y-60 relative z-10">
                <LumeSection>
                   <h2 className="text-[12vw] md:text-7xl font-black text-white leading-[1] tracking-tighter mb-10 uppercase drop-shadow-2xl">
                      2030: El <br /><span className="text-amber-800 italic underline decoration-amber-950/40">Inflexión Final.</span>
                   </h2>
                   <p className="text-xl md:text-2xl font-light text-white/40 leading-relaxed md:leading-loose text-justify md:text-left border-l-[1px] border-amber-900/20 pl-10 md:pl-20 outline-none select-none">
                      Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales.
                   </p>
                </LumeSection>

                <LumeSection className="md:text-right">
                   <p className="text-4xl md:text-6xl font-serif italic text-white leading-[1.3] mb-12 drop-shadow-lg opacity-80 select-none">"Guerra de desgaste en <br /><span className="text-amber-800">territorio hostil.</span>"</p>
                   <p className="text-xl md:text-2xl text-white/20 leading-loose md:ml-auto max-w-3xl text-justify md:text-right font-light">
                      Mafias y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual.
                   </p>
                </LumeSection>

                <div id="recursos" className="flex flex-col items-center justify-center text-center py-28 border-y border-amber-950/10 relative overflow-hidden group rounded-[4rem]">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.03)_0%,transparent_70%)]" />
                   <h3 className="text-[15vw] md:text-[9rem] font-black text-white tracking-widest leading-none mb-10 italic select-none">¿UNIDAD O <br/><span className="text-amber-950">DESTRUCCIÓN?</span></h3>
                   <div className="w-16 h-[2px] bg-amber-900/20 mb-10" />
                   <p className="text-amber-700/40 font-mono text-[10px] md:text-[14px] tracking-[1.5em] uppercase px-4 leading-relaxed font-black">EL IMPERIO CALABRÉS DECIDE</p>
                </div>
             </div>
          </section>

          {/* CLANES - CAROUSEL TÁCTICO */}
          <section id="clanes" className="py-24 md:py-60 bg-[#030302] border-t border-amber-950/10 overflow-hidden">
             <div className="max-w-[1700px] mx-auto px-10">
                <div className="mb-40 flex flex-col items-center text-center">
                   <h2 className="text-7xl md:text-9xl font-serif font-black text-white italic tracking-tighter leading-tight opacity-70">L'Onorata Società</h2>
                   <p className="mt-8 text-amber-600 font-mono text-[10px] tracking-[2em] uppercase opacity-20">Protocolos de Linaje</p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible pb-20 snap-x snap-mandatory scrollbar-hide">
                   {[
                     { n: "Pelle-Vottari", r: "FINANZAS", icon: Globe, id: "D_01/PV" },
                     { n: "Nirta-Strangio", r: "FUERZA TÁCTICA", icon: Crosshair, id: "D_02/NS" },
                     { n: "Piromalli-Molè", r: "LOGÍSTICA", icon: Landmark, id: "D_03/PM" },
                     { n: "De Stefano", r: "ALTO PODER", icon: ShieldAlert, id: "D_04/DS" }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        className="group min-w-[90vw] md:min-w-0 snap-center relative flex flex-col p-14 bg-[#0a0a0a] border border-white/5 transition-all duration-700 rounded-tr-[5rem] overflow-hidden"
                     >
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-100 transition-opacity">
                           <FileText className="w-12 h-12 text-amber-700" />
                        </div>
                        <div className="mb-14 w-16 h-16 rounded-2xl border border-amber-950/20 flex items-center justify-center bg-black group-hover:border-amber-500 transition-all">
                           <item.icon className="w-8 h-8 text-amber-900" />
                        </div>
                        <h4 className="text-4xl font-serif text-white mb-3 uppercase font-black group-hover:text-amber-500 transition-colors">{item.n}</h4>
                        <p className="text-[11px] font-black tracking-[0.5em] text-amber-800 mb-10 pb-4 border-b border-amber-950/20">{item.r}</p>
                        <div className="mt-auto flex items-center gap-6 text-[9px] font-mono text-amber-800/30 font-black">
                           <span className="flex-1 h-px bg-amber-950/10" />
                           <span className="tracking-[0.5em]">{item.id}</span>
                        </div>
                        {/* Glow Sweep on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/0 via-amber-600/0 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </motion.div>
                   ))}
                </div>
                <div className="md:hidden text-center text-amber-900/20 text-[10px] font-black tracking-[1.5em] mt-8">DESLIZA EXPEDIENTES</div>
             </div>
          </section>

          {/* BOTONES RECURSOS - MOBILE ADAPTED */}
          <section className="py-28 px-10 bg-black border-t border-amber-950/10">
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { label: "Guia Academica", icon: Info },
                  { label: "Conoce a tu Mesa", icon: Users },
                  { label: "Reglamento Especializado", icon: Gavel }
                ].map((btn, i) => (
                  <button key={i} onClick={() => setIsSoonOpen(true)} className="group flex flex-col items-center justify-center gap-8 p-16 bg-[#080808] border border-white/5 rounded-[4rem] hover:border-red-950/40 hover:bg-black transition-all shadow-2xl relative overflow-hidden">
                     <div className="w-14 h-14 rounded-full border border-amber-900/10 flex items-center justify-center text-amber-900 group-hover:text-white transition-all">
                        <btn.icon className="w-6 h-6" />
                     </div>
                     <span className="text-[11px] font-black tracking-[0.6em] text-white/5 group-hover:text-white uppercase text-center transition-all px-6">{btn.label}</span>
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.02)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER */}
          <footer className="py-40 border-t border-white/5 text-center bg-[#050403] px-10 pb-60">
            <div className="flex flex-col items-center">
               <Skull className="w-14 h-14 text-amber-950/10 mb-14" />
               <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-black tracking-[0.6em] uppercase text-white/5 mb-16">
                  <NextLink href="/comites" className="hover:text-amber-800 transition-all">Archivos</NextLink>
                  <NextLink href="/" className="hover:text-amber-800 transition-all">Regresar al Hub</NextLink>
               </div>
               <p className="text-[9px] text-white/5 tracking-[0.6em] uppercase italic opacity-20 select-none">Modelo de Naciones Unidas • Estado Lara</p>
            </div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
