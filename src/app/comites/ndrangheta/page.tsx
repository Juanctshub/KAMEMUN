"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Scale, Gavel, Users, ShieldAlert, 
  History, FileText, Lock, Volume2, Award,
  ChevronRight, Sparkles, Target, Globe,
  ShieldCheck, AlertTriangle, Zap, Download
} from "lucide-react";

/* ===== CINEMATIC OMERTA LOADER ===== */
function OmertaLoader({ onComplete }: { onComplete: () => void }) {
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
      <div className="absolute inset-0 opacity-20 contrast-125 grayscale mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] bg-repeat" />
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="mb-12 relative">
          <motion.div
             initial={{ y: -20, opacity: 0 }}
             animate={{ y: 0, opacity: 0.4 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="absolute -top-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-16 bg-gradient-to-t from-red-600 to-transparent" />
          </motion.div>
          <Target className="w-16 h-16 text-red-600/80 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]" />
        </div>

        <h2 className="text-white font-serif text-4xl md:text-7xl font-black tracking-[0.2em] uppercase mb-4 text-center">
          L'NDRANGHETA
        </h2>
        
        <AnimatePresence>
          {showSubtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 font-serif italic text-lg md:text-2xl tracking-widest mt-2"
            >
              Operazione Omertà 2030
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 2, duration: 2 }}
          className="h-[1px] bg-red-600/30 mt-12 w-24"
        />
      </motion.div>

      <div className="absolute inset-0 bg-radial-gradient(circle, transparent 40%, black 100%)" />
    </motion.div>
  );
}

