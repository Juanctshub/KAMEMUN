"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, Quote, Mail } from "lucide-react";

interface MembersSectionProps {
  // Ya no recibe onJoinClick aquí, se movió al Footer
}

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
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-brand-accent tracking-tighter drop-shadow-sm">
              <span className="text-brand-primary italic">Secretariado</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* COLUMNA IZQUIERDA: EL ROSTRO (LIMPIEZA TOTAL) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[580px] aspect-[4/5.2] group perspective-[2000px]">
              <motion.div 
                className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_50px_150px_rgba(0,0,0,0.7)] rounded-[3rem] cursor-pointer transform-gpu"
                style={{ willChange: "transform" }}
              >
                
                {/* CARA FRONTAL: SOLO NOMBRE Y CARGO (SIN TEXTOS ATRAVESADOS) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[3rem] overflow-hidden border border-brand-white/10 bg-brand-secondary">
                  <Image 
                    src="/images/m.jpg" 
                    alt="Antonella Sciulli - Secretaria General" 
                    fill 
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
                    priority
                  />
                  {/* Gradiente sutil inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent z-20 opacity-90" />
                  
                  {/* Nombre y Cargo (Lo único que queda en el frente) */}
                  <div className="absolute bottom-14 left-14 z-30 pointer-events-none">
                    <p className="text-brand-primary-light font-black tracking-[0.3em] uppercase text-sm md:text-lg mb-2 opacity-90 drop-shadow-xl">Secretaría General</p>
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-brand-white leading-none tracking-tight drop-shadow-2xl">
                      Antonella <br /> Sciulli
                    </h3>
                  </div>
                </div>

                {/* CARA TRASERA (CONTENIDO MOVIDO: CITA, BIO, CRITERIOS) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[3rem] overflow-hidden border border-brand-primary-light/30 bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-primary/20 shadow-2xl flex flex-col justify-center p-16 transform-gpu">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <Quote className="w-16 h-16 text-brand-primary/30 mb-10" />
                    
                    <p className="text-xl md:text-2xl font-serif font-light text-brand-silver leading-relaxed italic mb-12">
                      "Mi compromiso es elevar el talento de Lara a escenarios globales, demostrando que la diplomacia es nuestra mejor herramienta."
                    </p>
                    
                    <div className="space-y-6 mb-12 text-brand-accent/70 text-base md:text-lg font-light max-w-sm">
                      <p className="border-l-2 border-brand-primary/40 pl-6 text-left">Consolidando una estructura académica de alto nivel.</p>
                      <p className="border-l-2 border-brand-primary/40 pl-6 text-left">Fusionando tradición e innovación regional.</p>
                    </div>

                    <div className="w-full h-[1px] bg-brand-white/10 mb-10" />
                    
                    <div className="flex flex-col items-center gap-4">
                      <span className="text-brand-primary font-black tracking-[0.4em] uppercase text-[10px] opacity-60">Canal de Contacto</span>
                      <div className="flex items-center gap-3 text-brand-white font-serif tracking-wide text-xl">
                        <Mail className="w-5 h-5 text-brand-primary/60" />
                        <span>secretaria@kamemun.org</span>
                      </div>
                    </div>
                  </div>
                  {/* Noise para textura premium */}
                  <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* COLUMNA DERECHA: PUNTOS CLAVE EDITORIALES */}
          <div className="lg:col-span-6 space-y-16 pt-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <h3 className="text-4xl md:text-5xl font-serif text-brand-accent mb-10 italic leading-[1.15] drop-shadow-sm">
                "La excelencia no es un acto, sino el hábito de negociar por un futuro mejor."
              </h3>
              <p className="text-brand-silver text-xl md:text-2xl leading-relaxed font-light opacity-80">
                Bajo la dirección de la Secretaría General, KAMEMUN se proyecta como el faro diplomático del Estado Lara, formando líderes resilientes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-10">
              {[
                { icon: Award, label: "Excelencia Académica", desc: "Protocolos rigurosos y formación integral para cada comité de alta gama." },
                { icon: Target, label: "Liderazgo Regional", desc: "Proyectando el potencial del talento universitario de Lara al mundo entero." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 15 }}
                  className="flex items-start gap-8 p-8 rounded-[2.5rem] bg-brand-white/[0.02] border border-brand-white/5 hover:border-brand-primary/20 transition-all transform-gpu"
                >
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-brand-primary-light" />
                  </div>
                  <div>
                    <h4 className="text-brand-accent font-black mb-2 uppercase tracking-[0.2em] text-xs opacity-90">{item.label}</h4>
                    <p className="text-brand-silver text-sm font-light leading-relaxed opacity-70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <button className="px-12 py-5 bg-transparent border-2 border-brand-white/10 text-brand-accent font-black rounded-full hover:bg-brand-secondary hover:border-brand-primary transition-all uppercase tracking-[0.3em] text-xs shadow-xl">
                Acta de Instalación
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
