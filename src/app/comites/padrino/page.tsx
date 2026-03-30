"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Gavel, Scale, Library, BookOpen, 
  ShieldCheck, FileText, ChevronDown, Lock, Users, 
  Search, Award, Scroll, Shield, Briefcase, 
  FileSearch, Database, Fingerprint, Activity, Landmark
} from "lucide-react";

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
        <span className="text-[10px] font-mono text-slate-600 tracking-widest uppercase">ID: {id}</span>
        <button className="text-[10px] font-black text-blue-500 hover:text-white transition-colors tracking-widest uppercase border-b border-blue-500/20 pb-1">Ver Expediente</button>
      </div>
    </motion.div>
  );
}

/* ===== COMPONENTE: SCAB BAR (NAVIGATION) ===== */
function EvidenceTabs({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  const tabs = [
    { id: "intro", label: "Inicio", icon: Activity },
    { id: "expediente", label: "Evidencias", icon: FileSearch },
    { id: "tribunal", label: "Tribunal", icon: Gavel },
    { id: "lex", label: "Dossier", icon: Database },
  ];

  return (
    <div className="fixed top-28 left-1/2 -translate-x-1/2 z-[100] w-[90vw] md:w-auto overflow-x-auto scrollbar-hide">
      <div className="bg-[#05070a]/80 border border-white/5 backdrop-blur-3xl rounded-full p-2 flex items-center gap-2 whitespace-nowrap shadow-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            className={`px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all flex items-center gap-3 ${
              active === tab.id ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PadrinoPage() {
  const [activeTab, setActiveTab] = useState("intro");
  const [isLoading, setIsLoading] = useState(true);

  const scrollTo = (id: string) => {
    setActiveTab(id);
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

          <EvidenceTabs active={activeTab} onSelect={scrollTo} />

          {/* HERO: TRIBUNAL DIGITAL */}
          <section id="intro" className="relative w-full h-[110vh] md:h-screen flex items-center justify-center overflow-hidden px-8">
            <div className="absolute inset-0 z-0 scale-110 md:scale-100">
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
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,#020408_100%)]" />
            </div>

            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="mb-8 p-3 px-8 bg-blue-600/10 border border-blue-500/30 rounded-full flex items-center gap-4"
               >
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
                 <span className="text-[10px] font-mono tracking-[0.5em] text-blue-300 uppercase font-black">SISTEMA JUDICIAL ACTIVO</span>
               </motion.div>

               <div className="text-center">
                  <h1 className="text-[15vw] md:text-[9rem] font-black text-white leading-none tracking-tighter uppercase mb-6 drop-shadow-[0_0_60px_rgba(37,99,235,0.2)]">
                    JUICIO <br />
                    <span className="text-blue-500 italic opacity-90">PADRINO</span>
                  </h1>
                  <p className="text-lg md:text-2xl font-light text-slate-400 tracking-[0.2em] uppercase italic opacity-70">"Dura lex, sed lex"</p>
               </div>

               <div className="mt-20 md:mt-32 w-[1px] h-32 bg-gradient-to-b from-blue-500 to-transparent animate-bounce opacity-30" />
            </motion.div>
          </section>

          {/* SECCIÓN: EXPEDIENTE DE EVIDENCIAS */}
          <section id="expediente" className="relative py-32 md:py-64 px-8 overflow-hidden">
             <div className="max-w-6xl mx-auto">
                <div className="flex flex-col gap-10 mb-32">
                   <h2 className="text-[10vw] md:text-[6rem] font-black text-white leading-none uppercase tracking-tighter">EL <span className="text-blue-500 italic">ARCHIVO.</span></h2>
                   <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl">
                     Décadas de operaciones en la sombra salen a la luz. Una red transatlántica de lavado de activos y empresas fantasma ha sido desmantelada, enfrentando ahora el juicio más importante del siglo.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#0a0c10] to-[#020408] border border-white/5 relative group overflow-hidden shadow-2xl">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                         <FileText className="w-48 h-48 text-white" />
                      </div>
                      <ShieldCheck className="w-12 h-12 text-blue-500 mb-10" />
                      <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Evasión Fiscal Masiva</h3>
                      <p className="text-slate-400 text-lg font-light leading-relaxed">
                        Se han recuperado más de 400 terabytes de documentos fiscales que vinculan cuentas en el extranjero con la cúpula calabresa.
                      </p>
                   </div>
                   
                   <div className="p-12 md:p-16 rounded-[3rem] border-2 border-dashed border-slate-800 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-blue-500/50 transition-all bg-black/40 shadow-inner">
                      <div className="p-8 rounded-full bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform shadow-2xl">
                         <Lock className="w-10 h-10 text-slate-600 group-hover:text-blue-400" />
                      </div>
                      <p className="mt-8 text-[11px] font-mono tracking-[1.5em] text-slate-600 uppercase font-black group-hover:text-white transition-colors">Dato Clasificado</p>
                   </div>
                </div>
             </div>
          </section>

          {/* SECCIÓN: EL TRIBUNAL (ACTORES) */}
          <section id="tribunal" className="relative py-32 md:py-64 px-8 bg-[#05070a]/50">
             <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-48">
                   <h2 className="text-7xl md:text-[9rem] font-black text-white uppercase italic tracking-tighter leading-none mb-4">La Sala</h2>
                   <div className="h-1 w-48 bg-blue-600/40 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   {[
                     { title: "Magistrados", role: "Veredicto", icon: Landmark, id: "TRIB-A1", desc: "Autoridad máxima encargada de salvaguardar el debido proceso y dictar la sentencia final." },
                     { title: "Fiscalía", role: "Estado", icon: Gavel, id: "TRIB-B2", desc: "El equipo técnico encargado de desmantelar la estructura financiera de la organización." },
                     { title: "Defensa", role: "Protección", icon: ShieldCheck, id: "TRIB-C3", desc: "Encargados de asegurar que la captura no vulnere los derechos fundamentales del acusado." },
                     { title: "Jurado", role: "Civil", icon: Users, id: "TRIB-D4", desc: "Representación de la sociedad que decidirá la culpabilidad basándose en los hechos." }
                   ].map((actor, idx) => (
                     <div key={idx}>
                        <EvidenceDossier {...actor} />
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* SECCIÓN: RECURSOS LEX (DOSSIER) */}
          <section id="lex" className="py-32 md:py-64 px-8 border-t border-white/5 bg-black">
             <div className="max-w-6xl mx-auto flex flex-col items-center">
                <div className="mb-32 text-center max-w-2xl px-4">
                   <h2 className="text-5xl md:text-8xl font-black text-white uppercase mb-8">El Dossier</h2>
                   <p className="text-slate-500 text-lg font-light leading-relaxed">Documentación oficial, reglamentos y guías académicas necesarias para el ejercicio del derecho en este proceso.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-32">
                   {[
                     { label: "Guía Académica", icon: BookOpen },
                     { label: "Reglamento", icon: Scroll },
                     { label: "Anexos", icon: Library }
                   ].map((item, i) => (
                     <button key={i} className="group flex flex-col items-center gap-10 p-20 bg-[#0a0c10] border border-white/5 rounded-3xl hover:bg-white hover:text-black transition-all shadow-2xl active:scale-95">
                        <div className="w-14 h-14 flex items-center justify-center text-blue-500 group-hover:text-black">
                           <item.icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-black tracking-[0.8em] uppercase text-slate-400 group-hover:text-black">{item.label}</span>
                     </button>
                   ))}
                </div>

                {/* FOOTER: EVIDENCE SEAL */}
                <div className="flex flex-col items-center pt-32 border-t border-white/5 w-full">
                   <div className="w-32 h-32 rounded-full border border-slate-800 flex items-center justify-center mb-10 opacity-20">
                      <Fingerprint className="w-14 h-14" />
                   </div>
                   <p className="text-[10px] font-mono text-slate-700 tracking-[3em] uppercase italic pb-48">Propiedad Técnica • KAMEMUN 2030</p>
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
