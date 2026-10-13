import {
  Clock,
  Heart,
  GlassWater,
  Utensils,
  Music,
  MapPin,
  Sparkles,
  Sun,
  Wine,
  Coffee,
  PartyPopper,
} from 'lucide-react';
import { TIMELINE_EVENTS, FAMILY_FRIDAY_TIMELINE_EVENT } from '../data/weddingData';
import { TimelineEvent, AccessType } from '../types/wedding';

interface TimelineSectionProps {
  accessType?: AccessType;
}

export function TimelineSection({ accessType }: TimelineSectionProps) {
  const events =
    accessType === 'family'
      ? [FAMILY_FRIDAY_TIMELINE_EVENT, ...TIMELINE_EVENTS]
      : TIMELINE_EVENTS;

  const getEventVisuals = (event: TimelineEvent, index: number) => {
    switch (event.id) {
      case 't0-family':
        return {
          stepNum: '★',
          tag: 'Cena Familiar de Bienvenida',
          icon: <Utensils className="w-5 h-5 text-orange-400" aria-hidden="true" />,
          accentBg: 'from-orange-500/30 via-amber-500/20 to-transparent',
          badgeText: 'Viernes 16 • Exclusivo Familia',
          badgeColor: 'bg-orange-500/30 text-orange-200 border-orange-400/70',
          atmosphere: 'Cena de tapas marineras y brindis de bienvenida frente al mar',
        };
      case 't1':
        return {
          stepNum: '01',
          tag: 'Bienvenida al Faro',
          icon: <GlassWater className="w-5 h-5 text-orange-400" aria-hidden="true" />,
          accentBg: 'from-amber-500/25 via-orange-500/15 to-transparent',
          badgeText: 'Punto de Encuentro',
          badgeColor: 'bg-orange-500/30 text-orange-200 border-orange-400/60',
          atmosphere: 'Limonada fresca, copas frías y brisa marina',
        };
      case 't2':
        return {
          stepNum: '02',
          tag: 'El "Sí, Quiero"',
          icon: <Heart className="w-5 h-5 text-rose-400 fill-rose-400" aria-hidden="true" />,
          accentBg: 'from-rose-500/25 via-amber-500/15 to-transparent',
          badgeText: '¡El Gran Momento!',
          badgeColor: 'bg-rose-500/30 text-rose-200 border-rose-400/60',
          atmosphere: 'Votos románticos frente al mar Mediterráneo',
        };
      case 't3':
        return {
          stepNum: '03',
          tag: 'Aperitivos & Copas',
          icon: <Wine className="w-5 h-5 text-amber-400" aria-hidden="true" />,
          accentBg: 'from-amber-500/25 via-teal-500/15 to-transparent',
          badgeText: 'Cortador & Jamón',
          badgeColor: 'bg-amber-500/30 text-amber-200 border-amber-400/60',
          atmosphere: 'Aperitivos de la bahía y música en directo',
        };
      case 't4':
        return {
          stepNum: '04',
          tag: 'Banquete Nupcial',
          icon: <Utensils className="w-5 h-5 text-orange-400" aria-hidden="true" />,
          accentBg: 'from-orange-500/25 via-amber-500/15 to-transparent',
          badgeText: 'Sabores del Mar',
          badgeColor: 'bg-orange-500/30 text-orange-200 border-orange-400/60',
          atmosphere: 'Comida sentados con pescados, arroces y brindis',
        };
      case 't5':
        return {
          stepNum: '05',
          tag: 'Baile & Barra Libre',
          icon: <PartyPopper className="w-5 h-5 text-cyan-300" aria-hidden="true" />,
          accentBg: 'from-cyan-500/25 via-blue-500/15 to-transparent',
          badgeText: '¡A Bailar!',
          badgeColor: 'bg-cyan-500/30 text-cyan-200 border-cyan-400/60',
          atmosphere: 'Primer baile, cócteles, risas y DJ hasta tarde',
        };
      case 't6':
      default:
        return {
          stepNum: '06',
          tag: 'Recena & Cierre',
          icon: <Coffee className="w-5 h-5 text-amber-400" aria-hidden="true" />,
          accentBg: 'from-orange-500/20 via-rose-500/15 to-transparent',
          badgeText: 'Churros Calientes',
          badgeColor: 'bg-amber-500/30 text-amber-200 border-amber-400/60',
          atmosphere: 'Chocolate caliente con churros y despedida mágica',
        };
    }
  };

  return (
    <div
      id="cronograma"
      role="region"
      aria-label="Cronograma y momentos clave del día de la boda"
      className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-white w-full"
    >
      <div className="max-w-6xl w-full mx-auto space-y-8">
        {/* Header badge */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#032038] text-cyan-200 fluid-badge font-bold shadow-xs border border-cyan-400/40">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>Momentos Clave • 17 de Julio</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/25 text-orange-200 border border-orange-400/60 fluid-badge font-bold uppercase tracking-wider shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-orange-400 animate-pulse" aria-hidden="true" />
              <span>El Gran Día</span>
            </div>
          </div>

          <div
            role="heading"
            aria-level={2}
            className="fluid-title-section font-serif font-bold text-white tracking-tight"
          >
            Cronograma del Día
          </div>

          <div className="fluid-subtitle text-slate-100 font-medium max-w-xl mx-auto leading-relaxed">
            Cada instante pensado con mimo para <strong>disfrutar, brindar y celebrar juntos</strong> junto a la brisa del Faro de Mazarrón.
          </div>

          {/* Quick-Glance Milestone Progress Line */}
          <div className="pt-3 pb-1 overflow-x-auto no-scrollbar">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#041a2e]/90 border border-cyan-500/30 shadow-md">
              {events.map((evt, idx) => (
                <div key={evt.id} className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#07243e] text-xs font-mono font-bold text-cyan-200 border border-cyan-500/30 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    <strong className="text-white">{evt.time}</strong> {evt.title.split(' ')[0]}
                  </span>
                  {idx < events.length - 1 && (
                    <span className="text-orange-400/60 text-xs select-none">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Timeline Cards Grid with Milestone Spine */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event, index) => {
            const visual = getEventVisuals(event, index);

            return (
              <div
                key={event.id}
                className="relative overflow-hidden rounded-3xl bg-[#082643]/90 backdrop-blur-md p-5 sm:p-6 shadow-xl shadow-black/40 border-2 border-cyan-500/30 hover:border-orange-400/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Visual Ambient Glow Corner */}
                <div
                  aria-hidden="true"
                  className={`absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br ${visual.accentBg} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />

                <div className="relative z-10 space-y-3.5">
                  {/* Top Header Row with Time pill & Milestone Step */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-orange-500/25 border border-orange-400/60 text-orange-300 font-mono font-black text-xs flex items-center justify-center shadow-xs">
                        {visual.stepNum}
                      </span>
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-mono font-black text-sm shadow-md">
                        <Clock className="w-3.5 h-3.5 text-slate-950" aria-hidden="true" />
                        <span>{event.time} h</span>
                      </div>
                      {event.dayLabel && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-orange-500/25 text-orange-200 border border-orange-400/50">
                          {event.dayLabel}
                        </span>
                      )}
                    </div>

                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${visual.badgeColor}`}>
                      <Sparkles className="w-3 h-3 text-orange-400" aria-hidden="true" />
                      <span>{visual.badgeText}</span>
                    </span>
                  </div>

                  {/* Title & Thematic Icon */}
                  <div className="flex items-start gap-3 pt-1">
                    <div className="p-2.5 rounded-2xl bg-[#031b31] border border-cyan-400/35 shrink-0 shadow-sm group-hover:border-orange-400 transition-colors">
                      {visual.icon}
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-orange-300">
                        {visual.tag}
                      </div>
                      <div
                        role="heading"
                        aria-level={3}
                        className="font-serif font-bold fluid-card-title text-white leading-snug pt-0.5"
                      >
                        {event.title}
                      </div>
                    </div>
                  </div>

                  {/* Visual Atmospheric Description */}
                  <div className="text-xs sm:text-sm text-cyan-50 font-normal leading-relaxed bg-[#051c31]/80 rounded-2xl p-3 border border-cyan-500/20">
                    {event.description}
                  </div>
                </div>

                {/* Bottom Location Indicator */}
                <div className="relative z-10 flex items-center justify-between gap-2 pt-3.5 mt-2 border-t border-cyan-500/20 text-xs">
                  <div className="flex items-center gap-1.5 text-orange-300 font-semibold truncate">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">
                      Ubicación: <strong className="text-white">{event.location}</strong>
                    </span>
                  </div>
                  <span className="text-[10px] text-cyan-300 font-mono shrink-0">17 JUL</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