/* ===== MAIN NDRANGHETA PAGE ===== */
export default function NdranghetaPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#050302] text-[#e5d5c5] selection:bg-red-900 selection:text-white font-serif overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <OmertaLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full"
          >
            {/* Nav */}
            <header className="fixed top-0 w-full z-50 flex justify-center py-6 px-4 border-b border-red-900/10 bg-black/40 backdrop-blur-3xl">
              <div className="w-full max-w-7xl flex items-center justify-between">
                <Link href="/comites" className="flex items-center gap-3 group">
                  <ArrowLeft className="w-5 h-5 text-red-900 group-hover:text-red-500 transition-all" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-900 group-hover:text-red-500 transition-all">Archivos</span>
                </Link>

                <div className="flex items-center gap-2 px-4 py-1.5 bg-red-900/10 border border-red-500/10 rounded-full">
                  <Target className="w-3.5 h-3.5 text-red-500" />
                  <span className="text-[9px] font-black tracking-widest text-red-400">MIXTO / AGENCIA</span>
                </div>
              </div>
            </header>

            {/* Video Hero */}
            <section className="relative w-full h-screen flex items-center justify-center pt-20 overflow-hidden">
               <div className="absolute inset-0 z-0">
                 <video 
                   autoPlay 
                   muted 
                   loop 
                   playsInline 
                   className="w-full h-full object-cover grayscale brightness-[0.25] contrast-125 saturate-50"
                 >
                   <source src="/videos/comites/padrino.mp4" type="video/mp4" />
                 </video>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050302] via-transparent to-[#050302]/90" />
                 <div className="absolute inset-0 bg-red-950/10 mix-blend-overlay" />
               </div>

               <div className="relative z-10 text-center px-6 max-w-5xl">
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1.5 }}
                 >
                   <span className="text-red-600 font-mono text-[10px] tracking-[0.6em] uppercase mb-6 block">CRISIS // CALABRIA</span>
                   <h1 className="text-6xl md:text-[9.5rem] font-serif font-black tracking-[-0.05em] leading-[0.85] mb-8 text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
                     L'NDRAN<br />
                     <span className="text-red-700 italic">GHETA</span>
                   </h1>
                   <p className="text-red-100/30 text-[10px] md:text-sm max-w-xl mx-auto font-light leading-relaxed tracking-[0.4em] uppercase italic mb-12">
                     "¿Unidad o destrucción? El imperio calabrés decide su destino…"
                   </p>
                 </motion.div>
               </div>
            </section>

            {/* Narrative Sections */}
            <section className="relative w-full py-40 px-6 bg-[#050302]">
              <div className="max-w-4xl mx-auto space-y-40">
                {/* Bloque 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                   <span className="text-red-900 font-mono text-[9px] tracking-[0.5em] mb-4 block underline underline-offset-8">CAPÍTULO I: LA TORMENTA</span>
                   <p className="text-white/90 text-2xl md:text-4xl font-serif leading-[1.5] tracking-tight">
                    El año <span className="text-red-600 italic">2030</span> marca el punto de inflexión para la organización criminal más hermética del planeta. Tras décadas de dominio absoluto sobre el tráfico transatlántico, se enfrenta a una ofensiva judicial sin precedentes.
                   </p>
                </motion.div>

                {/* Bloque 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-8 md:pl-20 border-l border-red-900/20"
                >
                   <span className="text-red-900 font-mono text-[9px] tracking-[0.5em] mb-4 block">CAPÍTULO II: EL ASIDIO</span>
                   <p className="text-white/50 text-xl md:text-2xl font-light leading-[1.8]">
                    Los fantasmas del pasado han despertado. Mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual.
                   </p>
                </motion.div>

                {/* Bloque 3 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-red-950/5 border border-red-900/10 p-12 rounded-[3rem] text-center"
                >
                   <p className="text-red-100/70 text-lg md:text-xl font-light italic leading-relaxed max-w-2xl mx-auto">
                     "No se trata solo de proteger las rutas comerciales, sino de gestionar una crisis interna donde los negocios entre clanes y los pactos de sangre son la única moneda de cambio."
                   </p>
                </motion.div>
              </div>
            </section>

            {/* Council of Clans (Section from previous logic but classic styled) */}
            <section className="w-full py-32 px-6 border-t border-red-900/10">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-4">El Consejo de Familias</h2>
                    <p className="text-red-900 font-mono text-xs tracking-widest uppercase">Estructura de Poder 2030</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { n: "Pelle-Vottari", r: "Narcotráfico Global", d: "Controladores de la 'Ruta de la Seda' blanca. Su logística es la columna vertebral financiera del grupo." },
                    { n: "Nirta-Strangio", r: "Seguridad y Acero", d: "Los guardianes de San Luca. Poseen el brazo armado más sofisticado y leal de toda Italia." },
                    { n: "Piromalli-Molè", r: "Finanzas y Puerto", d: "Dominan Gioia Tauro. Han infiltrado cada nivel de la economía legal europea." },
                    { n: "De Stefano", r: "Diplomacia y Redes", d: "El puente entre el submundo y el poder político. Gestionan los hilos invisibles de la organización." }
                  ].map((clan, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="group bg-[#0c0807] border border-red-900/10 p-10 rounded-[2rem] hover:border-red-600/30 transition-all"
                    >
                      <span className="text-red-900 text-[9px] font-bold tracking-[0.4em] uppercase block mb-4 italic">CLAN // {clan.n}</span>
                      <h4 className="text-2xl md:text-3xl font-serif text-white mb-4 group-hover:text-red-500 transition-colors">{clan.n}</h4>
                      <div className="flex items-center gap-2 mb-6">
                         <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                         <span className="text-[10px] text-red-100/40 uppercase tracking-widest font-bold">{clan.r}</span>
                      </div>
                      <p className="text-white/30 text-sm leading-relaxed">{clan.d}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tactical Map (Section from previous logic but classic styled) */}
            <section className="w-full py-32 px-6 border-t border-red-900/10">
               <div className="max-w-7xl mx-auto">
                 <div className="relative h-[400px] md:h-[600px] w-full bg-[#0c0807] rounded-[3rem] border border-red-900/10 overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                      alt="Tactical Map"
                      className="w-full h-full object-cover grayscale brightness-50 opacity-20 group-hover:scale-105 transition-transform duration-[10s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0807] to-transparent" />
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                       <Globe className="w-20 h-20 text-red-900/20 mx-auto mb-6" />
                       <h3 className="text-3xl md:text-5xl font-serif text-white/40 font-black tracking-tighter uppercase">Hegemonía en Disputa</h3>
                    </div>

                    {/* Simple points */}
                    <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
                    <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
                 </div>
               </div>
            </section>

            {/* Footer / CTA */}
            <footer className="w-full py-40 bg-[#050302] border-t border-red-900/10 flex flex-col items-center">
               <div className="mb-12">
                 <Award className="w-16 h-16 text-red-900/20" />
               </div>
               <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-12 text-center">UNIDAD O <span className="text-red-700 italic">DESTRUCCIÓN</span></h2>
               
               <button className="flex items-center gap-4 px-12 py-5 bg-red-700 hover:bg-red-600 text-white font-black rounded-xl transition-all shadow-2xl hover:scale-105 uppercase tracking-widest text-sm">
                 Descargar Guía de Crisis
                 <Download className="w-5 h-5" />
               </button>

               <div className="mt-24 space-x-12">
                 <Link href="/comites" className="text-red-900 text-[10px] font-bold tracking-[0.4em] hover:text-red-500 transition-colors uppercase">Seleccionar Otro Comité</Link>
               </div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
