import { useState, useEffect } from 'react';

/**
 * High-performance mobile touch and scroll synchronization hook.
 * Captures both native scroll and real-time touch gestures (touchstart, touchmove, touchend)
 * with passive listeners and requestAnimationFrame scheduling to eliminate friction and latency.
 */
export function useTouchParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId: number | null = null;
    let isTouching = false;

    const updateScroll = () => {
      const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
      setScrollY(currentY);
      animationFrameId = null;
    };

    const scheduleUpdate = () => {
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(updateScroll);
      }
    };

    // Standard passive scroll listener
    const handleScroll = () => {
      scheduleUpdate();
    };

    // High-frequency touch event listeners for instant mobile responsiveness
    const handleTouchStart = () => {
      isTouching = true;
      scheduleUpdate();
    };

    const handleTouchMove = () => {
      // Synchronize parallax frame-by-frame with finger displacement
      scheduleUpdate();
    };

    const handleTouchEnd = () => {
      isTouching = false;
      scheduleUpdate();

      // Track inertial momentum decay smoothly after finger lift-off
      let momentumFrames = 0;
      const momentumDecay = () => {
        scheduleUpdate();
        momentumFrames++;
        if (momentumFrames < 45 && !isTouching) {
          window.requestAnimationFrame(momentumDecay);
        }
      };
      window.requestAnimationFrame(momentumDecay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    // Initial position capture
    updateScroll();

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return scrollY;
}
