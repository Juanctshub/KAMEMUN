"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Flag, Leaf, TreeDeciduous } from "lucide-react";

const philosophyItems = [
  {
    id: "01",
    pre: "Fase I",
    title: "El Talento del Estado Lara",
    subtitle: "La Identidad Independiente",
    description: "KAMEMUN no nace de una facultad específica, sino de la convicción de que el talento universitario del Estado Lara es una fuerza imparable. Rompemos barreras académicas tradicionales. Creemos que la diplomacia no es exclusiva de las leyes o la política; es una herramienta universal.",
    color: "from-brand-secondary to-brand-secondary",
    border: "border-brand-primary/20",
    IconComponent: Flag,
    accent: "text-brand-primary-light"
  },
  {
    id: "02",
    pre: "Fase II",
    title: "Sabiduría, Paciencia y Resiliencia",
    subtitle: "La Filosofía 'Kame'",
    description: "En un mundo que premia la inmediatez, nosotros elegimos la profundidad. La sabiduría en KAMEMUN se construye paso a paso, con paciencia para analizar cada arista y resiliencia para no ceder ante la marea turbulenta.",
    color: "from-brand-primary/80 to-brand-primary",
    border: "border-brand-white/20",
    IconComponent: BrainCircuit,
    accent: "text-brand-white"
  },
  {
    id: "03",
    pre: "Fase III",
    title: "El Camino de la Tortuga",
    subtitle: "Metodología",
    description: "Nuestra metodología se aleja de la preparación superficial. No corremos por obtener un premio; profundizamos para obtener conocimiento. Cultivamos una inteligencia con pasión, donde cada delegado aprende a nutrir su voz con datos, empatía y estrategia.",
    color: "from-brand-primary-light/80 to-brand-primary-light",
    border: "border-brand-secondary/20",
    textColor: "text-brand-secondary",
    IconComponent: Leaf,
    accent: "text-brand-secondary"
  },
  {
    id: "04",
    pre: "Fase IV",
    title: "Donde Tu Voz Perdura",
    subtitle: "Ecosistema de Crecimiento",
    description: "KAMEMUN es más que una simulación; es un ecosistema. Al unirte, entras en un proceso donde tus ideas encuentran el eco necesario para trascender el aula y convertirse en propuestas reales de impacto global.",
    color: "from-brand-secondary to-brand-primary/30",
    border: "border-brand-primary/20",
    IconComponent: TreeDeciduous,
    accent: "text-brand-primary-light"
  }
];

export default function PhilosophyScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section id="filosofia" ref={container} className="relative w-full bg-brand-secondary overflow-hidden">
      {/* HEADER */}
      <div className="h-[50vh] md:h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-primary-light font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6"
        >
          Fases de la Metodología
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl lg:text-9xl font-serif font-black text-brand-accent tracking-tighter"
        >
          Filosofía{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-primary drop-shadow-[0_0_30px_rgba(0,140,140,0.6)]">KAMEMUN</span>
        </motion.h2>
        <div className="w-16 h-[2px] bg-brand-primary/40 mt-8" />
      </div>

      {/* MOBILE: Vertical Stack */}
      <div className="md:hidden flex flex-col gap-6 px-6 pb-24">
        {philosophyItems.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative rounded-3xl p-8 bg-gradient-to-br ${item.color} border ${item.border} overflow-hidden shadow-xl`}
          >
            <div className="absolute inset-0 bg-noise opacity-[0.03]" />
            <div className="absolute -right-8 -bottom-8 opacity-[0.06]">
              <item.IconComponent className="w-40 h-40 text-current" />
            </div>
            <div className={`relative z-10 ${item.textColor || "text-brand-accent"}`}>
              <span className={`text-[10px] font-black tracking-[0.4em] uppercase ${item.accent} opacity-70`}>{item.pre}</span>
              <h3 className="text-2xl font-serif font-black mt-2 mb-1 tracking-tight">{item.title}</h3>
              <p className="text-xs opacity-50 uppercase tracking-widest font-bold mb-6">{item.subtitle}</p>
              <p className="text-sm font-light leading-relaxed opacity-85">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP: Premium Horizontal Timeline */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 pb-40">
        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 h-[2px] bg-brand-white/5 z-0" />
          <motion.div 
            className="absolute left-0 top-6 h-[2px] bg-brand-primary z-10 origin-left"
            style={{ scaleX: scrollYProgress }}
          />

          <div className="grid grid-cols-4 gap-8 relative z-20">
            {philosophyItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="flex flex-col"
              >
                {/* Timeline Dot */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_15px_rgba(0,140,140,0.6)] flex-shrink-0" />
                  <span className={`text-[10px] font-black tracking-[0.4em] uppercase ${item.accent}`}>{item.pre}</span>
                </div>

                {/* Card */}
                <div className={`group relative flex-1 rounded-[2.5rem] p-10 bg-gradient-to-br ${item.color} border ${item.border} overflow-hidden shadow-2xl hover:shadow-[0_20px_80px_rgba(0,140,140,0.15)] transition-all duration-500 hover:-translate-y-2`}>
                  <div className="absolute inset-0 bg-noise opacity-[0.03]" />
                  <div className="absolute -right-6 -bottom-6 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500">
                    <item.IconComponent className="w-48 h-48 text-current" />
                  </div>
                  
                  <div className={`relative z-10 h-full flex flex-col ${item.textColor || "text-brand-accent"}`}>
                    <div className="mb-8">
                      <div className={`w-12 h-12 rounded-2xl bg-brand-white/5 flex items-center justify-center mb-6 border ${item.border}`}>
                        <item.IconComponent className={`w-6 h-6 ${item.accent}`} />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-serif font-black tracking-tight leading-tight mb-2">{item.title}</h3>
                      <p className="text-xs opacity-40 uppercase tracking-[0.2em] font-bold">{item.subtitle}</p>
                    </div>
                    <p className="text-sm lg:text-base font-light leading-relaxed opacity-80 mt-auto">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
