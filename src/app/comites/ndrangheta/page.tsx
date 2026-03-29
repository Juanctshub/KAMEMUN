"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Skull, Globe, Landmark, ShieldAlert, Crosshair, 
  ChevronDown, Quote, Volume2, Info, Users, Gavel
} from "lucide-react";

/* ===== PARTICLE VILLA LOADER ===== */
function VillaLoader({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState(1); // 1: Chaos, 2: Formation, 3: Steady, 4: TV Off

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 450;
    
    // Resize
    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Villa Points (Approximate Silhouette)
    const getVillaPoints = () => {
      const points: {x: number, y: number}[] = [];
      if (!canvas) return points;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = Math.min(canvas.width, canvas.height) * 0.4;

      // Base of the house
      for (let x = -0.6; x <= 0.6; x += 0.1) points.push({x: centerX + x * scale, y: centerY + 0.3 * scale});
      // Walls
      for (let y = -0.1; y <= 0.3; y += 0.05) {
        points.push({x: centerX - 0.6 * scale, y: centerY + y * scale});
        points.push({x: centerX + 0.6 * scale, y: centerY + y * scale});
      }
      // Roof (Triangle)
      for (let i = 0; i <= 1; i += 0.05) {
        points.push({x: centerX + (-0.6 + 0.6 * i) * scale, y: centerY + (0.3 - 0.7 * i) * scale}); // Left slope
        points.push({x: centerX + (0.6 - 0.6 * i) * scale, y: centerY + (0.3 - 0.7 * i) * scale}); // Right slope
      }
      // Windows
      points.push({x: centerX - 0.3 * scale, y: centerY + 0.1 * scale});
      points.push({x: centerX + 0.3 * scale, y: centerY + 0.1 * scale});
      // Tower (Right side)
      for (let y = -0.4; y <= -0.1; y += 0.05) {
        points.push({x: centerX + 0.4 * scale, y: centerY + y * scale});
        points.push({x: centerX + 0.6 * scale, y: centerY + y * scale});
      }
      for (let x = 0.4; x <= 0.6; x += 0.05) points.push({x: centerX + x * scale, y: centerY - 0.4 * scale});

      return points;
    };

    class Particle {
      x: number; y: number;
      targetX: number; targetY: number;
      vx: number; vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.targetX = this.x;
        this.targetY = this.y;
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.size = Math.random() * 2 + 0.5;
        this.color = `rgba(255, 230, 180, ${Math.random() * 0.8 + 0.2})`;
      }

      update(phase: number, targetPoints: {x: number, y: number}[], index: number) {
        if (phase === 1) {
          // Chaos
          this.x += this.vx;
          this.y += this.vy;
          if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        } else if (phase >= 2) {
          // Seeking Villa
          const target = targetPoints[index % targetPoints.length];
          const dx = target.x - this.x;
          const dy = target.y - this.y;
          this.x += dx * 0.05;
          this.y += dy * 0.05;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        if (phase >= 2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(255, 200, 100, 0.5)";
        }
      }
    }

    const villaPoints = getVillaPoints();
    particles = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.update(phase, villaPoints, i);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Phase Transitions
    const t1 = setTimeout(() => setPhase(2), 2000);   // Start forming
    const t2 = setTimeout(() => setPhase(3), 4500);   // Ready
    const t3 = setTimeout(() => setPhase(4), 5500);   // Start TV-Off
    const t4 = setTimeout(onComplete, 6500);          // Done

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
        height: 2, 
        top: "50%", 
        marginTop: -1,
        opacity: [1, 1, 0],
        scaleX: [1, 1.2, 0]
      } : {}}
      transition={phase === 4 ? { duration: 0.8, ease: "easeInOut" } : {}}
      className="fixed inset-0 z-[500] bg-black overflow-hidden pointer-events-none flex items-center justify-center"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <AnimatePresence>
        {phase < 4 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 2 ? 0.8 : phase === 1 ? 0 : 1 }}
            exit={{ opacity: 0 }}
            className="z-10 text-center"
          >
            <h2 className="text-white/40 font-mono text-[10px] tracking-[1em] uppercase mb-4">
              {phase === 1 ? "RECUPERANDO DATOS..." : "TRANSVIRGE IL PALAZZO"}
            </h2>
            <div className="h-40" /> {/* Spacer for the villa */}
            <h1 className="text-amber-100 font-serif text-3xl md:text-5xl tracking-[0.4em] uppercase">
              L'NDRANGHETA
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TV Screen Reflection/Distortion */}
      {phase === 4 && (
        <div className="absolute inset-0 bg-white/10 mix-blend-screen animate-pulse" />
      )}
    </motion.div>
  );
}

