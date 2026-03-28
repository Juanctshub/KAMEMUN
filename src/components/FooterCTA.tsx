"use client";

import { motion } from "framer-motion";

interface FooterCTAProps {
  onJoinClick: () => void;
}

export default function FooterCTA({ onJoinClick }: FooterCTAProps) {
  return (
    <footer className="w-full relative z-10 pt-32 pb-12 px-6 md:px-20 bg-brand-secondary border-t border-brand-white/5 overflow-hidden">
      {/* Decorative background blur for footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-sans font-black tracking-tighter text-brand-accent mb-6"
        >
          ¿Listo para trascender?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-brand-silver text-xl font-light mb-12 max-w-2xl leading-relaxed"
        >
          Demuestra el talento universitario en los Modelos de Naciones Unidas. Sigue nuestras redes para enterarte de nuestras próximas convocatorias. 🐢💚
        </motion.p>
        
        {/* Ozone style micro-interaction on CTA button */}
        <motion.button
          onClick={onJoinClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-12 py-5 bg-brand-primary text-brand-secondary font-black rounded-full overflow-hidden group shadow-[0_0_30px_rgba(0,140,140,0.4)] hover:shadow-[0_0_40px_rgba(168,213,213,0.6)] transition-shadow duration-500"
        >
          <span className="relative z-10 text-[15px] md:text-lg uppercase tracking-widest flex items-center gap-3">
            Únete a la Delegación
          </span>
          {/* Spotlight hover effect internally */}
          <div className="absolute inset-0 bg-brand-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.button>

        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-brand-silver/50 text-[10px] md:text-xs uppercase tracking-widest border-t border-brand-white/5 pt-8 gap-6">
          <p>© {new Date().getFullYear()} KAMEMUN. Todos los derechos reservados.</p>
          <div className="flex gap-8 items-center font-bold">
            <a 
              href="https://www.instagram.com/_kamemun/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-primary-light transition-colors duration-300"
            >
              Instagram
            </a>
            <span className="opacity-20">|</span>
            <a 
              href="https://agreda-portfolio.vercel.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-primary-light transition-colors duration-300 lowercase italic"
            >
              creado por fotagreda
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
