import { useEffect, useRef } from 'react';

type Point = { x: number; y: number };

const DOT_SIZE = 14;
const TRAIL_MAX = 14;
const CONNECT_RADIUS = 130;

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<Point[]>([]);
  const mouseRef = useRef<Point>({ x: -100, y: -100 });
  const dotPosRef = useRef<Point>({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Skip on touch / small screens for performance and usability.
    if (window.matchMedia('(hover: none)').matches) return;

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    if (!canvas || !dot) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) {
        visibleRef.current = true;
        dot.style.opacity = '1';
      }
    };
    const onLeave = () => {
      visibleRef.current = false;
      dot.style.opacity = '0';
    };
    const onDown = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(0.7)';
    };
    const onUp = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    const render = () => {
      const { x: mx, y: my } = mouseRef.current;
      const { x: dx, y: dy } = dotPosRef.current;

      // Smooth follow for the solid dot
      const nx = dx + (mx - dx) * 0.18;
      const ny = dy + (my - dy) * 0.18;
      dotPosRef.current = { x: nx, y: ny };
      dot.style.left = `${nx}px`;
      dot.style.top = `${ny}px`;

      // Trail: push the smoothed point, keep last TRAIL_MAX
      const trail = trailRef.current;
      const last = trail[trail.length - 1];
      if (!last || Math.hypot(nx - last.x, ny - last.y) > 6) {
        trail.push({ x: nx, y: ny });
        if (trail.length > TRAIL_MAX) trail.shift();
      }

      // Draw constellation lines
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connect trail points to each other + to the cursor
      const all = [...trail, { x: nx, y: ny }];
      for (let i = 0; i < all.length; i++) {
        for (let j = i + 1; j < all.length; j++) {
          const a = all[i];
          const b = all[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < CONNECT_RADIUS) {
            const alpha = (1 - dist / CONNECT_RADIUS) * 0.35;
            ctx.strokeStyle = `rgba(255, 106, 0, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Small nodes at trail points
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        const alpha = (i / trail.length) * 0.5;
        ctx.fillStyle = `rgba(255, 106, 0, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[60]"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[61] rounded-full bg-tevexxo-orange"
        style={{
          width: `${DOT_SIZE}px`,
          height: `${DOT_SIZE}px`,
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: '0',
          boxShadow:
            '0 0 8px rgba(255,106,0,0.9), 0 0 18px rgba(255,106,0,0.6), 0 0 34px rgba(255,106,0,0.35)',
          transition: 'opacity 0.3s ease, transform 0.15s ease',
        }}
      />
    </>
  );
}
