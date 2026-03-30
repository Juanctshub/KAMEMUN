"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Gavel, Scale, Library, BookOpen, 
  ShieldCheck, FileText, ChevronDown, Lock, Users, 
  Search, Award, Scroll, Shield, Briefcase, 
  FileSearch, Database, Fingerprint, Activity, Landmark,
  Menu, X, LayoutDashboard, FileArchive
} from "lucide-react";

/* ===== COMPONENTE: BOTÓN FLOTANTE (FAB NAV) ===== */
function FloatingNav({ onSelect }: { onSelect: (id: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const options = [
    { id: "intro", label: "Inicio", icon: Activity },
    { id: "expediente", label: "El Caso", icon: FileSearch },
    { id: "tribunal", label: "La Sala", icon: Gavel },
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-20 right-0 flex flex-col gap-4 items-end">
            {options.map((opt, i) => (
              <motion.button
                key={opt.id}
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 10, x: 10 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => {
                  onSelect(opt.id);
                  setIsOpen(false);
                }}
                className="flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all group active:scale-95"
              >
                <span className="text-[10px] font-black tracking-widest uppercase">{opt.label}</span>
                <opt.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-2xl ${
          isOpen ? "bg-white text-black" : "bg-blue-600 text-white shadow-[0_0_40px_rgba(37,99,235,0.5)]"
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </motion.button>
    </div>
  );
}

/* ===== COMPONENTE: DOSSIER DE EVIDENCIA (CARD) ===== */
function EvidenceDossier({ title, role, description, icon: Icon, id }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative group bg-[#0a0c10] border border-slate-800/50 rounded-2xl overflow-hidden p-8 flex flex-col gap-6 shadow-2xl transition-all hover:border-blue-500/30"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <Icon className="w-24 h-24 text-white" />
      </div>
      
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
          <Icon className="w-8 h-8 text-blue-400" />
        </div>
        <div>
          <h4 className="text-2xl font-bold text-white tracking-tight uppercase">{title}</h4>
          <p className="text-[10px] font-mono text-blue-500/70 tracking-[0.3em] uppercase">{role}</p>
        </div>
      </div>

      <p className="text-slate-400 text-[16px] leading-relaxed font-light">
        {description}
      </p>

      <div className="mt-4 pt-6 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-600 tracking-widest uppercase">REF: {id}</span>
      </div>
    </motion.div>
  );
}

export default function PadrinoPage() {
  const [isLoading, setIsLoading] = useState(true);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#020408] text-slate-300 selection:bg-blue-600/30 font-sans overflow-x-hidden">
      
      {/* LOADING SCREEN: DIGITAL SCAN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[2000] bg-[#020408] flex flex-col items-center justify-center p-10 text-center"
          >
            <div className="relative w-32 h-32 mb-10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-blue-500 rounded-full"
              />
              <Scale className="absolute inset-0 m-auto w-12 h-12 text-blue-500/50" />
            </div>
            <h2 className="text-[12px] font-mono tracking-[1.5em] text-blue-400 uppercase font-black">Escaneando Evidencias...</h2>
            <div className="mt-10 w-64 h-[2px] bg-slate-900 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-blue-500 shadow-[0_0_20px_white]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <nav className="fixed top-0 w-full z-[120] p-8 md:p-14 pointer-events-none flex justify-between items-center">
            <NextLink href="/" className="pointer-events-auto flex items-center gap-4 py-3 px-8 bg-black/50 border border-white/5 backdrop-blur-md rounded-full group hover:border-blue-500 transition-all">
              <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-blue-500" />
              <span className="text-[9px] font-black tracking-widest uppercase text-slate-400 group-hover:text-white">REGRESAR</span>
            </NextLink>
          </nav>

          <FloatingNav onSelect={scrollTo} />

          {/* HERO: TRIBUNAL DIGITAL */}
          <section id="intro" className="relative w-full h-screen flex items-center justify-center overflow-hidden px-10">
            <div className="absolute inset-0 z-0 h-full w-full">
               <video 
                 autoPlay 
                 muted 
                 loop 
                 playsInline 
                 className="w-full h-full object-cover grayscale brightness-[0.2] contrast-[1.1]"
               >
                 <source src="/videos/comites/juicio.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020408]/50 to-[#020408]" />
            </div>

            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center max-w-4xl text-center">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                 className="mb-8 p-3 px-8 bg-blue-600/10 border border-blue-500/30 rounded-full flex items-center gap-4"
               >
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
                 <span className="text-[10px] font-mono tracking-[0.5em] text-blue-300 uppercase font-black tracking-tighter">CASE-ID: CALABRIA-2030</span>
               </motion.div>

               <h1 className="text-[15vw] md:text-[9rem] font-black text-white leading-none tracking-tighter uppercase mb-10 drop-shadow-[0_0_80px_rgba(37,99,235,0.3)]">
                 JUICIO <br />
                 <span className="text-blue-500 italic">EL PADRINO</span>
               </h1>
               
               <p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl px-6">
                 "Ningún linaje está por encima de la ley. El banquillo de los acusados espera al cerebro de la red más hermética del mundo."
               </p>

               <div className="mt-16 flex flex-wrap justify-center gap-6">
                  <div className="px-6 py-3 border border-slate-800 rounded-xl bg-slate-950/50 backdrop-blur-md">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Jurados / Magistrados</p>
                    <p className="text-white font-mono text-[11px] font-black tracking-[0.5em]">Modalidad Individual</p>
                  </div>
                  <div className="px-6 py-3 border border-slate-800 rounded-xl bg-slate-950/50 backdrop-blur-md">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Defensa / Fiscalía</p>
                    <p className="text-white font-mono text-[11px] font-black tracking-[0.5em]">Modalidad de Agencia</p>
                  </div>
               </div>
            </motion.div>
          </section>

          {/* SECCIÓN: EL TÓPICO (CONTENIDO REAL) */}
          <section id="expediente" className="relative py-32 md:py-64 px-10 bg-[#020408]">
             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-[2px] bg-blue-500" />
                      <h2 className="text-[10vw] md:text-[5rem] font-black text-white leading-none uppercase tracking-tighter">EL <span className="text-blue-500 italic">TÓPICO.</span></h2>
                   </div>
                   
                   <div className="space-y-8 text-slate-400 text-xl font-light leading-relaxed text-justify">
                      <p>
                        Tras décadas de operar desde las sombras, la estructura de la mafia calabresa enfrenta su golpe más devastador con el inicio del proceso judicial contra su máximo líder. La captura del <span className="text-white font-bold italic">“Padrino”</span>, tras una compleja investigación internacional, ha llevado al banquillo de los acusados al cerebro detrás de una red de evasión fiscal, empresas fantasma y asociación ilícita.
                      </p>
                      <p>
                        El hallazgo de pruebas clave durante la reciente crisis de seguridad ha puesto al descubierto cómo el liderazgo calabrés infiltró los sistemas legales para lavar activos de origen incierto, desafiando ahora la capacidad del Estado para sostener un veredicto de culpabilidad bajo el rigor del debido proceso.
                      </p>
                      <p className="italic border-l-2 border-blue-500/50 pl-6 text-blue-300">
                        "El éxito del proceso depende de la validez de la evidencia técnica y la protección de la cadena de custodia frente a posibles intentos de corrupción."
                      </p>
                      <p className="text-white font-serif italic text-2xl pt-6">
                         ¿Lo que se determine en esta sala resonará mucho más allá del tribunal. ¿Preparados?
                      </p>
                   </div>
                </div>

                {/* EVIDENCE PHOTOS */}
                <div className="relative flex flex-col gap-10">
                   <motion.div 
                     whileHover={{ rotate: -2, scale: 1.05 }}
                     className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0a0c10] rotate-2"
                   >
                     <img src="/images/comites/padrino-a.jpg" className="w-full h-full object-cover grayscale brightness-50" alt="Evidencia A" />
                     <div className="absolute top-4 left-4 p-2 px-6 bg-red-600 text-white font-mono text-[10px] font-black uppercase tracking-widest -rotate-6">EVIDENCIA A</div>
                   </motion.div>
                   
                   <motion.div 
                     whileHover={{ rotate: 2, scale: 1.05 }}
                     className="relative aspect-[3/4] w-[70%] self-end -mt-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0a0c10] -rotate-3 z-10"
                   >
                     <img src="/images/comites/padrino-b.jpg" className="w-full h-full object-cover grayscale brightness-50" alt="Evidencia B" />
                     <div className="absolute top-4 left-4 p-2 px-6 bg-red-600 text-white font-mono text-[10px] font-black uppercase tracking-widest rotate-3">EVIDENCIA B</div>
                   </motion.div>
                </div>
             </div>
          </section>

          {/* SECCIÓN: EL TRIBUNAL (ACTORES) */}
          <section id="tribunal" className="relative py-32 md:py-64 px-10 bg-[#05070a]/50">
             <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-32">
                   <h2 className="text-8xl md:text-[11rem] font-black text-white uppercase italic tracking-tighter leading-none mb-6">La Sala</h2>
                   <p className="text-slate-500 font-mono text-[12px] tracking-[2em] uppercase font-black opacity-40">Mazo vs Defensa</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   {[
                     { title: "Magistrados", role: "Veredicto", icon: Landmark, id: "TRIB-A1", desc: "Autoridad máxima encargada de salvaguardar el debido proceso y dictar la sentencia final." },
                     { title: "Fiscalía", role: "Estado", icon: Gavel, id: "TRIB-B2", desc: "El equipo técnico encargado de desmantelar la estructura financiera de la organización." },
                     { title: "Defensa", role: "Protección", icon: ShieldCheck, id: "TRIB-C3", desc: "Encargados de asegurar que la captura no vulnere los derechos fundamentales del acusado." },
                     { title: "Jurado", role: "Civil", icon: Users, id: "TRIB-D4", desc: "Representación de la sociedad que decidirá la culpabilidad basándose en los hechos." }
                   ].map((actor, idx) => (
                     <EvidenceDossier key={idx} {...actor} />
                   ))}
                </div>
             </div>
          </section>

          {/* RECURSOS LEX (FOOTER) */}
          <section id="lex" className="py-48 px-10 bg-black border-t border-white/5">
             <div className="max-w-6xl mx-auto flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-48">
                   {[
                     { label: "Guía Académica", icon: BookOpen },
                     { label: "Reglamento", icon: Scroll },
                     { label: "Estatutos", icon: Database }
                   ].map((item, i) => (
                     <button key={i} className="group flex flex-col items-center gap-10 p-24 bg-[#0a0c10] border border-white/5 rounded-[3rem] hover:bg-white hover:text-black transition-all shadow-2xl active:scale-95">
                        <item.icon className="w-8 h-8 text-blue-500 group-hover:text-black" />
                        <span className="text-[11px] font-black tracking-[1.2em] uppercase text-slate-400 group-hover:text-black">{item.label}</span>
                     </button>
                   ))}
                </div>

                <div className="flex flex-col items-center opacity-30 pt-48 border-t border-white/5 w-full">
                   <Fingerprint className="w-14 h-14 mb-10 text-slate-800" />
                   <p className="text-[10px] font-mono text-slate-700 tracking-[3em] uppercase italic pb-48">Sello Técnico • KAMEMUN 2030</p>
                </div>
             </div>
          </section>

        </>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
