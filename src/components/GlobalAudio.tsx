"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const fadeTarget = 0.6; // Volumen ligeramente superior para presencia

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/bgm.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0;
    }

    const audio = audioRef.current;

    const fadeIn = () => {
      if (isMuted) return;
      let vol = 0;
      const interval = setInterval(() => {
        if (vol < fadeTarget) {
          vol += 0.02;
          audio.volume = Math.min(vol, fadeTarget);
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        audio.play().then(() => {
          fadeIn();
        }).catch(err => {
          console.log("Playback blocked:", err);
          // Si falla, reseteamos para reintento en el siguiente click
          setHasInteracted(false);
        });
      }
    };

    // Listeners globales para detectar la primera interacción real
    window.addEventListener("mousedown", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("mousedown", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [hasInteracted, isMuted]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      setIsMuted(false);
      setHasInteracted(true); // Aseguramos estado si el botón es el primer click
      audioRef.current.play().then(() => {
        let vol = 0;
        const interval = setInterval(() => {
          if (vol < fadeTarget) {
            vol += 0.05;
            audioRef.current!.volume = Math.min(vol, fadeTarget);
          } else {
            clearInterval(interval);
          }
        }, 50);
      });
    } else {
      setIsMuted(true);
      let vol = audioRef.current.volume;
      const interval = setInterval(() => {
        if (vol > 0.05) {
          vol -= 0.05;
          audioRef.current!.volume = vol;
        } else {
          audioRef.current!.volume = 0;
          audioRef.current!.pause();
          clearInterval(interval);
        }
      }, 50);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4">
      {/* Sutil Hint para Chrome/Safari */}
      <AnimatePresence>
        {!hasInteracted && !isMuted && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-brand-primary-light font-bold pointer-events-none"
          >
            Click para Escuchar
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 bg-brand-primary/10 hover:bg-brand-primary/20 border border-brand-primary/30 backdrop-blur-xl rounded-full flex items-center justify-center text-brand-primary transition-colors shadow-[0_0_30px_rgba(0,140,140,0.2)]"
        aria-label="Toggle Background Music"
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="mute"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <VolumeX className="w-6 h-6 opacity-60" />
            </motion.div>
          ) : (
            <motion.div
              key="volume"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <Volume2 className="w-6 h-6" />
              {!isMuted && hasInteracted && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border border-brand-primary pointer-events-none"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

