"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Info, Users, Gavel, X, FileText, Lock, ShieldCheck
} from "lucide-react";

/* ===== GRAND GATE LOADER V2 (MAJESTIC) ===== */
function GrandGateLoader({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    setIsOpening(true);
    setTimeout(onEnter, 1200); 
  };

  return (
    <div className="fixed inset-0 z-[2000] bg-[#050403] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none z-[50] opacity-[0.05] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] mix-blend-overlay" />

      <motion.div 
        initial={{ x: 0 }}
        animate={isOpening ? { x: "-100%", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
        className="absolute left-0 top-0 w-1/2 h-full bg-[#0a0807] border-r border-amber-900/10 z-20 shadow-[40px_0_100px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-amber-800/10 to-transparent" />
      </motion.div>

      <motion.div 
        initial={{ x: 0 }}
        animate={isOpening ? { x: "100%", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
        className="absolute right-0 top-0 w-1/2 h-full bg-[#0a0807] border-l border-amber-900/10 z-20 shadow-[-40px_0_100px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-20 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-amber-800/10 to-transparent" />
      </motion.div>

      <AnimatePresence>
        {!isOpening && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.5 } }}
            className="relative z-30 text-center flex flex-col items-center px-6"
          >
            <div className="mb-14 relative">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="absolute inset-0 bg-amber-500/10 blur-[60px] rounded-full"
               />
               <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-amber-900/20 flex items-center justify-center bg-black/40 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                  <Skull className="w-16 h-16 md:w-24 md:h-24 text-amber-500/40 drop-shadow-[0_0_15px_rgba(180,83,9,0.3)]" />
                  <div className="absolute inset-4 border-2 border-amber-900/10 rounded-full" />
               </div>
            </div>

            <button 
              onClick={handleEnter}
              className="group relative flex flex-col items-center gap-6"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-[3px] border-amber-900/40 flex items-center justify-center overflow-hidden transition-all duration-700 bg-red-950/10 hover:border-red-600 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                 <div className="absolute inset-0 bg-red-900/20 opacity-0 group-hover:opacity-40 transition-opacity" />
                 <motion.div 
                   animate={{ scale: [1, 1.05, 1] }} 
                   transition={{ repeat: Infinity, duration: 2.5 }}
                   className="relative flex items-center justify-center"
                 >
                    <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-red-600/60 group-hover:text-red-500 transition-all drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]" />
                 </motion.div>
              </div>
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.8em] text-white/20 group-hover:text-red-500 transition-all uppercase drop-shadow-md">ENTRAR AL PALAZZO</span>
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
            initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-md w-full p-12 bg-[#0a0a0a] border border-amber-900/20 text-center rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,1)]"
          >
             <button onClick={onClose} className="absolute top-8 right-8 text-white/10 hover:text-amber-500 transition-all">
               <X className="w-6 h-6" />
             </button>
             <div className="w-20 h-20 rounded-full border border-red-900/20 flex items-center justify-center mx-auto mb-10 bg-red-950/10">
                <Lock className="w-8 h-8 text-red-700/60" />
             </div>
             <h3 className="text-3xl font-serif text-white mb-6 uppercase tracking-tighter italic font-black">Expediente Sellado</h3>
             <p className="text-white/40 text-sm leading-relaxed mb-12 font-sans px-4">
               Este contenido está bajo <span className="text-red-800 font-black">OMERTA JUDICIAL</span>. La reserva se levantará durante el despliegue global de KAMEMUN.
             </p>
             <button onClick={onClose} className="w-full py-5 bg-red-950/20 border border-red-900/30 text-red-600 text-[10px] font-black tracking-[0.5em] uppercase hover:bg-red-600 hover:text-white transition-all rounded-2xl">
               CONFIRMAR OMERTA
             </button>
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
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-800 selection:text-white font-serif overflow-x-hidden">
      
      {/* SCANLINE & GRAIN OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] mix-blend-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(200,0,0,0.06),rgba(0,0,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />

      <AnimatePresence>
        {isLoading && <GrandGrandGateLoader key="gates" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SoonOverlay isOpen={isSoonOpen} onClose={() => setIsSoonOpen(false)} />

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.2 }}>
          
          {/* NAV */}
          <nav className="fixed top-0 w-full z-[120] p-6 lg:p-10 pointer-events-none">
            <div className="max-w-[1920px] mx-auto flex justify-between items-center pointer-events-auto">
              <NextLink href="/comites" className="group flex items-center gap-4 py-2.5 px-6 bg-black/60 border border-white/5 backdrop-blur-3xl rounded-full hover:border-amber-500/40 transition-all shadow-2xl">
                <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100">Files</span>
              </NextLink>
            </div>
          </nav>

          {/* HERO - MORE VIDEO VISIBILITY */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 z-0 scale-105">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.55] saturate-[0.6] contrast-[1.1] scale-110">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/60" />
               <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, #050403 95%)" />
             </div>

             <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 text-center px-6 pt-20">
                <div className="relative group">
                   <h1 className="text-[15vw] md:text-[12rem] font-black tracking-[-0.06em] leading-[0.8] text-white drop-shadow-2xl relative select-none">
                      L'NDRANGHETA
                   </h1>
                </div>
                <p className="mt-8 text-xl md:text-4xl font-light italic text-amber-100/30 font-serif tracking-wide">Donde la sangre escribe la historia</p>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-16 text-white/20 flex flex-col items-center gap-2">
                   <ChevronDown className="w-8 h-8" />
                </motion.div>
             </motion.div>
          </section>

          {/* NARRATIVA - COMPACTED SPACING */}
          <section className="relative py-24 md:py-40 px-6 lg:px-12 bg-[#050403] overflow-hidden">
             <div className="max-w-4xl mx-auto space-y-32 md:space-y-48 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                   <h2 className="text-4xl md:text-7xl font-black text-white leading-[1] tracking-tighter mb-10">
                      2030: El punto de <br /><span className="text-amber-700 italic">Inflexión.</span>
                   </h2>
                   <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed text-balance md:text-left border-l-[1px] border-amber-900/30 pl-8 md:pl-12">
                      Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía. Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero.
                   </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:text-right">
                   <p className="text-2xl md:text-5xl font-serif italic text-white leading-[1.2] mb-10 text-balance">"Guerra de desgaste en <br /><span className="text-amber-700">territorio hostil.</span>"</p>
                   <p className="text-lg md:text-xl text-white/30 leading-relaxed md:ml-auto max-w-2xl text-justify md:text-right font-light">
                      Mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual.
                   </p>
                </motion.div>

                {/* UNITY OR DESTRUCTION - COMPACT CENTERING */}
                <div className="flex flex-col items-center justify-center text-center py-20 border-y border-amber-900/10 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent relative overflow-hidden group">
                   <h3 className="text-[10vw] md:text-[8rem] font-black text-white tracking-tighter leading-none mb-10 select-none">
                      ¿UNIDAD O <br/><span className="text-amber-800 italic group-hover:text-red-800 transition-colors duration-1000">DESTRUCCIÓN?</span>
                   </h3>
                   <div className="w-12 h-[1px] bg-amber-700 mb-6" />
                   <p className="text-amber-600 font-mono text-[9px] md:text-[10px] tracking-[1.2em] uppercase px-4 leading-relaxed font-black opacity-40">El destino decide el fin de la corona</p>
                </div>
             </div>
          </section>

          {/* FAMILIAS - COMPACT */}
          <section className="py-24 md:py-40 bg-[#030303] border-t border-white/5">
             <div className="max-w-[1600px] mx-auto px-6">
                <div className="mb-24 flex flex-col items-center text-center">
                   <h2 className="text-6xl md:text-8xl font-serif font-black text-white italic tracking-tighter leading-tight drop-shadow-2xl">L'Onorata Società</h2>
                   <p className="mt-8 text-amber-500 font-mono text-[9px] tracking-[1.5em] uppercase opacity-30">Protocolos de Linaje</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                   {[
                     { n: "Pelle-Vottari", r: "FINANZAS", icon: Globe, id: "D_01/PV" },
                     { n: "Nirta-Strangio", r: "FUERZA TÁCTICA", icon: Crosshair, id: "D_02/NS" },
                     { n: "Piromalli-Molè", r: "LOGÍSTICA", icon: Landmark, id: "D_03/PM" },
                     { n: "De Stefano", r: "ALTO PODER", icon: ShieldAlert, id: "D_04/DS" }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02, zIndex: 10 }}
                        className="group relative flex flex-col p-10 bg-[#090909] border border-white/5 overflow-hidden transition-all duration-500 rounded-tr-[3rem] hover:border-amber-500/30"
                     >
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                           <FileText className="w-6 h-6 text-amber-900 group-hover:text-amber-500" />
                        </div>
                        <div className="mb-10 w-12 h-12 rounded-2xl border border-amber-900/30 flex items-center justify-center bg-black transition-all group-hover:border-amber-500">
                           <item.icon className="w-6 h-6 text-amber-900" />
                        </div>
                        <h4 className="text-2xl font-serif text-white mb-2 uppercase font-black">{item.n}</h4>
                        <p className="text-[9px] font-black tracking-[0.4em] text-amber-800">{item.r}</p>
                        <div className="mt-auto pt-8 flex items-center gap-4 text-[8px] font-mono text-amber-500/20">
                           <span className="flex-1 h-px bg-amber-900/10" />
                           <span>{item.id}</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </section>

          {/* CTA - COMPACT */}
          <section className="py-20 px-6 bg-black border-t border-white/5">
             <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Guia Academica", icon: Info },
                  { label: "Conoce a tu Mesa", icon: Users },
                  { label: "Reglamento Especializado", icon: Gavel }
                ].map((btn, i) => (
                  <button
                    key={i}
                    onClick={() => setIsSoonOpen(true)}
                    className="group relative flex flex-col items-center justify-center gap-6 p-12 bg-[#070707] border border-white/5 rounded-[3rem] hover:border-red-900/40 hover:bg-red-950/5 transition-all shadow-2xl"
                  >
                     <div className="w-12 h-12 rounded-2xl border border-amber-900/20 flex items-center justify-center text-amber-950 group-hover:text-white transition-all">
                        <btn.icon className="w-5 h-5" />
                     </div>
                     <span className="text-[10px] font-black tracking-[0.5em] text-white/10 group-hover:text-white uppercase text-center transition-all">
                        {btn.label}
                     </span>
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER - COMPACT */}
          <footer className="py-20 border-t border-white/5 text-center bg-[#030302]">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="px-6">
               <Skull className="w-10 h-10 text-amber-900/10 mx-auto mb-8" />
               <div className="flex justify-center gap-x-12 text-[10px] font-black tracking-[0.5em] uppercase text-white/5 mb-10">
                  <NextLink href="/comites" className="hover:text-amber-500 transition-all">Archivos</NextLink>
                  <NextLink href="/" className="hover:text-amber-500 transition-all">Hub</NextLink>
               </div>
               <p className="text-[8px] text-white/5 tracking-[0.4em] uppercase italic font-black">Modelo de Naciones Unidas • Estado Lara</p>
            </motion.div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}

function GrandGrandGateLoader({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);
  return (
    <div className="fixed inset-0 z-[2000] bg-[#050403] overflow-hidden flex items-center justify-center px-6">
      <motion.div initial={{ x: 0 }} animate={isOpening ? { x: "-100%", opacity: 0 } : { x: 0, opacity: 1 }} transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }} className="absolute left-0 top-0 w-1/2 h-full bg-[#0a0807] border-r border-amber-900/10 z-20" />
      <motion.div initial={{ x: 0 }} animate={isOpening ? { x: "100%", opacity: 0 } : { x: 0, opacity: 1 }} transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }} className="absolute right-0 top-0 w-1/2 h-full bg-[#0a0807] border-l border-amber-900/10 z-20" />
      <AnimatePresence>
        {!isOpening && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.2 }} className="relative z-30 text-center flex flex-col items-center">
            <div className="mb-14 relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-amber-900/20 flex items-center justify-center bg-black/40 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                <Skull className="w-16 h-16 md:w-24 md:h-24 text-amber-500/40" />
            </div>
            <button onClick={() => { setIsOpening(true); setTimeout(onEnter, 1200); }} className="group relative flex flex-col items-center gap-6">
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-[3px] border-amber-900/40 flex items-center justify-center bg-red-950/10 hover:border-red-600 transition-all duration-700">
                 <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-red-600/60 group-hover:text-red-500" />
              </div>
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.8em] text-white/20 group-hover:text-red-500 transition-all uppercase">ENTRAR AL PALAZZO</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
