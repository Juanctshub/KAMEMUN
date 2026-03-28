"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, BookOpen, Quote } from "lucide-react";

export default function MembersSection() {
  return (
    <section id="secretariado" className="relative w-full z-30 pb-32 pt-24 bg-brand-secondary overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-primary/[0.02] -skew-x-12 transform translate-x-1/4 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera de Sección - Más compacta y elegante */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <p className="text-brand-primary-light font-bold tracking-[0.35em] uppercase mb-3 text-[10px] md:text-xs bg-brand-primary/5 px-4 py-1.5 rounded-full border border-brand-primary/20">
              Liderazgo Institucional
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-brand-accent tracking-tighter drop-shadow-sm">
              Secretaría <span className="text-brand-primary italic">General</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* COLUMNA IZQUIERDA: EL ROSTRO (IMAGEN PREDOMINANTE) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] aspect-[4/5] group perspective-[2000px]">
              <motion.div 
                className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_30px_100px_rgba(0,0,0,0.5)] rounded-[2rem] cursor-pointer transform-gpu"
                style={{ willChange: "transform" }}
              >
                
                {/* CARA FRONTAL: LA IMAGEN ES LA PROTAGONISTA */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[2rem] overflow-hidden border border-brand-white/10 bg-brand-secondary">
                  <Image 
                    src="/images/m.jpg" 
                    alt="Secretaria General - Antonella Sciulli" 
                    fill 
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[1500ms] scale-105 group-hover:scale-100"
                    priority
                  />
                  {/* Overlay gradiente muy sutil para que el nombre respire pero no tape */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 via-transparent to-transparent z-20 opacity-60" />
                  
                  {/* Texto Decorativo Mínimo */}
                  <div className="absolute bottom-8 left-8 z-30 pointer-events-none">
                    <p className="text-brand-primary-light font-bold tracking-widest uppercase text-[10px] mb-1 opacity-80">Antonella Sciulli</p>
                    <h3 className="text-2xl font-serif font-black text-brand-white leading-none tracking-tight">
                      Secretaria General
                    </h3>
                  </div>
                </div>

                {/* CARA TRASERA (INFORMACIÓN CORTA Y CONTACTO) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] overflow-hidden border border-brand-primary-light/30 bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-primary/10 shadow-2xl flex flex-col justify-center p-12 transform-gpu">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <Quote className="w-10 h-10 text-brand-primary/40 mb-6" />
                    <p className="text-base md:text-lg font-light text-brand-silver leading-relaxed italic mb-8">
                      "Mi compromiso es elevar el talento de Lara a escenarios globales, demostrando que la diplomacia es nuestra mejor herramienta."
                    </p>
                    <div className="w-full h-[1px] bg-brand-white/10 mb-8" />
                    <div className="flex flex-col items-center">
                      <span className="text-brand-primary font-bold tracking-widest uppercase text-[9px] mb-2 opacity-60">Contacto Oficial</span>
                      <p className="text-brand-accent font-serif tracking-wide text-sm">secretaria@kamemun.org</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* COLUMNA DERECHA: TEXTO EDITORIAL (MÁS EQUILIBRADO) */}
          <div className="lg:col-span-7 space-y-10 pt-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-serif text-brand-accent mb-6 italic leading-snug max-w-2xl">
                "La excelencia no es un acto, sino el hábito de negociar por un futuro mejor."
              </h3>
              <p className="text-brand-silver text-base md:text-lg leading-relaxed font-light max-w-2xl">
                Bajo la dirección de la Secretaría General, KAMEMUN ha consolidado una estructura académica de alto nivel que fusiona la tradición diplomática con la innovación regional del Estado Lara.
              </p>
            </motion.div>

            {/* Grid de Puntos Clave - Más ligero */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-brand-white/[0.03] border border-brand-white/5 hover:border-brand-primary/20 transition-all transform-gpu"
              >
                <Award className="w-6 h-6 text-brand-primary-light mb-3" />
                <h4 className="text-brand-accent font-bold mb-2 uppercase tracking-widest text-[11px]">Excelencia Académica</h4>
                <p className="text-brand-silver text-xs font-light leading-relaxed">Protocolos rigurosos y formación integral para cada comité.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-brand-white/[0.03] border border-brand-white/5 hover:border-brand-primary/20 transition-all transform-gpu"
              >
                <Target className="w-6 h-6 text-brand-primary-light mb-3" />
                <h4 className="text-brand-accent font-bold mb-2 uppercase tracking-widest text-[11px]">Liderazgo Regional</h4>
                <p className="text-brand-silver text-xs font-light leading-relaxed">Proyectando el potencial del talento universitario de Lara al mundo.</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <button className="px-8 py-3.5 bg-transparent border border-brand-primary/40 text-brand-primary font-bold rounded-full hover:bg-brand-primary hover:text-brand-secondary transition-all uppercase tracking-[0.2em] text-[10px]">
                Acta de Instalación
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
