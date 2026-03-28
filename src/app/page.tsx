"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroBackground from "@/components/HeroBackground";
import Hero3D from "@/components/Hero3D";
import PhilosophyScroll from "@/components/PhilosophyScroll";
import MembersSection from "@/components/MembersSection";
import FooterCTA from "@/components/FooterCTA";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-brand-secondary text-brand-accent overflow-hidden font-sans">
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      <ComingSoon isOpen={isComingSoonOpen} onClose={() => setIsComingSoonOpen(false)} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full relative min-h-screen flex flex-col"
          >
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            
            {/* HERO SECTION */}
            <div id="inicio" className="relative w-full min-h-screen pt-40 md:pt-48">
              <HeroBackground />
              <Hero3D />

              <section className="w-full h-full flex flex-col items-start justify-center px-6 md:px-24 lg:px-32 z-10 relative pointer-events-none">
                <div className="max-w-3xl pointer-events-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                  >
                    <p className="text-brand-primary-light font-black tracking-[0.4em] uppercase mb-4 text-xs md:text-sm flex items-center gap-4 drop-shadow-lg">
                      <span className="w-10 h-[2px] bg-brand-primary-light inline-block shadow-[0_0_10px_rgba(168,213,213,0.8)]"></span>
                      Más que un Modelo de Naciones Unidas
                    </p>
                    <div className="relative">
                      {/* Glow effects detrás del texto para emular SVPMUN */}
                      <div className="absolute -inset-10 bg-brand-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
                      
                      <h1 className="relative z-10 text-5xl sm:text-6xl md:text-[5rem] lg:text-[6.5rem] font-serif font-black tracking-tight leading-[0.95] text-brand-accent drop-shadow-2xl">
                        El Camino <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-light via-brand-white to-brand-primary drop-shadow-[0_0_40px_rgba(0,140,140,0.5)]">
                          de la Tortuga
                        </span>
                      </h1>
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                    className="mt-6 md:mt-10 text-brand-silver text-base md:text-xl font-light max-w-xl leading-relaxed drop-shadow-md"
                  >
                    Somos una delegación Universitaria Independiente del Estado Lara. Avanzamos con resiliencia y paciencia, convirtiendo cada debate en oportunidades.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="mt-8 md:mt-12 flex flex-col sm:row items-center sm:flex-row gap-6 w-full sm:w-auto text-sm md:text-base uppercase tracking-[0.2em]"
                  >
                    <button 
                      onClick={() => setIsComingSoonOpen(true)}
                      className="w-full sm:w-auto px-12 py-5 bg-brand-primary text-brand-secondary font-black rounded-full hover:bg-brand-primary-light transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,140,140,0.5)]"
                    >
                      Aplica Hoy
                    </button>
                    <button 
                      onClick={() => setIsMenuOpen(true)}
                      className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-brand-silver/50 text-brand-accent font-bold rounded-full hover:bg-brand-secondary hover:border-brand-primary-light transition-all text-center backdrop-blur-md"
                    >
                      Conoce Más
                    </button>
                  </motion.div>
                </div>
              </section>
            </div>

            {/* OTHER SECTIONS */}
            <PhilosophyScroll />
            <MembersSection onJoinClick={() => setIsComingSoonOpen(true)} />
            <FooterCTA />
            
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

