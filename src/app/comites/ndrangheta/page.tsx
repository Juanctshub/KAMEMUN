"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Shield, AlertTriangle, Fingerprint, 
  Dna, Lock, Zap, MousePointer2, Activity,
  Database, LayoutGrid, BarChart3, ChevronRight,
  Sparkles, Scale, Skull
} from "lucide-react";

/* ===== BIOMETRIC LOADER COMPONENT ===== */
function BiometricLoader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const steps = [
    "IDENTIFICANDO LINAJE...",
    "ESCANEO DE ADN: CALABRIA-7",
    "VERIFICANDO CÓDIGO OMERTA...",
    "ACCESO ENCRIPTADO: NIVEL CAPO",
    "BIENVENIDO A CASA..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Laser line scan */}
      <motion.div
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-red-600/40 shadow-[0_0_20px_rgba(220,38,38,0.8)] z-10"
      />

      {/* Cyber Background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* DNA Anim */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-12"
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            <Fingerprint className="w-24 h-24 text-red-600/30 absolute animate-pulse" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-red-600/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-red-600/10 rounded-full"
            />
          </div>
        </motion.div>

        {/* Text Sequence */}
        <div className="text-center w-full min-h-[4rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
              className="text-red-500 font-mono text-sm md:text-base tracking-[0.3em] uppercase bold"
            >
              {steps[step]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-64 h-[1px] bg-white/5 relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.5, ease: "linear" }}
            className="absolute h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ===== MAIN NDRANGHETA PAGE ===== */
export default function NdranghetaPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-red-800 selection:text-white font-sans overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <BiometricLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full"
          >
            {/* ===== STICKY HUD NAVIGATION ===== */}
            <header className="fixed top-0 w-full z-50 flex justify-center py-6 px-4 md:px-8 border-b border-white/[0.03] bg-black/40 backdrop-blur-3xl">
              <div className="w-full max-w-7xl flex items-center justify-between">
                <Link href="/comites" className="flex items-center gap-3 group">
                  <ArrowLeft className="w-5 h-5 text-white/30 group-hover:text-red-500 transition-all group-hover:-translate-x-1" />
                  <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors">Volver a Archivos</span>
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                  <div className="hidden lg:flex flex-col items-end">
                    <span className="text-[8px] font-mono text-red-500/50 uppercase tracking-[0.2em]">Localización actual</span>
                    <span className="text-[10px] font-mono text-white/40">38.1157° N, 15.6439° E (CALABRIA)</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10 hidden lg:block" />
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-950/20 border border-red-500/10 rounded-full">
                    <Shield className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                    <span className="text-[9px] font-black tracking-widest text-red-400">STATUS: CRISIS_2030</span>
                  </div>
                </div>
              </div>
            </header>

            {/* ===== HERO SECTION ===== */}
            <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
              {/* Image with overlay */}
              <div className="absolute inset-0 z-0 bg-black">
                <Image 
                  src="/images/comites/ndrangheta-bg.png" 
                  alt="Villa L'Ndrangheta 2030" 
                  fill 
                  className="object-cover opacity-60 grayscale scale-[1.05]"
                  priority
                />
                {/* Vignette & Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90" />
              </div>

              {/* HUD OVERLAY ELEMENTS */}
              <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-30">
                {/* Crosshairs & Lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[0.5px] border-white/5" />
                <div className="absolute top-1/4 left-0 right-0 h-[0.5px] bg-white/10" />
                <div className="absolute bottom-1/4 left-0 right-0 h-[0.5px] bg-white/10" />
                
                {/* Coordinates Corner */}
                <div className="absolute top-32 left-8 md:left-12 font-mono text-[9px] flex flex-col gap-1 text-red-500 animate-pulse">
                  <span>// SYSTEM_LOG_2030</span>
                  <span>{">> ENCRYPTED_FEED_ON"}</span>
                  <span>{">> [38.1157, 15.6439]"}</span>
                </div>

                {/* Money Flows (abstract lines) */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-32 right-12 w-48 h-20 border-r border-b border-white/10" 
                />
              </div>

              {/* Main Content */}
              <div className="relative z-20 text-center max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-red-500 font-mono text-[10px] md:text-sm tracking-[0.6em] uppercase mb-4 md:mb-6">CÓDIGO DE HONOR // CALABRIA</p>
                  <h1 className="text-6xl md:text-[8rem] lg:text-[11rem] font-serif font-black tracking-tighter leading-[0.8] mb-8 text-white drop-shadow-[0_0_80px_rgba(255,255,255,0.1)]">
                    L'NDR<span className="text-transparent border-t border-b border-white/20 px-2 italic font-light opacity-80" style={{ WebkitTextStroke: "1px white" }}>AN</span>GHETA
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 1 }}
                  className="flex flex-col items-center gap-10"
                >
                  <p className="text-white/40 text-xs md:text-lg max-w-2xl font-light leading-relaxed tracking-wide italic">
                    "En esta familia, el primer pacto es la sangre. El último es la muerte."
                  </p>
                  
                  {/* Crisis Status Box */}
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 px-10 py-6 md:py-8 bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl rounded-2xl md:rounded-full">
                    <div className="flex flex-col items-center md:items-start">
                      <span className="text-[8px] font-black tracking-[0.4em] uppercase text-red-500/60 mb-1">Integridad del Clan</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "88%" }}
                            transition={{ delay: 2.5, duration: 2 }}
                            className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                          />
                        </div>
                        <span className="text-xs font-mono font-bold">88%</span>
                      </div>
                    </div>
                    
                    <div className="w-[1px] h-8 bg-white/10 hidden md:block" />

                    <div className="flex flex-col items-center md:items-start">
                      <span className="text-[8px] font-black tracking-[0.4em] uppercase text-white/30 mb-1">Presión Judicial</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                        <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">CRÍTICA</span>
                      </div>
                    </div>
                  </div>

                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-8">
                    <ChevronRight className="w-6 h-6 rotate-90 text-white/20" />
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* ===== CONTEXT SECTION ===== */}
            <section className="relative w-full py-32 px-6 flex flex-col items-center">
              {/* Background text decoration */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[15rem] font-serif font-black text-white/[0.02] pointer-events-none select-none tracking-tighter">
                CRISIS
              </div>

              <div className="max-w-4xl w-full">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-12 h-[1px] bg-red-600" />
                  <p className="text-red-500 font-mono text-xs tracking-[0.5em] uppercase">Expediente No. 3027-CR</p>
                </div>

                <div className="space-y-16 relative">
                  {/* The actual storytelling text from the user */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-white/80 text-xl md:text-3xl font-serif leading-[1.6] md:leading-[1.8]"
                  >
                    El año <span className="text-white font-black">2030</span> marca el punto de inflexión para la organización criminal más hermética del planeta. Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la <span className="text-red-500 italic">’Ndrangheta</span> se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía. 
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-white/60 text-lg md:text-2xl font-light leading-[1.8] pl-0 md:pl-20 border-l border-white/5"
                  >
                    Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero. El conflicto ha escalado más allá de las fronteras italianas; mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés.
                  </motion.p>

                  {/* Featured Statement */}
                  <div className="py-20 relative text-center">
                    <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full" />
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black tracking-tighter text-red-500 drop-shadow-2xl">
                      ¿Unidad o <span className="text-white">Destrucción?</span>
                    </h2>
                    <p className="mt-6 text-white/30 font-mono text-[10px] tracking-[0.6em] uppercase underline underline-offset-8">El imperio calabrés decide su destino…</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== CLANS / DOSSIER PREVIEW ===== */}
            <section className="w-full h-96 flex flex-col items-center justify-center border-y border-white/[0.03] bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
               <div className="flex flex-col items-center">
                 <Lock className="w-12 h-12 text-white/10 mb-6" />
                 <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 uppercase tracking-widest">Dossier Bloqueado</h3>
                 <p className="text-white/20 text-xs md:text-sm tracking-[0.3em] font-light">PROCESANDO DATOS DEL CONSEJO...</p>
                 <motion.div
                   animate={{ opacity: [0.2, 1, 0.2] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                   className="mt-8 flex gap-2"
                 >
                   {[0, 1, 2, 3].map(i => <div key={i} className="w-2 h-2 bg-red-600/40 rounded-full" />)}
                 </motion.div>
               </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="w-full py-20 px-6 flex flex-col items-center border-t border-white/5">
              <div className="w-20 h-20 md:w-24 md:h-24 relative mb-12 opacity-20 grayscale">
                <Image src="/images/logo-oficial.png" alt="KAMEMUN" fill className="object-contain" />
              </div>
              <div className="flex items-center gap-8 text-white/20 text-[10px] uppercase tracking-[0.4em] font-black">
                <Link href="/comites" className="hover:text-red-500 transition-colors">Menú de Comités</Link>
                <span>|</span>
                <Link href="/" className="hover:text-white transition-colors">Volver a Inicio</Link>
              </div>
              <p className="mt-12 text-[10px] font-mono text-white/10">AUTHENTICATION_TAG: 512-SHA-NDR-2030</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
