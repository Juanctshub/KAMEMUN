"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Shield, AlertTriangle, Fingerprint, 
  Lock, Activity, ChevronRight, Sparkles, Scale, 
  Skull, Users, MapPin, Globe, FileText, Download,
  ExternalLink, Layers, EyeOff, Target
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
      <motion.div
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-red-600/40 shadow-[0_0_20px_rgba(220,38,38,0.8)] z-10"
      />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative flex flex-col items-center">
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
          </div>
        </motion.div>

        <div className="text-center w-full min-h-[4rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
              className="text-red-500 font-mono text-sm md:text-base tracking-[0.3em] uppercase"
            >
              {steps[step]}
            </motion.p>
          </AnimatePresence>
        </div>

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

const clans = [
  { 
    name: "Clan Pelle-Vottari", 
    role: "Narcotráfico Global", 
    status: "Lealtad: 92%", 
    desc: "Controlan los puertos clave de Calabria y el flujo transatlántico.",
    id: "01",
    hue: "rgba(220, 38, 38, 0.1)"
  },
  { 
    name: "Clan Nirta-Strangio", 
    role: "Lavado de Activos", 
    status: "Lealtad: 84%", 
    desc: "Operan la red financiera en Alemania y el norte de Europa.",
    id: "02",
    hue: "rgba(185, 28, 28, 0.1)"
  },
  { 
    name: "Clan Pesce-Bellocco", 
    role: "Seguridad y Armas", 
    status: "Lealtad: 79%", 
    desc: "Mantienen el orden interno y el control territorial del puerto de Gioia Tauro.",
    id: "03",
    hue: "rgba(153, 27, 27, 0.1)"
  },
  { 
    name: "La Santa (Órgano Superior)", 
    role: "Gobierno Interno", 
    status: "Lealtad: 100%", 
    desc: "El consejo supremo que decide la vida y muerte de cada miembro.",
    id: "04",
    hue: "rgba(127, 29, 29, 0.1)"
  }
];

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
            className="w-full pb-32"
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
                    <span className="text-[9px] font-black tracking-widest text-red-400 uppercase">STATUS: CRISIS_2030</span>
                  </div>
                </div>
              </div>
            </header>

            {/* ===== HERO SECTION ===== */}
            <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
              <div className="absolute inset-0 z-0 bg-black">
                <Image 
                  src="/images/comites/ndrangheta-bg.png" 
                  alt="Villa L'Ndrangheta 2030" 
                  fill 
                  className="object-cover opacity-60 grayscale scale-[1.05]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-transparent to-[#050505]/95" />
              </div>

              {/* HUD OVERLAY ELEMENTS */}
              <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[0.5px] border-white/5" />
                <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-red-500/10" />
                
                <div className="absolute top-32 left-8 md:left-12 font-mono text-[9px] flex flex-col gap-1 text-red-500 animate-pulse">
                  <span>// SYSTEM_LOG_2030</span>
                  <span>{">> ENCRYPTED_FEED_ON"}</span>
                  <span>{">> SECURITY_CLEARANCE_ACCEPTED"}</span>
                </div>
              </div>

              <div className="relative z-20 text-center max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-red-900/20 border border-red-500/10 rounded-full">
                      <Target className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-[9px] font-black tracking-widest text-red-400">MODALIDAD: MIXTO / AGENCIA</span>
                    </div>
                  </div>
                  <p className="text-red-500 font-mono text-[10px] md:text-sm tracking-[0.6em] uppercase mb-4 md:mb-6 flex items-center justify-center gap-4">
                    <span className="w-10 h-[1px] bg-red-800" />
                    CÓDIGO DE HONOR
                    <span className="w-10 h-[1px] bg-red-800" />
                  </p>
                  <h1 className="text-6xl md:text-[8rem] lg:text-[11rem] font-serif font-black tracking-tighter leading-[0.8] mb-8 text-white">
                    L'NDR<span className="text-transparent px-2 italic font-light opacity-80" style={{ WebkitTextStroke: "1px white" }}>AN</span>GHETA
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1 }}
                  className="flex flex-col items-center gap-10"
                >
                  <p className="text-white/40 text-xs md:text-xl max-w-2xl font-light leading-relaxed tracking-widest italic uppercase">
                    "Unidad absoluta o exterminio individual."
                  </p>
                  
                  {/* Crisis Status Box */}
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 px-8 py-6 md:px-12 md:py-8 bg-white/[0.01] border border-white/[0.04] backdrop-blur-3xl rounded-3xl md:rounded-full">
                    <div className="flex flex-col items-center md:items-start min-w-[140px]">
                      <span className="text-[8px] font-black tracking-[0.4em] uppercase text-red-500/80 mb-2">Integridad del Clan</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "88%" }}
                            transition={{ delay: 2, duration: 2.5 }}
                            className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                          />
                        </div>
                        <span className="text-xs font-mono font-bold">88%</span>
                      </div>
                    </div>
                    
                    <div className="w-[1px] h-10 bg-white/5 hidden md:block" />

                    <div className="flex flex-col items-center md:items-start min-w-[140px]">
                      <span className="text-[8px] font-black tracking-[0.4em] uppercase text-white/30 mb-2">Presión Judicial</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                        <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-[0.2em]">ALERTA CRÍTICA</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ===== CONTEXT SECTION ===== */}
            <section className="relative w-full py-40 px-6 flex flex-col items-center bg-gradient-to-b from-transparent via-red-950/[0.03] to-transparent">
              <div className="max-w-4xl w-full">
                <div className="flex items-center gap-6 mb-20">
                  <Skull className="w-6 h-6 text-red-600/50" />
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-red-900/40 to-transparent" />
                  <p className="text-red-500 font-mono text-[10px] tracking-[0.4em] uppercase">EXPEDIENTE 2030 // OMERTA</p>
                </div>

                <div className="space-y-24 relative">
                  {/* Bloque 1: La Tormenta Perfecta */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <span className="text-red-600 font-mono text-[10px] tracking-[0.5em] mb-4 block">01. LA TORMENTA PERFECTA</span>
                    <p className="text-white/90 text-xl md:text-3xl font-serif leading-[1.6] md:leading-[1.8] tracking-tight">
                      El año <span className="text-red-500 font-black italic underline decoration-red-900 underline-offset-8">2030</span> marca el punto de inflexión para la organización criminal más hermética del planeta. Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía.
                    </p>
                  </motion.div>

                  {/* Bloque 2: Guerra de Desgaste */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 md:pl-20 border-l border-red-900/40"
                  >
                    <span className="text-red-600 font-mono text-[10px] tracking-[0.5em] mb-4 block">02. GUERRA DE DESGASTE</span>
                    <p className="text-white/60 text-lg md:text-2xl font-light leading-[1.8]">
                      Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero. El conflicto ha escalado más allá de las fronteras italianas; mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual.
                    </p>
                  </motion.div>

                  {/* Bloque 3: Códigos de la Vieja Escuela */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white/[0.02] p-8 md:p-12 rounded-[2rem] border border-white/5"
                  >
                    <span className="text-red-600 font-mono text-[10px] tracking-[0.5em] mb-4 block text-center">03. CÓDIGOS DE HONOR</span>
                    <p className="text-white/70 text-base md:text-xl font-light leading-[1.8] text-center max-w-2xl mx-auto">
                      No se trata solo de proteger las rutas comerciales, sino de gestionar una crisis interna donde los negocios entre clanes y los pactos de sangre son la única moneda de cambio frente a enemigos que no respetan los códigos de la vieja escuela.
                    </p>
                  </motion.div>

                  {/* Bloque Final: El Destino */}
                  <div className="py-24 text-center">
                    <motion.h2 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="text-5xl md:text-8xl font-serif font-black tracking-tighter text-red-600 mb-6"
                    >
                      ¿Unidad o <span className="text-white">Destrucción?</span>
                    </motion.h2>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-[1px] bg-red-600/20" />
                      <p className="text-white/20 font-mono text-[9px] tracking-[0.5em] uppercase">El imperio calabrés decide su destino…</p>
                      <div className="w-12 h-[1px] bg-red-600/20" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== CLANS DOSSIER SECTION ===== */}
            <section className="max-w-7xl mx-auto px-6 py-32">
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center border border-red-500/20">
                    <Users className="w-4 h-4 text-red-500" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight">El Consejo de <span className="italic text-red-500">Familias</span></h2>
                </div>
                <p className="text-white/30 text-xs md:text-sm tracking-[0.2em] font-light uppercase">Jerarquía Suprema - Nivel CAPO</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {clans.map((clan, i) => (
                  <motion.div
                    key={clan.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-red-600/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${clan.hue}, transparent)` }} />
                    <span className="absolute top-6 right-8 text-4xl font-serif font-black text-white/[0.03] group-hover:text-red-500/10 transition-colors">{clan.id}</span>
                    <p className="text-red-500 font-mono text-[9px] tracking-widest uppercase mb-2">{clan.role}</p>
                    <h4 className="text-xl font-serif font-black text-white mb-4 group-hover:text-red-500 transition-colors uppercase">{clan.name}</h4>
                    <p className="text-white/30 text-xs font-light leading-relaxed mb-8">{clan.desc}</p>
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                       <span className="text-[10px] font-bold text-white/40 tracking-widest">{clan.status}</span>
                       <Activity className="w-4 h-4 text-red-600/20 group-hover:text-red-600 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ===== MAP OF INFULENCE ===== */}
            <section className="relative w-full py-40 bg-black/40 overflow-hidden">
               <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                  <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-red-600/10 border border-red-500/20 rounded-full mb-6">
                      <Globe className="w-4 h-4 text-red-500 animate-pulse" />
                      <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-400">Rutas Transatlánticas 2030</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-serif font-black tracking-tighter mb-6">Hegemonía en <span className="italic text-red-600">Disputa</span></h2>
                    <p className="text-white/40 text-sm md:text-lg max-w-xl mx-auto font-light leading-relaxed">
                      El control del Mediterráneo y las finanzas europeas pende de un hilo digital. La red de lealtades ha sido vulnerada.
                    </p>
                  </div>

                  <div className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-white/[0.01] overflow-hidden group">
                     <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale group-hover:grayscale-0">
                       <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Global Map" fill className="object-cover" />
                     </div>
                     <div className="absolute inset-0 bg-black/60 pointer-events-none" />
                     
                     {/* Static blinking nodes */}
                     {[
                       { t: "15%", l: "48%", n: "CALABRIA" },
                       { t: "35%", l: "70%", n: "BALCANES" },
                       { t: "50%", l: "20%", n: "ATLÁNTICO" }
                     ].map((p, i) => (
                       <div key={i} className="absolute flex flex-col items-center" style={{ top: p.t, left: p.l }}>
                         <div className="w-3 h-3 bg-red-600 rounded-full animate-ping mb-2" />
                         <span className="text-[8px] font-mono text-white/50 tracking-widest">{p.n}</span>
                       </div>
                     ))}

                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="backdrop-blur-md bg-black/40 border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4">
                           <Lock className="w-5 h-5 text-red-500" />
                           <span className="text-xs font-mono text-white/60 tracking-widest uppercase">Visualización Táctica Restringida</span>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* ===== DOWNLOADS SESSION ===== */}
            <section className="w-full py-40 border-t border-white/5 text-center">
               <div className="max-w-2xl mx-auto px-6">
                 <FileText className="w-12 h-12 text-white/10 mx-auto mb-8" />
                 <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-6 uppercase">La Guía de <span className="text-red-600 italic underline decoration-red-900 underline-offset-8">Omerta</span></h2>
                 <p className="text-white/30 text-xs md:text-base font-light mb-12 tracking-wide leading-relaxed uppercase">
                   Accede al manual operativo del año 2030. Preparación para delegados, códigos de conducta y mecanismos de crisis.
                 </p>
                 <button className="group relative px-12 py-5 bg-red-700 hover:bg-red-600 text-white font-black rounded-xl transition-all shadow-[0_20px_60px_rgba(185,28,28,0.3)] hover:shadow-[0_25px_80px_rgba(185,28,28,0.5)] flex items-center gap-4 mx-auto overflow-hidden">
                    <span className="relative z-10 text-sm md:text-base uppercase tracking-widest font-black">Descargar Dossier Completo</span>
                    <Download className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 </button>
                 <p className="mt-8 text-[9px] font-mono text-white/10 tracking-[0.4em]">ENCRYPTED_SHA256: 7F8A2D...9C</p>
               </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="w-full py-20 px-6 flex flex-col items-center border-t border-white/5 bg-[#030303]">
              <div className="w-16 h-16 relative mb-12 opacity-10 grayscale">
                <Image src="/images/logo-oficial.png" alt="KAMEMUN" fill className="object-contain" />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-white/10 text-[9px] uppercase tracking-[0.5em] font-black">
                <Link href="/comites" className="hover:text-red-500 transition-colors">Volver a Selección</Link>
                <div className="hidden md:block w-2 h-2 rounded-full bg-red-950" />
                <Link href="/" className="hover:text-white transition-colors">Portal Principal</Link>
              </div>
              <p className="mt-16 text-[9px] font-mono text-white/5 opacity-50 uppercase tracking-widest">Fin de la conexión segura // KAMEMUN 2030</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
