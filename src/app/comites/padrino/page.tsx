"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import NextLink from "next/link";
import { 
  ArrowLeft, Gavel, Scale, Library, BookOpen, 
  ShieldCheck, FileText, ChevronDown, Lock, Users, 
  Search, Award, Scroll, Shield, Briefcase, 
  FileSearch, Database, Fingerprint, Activity, Landmark,
  Menu, X, Paperclip, Share2, ClipboardList
} from "lucide-react";

/* ===== COMPONENTE: MENÚ PREMIUM GLASSMORPHISM ===== */
function FloatingNav({ onSelect }: { onSelect: (id: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const options = [
    { id: "intro", label: "Inicio", icon: Activity },
    { id: "expediente", label: "El Caso", icon: FileSearch },
    { id: "tribunal", label: "La Sala", icon: Gavel },
  ];

  return (
    <div className="fixed bottom-10 left-10 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 left-0 flex flex-col gap-3 items-start">
            {options.map((opt, i) => (
              <motion.button
                key={opt.id}
                initial={{ opacity: 0, y: 30, x: -30, rotate: -15 }}
                animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                onClick={() => {
                  onSelect(opt.id);
                  setIsOpen(false);
                }}
                className="group flex items-center gap-4 bg-slate-900/60 border border-cyan-500/30 backdrop-blur-3xl px-6 py-4 rounded-2xl shadow-[0_15px_40px_rgba(6,182,212,0.15)] transition-all hover:bg-cyan-500 hover:text-black active:scale-90"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-black group-hover:bg-black group-hover:text-cyan-500 transition-colors">
                   <opt.icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-black tracking-widest uppercase">{opt.label}</span>
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden ${
          isOpen ? "bg-white text-black" : "bg-black/40 border border-cyan-500/50 backdrop-blur-xl text-cyan-400"
        }`}
      >
        <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-500/30 animate-pulse" />
        <AnimatePresence mode="wait">
           {isOpen ? <X key="x" className="w-6 h-6" /> : <Menu key="m" className="w-6 h-6" />}
        </AnimatePresence>
        
        {/* Digital Scan Line */}
        {!isOpen && (
          <motion.div 
            animate={{ y: [-30, 30] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-[1px] bg-cyan-500/50 blur-[2px] opacity-40"
          />
        )}
      </motion.button>
    </div>
  );
}

/* ===== COMPONENTE: DOSSIER DE EVIDENCIA (FOLIO DESIGN) ===== */
function EvidenceDossier({ title, role, description, icon: Icon, id }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, rotate: 0.5 }}
      className="relative group bg-[#0d1117] border border-white/5 rounded-3xl overflow-hidden p-10 flex flex-col gap-6 shadow-[0_30px_70px_rgba(0,0,0,0.4)] transition-all cursor-default"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')] group-hover:opacity-[0.05] transition-opacity" />
      
      <div className="flex items-start justify-between">
        <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-inner">
          <Icon className="w-8 h-8 text-cyan-400" />
        </div>
        <div className="flex flex-col items-end">
           <span className="text-[10px] font-mono text-cyan-600 font-bold uppercase tracking-widest">{id}</span>
           <Paperclip className="w-5 h-5 text-slate-800 mt-2" />
        </div>
      </div>

      <div>
        <h4 className="text-3xl font-black text-white tracking-tight uppercase group-hover:text-cyan-400 transition-colors leading-none mb-3">{title}</h4>
        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-md">
           <p className="text-[9px] font-bold text-cyan-500 tracking-[0.2em] uppercase">{role}</p>
        </div>
      </div>

      <p className="text-slate-400 text-[18px] leading-[1.8] font-light italic border-l-2 border-slate-900 pl-6 group-hover:border-cyan-900 transition-all">
        "{description}"
      </p>

      <div className="mt-4 pt-6 border-t border-white/[0.03] flex items-center justify-between">
         <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500/30" />
            <div className="w-2 h-2 rounded-full bg-slate-800" />
            <div className="w-2 h-2 rounded-full bg-slate-800" />
         </div>
         <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest">EXPEDIENTE SELLADO</span>
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
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#020408] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden pb-48">
      
      {/* TEXTURE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/p6.png')] blur-[1px]" />
      <div className="fixed inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.06)_0%,transparent_70%)]" />

      {/* LOADING: SECURE ACCESS */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 z-[2000] bg-[#020408] flex flex-col items-center justify-center p-10 text-center"
          >
            <div className="relative mb-14">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="absolute -inset-10 border border-cyan-500/20 rounded-full"
               />
               <div className="w-24 h-24 rounded-full border-2 border-cyan-500/30 flex items-center justify-center bg-cyan-500/5 shadow-[0_0_60px_rgba(6,182,212,0.25)]">
                  <Fingerprint className="w-12 h-12 text-cyan-400" />
               </div>
            </div>
            <motion.h2 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-[11px] font-mono tracking-[1.8em] text-cyan-500 uppercase font-black"
            >
              Autenticando Acceso...
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <nav className="fixed top-0 w-full z-[120] p-8 md:p-14 pointer-events-none flex justify-between items-center">
            <NextLink href="/" className="pointer-events-auto flex items-center gap-4 py-4 px-10 bg-black/60 border border-white/5 backdrop-blur-2xl rounded-2xl group hover:border-cyan-500 transition-all shadow-2xl">
              <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:-translate-x-1 transition-all" />
              <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 group-hover:text-white">VOLVER AL CENTRO</span>
            </NextLink>
          </nav>

          <FloatingNav onSelect={scrollTo} />

          {/* HERO: TRIBUNAL DIGITAL V2 */}
          <section id="intro" className="relative w-full h-screen flex items-center justify-center overflow-hidden px-8">
            <div className="absolute inset-0 z-0">
               <video 
                 autoPlay 
                 muted 
                 loop 
                 playsInline 
                 className="w-full h-full object-cover grayscale brightness-[0.2] contrast-[1.2]"
               >
                 <source src="/videos/comites/juicio.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-transparent to-[#020408]" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#020408_90%)]" />
            </div>

            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center max-w-5xl text-center">
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                 className="mb-10 p-3 px-10 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center gap-6 shadow-2xl"
               >
                 <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                 <span className="text-[11px] font-mono tracking-[0.5em] text-cyan-200 uppercase font-black">EXPEDIENTE CALABRIA: 2030-J</span>
               </motion.div>

               <h1 className="text-[15vw] md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12 drop-shadow-[0_0_80px_rgba(6,182,212,0.4)]">
                 JUICIO <br />
                 <span className="text-cyan-500 italic mix-blend-screen opacity-90">EL PADRINO</span>
               </h1>
               
               <p className="text-xl md:text-3xl text-slate-400 font-light leading-relaxed max-w-3xl px-6 italic font-serif">
                 "Bajo el asedio de la ley, el linaje más oscuro enfrenta su veredicto final."
               </p>

               <div className="mt-20 flex flex-wrap justify-center gap-10">
                  <div className="flex flex-col items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-500/10 transition-all">
                       <Users className="w-5 h-5 text-slate-600 group-hover:text-cyan-400" />
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest group-hover:text-white transition-colors">Individual: Jurados</p>
                  </div>
                  <div className="flex flex-col items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-500/10 transition-all">
                       <Briefcase className="w-5 h-5 text-slate-600 group-hover:text-cyan-400" />
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest group-hover:text-white transition-colors">Agencia: Defensa</p>
                  </div>
               </div>
            </motion.div>
          </section>

          {/* SECCIÓN: EL TÓPICO (EVIDENCE STREAM) */}
          <section id="expediente" className="relative py-48 md:py-80 px-10 bg-[#020408]">
             <div className="max-w-6xl mx-auto space-y-48">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
                   <div className="space-y-12">
                      <div className="flex items-center gap-6">
                         <div className="w-20 h-[2px] bg-cyan-600" />
                         <span className="text-cyan-500 font-mono text-[11px] font-black uppercase tracking-[0.8em]">INVESTIGACIÓN ABIERTA</span>
                      </div>
                      
                      <h2 className="text-[12vw] md:text-[7rem] font-black text-white leading-none uppercase tracking-tighter">EL <span className="text-cyan-500 italic">TÓPICO.</span></h2>

                      <div className="space-y-10 text-slate-400 text-2xl font-light leading-[1.8] text-justify md:text-left">
                         <p className="first-letter:text-7xl first-letter:font-black first-letter:text-cyan-500 first-letter:mr-3 first-letter:float-left">
                           Tras décadas de operar desde las sombras, la estructura de la mafia calabresa enfrenta su golpe más devastador. La captura del <span className="text-white font-bold italic">“Padrino”</span> ha llevado al banquillo de los acusados al cerebro detrás de una red masiva de evasión y empresas fantasma.
                         </p>
                         <p>
                           El hallazgo de pruebas clave durante la reciente crisis de seguridad ha puesto al descubierto cómo el liderazgo infiltró los sistemas legales para lavar activos, desafiando ahora la capacidad del Estado para sostener un veredicto bajo el rigor del debido proceso.
                         </p>
                      </div>
                   </div>

                   {/* POLAROID EVIDENCE GALLERY */}
                   <div className="relative pt-20 md:pt-0">
                      <div className="sticky top-48">
                         <motion.div 
                           initial={{ rotate: -5, x: -20, opacity: 0 }}
                           whileInView={{ rotate: 2, x: 0, opacity: 1 }}
                           transition={{ duration: 1 }}
                           className="relative aspect-[3/4] w-full max-w-[400px] bg-slate-100 p-6 pb-24 shadow-[0_50px_100px_rgba(0,0,0,0.6)] group"
                         >
                           <img src="/images/comites/padrino-a.jpg" className="w-full h-full object-cover grayscale brightness-50 contrast-125" alt="Evidencia A" />
                           <div className="absolute top-0 right-0 p-4">
                              <Paperclip className="w-10 h-10 text-slate-800" />
                           </div>
                           <div className="absolute bottom-6 left-6 right-6">
                              <p className="text-black font-mono text-[14px] font-bold uppercase tracking-widest border-t border-slate-300 pt-4 opacity-70">REF: SCENE_01_CAL</p>
                              <p className="text-slate-400 text-[10px] font-bold mt-2 uppercase">CONFIDENCIAL • JUNIO 2030</p>
                           </div>
                           <div className="absolute top-10 left-10 p-2 bg-red-600 text-white font-mono text-[10px] font-black uppercase tracking-[0.5em] -rotate-12 border-2 border-red-800">EVIDENCIA</div>
                         </motion.div>

                         <motion.div 
                           initial={{ rotate: 5, x: 20, opacity: 0 }}
                           whileInView={{ rotate: -5, x: 0, opacity: 1 }}
                           transition={{ duration: 1, delay: 0.3 }}
                           className="absolute top-40 right-[-20px] aspect-[4/5] w-[70%] bg-slate-100 p-5 pb-20 shadow-2xl z-10 hidden md:block"
                         >
                           <img src="/images/comites/padrino-b.jpg" className="w-full h-full object-cover grayscale brightness-75" alt="Evidencia B" />
                           <div className="absolute bottom-5 left-5 right-5">
                              <p className="text-black font-mono text-[12px] font-bold uppercase border-t border-slate-300 pt-3 opacity-60">REF: DOC_BANK_44</p>
                           </div>
                         </motion.div>
                      </div>
                   </div>
                </div>
                
                <p className="text-3xl md:text-5xl font-serif italic text-white text-center max-w-4xl mx-auto border-y border-white/5 py-24 leading-relaxed">
                   "Lo que se determine en esta sala resonará mucho más allá del tribunal. <span className="text-cyan-500">¿Preparados?</span>"
                </p>
             </div>
          </section>

          {/* SECCIÓN: LA SALA (DOSSIERS TÁCTILES) */}
          <section id="tribunal" className="relative py-48 px-10 bg-[#080a0c] border-t border-white/5">
             <div className="max-w-[1900px] mx-auto">
                <div className="flex flex-col items-center text-center mb-48">
                   <h2 className="text-8xl md:text-[12rem] font-black text-white uppercase italic tracking-tighter leading-none mb-10 opacity-80">La Sala</h2>
                   <div className="w-48 h-1 bg-cyan-600/30 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                   {[
                     { title: "Magistrados", role: "Justicia", icon: Landmark, id: "CAL-01-M", desc: "Autoridad suprema que dictará la sentencia capaz de desmantelar décadas de jerarquía calabresa." },
                     { title: "Fiscalía", role: "Investigación", icon: Search, id: "CAL-02-F", desc: "El martillo del Estado encargado de presentar la evidencia financiera técnica recopilada." },
                     { title: "Defensa", role: "Debido Proceso", icon: Shield, id: "CAL-03-D", desc: "Protectores del rigor legal para asegurar que la condena sea justa y sostenga el escrutinio judicial." },
                     { title: "Jurado", role: "Soberanía", icon: Users, id: "CAL-04-J", desc: "Representantes ciudadanos que decidirán si el Padrino está o no por encima de la ley." }
                   ].map((actor, idx) => (
                     <div key={idx}>
                        <EvidenceDossier {...actor} />
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* FOOTER: TERMINAL DE DATOS */}
          <section id="lex" className="py-64 px-10 bg-black border-t-2 border-cyan-900/20">
             <div className="max-w-6xl mx-auto flex flex-col items-center">
                
                <div className="mb-48 text-center max-w-3xl space-y-10 px-6">
                   <div className="inline-flex items-center gap-4 mb-4">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      <span className="text-[11px] font-mono font-bold text-cyan-700 uppercase tracking-widest">Base de Datos LEX</span>
                   </div>
                   <h2 className="text-6xl md:text-[8rem] font-black text-white uppercase tracking-tighter leading-none">ARCHIVOS <br /> <span className="text-cyan-600">CENTRALES.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-64">
                   {[
                     { label: "Guía Académica", icon: BookOpen, desc: "Protocolo técnico" },
                     { label: "Reglamento", icon: Scroll, desc: "Normas de sala" },
                     { label: "Estatutos", icon: Database, desc: "Ley fundamental" }
                   ].map((item, i) => (
                     <button key={i} className="group relative flex flex-col p-16 rounded-[2.5rem] bg-[#0a0c10] border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all transition-all duration-500 active:scale-95 text-left">
                        <div className="w-14 h-14 rounded-2xl bg-black border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                           <item.icon className="w-6 h-6 text-cyan-600 group-hover:text-current" />
                        </div>
                        <h4 className="text-xl font-black text-white uppercase tracking-wider mb-2">{item.label}</h4>
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.desc}</p>
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 scale-50 group-hover:scale-100 transition-all">
                           <ClipboardList className="w-24 h-24 text-white" />
                        </div>
                     </button>
                   ))}
                </div>

                {/* FINAL SEAL */}
                <div className="flex flex-col items-center pt-32 w-full">
                   <div className="relative group cursor-pointer mb-16">
                      <div className="absolute -inset-10 bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-28 h-28 rounded-full border border-slate-900 flex items-center justify-center opacity-20 group-hover:opacity-100 group-hover:border-cyan-900 transition-all">
                         <Fingerprint className="w-12 h-12 text-slate-700 group-hover:text-cyan-900" />
                      </div>
                   </div>
                   <p className="text-[12px] font-mono text-slate-800 tracking-[3.5em] uppercase italic pb-48 text-center px-4">KAMEMUN 2030 • DEPARTAMENTO DE JUSTICIA</p>
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
