"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

const mockPosts = [
  { id: 1, likes: "1.2k", comments: "45", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500&auto=format&fit=crop" },
  { id: 2, likes: "850", comments: "32", image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=500&auto=format&fit=crop" },
  { id: 3, likes: "2.1k", comments: "120", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500&auto=format&fit=crop" },
  { id: 4, likes: "940", comments: "28", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop" },
  { id: 5, likes: "1.5k", comments: "67", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop" },
  { id: 6, likes: "1.1k", comments: "42", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=500&auto=format&fit=crop" },
];

export default function InstagramSection() {
  return (
    <section className="w-full py-32 bg-brand-secondary relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
              <div className="p-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl shadow-lg">
                <svg 
                  className="w-5 h-5 text-white fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-brand-primary-light font-black tracking-[0.4em] uppercase text-xs">Insta-Connect</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-brand-accent tracking-tighter">
              Post <span className="text-brand-primary italic">Recientes</span>
            </h2>
          </motion.div>

          <motion.a
            href="https://www.instagram.com/_kamemun/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-brand-white/5 border border-brand-white/10 rounded-full text-brand-accent font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-brand-secondary transition-all flex items-center gap-3"
          >
            <svg 
              className="w-4 h-4 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Seguir @_kamemun
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-brand-white/5 cursor-pointer transform-gpu shadow-xl"
            >
              <Image 
                src={post.image} 
                alt="Instagram post" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-brand-accent">
                  <Heart className="w-5 h-5 fill-brand-primary text-brand-primary" />
                  <span className="font-bold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-accent">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-bold">{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