/* ===== MAIN NDRANGHETA PAGE ===== */
export default function NdranghetaPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeAudio, setActiveAudio] = useState(false);

  // Auto-play audio handle
  useEffect(() => {
    if (!isLoading) {
      const audio = new Audio("/audio/comites/padrino.mp3");
      audio.loop = true;
      audio.volume = 0.4;
      // Note: Browsers usually block auto-play without interaction, 
      // but in many landing cases we trigger it on first click or similar.
      // We'll provide a mute/unmute button if needed.
    }
  }, [isLoading]);

  return (
    <main className="relative min-h-screen bg-[#050403] text-[#f4ece4] selection:bg-red-800 selection:text-white font-serif overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <VillaLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* HEADER / NAVIGATION */}
          <nav className="fixed top-0 w-full z-[100] p-6 lg:p-10 pointer-events-none">
            <div className="max-w-[1920px] mx-auto flex justify-between items-center pointer-events-auto">
              <Link href="/comites" className="group flex items-center gap-3 py-2 px-5 bg-black/40 border border-white/5 backdrop-blur-xl rounded-full transition-all hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 text-amber-500/60 group-hover:text-amber-400" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-all">Hub de Comités</span>
              </Link>
              
              <div className="flex items-center gap-6">
                 <div className="px-5 py-2 hidden md:block border-l border-amber-500/20 bg-amber-500/5">
                   <p className="text-[9px] font-bold tracking-[0.5em] text-amber-500 uppercase">CALABRIA . 2030</p>
                 </div>
              </div>
            </div>
          </nav>

          {/* HERO SECTION - THE SOUL OF THE PAGE */}
          <section className="relative w-full h-screen flex items-center justify-center">
            {/* BACKGROUND VIDEO - High Visibility Cinematic Treatment */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover scale-105 brightness-[0.45] saturate-[0.7] contrast-[1.1]"
              >
                <source src="/videos/comites/padrino.mp4" type="video/mp4" />
              </video>
              
              {/* Overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-[#050403]/70" />
              <div className="absolute inset-0 bg-radial-gradient(circle, transparent 30%, #050403 100%)" />
              
              {/* Film Grain Effect */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            <div className="relative z-10 text-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 border border-amber-900/30 rounded-full text-[10px] tracking-[0.8em] uppercase text-amber-500/60 mb-8 bg-black/20 backdrop-blur-sm">
                  Dossier Clasificado
                </span>
                
                <h1 className="text-[12vw] md:text-[8rem] lg:text-[11rem] font-black tracking-[-0.04em] leading-none text-white drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                  L'NDRANGHETA
                </h1>
                
                <p className="mt-6 md:mt-2 text-xl md:text-3xl font-light italic text-amber-100/40 tracking-wide font-serif">
                  Donde la sangre escribe la historia
                </p>

                <motion.div 
                   animate={{ y: [0, 10, 0] }} 
                   transition={{ duration: 2, repeat: Infinity }}
                   className="mt-20 flex flex-col items-center gap-4 text-white/20"
                >
                  <span className="text-[9px] tracking-[0.4em] uppercase font-bold">Explorar Expediente</span>
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* INFORMATIVE NARRATIVE SECTION (3 ACTS) */}
          <section className="relative w-full py-40 md:py-64 px-6 md:px-12 pointer-events-none">
            <div className="max-w-5xl mx-auto pointer-events-auto">
              
              {/* ACT I */}
              <div className="relative mb-60">
                <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.2 }}
                >
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-12 h-[1px] bg-amber-600/30" />
                    <span className="text-amber-500 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">Acto I // El Punto de Inflexión</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-12">
                    El año 2030 marca el <span className="italic text-amber-600">punto de inflexión</span> para la organización más hermética del planeta.
                  </h2>
                  
                  <p className="text-xl md:text-2xl font-light text-[#f4ece4]/60 leading-relaxed max-w-3xl">
                    Tras décadas de dominio absoluto sobre el tráfico transatlántico y las finanzas europeas, la ’Ndrangheta se enfrenta a una tormenta perfecta: una ofensiva judicial sin precedentes y el asedio de coaliciones internacionales que buscan heredar su hegemonía.
                  </p>
                  
                  <div className="mt-12 p-8 bg-black/40 border border-white/5 backdrop-blur-md rounded-2xl border-l-4 border-l-amber-900/40 max-w-2xl">
                    <p className="text-lg italic text-amber-200/50 leading-relaxed">
                      "Los fantasmas del pasado han despertado, y los cimientos de la organización comienzan a agrietarse bajo el peso de la traición y el acero."
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* ACT II */}
              <div className="relative mb-60 flex justify-end">
                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.2 }}
                   className="max-w-4xl text-right"
                >
                  <div className="flex items-center justify-end gap-6 mb-12">
                    <span className="text-amber-500 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">Acto II // Guerra de Desgaste</span>
                    <div className="w-12 h-[1px] bg-amber-600/30" />
                  </div>
                  
                  <p className="text-3xl md:text-5xl font-serif leading-[1.3] text-white italic mb-12">
                    "El conflicto ha escalado <span className="text-amber-600">más allá de las fronteras</span> italianas..."
                  </p>
                  
                  <div className="space-y-8 text-xl md:text-2xl font-light text-[#f4ece4]/50 leading-relaxed">
                    <p>
                      Mafias euroasiáticas y carteles emergentes han iniciado una guerra de desgaste para desmantelar el monopolio calabrés, obligando a las familias a decidir entre la unidad absoluta o el exterminio individual.
                    </p>
                    <p>
                      No se trata solo de proteger las rutas comerciales, sino de gestionar una crisis interna donde los negocios entre clanes y los pactos de sangre son la única moneda de cambio frente a enemigos que no respetan los códigos de la vieja escuela.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* ACT III / CONCLUSIÓN */}
              <div className="relative text-center py-20 border-y border-amber-900/10">
                <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="relative inline-block"
                >
                  <Quote className="w-16 h-16 text-amber-500/5 absolute -top-10 -left-10" />
                  <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-8">
                    ¿Unidad o <span className="text-amber-600 italic">Destrucción?</span>
                  </h3>
                  <p className="text-amber-500 font-mono text-sm tracking-[0.8em] uppercase font-bold mb-12">El imperio calabrés decide su destino</p>
                  
                  <div className="flex items-center justify-center gap-8 text-amber-500/20">
                     <Skull className="w-6 h-6" />
                     <div className="w-24 h-[1px] bg-current" />
                     <Landmark className="w-6 h-6" />
                     <div className="w-24 h-[1px] bg-current" />
                     <Globe className="w-6 h-6" />
                  </div>
                </motion.div>
              </div>

            </div>
          </section>

          {/* ESTRUCTURA DE PODER: L'ONORATA SOCIETÀ (Mejorado) */}
          <section className="relative w-full py-32 bg-black/40 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-24 text-center">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">L'Onorata Società</h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-8 h-[1px] bg-amber-500/40" />
                  <p className="text-amber-500 font-mono text-[9px] tracking-[0.4em] uppercase">Estructura Global - 2030</p>
                  <div className="w-8 h-[1px] bg-amber-500/40" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { n: "Pelle-Vottari", r: "NARCO-FINANZAS", icon: Globe, d: "Expertos en la infraestructura bancaria subterránea de Europa. Controlan la liquidez global de la organización." },
                  { n: "Nirta-Strangio", r: "BRAZO MILITAR", icon: Crosshair, d: "Responsables de la seguridad interna y retaliaciones externas. Custodios de la Omertà." },
                  { n: "Piromalli-Molè", r: "LOGÍSTICA PUERTOS", icon: Landmark, d: "Dueños de los nodos críticos en el Mediterráneo. Nada entra ni sale sin su bendición." },
                  { n: "De Stefano", r: "INFILTRACIÓN", icon: ShieldAlert, d: "El puente entre el crimen y el estado. Gestionan la corrupción en niveles diplomáticos." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-10 bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:bg-white/[0.04]"
                  >
                    <div className="mb-8 w-12 h-12 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/10 transition-colors">
                      <item.icon className="w-5 h-5 text-amber-500/40 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">{item.n}</h4>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-amber-600/60 mb-6">{item.r}</p>
                    <p className="text-sm text-white/30 leading-relaxed font-sans">{item.d}</p>
                    
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute top-2 right-2 w-px h-4 bg-amber-500/40" />
                      <div className="absolute top-2 right-2 h-px w-4 bg-amber-500/40" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* RECURSOS ESPECIALIZADOS - BOTONES TEMATIZADOS */}
          <section className="relative w-full py-20 px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
              {[
                { label: "Guia Academica", icon: Info },
                { label: "Conoce a tu Mesa", icon: Users },
                { label: "Reglamento Especializado", icon: Gavel }
              ].map((btn, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(180, 83, 9, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => alert("Muy pronto.")}
                  className="group flex flex-col items-center gap-4 p-8 w-full md:w-64 bg-black/40 border border-amber-900/20 rounded-2xl transition-all hover:border-amber-500/50"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-amber-900/40 text-amber-600/60 group-hover:text-amber-500 group-hover:bg-amber-500/10 transition-all">
                    <btn.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] text-white/40 group-hover:text-white uppercase text-center transition-all">
                    {btn.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </section>

          {/* FOOTER - INFORMATIVO Y LIMPIO */}
          <footer className="relative w-full py-40 flex flex-col items-center justify-center text-center bg-[#050403] border-t border-white/5">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="mb-20 px-6"
            >
              <Skull className="w-12 h-12 text-amber-500/20 mx-auto mb-10" />
              <h4 className="text-white/20 font-serif text-lg md:text-xl italic max-w-xl mx-auto leading-relaxed">
                "Este expediente es confidencial. La traición se paga con más que el olvido en las colinas de Aspromonte."
              </h4>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-12 text-[#f4ece4]/20 text-[10px] font-bold tracking-[0.5em] uppercase">
              <Link href="/comites" className="hover:text-amber-500 transition-colors">Regresar al Hub</Link>
              <div className="hidden md:block w-1.5 h-1.5 bg-white/5 rounded-full" />
              <Link href="/" className="hover:text-amber-500 transition-colors">KAMEMUN 2026</Link>
            </div>
            
            <p className="mt-16 text-[8px] text-white/5 tracking-[0.2em] uppercase">
              MODELO DE NACIONES UNIDAS - ESTADO LARA
            </p>
          </footer>

        </motion.div>
      )}
    </main>
  );
}
