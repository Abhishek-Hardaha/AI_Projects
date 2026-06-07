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
    <section ref={containerRef} className="relative min-h-screen md:h-screen w-full flex py-20 px-6 md:p-12 overflow-hidden snap-start shrink-0 border-b border-white/5">
      
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

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 lg:gap-16 items-center pt-10 md:pt-0">
        
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
            <div className="inline-block px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-xs font-mono mb-1">
              Project 02 // Autonomous RAG
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              MarktView AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">Suite</span>
            </h2>
            <p className="text-sm md:text-lg text-white/60 font-mono border-l-2 border-neon-green/50 pl-3">
              Democratizing Complex Market Analysis
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
                <ShieldAlert className="w-5 h-5 text-neon-green" />
                <h3 className="text-lg font-bold">Asynchronous NLP Pipelines</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                Built fully asynchronous web crawlers that concurrently ingest over 500+ daily financial SEC filings, Reuters articles, and live NIFTY 50 ticker streams. Utilizing transformer-based Named Entity Recognition (NER), the pipeline structures raw chaotic text into <span className="text-neon-green font-bold">sentiment-scored quantitative datasets</span> with sub-second latency.
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
                <Layers className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold">Agentic RAG Architecture</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                Engineered an advanced Retrieval-Augmented Generation (RAG) agent utilizing a custom Pinecone vector database populated with `bge-large-en` dense embeddings. The system employs Hybrid Search (BM25 + Cosine Similarity) to feed highly relevant historical context to a fine-tuned LLM, yielding an <span className="text-emerald-400 font-bold">expert-level financial advisor</span> chatbot capable of real-time multi-step portfolio analysis.
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
                <div className="flex justify-center"><Globe className="w-4 h-4 text-neon-green mb-1" /></div>
                <div className="text-[9px] text-neon-green font-mono uppercase tracking-wider">Scrapers</div>
                <p className="text-[10px] text-white/50 leading-tight">Reuters, Bloomberg, SEC APIs</p>
              </div>
              
              <div className="space-y-1 px-2">
                <div className="flex justify-center"><Database className="w-4 h-4 text-neon-green mb-1" /></div>
                <div className="text-[9px] text-neon-green font-mono uppercase tracking-wider">Pinecone</div>
                <p className="text-[10px] text-white/50 leading-tight">bge-large-en embeddings</p>
              </div>

              <div className="space-y-1 px-2">
                <div className="flex justify-center"><LineChart className="w-4 h-4 text-neon-green mb-1" /></div>
                <div className="text-[9px] text-neon-green font-mono uppercase tracking-wider">LlamaIndex</div>
                <p className="text-[10px] text-white/50 leading-tight">Gemma 3 Synthesizer</p>
              </div>
            </div>
          </motion.div>

          {/* Action Button */}
          <div className="pt-4 md:pt-2">
            <a 
              href="https://marktview.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neon-green/10 border border-neon-green/50 text-neon-green font-mono text-sm hover:bg-neon-green/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all rounded-lg"
            >
              <ExternalLink className="w-4 h-4" />
              Launch MarktView.onrender.com
            </a>
          </div>
        </div>

        {/* Right Column: UI Mockup & RAG Interaction Flow */}
        <motion.div style={{ y: y1 }} className="relative flex flex-col justify-center w-full mt-8 lg:mt-0 gap-4 scale-[0.85] md:scale-[0.95] origin-top md:origin-right">
          
          {/* Analyze Portfolio "Screenshot" Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg mx-auto glass-panel p-4 bg-[#08080c] tech-border relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex justify-between items-center mb-3 relative z-10">
              <div className="flex items-center gap-2">
                <LineChart className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-white">Portfolio Analysis</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded">Live Sync</span>
            </div>

            <div className="flex items-end justify-between mb-4 relative z-10">
              <div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Total Value</div>
                <div className="text-3xl font-black text-white font-mono tracking-tight">$124,592.40</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">7D Performance</div>
                <div className="text-lg font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30 flex items-center gap-1 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
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
          <div className="relative w-full max-w-lg mx-auto glass-panel p-4 bg-[#050508] tech-border flex flex-col gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-xl" />

            <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10 mb-1">
              <div className="text-[10px] text-neon-green font-mono uppercase tracking-widest">Autonomous RAG Query</div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-neon-green/50 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </div>

            {/* User Message */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 self-end max-w-[85%] bg-neon-blue/10 border border-neon-blue/30 rounded-2xl rounded-tr-sm px-3 py-2 shadow-[0_0_15px_rgba(0,240,255,0.1)]"
            >
              <p className="text-[12px] text-white/90 leading-relaxed">
                Why did my portfolio jump 2.5% this week? Which holdings drove the growth?
              </p>
            </motion.div>

            {/* RAG / LLM Processing Node */}
            <div className="relative z-10 flex flex-col items-center my-0">
              <div className="w-px h-4 bg-gradient-to-b from-neon-blue/50 to-emerald-400/50" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-black/60 border border-white/10 rounded-lg p-2.5 w-full flex items-center justify-between shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <Database className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white uppercase tracking-wider mb-0.5">Vector Search & LLM</div>
                    <div className="text-[9px] text-emerald-400/80 font-mono">Retrieving 53 related news articles...</div>
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
              <div className="w-px h-4 bg-gradient-to-b from-emerald-400/50 to-neon-green/50" />
            </div>

            {/* LLM Correct Response */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative z-10 self-start max-w-[95%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-3 shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-white/10">
                <Sparkles className="w-3 h-3 text-neon-green" />
                <span className="text-[10px] font-bold text-white/80 uppercase">MarktView AI Response</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed font-mono">
                Your portfolio grew <span className="text-emerald-400 font-bold bg-emerald-400/10 px-1 rounded">+2.5%</span> primarily due to <span className="text-white font-bold">NVDA (+4.2%)</span> and <span className="text-white font-bold">MSFT (+1.8%)</span>.
                <br/><br/>
                <span className="text-[9px] text-white/40 uppercase tracking-widest block mb-1">Retrieved Sources:</span>
                <span className="text-neon-green/70 block">• Reuters: Tech sector rallies on AI hardware demand.</span>
                <span className="text-neon-green/70 block">• Bloomberg: MSFT announces new cloud integration pipeline.</span>
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
