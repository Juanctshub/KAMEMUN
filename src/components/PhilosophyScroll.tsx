"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Flag, Leaf, TreeDeciduous } from "lucide-react";

const philosophyItems = [
  {
    id: "01",
    pre: "I. La Identidad Independiente",
    title: "El Talento del Estado Lara",
    description: "KAMEMUN no nace de una facultad específica, sino de la convicción de que el talento universitario del Estado Lara es una fuerza imparable. Rompemos barreras académicas tradicionales. Creemos que la diplomacia no es exclusiva de las leyes o la política; es una herramienta universal. Nuestra independencia nos otorga la libertad de innovar y formar delegados que encarnen la excelencia de toda una región.",
    color: "bg-brand-secondary",
    IconComponent: Flag
  },
  {
    id: "02",
    pre: "II. La Filosofía 'Kame'",
    title: "Sabiduría, Paciencia y Resiliencia",
    description: "En un mundo que premia la inmediatez, nosotros elegimos la profundidad. No entendemos el debate como un grito, sino como una construcción meticulosa. La sabiduría en KAMEMUN se construye paso a paso, con paciencia para analizar cada arista y resiliencia para no ceder ante la marea turbulenta. La victoria no es de quien habla más rápido, sino de quien mejor comprende.",
    color: "bg-brand-primary",
    IconComponent: BrainCircuit
  },
  {
    id: "03",
    pre: "III. Metodología",
    title: "El Camino de la Tortuga",
    description: "Nuestra metodología se aleja de la preparación superficial. No corremos por obtener un premio; profundizamos para obtener conocimiento. Entendemos que el verdadero cambio requiere tiempo y raíces fuertes. Cultivamos una inteligencia con pasión, donde cada delegado aprende a nutrir su voz con datos, empatía y estrategia a largo plazo.",
    color: "bg-brand-primary-light", 
    textColor: "text-brand-secondary",
    IconComponent: Leaf
  },
  {
    id: "04",
    pre: "IV. Ecosistema de Crecimiento",
    title: "Donde Tu Voz Perdura",
    description: "KAMEMUN es más que una simulación; es un ecosistema. No buscamos oradores perfectos, buscamos mentes dispuestas a ser moldeadas por el rigor académico y la fraternidad de equipo. Al unirte, entras en un proceso donde tus ideas encuentran el eco necesario para trascender el aula y convertirse en propuestas reales de impacto global.",
    color: "bg-brand-secondary",
    IconComponent: TreeDeciduous
  }
];

const Card = ({ item, index, progress, range, targetScale }: any) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.4]);
  const iconRotation = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <div ref={containerRef} className="h-screen md:h-[90vh] flex items-center justify-center sticky top-0 md:top-[5vh] px-4 md:px-0">
      <motion.div 
        style={{ 
          scale, 
          opacity,
          willChange: "transform, scale, opacity" 
        }} 
        className={`flex flex-col relative w-full h-[70vh] md:h-[65vh] md:w-[75vw] mx-auto rounded-[3rem] p-8 md:p-14 overflow-hidden transform-gpu border border-brand-white/10 ${item.color} shadow-2xl`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.03] z-0" />
        
        <motion.div 
          style={{ rotate: iconRotation }} 
          className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none z-0"
        >
          {item.IconComponent && <item.IconComponent className="w-64 h-64 md:w-[400px] md:h-[400px] text-brand-white" />}
        </motion.div>

        <div className={`relative h-full flex flex-col justify-between z-10 ${item.textColor || "text-brand-accent"}`}>
          <div className="pt-6">
            <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase opacity-70 border-b border-current pb-2 mb-8 inline-block">
              {item.pre}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black leading-none tracking-tighter">
              {item.title}
            </h2>
          </div>
          
          <div className="max-w-2xl bg-brand-secondary/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-brand-white/10">
            <p className="text-base md:text-xl font-light leading-relaxed opacity-90">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function PhilosophyScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section id="filosofia" ref={container} className="relative w-full bg-brand-secondary overflow-hidden">
      {/* Intro Header */}
      <div className="h-[40vh] md:h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-brand-primary-light font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6"
        >
          Fases de la Metodología
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-9xl font-serif font-black text-brand-accent"
        >
          Filosofía <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-primary drop-shadow-[0_0_30px_rgba(0,140,140,0.6)] animate-pulse">KAMEMUN</span>
        </motion.h2>
      </div>

      {/* MOBILE SNAP CAROUSEL */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-6 pb-20">
        {philosophyItems.map((item, i) => (
          <div key={i} className="min-w-full snap-center h-[75vh] relative flex flex-col rounded-[3rem] p-8 border border-white/10 shadow-2xl overflow-hidden" style={{ backgroundColor: item.color.replace('bg-', '') === 'brand-secondary' ? '#000808' : item.color.replace('bg-', '') === 'brand-primary' ? '#008C8C' : '#A8D5D5' }}>
             <div className="absolute inset-0 bg-noise opacity-5" />
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="text-[10px] font-black tracking-widest uppercase opacity-60">Phase {item.id}</span>
                  <h3 className={`text-4xl font-serif font-black mt-2 leading-tight ${item.textColor || "text-white"}`}>{item.title}</h3>
                </div>
                <div className="bg-black/20 backdrop-blur-md p-6 rounded-[2rem] border border-white/5">
                  <p className={`text-sm font-light leading-relaxed ${item.textColor || "text-white/80"}`}>{item.description}</p>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* DESKTOP STACKED SCROLL */}
      <div className="hidden md:block">
        {philosophyItems.map((item, i) => {
          const targetScale = 1 - ( (philosophyItems.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              item={item} 
              index={i} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}
