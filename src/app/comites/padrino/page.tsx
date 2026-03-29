"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Scale, Gavel, Users, ShieldAlert, 
  History, FileText, Lock, Volume2, Award,
  ChevronRight, Sparkles, Fingerprint
} from "lucide-react";

/* ===== CINEMATIC PADRINO LOADER ===== */
function PadrinoLoader({ onComplete }: { onComplete: () => void }) {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 1500);
    const endTimer = setTimeout(onComplete, 5000);
    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Subtle Wood Grain / Texture Overlay */}
      <div className="absolute inset-0 opacity-20 contrast-125 grayscale mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] bg-repeat" />
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Puppet Icon / Symbolism */}
        <div className="mb-12 relative">
          <motion.div
             initial={{ y: -20, opacity: 0 }}
             animate={{ y: 0, opacity: 0.4 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="absolute -top-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-16 bg-gradient-to-t from-amber-600 to-transparent" />
          </motion.div>
          <Scale className="w-20 h-20 text-amber-600/80 drop-shadow-[0_0_30px_rgba(217,119,6,0.3)]" />
        </div>

        <h2 className="text-amber-100 font-serif text-4xl md:text-7xl font-black tracking-[0.2em] uppercase mb-4 text-center">
          IL PADRINO
        </h2>
        
        <AnimatePresence>
          {showSubtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-600/60 font-serif italic text-lg md:text-2xl tracking-widest mt-2"
            >
              Corte Suprema de Calabria
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 2, duration: 2 }}
          className="h-[1px] bg-amber-600/30 mt-12 w-24"
        />
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient(circle, transparent 40%, black 100%)" />
    </motion.div>
  );
}

