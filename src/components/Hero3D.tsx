"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calcula la rotación (inversa para que siga al cursor)
    x.set((event.clientY - centerY) / 15); // Tilt Vertical
    y.set(-(event.clientX - centerX) / 15); // Tilt Horizontal
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Suavizando la rotación para darle mayor dramatismo a tortuga.webp
  const rotateX = useTransform(x, [-15, 15], [-25, 25]);
  const rotateY = useTransform(y, [-15, 15], [-25, 25]);

  if (!mounted) return null;

  return (
    <div className="absolute right-0 md:right-[-5%] top-[75%] md:top-[55%] -translate-y-1/2 w-full md:w-[55%] lg:w-[45%] h-[40vh] md:h-screen z-0 flex items-center justify-center pointer-events-none md:pointer-events-auto overflow-visible">
      <motion.div
        className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]"
        style={{ perspective: 1500 }}
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-full h-full relative flex items-center justify-center group"
        >
          {/* Anillos de luz traseros (Profundidad masiva) */}
          <div 
            className="absolute inset-0 rounded-full bg-brand-primary/10 blur-3xl group-hover:bg-brand-primary/30 transition-all duration-700"
            style={{ transform: "translateZ(-100px) scale(1)" }}
          />

          {/* LA TORTUGA FLOTANTE EN 3D */}
          <div 
            className="absolute inset-0 flex items-center justify-center drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
            style={{ transform: "translateZ(80px)" }}
          >
            <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110">
              <Image 
                src="/images/tortuga.webp" 
                alt="KAMEMUN 3D Turtle Parallax" 
                fill 
                className="object-contain drop-shadow-[0_0_20px_rgba(168,213,213,0.4)]"
                priority
              />
            </div>
          </div>
          
          {/* Luz ambiental frontal que acompaña el movimiento */}
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent/0 to-brand-accent/20 mix-blend-overlay pointer-events-none"
            style={{ transform: "translateZ(100px)" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
