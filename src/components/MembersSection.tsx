"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, BookOpen, Quote } from "lucide-react";

interface MembersSectionProps {
  onJoinClick: () => void;
}

export default function MembersSection({ onJoinClick }: MembersSectionProps) {
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
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-brand-accent tracking-tighter drop-shadow-sm">
              Antonella <span className="text-brand-primary italic">Sciulli</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* COLUMNA IZQUIERDA: EL ROSTRO (IMAGEN PREDOMINANTE) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px] aspect-[4/5] group perspective-[2000px]">
              <motion.div 
                className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_40px_120px_rgba(0,0,0,0.6)] rounded-[2.5rem] cursor-pointer transform-gpu"
                style={{ willChange: "transform" }}
              >
                
                {/* CARA FRONTAL: LA IMAGEN ES LA PROTAGONISTA */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[2.5rem] overflow-hidden border border-brand-white/10 bg-brand-secondary">
                  <Image 
                    src="/images/m.jpg" 
                    alt="Antonella Sciulli - Secretaria General" 
                    fill 
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[1500ms] scale-105 group-hover:scale-100"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent z-20 opacity-80" />
                  
                  {/* Texto Decorativo Swapped & Larger */}
                  <div className="absolute bottom-12 left-12 z-30 pointer-events-none">
                    <p className="text-brand-primary-light font-bold tracking-widest uppercase text-xs md:text-base mb-1 opacity-90 drop-shadow-lg">Secretaría General</p>
                    <h3 className="text-4xl md:text-5xl font-serif font-black text-brand-white leading-none tracking-tight drop-shadow-2xl">
                      Antonella Sciulli
                    </h3>
                  </div>
                </div>

                {/* CARA TRASERA (TODA LA BIO Y CRITERIOS) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2.5rem] overflow-hidden border border-brand-primary-light/30 bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-primary/20 shadow-2xl flex flex-col justify-center p-14 transform-gpu">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <Quote className="w-12 h-12 text-brand-primary/40 mb-8" />
                    <p className="text-xl md:text-2xl font-serif font-light text-brand-silver leading-relaxed italic mb-10">
                      "Mi compromiso es elevar el talento de Lara a escenarios globales, demostrando que la diplomacia es nuestra mejor herramienta."
                    </p>
                    
                    <div className="space-y-4 mb-10 text-brand-accent/80 text-sm md:text-base font-light">
                      <p>Consolidando una estructura académica de alto nivel.</p>
                      <p>Fusionando tradición e innovación regional.</p>
                    </div>

                    <div className="w-full h-[1px] bg-brand-white/10 mb-10" />
                    
                    <div className="flex flex-col items-center">
                      <span className="text-brand-primary font-black tracking-[0.3em] uppercase text-[10px] mb-3 opacity-60">Canal de Contacto</span>
                      <p className="text-brand-white font-serif tracking-wide text-lg">secretaria@kamemun.org</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* COLUMNA DERECHA: PUNTOS CLAVE Y CTA */}
          <div className="lg:col-span-6 space-y-12 pt-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-brand-accent mb-8 italic leading-snug">
                "La excelencia no es un acto, sino el hábito de negociar por un futuro mejor."
              </h3>
              <p className="text-brand-silver text-lg md:text-xl leading-relaxed font-light">
                Buscamos formar delegados resilientes, capaces de dominar el arte de la oratoria y la resolución de conflictos a nivel global.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Award, label: "Excelencia Académica", desc: "Protocolos rigurosos y formación integral para cada comité." },
                { icon: Target, label: "Liderazgo Regional", desc: "Proyectando el potencial del talento universitario de Lara al mundo." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-brand-white/[0.03] border border-brand-white/5 hover:border-brand-primary/20 transition-all transform-gpu"
                >
                  <item.icon className="w-8 h-8 text-brand-primary-light flex-shrink-0" />
                  <div>
                    <h4 className="text-brand-accent font-bold mb-1 uppercase tracking-widest text-[11px]">{item.label}</h4>
                    <p className="text-brand-silver text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-6 flex flex-col sm:flex-row gap-6"
            >
              <button 
                onClick={onJoinClick}
                className="px-10 py-5 bg-brand-primary text-brand-secondary font-black rounded-full hover:bg-brand-primary-light transition-all uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(0,140,140,0.4)]"
              >
                Únete a la Delegación
              </button>
              <button className="px-10 py-5 bg-transparent border border-brand-white/20 text-brand-accent font-bold rounded-full hover:bg-brand-secondary transition-all uppercase tracking-widest text-xs">
                Acta de Instalación
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

