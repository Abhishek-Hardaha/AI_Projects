"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldAlert, Database, Layers, ArrowRight, LineChart, MessageSquare, BarChart, FileText, Search, Activity, Globe, ExternalLink, Sparkles, ServerCrash } from "lucide-react";

const indianStocks = [
  { symbol: "NIFTY 50", price: "23,290.15", change: "+1.24%", isUp: true },
  { symbol: "RELIANCE", price: "2,932.40", change: "+2.10%", isUp: true },
  { symbol: "HDFCBANK", price: "1,568.10", change: "-0.45%", isUp: false },
  { symbol: "TCS", price: "3,892.55", change: "+0.82%", isUp: true },
  { symbol: "INFY", price: "1,452.90", change: "-1.20%", isUp: false },
  { symbol: "SBIN", price: "834.50", change: "+3.41%", isUp: true },
  { symbol: "ICICIBANK", price: "1,142.20", change: "+1.15%", isUp: true },
  { symbol: "ITC", price: "435.60", change: "-0.22%", isUp: false },
  { symbol: "SENSEX", price: "76,693.36", change: "+1.35%", isUp: true },
  { symbol: "L&T", price: "3,421.80", change: "+1.55%", isUp: true },
];

export default function MarktView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 md:p-12 overflow-hidden snap-start shrink-0 border-b border-white/5">
      
      {/* Indian Stock Marquee Ticker */}
      <div className="absolute top-0 left-0 w-full h-10 border-b border-white/5 bg-black/40 backdrop-blur-xl flex items-center z-30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center h-full"
        >
          {[...indianStocks, ...indianStocks].map((stock, i) => (
            <div key={i} className="flex items-center gap-2.5 px-6 shrink-0 border-r border-white/5 h-6">
              <span className="font-bold text-[11px] text-white/90 tracking-widest">{stock.symbol}</span>
              <span className="font-mono text-[11px] text-white/60">{stock.price}</span>
              <span className={`font-mono text-[10px] flex items-center gap-0.5 ${stock.isUp ? "text-emerald-400" : "text-rose-400"}`}>
                {stock.isUp ? "▲" : "▼"} {stock.change}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Meaningful Text Content */}
        <div className="flex flex-col gap-3 md:gap-4">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <div className="inline-block px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-xs font-mono mb-1">
              Project 02 // Autonomous RAG
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                MarktView AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">Suite</span>
              </h2>
              <a 
                href="https://marktview.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neon-green/10 hover:bg-neon-green/20 border border-neon-green/50 text-neon-green font-mono font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(57,255,20,0.1)] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
              >
                <ExternalLink className="w-4 h-4" />
                Launch MarktView.onrender.com
              </a>
            </div>
            <p className="text-sm md:text-lg text-white/60 font-mono border-l-2 border-neon-green/50 pl-3">
              Autonomous Market Intelligence Pipeline
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-4 space-y-1.5 tech-border bg-black/40"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-1.5 mb-1.5">
                <ShieldAlert className="w-5 h-5 text-neon-green" />
                <h3 className="text-base md:text-lg font-bold">Asynchronous NLP Pipelines</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-xs md:text-sm">
                Built concurrent web scrapers ingesting 500+ daily financial filings, news, and live NIFTY 50 streams. Utilizes transformer-based NER to structure raw text into <span className="text-neon-green font-bold">sentiment-scored quantitative datasets</span> with sub-second latency.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-4 space-y-1.5 tech-border bg-black/40"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-1.5 mb-1.5">
                <Layers className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base md:text-lg font-bold">Agentic RAG Architecture</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-xs md:text-sm">
                Engineered a RAG agent utilizing a Pinecone vector database with `bge-large-en` embeddings. Employs Hybrid Search (BM25 + Cosine Similarity) to feed relevant context to a fine-tuned LLM for real-time <span className="text-emerald-400 font-bold">expert-level financial portfolio analysis</span>.
              </p>
            </motion.div>
          </div>

          {/* Tech Stack Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel py-3 px-4 tech-border bg-black/40"
          >
            <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/10">
              <div className="space-y-1">
                <div className="flex justify-center"><Globe className="w-4 h-4 text-neon-green mb-0.5" /></div>
                <div className="text-[9px] text-neon-green font-mono uppercase tracking-wider">Scrapers</div>
                <p className="text-[10px] text-white/50 leading-tight">Reuters, SEC APIs</p>
              </div>
              
              <div className="space-y-1 px-1">
                <div className="flex justify-center"><Database className="w-4 h-4 text-neon-green mb-0.5" /></div>
                <div className="text-[9px] text-neon-green font-mono uppercase tracking-wider">Pinecone</div>
                <p className="text-[10px] text-white/50 leading-tight">bge-large embeddings</p>
              </div>

              <div className="space-y-1 px-1">
                <div className="flex justify-center"><LineChart className="w-4 h-4 text-neon-green mb-0.5" /></div>
                <div className="text-[9px] text-neon-green font-mono uppercase tracking-wider">LlamaIndex</div>
                <p className="text-[10px] text-white/50 leading-tight">Gemma 3 Agent</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: UI Mockup & RAG Interaction Flow */}
        <motion.div style={{ y: y1 }} className="relative flex flex-col justify-center w-full mt-6 lg:mt-0 gap-3 scale-[0.85] md:scale-[0.9] lg:scale-[0.95] origin-top md:origin-right">
          
          {/* Analyze Portfolio "Screenshot" Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg mx-auto glass-panel py-3 px-4 bg-[#08080c] tech-border relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex justify-between items-center mb-2.5 relative z-10">
              <div className="flex items-center gap-2">
                <LineChart className="w-4 h-4 text-emerald-400" />
                <span className="text-xs md:text-sm font-bold text-white">Portfolio Analysis</span>
              </div>
              <span className="text-[9px] text-emerald-400 font-mono bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded">Live Sync</span>
            </div>

            <div className="flex items-end justify-between mb-3 relative z-10">
              <div>
                <div className="text-[9px] text-white/50 uppercase tracking-widest mb-0.5 font-mono">Total Value</div>
                <div className="text-2xl md:text-3xl font-black text-white font-mono tracking-tight">₹12,45,920</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-[9px] text-white/50 uppercase tracking-widest mb-0.5 font-mono">7D Performance</div>
                <div className="text-sm md:text-lg font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30 flex items-center gap-1 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  +2.5%
                </div>
              </div>
            </div>

            {/* Mock Chart */}
            <div className="w-full h-12 flex items-end gap-1 px-1 relative z-10">
              {[40, 45, 42, 50, 55, 52, 60, 65, 75, 70, 80, 85, 95, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500/10 to-emerald-400/80 rounded-t-sm transition-all duration-500 hover:opacity-80" style={{ height: `${h}%` }} />
              ))}
            </div>
            {/* Chart base line */}
            <div className="w-full h-px bg-white/10 mt-1 relative z-10" />
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[80px] pointer-events-none" />
          </motion.div>

          {/* RAG Interaction Flow Diagram */}
          <div className="relative w-full max-w-lg mx-auto glass-panel py-3 px-4 bg-[#050508] tech-border flex flex-col gap-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-xl" />

            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 relative z-10 mb-0.5">
              <div className="text-[9px] text-neon-green font-mono uppercase tracking-widest">Autonomous RAG Query</div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-green/50 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>

            {/* User Message */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 self-end max-w-[85%] bg-neon-blue/10 border border-neon-blue/30 rounded-xl rounded-tr-sm px-3 py-1.5 shadow-[0_0_15px_rgba(0,240,255,0.1)]"
            >
              <p className="text-[11px] text-white/90 leading-relaxed font-mono">
                Why did my portfolio jump 2.5% this week? Which holdings drove the growth?
              </p>
            </motion.div>

            {/* RAG / LLM Processing Node */}
            <div className="relative z-10 flex flex-col items-center my-0">
              <div className="w-px h-3 bg-gradient-to-b from-neon-blue/50 to-emerald-400/50" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-black/60 border border-white/10 rounded-lg p-2 w-full flex items-center justify-between shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-white uppercase tracking-wider mb-0.5">Vector Search & LLM</div>
                    <div className="text-[8px] text-emerald-400/80 font-mono">Retrieving related news...</div>
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
              <div className="w-px h-3 bg-gradient-to-b from-emerald-400/50 to-neon-green/50" />
            </div>

            {/* LLM Correct Response */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative z-10 self-start max-w-[95%] bg-white/5 border border-white/10 rounded-xl rounded-tl-sm p-2.5 shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-white/10">
                <Sparkles className="w-3 h-3 text-neon-green" />
                <span className="text-[9px] font-bold text-white/80 uppercase">MarktView AI Response</span>
              </div>
              <p className="text-[10px] text-white/70 leading-relaxed font-mono">
                Your portfolio grew <span className="text-emerald-400 font-bold bg-emerald-400/10 px-1 rounded">+2.5%</span> due to <span className="text-white font-bold">NVDA (+4.2%)</span>.
                <br/>
                <span className="text-[8px] text-white/40 uppercase tracking-widest block mt-1.5 mb-0.5 font-mono">Retrieved Sources:</span>
                <span className="text-neon-green/70 block text-[10px] leading-relaxed tracking-wide mt-0.5">• Reuters: Tech rallies on AI hardware demand.</span>
                <span className="text-neon-green/70 block text-[10px] leading-relaxed tracking-wide mt-0.5">• Bloomberg: MSFT announces new cloud pipeline.</span>
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
