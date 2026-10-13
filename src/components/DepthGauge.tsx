import { useTouchParallax } from '../hooks/useTouchParallax';

export function DepthGauge() {
  const scrollY = useTouchParallax();

  // Calculate real-time depth from scrollY
  const scrollHeight = typeof window !== 'undefined'
    ? Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    : 1;
  const progress = Math.min(Math.max(scrollY / scrollHeight, 0), 1);
  const currentDepth = Math.round(progress * 30);

  const depthMarkers = [0, 5, 10, 18, 25, 30];

  return (
    <div
      role="complementary"
      aria-label="Indicador sutil de profundidad marina"
      className="hidden md:flex fixed right-3.5 top-1/2 -translate-y-1/2 z-30 pointer-events-none select-none flex-col items-center"
    >
      <div className="bg-[#031322]/75 backdrop-blur-md border border-cyan-400/25 rounded-full px-1.5 py-3 shadow-lg shadow-black/40 flex flex-col items-center gap-2">
        {/* Current Depth Digital Readout */}
        <div className="text-[11px] font-mono font-black text-orange-400 bg-orange-500/20 px-1.5 py-0.5 rounded-full border border-orange-400/40">
          -{currentDepth}m
        </div>

        {/* Vertical Depth Scale Track */}
        <div className="relative w-1 h-36 bg-cyan-950/80 rounded-full overflow-hidden border border-cyan-500/20">
          {/* Active Depth Progress Bar */}
          <div
            className="w-full bg-gradient-to-b from-orange-400 via-amber-300 to-cyan-400 transition-all duration-100 ease-out rounded-full"
            style={{ height: `${(currentDepth / 30) * 100}%` }}
          />
        </div>

        {/* Small subtle dots for key depths */}
        <div className="flex flex-col gap-1.5 text-[9px] font-mono text-cyan-200/60">
          {depthMarkers.map((marker) => {
            const isPassed = currentDepth >= marker;
            return (
              <span
                key={marker}
                className={`transition-colors duration-200 text-center ${
                  isPassed ? 'text-orange-300 font-bold' : 'text-cyan-400/40'
                }`}
              >
                {marker}m
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
