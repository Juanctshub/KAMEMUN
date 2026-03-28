"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orbe Principal (Verde Turquesa Brilloso) - Belleza con Rendimiento */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.45, 0.3],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[65vw] h-[65vw] rounded-full blur-[80px] transform-gpu"
        style={{
          background: "radial-gradient(circle, rgba(0,140,140,0.5) 0%, rgba(0,140,140,0) 70%)",
          willChange: "transform, opacity"
        }}
      />
      
      {/* Orbe Secundario (Hueso/Crema mezclado) */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
          y: [0, 80, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] -right-[10%] w-[55vw] h-[55vw] rounded-full blur-[100px] transform-gpu"
        style={{
          background: "radial-gradient(circle, rgba(247,243,227,0.3) 0%, rgba(247,243,227,0) 70%)",
          willChange: "transform, opacity"
        }}
      />

      {/* Orbe Terciario Flotando (Deep Navy base para contraste) */}
      <motion.div
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.2, 0.35, 0.2],
          y: [0, -60, 0],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] left-[15%] w-[45vw] h-[45vw] rounded-full blur-[70px] transform-gpu"
        style={{
          background: "radial-gradient(circle, rgba(5,22,26,0.4) 0%, rgba(5,22,26,0) 75%)",
          willChange: "transform, opacity"
        }}
      />

      {/* Partículas Flotantes - Nieve / Polvo Iluminado */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-brand-accent rounded-full shadow-[0_0_10px_rgba(247,243,227,0.8)] transform-gpu"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              willChange: "transform, opacity"
            }}
            animate={{
              y: [0, -100 - Math.random() * 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

