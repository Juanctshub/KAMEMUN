"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Scale, Gavel, Users, ShieldAlert, 
  History, FileText, Lock, Volume2, Award,
  ChevronRight, Sparkles, Target, Globe,
  ShieldCheck, AlertTriangle, Zap, Download,
  Crosshair, Skull, FileDigit, Landmark
} from "lucide-react";

/* ===== CINEMATIC OMERTA LOADER V2 ===== */
function OmertaLoader({ onComplete }: { onComplete: () => void }) {
  const [status, setStatus] = useState("AUTENTICANDO...");

  useEffect(() => {
    const statuses = [
      "AUTENTICANDO...",
      "SISTEMA OMERTA ACTIVO",
      "CARGANDO ARCHIVOS DE CALABRIA...",
      "ACCESO CONCEDIDO"
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < statuses.length - 1) {
        i++;
        setStatus(statuses[i]);
      }
    }, 1000);
    const endTimer = setTimeout(onComplete, 4500);
    return () => {
      clearInterval(interval);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(40px)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[300] bg-[#050302] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] mixture-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scale-150" />
      </div>

      <motion.div
        initial={{ rotate: -5, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Wax Seal Animation */}
        <motion.div
           initial={{ scale: 3, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.5, type: "spring", damping: 15 }}
           className="mb-12 relative w-32 h-32 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-red-600/20 blur-[50px] rounded-full animate-pulse" />
          <div className="w-24 h-24 border-[3px] border-red-700/40 rounded-full flex items-center justify-center rotate-45 group">
             <Skull className="w-12 h-12 text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-red-900/30 rounded-full" 
          />
        </motion.div>

        <h3 className="text-red-900 font-mono text-[10px] tracking-[0.8em] uppercase mb-4 animate-pulse">
          {status}
        </h3>
        <h2 className="text-white font-serif text-3xl md:text-6xl font-black tracking-[0.3em] uppercase mb-2">
          L'NDRANGHETA
        </h2>
        
        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-red-900 to-transparent mt-6" />
      </motion.div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-radial-gradient(circle, transparent 30%, black 100%)" />
      <div className="absolute bottom-10 left-10 text-red-900/20 font-mono text-[8px] uppercase tracking-widest hidden md:block leading-loose">
        Protocolo: OM_2030_CALABRIA<br />
        Ubicación: 38.1157° N, 15.6514° E<br />
        Estado: CRÍTICO
      </div>
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
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full"
          >
            {/* Ultra-Premium Navbar */}
            <header className="fixed top-0 w-full z-[100] py-8 px-6 md:px-12 pointer-events-none">
              <div className="max-w-[1920px] mx-auto flex items-center justify-between pointer-events-auto">
                <Link href="/comites" className="group flex items-center gap-4 py-2 px-5 bg-black/40 border border-white/5 backdrop-blur-3xl rounded-full transition-all hover:bg-red-950/20 hover:border-red-950/40">
                  <ArrowLeft className="w-4 h-4 text-red-900 group-hover:text-red-500 transition-all" />
                  <span className="text-[9px] font-black tracking-[0.4em] uppercase text-white/40 group-hover:text-white transition-all">Expedientes</span>
                </Link>

                <div className="flex items-center gap-4">
                   <div className="px-6 py-2 bg-gradient-to-r from-red-950/40 to-transparent border-l-2 border-red-600 backdrop-blur-md">
                     <span className="text-[9px] font-black tracking-[0.5em] text-red-500 uppercase">OMERTA 2030 // AMENAZA NIVEL 5</span>
                   </div>
                </div>
              </div>
            </header>

            {/* HERO CINEMÁTICO: EL HONOR Y LA SANGRE */}
            <section className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden">
               {/* Video Background Layer With Deep Parallax */}
               <motion.div 
                 style={{ y: "10%" }}
                 className="absolute inset-0 z-0"
               >
                 <video 
                   autoPlay 
                   muted 
                   loop 
                   playsInline 
                   className="w-full h-full object-cover scale-110 grayscale brightness-[0.2] contrast-[1.4] saturate-50"
                 >
                   <source src="/videos/comites/padrino.mp4" type="video/mp4" />
                 </video>
                 {/* Intense Shadows and Fog */}
                 <div className="absolute inset-0 bg-gradient-to-b from-[#050302] via-transparent to-[#050302]" />
                 <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, #050302 90%)" />
                 <div className="absolute inset-0 bg-red-950/10 mix-blend-color-burn" />
               </motion.div>

               <div className="relative z-10 text-center px-6 pt-20">
                 <motion.div
                   initial={{ opacity: 0, y: 50, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                 >
                   <div className="flex items-center justify-center gap-4 mb-8">
                     <div className="w-12 h-[1px] bg-red-900/40" />
                     <span className="text-red-600 font-mono text-[11px] tracking-[0.8em] uppercase italic">Familia . Honor . Sangre</span>
                     <div className="w-12 h-[1px] bg-red-900/40" />
                   </div>

                   {/* ARREGLADO: TÍTULO EN UNA SOLA PIEZA TIPO MARCA */}
                   <h1 className="text-7xl md:text-[14rem] font-serif font-black tracking-[-0.07em] leading-none mb-4 md:mb-0 text-white select-none pointer-events-none drop-shadow-[0_20px_80px_rgba(0,0,0,1)]">
                     L'NDRANGHETA
                   </h1>
                   
                   <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="flex flex-col items-center mt-[-1rem] md:mt-[-3rem]"
                   >
                     <h2 className="text-red-700 font-serif italic text-2xl md:text-6xl tracking-[-0.02em] font-light shadow-red-950">
                       La Tormenta de los 2030
                     </h2>
                     <div className="w-[1px] h-32 bg-gradient-to-b from-red-600 to-transparent mt-12 opacity-40 shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
                   </motion.div>
                 </motion.div>
               </div>

               {/* Side Elements (HUD) */}
               <div className="absolute inset-y-0 left-12 flex flex-col justify-center gap-12 text-[8px] font-mono text-white/5 tracking-[0.4em] uppercase [writing-mode:vertical-rl] rotate-180 hidden xl:flex">
                 <span>Protocolo_Ndrangeta_V4</span>
                 <span>ID_Calabria_Secuencial_0092</span>
               </div>
            </section>

            {/* NARRATIVA HISTÓRICA: EL DOSSIER FÍSICO */}
            <section className="relative w-full py-60 px-6">
              <div className="max-w-6xl mx-auto space-y-72">
                
                {/* ACTO 1: EL PUNTO DE INFLEXIÓN */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative"
                  >
                    <span className="text-red-600 font-mono text-[10px] tracking-[0.6em] mb-6 block font-black underline underline-offset-[12px] decoration-red-900/50">ACTO I // EL DESPERTAR</span>
                    <h3 className="text-white text-4xl md:text-6xl font-serif font-black leading-tight tracking-tight mb-8">
                      El año 2030 marca el <span className="text-red-600 italic">punto de quiebre...</span>
                    </h3>
                    <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
                      Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="relative group aspect-square bg-[#0a0706] border border-red-900/20 p-2 rounded-lg shadow-2xl overflow-hidden"
                  >
                     <img 
                       src="https://images.unsplash.com/photo-1518005020411-382029323c94?q=80&w=2072&auto=format&fit=crop" 
                       alt="Calabria Dark" 
                       className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-all duration-[8s]"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                     <div className="absolute bottom-10 left-10 text-red-500 font-mono text-[9px] tracking-widest uppercase">EVIDENCIA #019_CALABRIA</div>
                  </motion.div>
                </div>

                {/* ACTO 2: GUERRA DE DESGASTE */}
                <div className="relative py-24 px-12 md:px-24 bg-[#0a0706]/40 border-y border-red-950/20">
                   <div className="absolute -left-1 w-2 h-full bg-red-700/20 shadow-[0_0_30px_rgba(220,38,38,0.1)]" />
                   <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-3xl ml-auto text-right"
                   >
                     <span className="text-red-600 font-mono text-[10px] tracking-[0.6em] mb-8 block font-black">ACTO II // LA DESINTEGRACIÓN</span>
                     <p className="text-white/80 text-2xl md:text-5xl font-serif leading-[1.3] mb-12">
                       Mafias euroasiáticas han iniciado una <span className="text-red-600 italic">guerra de desgaste</span> para desmantelar el monopolio calabrés.
                     </p>
                     <p className="text-white/30 text-base md:text-xl font-light leading-relaxed max-w-2xl ml-auto">
                       Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero. Las familias deben decidir: unidad absoluta o el exterminio individual.
                     </p>
                   </motion.div>
                </div>

                {/* ACTO 3: EL CÓDIGO DE HONOR */}
                <div className="text-center py-40">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative inline-block px-12 py-20 border-x border-red-900/10"
                  >
                    <Quote className="w-20 h-20 text-red-900/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <p className="text-white/50 text-xl md:text-3xl font-serif italic font-light italic leading-loose max-w-4xl">
                      "No se trata solo de proteger las rutas comerciales, sino de gestionar una crisis interna donde los negocios entre clanes y los <span className="text-white font-black not-italic underline decoration-red-600 underline-offset-8">pactos de sangre</span> son la única moneda de cambio."
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* CONSEJO DE FAMILIAS: EL "SINDICATO" */}
            <section className="w-full py-40 px-6 bg-[#030201] border-t border-red-950/10">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-32 text-center">
                  <div className="w-16 h-[1px] bg-red-800 mb-8" />
                  <h2 className="text-5xl md:text-8xl font-serif font-black text-white italic tracking-tighter mb-4">L'Onorata Società</h2>
                  <p className="text-red-600 font-mono text-[11px] tracking-[0.8em] uppercase">Estructura de Poder Calabria 2030</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { n: "Pelle-Vottari", r: "NARCO-FINANZAS", icon: Globe, c: "Dominio de la logística transatlántica." },
                    { n: "Nirta-Strangio", r: "BRAZO ARMADO", icon: Crosshair, c: "Guardianes de la tradición y el acero." },
                    { n: "Piromalli-Molè", r: "INFRAESTRUCTURA", icon: Landmark, c: "Control total de puertos y aduanas." },
                    { n: "De Stefano", r: "POLÍTICA", icon: ShieldAlert, c: "Infiltración en las capas del estado." }
                  ].map((clan, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -10, backgroundColor: "rgba(127, 29, 29, 0.05)" }}
                      className="group p-10 bg-[#0a0706] border border-white/5 rounded-[3rem] transition-all duration-500 flex flex-col items-center text-center"
                    >
                      <div className="w-12 h-12 rounded-full border border-red-900/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <clan.icon className="w-5 h-5 text-red-900 group-hover:text-red-500 transition-colors" />
                      </div>
                      <span className="text-red-700 text-[8px] font-black tracking-[0.4em] mb-4 uppercase italic">ID: CLAN_{i+1}</span>
                      <h4 className="text-2xl font-serif text-white mb-6 group-hover:text-red-500 transition-colors uppercase tracking-widest">{clan.n}</h4>
                      <p className="text-white/30 text-[10px] leading-relaxed mb-6 font-mono tracking-widest uppercase">{clan.r}</p>
                      <div className="w-1 h-1 bg-red-950 rounded-full group-hover:bg-red-500 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* FOOTER CINEMÁTICO: LA SENTENCIA */}
            <footer className="w-full py-60 bg-black border-t border-red-950/20 flex flex-col items-center justify-center text-center px-6">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="relative mb-24"
               >
                 <div className="absolute inset-0 bg-red-700/10 blur-[100px] rounded-full" />
                 <h2 className="text-6xl md:text-[10rem] font-serif font-black text-white/90 tracking-tighter leading-none mb-8">
                   ¿UNIDAD O <br /><span className="text-red-800 italic">DESTRUCCIÓN?</span>
                 </h2>
                 <p className="text-red-100/20 font-mono text-[10px] md:text-xs tracking-[0.6em] uppercase">El imperio calabrés decide su destino bajo tu mando.</p>
               </motion.div>

               <button className="group relative px-16 py-6 bg-red-800 hover:bg-red-700 text-white font-black rounded-lg transition-all shadow-[0_20px_80px_rgba(153,27,27,0.3)] hover:shadow-[0_20px_100px_rgba(220,38,38,0.5)] uppercase tracking-[0.3em] text-sm flex items-center gap-6 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                 INICIAR OPERACIÓN
                 <Download className="w-5 h-5 animate-bounce" />
               </button>

               <div className="mt-32 flex flex-col md:flex-row items-center gap-12 text-zinc-800 text-[9px] font-black tracking-[0.5em] uppercase">
                <Link href="/comites" className="hover:text-red-900 transition-colors">Volver al Hub</Link>
                <div className="hidden md:block w-1.5 h-1.5 bg-zinc-900 rounded-full" />
                <Link href="/" className="hover:text-white transition-colors">Digitalizar Protocolos</Link>
               </div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Quote(props: any) {
  return (
    <svg 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      {...props}
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.3137 7.31371 21 4 21H1ZM3 5V6H6V15H3L3 21H4C6.20914 21 8 19.2091 8 17V7C8 5.89543 7.10457 5 6 5H3Z" />
    </svg>
  );
}
