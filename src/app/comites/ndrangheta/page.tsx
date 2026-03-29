"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Quote, Volume2, Info, Users, Gavel, X
} from "lucide-react";

/* ===== PARTICLE VILLA LOADER (V3 - ARCHITECTURAL) ===== */
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
    const particleCount = 600; // Increased for better detail
    
    const resize = () => {
      capturedCanvas.width = window.innerWidth;
      capturedCanvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const getVillaPoints = () => {
      const points: {x: number, y: number}[] = [];
      const centerX = capturedCanvas.width / 2;
      const centerY = capturedCanvas.height / 2;
      const scale = Math.min(capturedCanvas.width, capturedCanvas.height) * (window.innerWidth < 768 ? 0.35 : 0.45);

      // --- VILLA CALABRESE BLUEPRINT ---
      // Base Rectangle (Main house)
      for (let x = -0.6; x <= 0.6; x += 0.05) {
        points.push({x: centerX + x * scale, y: centerY + 0.3 * scale}); // Ground
        points.push({x: centerX + x * scale, y: centerY - 0.1 * scale}); // Top of 1st floor
      }
      for (let y = -0.1; y <= 0.3; y += 0.05) {
        points.push({x: centerX - 0.6 * scale, y: centerY + y * scale}); // Left wall
        points.push({x: centerX + 0.6 * scale, y: centerY + y * scale}); // Right wall
      }

      // Arches (Ground floor)
      for (let xOff = -0.4; xOff <= 0.4; xOff += 0.4) {
        for (let angle = 0; angle <= Math.PI; angle += 0.2) {
          points.push({
            x: centerX + (xOff + Math.cos(angle) * 0.1) * scale, 
            y: centerY + (0.1 - Math.sin(angle) * 0.1) * scale
          });
        }
      }

      // Tower (Right side)
      for (let y = -0.5; y <= -0.1; y += 0.05) {
        points.push({x: centerX + 0.35 * scale, y: centerY + y * scale});
        points.push({x: centerX + 0.55 * scale, y: centerY + y * scale});
      }
      for (let x = 0.35; x <= 0.55; x += 0.05) {
        points.push({x: centerX + x * scale, y: centerY - 0.5 * scale}); // Tower Roof
      }

      // Main Triangular Roof
      for (let i = 0; i <= 1; i += 0.04) {
        points.push({x: centerX + (-0.6 + 0.6 * i) * scale, y: centerY + (-0.1 - 0.3 * i) * scale});
        points.push({x: centerX + (0.6 - 0.6 * i) * scale, y: centerY + (-0.1 - 0.3 * i) * scale});
      }

      // Windows (Upper floor)
      const winY = -0.05 * scale;
      points.push({x: centerX - 0.3 * scale, y: centerY + winY});
      points.push({x: centerX + 0.1 * scale, y: centerY + winY});

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
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.size = Math.random() * 2 + 0.3;
        this.color = `rgba(255, 230, 210, ${Math.random() * 0.6 + 0.4})`;
      }

      update(phase: number, targetPoints: {x: number, y: number}[], index: number) {
        if (phase === 1) {
          this.x += this.vx;
          this.y += this.vy;
          if (this.x < 0 || this.x > capturedCanvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > capturedCanvas.height) this.vy *= -1;
        } else if (phase >= 2) {
          const target = targetPoints[index % targetPoints.length];
          const dx = target.x - this.x;
          const dy = target.y - this.y;
          this.x += dx * 0.07;
          this.y += dy * 0.07;
        }
      }

      draw() {
        capturedCtx.fillStyle = this.color;
        capturedCtx.beginPath();
        capturedCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        capturedCtx.fill();
        if (phase >= 2) {
          capturedCtx.shadowBlur = 5;
          capturedCtx.shadowColor = "rgba(255, 200, 100, 0.3)";
        }
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

    const t1 = setTimeout(() => setPhase(2), 1500);   // Formation
    const t2 = setTimeout(() => setPhase(3), 3500);   // Steady
    const t3 = setTimeout(() => setPhase(4), 4200);   // TV-Off
    const t4 = setTimeout(onComplete, 5200);          // Done

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
        height: 1, 
        top: "50%", 
        opacity: [1, 1, 0],
        scaleX: [1, 1.4, 0]
      } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "circIn" }}
      className="fixed inset-0 z-[1000] bg-[#050403] flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 p-10" />
      <AnimatePresence>
        {phase < 4 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: phase === 1 ? 0 : 1 }} 
            exit={{ opacity: 0 }} 
            className="z-10 text-center flex flex-col items-center justify-center"
          >
            <div className="h-64 mb-10" /> {/* Space for the villa */}
            <h2 className="text-amber-500/30 font-mono text-[9px] tracking-[1.2em] uppercase mb-1">AUTENTICANDO</h2>
            <h1 className="text-white font-serif text-3xl md:text-5xl tracking-[0.4em] uppercase font-black drop-shadow-2xl">L'NDRANGHETA</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ===== PREMIUIM OVERLAY (SOON) ===== */
function SoonOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-md w-full p-10 bg-[#0a0807] border border-amber-900/30 text-center rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,1)]"
          >
            <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-amber-500 transition-all p-2 bg-white/5 rounded-full">
              <X className="w-5 h-5" />
            </button>
            <div className="w-20 h-20 rounded-full border border-amber-500/10 flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(180,83,9,0.05)]">
              <Skull className="w-8 h-8 text-amber-500/30" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-6 uppercase tracking-widest italic">Expediente Sellado</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-12 font-sans px-4">
              Este recurso está bajo revisión del Consejo de Calabria. La información será liberada en las próximas fases del protocolo KAMEMUN.
            </p>
            <button 
              onClick={onClose} 
              className="w-full py-5 bg-gradient-to-r from-amber-950/40 to-amber-900/20 border border-amber-800/40 text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase hover:from-amber-500/20 hover:to-amber-500/10 hover:text-white transition-all rounded-2xl"
            >
              CERRAR EXPEDIENTE
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

  // Auto-disable loading safety check
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.warn("Safety trigger: Loader closed by timeout.");
        setIsLoading(false);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-800 selection:text-white font-serif overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <VillaLoader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <SoonOverlay isOpen={isSoonOpen} onClose={() => setIsSoonOpen(false)} />

      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative z-0"
        >
          {/* HEADER (Z-INDEX ALTO) */}
          <nav className="fixed top-0 w-full z-[100] p-6 pointer-events-none">
            <div className="max-w-[1920px] mx-auto flex justify-between items-center pointer-events-auto">
              <Link href="/comites" className="group flex items-center gap-3 py-2 px-5 bg-black/60 border border-white/5 backdrop-blur-xl rounded-full transition-all hover:bg-white/10 hover:border-amber-500/20">
                <ArrowLeft className="w-4 h-4 text-amber-500/60 group-hover:text-amber-400" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-all">Hub de Comités</span>
              </Link>
              <div className="px-5 py-2 border-l border-amber-500/20 bg-amber-500/5 hidden sm:block backdrop-blur-sm">
                <p className="text-[9px] font-bold tracking-[0.5em] text-amber-500 uppercase">CALABRIA . 2030</p>
              </div>
            </div>
          </nav>

          {/* HERO (ESPACIO MEJORADO) */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.4] saturate-[0.6] scale-105">
                <source src="/videos/comites/padrino.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/80" />
              <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, #050403 100%)" />
            </div>
            
            <div className="relative z-10 text-center px-4 pt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <span className="inline-block px-5 py-2 border border-amber-900/30 rounded-full text-[10px] tracking-[0.7em] uppercase text-amber-500/60 mb-12 bg-black/40 backdrop-blur-sm">Dossier Clasificado</span>
                <h1 className="text-[14vw] md:text-[10rem] font-black tracking-[-0.05em] leading-[0.85] text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] mb-8">
                  L'NDRANGHETA
                </h1>
                <p className="text-xl md:text-3xl font-light italic text-amber-100/40 tracking-wider">Donde la sangre escribe la historia</p>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ duration: 2, repeat: Infinity }} 
                  className="mt-20 flex flex-col items-center gap-4 text-white/20"
                >
                  <span className="text-[8px] tracking-[0.4em] uppercase font-bold hidden md:block">Descubrir</span>
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* TEXTO INFORMATIVO (ESPACIO ASEGURADO) */}
          <section className="relative py-40 md:py-60 px-6 md:px-12 bg-[#050403]">
            <div className="max-w-4xl mx-auto space-y-40 md:space-y-60">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="absolute -left-10 top-0 w-1 h-full bg-amber-900/10 hidden lg:block" />
                <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-12 decoration-amber-600/30 underline-offset-[16px]">
                  El año 2030 marca el <span className="text-amber-600 italic">punto de inflexión...</span>
                </h2>
                <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed text-justify md:text-left">
                  Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía. Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, margin: "-100px" }}
                className="md:text-right relative"
              >
                <div className="absolute -right-10 top-0 w-1 h-full bg-amber-900/10 hidden lg:block" />
                <p className="text-2xl md:text-5xl font-serif italic text-white leading-[1.3] mb-12">"El conflicto ha escalado <span className="text-amber-600">más allá de las fronteras</span> italianas..."</p>
                <div className="w-20 h-px bg-amber-600/20 mb-10 md:ml-auto" />
                <p className="text-lg md:text-xl text-white/40 leading-relaxed md:ml-auto max-w-3xl text-justify md:text-right">
                  Mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual. No se trata solo de proteger las rutas comerciales, sino de gestionar una crisis interna donde los negocios entre clanes y los pactos de sangre son la única moneda de cambio frente a enemigos que no respetan los códigos de la vieja escuela.
                </p>
              </motion.div>

              <div className="text-center py-24 border-y border-amber-900/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-900/[0.02] animate-pulse" />
                <h3 className="text-5xl md:text-[8rem] font-black text-white tracking-tighter leading-none mb-6 relative z-10">
                  ¿UNIDAD O <br/><span className="text-amber-700 italic">DESTRUCCIÓN?</span>
                </h3>
                <p className="text-amber-600 font-mono text-[10px] tracking-[1em] uppercase relative z-10">El destino decide</p>
              </div>
            </div>
          </section>

          {/* FAMILIAS (ORDENADO) */}
          <section className="py-40 bg-black/40">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-32 text-center">
                <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tight mb-4">L'Onorata Società</h2>
                <div className="w-24 h-[1px] bg-amber-600 mx-auto opacity-30 mt-8" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { n: "Pelle-Vottari", r: "NARCO-FINANZAS", icon: Globe, d: "Gestión de capitales y flujos bancarios transoceánicos." },
                  { n: "Nirta-Strangio", r: "BRAZO ARMADO", icon: Crosshair, d: "Ejecución táctica y protección de la jerarquía." },
                  { n: "Piromalli-Molè", r: "PUERTOS", icon: Landmark, d: "Control de estiba y logística portuaria crítica." },
                  { n: "De Stefano", r: "POLÍTICA", icon: ShieldAlert, d: "Infiltración en estamentos de alto poder estatal." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="p-10 bg-white/[0.02] border border-white/5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all rounded-[2rem] flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl border border-amber-500/10 flex items-center justify-center mb-8">
                      <item.icon className="w-6 h-6 text-amber-500/30" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3 tracking-wide uppercase">{item.n}</h4>
                    <p className="text-[9px] text-amber-600 font-black tracking-[0.4em] mb-6 uppercase border-b border-amber-900/20 pb-2">{item.r}</p>
                    <p className="text-xs text-white/30 leading-relaxed italic">{item.d}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* RECURSOS ESPECIALES */}
          <section className="py-40 px-6 flex flex-col items-center justify-center">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
              {[
                { label: "Guia Academica", icon: Info },
                { label: "Conoce a tu Mesa", icon: Users },
                { label: "Reglamento Especializado", icon: Gavel }
              ].map((btn, i) => (
                <button
                  key={i}
                  onClick={() => setIsSoonOpen(true)}
                  className="group flex flex-col items-center gap-6 p-12 bg-black/40 border border-amber-900/10 rounded-[3rem] hover:border-amber-500/40 hover:bg-amber-950/10 transition-all shadow-xl"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full border border-amber-900/30 text-amber-600/30 group-hover:text-amber-500 group-hover:scale-110 transition-all">
                    <btn.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black tracking-[0.4em] uppercase text-white/20 group-hover:text-white transition-all">{btn.label}</span>
                </button>
              ))}
             </div>
          </section>

          {/* FOOTER */}
          <footer className="py-40 border-t border-white/5 text-center bg-[#030302]">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              className="px-6"
            >
              <Skull className="w-12 h-12 text-amber-950 mx-auto mb-10" />
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-black tracking-[0.6em] uppercase text-white/10 mb-16">
                <Link href="/comites" className="hover:text-amber-600 transition-all">Archivos</Link>
                <Link href="/" className="hover:text-amber-600 transition-all">KAMEMUN</Link>
                <Link href="#" className="hover:text-amber-600 transition-all">Contacto</Link>
              </div>
              <p className="text-[9px] text-white/5 tracking-[0.5em] uppercase italic">Protegiendo la Tradición desde 2030</p>
            </motion.div>
          </footer>
        </motion.div>
      )}
    </main>
  );
}