/* ===== MAIN PAGE ===== */
export default function PadrinoPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#0a0604] text-[#e5d5c5] selection:bg-amber-900 selection:text-white font-serif overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <PadrinoLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full"
          >
            {/* ===== NAVBAR ===== */}
            <header className="fixed top-0 w-full z-50 flex justify-center py-6 px-4 md:px-8 border-b border-amber-900/20 bg-black/40 backdrop-blur-3xl">
              <div className="w-full max-w-7xl flex items-center justify-between">
                <Link href="/comites" className="flex items-center gap-3 group">
                  <ArrowLeft className="w-5 h-5 text-amber-900 group-hover:text-amber-500 transition-all" />
                  <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-amber-900 group-hover:text-amber-500 transition-all">Expedientes</span>
                </Link>

                <div className="flex items-center gap-4">
                   <div className="hidden md:flex items-center gap-2 px-4 py-1.5 border border-amber-900/30 rounded-full bg-amber-950/20">
                     <Gavel className="w-4 h-4 text-amber-600" />
                     <span className="text-[10px] font-bold tracking-widest text-amber-100 uppercase">SALA DE JUICIO</span>
                   </div>
                </div>
              </div>
            </header>

            {/* ===== HERO SECTION WITH VIDEO BACKGROUND ===== */}
            <section className="relative w-full h-screen flex items-center justify-center pt-20 overflow-hidden">
               {/* Video Background */}
               <div className="absolute inset-0 z-0">
                 <video 
                   autoPlay 
                   muted 
                   loop 
                   playsInline 
                   className="w-full h-full object-cover grayscale brightness-[0.3] contrast-125"
                 >
                   <source src="/videos/comites/padrino.mp4" type="video/mp4" />
                 </video>
                 {/* Cinematic Overlays */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0604] via-transparent to-[#0a0604]/80" />
                 <div className="absolute inset-0 bg-[#3a2012]/10 mix-blend-overlay" />
               </div>

               <div className="relative z-10 text-center px-6 max-w-5xl">
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                 >
                   <div className="flex items-center justify-center gap-4 mb-8">
                     <div className="h-[1px] w-12 bg-amber-600/30" />
                     <span className="text-amber-600 font-serif italic text-sm md:text-xl tracking-[0.2em]">Corte Especial de Justicia</span>
                     <div className="h-[1px] w-12 bg-amber-600/30" />
                   </div>

                   <h1 className="text-6xl md:text-[9rem] font-serif font-black tracking-[-0.05em] leading-[0.85] mb-8 text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                     JUICIO DEL <br />
                     <span className="text-amber-600 italic">PADRINO</span>
                   </h1>

                   <p className="text-amber-100/40 text-xs md:text-base max-w-xl mx-auto font-light leading-relaxed tracking-widest uppercase italic mb-12">
                     "La ley es una vara de medir, pero la justicia es un pacto de honor."
                   </p>

                   {/* Modalities Labels */}
                   <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                      {["Magistrados", "Jurados", "Defensa", "Fiscalía"].map((role, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <span className="text-[10px] font-bold text-amber-600/60 uppercase tracking-widest">{role}</span>
                          <div className="w-1 h-1 bg-amber-600/40 rounded-full mt-2" />
                        </div>
                      ))}
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   animate={{ y: [0, 10, 0] }} 
                   transition={{ duration: 3, repeat: Infinity }} 
                   className="mt-16 flex justify-center"
                 >
                   <ChevronRight className="w-6 h-6 rotate-90 text-amber-600/30" />
                 </motion.div>
               </div>
            </section>

            {/* ===== CONTEXT SECTION ===== */}
            <section className="relative w-full py-40 px-6 bg-[#0a0604] border-t border-amber-900/10">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center mb-24">
                  <div className="w-16 h-16 bg-amber-600/5 rounded-full flex items-center justify-center border border-amber-600/20 mb-6 focus-within:">
                    <History className="w-8 h-8 text-amber-600 animate-pulse" />
                  </div>
                  <h3 className="text-amber-600 font-serif text-sm tracking-[0.5em] uppercase">Expediente Judicial</h3>
                  <div className="w-1 h-20 bg-gradient-to-b from-amber-600/40 to-transparent mt-6" />
                </div>

                <div className="space-y-16 text-center">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-white/80 text-2xl md:text-4xl leading-[1.6] md:leading-[1.4] transition-all"
                  >
                    Jurados, magistrados, defensa y fiscalía. Un juicio que definirá el 
                    <span className="text-amber-600 italic"> destino de un imperio criminal </span> 
                    bajo el peso implacable de la ley.
                  </motion.p>

                  <div className="py-20 relative">
                     <div className="absolute inset-0 bg-amber-600/[0.03] blur-[150px] rounded-full" />
                     <p className="text-amber-100/40 text-base md:text-2xl font-light italic leading-relaxed max-w-2xl mx-auto">
                       El Padrino Calabrés se enfrenta a la justicia, y con él, toda una tradición de linaje y OMERTA. ¿Qué pesará más en la balanza? ¿La evidencia o el respeto?
                     </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== ROLES / SEALS SECTION ===== */}
            <section className="max-w-7xl mx-auto px-6 py-32 border-t border-amber-900/10">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Corte Suprema", n: "Magistrados", d: "Guardianes de la legalidad y la sentencia final." },
                   { t: "Voz del Pueblo", n: "Jurados", d: "Determinando la culpabilidad tras los rumores." },
                   { t: "Muro de Silencio", n: "Defensa", d: "Protegiendo el honor de la familia ante el estado." },
                   { t: "El Peso de la Ley", n: "Fiscalía", d: "Desmantelando décadas de dominio criminal." }
                 ].map((seal, i) => (
                   <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="group flex flex-col items-center text-center p-8 bg-[#150d0a] border border-amber-900/20 rounded-[2.5rem] hover:border-amber-600/40 transition-all duration-500"
                   >
                     <div className="w-16 h-16 rounded-full border border-amber-900/40 border-dashed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Award className="w-8 h-8 text-amber-900 group-hover:text-amber-600 transition-colors" />
                     </div>
                     <span className="text-amber-600/40 text-[9px] font-bold uppercase tracking-[0.3em] mb-2">{seal.t}</span>
                     <h4 className="text-xl md:text-2xl font-serif text-white mb-4">{seal.n}</h4>
                     <p className="text-white/20 text-xs leading-relaxed">{seal.d}</p>
                   </motion.div>
                 ))}
               </div>
            </section>

            {/* ===== FOOTER CTA ===== */}
            <footer className="w-full py-40 border-t border-amber-900/10 flex flex-col items-center bg-black/20">
               <div className="relative mb-12">
                 <div className="absolute inset-0 bg-amber-600/10 blur-[80px] rounded-full" />
                 <Scale className="w-16 h-16 text-amber-600/30" />
               </div>
               <h2 className="text-3xl md:text-6xl font-serif font-black tracking-tight mb-12 text-white uppercase">El Veredicto te espera</h2>
               
               <button className="px-14 py-5 bg-amber-700 hover:bg-amber-600 text-[#0a0604] font-black rounded-lg transition-all shadow-[0_20px_60px_rgba(217,119,6,0.1)] hover:shadow-[0_25px_80px_rgba(217,119,6,0.25)] uppercase tracking-[0.2em] text-sm md:text-base flex items-center gap-4">
                 Explorar Guía de Juicio
                 <FileText className="w-5 h-5" />
               </button>

               <div className="mt-20 flex items-center gap-8 text-amber-900/30 text-[9px] uppercase tracking-[0.5em] font-black">
                <Link href="/comites" className="hover:text-amber-600 transition-colors">Volver a Selección</Link>
                <span>|</span>
                <Link href="/" className="hover:text-amber-100 transition-colors">Portal KAMEMUN</Link>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
