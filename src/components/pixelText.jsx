// src/components/PixelText.jsx
import React, { useRef, useEffect } from "react";

export default function PixelText({ text = "ALCHEMY", height = 260 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const roRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let width = 0;
    let heightPx = 0;

    // Config
    const sampleGap = 6;
    const particleSize = 3.0;
    const textColor = { r: 220, g: 20, b: 34 }; // red
    const accentColor = { r: 56, g: 182, b: 255 }; // blue
    const settleSpeed = 0.08;
    const jitter = 0.35;

    function setupCanvasSize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = Math.max(200, Math.floor(rect.width));
      heightPx = typeof height === "number" ? height : Math.max(100, rect.height);

      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(heightPx * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${heightPx}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    }

    function generateParticlesFromText() {
      const padX = Math.max(48, Math.ceil(sampleGap * 4 + particleSize * 4));
      const padY = Math.max(24, Math.ceil(sampleGap * 2 + particleSize * 2));
      const off = document.createElement("canvas");
      const offCtx = off.getContext("2d");

      const fontSize = Math.max(
        80,
        Math.floor(width / Math.max(4, text.length * 0.55))
      );
      const textWidthEstimate = fontSize * text.length * 0.7;
      off.width = Math.max(width, textWidthEstimate) + padX * 2;
      off.height = Math.max(heightPx, fontSize * 1.5) + padY * 2;
      offCtx.clearRect(0, 0, off.width, off.height);

      offCtx.fillStyle = "white";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.font = `bold ${fontSize}px Arial, sans-serif`;
      offCtx.fillText(text, off.width / 2, off.height / 2);

      const img = offCtx.getImageData(0, 0, off.width, off.height);
      const particles = [];

      const innerLeft = padX;
      const innerRight = off.width - padX;
      const innerTop = padY;
      const innerBottom = off.height - padY;
      const innerW = innerRight - innerLeft;
      const innerH = innerBottom - innerTop;

      for (let y = innerTop; y < innerBottom; y += sampleGap) {
        for (let x = innerLeft; x < innerRight; x += sampleGap) {
          const idx = (y * off.width + x) * 4;
          const a = img.data[idx + 3];
          if (a > 128) {
            const tx = ((x - innerLeft) / innerW) * width;
            const ty =
              ((y - innerTop) / innerH) * (heightPx * 0.9) + heightPx * 0.05;

            const startX = Math.random() * width;
            const startY = -Math.random() * heightPx * 0.6 - 30;
            const isAccent = Math.random() < 0.06;
            const color = isAccent
              ? `rgba(${accentColor.r},${accentColor.g},${accentColor.b},1)`
              : `rgba(${textColor.r},${textColor.g},${textColor.b},1)`;

            particles.push({
              x: startX,
              y: startY,
              tx,
              ty,
              vx: (Math.random() - 0.5) * 6,
              vy: Math.random() * 2 + 1,
              size: particleSize * (0.7 + Math.random() * 1.2),
              color,
              alpha: 0,
            });
          }
        }
      }

      particlesRef.current = particles;
    }

    function onResize() {
      cancelAnimationFrame(rafRef.current);
      setupCanvasSize();
      generateParticlesFromText();
      rafRef.current = requestAnimationFrame(tick);
    }

    function tick() {
      const particles = particlesRef.current;
      ctx.clearRect(0, 0, width, heightPx);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        p.vx += dx * settleSpeed * 0.02;
        p.vy += dy * settleSpeed * 0.02;

        p.vx *= 0.92;
        p.vy *= 0.92;

        if (Math.abs(dx) < 1.5 && Math.abs(dy) < 1.5) {
          p.x += (Math.random() - 0.5) * jitter;
          p.y += (Math.random() - 0.5) * jitter;
          p.alpha = Math.min(1, p.alpha + 0.06);
        } else {
          p.x += p.vx;
          p.y += p.vy;
          p.alpha = Math.min(1, p.alpha + 0.02);
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        const half = p.size / 2;
        ctx.fillRect(p.x - half, p.y - half, p.size, p.size);
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    setupCanvasSize();
    generateParticlesFromText();
    rafRef.current = requestAnimationFrame(tick);

    const parent = canvas.parentElement || document.body;
    if (typeof ResizeObserver !== "undefined") {
      roRef.current = new ResizeObserver(() => {
        clearTimeout(roRef.current._t);
        roRef.current._t = setTimeout(onResize, 120);
      });
      roRef.current.observe(parent);
      const header = document.querySelector("header");
      const footer = document.querySelector("footer");
      if (header) roRef.current.observe(header);
      if (footer) roRef.current.observe(footer);
    } else {
      window.addEventListener("resize", onResize);
    }

    let lastDpr = dpr;
    const dprCheck = setInterval(() => {
      const current = Math.max(1, window.devicePixelRatio || 1);
      if (current !== lastDpr) {
        lastDpr = current;
        onResize();
      }
    }, 300);

    const onVis = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (roRef.current) roRef.current.disconnect();
      clearInterval(dprCheck);
      document.removeEventListener("visibilitychange", onVis);
      if (typeof ResizeObserver === "undefined") {
        window.removeEventListener("resize", onResize);
      }
    };
  }, [text, height]);

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        background:
          "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", // 🔥 Purple/blue gradient
      }}
    >
      <div
        className="w-full relative z-10"
        style={{
          height: typeof height === "number" ? `${height}px` : height,
          minHeight: "120px",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            background: "transparent",
            maxWidth: "100vw",
          }}
        />
      </div>

      {/* Optional glowing overlay for extra impact */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-600/20 pointer-events-none" />
    </div>
  );
}
