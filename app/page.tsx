"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030303] text-white selection:bg-indigo-500/30"
    >
      {/* Dynamic Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 mix-blend-screen blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-rose-500/20 mix-blend-screen blur-[128px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 mix-blend-screen blur-[128px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Main Content Card */}
      <main className="relative z-10 flex flex-col items-center justify-center space-y-8 p-10 text-center">
        <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:bg-white/10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
          </span>
          <span className="pl-1">Next.js 15 Ready</span>
        </div>

        <h1 className="max-w-4xl bg-gradient-to-br from-white via-white/90 to-white/30 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-8xl drop-shadow-sm">
          Hello World
        </h1>
        
        <p className="max-w-2xl text-lg text-white/60 sm:text-xl leading-relaxed">
          Welcome to your new digital playground. Designed with precision, powered by Next.js, and styled for the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-black/10" />
            </div>
            <span>Explore Documentation</span>
          </a>
          <a
            href="https://github.com/Abhishek-Hardaha/AI_Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20"
          >
            View Repository
          </a>
        </div>
      </main>
    </div>
  );
}
