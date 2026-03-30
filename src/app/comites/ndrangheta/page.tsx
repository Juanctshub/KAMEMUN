"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Info, Users, Gavel, X, FileText, Lock, ShieldCheck
} from "lucide-react";

/* ===== UTILS & COMPONENTS ===== */

// Glow illumination wrapper specifically for mobile
function MobileGlowText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className={`relative group ${className}`}
    >
      <div className="absolute -inset-x-10 -inset-y-20 bg-amber-600/5 blur-[100px] opacity-0 group-hover:opacity-100 md:hidden transition-opacity duration-1000" />
      {children}
    </motion.div>
  );
}

/* ===== PALAZZO LOADER V3 (NOGAL & BRONCE) ===== */
function PalazzoLoader({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#050403] overflow-hidden flex items-center justify-center">
      {/* Light Slit (Pre-opening) */}
      {!isOpening && (
        <motion.div 
          animate={{ opacity: [0.1, 0.4, 0.1] }} 
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-amber-500/20 blur-[4px] z-30"
        />
      )}

      {/* Left Gate (Nogal) */}
      <motion.div 
        initial={{ x: 0 }}
        animate={isOpening ? { x: "-100%", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.8, 0, 0.2, 1] }}
        className="absolute left-0 top-0 w-1/2 h-full bg-[#0a0807] border-r border-amber-950/40 z-20 shadow-[40px_0_120px_rgba(0,0,0,1)] flex items-center justify-end"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-30 pointer-events-none mix-blend-overlay" />
        {/* Brass corner trim */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-amber-800/30 rounded-tl-3xl hidden md:block" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-b-2 border-l-2 border-amber-800/30 rounded-bl-3xl hidden md:block" />
      </motion.div>

      {/* Right Gate (Nogal) */}
      <motion.div 
        initial={{ x: 0 }}
        animate={isOpening ? { x: "100%", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.8, 0, 0.2, 1] }}
        className="absolute right-0 top-0 w-1/2 h-full bg-[#0a0807] border-l border-amber-950/40 z-20 shadow-[-40px_0_120px_rgba(0,0,0,1)] flex items-center justify-start"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-30 pointer-events-none mix-blend-overlay" />
        {/* Brass corner trim */}
        <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-amber-800/30 rounded-tr-3xl hidden md:block" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-amber-800/30 rounded-br-3xl hidden md:block" />
      </motion.div>

      {/* Central Interactive Content */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
            className="relative z-30 text-center flex flex-col items-center px-8"
          >
            {/* Pulsating Brass Skull Knocker */}
            <div className="mb-14 relative group">
               <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -inset-10 bg-amber-500/10 blur-[50px] rounded-full" />
               <div className="relative w-36 h-36 md:w-56 md:h-56 rounded-full border-2 border-amber-900/30 flex items-center justify-center bg-[#070504] shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden">
                  <Skull className="w-16 h-16 md:w-28 md:h-28 text-amber-500/20 drop-shadow-[0_0_10px_rgba(180,83,9,0.2)]" />
                  <div className="absolute inset-2 border border-amber-900/10 rounded-full" />
               </div>
            </div>

            <button 
              onClick={() => { setIsOpening(true); setTimeout(onEnter, 1200); }}
              className="group relative flex flex-col items-center gap-8"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-amber-900/40 flex items-center justify-center overflow-hidden transition-all duration-700 bg-red-950/10 hover:border-red-600 shadow-2xl">
                 <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-red-700/60 group-hover:text-red-500 transition-all" />
              </div>
              <span className="text-[9px] md:text-[11px] font-black tracking-[1em] text-white/20 group-hover:text-red-500 transition-all uppercase">RECLAMAR OMERTA</span>
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
        <motion.div
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
           className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/98 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-md w-full p-10 bg-[#0c0a09] border border-amber-900/20 text-center rounded-[3rem] shadow-[0_0_120px_rgba(0,0,0,1)]"
          >
             <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-amber-500 transition-all font-sans text-xs">EXIT</button>
             <div className="w-16 h-16 rounded-full border border-red-900/30 flex items-center justify-center mx-auto mb-10">
                <Lock className="w-6 h-6 text-red-700/40" />
             </div>
             <h3 className="text-3xl font-serif text-white mb-6 uppercase tracking-tighter italic font-black">Acceso Sellado</h3>
             <p className="text-white/40 text-[13px] leading-relaxed mb-10 font-sans px-4">Este archivo judicial está bajo <span className="text-red-800 font-bold underline decoration-red-900/50">PROTECCIÓN ESTATAL</span> hasta la Cumbre KAMEMUN.</p>
             <button onClick={onClose} className="w-full py-4 bg-red-950/20 border border-red-900/40 text-red-600 text-[10px] font-black tracking-[0.5em] uppercase hover:bg-red-600 hover:text-white transition-all rounded-2xl">OK, OMERTA</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NdranghetaPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoonOpen, setIsSoonOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-800 selection:text-white font-serif overflow-x-hidden">
      
      {/* CINEMATIC LAYERS */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] mix-blend-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px]" />

      <AnimatePresence>
        {isLoading && <PalazzoLoader key="gates" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SoonOverlay isOpen={isSoonOpen} onClose={() => setIsSoonOpen(false)} />

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.2 }}>
          
          {/* NAV - HIGHER PADDING ON MOBILE */}
          <nav className="fixed top-0 w-full z-[120] p-8 lg:p-12 pointer-events-none">
            <div className="max-w-[1920px] mx-auto flex justify-between items-center pointer-events-auto">
              <NextLink href="/comites" className="group flex items-center gap-4 py-3 px-8 bg-black/80 border border-white/5 backdrop-blur-3xl rounded-full hover:border-amber-500/30 transition-all shadow-2xl">
                <ArrowLeft className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">Back to Files</span>
              </NextLink>
            </div>
          </nav>

          {/* HERO - RESPONSIVE TITLES */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6">
             <div className="absolute inset-0 z-0">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.5] saturate-[0.6] contrast-[1.1] scale-110">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/60" />
               <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, #050403 95%)" />
             </div>

             <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 text-center pt-20">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-10 inline-block px-6 py-2 border border-amber-900/30 bg-black/40 rounded-full">
                   <p className="text-amber-500 font-mono text-[9px] tracking-[0.8em] uppercase">EVIDENCIA_OMERTA_2030</p>
                </motion.div>

                <h1 className="text-[14vw] md:text-[12rem] font-black tracking-[-0.07em] leading-[0.75] text-white drop-shadow-[0_20px_50px_rgba(0,0,0,1)] uppercase">
                   L'NDRANGHETA
                </h1>

                <p className="mt-8 text-lg md:text-3xl font-light italic text-amber-100/20 max-w-[90vw] mx-auto text-balance">"Donde la sangre escribe la historia"</p>
                
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-20 text-white/10 flex flex-col items-center">
                   <ChevronDown className="w-6 h-6" />
                </motion.div>
             </motion.div>
          </section>

          {/* NARRATIVA - GLOWS ON MOBILE */}
          <section className="relative py-28 md:py-48 px-8 lg:px-16 bg-[#050403]">
             <div className="max-w-4xl mx-auto space-y-24 md:space-y-40 relative z-10">
                
                <MobileGlowText>
                   <span className="text-amber-900 font-mono text-[8px] tracking-[0.6em] mb-8 block font-black">CAPTACIÓN_REMOTA.txt</span>
                   <h2 className="text-4xl md:text-7xl font-black text-white leading-[1] tracking-tighter mb-10 drop-shadow-lg">
                      2030: El punto de <br /><span className="text-amber-800 italic">Inflexión.</span>
                   </h2>
                   <p className="text-lg md:text-xl font-light text-white/40 leading-relaxed text-justify md:text-left border-l-[1px] border-amber-900/50 pl-8 md:pl-12 outline-none">
                      Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales.
                   </p>
                </MobileGlowText>

                <MobileGlowText className="md:text-right">
                   <p className="text-2xl md:text-5xl font-serif italic text-white leading-[1.2] mb-10 drop-shadow-lg opacity-80">"Guerra de desgaste en <br /><span className="text-amber-800">territorio hostil.</span>"</p>
                   <p className="text-base md:text-lg text-white/20 leading-relaxed md:ml-auto max-w-2xl text-justify md:text-right font-light">
                      Mafias y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual.
                   </p>
                </MobileGlowText>

                {/* UNITY CENTERED */}
                <MobileGlowText className="flex flex-col items-center justify-center text-center py-20 border-y border-amber-950/20 bg-amber-950/[0.02]">
                   <h3 className="text-[12vw] md:text-[8rem] font-black text-white tracking-widest leading-none mb-10 group-hover:text-red-900 transition-colors">
                      ¿UNIDAD O <br/><span className="text-amber-900 italic">DESTRUCCIÓN?</span>
                   </h3>
                   <div className="w-12 h-[1px] bg-amber-800/40 mb-6" />
                   <p className="text-amber-700 font-mono text-[9px] tracking-[1em] uppercase opacity-40">El destino decide el fin de la corona</p>
                </MobileGlowText>
             </div>
          </section>

          {/* FAMILIAS - FOLDER TAB DESIGN */}
          <section className="py-24 md:py-48 bg-[#030303] border-t border-white/5 px-8">
             <div className="max-w-[1400px] mx-auto">
                <div className="mb-32 flex flex-col items-center text-center">
                   <h2 className="text-6xl md:text-8xl font-serif font-black text-white italic tracking-tighter leading-tight opacity-90 drop-shadow-2xl">L'Onorata Società</h2>
                   <p className="mt-8 text-amber-500 font-mono text-[9px] tracking-[1.5em] uppercase opacity-20">Protocolos de Linaje</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                   {[
                     { n: "Pelle-Vottari", r: "FINANZAS", icon: Globe, id: "D_01/PV" },
                     { n: "Nirta-Strangio", r: "FUERZA TÁCTICA", icon: Crosshair, id: "D_02/NS" },
                     { n: "Piromalli-Molè", r: "LOGÍSTICA", icon: Landmark, id: "D_03/PM" },
                     { n: "De Stefano", r: "ALTO PODER", icon: ShieldAlert, id: "D_04/DS" }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ y: -8 }}
                        className="group relative flex flex-col p-10 pt-16 bg-[#0a0a0a] border border-white/5 transition-all duration-500 rounded-tr-[3rem] shadow-xl hover:border-amber-900/40"
                     >
                        {/* Folder Tab (Nogal Detail) */}
                        <div className="absolute top-0 left-0 h-10 w-32 bg-[#0c0a09] border-t-2 border-r-2 border-amber-950/40 -mt-2 rounded-t-xl flex items-center justify-center z-0">
                           <div className="w-20 h-2 bg-black/40 rounded-full" />
                        </div>
                        
                        {/* Dossier Header */}
                        <div className="absolute top-6 right-8 flex flex-col items-end gap-1 opacity-[0.05] group-hover:opacity-20 transition-opacity">
                           <FileText className="w-10 h-10 text-white" />
                           <span className="text-[8px] font-mono tracking-widest text-white">{item.id}</span>
                        </div>

                        <div className="mb-10 w-14 h-14 rounded-2xl border border-amber-900/20 flex items-center justify-center bg-black transition-all group-hover:bg-amber-500/5 group-hover:border-amber-600">
                           <item.icon className="w-6 h-6 text-amber-900" />
                        </div>

                        <h4 className="text-2xl font-serif text-white mb-2 uppercase font-black group-hover:text-amber-600 transition-colors">{item.n}</h4>
                        <div className="flex items-center gap-4 mb-4">
                           <p className="text-[9px] font-black tracking-[0.5em] text-amber-800">{item.r}</p>
                        </div>
                        
                        <div className="mt-auto pt-10 border-t border-amber-900/10 flex items-center gap-4 text-[8px] font-mono text-amber-700/20">
                           <span className="flex-1 h-px bg-amber-900/10" />
                           <span className="uppercase font-black">EXP_SECRET_B</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </section>

          {/* BUTTONS - MORE SPACING ON MOBILE */}
          <section className="py-24 px-10 bg-black border-t border-white/5">
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { label: "Guia Academica", icon: Info },
                  { label: "Conoce a tu Mesa", icon: Users },
                  { label: "Reglamento Especializado", icon: Gavel }
                ].map((btn, i) => (
                  <button
                    key={i}
                    onClick={() => setIsSoonOpen(true)}
                    className="group flex flex-col items-center justify-center gap-6 p-14 md:p-14 bg-[#080808] border border-white/5 rounded-3xl hover:border-red-900/40 transition-all hover:bg-black"
                  >
                     <div className="w-12 h-12 rounded-full border border-amber-900/30 flex items-center justify-center text-amber-900 group-hover:text-white transition-all">
                        <btn.icon className="w-5 h-5" />
                     </div>
                     <span className="text-[9px] font-black tracking-[0.4em] text-white/10 group-hover:text-white uppercase transition-all px-2 leading-relaxed text-center">
                        {btn.label}
                     </span>
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER - COMPACT */}
          <footer className="py-20 border-t border-white/10 text-center bg-[#050403] px-10">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col items-center">
               <Skull className="w-10 h-10 text-amber-950 mb-10 opacity-30" />
               <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-black tracking-[0.5em] uppercase text-white/5 mb-14">
                  <NextLink href="/comites" className="hover:text-amber-800">Archivos</NextLink>
                  <NextLink href="/" className="hover:text-amber-800">Hub</NextLink>
               </div>
               <p className="text-[8px] text-white/5 tracking-[0.4em] uppercase italic font-medium opacity-20">Modelo de Naciones Unidas • Estado Lara</p>
            </motion.div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
