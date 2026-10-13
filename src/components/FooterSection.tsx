import { Heart, Compass, ArrowUp, Waves } from 'lucide-react';
import { WEDDING_INFO } from '../data/weddingData';

interface FooterSectionProps {
  onScrollToTop: () => void;
}

export function FooterSection({ onScrollToTop }: FooterSectionProps) {
  return (
    <div
      role="contentinfo"
      aria-label="Pie de página de la invitación de boda"
      className="bg-[#03111f] text-white pt-10 pb-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 relative z-10 w-full"
    >
      <div className="w-full max-w-6xl mx-auto text-center space-y-4">
        {/* Monogram / Snorkel badge with orange accent */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-orange-950/40 text-slate-950 font-bold">
          <Waves className="w-6 h-6 text-slate-950" aria-hidden="true" />
        </div>

        <div className="space-y-1">
          <div
            role="heading"
            aria-level={2}
            className="fluid-title-section font-serif font-bold text-white tracking-wide"
          >
            <strong>{WEDDING_INFO.couple.fullName}</strong>
          </div>
          <div className="fluid-badge text-orange-300 font-bold tracking-wider uppercase">
            <strong>17 de Julio de 2027</strong> • <strong>{WEDDING_INFO.couple.venue}</strong>
          </div>
          <div className="fluid-subtitle text-cyan-200/90 font-medium">
            {WEDDING_INFO.couple.address}
          </div>
        </div>

        <div className="max-w-md mx-auto fluid-subtitle text-cyan-100 font-normal leading-relaxed">
          ¡Deseando que llegue el gran día para brindar, bailar y celebrar juntos frente al mar!
        </div>

        {/* Back to top button with orange accent */}
        <div>
          <button
            type="button"
            onClick={onScrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 hover:from-orange-500/30 hover:to-amber-500/30 border border-orange-400/50 text-xs text-orange-300 hover:text-white font-bold transition-all cursor-pointer hover:-translate-y-0.5 shadow-md shadow-black/40"
            aria-label="Volver al inicio de la página"
          >
            <ArrowUp className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            <span>Volver arriba (Inicio)</span>
          </button>
        </div>

        {/* Small signature */}
        <div className="pt-4 border-t border-cyan-500/15 flex items-center justify-center gap-1.5 text-xs text-cyan-200/60 font-medium">
          <span>Hecho con</span>
          <Heart className="w-3.5 h-3.5 text-orange-400 fill-orange-400" aria-hidden="true" />
          <span>para nuestra boda en <strong>Mazarrón, Murcia</strong></span>
        </div>
      </div>
    </div>
  );
}
