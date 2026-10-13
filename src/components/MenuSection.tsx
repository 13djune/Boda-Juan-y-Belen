import { UtensilsCrossed, Sparkles, Heart, Wine, GlassWater } from 'lucide-react';
import { MENU_COCKTAIL, MENU_BANQUET } from '../data/weddingData';

export function MenuSection() {
  return (
    <div
      id="menu"
      role="region"
      aria-label="El Menú del banquete nupcial"
      className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-white w-full"
    >
      <div className="max-w-5xl w-full mx-auto space-y-6">
        {/* Header badge */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#02243a] text-cyan-200 fluid-badge font-bold shadow-xs border border-cyan-400/40">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>Gastronomía Mediterránea • Banquete</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/25 text-orange-200 border border-orange-400/60 fluid-badge font-bold uppercase tracking-wider shadow-2xs">
              <UtensilsCrossed className="w-3.5 h-3.5 text-orange-400 animate-pulse" aria-hidden="true" />
              <span>Sabores del Mar</span>
            </div>
          </div>

          <div
            role="heading"
            aria-level={2}
            className="fluid-title-section font-serif font-bold text-white tracking-tight"
          >
            El Menú de la Boda
          </div>

          <div className="fluid-subtitle text-slate-100 font-medium max-w-lg mx-auto leading-relaxed">
            Platos elaborados con lo mejor de <strong>nuestra bahía y huerta murciana</strong> para compartir y brindar en la mesa.
          </div>
        </div>

        {/* 1. SECCIÓN CÓCTEL: Grid compacto 2x2 sin huecos */}
        <div className="bg-[#061e36]/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-cyan-500/25 shadow-xl shadow-black/30 space-y-4">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                <GlassWater className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <div role="heading" aria-level={3} className="font-serif font-bold text-lg text-white">
                  Aperitivos del Cóctel de Bienvenida
                </div>
                <div className="text-xs text-cyan-200 font-medium">
                  Degustación en las terrazas con vistas a la bahía
                </div>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/40">
              4 Especialidades
            </span>
          </div>

          {/* Grid 2 columnas balanceado (2 filas exactas de 2 platos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MENU_COCKTAIL.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#04172a] p-3.5 rounded-2xl border border-cyan-500/20 hover:border-orange-400/50 transition-colors flex flex-col justify-between space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold text-sm text-white">
                    {item.title}
                  </div>
                  {item.tags && item.tags[0] && (
                    <span className="shrink-0 text-[10px] font-bold text-orange-200 bg-orange-500/20 px-2 py-0.5 rounded-full border border-orange-400/40">
                      {item.tags[0]}
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-200 font-normal leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. SECCIÓN BANQUETE PRINCIPAL: Grid simétrico 2x3 sin huecos */}
        <div className="bg-[#061e36]/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-cyan-500/25 shadow-xl shadow-black/30 space-y-4">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <div role="heading" aria-level={3} className="font-serif font-bold text-lg text-white">
                  Banquete Nupcial en Sala
                </div>
                <div className="text-xs text-cyan-200 font-medium">
                  Entrante, principales de mar y tierra, sorbete, tarta y bodega
                </div>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/40">
              6 Tiempos
            </span>
          </div>

          {/* Grid 2 columnas simétrico (3 filas exactas de 2 platos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MENU_BANQUET.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#04172a] p-3.5 rounded-2xl border border-cyan-500/20 hover:border-orange-400/50 transition-colors flex flex-col justify-between space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold text-sm text-white">
                    {item.title}
                  </div>
                  <span className="shrink-0 text-[10px] font-bold text-orange-200 bg-orange-500/25 px-2 py-0.5 rounded-full border border-orange-400/50">
                    {item.category}
                  </span>
                </div>
                <div className="text-xs text-slate-200 font-normal leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. ALERTA DIETÉTICA Y MENÚS ADAPTADOS */}
        <div className="p-4 rounded-2xl bg-[#092947]/95 border border-orange-400/50 text-cyan-100 flex items-start gap-3 text-xs sm:text-sm leading-relaxed shadow-lg">
          <Heart className="w-5 h-5 text-orange-400 shrink-0 mt-0.5 animate-pulse" aria-hidden="true" />
          <div>
            <span className="font-bold text-orange-300">¿Tienes alguna alergia, celiaquía o intolerancia? </span>
            <span className="font-normal text-white">
              Por favor, anótalo en el <strong>formulario de confirmación</strong> más abajo
              para que el equipo de cocina prepare tu <strong>menú totalmente adaptado</strong>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
