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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c4a6e]/90 via-[#0a3a5e]/90 to-[#072a47]/95 backdrop-blur-xl text-white p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 border-2 border-orange-400/80 space-y-5">
        {/* Glow backdrop with warm orange accent */}
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 w-60 h-60 bg-orange-500/25 rounded-full blur-3xl pointer-events-none"
        />

        {/* Top badge row */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#042038] border border-orange-400/60 fluid-badge font-bold tracking-wider uppercase text-orange-300 shadow-xs">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
          {/* Schedule & Atmosphere */}
          <div className="bg-[#0b4774]/90 rounded-2xl p-4 sm:p-5 border-2 border-cyan-400/50 hover:border-orange-400 transition-colors space-y-2.5 shadow-md">
            <div className="flex items-center gap-2.5 text-orange-300 font-bold text-sm sm:text-base">
              <div className="p-2 rounded-xl bg-orange-500/25 text-orange-300 border border-orange-400/50">
                <MoonStar className="w-5 h-5 text-orange-300" aria-hidden="true" />
              </div>
              <div role="heading" aria-level={3} className="text-white font-bold text-base">
                Horario & Encuentro
              </div>
            </div>

            <div className="text-sm font-black text-amber-300 flex items-center gap-1.5">
              <span>Viernes 16 • 20:30 h en el Faro de Mazarrón</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
              Cena familiar el viernes 16 a las 20:30 en el faro de Mazarrón. Comenzaremos reuniéndonos al atardecer frente al mar para cenar juntos, brindar y disfrutar en familia antes del gran día.
            </p>
          </div>

          {/* Gastronomy & Bites */}
          <div className="bg-[#0b4774]/90 rounded-2xl p-4 sm:p-5 border-2 border-cyan-400/50 hover:border-orange-400 transition-colors space-y-2.5 shadow-md">
            <div className="flex items-center gap-2.5 text-orange-300 font-bold text-sm sm:text-base">
              <div className="p-2 rounded-xl bg-orange-500/25 text-orange-300 border border-orange-400/50">
                <Utensils className="w-5 h-5 text-orange-300" aria-hidden="true" />
              </div>
              <div role="heading" aria-level={3} className="text-white font-bold text-base">
                Cena de Tapas & Brindis
              </div>
            </div>

            <div className="text-sm font-black text-amber-300">
              Gastronomía relajada marinera
            </div>

            <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
              {preWedding.menuHighlights}
            </p>
          </div>
        </div>

        {/* Practical details footer */}
        <div className="pt-3 border-t border-cyan-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-orange-200 font-semibold">
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
