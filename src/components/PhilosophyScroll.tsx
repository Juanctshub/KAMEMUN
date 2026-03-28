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
  const opacity = useTransform(progress, range, [1, 0.4]);
  // Efecto de rotación sutil para los íconos de fondo
  const iconRotation = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <div ref={containerRef} className="h-[80vh] md:h-[90vh] flex items-center justify-center sticky top-[12vh] md:top-[5vh] px-4 md:px-0">
      {/* DECORACIONES LATERALES ENRIQUECIDAS - Resuelven la sensación de vacío */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 opacity-30 pointer-events-none text-brand-primary">
        <div className="w-[1px] h-48 bg-gradient-to-b from-transparent via-brand-primary/50 to-transparent" />
        <div className="relative">
          <div className="w-4 h-4 rounded-full border border-brand-primary animate-pulse" />
          <div className="absolute inset-0 bg-brand-primary/20 blur-md rounded-full" />
        </div>
        <div className="text-[10px] font-black tracking-[0.5em] uppercase vertical-text opacity-40 h-32 flex items-center">RESILIENCIA</div>
        <div className="w-[1px] h-48 bg-gradient-to-t from-transparent via-brand-primary/50 to-transparent" />
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 opacity-30 pointer-events-none text-brand-primary-light">
        <div className="w-[1px] h-48 bg-gradient-to-b from-transparent via-brand-primary-light/50 to-transparent" />
        <div className="group relative">
          <div className="w-10 h-10 border border-brand-primary-light/30 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-brand-primary-light rounded-full shadow-[0_0_15px_#A8D5D5]" />
          </div>
        </div>
        <div className="text-[10px] font-black tracking-[0.5em] uppercase vertical-text opacity-40 h-32 flex items-center">SABIDURÍA</div>
        <div className="w-[1px] h-48 bg-gradient-to-t from-transparent via-brand-primary-light/50 to-transparent" />
      </div>

      <motion.div 
        style={{ 
          scale, 
          opacity,
          top: `calc(index * 20px)`,
          willChange: "transform, scale, opacity" 
        }} 
        className={`flex flex-col relative w-full h-[60vh] md:h-[65vh] md:w-[75vw] mx-auto rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-14 origin-top border border-brand-white/10 ${item.color} overflow-hidden transform-gpu shadow-2xl`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay z-0" />
        
        {/* ICONO GIGANTE TEMÁTICO FLOTANTE */}
        <motion.div 
          style={{ rotate: iconRotation }} 
          className="absolute -right-16 -bottom-16 md:-right-20 md:-bottom-20 opacity-[0.1] pointer-events-none z-0 transform-gpu"
        >
          {item.IconComponent && (
            <item.IconComponent className="w-64 h-64 md:w-[400px] md:h-[400px] text-brand-white" />
          )}
        </motion.div>

        <div className={`relative h-full flex flex-col justify-between z-10 ${item.textColor || "text-brand-accent"}`}>
          <div className="max-w-3xl drop-shadow-sm relative z-10 pt-2">
            <p className="font-bold tracking-[0.3em] uppercase mb-4 text-[10px] md:text-xs opacity-90 backdrop-blur-sm inline-block px-4 py-2 rounded-full bg-brand-white/10 border border-brand-white/10">
              {item.pre}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.1] mb-4">
              {item.title}
            </h2>
          </div>
          
          <div className="max-w-2xl mt-auto z-10 p-6 md:p-8 rounded-[1.8rem] md:rounded-[2rem] backdrop-blur-md bg-brand-secondary/40 border border-brand-white/10 shadow-xl">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed text-brand-accent/90">
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
    <section id="filosofia" ref={container} className="relative mt-20 md:mt-0 w-full z-20 pb-40 overflow-hidden">
      <div className="w-full text-center py-20 md:py-32 px-6 relative z-10">
        <p className="text-brand-primary-light font-black tracking-[0.3em] uppercase mb-4 text-[10px] md:text-xs">Nuestra Esencia</p>
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black text-brand-accent tracking-tighter drop-shadow-2xl">
          Filosofía <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light to-brand-primary drop-shadow-[0_0_20px_rgba(0,140,140,0.8)] animate-pulse">KAMEMUN</span>
        </h2>
      </div>

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
    </section>
  );
}
