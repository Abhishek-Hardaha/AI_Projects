"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Network, Cpu, Database, ChevronRight, Activity, Download, MoveDown } from "lucide-react";
import ParticleConstellation from "@/components/ui/ParticleConstellation";

export default function FinancialDistillation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 md:p-12 overflow-hidden snap-start shrink-0 border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-neon-violet/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Meaningful Text Content */}
        <div className="flex flex-col gap-4 md:gap-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <div className="inline-block px-3 py-1 rounded-full border border-neon-violet/30 bg-neon-violet/10 text-neon-violet text-xs font-mono mb-1">
              Project 01 // Model Compression
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              LLM <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-purple-400">Distillation</span>
            </h2>
            <p className="text-sm md:text-lg text-white/60 font-mono border-l-2 border-neon-violet/50 pl-3">
              Edge-Optimized Quantization
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-5 space-y-2 tech-border bg-black/40"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                <Brain className="w-5 h-5 text-neon-violet" />
                <h3 className="text-lg font-bold">Teacher Data Generation</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                Prompted the high-parameter Gemma 4 "teacher" model with raw market datasets to autonomously generate thousands of high-quality, <span className="text-neon-violet font-bold">Chain-of-Thought reasoning logs</span>.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-5 space-y-2 tech-border bg-black/40"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold">Compute Optimization & QLoRA</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                Loaded the Gemma 3 1B "student" model in 4-bit precision to significantly reduce VRAM overhead, executing behavioral cloning against the teacher's outputs to yield a <span className="text-emerald-400 font-bold">low-latency edge AI</span>.
              </p>
            </motion.div>
          </div>

          {/* Tech Stack Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-5 tech-border bg-black/40"
          >
            <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
              <div className="space-y-1">
                <div className="flex justify-center"><Brain className="w-4 h-4 text-neon-violet mb-1" /></div>
                <div className="text-[9px] text-neon-violet font-mono uppercase tracking-wider">Teacher</div>
                <p className="text-[10px] text-white/50 leading-tight">Gemma 4 (26B)</p>
              </div>
              
              <div className="space-y-1 px-2">
                <div className="flex justify-center"><Cpu className="w-4 h-4 text-neon-violet mb-1" /></div>
                <div className="text-[9px] text-neon-violet font-mono uppercase tracking-wider">Student</div>
                <p className="text-[10px] text-white/50 leading-tight">Gemma 3 (1.2B)</p>
              </div>

              <div className="space-y-1 px-2">
                <div className="flex justify-center"><Download className="w-4 h-4 text-neon-violet mb-1" /></div>
                <div className="text-[9px] text-neon-violet font-mono uppercase tracking-wider">Format</div>
                <p className="text-[10px] text-white/50 leading-tight">GGUF (Edge)</p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Right Column: Clean Flowchart Diagram */}
        <motion.div style={{ y: y1 }} className="relative flex justify-center w-full mt-8 lg:mt-0 min-h-[400px] scale-[0.85] md:scale-100 origin-top md:origin-center">
          
          {/* Interactive Particle Constellation Background */}
          <div className="absolute inset-[-20%] z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700" style={{ WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }}>
            <ParticleConstellation 
              particleColor="rgba(168, 85, 247, 1)" 
              connectionColor="rgba(168, 85, 247, 0.5)"
            />
          </div>

          <div className="relative w-full max-w-sm glass-panel p-8 bg-black/70 backdrop-blur-xl tech-border flex flex-col gap-6 z-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            
            {/* Step 1: Teacher Model */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neon-violet/10 border border-neon-violet/30 rounded-xl p-3 flex items-center gap-4 relative"
            >
              <div className="w-10 h-10 rounded-full bg-neon-violet/20 flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 text-neon-violet" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white mb-0.5">1. Teacher Model</h4>
                <p className="text-[10px] text-neon-violet font-mono">Gamma 4 26B it</p>
                <p className="text-[9px] text-white/50 mt-0.5">Generates synthetic Chain-of-Thought</p>
              </div>
            </motion.div>

            <div className="flex justify-center -my-2 relative z-20">
              <div className="w-6 h-6 rounded-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center">
                <MoveDown className="w-3 h-3 text-white/40" />
              </div>
            </div>

            {/* Step 2: Knowledge Transfer */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-3 flex items-center gap-4 relative"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                <Network className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white mb-0.5">2. Logit Distillation</h4>
                <p className="text-[10px] text-purple-400 font-mono">Minimize KL Divergence</p>
                <p className="text-[9px] text-white/50 mt-0.5">Aligning Student probabilities</p>
              </div>
            </motion.div>

            <div className="flex justify-center -my-2 relative z-20">
              <div className="w-6 h-6 rounded-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center">
                <MoveDown className="w-3 h-3 text-white/40" />
              </div>
            </div>

            {/* Step 3: Quantization */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 flex items-center gap-4 relative"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white mb-0.5">3. Edge Quantization</h4>
                <p className="text-[10px] text-emerald-400 font-mono">QLoRA & 4-bit NF4</p>
                <p className="text-[9px] text-white/50 mt-0.5">Reduces memory footprint by 8x</p>
              </div>
            </motion.div>

            <div className="flex justify-center -my-2 relative z-20">
              <div className="w-6 h-6 rounded-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center">
                <MoveDown className="w-3 h-3 text-white/40" />
              </div>
            </div>

            {/* Step 4: Student Model */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 flex items-center gap-4 relative"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white mb-0.5">4. Edge Inference</h4>
                <p className="text-[10px] text-blue-400 font-mono">Gamma 3 1B</p>
                <p className="text-[9px] text-white/50 mt-0.5">Local, low-latency execution</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
