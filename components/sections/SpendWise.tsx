"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScanLine, BrainCircuit, ActivitySquare } from "lucide-react";

export default function SpendWise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const laserY = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center p-6 md:p-12 overflow-hidden snap-start shrink-0">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 order-2 lg:order-1"
        >
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm font-mono mb-4">
              Project 03
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400">SpendWise</span> AI
            </h2>
            <p className="text-xl text-white/60 font-mono">Financial & Behavioral Tracker</p>
          </div>

          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            An intelligent personal finance application automating expense tracking and analyzing consumer behavior using multimodal AI and NLP.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-lg bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center shrink-0">
                <BrainCircuit className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">LLM-Powered UPI Parsing</h4>
                <p className="text-sm text-white/60 leading-relaxed">Engineered an LLM context layer to analyze unstructured UPI alerts, inferring merchant categories and purchase context.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-lg bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center shrink-0">
                <ScanLine className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Multimodal Vision Integration</h4>
                <p className="text-sm text-white/60 leading-relaxed">Computer vision models process physical receipts, digitizing and structuring them into categorized inventory.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-lg bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center shrink-0">
                <ActivitySquare className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Impulsive Spending Detection</h4>
                <p className="text-sm text-white/60 leading-relaxed">Behavioral analytics module cross-references parsed context against historical velocity to flag anomalous patterns.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Mobile Mockup Visual */}
        <div className="relative flex justify-center order-1 lg:order-2">
          {/* Phone Frame */}
          <div className="relative w-[300px] h-[600px] bg-[#0a0a0a] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-3xl z-20" />
            
            {/* Screen Content - Receipt Scanning */}
            <div className="flex-1 w-full bg-[#111] p-6 pt-12 relative">
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-lg">Scan Receipt</h3>
                <p className="text-neon-blue text-xs font-mono">Vision AI Active</p>
              </div>

              {/* Receipt Mock */}
              <div className="relative w-full h-[350px] bg-white/5 border border-white/10 rounded-xl p-4 overflow-hidden">
                <div className="space-y-4 opacity-50">
                  <div className="h-4 w-2/3 bg-white/20 rounded" />
                  <div className="h-3 w-1/2 bg-white/10 rounded" />
                  <div className="border-t border-dashed border-white/20 my-4" />
                  <div className="flex justify-between"><div className="h-3 w-1/3 bg-white/20 rounded"/><div className="h-3 w-1/4 bg-white/20 rounded"/></div>
                  <div className="flex justify-between"><div className="h-3 w-1/2 bg-white/20 rounded"/><div className="h-3 w-1/5 bg-white/20 rounded"/></div>
                  <div className="flex justify-between"><div className="h-3 w-1/4 bg-white/20 rounded"/><div className="h-3 w-1/4 bg-white/20 rounded"/></div>
                  <div className="border-t border-dashed border-white/20 my-4" />
                  <div className="flex justify-between"><div className="h-4 w-1/3 bg-neon-blue/50 rounded"/><div className="h-4 w-1/4 bg-neon-blue/50 rounded"/></div>
                </div>

                {/* Animated Laser Scanner */}
                <motion.div 
                  style={{ top: laserY }}
                  className="absolute left-0 right-0 h-1 bg-neon-blue shadow-[0_0_15px_rgba(0,240,255,1)] z-10"
                />
                <motion.div 
                  style={{ top: laserY }}
                  className="absolute left-0 right-0 h-32 bg-gradient-to-t from-neon-blue/30 to-transparent -translate-y-full z-0 pointer-events-none"
                />
              </div>

              {/* Floating Action Button */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-neon-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer">
                <ScanLine className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
