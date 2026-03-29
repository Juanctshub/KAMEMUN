"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Info, Users, Gavel, X, FileText, Lock, ShieldCheck
} from "lucide-react";

/* ===== GRAND GATE LOADER (STABLE) ===== */
function GrandGateLoader({ onEnter }: { onEnter: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    setIsOpening(true);
    setTimeout(onEnter, 1200);
  };

  return (
    <div className="fixed inset-0 z-[2000] bg-[#050403] overflow-hidden flex items-center justify-center">
      {/* Left Gate */}
      <motion.div 
        initial={{ x: 0 }}
        animate={isOpening ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
        className="absolute left-0 top-0 w-1/2 h-full bg-[#0a0807] border-r border-amber-900/40 z-20 shadow-[20px_0_100px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-10 pointer-events-none" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12">
            <div className="w-16 h-16 rounded-full border-2 border-amber-900/60 flex items-center justify-center opacity-30 shadow-[0_0_20px_rgba(180,83,9,0.1)]">
                <Skull className="w-6 h-6 text-amber-500" />
            </div>
            <div className="w-px h-64 bg-gradient-to-b from-transparent via-amber-950/40 to-transparent" />
        </div>
      </motion.div>

      {/* Right Gate */}
      <motion.div 
        initial={{ x: 0 }}
        animate={isOpening ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
        className="absolute right-0 top-0 w-1/2 h-full bg-[#0a0807] border-l border-amber-900/40 z-20 shadow-[-20px_0_100px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-10 pointer-events-none" />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12">
            <div className="w-16 h-16 rounded-full border-2 border-amber-900/60 flex items-center justify-center opacity-30 shadow-[0_0_20px_rgba(180,83,9,0.1)]">
                <Skull className="w-6 h-6 text-amber-500" />
            </div>
            <div className="w-px h-64 bg-gradient-to-b from-transparent via-amber-950/40 to-transparent" />
        </div>
      </motion.div>

      {/* Enter Content */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="relative z-30 text-center flex flex-col items-center"
          >
            <div className="mb-12 relative px-4">
               <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -inset-20 bg-amber-950/10 blur-[80px] rounded-full" />
               <h2 className="text-amber-500/40 font-mono text-[9px] tracking-[2em] uppercase mb-4">MOMENTO DE OMERTA</h2>
               <h1 className="text-white font-serif text-5xl md:text-8xl font-black tracking-[-0.05em] uppercase leading-tight drop-shadow-2xl">
                 L'NDRANGHETA
               </h1>
            </div>

            <button 
              onClick={handleEnter}
              className="group relative flex flex-col items-center gap-6 mt-8"
            >
              <div className="relative w-24 h-24 rounded-full border border-amber-900/50 flex items-center justify-center group-hover:border-amber-500 transition-all duration-700 bg-black/40">
                 <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/30 rounded-full animate-ping" />
                 <ShieldCheck className="w-8 h-8 text-amber-500 opacity-40 group-hover:opacity-100 transition-all" />
              </div>
              <span className="text-[10px] font-black tracking-[0.6em] text-white/30 group-hover:text-amber-500 transition-all uppercase">ENTRAR AL PALAZZO</span>
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
           className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/95 backdrop-blur-3xl"
        >
          <motion.div
            initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-md w-full p-12 bg-[#0c0a09] border border-amber-900/30 text-center rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,1)]"
          >
             <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-amber-500 transition-all">
               <X className="w-5 h-5" />
             </button>
             <div className="w-20 h-20 rounded-full border border-amber-500/10 flex items-center justify-center mx-auto mb-10">
                <Lock className="w-8 h-8 text-amber-500/20" />
             </div>
             <h3 className="text-3xl font-serif text-white mb-6 uppercase tracking-tighter italic font-black">Acceso Denegado</h3>
             <p className="text-white/40 text-sm leading-relaxed mb-12 font-sans px-4">
               Este expediente está bajo <span className="text-amber-700">OMERTA JUDICIAL</span>. Se abrirá en las fases de despliegue global de KAMEMUN.
             </p>
             <button onClick={onClose} className="w-full py-5 bg-amber-950/20 border border-amber-900/30 text-amber-600 text-[10px] font-black tracking-[0.5em] uppercase hover:text-white transition-all rounded-2xl">
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
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-800 selection:text-white font-serif overflow-x-hidden">
      
      {/* SCANLINE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />

      <AnimatePresence>
        {isLoading && <GrandGateLoader key="gates" onEnter={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SoonOverlay isOpen={isSoonOpen} onClose={() => setIsSoonOpen(false)} />

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          
          {/* NAV */}
          <nav className="fixed top-0 w-full z-[100] p-6 pointer-events-none">
            <div className="max-w-[1920px] mx-auto flex justify-between items-center pointer-events-auto">
              <NextLink href="/comites" className="group flex items-center gap-4 py-2 px-6 bg-black/60 border border-white/5 backdrop-blur-3xl rounded-full hover:border-amber-500/30 transition-all">
                <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100">Hub de Comités</span>
              </NextLink>
            </div>
          </nav>

          {/* HERO */}
          <section className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 z-0 scale-105">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.35] saturate-[0.5] contrast-[1.2]">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/90" />
               <div className="absolute inset-0 bg-radial-gradient(circle, transparent 10%, #050403 95%)" />
             </div>

             <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 text-center px-4 pt-20">
                <div className="inline-flex items-center gap-4 mb-10">
                   <div className="w-12 h-px bg-amber-800" />
                   <span className="text-amber-500 font-mono text-[10px] tracking-[1em] uppercase">Omerta 2030</span>
                   <div className="w-12 h-px bg-amber-800" />
                </div>

                <div className="relative group">
                   <h1 className="text-[12vw] md:text-[12rem] font-black tracking-[-0.05em] leading-[0.75] text-white drop-shadow-2xl">
                      L'NDRANGHETA
                      <span className="absolute inset-0 text-red-600 opacity-0 group-hover:opacity-20 group-hover:translate-x-1 transition-all -z-10 blur-[2px]">L'NDRANGHETA</span>
                   </h1>
                </div>

                <p className="mt-8 text-xl md:text-3xl font-light italic text-amber-100/30">Donde la sangre escribe la historia</p>
                
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-24 text-white/10 flex flex-col items-center gap-4">
                   <ChevronDown className="w-6 h-6" />
                </motion.div>
             </motion.div>
          </section>

          {/* TEXT SECTION */}
          <section className="relative py-40 md:py-80 px-6 bg-[#050403]">
             <div className="max-w-4xl mx-auto space-y-60 relative z-10">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                   <h2 className="text-4xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12">
                      2030: El punto de <br /><span className="text-amber-700 italic">Inflexión.</span>
                   </h2>
                   <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed text-justify md:text-left border-l-[1px] border-amber-900/20 pl-8 md:pl-12">
                      Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía. Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero.
                   </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:text-right">
                   <p className="text-2xl md:text-5xl font-serif italic text-white leading-[1.2] mb-12">"Guerra de desgaste en <span className="text-amber-700">territorio hostil.</span>"</p>
                   <p className="text-lg md:text-xl text-white/30 leading-relaxed md:ml-auto max-w-2xl text-justify md:text-right outline-none">
                      Mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual. No se trata solo de proteger las rutas comerciales, sino de gestionar una crisis interna donde los negocios entre clanes y los pactos de sangre son la única moneda de cambio frente a enemigos que no respetan los códigos de la vieja escuela.
                   </p>
                </motion.div>

                <div className="text-center py-40 border-y border-amber-900/10">
                   <h3 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-none mb-8">¿UNIDAD O <br/><span className="text-amber-800 italic">DESTRUCCIÓN?</span></h3>
                   <p className="text-amber-600 font-mono text-[10px] tracking-[1.2em] uppercase">El imperio calabrés decide su destino</p>
                </div>
             </div>
          </section>

          {/* FAMILIAS */}
          <section className="py-40 bg-[#030303]">
             <div className="max-w-7xl mx-auto px-6">
                <div className="mb-40 flex flex-col items-center text-center">
                   <h2 className="text-7xl md:text-9xl font-serif font-black text-white italic tracking-tighter leading-none">L'Onorata Società</h2>
                   <p className="mt-8 text-amber-500 font-mono text-[10px] tracking-[1em] uppercase">Expedientes de las Cuatro Coronas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {[
                     { n: "Pelle-Vottari", r: "FINANZAS", icon: Globe, id: "PV_001", d: "Lavado de capitales en nodos europeos." },
                     { n: "Nirta-Strangio", r: "MILITAR", icon: Crosshair, id: "NS_042", d: "Fuerza de choque estratégica." },
                     { n: "Piromalli-Molè", r: "PUERTOS", icon: Landmark, id: "PM_009", d: "Control de nodos logísticos críticos." },
                     { n: "De Stefano", r: "POLÍTICA", icon: ShieldAlert, id: "DS_077", d: "Infiltración en el aparato judicial." }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="group relative flex flex-col p-12 bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 rounded-tr-[5rem]"
                     >
                        <div className="absolute top-0 right-0 p-6 opacity-20">
                           <FileText className="w-8 h-8 text-amber-900 group-hover:text-amber-500" />
                        </div>
                        <div className="mb-10 w-14 h-14 rounded-full border border-amber-900/20 flex items-center justify-center group-hover:bg-amber-500/10">
                           <item.icon className="w-6 h-6 text-amber-800 group-hover:text-amber-500 transition-colors" />
                        </div>
                        <h4 className="text-3xl font-serif text-white mb-2 uppercase font-black">{item.n}</h4>
                        <p className="text-[9px] font-black tracking-[0.4em] text-amber-800 mb-8 border-b border-amber-900/20 pb-4">{item.r}</p>
                        <p className="text-sm text-white/30 leading-relaxed font-sans opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                           {item.d}
                        </p>
                        <div className="mt-auto pt-4 flex items-center gap-4 text-[8px] font-mono text-amber-500/40">
                           <span className="flex-1 h-px bg-amber-900/20" />
                           <span>OK_IDENTIFICADO</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </section>

          {/* BUTTONS */}
          <section className="py-40 px-6 bg-black">
             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Guia Academica", icon: Info },
                  { label: "Conoce a tu Mesa", icon: Users },
                  { label: "Reglamento Especializado", icon: Gavel }
                ].map((btn, i) => (
                  <button
                    key={i}
                    onClick={() => setIsSoonOpen(true)}
                    className="group flex flex-col items-center justify-center gap-6 p-16 bg-[#080808] border border-white/5 rounded-[3rem] hover:border-amber-500/40 transition-all shadow-2xl"
                  >
                     <div className="w-14 h-14 rounded-2xl border border-amber-900/30 flex items-center justify-center text-amber-800 group-hover:text-white transition-all">
                        <btn.icon className="w-6 h-6" />
                     </div>
                     <span className="text-[10px] font-black tracking-[0.5em] text-white/20 group-hover:text-white uppercase transition-all">
                        {btn.label}
                     </span>
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER */}
          <footer className="py-32 border-t border-white/5 text-center bg-[#020202]">
            <Skull className="w-10 h-10 text-amber-900/20 mx-auto mb-10" />
            <div className="flex justify-center gap-12 text-[10px] font-black tracking-[0.6em] uppercase text-white/5 mb-16">
               <NextLink href="/comites" className="hover:text-amber-700 transition-all">Archivos</NextLink>
               <NextLink href="/" className="hover:text-amber-700 transition-all">Hub</NextLink>
            </div>
            <p className="text-[8px] text-white/5 tracking-[0.4em] uppercase italic">Modelo de Naciones Unidas - Estado Lara</p>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
