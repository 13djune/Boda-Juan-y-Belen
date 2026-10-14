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
} from 'lucide-react';
import { AccessType } from '../types/wedding';

interface NavigationProps {
  accessType: AccessType;
  accessCode: string;
  onResetCode: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navigation({
  accessType,
  accessCode,
  onResetCode,
  activeSection,
  onNavigate,
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
      {/* Top Banner Bar - Seamless luminous glass at top, deep ocean when scrolled */}
      <div
        role="banner"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#082a4c]/95 backdrop-blur-md shadow-lg shadow-black/30 py-2 border-b border-orange-400/40'
            : 'bg-white/70 backdrop-blur-md py-2 sm:py-2.5 border-b border-teal-300/50 shadow-xs'
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo / Couple Names */}
          <button
            type="button"
            onClick={() => onNavigate('inicio')}
            className="flex items-center gap-1.5 sm:gap-2 text-left group cursor-pointer shrink-0"
            aria-label="Ir al inicio de la invitación de Juan y Belén"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-slate-950 shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" aria-hidden="true" />
            </div>
            <div>
              <span className={`font-serif text-sm sm:text-base font-black tracking-wide transition-colors ${
                scrolled ? 'text-white group-hover:text-orange-400' : 'text-[#022842] group-hover:text-orange-600'
              }`}>
                Juan & Belén
              </span>
              <span className={`text-[9px] sm:text-[10px] block -mt-0.5 tracking-wider uppercase font-bold transition-colors ${
                scrolled ? 'text-orange-300' : 'text-teal-900'
              }`}>
                <span className="hidden xs:inline">17 Julio 2027 • </span>Mazarrón
              </span>
            </div>
          </button>

          {/* Access mode badge */}
          <div className={`inline-flex items-center gap-1 sm:gap-1.5 pl-2.5 sm:pl-3 pr-1 py-1 rounded-full text-xs shadow-xs transition-colors shrink-0 ${
            scrolled
              ? 'bg-[#0a355c]/90 border border-orange-400/50 text-white'
              : 'bg-white/95 border border-teal-400/70 text-teal-950'
          }`}>
            <span className={`text-[10px] sm:text-[11px] font-bold tracking-wide ${
              scrolled ? 'text-orange-300' : 'text-orange-600'
            }`}>
              <span className="hidden sm:inline">{accessType === 'family' ? 'Familia • ' : 'Amigos • '}</span>
              {accessType === 'family' ? 'FAMILIA27' : 'AMIGOS27'}
            </span>
            <button
              type="button"
              onClick={onResetCode}
              className={`p-1 rounded-full transition-colors cursor-pointer ${
                scrolled ? 'text-slate-100 hover:text-orange-300 hover:bg-white/10' : 'text-teal-800 hover:text-orange-600 hover:bg-teal-50'
              }`}
              title="Cambiar código de acceso"
              aria-label="Cambiar código de acceso"
            >
              <RefreshCw className="w-3 h-3" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigation Bar - Fully Responsive for Mobile & Desktop */}
      <div
        role="navigation"
        aria-label="Navegación rápida de la invitación"
        className="fixed bottom-2.5 sm:bottom-3 inset-x-0 z-40 px-2 sm:px-3 flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto bg-[#072442]/95 backdrop-blur-xl border border-cyan-400/40 px-1 sm:px-2 py-1 rounded-full shadow-2xl shadow-black/60 flex items-center justify-between sm:justify-around max-w-sm sm:max-w-md w-full gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center py-1 px-1.5 sm:px-2.5 rounded-full transition-all text-xs cursor-pointer flex-1 min-w-0 ${
                  item.highlight
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black shadow-md shadow-orange-950/40'
                    : isActive
                    ? 'bg-orange-500/25 text-orange-300 font-bold border border-orange-400/60'
                    : 'text-cyan-100/90 hover:text-orange-300 hover:bg-white/5'
                }`}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Ir a ${item.label}`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                <span className="text-[9px] sm:text-[10px] mt-0.5 tracking-tight font-bold truncate max-w-full">
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
