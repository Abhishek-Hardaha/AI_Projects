"use client";

import React, { useRef, useEffect } from "react";

interface Dot {
  ox: number; oy: number;
  x: number; y: number;
  vx: number; vy: number;
}

export default function MagneticParticleField({
  color = "#00f0ff",
}: {
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const dots = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    
    // Set to parent container size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        initDots();
      }
    };

    const initDots = () => {
      const W = canvas.width;
      const H = canvas.height;
      // Calculate cols/rows based on screen size to keep density consistent
      const spacing = 30; 
      const cols = Math.floor(W / spacing);
      const rows = Math.floor(H / spacing);
      
      const padX = W / (cols + 1);
      const padY = H / (rows + 1);

      dots.current = [];
      for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {
          dots.current.push({ ox: padX * c, oy: padY * r, x: padX * c, y: padY * r, vx: 0, vy: 0 });
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // initial setup

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 0, g: 240, b: 255 };
    };
    const rgb = hexToRgb(color);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', () => { mouse.current = { x: -9999, y: -9999 }; });

    const loop = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const mx = mouse.current.x;
      const my = mouse.current.y;

      dots.current.forEach(dot => {
        const dx = mx - dot.x;
        const dy = my - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120; // Increased interaction radius for full screen

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          // Repel
          dot.vx -= (dx / dist) * force * 4;
          dot.vy -= (dy / dist) * force * 4;
        }

        // Spring back to origin
        dot.vx += (dot.ox - dot.x) * 0.05;
        dot.vy += (dot.oy - dot.y) * 0.05;
        // Dampen
        dot.vx *= 0.85;
        dot.vy *= 0.85;
        dot.x += dot.vx;
        dot.y += dot.vy;

        const displaced = Math.sqrt((dot.x - dot.ox) ** 2 + (dot.y - dot.oy) ** 2);
        const brightness = Math.min(1, displaced / 30);
        const r = Math.round(rgb.r + (255 - rgb.r) * brightness);
        const g = Math.round(rgb.g + (255 - rgb.g) * brightness);
        const b = Math.round(rgb.b + (255 - rgb.b) * brightness);
        const radius = 1.5 + brightness * 2;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${0.15 + brightness * 0.85})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [color]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
