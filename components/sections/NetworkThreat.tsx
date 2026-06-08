"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Terminal as TermIcon, ShieldCheck, Cpu, Network, Target, Lock, Server, MoveDown } from "lucide-react";
import TubesBackground from "@/components/ui/TubesBackground";

export default function NetworkThreat() {
  const [logs, setLogs] = useState<string[]>([]);
  const [clusterPoints, setClusterPoints] = useState<{dx: number, dy: number}[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  useEffect(() => {
    // Generate cluster points for PCA diagram (client-side only to prevent hydration mismatch)
    const pts = Array.from({ length: 45 }).map(() => {
      const u = 1 - Math.random();
      const v = Math.random();
      const r = Math.sqrt(-2.0 * Math.log(u)) * 10;
      const theta = 2.0 * Math.PI * v;
      return { dx: r * Math.cos(theta), dy: r * Math.sin(theta) };
    });
    setClusterPoints(pts);

    const initialLogs = [
      "Initializing ML Threat Engine v2.4...",
      "Loading ONNX models to Edge Node (NPU)...",
      "Establishing PCAP capture stream (eth0)..."
    ];
    
    setLogs(initialLogs);

    const trafficTypes = [
      "[OK] TCP 192.168.1.45:443 -> 10.0.0.5:80 (Baseline: 0.98)",
      "[OK] UDP 192.168.1.12:53 -> 8.8.8.8:53 (Baseline: 0.99)",
      "[WARN] High latency connection detected: 192.168.1.100",
      "[OK] TCP 10.0.0.5:8080 -> 10.0.0.2:443 (Baseline: 0.95)",
    ];

    const threatTypes = [
      "[CRITICAL] ANOMALY DETECTED: DDoS Signature Match. Score: 0.02",
      "[BLOCK] Isolating MAC 00:1B:44:11:3A:B7",
      "[ALERT] Lateral Movement Attempt blocked on port 445"
    ];

    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      const isThreat = counter % 7 === 0;
      const newLog = isThreat 
        ? threatTypes[Math.floor(Math.random() * threatTypes.length)]
        : trafficTypes[Math.floor(Math.random() * trafficTypes.length)];
      
      setLogs(prev => [...prev.slice(-8), newLog]);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 md:p-12 overflow-hidden snap-start shrink-0 border-b border-white/5">
      {/* Interactive Tubes Background */}
      <div className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen pointer-events-auto">
        <TubesBackground />
      </div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-neon-red/10 rounded-full blur-[150px] pointer-events-none" />

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
            <div className="inline-block px-3 py-1 rounded-full border border-neon-red/30 bg-neon-red/10 text-neon-red text-xs font-mono mb-1">
              Project 04 // Anomaly Detection
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-orange-400">Threat</span> AI
            </h2>
            <p className="text-sm md:text-lg text-white/60 font-mono border-l-2 border-neon-red/50 pl-3">
              Real-Time Machine Learning Security
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
                <Network className="w-5 h-5 text-neon-red" />
                <h3 className="text-lg font-bold">Unsupervised Learning</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-[13px]">
                Rule-based firewalls fail against zero-day exploits. We implemented an <span className="text-neon-red font-bold">Unsupervised ML pipeline</span> utilizing PCA and K-Means clustering. The system autonomously learns the baseline geometry of "normal" traffic and dynamically isolates anomalous vector outliers.
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
                <ShieldCheck className="w-5 h-5 text-orange-400" />
                <h3 className="text-lg font-bold">Automated Threat Response</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-[13px]">
                Upon anomaly detection, the system autonomously quarantines suspicious MAC addresses and triggers an <span className="text-neon-red font-bold">Isolation Forest-based classification pipeline</span> to distinguish false positives from genuine intrusions — reducing mean-time-to-respond (MTTR) to under 200ms.
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
                <div className="flex justify-center"><Server className="w-4 h-4 text-neon-red mb-1" /></div>
                <div className="text-[9px] text-neon-red font-mono uppercase tracking-wider">Scikit-Learn</div>
                <p className="text-[10px] text-white/50 leading-tight">Isolation Forest & K-Means</p>
              </div>
              
              <div className="space-y-1 px-2">
                <div className="flex justify-center"><Lock className="w-4 h-4 text-neon-red mb-1" /></div>
                <div className="text-[9px] text-neon-red font-mono uppercase tracking-wider">Wireshark</div>
                <p className="text-[10px] text-white/50 leading-tight">PCAP / DPI Extraction</p>
              </div>

              <div className="space-y-1 px-2">
                <div className="flex justify-center"><ShieldCheck className="w-4 h-4 text-neon-red mb-1" /></div>
                <div className="text-[9px] text-neon-red font-mono uppercase tracking-wider">ONNX</div>
                <p className="text-[10px] text-white/50 leading-tight">Optimized Edge Target</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Terminal & Highly Technical PCA Plot */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-6 w-full mt-8 lg:mt-0 max-w-lg mx-auto scale-[0.85] md:scale-100 origin-top md:origin-center">
          
          {/* Packet Stream / DPI Node */}
          <div className="glass-panel p-3 bg-[#050508] tech-border relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-neon-red font-mono uppercase tracking-widest">DPI Packet Ingestion</span>
              <span className="flex items-center gap-1 text-[9px] text-neon-red border border-neon-red/30 px-1 rounded bg-neon-red/10">
                <span className="w-1.5 h-1.5 bg-neon-red rounded-full animate-pulse" /> Live Stream
              </span>
            </div>
            <div className="font-mono text-[8px] text-white/40 bg-black/60 p-2 rounded border border-white/5 break-all">
              <span className="text-white/60">0000</span>  45 00 00 3c 1c 46 40 00 40 06 b1 e6 c0 a8 01 2d  <span className="text-orange-300">E..&lt;.F@.@......-</span><br/>
              <span className="text-white/60">0010</span>  0a 00 00 05 01 bb 00 50 00 00 00 00 00 00 00 00  <span className="text-orange-300">.......P........</span><br/>
              <span className="text-white/60">0020</span>  50 02 20 00 <span className="text-neon-red font-bold animate-pulse">ff ff</span> 00 00 00 00 00 00 00 00 00 00  <span className="text-orange-300">P. .............</span>
            </div>
          </div>

          <div className="flex justify-center -my-4 relative z-10"><MoveDown className="w-4 h-4 text-white/30" /></div>

          {/* Scatter Plot Diagram (Highly Technical) */}
          <div className="glass-panel p-4 bg-[#050508] tech-border flex flex-col gap-2 relative h-64 overflow-hidden">
            <div className="text-[10px] text-neon-red font-mono uppercase tracking-widest absolute top-3 left-4 z-20">PCA Cluster Projection</div>
            
            {/* Grid Lines & Radar Sweep */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px] z-0" />
            
            {/* Radar scanner sweep effect */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ WebkitMaskImage: 'radial-gradient(circle, black 15%, transparent 45%)', maskImage: 'radial-gradient(circle, black 15%, transparent 45%)' }}>
              <motion.div 
                className="absolute inset-[-50%] origin-center rounded-full"
                style={{ background: 'conic-gradient(from 0deg, transparent 75%, rgba(16,185,129,0.15) 93%, rgba(16,185,129,0.4) 100%)' }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Axes */}
            <div className="absolute bottom-10 left-10 right-4 h-px bg-white/30 z-10" />
            <div className="absolute top-8 bottom-10 left-10 w-px bg-white/30 z-10" />
            
            {/* Origin & Tick Marks */}
            <div className="absolute bottom-[34px] left-[34px] text-[8px] text-white/30 font-mono z-10">0.0</div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={`x-${i}`} className="absolute bottom-9 w-px h-2 bg-white/30 z-10" style={{ left: `${10 + i * 15}%` }} />
            ))}
            {[1, 2, 3, 4].map((i) => (
              <div key={`y-${i}`} className="absolute left-9 h-px w-2 bg-white/30 z-10" style={{ bottom: `${10 + i * 20}%` }} />
            ))}

            {/* Normal Traffic Cluster (Green) */}
            <motion.div 
              className="absolute top-[45%] left-[35%] w-32 h-32 flex flex-wrap gap-[2px] p-2 justify-center items-center -translate-y-1/2 -translate-x-1/2 z-10"
            >
              <div className="absolute -top-5 left-0 text-[8px] text-emerald-400 font-mono whitespace-nowrap bg-black/50 px-1 border border-emerald-500/30 rounded">Baseline: K-Means (k=3)</div>
              {/* Density Map background glow */}
              <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full" />
              {clusterPoints.map((pt, i) => (
                <div key={i} className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,1)] opacity-90" 
                     style={{ transform: `translate(${pt.dx}px, ${pt.dy}px)` }} />
              ))}
            </motion.div>

            {/* Anomalous Outlier (Red) */}
            <div 
              className="absolute top-[20%] right-[15%] w-3 h-3 bg-neon-red rounded-full shadow-[0_0_15px_rgba(255,51,102,0.8)] flex items-center justify-center z-20"
            >
              <Target className="absolute w-8 h-8 text-neon-red/40 animate-spin-slow" />
              {/* Distance Vector Line */}
              <svg className="absolute w-48 h-40 -left-44 -top-6 pointer-events-none" style={{ zIndex: -1 }}>
                <line x1="168" y1="20" x2="10" y2="90" stroke="rgba(255,51,102,0.6)" strokeWidth="1" strokeDasharray="3 3" />
                <text x="80" y="50" fill="rgba(255,51,102,0.8)" fontSize="9" fontFamily="monospace" transform="rotate(-20 80 50)" fontWeight="bold">Outlier Dist: 14.2σ</text>
              </svg>
            </div>

            {/* Legend / Info */}
            <div className="absolute bottom-2 left-10 right-4 flex justify-between text-[10px] font-mono text-white/60 font-semibold z-10">
              <span>PC1 (Req/Sec)</span>
              <span>PC2 (Byte Size)</span>
            </div>
            <div className="absolute bottom-12 right-4 text-[8px] font-mono text-white/30 z-10 border border-white/10 bg-black/50 p-1 rounded">
              Var Explained: 98.4%
            </div>
          </div>

          <div className="flex justify-center -my-4 relative z-10"><MoveDown className="w-4 h-4 text-white/30" /></div>

          {/* Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-0 overflow-hidden flex flex-col tech-border h-[180px]"
          >
            <div className="bg-[#050508] px-4 py-2 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TermIcon className="w-3 h-3 text-white/50" />
                <span className="text-[10px] font-mono text-white/50">system_logs_tty1</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="bg-black flex-1 p-3 font-mono text-[10px] overflow-x-auto overflow-y-hidden flex flex-col justify-end hide-scrollbar">
              <div className="space-y-1">
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`whitespace-nowrap ${
                      log.includes('CRITICAL') || log.includes('BLOCK') || log.includes('ALERT')
                        ? 'text-neon-red bg-neon-red/10 px-1 -mx-1' 
                        : log.includes('WARN')
                        ? 'text-orange-400'
                        : 'text-emerald-400'
                    }`}
                  >
                    <span className="text-white/30 mr-2">{new Date().toISOString().split('T')[1].slice(0,8)}</span>
                    {log}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
