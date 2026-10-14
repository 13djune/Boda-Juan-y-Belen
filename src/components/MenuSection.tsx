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
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#07365a]/90 text-cyan-200 fluid-badge font-bold shadow-xs border border-cyan-400/50">
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
        <div className="bg-[#08365c]/85 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-cyan-400/35 shadow-xl shadow-cyan-950/30 space-y-4">
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
                className="bg-[#083558]/90 p-3.5 sm:p-4 rounded-2xl border-2 border-cyan-400/35 hover:border-orange-400 transition-colors flex flex-col justify-between space-y-1.5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold text-sm text-white">
                    {item.title}
                  </div>
                  {item.tags && item.tags[0] && (
                    <span className="shrink-0 text-[10px] font-black text-orange-200 bg-orange-500/25 px-2 py-0.5 rounded-full border border-orange-400/50">
                      {item.tags[0]}
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-100 font-medium leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. SECCIÓN BANQUETE PRINCIPAL: Grid simétrico 2x3 sin huecos */}
        <div className="bg-[#0a426e]/90 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-cyan-400/40 shadow-xl shadow-cyan-950/30 space-y-4">
          <div className="flex items-center justify-between border-b border-cyan-400/30 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-orange-500/25 text-orange-300 border border-orange-400/40">
                <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <div role="heading" aria-level={3} className="font-serif font-bold text-lg text-white">
                  Banquete Nupcial en Sala
                </div>
                <div className="text-xs text-cyan-200 font-bold">
                  Entrante, principales de mar y tierra, sorbete, tarta y bodega
                </div>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/25 text-cyan-100 border border-cyan-400/50">
              6 Tiempos
            </span>
          </div>

          {/* Grid 2 columnas simétrico (3 filas exactas de 2 platos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MENU_BANQUET.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#083558]/90 p-3.5 sm:p-4 rounded-2xl border-2 border-cyan-400/35 hover:border-orange-400 transition-colors flex flex-col justify-between space-y-1.5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold text-sm text-white">
                    {item.title}
                  </div>
                  <span className="shrink-0 text-[10px] font-black text-amber-200 bg-amber-500/25 px-2 py-0.5 rounded-full border border-amber-400/50">
                    {item.category}
                  </span>
                </div>
                <div className="text-xs text-slate-100 font-medium leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. ALERTA DIETÉTICA Y MENÚS ADAPTADOS - Super clara y destacada */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0c4a75]/95 border-2 border-orange-400/80 text-white flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm leading-relaxed shadow-xl">
          <div className="p-2 rounded-xl bg-orange-500/25 text-orange-300 border border-orange-400/50 shrink-0 self-start sm:self-auto">
            <Heart className="w-5 h-5 text-orange-400 fill-orange-400 animate-pulse" aria-hidden="true" />
          </div>
          <div>
            <span className="font-black text-amber-300 text-sm sm:text-base block sm:inline mr-1">
              ¿Tienes alguna alergia, celiaquía o intolerancia?
            </span>
            <span className="font-medium text-slate-100">
              Por favor, anótalo en el <strong>formulario de confirmación</strong> más abajo
              para que el equipo de cocina del faro prepare tu <strong>menú totalmente adaptado</strong>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
