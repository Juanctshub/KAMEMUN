"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { num: "01", title: "Inicio", desc: "El punto de partida de la experiencia.", anchor: "inicio" },
  { num: "02", title: "Filosofía", desc: "Sabiudría, resiliencia y esencia Larense.", anchor: "filosofia" },
  { num: "03", title: "Secretariado", desc: "Conoce a quienes dirigen el modelo.", anchor: "secretariado" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 md:px-0 transition-all duration-300 pointer-events-none"
      >
        <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 md:py-4 rounded-full transition-all duration-500 bg-brand-secondary/85 backdrop-blur-3xl border border-brand-white/10 shadow-[0_10px_40px_rgba(0,140,140,0.2)] pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 relative bg-brand-accent rounded-full p-[2px]">
              <Image src="/images/logo-oficial.png" alt="KAMEMUN" fill className="object-contain" />
            </div>
            <span className="text-lg md:text-xl font-sans font-bold tracking-widest text-brand-accent">
              KAMEMUN
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden sm:block px-5 py-2 md:px-7 md:py-2.5 bg-brand-primary text-brand-secondary font-bold text-xs md:text-sm uppercase tracking-widest rounded-full hover:bg-brand-primary-light transition-all shadow-[0_0_15px_rgba(0,140,140,0.4)] hover:shadow-[0_0_25px_rgba(168,213,213,0.6)] transform hover:scale-105 active:scale-95">
              Comités
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="relative p-2 text-brand-accent hover:text-brand-primary-light transition-colors duration-300"
            >
              <Menu className="w-8 h-8 md:w-9 md:h-9" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* FULL SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.5, delay: 0.3 } }}
            className="fixed inset-0 z-[100] bg-brand-secondary/95 flex flex-col justify-center px-10 md:px-32"
          >
            {/* Botón de Cierre */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 text-brand-accent hover:text-brand-primary-light transition-all p-4"
            >
              <X className="w-12 h-12" />
            </motion.button>
            
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col gap-10 md:gap-16 w-full max-w-4xl mx-auto"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.title}
                  href={`#${link.anchor}`}
                  onClick={() => setIsMenuOpen(false)}
                  variants={{
                    open: { y: 0, opacity: 1, rotateX: 0 },
                    closed: { y: 50, opacity: 0, rotateX: -20 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group flex flex-col items-start origin-left"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-3xl md:text-5xl font-black text-brand-primary-light/30 group-hover:text-brand-primary-light transition-colors duration-500 font-sans">
                      {link.num}
                    </span>
                    <h2 className="text-5xl md:text-8xl font-serif text-brand-accent group-hover:text-brand-white transition-colors duration-500 tracking-tighter shadow-sm">
                      {link.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-brand-silver font-light text-sm md:text-xl tracking-widest uppercase ml-[72px] md:ml-[110px] opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500">
                    {link.desc}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
