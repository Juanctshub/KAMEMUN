"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-secondary"
        >
          <div className="flex flex-col items-center">
            {/* Logo Animation with White Circle Background Fix */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-48 h-48 md:w-64 md:h-64 mb-8 bg-brand-accent rounded-full shadow-[0_0_40px_rgba(0,140,140,0.5)] flex items-center justify-center p-4 border-4 border-brand-primary"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo-oficial.png"
                  alt="KAMEMUN Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
            
            {/* Tagline Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="flex gap-3 md:gap-4">
                {["Sabiduría", "Paciencia", "Entendimiento"].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 1 + i * 0.25,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-brand-accent font-sans font-medium tracking-[0.2em] text-xs md:text-sm uppercase opacity-90"
                  >
                    {word}<span className="text-brand-primary">{i !== 2 ? "." : ""}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
