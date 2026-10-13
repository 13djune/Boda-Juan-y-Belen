interface WaveDividerProps {
  className?: string;
  fillColor?: string;
  ambientColor?: string;
}

/**
 * WaveDivider component that injects a smooth, SVG-based Mediterranean wave pattern
 * at the transition between the first section (Hero / Bienvenida) and the underwater content,
 * visually connecting the lighthouse surface with the marine depths.
 */
export function WaveDivider({
  className = '',
  fillColor = '#071d33',
  ambientColor = 'rgba(44, 172, 173, 0.25)',
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none pointer-events-none select-none relative z-20 ${className}`}
    >
      <div className="relative w-full h-12 sm:h-16 md:h-20 overflow-hidden">
        {/* Ambient Deep Swell Layer */}
        <div className="absolute inset-0 w-[200%] h-full ocean-wave-back">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-full"
            fill="none"
          >
            <path
              d="M0,32 C240,85 480,10 720,50 C960,90 1200,25 1440,60 L1440,120 L0,120 Z"
              fill={ambientColor}
            />
          </svg>
        </div>

        {/* Mid-Depth Turquoise Mediterranean Wave */}
        <div className="absolute inset-0 w-[200%] h-full ocean-wave-front opacity-70">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-full text-cyan-700/40"
            fill="currentColor"
          >
            <path d="M0,50 C180,20 360,75 540,45 C720,15 900,65 1080,35 C1260,10 1380,45 1440,55 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* Foreground Deep Ocean Wave seamlessly meeting the next section */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-full"
            style={{ color: fillColor }}
            fill="currentColor"
          >
            <path d="M0,65 C200,30 420,80 640,52 C860,24 1100,75 1320,48 C1380,42 1410,48 1440,52 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* Subtle Bioluminescent Foam Crest line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>
    </div>
  );
}
