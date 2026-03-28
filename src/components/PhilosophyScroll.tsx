"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Flag, Leaf, TreeDeciduous } from "lucide-react";

// Eliminamos las imágenes "papa.png" y "r.png" que no cuadraban y usaremos iconos limpios de Lucide-React
// relacionados al contexto de las fases para mayor elegancia y evitar recargar la interfaz.
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
  // Efecto de rotación sutil para los íconos de fondo
  const iconRotation = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ 
          scale, 
          top: `calc(-5vh + ${index * 25}px)`,
          willChange: "transform, scale, opacity" 
        }} 
        className={`flex flex-col relative w-full h-auto min-h-[75vh] md:h-[85vh] md:w-[85vw] mx-auto rounded-[3.5rem] p-8 md:p-16 xl:p-24 origin-top shadow-[0_-10px_50px_rgba(0,0,0,0.5)] border border-brand-white/10 ${item.color} overflow-hidden transform-gpu`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay z-0 will-change-transform" />
        
        {/* ICONO GIGANTE TEMÁTICO FLOTANTE (REEMPLAZA A LAS IMAGENES DESPROPORCIONADAS) */}
        <motion.div 
          style={{ rotate: iconRotation, willChange: "transform, rotate" }} 
          className="absolute -right-10 -bottom-10 md:-right-20 md:-bottom-20 opacity-10 pointer-events-none z-0 transform-gpu"
        >
          {item.IconComponent && (
            <item.IconComponent className="w-80 h-80 md:w-[500px] md:h-[500px] text-brand-white drop-shadow-2xl" />
          )}
        </motion.div>

        <div className={`relative h-full flex flex-col justify-between z-10 ${item.textColor || "text-brand-accent"}`}>
          {/* Número Flotante Mínimo para respirar */}
          <div className="absolute top-0 right-0 text-6xl md:text-9xl font-black opacity-10 md:opacity-15 pointer-events-none uppercase tracking-tighter mix-blend-overlay">
            {item.id}
          </div>

          <div className="max-w-4xl drop-shadow-md relative z-10 pt-4 md:pt-0">
            <p className="font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 text-xs md:text-sm opacity-90 backdrop-blur-sm inline-block px-4 py-2 rounded-full bg-brand-white/10 border border-brand-white/20 shadow-sm">
              {item.pre}
            </p>
            {/* Texto ajustado para no desbordar en fase 2, 3, 4 */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight drop-shadow-lg leading-[1.1] mb-6">
              {item.title}
            </h2>
          </div>
          
          <div className="max-w-4xl mt-auto z-10 p-6 md:p-10 rounded-[2rem] backdrop-blur-xl bg-brand-secondary/30 border border-brand-white/10 shadow-lg">
            <p className="text-base md:text-xl xl:text-2xl font-light leading-relaxed drop-shadow-md text-brand-accent">
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
    <section id="filosofia" ref={container} className="relative mt-20 md:mt-0 w-full z-20 pb-32 overflow-hidden">
      <div className="w-full text-center py-20 md:py-32 px-6 relative z-10">
        <p className="text-brand-primary-light font-black tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">Nuestra Esencia</p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-brand-accent tracking-tight drop-shadow-[0_20px_50px_rgba(0,140,140,0.4)]">
          Filosofía KAMEMUN
        </h2>
      </div>

      {philosophyItems.map((item, i) => {
        const targetScale = 1 - ( (philosophyItems.length - i) * 0.05);
        return (
          <Card 
            key={i} 
            i={i} 
            item={item} 
            index={i} 
            progress={scrollYProgress} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale} 
          />
        );
      })}
    </section>
  );
}
