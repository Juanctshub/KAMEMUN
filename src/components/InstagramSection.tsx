"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { instagramPosts } from "@/data/instagramData";

export default function InstagramSection() {
  return (
    <section className="w-full py-32 bg-brand-secondary relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[50vh] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl shadow-xl">
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-brand-primary-light font-black tracking-[0.4em] uppercase text-xs md:text-sm">Social Feed</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-brand-accent tracking-tighter leading-tight">
              Post <br className="md:hidden" />
              <span className="text-brand-primary italic">Recientes</span>
            </h2>
          </motion.div>

          <motion.a
            href="https://www.instagram.com/_kamemun/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 bg-brand-white/5 border border-brand-white/10 rounded-full text-brand-accent font-black uppercase tracking-[0.3em] text-[10px] md:text-xs hover:bg-brand-primary hover:text-brand-secondary transition-all shadow-xl"
          >
            Ir a @_kamemun
          </motion.a>
        </div>

        {/* FEED GRID - Expansión a tarjetas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {instagramPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group bg-brand-white/[0.02] border border-brand-white/5 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl hover:border-brand-primary/30 transition-all transform-gpu"
            >
              {/* Header de Post (Look Real) */}
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px]">
                    <div className="w-full h-full rounded-full bg-brand-secondary p-[2px]">
                      <div className="w-full h-full rounded-full bg-brand-primary-light/20 flex items-center justify-center overflow-hidden">
                        <Image src="/images/kamemun-logo.png" alt="Logo" width={24} height={24} className="opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-brand-white text-xs font-black tracking-widest uppercase">_kamemun</h4>
                    <p className="text-[9px] text-brand-silver/40 tracking-[0.2em] font-bold">ESTADO LARA</p>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-brand-silver/30" />
              </div>

              {/* Imagen Grande */}
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="relative aspect-square w-full overflow-hidden block">
                <Image 
                  src={post.image} 
                  alt="Insta post" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-0 group-hover:grayscale-[0.3]"
                />
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </a>

              {/* Barra de Interacción */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-6">
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                      <Heart className="w-7 h-7 text-brand-primary-light hover:fill-brand-primary-light transition-colors" />
                    </a>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                      <MessageCircle className="w-7 h-7 text-brand-silver/50 hover:text-brand-accent" />
                    </a>
                    <Share2 className="w-6 h-6 text-brand-silver/50 hover:text-brand-accent cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 text-brand-silver/30" />
                </div>

                <div className="space-y-3">
                  <p className="text-brand-accent font-black text-xs tracking-widest uppercase">{post.likes} <span className="text-brand-silver/50 font-bold ml-1">me gusta</span></p>
                  <p className="text-brand-silver text-sm leading-relaxed line-clamp-2 font-light">
                    <span className="font-black text-brand-accent mr-2">_kamemun</span>
                    {post.caption}
                  </p>
                  <p className="text-[10px] text-brand-silver/30 font-bold tracking-widest pt-2">HACE {post.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
