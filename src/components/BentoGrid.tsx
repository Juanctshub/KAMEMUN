"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Shield, BrainCircuit, Globe, Leaf } from "lucide-react";

// Integrating the provided lore from the publications
const bentoItems = [
  {
    title: "No corremos, profundizamos",
    description: "Kame (tortuga) no surge por casualidad. Representa la sabiduría que construimos paso a paso. No buscamos rapidez superficial, sino impacto verdadero.",
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-secondary/80 to-brand-primary/20",
    icon: <BrainCircuit className="w-8 h-8 md:w-12 md:h-12 text-brand-primary-light mb-4 opacity-80" />
  },
  {
    title: "Resiliencia Constante",
    description: "Avanzamos con paciencia, convirtiendo cada obstáculo en un escalón.",
    className: "md:col-span-1 md:row-span-1 bg-brand-secondary/60",
    icon: <Shield className="w-8 h-8 text-brand-primary opacity-80 mb-4" />
  },
  {
    title: "Talento Larense",
    description: "Orgullosamente una delegación universitaria independiente del Estado Lara.",
    className: "md:col-span-1 md:row-span-1 bg-brand-secondary/60",
    icon: <Globe className="w-8 h-8 text-brand-primary opacity-80 mb-4" />
  },
  {
    title: "Donde tu voz se nutre",
    description: "Cultivamos inteligencia con pasión, creando un espacio académico donde el verdadero cambio requiere tiempo y tus ideas perduran.",
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-r from-brand-secondary/60 to-brand-primary-light/10",
    icon: <Leaf className="w-8 h-8 md:w-10 md:h-10 text-brand-primary-light mb-4 opacity-80" />
  },
];

export default function BentoGrid() {
  return (
    <section id="filosofia" className="w-full py-32 px-6 md:px-20 relative z-10 bg-brand-secondary/50 backdrop-blur-3xl border-t border-brand-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-brand-primary-light font-bold tracking-[0.2em] uppercase mb-2 text-sm">Nuestra Esencia</p>
          <h2 className="text-4xl md:text-6xl font-sans font-black text-brand-accent tracking-tighter">
            Filosofía KAMEMUN
          </h2>
          <p className="mt-4 text-brand-silver text-lg max-w-2xl font-light">
            Como la tortuga, convertimos cada debate y cada oportunidad en ladrillos sólidos de entendimiento global.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[280px]">
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 0.98 }}
              className={`relative p-8 md:p-10 rounded-[2.5rem] border border-brand-silver/10 overflow-hidden group cursor-pointer backdrop-blur-md flex flex-col justify-between ${item.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/10 transition-colors duration-500" />
              
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <ArrowUpRight className="text-brand-primary-light w-6 h-6" />
              </div>
              
              <div className="relative z-10">
                {item.icon}
              </div>

              <div className="flex flex-col justify-end relative z-10 mt-6 md:mt-0">
                <h3 className="text-2xl md:text-3xl font-black text-brand-accent mb-3 tracking-tight">{item.title}</h3>
                <p className="text-brand-silver/80 text-sm md:text-[15px] leading-relaxed font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
