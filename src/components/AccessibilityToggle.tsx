import { Eye, Contrast } from 'lucide-react';

interface AccessibilityToggleProps {
  isHighContrast: boolean;
  onToggle: () => void;
}

export function AccessibilityToggle({
  isHighContrast,
  onToggle,
}: AccessibilityToggleProps) {
  return (
    <div className="fixed bottom-4 left-4 z-40 select-none">
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={isHighContrast}
        aria-label={
          isHighContrast
            ? 'Desactivar modo de alto contraste WCAG AAA'
            : 'Activar modo de alto contraste WCAG AAA para baja visión'
        }
        className={`px-3.5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-2xl transition-all duration-200 cursor-pointer border-2 focus:outline-none focus:ring-4 focus:ring-orange-400 active:scale-95 ${
          isHighContrast
            ? 'bg-amber-300 text-slate-950 border-white font-black shadow-amber-300/40 ring-2 ring-white'
            : 'bg-[#031526]/90 backdrop-blur-md text-white border-cyan-400/50 hover:border-orange-400 hover:text-orange-200 shadow-black/60'
        }`}
      >
        <Contrast
          className={`w-4 h-4 shrink-0 ${isHighContrast ? 'text-slate-950' : 'text-orange-400'}`}
          aria-hidden="true"
        />
        <span>
          {isHighContrast ? 'Alto Contraste: ACTIVADO (AAA)' : 'Modo Contraste AAA'}
        </span>
      </button>
    </div>
  );
}
