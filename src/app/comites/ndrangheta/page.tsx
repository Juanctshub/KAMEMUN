"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Quote, Volume2, Info, Users, Gavel, X, FileText, Lock
} from "lucide-react";

/* ===== VILLA LOADER V4 (PERFECT CENTERING & TV OFF) ===== */
function VillaLoader({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState(1); // 1: Chaos, 2: Formation, 3: Steady, 4: TV Off

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const capturedCanvas = canvas;
    const capturedCtx = ctx;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 700;
    
    const resize = () => {
      capturedCanvas.width = window.innerWidth;
      capturedCanvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const getVillaPoints = () => {
      const points: {x: number, y: number}[] = [];
      const centerX = capturedCanvas.width / 2;
      // Offset Y to leave space for text below
      const centerY = capturedCanvas.height * 0.42;
      const scale = Math.min(capturedCanvas.width, capturedCanvas.height) * (window.innerWidth < 768 ? 0.38 : 0.48);

      // --- ARCHITECTURAL VILLA DRAW ---
      // Ground & Main Block
      for (let x = -0.55; x <= 0.55; x += 0.04) {
        points.push({x: centerX + x * scale, y: centerY + 0.28 * scale});
        points.push({x: centerX + x * scale, y: centerY - 0.1 * scale});
      }
      for (let y = -0.1; y <= 0.28; y += 0.04) {
        points.push({x: centerX - 0.55 * scale, y: centerY + y * scale});
        points.push({x: centerX + 0.55 * scale, y: centerY + y * scale});
      }

      // 1st Floor Arches
      for (let xOff = -0.35; xOff <= 0.35; xOff += 0.35) {
        for (let a = 0; a <= Math.PI; a += 0.2) {
          points.push({
            x: centerX + (xOff + Math.cos(a) * 0.12) * scale, 
            y: centerY + (0.05 - Math.sin(a) * 0.12) * scale
          });
        }
      }

      // Upper Floor windows
      const wY = -0.02 * scale;
      for (let xOff = -0.3; xOff <= 0.3; xOff += 0.3) {
        points.push({x: centerX + xOff * scale, y: centerY + wY});
      }

      // Tower
      for (let y = -0.55; y <= -0.1; y += 0.05) {
        points.push({x: centerX + 0.3 * scale, y: centerY + y * scale});
        points.push({x: centerX + 0.5 * scale, y: centerY + y * scale});
      }
      for (let x = 0.3; x <= 0.5; x += 0.05) points.push({x: centerX + x * scale, y: centerY - 0.55 * scale});

      // Roof
      for (let i = 0; i <= 1.05; i += 0.04) {
        points.push({x: centerX + (-0.55 + 0.55 * i) * scale, y: centerY + (-0.1 - 0.35 * i) * scale});
        points.push({x: centerX + (0.55 - 0.55 * i) * scale, y: centerY + (-0.1 - 0.35 * i) * scale});
      }

      return points;
    };

    class Particle {
      x: number; y: number;
      vx: number; vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * capturedCanvas.width;
        this.y = Math.random() * capturedCanvas.height;
        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6;
        this.size = Math.random() * 2 + 0.2;
        this.color = `rgba(255, 230, 180, ${Math.random() * 0.5 + 0.4})`;
      }

      update(phase: number, targetPoints: {x: number, y: number}[], index: number) {
        if (phase === 1) {
          this.x += this.vx; this.y += this.vy;
          if (this.x < 0 || this.x > capturedCanvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > capturedCanvas.height) this.vy *= -1;
        } else if (phase >= 2) {
          const target = targetPoints[index % targetPoints.length];
          this.x += (target.x - this.x) * 0.075;
          this.y += (target.y - this.y) * 0.075;
        }
      }

      draw() {
        capturedCtx.fillStyle = this.color;
        capturedCtx.beginPath();
        capturedCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        capturedCtx.fill();
      }
    }

    const villaPoints = getVillaPoints();
    particles = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      capturedCtx.clearRect(0, 0, capturedCanvas.width, capturedCanvas.height);
      particles.forEach((p, i) => {
        p.update(phase, villaPoints, i);
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const t1 = setTimeout(() => setPhase(2), 1500); 
    const t2 = setTimeout(() => setPhase(3), 3500);
    const t3 = setTimeout(() => setPhase(4), 4500); // TV Turn off start
    const t4 = setTimeout(onComplete, 5300);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  }, [onComplete, phase]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={phase === 4 ? { 
        height: 4, top: "50%", marginTop: -2,
        opacity: [1, 1, 1, 0],
        scaleX: [1, 1.3, 0],
        background: ["#000", "#fff", "#fff", "#000"]
      } : {}}
      transition={phase === 4 ? { duration: 0.8, times: [0, 0.2, 0.4, 1] } : {}}
      className="fixed inset-0 z-[1000] bg-[#050403] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 p-10" />
      <AnimatePresence>
        {phase < 4 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: phase === 1 ? 0 : 1 }} 
            exit={{ opacity: 0 }}
            className="z-10 mt-[35vh] text-center"
          >
            <h2 className="text-amber-500/30 font-mono text-[9px] tracking-[1.5em] uppercase mb-1">PROTOCOLO OMERTA</h2>
            <h1 className="text-white font-serif text-4xl md:text-6xl tracking-[0.4em] uppercase font-black drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              L'NDRANGHETA
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Static/Grain Overlay for TV effect */}
      {phase === 4 && (
         <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uWUic1mH6/giphy.gif')] opacity-10 mix-blend-overlay rotate-180" />
      )}
    </motion.div>
  );
}

