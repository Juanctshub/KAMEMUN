"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

interface ComingSoonProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoon({ isOpen, onClose }: ComingSoonProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6"
        >
          {/* Backdrop con Blur Extremo */}
          <motion.div 
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(40px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-secondary/90 cursor-pointer"
          />

          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 10, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-primary/20 p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] border border-brand-white/10 shadow-[0_0_100px_rgba(0,140,140,0.3)] overflow-hidden text-center flex flex-col items-center"
          >
            {/* Botón Cerrar */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-brand-silver/50 hover:text-brand-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Decoración Central */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none"
            />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-8 mx-auto"
              >
                <Sparkles className="w-8 h-8 text-brand-primary-light" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-brand-primary-light font-black tracking-[0.5em] uppercase text-xs mb-4"
              >
                Acceso Reservado
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-serif font-black text-brand-accent tracking-tighter mb-8"
              >
                Muy <span className="italic text-brand-primary">Pronto</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-brand-silver text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto mb-12"
              >
                Un secreto está a punto de cambiar y revolucionar la forma en que el talento de Lara se proyecta al mundo. Prepárate para lo inesperado.
              </motion.p>

              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-brand-primary text-brand-secondary font-black rounded-full uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(0,140,140,0.5)]"
              >
                Entendido
              </motion.button>
            </div>

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
