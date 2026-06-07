"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Database, Cpu, BookOpen, Download } from "lucide-react";

const steps = [
  {
    icon: <Database className="w-6 h-6 text-neon-violet" />,
    title: "Teacher Data Generation",
    desc: "Prompted Gemma 4 26B 'teacher' with raw market datasets to generate CoT reasoning logs.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-neon-violet" />,
    title: "Compute Optimization (QLoRA)",
    desc: "Loaded Gemma 3 1B 'student' in 4-bit precision to reduce VRAM while updating weights.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-neon-violet" />,
    title: "Supervised Fine-Tuning",
    desc: "Executed behavioral cloning forcing the student to internalize financial logic.",
  },
  {
    icon: <Download className="w-6 h-6 text-neon-violet" />,
    title: "Adapter Merging & Export",
    desc: "Merged optimized adapters and exported in GGUF for edge-capable local inference.",
  },
];

export default function FinancialDistillation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center p-6 md:p-12 overflow-hidden snap-start shrink-0">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-neon-violet/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-neon-violet/30 bg-neon-violet/10 text-neon-violet text-sm font-mono mb-4">
            Project 01
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Financial LLM <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-purple-400">Distillation</span>
          </h2>
          <p className="text-xl text-white/60 font-mono">Edge-Capable AI (Gemma 4 26B → Gemma 3 1B)</p>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            Compressing the advanced analytical reasoning of a 26-billion parameter instruct model into a highly efficient, lightweight architecture tailored specifically for real-time stock market analysis.
          </p>
        </motion.div>

        {/* Right: Pipeline Visual */}
        <motion.div style={{ y: y1 }} className="relative mt-12 lg:mt-0">
          {/* Connecting line */}
          <div className="absolute left-[33px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-neon-violet/50 to-transparent hidden sm:block" />
          
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 glass-panel p-6 glass-panel-hover"
              >
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-background border border-neon-violet/30 flex items-center justify-center shadow-[0_0_15px_rgba(176,38,255,0.2)]">
                  {step.icon}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
