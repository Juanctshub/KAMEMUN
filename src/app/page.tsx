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
import SGMessage from "@/components/SGMessage";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-brand-secondary text-brand-accent overflow-x-hidden font-sans">
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
            <div id="inicio" className="relative w-full min-h-screen flex flex-col overflow-hidden">
              <HeroBackground />
              
              {/* Desktop: Hero3D is absolute positioned inside */}
              <div className="hidden md:block">
                <Hero3D />
              </div>

              <section className="w-full flex-1 flex flex-col px-6 z-10 relative pt-24 md:pt-48 md:px-24 lg:px-32 pointer-events-none">
                <div className="max-w-4xl pointer-events-auto text-center md:text-left flex flex-col items-center md:items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                    className="w-full"
                  >
                    <p className="text-brand-primary-light font-black tracking-[0.4em] uppercase mb-6 text-[10px] md:text-sm flex items-center gap-4 drop-shadow-lg justify-center md:justify-start">
                      <span className="w-6 md:w-10 h-[2px] bg-brand-primary-light inline-block shadow-[0_0_10px_rgba(168,213,213,0.8)]"></span>
                      Diplomacia Independiente
                    </p>
                    <div className="relative">
                      <div className="absolute -inset-10 bg-brand-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
                      
                      <h1 className="relative z-10 text-[2.8rem] sm:text-5xl md:text-[5rem] lg:text-[6.5rem] font-serif font-black tracking-tight leading-[0.85] text-brand-accent drop-shadow-2xl">
                        El Camino{" "}
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
                    className="mt-8 md:mt-10 text-brand-silver text-sm md:text-xl font-light max-w-lg leading-relaxed drop-shadow-md text-center md:text-left opacity-80"
                  >
                    Lideramos con resiliencia y paciencia, transformando cada debate en oportunidades reales ante el mundo.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto text-sm md:text-base uppercase tracking-[0.2em]"
                  >
                    <button 
                      onClick={() => setIsComingSoonOpen(true)}
                      className="w-full sm:w-auto px-14 py-5 md:px-16 md:py-6 bg-brand-primary text-brand-secondary font-black rounded-full hover:bg-brand-primary-light transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,140,140,0.5)] active:scale-95"
                    >
                      Aplica Hoy
                    </button>
                    <button 
                      onClick={() => setIsMenuOpen(true)}
                      className="w-full sm:w-auto px-14 py-5 md:px-16 md:py-6 border-2 border-brand-white/10 text-brand-white font-bold rounded-full hover:bg-brand-white/5 transition-all text-center backdrop-blur-md active:scale-95"
                    >
                      Conoce Más
                    </button>
                  </motion.div>
                </div>

                {/* Mobile: Turtle rendered BELOW text, inside the content flow */}
                <div className="md:hidden flex-1 flex items-end justify-center pb-8 pointer-events-none">
                  <Hero3D />
                </div>
              </section>
            </div>

            {/* OTHER SECTIONS */}
            <PhilosophyScroll />
            <MembersSection />
            <SGMessage />
            <FooterCTA onJoinClick={() => setIsComingSoonOpen(true)} />
            
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
