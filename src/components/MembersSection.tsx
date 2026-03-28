"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, BookOpen } from "lucide-react";

export default function MembersSection() {
  return (
    <section id="secretariado" className="relative w-full z-30 pb-32 pt-24 bg-brand-secondary overflow-hidden">
      {/* Background Decorative Element - Optimizado */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-primary/[0.03] -skew-x-12 transform translate-x-1/4 z-0 pointer-events-none will-change-transform" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary-light font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm"
          >
            Liderazgo Institucional
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-serif font-black text-brand-accent tracking-tighter drop-shadow-sm"
          >
            Secretaría <span className="text-brand-primary">General</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: LA TARJETA 3D FLIPPABLE */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] group perspective-[2000px]">
              <motion.div 
                className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_20px_80px_rgba(0,0,0,0.4)] rounded-3xl cursor-pointer transform-gpu"
                style={{ willChange: "transform" }}
              >
                
                {/* CARA FRONTAL (FOTO) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl overflow-hidden border border-brand-primary/20 bg-brand-secondary">
                  <div className="absolute inset-0 bg-brand-secondary/40 mix-blend-multiply z-10" />
                  <Image 
                    src="/images/m.jpg" 
                    alt="Secretaria General - Antonella Sciulli" 
                    fill 
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent z-20" />
                  <div className="absolute bottom-10 left-10 z-30">
                    <h3 className="text-4xl md:text-5xl font-serif font-black text-brand-accent tracking-tight leading-none mb-2 drop-shadow-lg">
                      Antonella<br/>Sciulli
                    </h3>
                    <p className="text-brand-primary-light font-semibold tracking-widest uppercase text-xs md:text-sm drop-shadow-md">
                      Protocolo & Liderazgo
                    </p>
                  </div>
                </div>

                {/* CARA TRASERA (INFORMACIÓN / CARTA) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden border border-brand-primary-light/50 bg-gradient-to-br from-brand-primary/20 via-brand-secondary to-brand-secondary shadow-[0_0_50px_rgba(0,140,140,0.4)] flex flex-col justify-center p-10 transform-gpu">
                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                    <span className="w-12 h-[2px] bg-brand-primary-light mb-8 inline-block shadow-[0_0_10px_rgba(168,213,213,0.8)]"></span>
                    <p className="text-lg md:text-xl font-light text-brand-silver leading-relaxed italic mb-10 selection:bg-brand-primary-light selection:text-brand-secondary">
                      "Mi compromiso es elevar el talento de Lara a escenarios globales, demostrando que la diplomacia es nuestra mejor herramienta para el cambio."
                    </p>
                    <div className="flex flex-col items-center">
                      <span className="text-brand-primary font-bold tracking-widest uppercase text-[10px] mb-2">Contacto Directo</span>
                      <p className="text-brand-accent font-serif tracking-wide text-sm opacity-80">secretaria@kamemun.org</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* COLUMNA DERECHA: TEXTO EDITORIAL Y LOGROS */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="will-change-transform"
            >
              <h3 className="text-3xl md:text-4xl font-serif text-brand-accent mb-6 italic leading-snug">
                "La excelencia no es un acto, sino el hábito de negociar por un futuro mejor."
              </h3>
              <p className="text-brand-silver text-lg leading-relaxed font-light">
                Bajo la dirección de la Secretaría General, KAMEMUN ha consolidado una estructura académica de alto nivel que fusiona la tradición diplomática con la innovación regional del Estado Lara. Nuestra misión es formar delegados resilientes, capaces de dominar el arte de la oratoria y la resolución de conflictos.
              </p>
            </motion.div>

            {/* Grid de Puntos Clave */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-brand-white/5 border border-brand-white/10 hover:border-brand-primary/40 transition-colors transform-gpu"
              >
                <Award className="w-8 h-8 text-brand-primary-light mb-4" />
                <h4 className="text-brand-accent font-bold mb-2 uppercase tracking-widest text-sm">Excelencia Académica</h4>
                <p className="text-brand-silver text-sm font-light">Protocolos rigurosos y formación integral para cada comité.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-brand-white/5 border border-brand-white/10 hover:border-brand-primary/40 transition-colors transform-gpu"
              >
                <Target className="w-8 h-8 text-brand-primary-light mb-4" />
                <h4 className="text-brand-accent font-bold mb-2 uppercase tracking-widest text-sm">Liderazgo Regional</h4>
                <p className="text-brand-silver text-sm font-light">Proyectando el potencial del talento universitario de Lara.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-2xl bg-brand-white/5 border border-brand-white/10 hover:border-brand-primary/40 transition-colors transform-gpu"
              >
                <BookOpen className="w-8 h-8 text-brand-primary-light mb-4" />
                <h4 className="text-brand-accent font-bold mb-2 uppercase tracking-widest text-sm">Resiliencia Kame</h4>
                <p className="text-brand-silver text-sm font-light">Más que debatir, construimos soluciones a largo plazo.</p>
              </motion.div>

              <div className="flex items-center justify-center p-6 border-2 border-dashed border-brand-white/10 rounded-2xl opacity-40">
                <p className="text-brand-silver text-xs uppercase tracking-widest text-center">Innovación <br/> Continua</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <button className="px-10 py-4 bg-transparent border-2 border-brand-primary text-brand-primary font-black rounded-full hover:bg-brand-primary hover:text-brand-secondary transition-all uppercase tracking-widest text-xs">
                Ver Acta de Instalación
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

