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
      className="relative flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 bg-transparent text-slate-900 overflow-hidden"
    >
      {/* Decorative Warm Mediterranean Sun Glow behind surface */}
      <div
        aria-hidden="true"
        className="absolute top-2 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-amber-300/30 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main Content (expansive fluid layout on wider mobile & desktop) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-4 px-2 sm:px-4">
        {/* Date & Venue Badge */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 border border-teal-400/60 fluid-badge font-bold text-teal-950 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
            <span>Faro de Mazarrón • Murcia</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/70 fluid-badge font-bold uppercase tracking-wider text-orange-950 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
            <span><strong>{WEDDING_INFO.couple.dateFormatted}</strong></span>
          </div>

          {accessType === 'family' && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/70 fluid-badge font-bold text-amber-950 shadow-sm">
              <Utensils className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
              <span>Incluye Cena Familiar Viernes 16</span>
            </div>
          )}
        </div>

        {/* Couple Names - High Contrast & Dynamic Fluid clamp() */}
        <div className="space-y-1">
          <div
            role="heading"
            aria-level={1}
            className="fluid-title-hero font-serif font-black tracking-tight text-[#022842] drop-shadow-sm"
          >
            Juan <span className="text-orange-500 font-serif italic inline-block">&</span> Belén
          </div>
          <div className="flex items-center justify-center gap-1.5 fluid-subtitle font-bold text-teal-950 tracking-wide">
            <Sun className="w-4 h-4 text-orange-600 animate-spin" aria-hidden="true" style={{ animationDuration: '16s' }} />
            <span>¡Nos casamos frente al mar!</span>
          </div>
        </div>

        {/* Address badge - clear and legible */}
        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 border border-teal-400/50 fluid-badge text-teal-950 max-w-md mx-auto shadow-sm">
          <MapPin className="w-4 h-4 text-orange-600 shrink-0" aria-hidden="true" />
          <span>
            <strong>{WEDDING_INFO.couple.venue}</strong>: {WEDDING_INFO.couple.address}
          </span>
        </div>

        {/* Welcome Text with essential requirements */}
        <div className="fluid-subtitle text-teal-950 font-normal leading-relaxed max-w-2xl mx-auto px-2 space-y-3">
          <p className="font-medium">
            Compartir este momento con vosotros es lo que lo hace inolvidable. Celebraremos nuestro enlace el{' '}
            <strong>Sábado 17 de Julio a las 20:30 h</strong> en el <strong>Faro de Mazarrón</strong> frente a las aguas del Mediterráneo.
          </p>

          {/* Key guest notes banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs text-left">
            <div className="p-2.5 rounded-xl bg-white/90 border border-teal-400/50 text-teal-950 flex items-center gap-2 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shrink-0" />
              <span><strong>Sin chaqueta ni corbata</strong> (venid frescos y cómodos)</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/90 border border-amber-400/60 text-amber-950 flex items-center gap-2 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
              <span>Se recomienda ir con <strong>zapato cómodo</strong></span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/90 border border-orange-400/70 text-orange-950 flex items-center gap-2 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0 animate-ping" />
              <span>Si no queréis perderos cosas, <strong>¡sed puntuales!</strong></span>
            </div>
          </div>
        </div>

        {/* Countdown Box */}
        <div
          role="region"
          aria-label="Cuenta atrás para el gran día"
          className="bg-white/95 backdrop-blur-md border border-teal-300/80 rounded-3xl p-3.5 sm:p-4 shadow-xl max-w-sm mx-auto hover:border-orange-400/70 transition-all duration-300"
        >
          <div className="fluid-badge uppercase tracking-wider text-orange-600 mb-2 font-black flex items-center justify-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-orange-600 fill-orange-600 animate-pulse" aria-hidden="true" />
            <span>Cuenta atrás para el gran día</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
            <div className="bg-teal-50/90 rounded-2xl p-2 border border-teal-200/80 shadow-2xs">
              <span className="block fluid-countdown-num font-black text-[#022842] font-mono">
                {timeLeft.days}
              </span>
              <span className="text-[10px] text-teal-900 font-black uppercase tracking-wider">
                Días
              </span>
            </div>

            <div className="bg-teal-50/90 rounded-2xl p-2 border border-teal-200/80 shadow-2xs">
              <span className="block fluid-countdown-num font-black text-[#022842] font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-teal-900 font-black uppercase tracking-wider">
                Horas
              </span>
            </div>

            <div className="bg-teal-50/90 rounded-2xl p-2 border border-teal-200/80 shadow-2xs">
              <span className="block fluid-countdown-num font-black text-[#022842] font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-teal-900 font-black uppercase tracking-wider">
                Minutos
              </span>
            </div>

            <div className="bg-teal-50/90 rounded-2xl p-2 border border-teal-200/80 shadow-2xs">
              <span className="block fluid-countdown-num font-black text-orange-600 font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-teal-900 font-black uppercase tracking-wider">
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
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-400 hover:via-amber-400 hover:to-rose-400 text-slate-950 font-black text-sm shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
          >
            <CheckCircle className="w-4 h-4 text-slate-950" aria-hidden="true" />
            <span>Confirmar Asistencia</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadCalendar}
            className="w-full sm:w-auto px-4 py-3.5 rounded-full bg-white/90 hover:bg-white border-2 border-teal-500/60 text-[#022842] font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 hover:-translate-y-0.5 shadow-md"
          >
            <Download className="w-4 h-4 text-teal-700" aria-hidden="true" />
            <span>Guardar en Calendario (.ics)</span>
          </button>
        </div>

        {/* Scroll Submersion Indicator */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onNavigate('cronograma')}
            className="inline-flex flex-col items-center text-xs text-teal-950 hover:text-orange-600 transition-colors cursor-pointer group"
            aria-label="Ver los detalles de la boda"
          >
            <div className="flex items-center gap-1.5 mb-1 font-bold text-teal-950">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
              <span>Ver detalles de la boda</span>
            </div>
            <ArrowDown className="w-4 h-4 text-orange-600 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* WaveDivider: Smooth Mediterranean SVG wave pattern connecting Hero with underwater content */}
      <div className="w-full absolute bottom-0 inset-x-0 z-20">
        <WaveDivider fillColor="rgba(8, 51, 88, 0.25)" ambientColor="rgba(34, 211, 238, 0.35)" />
      </div>
    </div>
  );
}
