import { Heart, Sparkles } from 'lucide-react';
import { WEDDING_INFO } from '../data/weddingData';

export function GiftsSection() {
  const { giftsHeartfelt } = WEDDING_INFO;

  return (
    <div
      id="regalos"
      role="region"
      aria-label="Información de regalos y detalles para los novios"
      className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-white w-full"
    >
      <div className="max-w-3xl w-full mx-auto space-y-6">
        {/* Header badge */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#02182b] text-cyan-200 fluid-badge font-bold shadow-xs border border-cyan-400/40">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>Un Detalle Especial</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/25 text-orange-200 border border-orange-400/60 fluid-badge font-bold uppercase tracking-wider shadow-2xs">
              <Heart className="w-3.5 h-3.5 text-orange-400 fill-orange-400 animate-pulse" aria-hidden="true" />
              <span>De Corazón</span>
            </div>
          </div>

          <div
            role="heading"
            aria-level={2}
            className="fluid-title-section font-serif font-bold text-white tracking-tight"
          >
            {giftsHeartfelt.title}
          </div>

          <div className="fluid-subtitle font-bold text-orange-300 max-w-md mx-auto">
            {giftsHeartfelt.subtitle}
          </div>
        </div>

        {/* Unified, Centered Elegant Card */}
        <div className="bg-[#0a426e]/90 backdrop-blur-md rounded-3xl p-5 sm:p-8 shadow-xl shadow-cyan-950/40 border-2 border-cyan-400/40 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-orange-500/25 text-orange-300 border-2 border-orange-400/60 flex items-center justify-center shadow-md mx-auto">
            <Heart className="w-8 h-8 fill-orange-500 text-orange-400 animate-pulse" aria-hidden="true" />
          </div>

          <div
            role="heading"
            aria-level={3}
            className="font-serif font-bold fluid-card-title text-white"
          >
            Vuestra presencia es nuestro mayor regalo
          </div>

          <p className="text-sm sm:text-base text-white leading-relaxed font-medium max-w-xl mx-auto">
            Para nosotros, <strong className="text-amber-300">el auténtico regalo es teneros a nuestro lado</strong> riendo,
            brindando y bailando bajo el cielo de Mazarrón. <strong className="text-orange-300">No queremos dinero ni transferencias</strong>:
            si os apetece tener un detalle con nosotros, nos llenará de ilusión cualquier cosa que nazca de vosotros.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-200 font-bold border-t border-cyan-400/30">
            <Sparkles className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
            <span>¡Vuestras ganas de celebrar y disfrutar son lo único que necesitamos!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
