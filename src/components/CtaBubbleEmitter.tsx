import { useEffect, useRef } from 'react';

interface BubbleParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  driftX: number;
}

export function CtaBubbleEmitter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef<number>(0);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse / trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handlePointerMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if hovering over any CTA button or link
      const isCta = target.closest(
        'button, a[href], [role="button"], input[type="submit"], input[type="button"], .cta-bubble-target'
      );

      if (!isCta) return;

      const now = performance.now();
      // Throttle bubble spawning to ~70ms for lightweight 60fps performance
      if (now - lastSpawnRef.current < 70) return;
      lastSpawnRef.current = now;

      const container = containerRef.current;
      if (!container) return;

      // Spawn 1-2 micro-bubbles at the cursor
      const bubble = document.createElement('div');
      bubble.className = 'cursor-micro-bubble';
      const size = Math.floor(Math.random() * 8) + 6; // 6px to 14px
      const drift = (Math.random() - 0.5) * 32; // -16px to +16px drift

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${e.clientX - size / 2}px`;
      bubble.style.top = `${e.clientY - size / 2}px`;
      bubble.style.setProperty('--drift-x', `${drift}px`);

      container.appendChild(bubble);

      // Self-cleanup after animation finishes
      bubble.addEventListener(
        'animationend',
        () => {
          bubble.remove();
        },
        { once: true }
      );
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
    />
  );
}
