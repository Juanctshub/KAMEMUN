"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Quote, Volume2, Info, Users, Gavel, X
} from "lucide-react";

/* ===== PARTICLE VILLA LOADER (Optimized) ===== */
function VillaLoader({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState(1); // 1: Chaos, 2: Formation, 3: Steady, 4: TV Off

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Capture capturedCanvas as a constant to satisfy TypeScript
    const capturedCanvas = canvas;
    const capturedCtx = ctx;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 450;
    
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

      // Simple House Shape
      for (let x = -0.6; x <= 0.6; x += 0.08) points.push({x: centerX + x * scale, y: centerY + 0.3 * scale});
      for (let y = -0.1; y <= 0.3; y += 0.05) {
        points.push({x: centerX - 0.6 * scale, y: centerY + y * scale});
        points.push({x: centerX + 0.6 * scale, y: centerY + y * scale});
      }
      for (let i = 0; i <= 1; i += 0.05) {
        points.push({x: centerX + (-0.6 + 0.6 * i) * scale, y: centerY + (0.3 - 0.7 * i) * scale});
        points.push({x: centerX + (0.6 - 0.6 * i) * scale, y: centerY + (0.3 - 0.7 * i) * scale});
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
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
        this.size = Math.random() * 2 + 0.5;
        this.color = `rgba(255, 230, 200, ${Math.random() * 0.7 + 0.3})`;
      }

      update(phase: number, targetPoints: {x: number, y: number}[], index: number) {
        if (phase === 1) {
          this.x += this.vx;
          this.y += this.vy;
          if (this.x < 0 || this.x > capturedCanvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > capturedCanvas.height) this.vy *= -1;
        } else if (phase >= 2) {
          const target = targetPoints[index % targetPoints.length];
          this.x += (target.x - this.x) * 0.06;
          this.y += (target.y - this.y) * 0.06;
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

    const t1 = setTimeout(() => setPhase(2), 1200);   // Formation
    const t2 = setTimeout(() => setPhase(3), 3200);   // Steady
    const t3 = setTimeout(() => setPhase(4), 4000);   // TV-Off
    const t4 = setTimeout(onComplete, 4800);          // Done

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  }, [onComplete, phase]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={phase === 4 ? { height: 2, top: "50%", marginTop: -1, opacity: [1, 1, 0], scaleX: [1, 1.3, 0] } : {}}
      transition={phase === 4 ? { duration: 0.7 } : {}}
      className="fixed inset-0 z-[600] bg-black pointer-events-none flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <AnimatePresence>
        {phase < 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: phase === 1 ? 0 : 1 }} exit={{ opacity: 0 }} className="z-10 text-center">
            <h2 className="text-amber-500/20 font-mono text-[9px] tracking-[1em] uppercase mb-10">Autenticando Familia...</h2>
            <div className="h-32" />
            <h1 className="text-white font-serif text-3xl md:text-5xl tracking-[0.3em] uppercase">L'NDRANGHETA</h1>
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
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            className="relative max-w-md w-full p-12 bg-[#0a0807] border border-amber-900/30 text-center rounded-3xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-full border border-amber-500/20 flex items-center justify-center mx-auto mb-8">
              <Skull className="w-6 h-6 text-amber-500/40" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 uppercase tracking-widest italic">Expediente Sellado</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-10 font-sans">
              Este recurso está bajo revisión del Consejo de Calabria. La información será liberada en las próximas fases del protocolo KAMEMUN.
            </p>
            <button onClick={onClose} className="w-full py-4 bg-amber-950/20 border border-amber-900/40 text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-amber-900/40 transition-all rounded-xl">
              Entendido
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

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-800 selection:text-white font-serif overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <VillaLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SoonOverlay isOpen={isSoonOpen} onClose={() => setIsSoonOpen(false)} />

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          {/* HEADER */}
          <nav className="fixed top-0 w-full z-[100] p-6 pointer-events-none">
            <div className="max-w-[1920px] mx-auto flex justify-between items-center pointer-events-auto">
              <Link href="/comites" className="group flex items-center gap-3 py-2 px-5 bg-black/40 border border-white/5 backdrop-blur-xl rounded-full transition-all hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 text-amber-500/60 group-hover:text-amber-400" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-all">Hub de Comités</span>
              </Link>
              <div className="px-5 py-2 border-l border-amber-500/20 bg-amber-500/5 hidden md:block">
                <p className="text-[9px] font-bold tracking-[0.5em] text-amber-500 uppercase">CALABRIA . 2030</p>
              </div>
            </div>
          </nav>

          {/* HERO */}
          <section className="relative w-full h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.45] saturate-[0.7]">
                <source src="/videos/comites/padrino.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/60" />
              <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, #050403 90%) md:hidden" />
            </div>
            <div className="relative z-10 text-center px-4">
              <span className="inline-block px-4 py-1.5 border border-amber-900/30 rounded-full text-[9px] md:text-[10px] tracking-[0.6em] uppercase text-amber-500/60 mb-8 bg-black/20 backdrop-blur-sm">Dossier Clasificado</span>
              <h1 className="text-[14vw] md:text-[9rem] font-black tracking-[-0.04em] leading-tight md:leading-none text-white drop-shadow-2xl">L'NDRANGHETA</h1>
              <p className="mt-4 text-lg md:text-3xl font-light italic text-amber-100/40">Donde la sangre escribe la historia</p>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-16 flex flex-col gap-4 text-white/20 items-center justify-center">
                <span className="text-[8px] tracking-[0.5em] uppercase font-bold md:block hidden">Deslizar para revelar</span>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </div>
          </section>

          {/* TEXTO INFORMATIVO (LOS 3 PÁRRAFOS DEL USUARIO) */}
          <section className="relative py-32 md:py-48 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-32 md:space-y-48 relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-6xl font-black text-white leading-tight mb-8">El año 2030 marca el <span className="text-amber-600 italic">punto de inflexión...</span></h2>
                <p className="text-base md:text-2xl font-light text-white/60 leading-relaxed text-justify md:text-left">
                  Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía. Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:text-right">
                <p className="text-xl md:text-4xl font-serif italic text-white leading-[1.4] mb-8">"El conflicto ha escalado <span className="text-amber-600">más allá de las fronteras</span> italianas..."</p>
                <div className="w-full h-px bg-amber-900/20 mb-8 md:hidden" />
                <p className="text-base md:text-xl text-white/40 leading-relaxed md:ml-auto max-w-3xl text-justify md:text-right">
                  Mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual. No se trata solo de proteger las rutas comerciales, sino de gestionar una crisis interna donde los negocios entre clanes y los pactos de sangre son la única moneda de cambio frente a enemigos que no respetan los códigos de la vieja escuela.
                </p>
              </motion.div>

              <div className="text-center py-20 border-y border-amber-900/10">
                <h3 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-4 leading-none">¿UNIDAD O <br/><span className="text-amber-700 italic">DESTRUCCIÓN?</span></h3>
                <p className="text-amber-500 font-mono text-[9px] md:text-[10px] tracking-[0.8em] uppercase px-4 leading-relaxed">El imperio calabrés decide su destino</p>
              </div>
            </div>
          </section>

          {/* CONSEJO DE FAMILIAS */}
          <section className="py-32 bg-black/30 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-20 text-center">
                <h2 className="text-5xl font-bold text-white mb-4">L'Onorata Società</h2>
                <div className="w-16 h-px bg-amber-600 mx-auto opacity-40" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { n: "Pelle-Vottari", r: "NARCO-FINANZAS", icon: Globe },
                  { n: "Nirta-Strangio", r: "BRAZO MILITAR", icon: Crosshair },
                  { n: "Piromalli-Molè", r: "PUERTOS", icon: Landmark },
                  { n: "De Stefano", r: "POLÍTICA", icon: ShieldAlert }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors rounded-2xl">
                    <item.icon className="w-6 h-6 text-amber-500/40 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-2">{item.n}</h4>
                    <p className="text-[10px] text-amber-600 font-bold tracking-widest uppercase">{item.r}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BOTONES ESPECIALIZADOS [NUEVO] */}
          <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
              {[
                { label: "Guia Academica", icon: Info },
                { label: "Conoce a tu Mesa", icon: Users },
                { label: "Reglamento Especializado", icon: Gavel }
              ].map((btn, i) => (
                <button
                  key={i}
                  onClick={() => setIsSoonOpen(true)}
                  className="group flex flex-col items-center gap-4 p-8 w-full md:w-72 bg-black/40 border border-amber-900/20 rounded-[2rem] hover:border-amber-500/50 transition-all hover:bg-amber-900/5"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-amber-900/40 text-amber-600/40 group-hover:text-amber-500 transition-all">
                    <btn.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/30 group-hover:text-white transition-colors">{btn.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-40 border-t border-white/5 text-center bg-[#050403]">
            <Skull className="w-10 h-10 text-amber-500/10 mx-auto mb-10" />
            <div className="flex justify-center gap-12 text-[10px] font-black tracking-[0.5em] uppercase text-white/20 mb-12">
              <Link href="/comites" className="hover:text-amber-500 transition-all">Hub</Link>
              <Link href="/" className="hover:text-amber-500 transition-all">KAMEMUN</Link>
            </div>
            <p className="text-[8px] text-white/5 tracking-[0.3em] uppercase">Modelo de Naciones Unidas - Estado Lara</p>
          </footer>
        </motion.div>
      )}
    </main>
  );
}
