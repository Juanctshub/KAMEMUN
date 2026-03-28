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
    
    x.set((event.clientY - centerY) / 15);
    y.set(-(event.clientX - centerX) / 15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(x, [-15, 15], [-25, 25]);
  const rotateY = useTransform(y, [-15, 15], [-25, 25]);

  if (!mounted) return null;

  return (
    <>
      {/* MOBILE: Tortuga estática, centrada DEBAJO del texto, sin overflow ni bug */}
      <div className="md:hidden w-full flex items-center justify-center z-0 mt-auto pb-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="relative w-48 h-48"
        >
          <Image 
            src="/images/tortuga.webp" 
            alt="KAMEMUN Turtle" 
            fill 
            className="object-contain drop-shadow-[0_0_30px_rgba(168,213,213,0.3)]"
            priority
          />
        </motion.div>
      </div>

      {/* DESKTOP: Tortuga 3D interactiva a la derecha */}
      <div className="hidden md:flex absolute right-0 top-[55%] -translate-y-1/2 w-[55%] lg:w-[45%] h-screen z-0 items-center justify-center pointer-events-auto overflow-visible">
        <motion.div
          className="relative w-[600px] h-[600px] lg:w-[700px] lg:h-[700px]"
          style={{ perspective: 1500 }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full h-full relative flex items-center justify-center group"
          >
            <div 
              className="absolute inset-0 rounded-full bg-brand-primary/10 blur-3xl group-hover:bg-brand-primary/30 transition-all duration-700"
              style={{ transform: "translateZ(-100px) scale(1)" }}
            />

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
            
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent/0 to-brand-accent/20 mix-blend-overlay pointer-events-none"
              style={{ transform: "translateZ(100px)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
