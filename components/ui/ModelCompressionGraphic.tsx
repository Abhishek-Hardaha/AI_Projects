"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulseDuration: number;
}

export default function ModelCompressionGraphic() {
  const [teacherNodes, setTeacherNodes] = useState<Node[]>([]);
  const [studentNodes, setStudentNodes] = useState<Node[]>([]);
  const [streams, setStreams] = useState<{id: number, delay: number}[]>([]);

  useEffect(() => {
    // Generate Teacher Nodes (Dense, large area)
    const tNodes: Node[] = [];
    for (let i = 0; i < 150; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 120; // Wide radius
      tNodes.push({
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        pulseDuration: Math.random() * 3 + 2,
      });
    }
    setTeacherNodes(tNodes);

    // Generate Student Nodes (Dense, small area, brighter)
    const sNodes: Node[] = [];
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 40; // Small radius
      sNodes.push({
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.8 + 0.4,
        pulseDuration: Math.random() * 2 + 1,
      });
    }
    setStudentNodes(sNodes);

    // Generate Stream particles
    const str = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 2,
    }));
    setStreams(str);
  }, []);

  if (teacherNodes.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex flex-col items-center justify-between py-12 opacity-80 mix-blend-screen">
      
      {/* Teacher Model Cluster */}
      <div className="relative w-[300px] h-[300px] flex items-center justify-center -mt-20">
        <div className="absolute inset-0 bg-neon-violet/10 rounded-full blur-3xl" />
        
        {/* Core glow */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-neon-violet/20 rounded-full blur-xl"
        />

        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Constellation lines for Teacher */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            {teacherNodes.slice(0, 40).map((node, i) => {
              const nextNode = teacherNodes[(i + 1) % 40];
              return (
                <line 
                  key={`line-t-${i}`}
                  x1={150 + node.x} y1={150 + node.y}
                  x2={150 + nextNode.x} y2={150 + nextNode.y}
                  stroke="rgba(168, 85, 247, 0.15)"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>

          {teacherNodes.map(node => (
            <motion.div
              key={`t-${node.id}`}
              className="absolute rounded-full bg-purple-400"
              style={{
                width: node.size,
                height: node.size,
                left: `calc(50% + ${node.x}px)`,
                top: `calc(50% + ${node.y}px)`,
              }}
              animate={{ opacity: [node.opacity, node.opacity * 2, node.opacity] }}
              transition={{ duration: node.pulseDuration, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      </div>

      {/* Distillation Funnel / Stream */}
      <div className="relative flex-1 w-full flex items-center justify-center">
        {/* SVG Funnel Shape */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
           <path 
             d="M 50 0 Q 50 100 150 200 T 250 400" 
             fill="none" 
             stroke="url(#grad)" 
             strokeWidth="2" 
             className="hidden" // Just a reference
           />
           <defs>
             <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="rgba(168, 85, 247, 0.5)" />
               <stop offset="50%" stopColor="rgba(52, 211, 153, 0.5)" />
               <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
             </linearGradient>
           </defs>
           
           {/* Beam lines */}
           <motion.path 
             d="M calc(50% - 60px) 0 C calc(50% - 20px) 50%, calc(50% - 20px) 50%, calc(50% - 20px) 100%" 
             fill="none" stroke="url(#grad)" strokeWidth="1" opacity="0.3"
           />
           <motion.path 
             d="M calc(50% + 60px) 0 C calc(50% + 20px) 50%, calc(50% + 20px) 50%, calc(50% + 20px) 100%" 
             fill="none" stroke="url(#grad)" strokeWidth="1" opacity="0.3"
           />
        </svg>

        {/* Falling Particles */}
        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-32 h-full">
            {streams.map((stream) => (
              <motion.div
                key={`s-${stream.id}`}
                className="absolute top-0 w-1 rounded-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent blur-[1px]"
                style={{
                  left: `${(stream.id / 15) * 100}%`,
                  height: Math.random() * 40 + 20 + 'px',
                  opacity: Math.random() * 0.5 + 0.3,
                }}
                animate={{ y: ['0%', '500%'], opacity: [0, 1, 0] }}
                transition={{ 
                  duration: Math.random() * 2 + 1.5, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: stream.delay
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Student Model Cluster */}
      <div className="relative w-[150px] h-[150px] flex items-center justify-center -mb-10">
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl" />
        
        {/* Core glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-16 h-16 bg-blue-500/40 rounded-full blur-lg"
        />

        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Dense Constellation lines for Student */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            {studentNodes.slice(0, 30).map((node, i) => {
              const nextNode = studentNodes[(i + 1) % 30];
              return (
                <line 
                  key={`line-s-${i}`}
                  x1={75 + node.x} y1={75 + node.y}
                  x2={75 + nextNode.x} y2={75 + nextNode.y}
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>

          {studentNodes.map(node => (
            <motion.div
              key={`st-${node.id}`}
              className="absolute rounded-full bg-blue-300 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
              style={{
                width: node.size,
                height: node.size,
                left: `calc(50% + ${node.x}px)`,
                top: `calc(50% + ${node.y}px)`,
              }}
              animate={{ opacity: [node.opacity, 1, node.opacity] }}
              transition={{ duration: node.pulseDuration, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      </div>

    </div>
  );
}
