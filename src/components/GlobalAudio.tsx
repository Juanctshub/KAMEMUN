"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalAudio() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const localAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const fadeTarget = 0.6;

  // Initialize Global Audio
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/bgm.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0;
    }
  }, []);

  // Handle Global Audio Lifecycle & Interacted Playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (hasInteracted && !isMuted) {
      // Check if we are in a page with local music
      const isLocalMusicPage = pathname === "/comites/ndrangheta" || pathname === "/comites/padrino";
      
      if (!isLocalMusicPage) {
        // Normal Global Playback
        if (audio.paused) {
          audio.play().catch(console.error);
        }
        // Fade In
        let vol = audio.volume;
        const interval = setInterval(() => {
          if (vol < fadeTarget) {
            vol += 0.05;
            audio.volume = Math.min(vol, fadeTarget);
          } else {
            clearInterval(interval);
          }
        }, 100);
        return () => clearInterval(interval);
      } else {
        // Fade Out the Global one globally (to prioritize local)
        let vol = audio.volume;
        const interval = setInterval(() => {
          if (vol > 0.02) {
            vol -= 0.05;
            audio.volume = Math.max(vol, 0);
          } else {
            audio.volume = 0;
            clearInterval(interval);
          }
        }, 100);
        return () => clearInterval(interval);
      }
    } else if (isMuted || !hasInteracted) {
      audio.volume = 0;
      audio.pause();
    }
  }, [hasInteracted, isMuted, pathname]);

  // Handle LOCAL Audio (Padrino/Ndrangheta)
  useEffect(() => {
    const isPadrino = pathname === "/comites/padrino";
    const isNdrangheta = pathname === "/comites/ndrangheta";
    const isLocalPage = isPadrino || isNdrangheta;

    if (isLocalPage && hasInteracted && !isMuted) {
      const trackPath = isPadrino ? "/audio/comites/money.mp3" : "/audio/comites/padrino.mp3";
      
      // If we don't have an instance or the track changed
      if (!localAudioRef.current || localAudioRef.current.src.includes(trackPath) === false) {
        if (localAudioRef.current) {
          localAudioRef.current.pause();
        }
        localAudioRef.current = new Audio(trackPath);
        localAudioRef.current.loop = true;
        localAudioRef.current.volume = 0;
      }
      
      const local = localAudioRef.current;
      if (local.paused) {
        local.play().catch(console.error);
      }
      
      let vol = local.volume;
      const interval = setInterval(() => {
        if (vol < fadeTarget) {
          vol += 0.05;
          local.volume = Math.min(vol, fadeTarget);
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    } else if (localAudioRef.current) {
      // Fade out if leaving local pages or muting
      const local = localAudioRef.current;
      let vol = local.volume;
      const interval = setInterval(() => {
        if (vol > 0.05) {
          vol -= 0.05;
          local.volume = Math.max(vol, 0);
        } else {
          local.volume = 0;
          local.pause();
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [pathname, hasInteracted, isMuted]);

  // Handle First Interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };
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
  }, [hasInteracted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[120] flex items-center gap-4">
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
        className="relative w-14 h-14 bg-black/60 hover:bg-black/80 border border-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-colors shadow-2xl"
        aria-label="Toggle Background Music"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-primary/10 to-transparent opacity-40" />
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
                  className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

