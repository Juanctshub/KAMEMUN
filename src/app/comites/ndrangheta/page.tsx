"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Info, Users, Gavel, X, FileText, Lock, ShieldCheck,
  Archive, Users2, Scale
} from "lucide-react";

/* ===== LUME SECTION V2 (MAYOR ILUMINACIÓN) ===== */
function LumeSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0.7 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      className={`relative group ${className}`}
    >
      {/* Expanded Ambient Glow - More opacity for visibility */}
      <motion.div 
        animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-x-32 -inset-y-60 bg-amber-600/15 blur-[150px] pointer-events-none z-0"
      />
      <div className="relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
         {children}
      </div>
    </motion.div>
  );
}

/* ===== MOBILE NEON NAVIGATION (AURA ILUMINADA) ===== */
function MobileTacticalNav({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[150] md:hidden w-[92vw] max-w-sm"
    >
      {/* OUTER AURA - NEW GOLDEN GLOW */}
      <div className="absolute inset-0 bg-amber-600/20 blur-[30px] rounded-full -z-10 animate-pulse" />
      
      <div className="bg-zinc-950/90 border-2 border-amber-900/40 backdrop-blur-3xl rounded-full p-2 flex items-center justify-around shadow-[0_0_40px_rgba(180,83,9,0.3)] border-t-amber-700/60 overflow-hidden relative">
        <button onClick={() => onScrollTo("narrativa")} className="relative flex flex-col items-center gap-1.5 p-4 text-amber-500/50 hover:text-amber-400 transition-all active:scale-95">
          <Archive className="w-6 h-6" />
          <span className="text-[7.5px] font-black tracking-widest uppercase">ARCHIVO</span>
        </button>
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-transparent via-amber-800/40 to-transparent" />
        <button onClick={() => onScrollTo("clanes")} className="relative flex flex-col items-center gap-1.5 p-4 text-amber-500/50 hover:text-amber-400 transition-all active:scale-95">
          <Users2 className="w-6 h-6" />
          <span className="text-[7.5px] font-black tracking-widest uppercase">CLANES</span>
        </button>
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-transparent via-amber-800/40 to-transparent" />
        <button onClick={() => onScrollTo("recursos")} className="relative flex flex-col items-center gap-1.5 p-4 text-amber-500/50 hover:text-amber-400 transition-all active:scale-95">
          <Scale className="w-6 h-6" />
          <span className="text-[7.5px] font-black tracking-widest uppercase">RECURSOS</span>
        </button>
        
        {/* INNER AMBIENT LIGHT */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-amber-500/20 shadow-[0_0_10px_rgba(180,83,9,0.5)]" />
      </div>
    </motion.div>
  );
}

/* ===== TRINITY HERO TITLE (ILUMINACIÓN EXTRA) ===== */
function TrinityTitle() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none font-black tracking-tight leading-[0.7] text-white">
       <div className="absolute inset-0 bg-amber-600/10 blur-[80px] -z-10 animate-pulse hidden md:block" />
       
       <motion.div 
         initial={{ x: "-100%", opacity: 0 }}
         animate={{ x: "100%", opacity: [0, 1.5, 0] }}
         transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
       />

       <motion.span 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
         className="text-[13vw] md:text-[5.5rem] mb-2 text-white/40 drop-shadow-lg"
       >
         L'
       </motion.span>
       <motion.span 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
         className="text-[21vw] md:text-[9.5rem] mb-2 drop-shadow-[0_0_30px_rgba(180,83,9,0.2)]"
       >
         NDRAN
       </motion.span>
       <motion.span 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
         className="text-[25vw] md:text-[12rem] drop-shadow-[0_15px_50px_rgba(0,0,0,1)] text-white/95"
       >
         GHETA
       </motion.span>

       {/* AMBIENT GLITCH UNDERLAY */}
       <div className="absolute inset-0 -z-10 blur-[15px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 text-red-950 translate-x-2">NDRAN</div>
          <div className="absolute inset-x-0 bottom-0 text-amber-950 translate-y-3">GHETA</div>
       </div>
    </div>
  );
}

