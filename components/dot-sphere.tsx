"use client";

import { useEffect, useRef } from "react";

const COUNT = 600;
const TILT = 0.38;
const TURN = (Math.PI * 2) / 40;
const MOUSE_DEG = 5;

const POINTS = Array.from({ length: COUNT }, (_, i) => {
  const y = 1 - (2 * (i + 0.5)) / COUNT;
  const r = Math.sqrt(1 - y * y);
  const a = i * Math.PI * (3 - Math.sqrt(5));
  return [Math.cos(a) * r, y, Math.sin(a) * r] as const;
});

export function DotSphere({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const root = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");

    let size = 0;
    let color = "#4be0a0";
    let yaw = 0.6;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;
    let running = false;
    let last = 0;

    const draw = () => {
      const dpr = devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = color;

      const R = size * 0.44;
      const unit = size / 440;
      const tilt = TILT + cy;
      const sy = Math.sin(yaw + cx);
      const cyw = Math.cos(yaw + cx);
      const st = Math.sin(tilt);
      const ct = Math.cos(tilt);
      const mid = size / 2;

      for (const [x, y, z] of POINTS) {
        const x1 = x * cyw + z * sy;
        const z1 = -x * sy + z * cyw;
        const y2 = y * ct - z1 * st;
        const z2 = y * st + z1 * ct;
        const d = (z2 + 1) / 2;
        const k = 1 + 0.1 * z2;
        ctx.globalAlpha = 0.1 + 0.85 * d * d;
        ctx.beginPath();
        ctx.arc(mid + x1 * R * k, mid + y2 * R * k, (0.7 + 1.5 * d) * unit, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const readColor = () => {
      color = getComputedStyle(root).getPropertyValue("--accent").trim() || color;
      if (!running) draw();
    };
    const resize = () => {
      const dpr = devicePixelRatio || 1;
      size = canvas.clientWidth;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
      draw();
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      yaw += TURN * dt;
      const k = 1 - Math.exp(-dt * 3.5);
      cx += (tx - cx) * k;
      cy += (ty - cy) * k;
      draw();
      raf = requestAnimationFrame(frame);
    };

    let inView = true;
    const sync = () => {
      const want = inView && !document.hidden && !reduce.matches;
      if (want && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      } else if (!want && running) {
        running = false;
        cancelAnimationFrame(raf);
        draw();
      }
    };

    const onMove = (e: PointerEvent) => {
      if (reduce.matches) return;
      const rad = (MOUSE_DEG * Math.PI) / 180;
      tx = (e.clientX / innerWidth - 0.5) * 2 * rad;
      ty = (e.clientY / innerHeight - 0.5) * 2 * rad;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([en]) => {
      inView = en.isIntersecting;
      sync();
    });
    io.observe(canvas);
    const mo = new MutationObserver(readColor);
    mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    const scheme = matchMedia("(prefers-color-scheme: dark)");
    scheme.addEventListener("change", readColor);
    document.addEventListener("visibilitychange", sync);
    reduce.addEventListener("change", sync);
    if (fine.matches) addEventListener("pointermove", onMove, { passive: true });

    readColor();
    resize();
    sync();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      scheme.removeEventListener("change", readColor);
      document.removeEventListener("visibilitychange", sync);
      reduce.removeEventListener("change", sync);
      removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