/* ===== PREMIUIM OVERLAY (GLITCHY SOON) ===== */
function SoonOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
           className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/90 backdrop-blur-3xl"
        >
          <motion.div
            initial={{ scale: 0.8, rotateX: 45 }} animate={{ scale: 1, rotateX: 0 }} exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-md w-full p-12 bg-[#0c0a09] border border-amber-900/30 text-center rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,1)] group"
          >
             {/* Blood Seal Animation */}
             <div className="relative w-24 h-24 mx-auto mb-10">
                <div className="absolute inset-0 bg-red-800/20 blur-[30px] rounded-full group-hover:bg-red-600/40 transition-all duration-700" />
                <motion.div 
                  initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", delay: 0.2 }}
                  className="relative w-full h-full border-[2px] border-amber-500/10 rounded-full flex items-center justify-center bg-black/40"
                >
                   <Lock className="w-8 h-8 text-amber-500/40" />
                </motion.div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-red-900/80 rounded-full border-2 border-amber-500/20 flex items-center justify-center">
                   <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse" />
                </div>
             </div>

             <h3 className="text-3xl font-serif text-white mb-6 uppercase tracking-tighter italic">Acceso Denegado</h3>
             <p className="text-white/40 text-sm leading-relaxed mb-12 font-sans px-2">
               Este expediente está actualmente <span className="text-amber-500">BAJO SELLADO JUDICIAL</span>. La Omertà protege este recurso hasta la fase de apertura global.
             </p>
             <button onClick={onClose} className="w-full py-5 bg-gradient-to-r from-red-950 to-amber-950/20 border border-amber-900/30 text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase hover:text-white hover:border-white/20 transition-all rounded-2xl">
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
      
      {/* SCANLINE OVERLAY - CINEMATIC GLORY */}
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />

      <AnimatePresence>
        {isLoading && <VillaLoader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SoonOverlay isOpen={isSoonOpen} onClose={() => setIsSoonOpen(false)} />

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          
          {/* NAV */}
          <nav className="fixed top-0 w-full z-[100] p-6 pointer-events-none">
            <div className="max-w-[1920px] mx-auto flex justify-between items-center pointer-events-auto">
              <Link href="/comites" className="group flex items-center gap-4 py-2 px-6 bg-black/60 border border-white/5 backdrop-blur-3xl rounded-full hover:border-amber-500/30 transition-all shadow-2xl">
                <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100">Files</span>
              </Link>
              <div className="flex items-center gap-6">
                <div className="px-4 py-1.5 bg-amber-500/5 border border-amber-500/10 rounded-full hidden sm:block">
                  <span className="text-[8px] font-black tracking-[0.6em] text-amber-600 uppercase">CALABRIA.SEC_009</span>
                </div>
              </div>
            </div>
          </nav>

          {/* HERO WITH PARALLAX GLITCH */}
          <section className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 z-0 scale-110">
               <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.35] saturate-[0.5] contrast-[1.2]">
                  <source src="/videos/comites/padrino.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/90" />
               <div className="absolute inset-0 bg-radial-gradient(circle, transparent 10%, #050403 95%)" />
             </div>

             <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 text-center px-4 pt-20">
                <div className="inline-flex items-center gap-4 mb-10 overflow-hidden">
                   <div className="w-12 h-px bg-amber-800" />
                   <span className="text-amber-500 font-mono text-[10px] tracking-[1em] uppercase">Omerta 2030</span>
                   <div className="w-12 h-px bg-amber-800" />
                </div>

                <div className="relative group">
                   <h1 className="text-[14vw] md:text-[12rem] font-black tracking-[-0.05em] leading-[0.75] text-white drop-shadow-2xl relative">
                      L'NDRANGHETA
                      {/* Sub-layers for fake glitch effect */}
                      <span className="absolute inset-0 text-red-600 opacity-0 group-hover:opacity-20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all -z-10 blur-[2px]">L'NDRANGHETA</span>
                      <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-20 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all -z-10 blur-[2px]">L'NDRANGHETA</span>
                   </h1>
                </div>

                <p className="mt-8 text-xl md:text-4xl font-light italic text-amber-100/30 font-serif">Donde la sangre escribe la historia</p>
                
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-24 text-white/10 flex flex-col items-center gap-4">
                   <span className="text-[8px] tracking-[0.6em] font-black uppercase">Deslizar para revelar</span>
                   <ChevronDown className="w-6 h-6" />
                </motion.div>
             </motion.div>
          </section>

          {/* DOSSIER TEXT SECTION */}
          <section className="relative py-40 md:py-80 px-6 bg-[#050403]">
             <div className="max-w-4xl mx-auto space-y-60 md:space-y-80 relative z-10">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                   <span className="text-amber-700 font-mono text-[9px] tracking-[0.5em] mb-12 block">CAPTACIÓN_001.txt</span>
                   <h2 className="text-4xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12">
                      2030: El punto de <br /><span className="text-amber-700 italic">Inflexión.</span>
                   </h2>
                   <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed text-justify md:text-left border-l-[1px] border-amber-900/40 pl-8 md:pl-12">
                      Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía. Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero.
                   </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:text-right relative">
                   <div className="absolute -right-12 -top-12 opacity-[0.05] hidden lg:block">
                      <Skull className="w-60 h-60 text-white" />
                   </div>
                   <p className="text-3xl md:text-6xl font-serif italic text-white leading-[1.2] mb-12">"Guerra de desgaste en <span className="text-amber-700">territorio hostil.</span>"</p>
                   <p className="text-lg md:text-xl text-white/30 leading-relaxed md:ml-auto max-w-2xl text-justify md:text-right">
                      Mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual. No se trata solo de proteger las rutas comerciales, sino de gestionar una crisis interna donde los negocios entre clanes y los pactos de sangre son la única moneda de cambio frente a enemigos que no respetan los códigos de la vieja escuela.
                   </p>
                </motion.div>

                <div className="text-center py-40 border-y border-amber-900/10 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent">
                   <h3 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-none mb-8">¿UNIDAD O <br/><span className="text-amber-800 italic">DESTRUCCIÓN?</span></h3>
                   <p className="text-amber-600 font-mono text-[10px] tracking-[1.2em] uppercase">El imperio calabrés decide su destino</p>
                </div>
             </div>
          </section>

          {/* FAMILIAS: THE DOSSIERS (NEW DESIGN) */}
          <section className="py-40 bg-[#030303]">
             <div className="max-w-7xl mx-auto px-6">
                <div className="mb-40 flex flex-col items-center text-center">
                   <div className="w-px h-24 bg-gradient-to-b from-transparent to-amber-600 mb-10" />
                   <h2 className="text-6xl md:text-9xl font-serif font-black text-white italic tracking-tighter leading-none">L'Onorata Società</h2>
                   <p className="mt-8 text-amber-500 font-mono text-[10px] tracking-[1em] uppercase">Expedientes de las Cuatro Coronas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
                   {[
                     { n: "Pelle-Vottari", r: "FINANZAS", icon: Globe, id: "PV_001", d: "Lavado de activos en paraísos fiscales europeos." },
                     { n: "Nirta-Strangio", r: "MILITAR", icon: Crosshair, id: "NS_042", d: "Fuerza de choque y seguridad de alto nivel." },
                     { n: "Piromalli-Molè", r: "PUERTOS", icon: Landmark, id: "PM_009", d: "Control total de Gioia Tauro y nodos logísticos." },
                     { n: "De Stefano", r: "POLÍTICA", icon: ShieldAlert, id: "DS_077", d: "Influencia profunda en la rama judicial estatal." }
                   ].map((item, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02, zIndex: 10 }}
                        className="group relative flex flex-col p-10 bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 rounded-tr-[5rem] odd:rounded-bl-[5rem] even:rounded-tl-[5rem]"
                     >
                        <div className="absolute top-0 right-0 p-6 flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity">
                           <FileText className="w-8 h-8 text-amber-900 group-hover:text-amber-500" />
                           <span className="text-[8px] font-mono mt-2">{item.id}</span>
                        </div>

                        <div className="mb-10 w-14 h-14 rounded-full border border-amber-900/20 flex items-center justify-center group-hover:bg-amber-500/10">
                           <item.icon className="w-6 h-6 text-amber-800 group-hover:text-amber-500 transition-colors" />
                        </div>

                        <h4 className="text-3xl font-serif text-white mb-2 tracking-tight group-hover:text-amber-500 transition-colors uppercase">{item.n}</h4>
                        <p className="text-[9px] font-black tracking-[0.4em] text-amber-800 mb-8 border-b border-amber-900/20 pb-4">{item.r}</p>
                        
                        <p className="text-sm text-white/30 leading-relaxed font-sans mb-10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                           {item.d}
                        </p>

                        <div className="mt-auto pt-4 flex items-center gap-4 text-[8px] font-mono text-amber-500/40">
                           <span className="flex-1 h-px bg-amber-900/20" />
                           <span>EVIDENCIA_OK</span>
                        </div>

                        {/* Folder Tab Visual */}
                        <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-amber-950/10 rounded-full blur-xl group-hover:bg-amber-600/10 transition-colors" />
                     </motion.div>
                   ))}
                </div>
             </div>
          </section>

          {/* FINAL CTA BUTTONS */}
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
                    className="group relative flex flex-col items-center justify-center gap-6 p-16 bg-[#080808] border border-white/5 rounded-[3rem] hover:border-amber-500/40 hover:bg-amber-950/20 transition-all overflow-hidden shadow-2xl"
                  >
                     <div className="absolute inset-0 bg-gradient-to-t from-amber-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                     <div className="w-14 h-14 rounded-2xl border border-amber-900/30 flex items-center justify-center text-amber-800 group-hover:text-white group-hover:border-white transition-all">
                        <btn.icon className="w-6 h-6" />
                     </div>
                     <span className="text-[10px] font-black tracking-[0.5em] text-white/20 group-hover:text-white uppercase text-center transition-all px-2 leading-loose">
                        {btn.label}
                     </span>
                  </button>
                ))}
             </div>
          </section>

          {/* FOOTER */}
          <footer className="py-40 border-t border-white/5 text-center bg-[#020202]">
            <Skull className="w-10 h-10 text-amber-900/20 mx-auto mb-10" />
            <div className="flex justify-center gap-12 text-[10px] font-black tracking-[0.6em] uppercase text-white/10 mb-16">
               <Link href="/comites" className="hover:text-amber-700 transition-all">Files</Link>
               <Link href="/" className="hover:text-amber-700 transition-all">Hub</Link>
            </div>
            <p className="text-[8px] text-white/5 tracking-[0.4em] uppercase italic">Protegiendo la Tradición desde 2030</p>
          </footer>
          
        </motion.div>
      )}
    </main>
  );
}
