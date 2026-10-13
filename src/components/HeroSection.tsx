import { useState, useEffect } from 'react';
import { Calendar, MapPin, Heart, ArrowDown, Download, CheckCircle, Sun, Sparkles, Utensils } from 'lucide-react';
import { WEDDING_INFO, WEDDING_DATE } from '../data/weddingData';
import { downloadIcsFile } from '../utils/calendar';
import { AccessType } from '../types/wedding';
import { WaveDivider } from './WaveDivider';

interface HeroSectionProps {
  accessType: AccessType;
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ accessType, onNavigate }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = WEDDING_DATE.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCalendar = () => {
    downloadIcsFile(accessType === 'family');
  };

  return (
    <div
      id="inicio"
      role="region"
      aria-label="Bienvenida de la boda de Juan y Belén"
      className="relative flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 bg-gradient-to-b from-[#0a2744] via-[#073252] to-[#052640] text-white overflow-hidden"
    >
      {/* Decorative Sun Glow behind surface */}
      <div
        aria-hidden="true"
        className="absolute top-6 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main Content (expansive fluid layout on wider mobile & desktop) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-4 px-2 sm:px-4">
        {/* Date & Venue Badge */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#032038] border border-cyan-400/40 fluid-badge font-bold text-cyan-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            <span>Faro de Mazarrón • Murcia</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/50 fluid-badge font-bold uppercase tracking-wider text-orange-300">
            <Calendar className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            <span><strong>{WEDDING_INFO.couple.dateFormatted}</strong></span>
          </div>

          {accessType === 'family' && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/25 border border-orange-400/60 fluid-badge font-bold text-orange-200">
              <Utensils className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>Incluye Cena Familiar Viernes 16</span>
            </div>
          )}
        </div>

        {/* Couple Names - High Contrast & Dynamic Fluid clamp() */}
        <div className="space-y-1">
          <div
            role="heading"
            aria-level={1}
            className="fluid-title-hero font-serif font-bold tracking-tight text-white drop-shadow-md"
          >
            Juan <span className="text-orange-400 font-serif italic inline-block">&</span> Belén
          </div>
          <div className="flex items-center justify-center gap-1.5 fluid-subtitle font-semibold text-orange-200 tracking-wide">
            <Sun className="w-4 h-4 text-orange-400 animate-spin" aria-hidden="true" style={{ animationDuration: '16s' }} />
            <span>¡Nos casamos frente al mar!</span>
          </div>
        </div>

        {/* Address badge - clear and legible */}
        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#061d33]/90 border border-cyan-400/30 fluid-badge text-cyan-100 max-w-md mx-auto shadow-sm">
          <MapPin className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
          <span>
            <strong>{WEDDING_INFO.couple.venue}</strong>: {WEDDING_INFO.couple.address}
          </span>
        </div>

        {/* Welcome Text with <strong> keywords (No swimming/diving copy) */}
        <div className="fluid-subtitle text-cyan-50 font-normal leading-relaxed max-w-xl mx-auto px-2">
          Compartir este día con las personas que más queremos es lo que lo convierte en algo
          inolvidable. Celebraremos nuestro enlace el <strong>17 de julio de 2027</strong> a las <strong>12:30 h</strong> con
          vistas a las aguas de la bahía de Mazarrón. ¡Queremos brindar, bailar y disfrutar contigo!
        </div>

        {/* Countdown Box */}
        <div
          role="region"
          aria-label="Cuenta atrás para el gran día"
          className="bg-[#082845]/90 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-3.5 sm:p-4 shadow-xl max-w-sm mx-auto hover:border-orange-400/50 transition-all duration-300"
        >
          <div className="fluid-badge uppercase tracking-wider text-orange-300 mb-2 font-bold flex items-center justify-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-orange-400 fill-orange-400 animate-pulse" aria-hidden="true" />
            <span>Cuenta atrás para el gran día</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
            <div className="bg-[#041a2e] rounded-2xl p-2 border border-cyan-500/20">
              <span className="block fluid-countdown-num font-black text-white font-mono">
                {timeLeft.days}
              </span>
              <span className="text-[10px] text-cyan-200 font-bold uppercase tracking-wider">
                Días
              </span>
            </div>

            <div className="bg-[#041a2e] rounded-2xl p-2 border border-cyan-500/20">
              <span className="block fluid-countdown-num font-black text-white font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-cyan-200 font-bold uppercase tracking-wider">
                Horas
              </span>
            </div>

            <div className="bg-[#041a2e] rounded-2xl p-2 border border-cyan-500/20">
              <span className="block fluid-countdown-num font-black text-white font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-cyan-200 font-bold uppercase tracking-wider">
                Minutos
              </span>
            </div>

            <div className="bg-[#041a2e] rounded-2xl p-2 border border-cyan-500/20">
              <span className="block fluid-countdown-num font-black text-orange-400 font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-cyan-200 font-bold uppercase tracking-wider">
                Segundos
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => onNavigate('confirmacion')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-400 hover:via-amber-400 hover:to-rose-400 text-slate-950 font-black text-sm shadow-xl shadow-orange-950/50 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
          >
            <CheckCircle className="w-4 h-4 text-slate-950" aria-hidden="true" />
            <span>Confirmar Asistencia</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadCalendar}
            className="w-full sm:w-auto px-4 py-3.5 rounded-full bg-[#07243e] hover:bg-[#0a3152] border border-cyan-400/40 text-cyan-100 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-cyan-300" aria-hidden="true" />
            <span>Guardar en Calendario (.ics)</span>
          </button>
        </div>

        {/* Scroll Submersion Indicator */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onNavigate('cronograma')}
            className="inline-flex flex-col items-center text-xs text-cyan-100 hover:text-white transition-colors cursor-pointer group"
            aria-label="Ver los detalles de la boda"
          >
            <div className="flex items-center gap-1.5 mb-1 font-semibold text-orange-300">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Ver detalles de la boda</span>
            </div>
            <ArrowDown className="w-4 h-4 text-orange-400 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* WaveDivider: Smooth Mediterranean SVG wave pattern connecting Hero with underwater content */}
      <div className="w-full absolute bottom-0 inset-x-0 z-20">
        <WaveDivider fillColor="#071d33" ambientColor="rgba(44, 172, 173, 0.3)" />
      </div>
    </div>
  );
}
