import { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  UtensilsCrossed,
  Camera,
  Heart,
  CheckCircle,
  Sparkles,
  RefreshCw,
  Contrast,
} from 'lucide-react';
import { AccessType } from '../types/wedding';

interface NavigationProps {
  accessType: AccessType;
  accessCode: string;
  onResetCode: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isHighContrast?: boolean;
  onToggleHighContrast?: () => void;
}

export function Navigation({
  accessType,
  accessCode,
  onResetCode,
  activeSection,
  onNavigate,
  isHighContrast = false,
  onToggleHighContrast,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'cronograma', label: 'Horario', icon: Calendar },
    { id: 'ubicacion', label: 'Lugar', icon: MapPin },
    { id: 'menu', label: 'Menú', icon: UtensilsCrossed },
    { id: 'recuerdos', label: 'Fotos', icon: Camera },
    { id: 'regalos', label: 'Regalos', icon: Heart },
    { id: 'confirmacion', label: 'Confirmar', icon: CheckCircle, highlight: true },
  ];

  return (
    <>
      {/* Top Banner Bar - Deep Ocean Glass with Orange Accents */}
      <div
        role="banner"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#061c31]/95 backdrop-blur-md shadow-lg shadow-black/30 py-2 border-b border-orange-500/30'
            : 'bg-gradient-to-b from-[#031322]/85 to-transparent py-2.5'
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Couple Names */}
          <button
            type="button"
            onClick={() => onNavigate('inicio')}
            className="flex items-center gap-2 text-left group cursor-pointer"
            aria-label="Ir al inicio de la invitación de Juan y Belén"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-slate-950 shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-slate-950" aria-hidden="true" />
            </div>
            <div>
              <span className="font-serif text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-orange-400 transition-colors">
                Juan & Belén
              </span>
              <span className="text-[10px] text-orange-300 block -mt-0.5 tracking-wider uppercase font-bold">
                17 Julio 2027 • Mazarrón
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2">
            {/* Accessibility High Contrast Mode Toggle */}
            {onToggleHighContrast && (
              <button
                type="button"
                onClick={onToggleHighContrast}
                aria-pressed={isHighContrast}
                aria-label={
                  isHighContrast
                    ? 'Desactivar modo alto contraste WCAG AAA'
                    : 'Activar modo alto contraste WCAG AAA'
                }
                title={isHighContrast ? 'Alto Contraste: Activado' : 'Activar Alto Contraste AAA'}
                className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                  isHighContrast
                    ? 'bg-amber-300 text-slate-950 border-white ring-2 ring-amber-400 font-black'
                    : 'bg-[#0a2d4d]/80 text-cyan-100 hover:text-white border-cyan-400/40 hover:border-orange-400'
                }`}
              >
                <Contrast className={`w-3.5 h-3.5 ${isHighContrast ? 'text-slate-950' : 'text-orange-400'}`} aria-hidden="true" />
                <span className="hidden sm:inline text-[11px]">
                  {isHighContrast ? 'AAA On' : 'Modo AAA'}
                </span>
              </button>
            )}

            {/* Code badge with quick switch */}
            <div className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full bg-[#0a2d4d]/80 border border-orange-500/40 text-xs text-white shadow-xs">
              <span className="text-[11px] text-orange-400 font-bold tracking-wide">
                {accessType === 'family' ? 'Familia' : 'Invitado'}
              </span>
              <button
                type="button"
                onClick={onResetCode}
                className="p-1 text-slate-200 hover:text-orange-400 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                title={`Código activo: ${accessCode}. Pulsa para cambiar.`}
                aria-label={`Cambiar código de acceso (${accessCode})`}
              >
                <RefreshCw className="w-3 h-3" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigation Bar - Ocean Glass & Vibrant Orange Highlights */}
      <div
        role="navigation"
        aria-label="Navegación rápida de la invitación"
        className="fixed bottom-2.5 inset-x-0 z-40 px-3 flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto bg-[#07213b]/95 backdrop-blur-lg border border-cyan-500/30 px-2 py-1.5 rounded-full shadow-2xl shadow-black/50 flex items-center gap-1 max-w-sm w-full justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all text-xs cursor-pointer ${
                  item.highlight
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black shadow-md shadow-orange-950/40 px-3'
                    : isActive
                    ? 'bg-orange-500/20 text-orange-400 font-bold border border-orange-500/40'
                    : 'text-cyan-100/90 hover:text-orange-300 hover:bg-white/5'
                }`}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Ir a ${item.label}`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span className="text-[10px] mt-0.5 tracking-tight font-semibold">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
