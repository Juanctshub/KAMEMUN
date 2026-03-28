"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, Quote, Mail, MapPin } from "lucide-react";

export default function MembersSection() {
  return (
    <section id="secretariado" className="relative w-full z-30 pb-32 pt-24 bg-brand-secondary overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-primary/[0.02] -skew-x-12 transform translate-x-1/4 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera de Sección - STAFF & Secretariado */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <p className="text-brand-primary-light font-bold tracking-[0.35em] uppercase mb-4 text-[10px] md:text-xs bg-brand-primary/5 px-6 py-2 rounded-full border border-brand-primary/20">
              Conoce a el STAFF
            </p>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter drop-shadow-sm flex items-baseline italic">
              <span className="text-brand-primary">Secret</span>
              <span className="text-brand-white">ariado</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* COLUMNA IZQUIERDA: EL ROSTRO (EXTREMA LIMPIEZA) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[580px] aspect-[4/5.4] group perspective-[2000px]">
              <motion.div 
                className="w-full h-full relative transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_50px_150px_rgba(0,0,0,0.8)] rounded-[3rem] cursor-pointer transform-gpu"
                style={{ willChange: "transform" }}
              >
                
                {/* CARA FRONTAL: FOTOGRAFÍA PURA (NAMING & RANKING) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[3rem] overflow-hidden border border-brand-white/10 bg-brand-secondary z-20">
                  <Image 
                    src="/images/m.jpg" 
                    alt="Antonella Sciulli - Secretaria General" 
                    fill 
                    quality={100}
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[2000ms] scale-105 group-hover:scale-100 brightness-110 contrast-110"
                    priority
                    sizes="(max-width: 768px) 100vw, 580px"
                  />
                  {/* Capa de Grano Cinematográfico para disimular pixelado y dar look editorial */}
                  <div className="absolute inset-0 bg-noise opacity-[0.08] pointer-events-none mix-blend-overlay z-10" />
                  
                  {/* Gradiente sutil inferior - MEJORADO para legibilidad del nombre */}
                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-brand-secondary via-brand-secondary/40 to-transparent z-20" />
                  
                  {/* Nombre y Cargo (Lo único que queda en el frente) */}
                  <div className="absolute bottom-12 md:bottom-16 left-8 md:left-12 right-8 md:right-12 z-30 pointer-events-none">
                    <p className="text-brand-primary-light font-black tracking-[0.4em] uppercase text-[10px] md:text-sm mb-2 md:mb-3 opacity-90 drop-shadow-xl border-l-2 border-brand-primary pl-4">Secretaría General</p>
                    <h3 className="text-4xl md:text-7xl font-serif font-black text-brand-white leading-[0.9] tracking-tight drop-shadow-2xl">
                      Antonella <span className="text-brand-primary italic">Sciulli</span>
                    </h3>
                  </div>
                </div>

                {/* CARA TRASERA: EL ALMA (CITA, BIO, CRITERIOS) */}
                {/* La cara trasera DEBE estar rotada 180deg y oculta inicialmente */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[3rem] overflow-hidden border border-brand-primary-light/30 bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-primary/20 shadow-2xl flex flex-col justify-center p-10 md:p-16 transform-gpu z-10">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-10">
                      <Quote className="w-8 h-8 text-brand-primary" />
                    </div>
                    
                    <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-brand-silver leading-relaxed italic mb-10">
                      "Mi compromiso es elevar el talento de Lara a escenarios globales, demostrando que la diplomacia es nuestra mejor herramienta."
                    </p>
                    
                    <div className="flex flex-col gap-6 mb-12 text-brand-accent/70 text-base md:text-lg font-light max-w-sm text-center">
                      <p>Consolidando una estructura académica de alto nivel que fusiona tradición e innovación regional.</p>
                    </div>

                    <div className="w-full h-[1px] bg-brand-white/10 mb-10" />
                    
                    <div className="grid grid-cols-1 gap-6 w-full">
                      <div className="flex items-center justify-center gap-4 text-brand-white/80">
                        <Mail className="w-5 h-5 text-brand-primary" />
                        <span className="font-serif tracking-wide">secretaria@kamemun.org</span>
                      </div>
                      <div className="flex items-center justify-center gap-4 text-brand-white/80">
                        <MapPin className="w-5 h-5 text-brand-primary" />
                        <span className="font-serif tracking-wide uppercase text-xs tracking-widest font-bold">Estado Lara, Venezuela</span>
                      </div>
                    </div>
                  </div>
                  {/* Noise para textura premium */}
                  <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* COLUMNA DERECHA: PUNTOS CLAVE EDITORIALES (Responsividad Mejorada) */}
          <div className="lg:col-span-6 space-y-16 pt-12 md:pt-16 pb-12 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <h3 className="text-4xl md:text-6xl font-serif text-brand-accent mb-10 italic leading-[1.1] drop-shadow-sm">
                "La excelencia no es un acto, sino el hábito de negociar por un futuro mejor."
              </h3>
              <p className="text-brand-silver text-xl md:text-2xl leading-relaxed font-light opacity-80 max-w-xl">
                Lideramos con resiliencia, formando delegados capaces de trascender fronteras mediante el arte de la oratoria.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12">
              {[
                { icon: Award, label: "Excelencia Académica", desc: "Protocolos rigurosos y formación integral para cada comité de alto nivel." },
                { icon: Target, label: "Liderazgo Regional", desc: "Proyectando el potencial del talento universitario de Lara al mundo entero." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 15 }}
                  className="flex items-start gap-8 p-10 rounded-[3rem] bg-brand-white/[0.02] border border-brand-white/5 hover:border-brand-primary/20 transition-all transform-gpu"
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-8 h-8 text-brand-primary-light" />
                  </div>
                  <div>
                    <h4 className="text-brand-accent font-black mb-2 uppercase tracking-[0.25em] text-xs opacity-90">{item.label}</h4>
                    <p className="text-brand-silver text-sm md:text-base font-light leading-relaxed opacity-70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-10 flex flex-col sm:flex-row gap-6"
            >
              <button className="px-14 py-6 bg-brand-primary/5 border border-brand-primary/20 text-brand-primary-light font-black rounded-full hover:bg-brand-primary hover:text-brand-secondary transition-all uppercase tracking-[0.4em] text-[10px] md:text-xs shadow-2xl">
                Acta de Instalación
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
