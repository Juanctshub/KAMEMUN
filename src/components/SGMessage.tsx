"use client";

import { motion } from "framer-motion";
import { Quote, PenLine, Ruler, Layers } from "lucide-react";
import Image from "next/image";

export default function SGMessage() {
  return (
    <section id="mensaje-sg" className="relative w-full py-32 bg-brand-secondary overflow-hidden">
      {/* Background Architectural Patterns (UCV/Architecture Inspiration) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#A8D5D5_1px,transparent_1px),linear-gradient(to_bottom,#A8D5D5_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,140,140,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LADO IZQUIERDO: TÍTULO Y DECORACIÓN */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-brand-primary/40 block" />
                <p className="text-brand-primary-light font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">Propósito & Visión</p>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-accent tracking-tighter leading-none">
                Palabras de <br />
                <span className="text-brand-primary italic">Liderazgo</span>
              </h2>

              <div className="flex flex-col gap-6 pt-10">
                <div className="flex items-center gap-6 text-brand-silver/40">
                  <Ruler className="w-6 h-6" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Concepto Arquitectónico</span>
                </div>
                <div className="flex items-center gap-6 text-brand-silver/40">
                  <Layers className="w-6 h-6" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Estructura Académica</span>
                </div>
                <div className="flex items-center gap-6 text-brand-silver/40">
                  <PenLine className="w-6 h-6" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Trazo Diplomático</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LADO DERECHO: EL MENSAJE (EL ALMA) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative bg-brand-white/[0.02] border border-brand-white/5 p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl backdrop-blur-sm overflow-hidden"
            >
              {/* Noise & Texture */}
              <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
              <Quote className="absolute -top-10 -right-10 w-64 h-64 text-brand-primary/5 opacity-40 z-0 rotate-12" />

              <div className="relative z-10">
                <div className="prose prose-invert max-w-none space-y-8">
                  <p className="text-brand-accent text-lg md:text-2xl font-serif font-light leading-relaxed first-letter:text-6xl first-letter:font-black first-letter:text-brand-primary first-letter:mr-3 first-letter:float-left first-letter:mt-1 drop-shadow-sm italic">
                    Delegados, hace tres años pisé mi primer Modelo de Naciones Unidas, sin imaginar que esa primera orden del día y todas las directivas que redacté redefinirían mi concepto de liderazgo. Hoy, como Secretaria General de KAMEMUN, me dirijo a ustedes no solo desde la formalidad del cargo, sino desde el corazón de una estudiante de arquitectura de la UCV que ve el mundo como un plano que necesita ser rediseñado.
                  </p>
                  
                  <p className="text-brand-silver text-base md:text-xl font-light leading-relaxed opacity-90 text-justify md:text-left">
                    Amo enseñar y para mí, KAMEMUN no es solo un evento; es la oportunidad de dejar una huella en cada uno de ustedes, a quienes como suelo decir, veo como mi familia. Quiero que este modelo sea sus cimientos, donde aprendan no solo a debatir, sino a construir puentes donde otros ven muros y a encontrar soluciones para problemas que parecen no tener salida.
                  </p>

                  <div className="py-6 border-y border-brand-primary/10">
                    <p className="text-brand-primary-light text-base md:text-xl font-serif italic font-medium leading-relaxed text-center">
                      "Como crisera de corazón, mi hogar diplomático siempre han sido los comités de crisis porque ahí aprendes que el tiempo es un recurso invaluable y que una decisión rápida y fundamentada puede cambiar el curso de la historia."
                    </p>
                  </div>

                  <p className="text-brand-silver text-base md:text-xl font-light leading-relaxed opacity-90 text-justify md:text-left">
                    Esa misma adrenalina y exigencia técnica son las que me definen; les prometo un modelo exigente, serio y profundamente académico, pero también un espacio seguro donde sus voces importen, no tengan miedo de equivocarse; el error es solo un ajuste en el diseño.
                  </p>

                  <p className="text-brand-accent text-xl md:text-2xl font-serif font-black tracking-tight leading-tight pt-8 border-t border-brand-white/10 uppercase">
                    Prepárense para debatir, para aprender y, sobre todo, para dejar su propia huella. Bienvenidos a casa, delegados, bienvenidos a KAMEMUN.
                  </p>
                </div>
                
                {/* Firma o Label Final */}
                <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 border-t border-brand-white/5 pt-10">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-brand-accent font-serif font-black text-2xl md:text-3xl tracking-tight">Antonella Sciulli</span>
                    <span className="text-brand-primary-light font-black tracking-[0.4em] uppercase text-[9px] md:text-[10px] mt-2">Secretaria General / Arquitecta UCV</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full border border-brand-primary/30 flex items-center justify-center p-3">
                      <Image src="/images/kamemun-logo.png" alt="Seal" width={40} height={40} className="grayscale opacity-40 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
