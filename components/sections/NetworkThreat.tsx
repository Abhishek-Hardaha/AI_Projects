"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldCheck, Activity, Terminal } from "lucide-react";

const DUMMY_LOGS = [
  "Initializing PCA dimensionality reduction...",
  "Baseline established: K-Means clustering active.",
  "Monitoring inbound traffic on port 443...",
  "Normal traffic vector: [0.04, 0.92, 0.01]",
  "Normal traffic vector: [0.03, 0.95, 0.02]",
  "WARNING: Statistical deviation detected in node 0x7F.",
  "DPI Engine: Evaluating IP headers for signature match...",
  "CRITICAL: DDoS anomaly signature identified.",
  "Isolating node 0x7F...",
  "Updating access control lists...",
  "Threat Neutralized. Restoring normal traffic routing.",
];

export default function NetworkThreat() {
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, DUMMY_LOGS[currentIndex]];
        if (newLogs.length > 8) newLogs.shift();
        return newLogs;
      });
      currentIndex = (currentIndex + 1) % DUMMY_LOGS.length;
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden snap-start shrink-0 bg-[#020202]">
      {/* Dynamic Background Network Mock */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated SVG Nodes & Links */}
          <g transform="translate(50%, 50%)">
            {/* Normal links */}
            <motion.line x1="-300" y1="-100" x2="-100" y2="50" stroke="#00f0ff" strokeWidth="2" strokeOpacity="0.3" />
            <motion.line x1="-100" y1="50" x2="150" y2="-50" stroke="#00f0ff" strokeWidth="2" strokeOpacity="0.3" />
            <motion.line x1="150" y1="-50" x2="300" y2="150" stroke="#00f0ff" strokeWidth="2" strokeOpacity="0.3" />
            
            {/* Threat link */}
            <motion.line 
              x1="-100" y1="50" x2="0" y2="200" 
              stroke="#ff2a2a" strokeWidth="3" 
              initial={{ strokeOpacity: 0.2 }}
              animate={{ strokeOpacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            {/* Nodes */}
            <circle cx="-300" cy="-100" r="6" fill="#00f0ff" />
            <circle cx="-100" cy="50" r="8" fill="#00f0ff" />
            <circle cx="150" cy="-50" r="6" fill="#00f0ff" />
            <circle cx="300" cy="150" r="6" fill="#00f0ff" />
            
            {/* Threat Node */}
            <motion.circle 
              cx="0" cy="200" r="12" fill="#ff2a2a" 
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ filter: "drop-shadow(0 0 10px #ff2a2a)" }}
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-neon-red/30 bg-neon-red/10 text-neon-red text-sm font-mono">
            Project 04
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-orange-400">Threat</span> & Anomaly Detection
          </h2>
          <p className="text-lg text-white/70">
            Real-Time Traffic Analysis & Intrusion Prevention utilizing unsupervised machine learning.
          </p>
        </motion.div>

        {/* Command Center Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Metrics Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 text-neon-blue font-mono font-bold">
              <Activity className="w-5 h-5" /> Live Metrics
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-xs text-white/50 mb-1 font-mono uppercase">Inbound Traffic</div>
                <div className="text-2xl font-bold">42.8 Gbps</div>
              </div>
              <div className="h-px w-full bg-white/10" />
              <div>
                <div className="text-xs text-white/50 mb-1 font-mono uppercase">Active Nodes</div>
                <div className="text-2xl font-bold">1,024</div>
              </div>
              <div className="h-px w-full bg-white/10" />
              <div>
                <div className="text-xs text-white/50 mb-1 font-mono uppercase">Threat Status</div>
                <div className="text-xl font-bold text-neon-red flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-red animate-ping" />
                  Elevated
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-0 overflow-hidden flex flex-col"
          >
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-white/40" />
              <span className="text-xs text-white/40 font-mono">system_logs_tty1</span>
            </div>
            <div className="p-6 font-mono text-sm h-64 flex flex-col justify-end">
              {logs.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`py-1 ${
                    log.includes("CRITICAL") || log.includes("WARNING") 
                      ? "text-neon-red drop-shadow-[0_0_5px_rgba(255,42,42,0.8)] font-bold" 
                      : log.includes("Neutralized")
                      ? "text-neon-green"
                      : "text-white/60"
                  }`}
                >
                  <span className="text-white/30 mr-2">{'>'}</span> {log}
                </motion.div>
              ))}
              <div className="py-1 text-neon-blue animate-pulse">
                <span className="text-white/30 mr-2">{'>'}</span> _
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
