"use client";

import React, { useRef, useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Props {
  className?: string;
  particleColor?: string;
  connectionColor?: string;
  mouseConnectionColor?: string;
}

export default function ParticleConstellation({
  className = "",
  particleColor = "rgba(168, 85, 247, 0.6)", // violet-500
  connectionColor = "rgba(168, 85, 247, 0.4)",
  mouseConnectionColor = "rgba(44, 206, 255, 0.8)", // blue-500
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          w: entry.contentRect.width,
          h: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (dimensions.w === 0 || dimensions.h === 0) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const { w, h } = dimensions;

    canvas.width = w;
    canvas.height = h;

    // Re-initialize particles on resize if empty, else keep them but constrain
    if (particles.current.length === 0) {
      particles.current = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        r: Math.random() * 2 + 1,
      }));
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const all = [...particles.current, { ...mouse.current, vx: 0, vy: 0, r: 0, isMouse: true }];

      for (let i = 0; i < all.length; i++) {
        const p1 = all[i] as Particle & { isMouse?: boolean };

        if (!p1.isMouse) {
          p1.x += p1.vx;
          p1.y += p1.vy;
          if (p1.x < 0 || p1.x > w) p1.vx *= -1;
          if (p1.y < 0 || p1.y > h) p1.vy *= -1;

          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
          ctx.fillStyle = particleColor;
          ctx.fill();
        }

        for (let j = i + 1; j < all.length; j++) {
          const p2 = all[j] as Particle & { isMouse?: boolean };
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = p1.isMouse || p2.isMouse ? 150 : 100;

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = 1 - dist / maxDist;
            ctx.strokeStyle = p1.isMouse || p2.isMouse
              ? mouseConnectionColor.replace(/[\d.]+\)$/, `${alpha * 1})`)
              : connectionColor.replace(/[\d.]+\)$/, `${alpha * 0.8})`);
            ctx.lineWidth = p1.isMouse || p2.isMouse ? 1.5 : 1;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(rafRef.current);
  }, [dimensions, particleColor, connectionColor, mouseConnectionColor]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseMove={(e) => {
        const rect = containerRef.current!.getBoundingClientRect();
        mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onMouseLeave={() => { mouse.current = { x: -9999, y: -9999 }; }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block pointer-events-none"
      />
    </div>
  );
}
