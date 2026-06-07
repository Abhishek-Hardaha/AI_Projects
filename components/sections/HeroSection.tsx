"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";
import MagneticParticleField from "@/components/ui/MagneticParticleField";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="relative min-h-screen md:h-screen w-full flex items-center justify-center py-20 px-6 md:p-12 overflow-hidden snap-start shrink-0 border-b border-white/5">
      {/* Background data grid & glows */}
      <MagneticParticleField color="#00f0ff" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-violet/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 lg:gap-20 items-center">
        
        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left space-y-2 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-mono text-white/80">Agentic Engineering & AI Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]"
          >
            AI Projects
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-violet to-neon-blue bg-[length:200%_auto] animate-pulse-fast mt-1 md:mt-2">
              Showcase
            </span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 text-xl md:text-2xl text-white/60 font-mono border-l-4 border-neon-blue/50 pl-6 py-2"
          >
            <span>By</span>
            <span className="text-white font-bold tracking-wide">Abhishek Hardaha</span>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-lg text-white/50 max-w-lg leading-relaxed"
          >
            A collection of highly technical, edge-capable AI systems demonstrating model distillation, autonomous RAG pipelines, and unsupervised anomaly detection.
          </motion.p>
        </div>

        {/* Right: Sophisticated Holographic HUD Profile */}
        <motion.div style={{ y: y1 }} className="relative flex justify-center items-center w-full h-[350px] md:h-[400px] lg:h-[600px] perspective-[1000px] scale-[0.85] md:scale-100 origin-center md:origin-center mt-4 md:mt-0">
          
          {/* Orbital Data Rings */}
          <motion.div 
            animate={{ rotateX: 60, rotateZ: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full border border-neon-blue/20 border-dashed pointer-events-none"
          />
          <motion.div 
            animate={{ rotateX: 60, rotateZ: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full border border-neon-violet/10 pointer-events-none"
          />

          {/* Central Holographic Projection Base */}
          <div className="absolute bottom-10 lg:bottom-20 w-48 h-8 bg-neon-blue/20 rounded-[100%] blur-xl pointer-events-none" />
          <div className="absolute bottom-10 lg:bottom-20 w-24 h-2 bg-neon-blue/40 rounded-[100%] blur-md pointer-events-none" />

          {/* Floating ID Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8 }
            }}
            className="relative w-64 h-80 lg:w-[300px] lg:h-[380px] glass-panel p-2 z-10 flex flex-col group overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.1)] hover:shadow-[0_0_60px_rgba(0,240,255,0.2)] transition-shadow duration-500"
          >
            {/* Tech Corner Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-blue/50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-blue/50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-blue/50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-blue/50 pointer-events-none" />

            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden bg-[#050508] border border-white/5 rounded-[4px]">
              <Image
                src="/abhishek.jpg"
                alt="Abhishek Hardaha"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                priority
              />
              
              {/* HUD Overlay Details */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(52,211,153,1)]" />
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest leading-none">SysAdmin Online</span>
                </div>
                <h3 className="text-base font-black text-white tracking-widest uppercase mb-1">Abhishek Hardaha</h3>
                <div className="flex justify-between items-center text-[9px] font-mono text-white/50 border-t border-white/10 pt-2">
                  <span className="uppercase">ID: Root-01</span>
                  <span className="bg-neon-blue/20 text-neon-blue px-1.5 py-0.5 rounded uppercase">Clearance: Max</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Data Nodes (Left/Right of Card) */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[5%] lg:right-[15%] w-32 glass-panel p-3 z-20 tech-border bg-black/60 backdrop-blur-md hidden md:block"
          >
            <div className="text-[8px] font-mono text-white/50 uppercase mb-1">Neural Sync</div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-neon-blue"
                animate={{ width: ["40%", "95%", "60%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[25%] left-[5%] lg:left-[15%] w-32 glass-panel p-3 z-20 tech-border bg-black/60 backdrop-blur-md hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border border-neon-violet/50 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 bg-neon-violet rounded-full animate-ping" />
              </div>
              <div className="text-[8px] font-mono text-white/70">
                <div className="text-neon-violet uppercase font-bold mb-0.5">NPU Active</div>
                <div>24.8 TFLOPS</div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-mono">Initialize</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-neon-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}