/* ===== PALAZZO LOADER V6 (LUZ DE ENTRADA) ===== */
function PalazzoLoader({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#050403] overflow-hidden flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.1)_0%,transparent_100%)]" />

      {/* Gates (Nogal Brillo) */}
      <motion.div animate={isOpening ? { x: "-100%" } : { x: 0 }} transition={{ duration: 1.5, ease: [0.8, 0, 0.1, 1] }} className="absolute left-0 top-0 w-1/2 h-full bg-[#0d0a08] border-r-2 border-amber-900/30 z-20 shadow-[50px_0_150px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-25" />
      </motion.div>
      <motion.div animate={isOpening ? { x: "100%" } : { x: 0 }} transition={{ duration: 1.5, ease: [0.8, 0, 0.1, 1] }} className="absolute right-0 top-0 w-1/2 h-full bg-[#0d0a08] border-l-2 border-amber-900/30 z-20 shadow-[-50px_0_150px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-25" />
      </motion.div>

      <AnimatePresence>
        {!isOpening && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="relative z-30 flex flex-col items-center">
            <div className="relative w-48 h-48 mb-16 rounded-full border-2 border-amber-900/20 bg-black/70 flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden">
               <Skull className="w-20 h-20 text-amber-500/20" />
               <motion.div animate={{ rotate: 360, opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border-[2px] border-dashed border-amber-800/20 rounded-full" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,0,0.03)_0%,transparent_80%)]" />
            </div>
            <button onClick={() => { setIsOpening(true); setTimeout(onEnter, 1200); }} className="group flex flex-col items-center gap-10">
              <div className="w-28 h-28 rounded-full border-2 border-amber-800/40 flex items-center justify-center bg-red-950/10 group-hover:border-red-500 transition-all shadow-[0_0_50px_rgba(0,0,0,1)] relative overflow-hidden">
                 <ShieldCheck className="w-12 h-12 text-red-700/50 group-hover:text-red-500 transition-all drop-shadow-2xl" />
                 <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/15 transition-colors" />
                 <motion.div animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-red-900/20 blur-xl" />
              </div>
              <span className="text-[11px] font-black tracking-[1em] text-white/30 uppercase group-hover:text-white transition-all drop-shadow-md">ENTRAR AL PALAZZO</span>
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] flex items-center justify-center p-8 bg-black/98 backdrop-blur-3xl">
          <motion.div initial={{ scale: 0.9, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="relative max-w-sm w-full p-12 bg-zinc-950 border border-amber-900/30 rounded-[3.5rem] text-center shadow-[0_0_150px_rgba(0,0,0,1)]">
             <button onClick={onClose} className="absolute top-10 right-10 text-white/30 font-sans text-xs hover:text-white transition-colors">X_CLOSE</button>
             <div className="w-16 h-16 rounded-full border border-red-900/20 flex items-center justify-center mx-auto mb-10"><Lock className="w-7 h-7 text-red-700/40" /></div>
             <h3 className="text-3xl font-serif text-white mb-6 uppercase italic font-black tracking-tighter">OMERTÁ ACTIVA</h3>
             <p className="text-white/40 text-[14px] leading-relaxed mb-10 font-sans italic">Acceso restringido por la mesa directiva. El archivo se desvelará próximamente.</p>
             <button onClick={onClose} className="w-full py-5 bg-red-950/20 border border-red-900/50 text-red-600 text-[11px] font-black tracking-[0.6em] rounded-3xl hover:bg-red-600 hover:text-white transition-all shadow-xl">ENTENDIDO</button>
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
     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-800 selection:text-white font-serif overflow-x-hidden">
      
      {/* GLOBAL AMBIENT LIGHTING - NEW ADDITION TO KILL DARKNESS */}
      <div className="fixed inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle_at_50%_40%,rgba(180,83,9,0.06)_0%,transparent_70%)] opacity-60 md:opacity-40" />
      
      {/* SCANLINES & VINTAGE GRAIN */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.035] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] mix-blend-overlay" />

      <AnimatePresence>
        {isLoading && <PalazzoLoader key="gates" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SoonOverlay isOpen={isSoonOpen} onClose={() => setIsSoonOpen(false)} />
      
      {!isLoading && <MobileTacticalNav onScrollTo={scrollTo} />}

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          
          <nav className="fixed top-0 w-full z-[120] p-10 pointer-events-none">
            <NextLink href="/comites" className="pointer-events-auto inline-flex items-center gap-5 py-4 px-10 bg-black/80 border border-amber-900/10 rounded-full shadow-2xl group transition-all hover:bg-zinc-950 hover:border-amber-600/40">
              <ArrowLeft className="w-5 h-5 text-amber-600 group-hover:-translate-x-1.5 transition-all" />
              <span className="text-[11px] font-black tracking-[0.5em] uppercase text-white/40 group-hover:text-white transition-all">ABANDONAR</span>
            </NextLink>
          </nav>

          {/* HERO - ILUMINADO */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-10">
             <div className="absolute inset-0 z-0">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.55] saturate-[0.7] contrast-[1.1] md:brightness-[0.45]">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/70" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#050403_100%)] md:bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.02)_0%,#050403_100%)]" />
             </div>

             <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 text-center pt-24">
                <TrinityTitle />
                <p className="mt-16 text-2xl md:text-4xl font-light italic text-amber-100/15 drop-shadow-2xl select-none font-serif tracking-wide">"Donde la sangre escribe la historia"</p>
                <motion.div animate={{ opacity: [0.1, 0.4, 0.1], y: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mt-20 text-amber-500/20 hidden md:flex flex-col items-center">
                   <ChevronDown className="w-8 h-8" />
                </motion.div>
             </motion.div>
          </section>

          {/* NARRATIVA - LUME SECTIONS V2 */}
          <section id="narrativa" className="relative py-40 md:py-64 px-10 bg-[#050403]">
             <div className="max-w-4xl mx-auto space-y-48 md:space-y-64 relative z-10">
                <LumeSection>
                   <h2 className="text-[13vw] md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-12 uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
                      2030: El <br /><span className="text-amber-800 italic underline decoration-amber-600/20 underline-offset-8">Inflexión.</span>
                   </h2>
                   <p className="text-xl md:text-3xl font-light text-white/50 leading-relaxed md:leading-[1.8] text-justify md:text-left border-l-2 border-amber-900/30 pl-10 md:pl-24 select-none">
                      Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales.
                   </p>
                </LumeSection>

                <LumeSection className="md:text-right">
                   <p className="text-4xl md:text-7xl font-serif italic text-white leading-[1.3] mb-14 drop-shadow-2xl opacity-90 select-none">"Guerra de desgaste en <br /><span className="text-amber-700 underline decoration-amber-900/40">territorio hostil.</span>"</p>
                   <p className="text-xl md:text-2xl text-white/30 leading-relaxed md:ml-auto max-w-2xl text-justify md:text-right font-light">
                      Mafias y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual.
                   </p>
                </LumeSection>

                <div id="recursos" className="flex flex-col items-center justify-center text-center py-32 border-y-2 border-amber-900/10 relative overflow-hidden group rounded-[5rem] bg-amber-950/[0.03]">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.05)_0%,transparent_70%)] animate-pulse" />
                   <h3 className="text-[16vw] md:text-[10rem] font-black text-white tracking-widest leading-none mb-14 italic select-none drop-shadow-2xl">¿UNIDAD O <br/><span className="text-amber-950 opacity-90">DESTRUCCIÓN?</span></h3>
                   <div className="w-20 h-[2px] bg-amber-800/20 mb-12 shadow-[0_0_10px_rgba(180,83,9,0.3)]" />
                   <p className="text-amber-700/50 font-mono text-[11px] md:text-[16px] tracking-[1.8em] uppercase px-4 leading-relaxed font-black drop-shadow-md">EL IMPERIO CALABRÉS DECIDE</p>
                </div>
             </div>
          </section>

          {/* CLANES - CAROUSEL ILUMINADO */}
          <section id="clanes" className="py-24 md:py-64 bg-[#030302] border-t border-amber-950/20 overflow-hidden">
             <div className="max-w-[1800px] mx-auto px-10">
                <div className="mb-48 flex flex-col items-center text-center">
                   <h2 className="text-7xl md:text-[10rem] font-serif font-black text-white italic tracking-tighter leading-tight opacity-80 drop-shadow-2xl">L'Onorata Società</h2>
                   <p className="mt-10 text-amber-600 font-mono text-[11px] tracking-[2.5em] uppercase opacity-30">Protocolos de Linaje</p>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 overflow-x-auto md:overflow-visible pb-24 snap-x snap-mandatory scrollbar-hide">
                   {[
                     { n: "Pelle-Vottari", r: "FINANZAS", icon: Globe, id: "D_01/PV" },
                     { n: "Nirta-Strangio", r: "FUERZA TÁCTICA", icon: Crosshair, id: "D_02/NS" },
                     { n: "Piromalli-Molè", r: "LOGÍSTICA", icon: Landmark, id: "D_03/PM" },
                     { n: "De Stefano", r: "ALTO PODER", icon: ShieldAlert, id: "D_04/DS" }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        className="group min-w-[92vw] md:min-w-0 snap-center relative flex flex-col p-16 bg-zinc-950/80 border border-amber-900/10 transition-all duration-700 rounded-tr-[5.5rem] rounded-bl-[5.5rem] overflow-hidden hover:border-amber-600/30"
                     >
                        <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:opacity-100 transition-opacity">
                           <FileText className="w-14 h-14 text-amber-600" />
                        </div>
                        <div className="mb-14 w-16 h-16 rounded-3xl border border-amber-900/30 flex items-center justify-center bg-black group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                           <item.icon className="w-8 h-8 text-amber-900" />
                        </div>
                        <h4 className="text-[2.2rem] md:text-5xl font-serif text-white mb-4 uppercase font-black tracking-tighter group-hover:text-amber-500 transition-colors">{item.n}</h4>
                        <p className="text-[12px] font-black tracking-[0.6em] text-amber-800 mb-12 pb-6 border-b border-amber-950/20">{item.r}</p>
                        <div className="mt-auto flex items-center gap-6 text-[10px] font-mono text-amber-800/40 font-black">
                           <span className="flex-1 h-[1px] bg-amber-950/20" />
                           <span className="tracking-[0.6em]">{item.id}</span>
                        </div>
                        
                        {/* Interactive Shine Effect on Card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/[0.02] to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                     </motion.div>
                   ))}
                </div>
                <div className="md:hidden text-center text-amber-900/30 text-[11px] font-black tracking-[2em] mt-10 uppercase">Desliza para explorar</div>
             </div>
          </section>

          <footer className="py-40 border-t border-amber-950/20 text-center bg-[#050403] px-10 pb-72">
            <div className="flex flex-col items-center">
               <Skull className="w-14 h-14 text-amber-950/15 mb-14 drop-shadow-xl" />
               <div className="flex flex-wrap justify-center gap-x-14 gap-y-10 text-[12px] font-black tracking-[0.7em] uppercase text-white/5 mb-20 italic">
                  <NextLink href="/comites" className="hover:text-amber-700 transition-all border-b border-transparent hover:border-amber-900/30 pb-2">Archivos Oficiales</NextLink>
                  <NextLink href="/" className="hover:text-amber-700 transition-all border-b border-transparent hover:border-amber-900/30 pb-2">Centro KAMEMUN</NextLink>
               </div>
               <p className="text-[10px] text-white/5 tracking-[1em] uppercase italic opacity-30 select-none">Modelo de Naciones Unidas • Lara 2030</p>
            </div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
