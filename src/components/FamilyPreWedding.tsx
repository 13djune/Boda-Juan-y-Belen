import { Sparkles, Utensils, MoonStar, Calendar, MapPin, Wine, Heart } from 'lucide-react';
import { WEDDING_INFO } from '../data/weddingData';

export function FamilyPreWedding() {
  const { preWedding } = WEDDING_INFO;

  return (
    <div
      role="region"
      aria-label="Información exclusiva de la cena del viernes para familiares"
      className="my-6 px-4 sm:px-6 lg:px-8 max-w-5xl w-full mx-auto relative z-10"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#082a4c]/95 backdrop-blur-md text-white p-6 sm:p-8 shadow-2xl shadow-black/40 border-2 border-orange-400/70 space-y-5">
        {/* Glow backdrop with warm orange accent */}
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Top badge row */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#04192d] border border-orange-400/60 fluid-badge font-bold tracking-wider uppercase text-orange-300 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            <span>Exclusivo Familiares • Código FAMILIA27</span>
          </div>

          <div className="inline-flex items-center gap-1.5 fluid-badge text-white font-bold bg-orange-500/25 border border-orange-400/60 px-3 py-1 rounded-full shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-orange-300" aria-hidden="true" />
            <span><strong>{preWedding.dayFormatted}</strong></span>
          </div>
        </div>

        {/* Main Highlight Title */}
        <div className="space-y-1">
          <div
            role="heading"
            aria-level={2}
            className="fluid-title-section font-serif font-bold text-white tracking-tight"
          >
            {preWedding.title}
          </div>
          <div className="text-sm sm:text-base text-orange-300 font-bold">
            {preWedding.subtitle}
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed max-w-3xl">
          {preWedding.description}
        </p>

        {/* Feature Cards Grid (Details of the Friday Dinner) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Schedule & Atmosphere */}
          <div className="bg-[#04172a]/95 rounded-2xl p-4 sm:p-5 border border-cyan-500/30 hover:border-orange-400/60 transition-colors space-y-2.5">
            <div className="flex items-center gap-2.5 text-orange-300 font-bold text-sm sm:text-base">
              <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/40">
                <MoonStar className="w-5 h-5 text-orange-400" aria-hidden="true" />
              </div>
              <div role="heading" aria-level={3} className="text-white font-bold text-base">
                Horario & Encuentro
              </div>
            </div>

            <div className="text-sm font-bold text-orange-200">
              {preWedding.dinnerTime}
            </div>

            <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              Comenzaremos reuniéndonos al caer la tarde para brindar con cócteles y disfrutar de la puesta de sol dorada sobre la bahía de Mazarrón.
            </p>
          </div>

          {/* Gastronomy & Bites */}
          <div className="bg-[#04172a]/95 rounded-2xl p-4 sm:p-5 border border-cyan-500/30 hover:border-orange-400/60 transition-colors space-y-2.5">
            <div className="flex items-center gap-2.5 text-orange-300 font-bold text-sm sm:text-base">
              <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/40">
                <Utensils className="w-5 h-5 text-orange-400" aria-hidden="true" />
              </div>
              <div role="heading" aria-level={3} className="text-white font-bold text-base">
                Cena de Tapas & Brindis
              </div>
            </div>

            <div className="text-sm font-bold text-orange-200">
              Gastronomía relajada marinera
            </div>

            <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              {preWedding.menuHighlights}
            </p>
          </div>
        </div>

        {/* Practical details footer */}
        <div className="pt-3 border-t border-cyan-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-orange-200 font-medium">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
            <span className="font-bold text-white">Lugar: </span>
            <span className="text-slate-100">{preWedding.location}</span>
          </div>

          <div>
            <span className="font-bold text-white">Vestimenta sugerida: </span>
            <span className="text-slate-100">{preWedding.dressCode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
