"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Camera, ActivitySquare, ImageIcon, BrainCircuit, ScanLine, FileJson, ArrowRight } from "lucide-react";
import { LiquidEther } from "@/components/ui/LiquidEther";

export default function SpendWise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="relative min-h-screen md:h-screen w-full flex items-center justify-center py-20 px-6 md:p-12 overflow-hidden snap-start shrink-0 border-b border-white/5">
      {/* Interactive Liquid Background */}
      <div className="absolute inset-0 w-full h-full opacity-40 overflow-hidden">
        <LiquidEther 
          autoDemo={true} 
          autoSpeed={0.3}
          autoIntensity={0.4}
          mouseForce={15}
          cursorSize={40}
          resolution={0.25}       // Performance optimization
          iterationsPoisson={16}  // Performance optimization
          iterationsViscous={16}  // Performance optimization
          BFECC={false}           // Performance optimization
          colors={['#00f0ff', '#3b82f6', '#6366f1', '#050508']} 
          isBounce={true}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none" />

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
            <div className="inline-block px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-xs font-mono mb-1">
              Project 03 // Behavioral Analytics
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400">SpendWise</span> AI
            </h2>
            <p className="text-sm md:text-lg text-white/60 font-mono border-l-2 border-neon-blue/50 pl-3">
              Multimodal Finance Tracker
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
                <Camera className="w-5 h-5 text-neon-blue" />
                <h3 className="text-lg font-bold">LLM-Powered UPI Parsing</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                Engineered an LLM context layer to analyze unstructured UPI transaction alerts, moving beyond basic text extraction to intelligently infer <span className="text-neon-blue font-bold">merchant categories and purchase context</span> in real-time.
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
                <ActivitySquare className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold">Impulsive Spending Detection</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                Developed a behavioral analytics module that cross-references the LLM-parsed transaction context against historical purchasing velocity to <span className="text-blue-400 font-bold">flag anomalous, impulsive buying patterns</span> dynamically.
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
                <div className="flex justify-center"><ImageIcon className="w-4 h-4 text-neon-blue mb-1" /></div>
                <div className="text-[9px] text-neon-blue font-mono uppercase tracking-wider">Vision API</div>
                <p className="text-[10px] text-white/50 leading-tight">GPT-4o OCR extraction</p>
              </div>
              
              <div className="space-y-1 px-2">
                <div className="flex justify-center"><BrainCircuit className="w-4 h-4 text-neon-blue mb-1" /></div>
                <div className="text-[9px] text-neon-blue font-mono uppercase tracking-wider">Categorization</div>
                <p className="text-[10px] text-white/50 leading-tight">Llama-3-8B JSON enforcement</p>
              </div>

              <div className="space-y-1 px-2">
                <div className="flex justify-center"><ScanLine className="w-4 h-4 text-neon-blue mb-1" /></div>
                <div className="text-[9px] text-neon-blue font-mono uppercase tracking-wider">Analytics</div>
                <p className="text-[10px] text-white/50 leading-tight">Isolation Forest anomalies</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Realistic Mobile App Screenshot */}
        <motion.div style={{ y: y1 }} className="relative flex justify-center w-full mt-8 lg:mt-0 scale-[0.85] md:scale-100 origin-top md:origin-center">
          
          {/* Mobile Phone Frame */}
          <div className="relative w-full max-w-[320px] h-[600px] bg-[#0a0a0c] rounded-[2.5rem] border-[6px] border-zinc-800/80 shadow-2xl shadow-neon-blue/20 overflow-hidden flex flex-col">
            
            {/* Top Notch / Status Bar */}
            <div className="absolute top-0 w-full h-6 flex justify-between items-center px-6 z-20">
              <span className="text-[10px] font-medium text-white/80">9:41</span>
              <div className="w-24 h-5 bg-zinc-900 rounded-b-xl" /> {/* Notch */}
              <div className="flex gap-1 items-center">
                <div className="w-3 h-2.5 border border-white/80 rounded-[2px]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
              </div>
            </div>

            {/* App Header */}
            <div className="pt-10 pb-4 px-5 bg-gradient-to-b from-neon-blue/10 to-transparent">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center">
                    <span className="text-neon-blue font-bold text-sm">S</span>
                  </div>
                  <span className="font-bold text-white tracking-wide">SpendWise</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden border border-white/20">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Balance & Prediction Card */}
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-4 shadow-lg mb-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-3xl rounded-full" />
                <div className="text-xs text-white/60 mb-1 font-medium">Predicted Spend (May)</div>
                <div className="text-3xl font-bold text-white tracking-tight mb-2">₹42,500</div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-neon-blue rounded-full"
                    />
                  </div>
                  <span className="text-neon-blue font-bold">75%</span>
                </div>
              </div>

              {/* Impulsive Spending Alert */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                  <ScanLine className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <div className="text-[11px] text-red-400 font-bold uppercase tracking-wider">Impulsive Amount Detected</div>
                  <div className="text-sm font-bold text-white">₹8,240 <span className="text-[10px] text-white/50 font-normal">this month</span></div>
                </div>
              </motion.div>
            </div>

            {/* Recent UPI Transactions */}
            <div className="flex-1 bg-[#0a0a0c] rounded-t-3xl border-t border-white/5 px-5 pt-5 pb-6 overflow-y-auto hide-scrollbar">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-sm font-bold text-white">Recent Transactions</h3>
                <span className="text-xs text-neon-blue font-medium cursor-pointer">View All</span>
              </div>

              <div className="space-y-4">
                {/* Tx 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                      <span className="text-lg font-bold text-orange-500">S</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Swiggy Instamart</div>
                      <div className="text-[10px] text-white/50">UPI • 10:42 AM</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">-₹820.00</div>
                    <div className="text-[9px] text-orange-400 bg-orange-400/10 px-1.5 py-0.5 rounded">Groceries</div>
                  </div>
                </div>

                {/* Tx 2 (Impulsive) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 relative">
                      <span className="text-lg font-bold text-purple-500">M</span>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0a0a0c]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Myntra Designs</div>
                      <div className="text-[10px] text-white/50">UPI • Yesterday</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">-₹4,250.00</div>
                    <div className="text-[9px] text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded font-bold">Impulsive</div>
                  </div>
                </div>

                {/* Tx 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                      <span className="text-lg font-bold text-green-500">Z</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Zomato Online</div>
                      <div className="text-[10px] text-white/50">UPI • Yesterday</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">-₹450.00</div>
                    <div className="text-[9px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">Food</div>
                  </div>
                </div>

                {/* Tx 4 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <span className="text-lg font-bold text-blue-500">U</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Uber India</div>
                      <div className="text-[10px] text-white/50">UPI AutoPay • 3 days ago</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">-₹320.00</div>
                    <div className="text-[9px] text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded">Transport</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Nav Bar */}
            <div className="h-16 bg-[#0a0a0c] border-t border-white/5 flex items-center justify-around px-2 z-10 pb-2">
              <div className="flex flex-col items-center gap-1 text-neon-blue">
                <ActivitySquare className="w-5 h-5" />
                <span className="text-[8px] font-bold">Home</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors">
                <Camera className="w-5 h-5" />
                <span className="text-[8px] font-bold">Scan</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors">
                <BrainCircuit className="w-5 h-5" />
                <span className="text-[8px] font-bold">Insights</span>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full z-20" />

          </div>
        </motion.div>

      </div>
    </section>
  );
}
