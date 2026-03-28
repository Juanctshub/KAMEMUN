"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, Star, Hexagon } from "lucide-react";
import Image from "next/image";

export default function SGMessage() {
  return (
    <section id="mensaje-sg" className="relative w-full py-24 md:py-40 bg-brand-secondary overflow-hidden">
      {/* ===== BACKGROUND LAYERS ===== */}
      
      {/* Architectural Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#A8D5D5_1px,transparent_1px),linear-gradient(to_bottom,#A8D5D5_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-brand-primary/8 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-primary-light/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/3 blur-[250px] rounded-full pointer-events-none" />

      {/* Decorative Side Elements - Left */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 opacity-15 pointer-events-none">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-primary to-transparent" />
        <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-brand-primary/50 to-transparent" />
        <Star className="w-3 h-3 text-brand-primary-light opacity-50" />
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-primary to-transparent" />
      </div>

      {/* Decorative Side Elements - Right */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 opacity-15 pointer-events-none">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-primary-light to-transparent" />
        <Hexagon className="w-4 h-4 text-brand-primary-light animate-pulse" />
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-brand-primary-light/50 to-transparent" />
        <Star className="w-3 h-3 text-brand-primary opacity-50" />
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-primary-light to-transparent" />
      </div>

      {/* Floating Decorative Dots */}
      <div className="absolute top-20 right-[20%] w-2 h-2 rounded-full bg-brand-primary/20 animate-pulse pointer-events-none" />
      <div className="absolute bottom-32 left-[15%] w-3 h-3 rounded-full bg-brand-primary-light/15 animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 rounded-full bg-brand-primary/25 animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-brand-primary/30" />
            <p className="text-brand-primary-light font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">Mensaje Oficial</p>
            <div className="w-10 h-[1px] bg-brand-primary/30" />
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black text-brand-accent tracking-tighter leading-none">
            Palabras de{" "}
            <span className="text-brand-primary italic">Liderazgo</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-8 h-[1px] bg-brand-primary/20" />
            <div className="w-2 h-2 rounded-full bg-brand-primary/40" />
            <div className="w-8 h-[1px] bg-brand-primary/20" />
          </div>
        </motion.div>

        {/* ===== THE LETTER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-brand-white/[0.02] to-brand-primary/[0.02] border border-brand-white/5 p-8 md:p-16 lg:p-20 rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.3)] backdrop-blur-sm overflow-hidden"
        >
          {/* Card Internal Decorations */}
          <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
          <Quote className="absolute top-6 right-6 md:top-10 md:right-10 w-20 h-20 md:w-40 md:h-40 text-brand-primary/[0.03] rotate-12 pointer-events-none" />
          <Quote className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-16 h-16 md:w-32 md:h-32 text-brand-primary-light/[0.03] -rotate-12 pointer-events-none" />

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 md:w-28 md:h-28 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-primary/20 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-brand-primary/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20 md:w-28 md:h-28 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-brand-primary/20 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-brand-primary/20 to-transparent" />
          </div>

          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* First paragraph - Drop cap */}
            <p className="text-brand-accent text-base md:text-xl leading-[1.9] font-light first-letter:text-5xl md:first-letter:text-6xl first-letter:font-black first-letter:text-brand-primary first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
              Delegados, hace tres años pisé mi primer Modelo de Naciones Unidas, sin imaginar que esa primera orden del día y todas las directivas que redacté redefinirían mi concepto de liderazgo. Hoy, como Secretaria General de KAMEMUN, me dirijo a ustedes no solo desde la formalidad del cargo, sino desde el corazón de una estudiante de arquitectura de la UCV que ve el mundo como un plano que necesita ser rediseñado.
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-[1px] bg-brand-white/5" />
              <Sparkles className="w-4 h-4 text-brand-primary/30" />
              <div className="flex-1 h-[1px] bg-brand-white/5" />
            </div>
            
            <p className="text-brand-silver text-base md:text-lg leading-[1.9] font-light opacity-85">
              Amo enseñar y para mí, KAMEMUN no es solo un evento; es la oportunidad de dejar una huella en cada uno de ustedes, a quienes como suelo decir, veo como mi familia. Quiero que este modelo sea sus cimientos, donde aprendan no solo a debatir, sino a construir puentes donde otros ven muros y a encontrar soluciones para problemas que parecen no tener salida.
            </p>

            {/* Featured Quote Block */}
            <div className="relative my-10 md:my-14 py-8 md:py-10 px-6 md:px-12 border-l-4 border-brand-primary bg-gradient-to-r from-brand-primary/5 to-transparent rounded-r-2xl">
              <Quote className="absolute -top-4 -left-3 w-8 h-8 text-brand-primary opacity-40" />
              <p className="text-brand-primary-light text-base md:text-lg font-medium leading-[1.9] italic">
                Como crisera de corazón, mi hogar diplomático siempre han sido los comités de crisis porque ahí aprendes que el tiempo es un recurso invaluable y que una decisión rápida y fundamentada puede cambiar el curso de la historia.
              </p>
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-brand-primary/10" />
            </div>

            <p className="text-brand-silver text-base md:text-lg leading-[1.9] font-light opacity-85">
              Esa misma adrenalina y exigencia técnica son las que me definen; les prometo un modelo exigente, serio y profundamente académico, pero también un espacio seguro donde sus voces importen, no tengan miedo de equivocarse; el error es solo un ajuste en el diseño.
            </p>

            {/* Closing Statement */}
            <div className="pt-10 border-t border-brand-white/10">
              <p className="text-brand-accent text-lg md:text-2xl font-black leading-snug tracking-tight">
                Prepárense para debatir, para aprender y, sobre todo, para dejar su propia huella.{" "}
                <span className="text-brand-primary">Bienvenidos a casa, delegados, bienvenidos a KAMEMUN.</span>
              </p>
            </div>
          </div>
          
          {/* ===== SIGNATURE BLOCK ===== */}
          <div className="relative z-10 mt-14 md:mt-20 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 border-t border-brand-white/5 pt-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-brand-accent font-black text-2xl md:text-3xl tracking-tight">Antonella Sciulli</span>
              <span className="text-brand-primary-light font-black tracking-[0.3em] uppercase text-[9px] md:text-[10px] mt-2">Secretaria General / Arquitecta UCV</span>
            </div>
            
            {/* Two Logos: KAMEMUN + UCV */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-brand-primary/20 flex items-center justify-center p-1 bg-brand-accent/80">
                <Image src="/images/logo-oficial.png" alt="KAMEMUN" width={44} height={44} className="opacity-90 hover:opacity-100 transition-opacity object-contain" />
              </div>
              <div className="w-14 h-14 rounded-full border border-brand-primary/20 flex items-center justify-center p-2.5 bg-brand-white/[0.03]">
                <Image src="/images/ucv-logo.svg" alt="UCV" width={36} height={36} className="grayscale opacity-50 hover:opacity-80 transition-opacity object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
