"use client";
import { motion } from "framer-motion";
import { LineChart, Globe, MessageSquareText, ShieldAlert } from "lucide-react";

export default function MarktView() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center p-6 md:p-12 overflow-hidden snap-start shrink-0">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full flex flex-col gap-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm font-mono mx-auto">
            Project 02
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            MarktView AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">Suite</span>
          </h2>
          <p className="text-xl text-white/60 font-mono mx-auto">Democratizing Complex Market Analysis</p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
        >
          {/* Main Card (Spans 2 cols on lg) */}
          <motion.div variants={item} className="glass-panel glass-panel-hover p-8 md:col-span-2 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-neon-green/10 rounded-full blur-[80px] group-hover:bg-neon-green/20 transition-all duration-500" />
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-black border border-neon-green/30 flex items-center justify-center text-neon-green mb-6 shadow-[0_0_15px_rgba(0,255,102,0.15)]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Agentic AI Data Pipelines</h3>
              <p className="text-white/60 leading-relaxed max-w-lg">
                Built autonomous AI agents that scan, parse, and evaluate over 500 daily financial news articles and live market feeds, restructuring unstructured text into sentiment-scored datasets.
              </p>
            </div>
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center gap-4 text-sm font-mono text-white/40">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span> Live Ingestion</span>
              <span>•</span>
              <span>500+ Sources</span>
            </div>
          </motion.div>

          {/* Side Card 1 */}
          <motion.div variants={item} className="glass-panel glass-panel-hover p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-black border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Data-Driven Predictive Modeling</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                High-speed inference engine synthesizing millions of historical data points with live quant metrics (RSI, ATR) to forecast trajectory vectors.
              </p>
            </div>
          </motion.div>

          {/* Bottom Card 1 */}
          <motion.div variants={item} className="glass-panel glass-panel-hover p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-black border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-6">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">RAG-Powered Chatbot</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Deployed Gemma 3 within a RAG architecture, vectorizing financial docs to answer highly nuanced, ticker-specific queries instantly.
              </p>
            </div>
          </motion.div>

          {/* Bottom Card 2 (Spans 2 cols on lg) */}
          <motion.div variants={item} className="glass-panel glass-panel-hover p-8 md:col-span-2 lg:col-span-2 flex flex-col sm:flex-row gap-8 items-center justify-between group">
            <div className="space-y-4 flex-1">
              <div className="w-12 h-12 rounded-xl bg-black border border-green-500/30 flex items-center justify-center text-green-400 mb-6">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">AI Portfolio Health Analysis</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                Evaluates portfolio beta and risk distribution, generating tailored AI-driven rebalancing strategies to maximize risk-adjusted returns.
              </p>
            </div>
            
            {/* Mock Chart UI */}
            <div className="w-full sm:w-64 h-32 rounded-xl border border-white/10 bg-black/50 p-4 relative overflow-hidden flex-shrink-0">
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-neon-green/20 to-transparent" />
              <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]">
                <motion.path 
                  d="M0,40 L10,35 L20,38 L30,25 L40,28 L50,15 L60,20 L70,5 L80,10 L90,2 L100,0" 
                  fill="none" 
                  stroke="var(--color-neon-green)" 
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
