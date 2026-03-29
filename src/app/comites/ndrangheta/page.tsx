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
      {/* Cinematic Film Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[50] opacity-[0.05] bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] mix-blend-overlay" />

      {/* Left Gate */}
      <motion.div 
        initial={{ x: 0 }}
        animate={isOpening ? { x: "-100%", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
        className="absolute left-0 top-0 w-1/2 h-full bg-[#0a0807] border-r border-amber-900/10 z-20 shadow-[40px_0_100px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-20 pointer-events-none" />
        {/* Ornate Frame Detail */}
        <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-amber-800/10 to-transparent" />
      </motion.div>

      {/* Right Gate */}
      <motion.div 
        initial={{ x: 0 }}
        animate={isOpening ? { x: "100%", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
        className="absolute right-0 top-0 w-1/2 h-full bg-[#0a0807] border-l border-amber-900/10 z-20 shadow-[-40px_0_100px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-20 pointer-events-none" />
        {/* Ornate Frame Detail */}
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-amber-800/10 to-transparent" />
      </motion.div>

      {/* Central Content */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.5 } }}
            className="relative z-30 text-center flex flex-col items-center px-6"
          >
            {/* Pulsating Brass Skull Knocker */}
            <div className="mb-14 relative">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="absolute inset-0 bg-amber-500/10 blur-[60px] rounded-full"
               />
               <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-amber-900/20 flex items-center justify-center bg-black/40 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                  <Skull className="w-16 h-16 md:w-24 md:h-24 text-amber-500/40 drop-shadow-[0_0_15px_rgba(180,83,9,0.3)]" />
                  {/* Ornate Brass Ring */}
                  <div className="absolute inset-4 border-2 border-amber-900/10 rounded-full" />
               </div>
            </div>

            {/* Blood Seal Action Button */}
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
                 {/* Wax Seal Drips (Simplified SVG) */}
                 <div className="absolute top-0 w-full h-full pointer-events-none opacity-10 group-hover:opacity-30">
                    <div className="absolute top-4 left-4 w-4 h-8 bg-red-900 rounded-full blur-[2px]" />
                    <div className="absolute bottom-2 right-6 w-3 h-10 bg-red-800 rounded-full blur-[2px]" />
                 </div>
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
        {isLoading && <GrandGateLoader key="gates" onEnter={() => setIsLoading(false)} />}
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
              <div className="px-5 py-2 hidden md:block bg-amber-500/5 border-l border-amber-500/20 backdrop-blur-sm">
                 <p className="text-[8px] font-bold tracking-[0.6em] text-amber-600 uppercase">CALABRIA . Dossier 2030</p>
              </div>
            </div>
          </nav>

          {/* HERO */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 z-0">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.35] saturate-[0.4] contrast-[1.2] scale-110">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/90" />
               <div className="absolute inset-0 bg-radial-gradient(circle, transparent 10%, #050403 90%)" />
             </div>

             <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 text-center px-6 pt-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="inline-flex items-center gap-6 mb-12 overflow-hidden px-4 py-1.5 border border-amber-900/20 rounded-full bg-black/20">
                   <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                   <span className="text-amber-500/60 font-mono text-[9px] tracking-[0.8em] uppercase">EVIDENCIA TIPO: OMERTA</span>
                </motion.div>

                <div className="relative group">
                   <h1 className="text-[15vw] md:text-[12rem] font-black tracking-[-0.06em] leading-[0.8] text-white drop-shadow-[0_20px_60px_rgba(0,0,0,1)] relative select-none">
                      L'NDRANGHETA
                      {/* RGB Glitch Layers */}
                      <span className="absolute inset-0 text-red-700 opacity-0 group-hover:opacity-30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all -z-10 blur-[1px]">L'NDRANGHETA</span>
                      <span className="absolute inset-0 text-amber-500 opacity-0 group-hover:opacity-30 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all -z-10 blur-[1px]">L'NDRANGHETA</span>
                   </h1>
                </div>

                <p className="mt-10 text-xl md:text-4xl font-light italic text-amber-100/30 font-serif tracking-wide">Donde la sangre escribe la historia</p>
                
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-24 text-white/20 flex flex-col items-center gap-2">
                   <span className="text-[8px] tracking-[0.5em] font-black uppercase hidden md:block opacity-40">Reveal Data</span>
                   <ChevronDown className="w-8 h-8" />
                </motion.div>
             </motion.div>
          </section>

          {/* NARRATIVA (CENTERED) */}
          <section className="relative py-40 md:py-80 px-6 lg:px-12 bg-[#050403] overflow-hidden">
             {/* Background Detail */}
             <div className="absolute top-0 right-0 py-20 opacity-[0.02] -mr-40 hidden xl:block">
                <Skull className="w-[40rem] h-[40rem] text-white" />
             </div>

             <div className="max-w-4xl mx-auto space-y-60 md:space-y-80 relative z-10">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                   <span className="text-amber-800 font-mono text-[9px] tracking-[0.6em] mb-12 block">CAPTACIÓN_001.txt</span>
                   <h2 className="text-4xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-14 drop-shadow-lg">
                      2030: El punto de <br /><span className="text-amber-700 italic">Inflexión.</span>
                   </h2>
                   <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed text-balance md:text-left border-l-[1px] border-amber-900/30 pl-8 md:pl-16">
                      Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía. Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero.
                   </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:text-right relative">
                   <p className="text-3xl md:text-6xl font-serif italic text-white leading-[1.3] mb-12 drop-shadow-lg">"Guerra de desgaste en <br /><span className="text-amber-700">territorio hostil.</span>"</p>
                   <p className="text-lg md:text-xl text-white/30 leading-relaxed md:ml-auto max-w-2xl text-justify md:text-right font-light">
                      Mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual. No se trata solo de proteger las rutas comerciales, sino de gestionar una crisis interna donde los negocios entre clanes y los pactos de sangre son la única moneda de cambio frente a enemigos que no respetan los códigos de la vieja escuela.
                   </p>
                </motion.div>

                {/* UNITY OR DESTRUCTION - PERFECTLY CENTERED */}
                <div className="flex flex-col items-center justify-center text-center py-40 border-y border-amber-900/10 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent relative overflow-hidden group">
                   <div className="absolute inset-0 bg-red-950/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   <h3 className="text-[12vw] md:text-[10rem] font-black text-white tracking-tighter leading-none mb-10 select-none">
                      ¿UNIDAD O <br/><span className="text-amber-800 italic group-hover:text-red-800 transition-colors duration-1000">DESTRUCCIÓN?</span>
                   </h3>
                   <div className="w-16 h-1 bg-amber-700 mb-8" />
                   <p className="text-amber-600 font-mono text-[10px] md:text-[12px] tracking-[1.2em] uppercase px-4 leading-relaxed font-black opacity-60">El destino decide el fin de la corona</p>
                </div>
             </div>
          </section>

          {/* FAMILIAS */}
          <section className="py-40 md:py-60 bg-[#030303] border-t border-white/5">
             <div className="max-w-[1600px] mx-auto px-6">
                <div className="mb-40 flex flex-col items-center text-center">
                   <div className="w-px h-24 bg-gradient-to-b from-transparent to-amber-600 mb-10 opacity-40" />
                   <h2 className="text-6xl md:text-9xl font-serif font-black text-white italic tracking-tighter leading-tight drop-shadow-2xl">L'Onorata Società</h2>
                   <p className="mt-8 text-amber-500 font-mono text-[10px] tracking-[1.5em] uppercase opacity-40 scale-mobile">Protocolos de Linaje</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
                   {[
                     { n: "Pelle-Vottari", r: "FINANZAS", icon: Globe, id: "D_01/PV", d: "Arquitectura financiera y flujos bancarios encubiertos." },
                     { n: "Nirta-Strangio", r: "FUERZA TÁCTICA", icon: Crosshair, id: "D_02/NS", d: "Despliegue militar y control territorial absoluto." },
                     { n: "Piromalli-Molè", r: "LOGÍSTICA", icon: Landmark, id: "D_03/PM", d: "Soberanía portuaria y rutas transoceánicas." },
                     { n: "De Stefano", r: "ALTO PODER", icon: ShieldAlert, id: "D_04/DS", d: "Interferencia política y nexos en la alta judicatura." }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02, zIndex: 10 }}
                        className="group relative flex flex-col p-12 bg-[#090909] border border-white/5 overflow-hidden transition-all duration-500 rounded-tr-[4rem] odd:rounded-bl-[4rem] hover:border-amber-500/30"
                     >
                        {/* Red Wax Seal Stamp Effect on Hover */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-800/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        
                        <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity group-hover:text-red-600">
                           <FileText className="w-8 h-8" />
                           <span className="text-[9px] font-mono mt-2 font-black">{item.id}</span>
                        </div>

                        <div className="mb-12 w-16 h-16 rounded-3xl border border-amber-900/30 flex items-center justify-center bg-black transition-all group-hover:rotate-12 group-hover:border-amber-500">
                           <item.icon className="w-7 h-7 text-amber-950 group-hover:text-amber-500 transition-colors" />
                        </div>

                        <h4 className="text-3xl font-serif text-white mb-3 uppercase font-black group-hover:text-amber-500 transition-colors">{item.n}</h4>
                        <div className="flex items-center gap-4 mb-10 border-b border-amber-900/20 pb-4">
                           <p className="text-[10px] font-black tracking-[0.4em] text-amber-800">{item.r}</p>
                        </div>
                        
                        <p className="text-sm text-white/20 leading-relaxed font-sans mt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-6 group-hover:translate-y-0 italic">
                           {item.d}
                        </p>

                        <div className="mt-auto pt-10 flex items-center gap-4 text-[8px] font-mono text-amber-500/30">
                           <span className="flex-1 h-px bg-amber-900/10" />
                           <span className="uppercase font-black tracking-widest">Estado: Activo</span>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </section>

          {/* CTA BUTTONS - RESPONSIVE MASTER */}
          <section className="py-40 px-6 bg-black border-t border-white/5">
             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: "Guia Academica", icon: Info },
                  { label: "Conoce a tu Mesa", icon: Users },
                  { label: "Reglamento Especializado", icon: Gavel }
                ].map((btn, i) => (
                  <button
                    key={i}
                    onClick={() => setIsSoonOpen(true)}
                    className="group relative flex flex-col items-center justify-center gap-8 p-16 md:p-20 bg-[#070707] border border-white/5 rounded-[4rem] hover:border-red-900/40 hover:bg-red-950/5 transition-all shadow-2xl overflow-hidden"
                  >
                     <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="w-16 h-16 rounded-2xl border border-amber-900/20 flex items-center justify-center text-amber-950 group-hover:text-white group-hover:border-white transition-all group-hover:scale-110">
                        <btn.icon className="w-7 h-7" />
                     </div>
                     <span className="text-[11px] font-black tracking-[0.6em] text-white/5 group-hover:text-white uppercase text-center transition-all px-4 leading-loose">
                        {btn.label}
                     </span>
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER */}
          <footer className="py-40 border-t border-white/5 text-center bg-[#030302]">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="px-6">
               <Skull className="w-12 h-12 text-amber-900/10 mx-auto mb-10" />
               <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-black tracking-[0.7em] uppercase text-white/10 mb-20 drop-shadow-sm">
                  <NextLink href="/comites" className="hover:text-amber-500 transition-all">Archivo Central</NextLink>
                  <NextLink href="/" className="hover:text-amber-500 transition-all">KAMEMUN 2026</NextLink>
               </div>
               <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-900/20 to-transparent mx-auto mb-10" />
               <p className="text-[9px] text-white/5 tracking-[0.6em] uppercase italic font-black">Modelo de Naciones Unidas • Estado Lara</p>
            </motion.div>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
