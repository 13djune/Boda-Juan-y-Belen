import { useState, useCallback } from 'react';
import { useTouchParallax } from '../hooks/useTouchParallax';
import {
  SchoolOfFish,
  SingleFish,
  DeepSeaFish,
  Starfish,
  Squid,
  Jellyfish,
  Diver,
} from './MarineFauna';

export function ParallaxBackground() {
  const scrollY = useTouchParallax();

  // State to track creatures that are scattered or speeding up when clicked
  const [scattered, setScattered] = useState<Record<string, boolean>>({});

  const handleCreatureClick = useCallback((id: string) => {
    setScattered((prev) => ({ ...prev, [id]: true }));

    // Reset after 1.5s so the creature resumes its natural swimming cadence
    setTimeout(() => {
      setScattered((prev) => ({ ...prev, [id]: false }));
    }, 1500);
  }, []);

  // Real-time immersion depth (0 at surface, 1 at seabed)
  const scrollHeight =
    typeof window !== 'undefined'
      ? Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      : 1;
  const progress = Math.min(Math.max(scrollY / scrollHeight, 0), 1);

  return (
    <>
      {/* ============================================================ */}
      {/* 1. FIXED DYNAMIC BACKGROUND DARKENING LAYER                  */}
      {/*    Turns from sunlit Mediterranean azure to deep midnight    */}
      {/* ============================================================ */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        {/* Base sunlit Mediterranean gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a3556] via-[#04334c] via-45% to-[#01111e]" />

        {/* Dynamic abyss darkening overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-100 ease-out will-change-[opacity]"
          style={{
            backgroundColor: '#00040a',
            opacity: Math.min(progress * 0.95, 0.95),
          }}
        />

        {/* Deep abyss vignette gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-100"
          style={{ opacity: Math.min(progress * 1.3, 1) }}
        />

        {/* Surface sun caustic flare */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[54rem] h-[36rem] bg-gradient-to-b from-sky-300/35 via-teal-400/15 to-transparent rounded-full blur-3xl transition-opacity duration-200"
          style={{ opacity: Math.max(1 - progress * 2.2, 0) }}
        />
        <div
          className="absolute top-10 right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-orange-500/25 via-amber-400/15 to-transparent blur-3xl transition-opacity duration-200"
          style={{ opacity: Math.max(1 - progress * 2.5, 0) }}
        />
      </div>

      {/* ============================================================ */}
      {/* 2. FULL DOCUMENT HEIGHT UNDERWATER ECOSYSTEM                 */}
      {/*    Subdued, Softened Marine Fauna (Protects White Text AAA)  */}
      {/* ============================================================ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
      >
        {/* ------------------------------------------------------------ */}
        {/* ZONA 1: SUPERFICIE (0% - 15%)                                */}
        {/* ------------------------------------------------------------ */}

        {/* BUCEADOR: Silueta suave con alto contraste protegido para textos */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar buceador para acelerar"
          onClick={() => handleCreatureClick('diver')}
          className={`absolute top-[3%] left-[3%] sm:left-[7%] will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered.diver ? 'opacity-85' : 'opacity-35 hover:opacity-65'
          }`}
          style={{
            transform: `translate3d(${scrollY * 0.16 + (scattered.diver ? 80 : 0)}px, 0, 0)`,
            transition: scattered.diver ? 'transform 0.4s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.7) contrast(0.9)',
          }}
        >
          <div className={scattered.diver ? 'anim-scatter' : ''}>
            <Diver className="w-20 h-20 sm:w-28 sm:h-28 transform -scale-x-100 -rotate-12 group-hover:scale-105 transition-transform text-cyan-200" />
          </div>
          {scattered.diver && (
            <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-cyan-300/60 anim-bubble-burst" />
          )}
        </div>

        {/* ------------------------------------------------------------ */}
        {/* ZONA 2: ARRECIFE SUPERIOR & CRONOGRAMA (15% - 32%)          */}
        {/* ------------------------------------------------------------ */}

        {/* BANCO DE PECES: Silueta profunda que no compite con texto blanco */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar banco de peces para dispersarlo"
          onClick={() => handleCreatureClick('school-1')}
          className={`absolute top-[17%] right-[4%] sm:right-[9%] text-cyan-400 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered['school-1'] ? 'opacity-85' : 'opacity-35 hover:opacity-65'
          }`}
          style={{
            transform: `translate3d(${-(scrollY * 0.18 + (scattered['school-1'] ? 140 : 0))}px, 0, 0)`,
            transition: scattered['school-1'] ? 'transform 0.35s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.65) contrast(0.85)',
          }}
        >
          <div className={scattered['school-1'] ? 'anim-scatter' : ''}>
            <SchoolOfFish className="w-28 h-28 sm:w-38 sm:h-38 transform -scale-x-100 group-hover:scale-105 transition-transform" />
          </div>
          {scattered['school-1'] && (
            <div className="absolute -top-2 left-4 w-7 h-7 rounded-full bg-cyan-200/70 anim-bubble-burst" />
          )}
        </div>

        {/* MEDUSA 1: Suave y etérea sin brillo deslumbrante */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar medusa para acelerar su nado"
          onClick={() => handleCreatureClick('jelly-1')}
          className={`absolute top-[26%] right-[5%] sm:right-[12%] text-cyan-300 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered['jelly-1'] ? 'opacity-80' : 'opacity-30 hover:opacity-60'
          }`}
          style={{
            transform: `translate3d(${-(scrollY * 0.12 + (scattered['jelly-1'] ? 90 : 0))}px, 0, 0)`,
            transition: scattered['jelly-1'] ? 'transform 0.4s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.65) contrast(0.85)',
          }}
        >
          <div className={scattered['jelly-1'] ? 'anim-scatter' : 'anim-jelly'}>
            <Jellyfish className="w-28 h-28 sm:w-40 sm:h-40 transform rotate-6 group-hover:scale-105 transition-transform" />
          </div>
          {scattered['jelly-1'] && (
            <div className="absolute -top-1 right-2 w-6 h-6 rounded-full bg-cyan-200/60 anim-bubble-burst" />
          )}
        </div>

        {/* ------------------------------------------------------------ */}
        {/* ZONA 3: ENCLAVE & FARO DE MAZARRÓN (32% - 50%)              */}
        {/* ------------------------------------------------------------ */}

        {/* UN PEZ SOLO: Naranja suave que no distrae de textos */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar pez para acelerarlo"
          onClick={() => handleCreatureClick('single-fish')}
          className={`absolute top-[33%] left-[4%] sm:left-[8%] text-orange-400 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered['single-fish'] ? 'opacity-85' : 'opacity-40 hover:opacity-70'
          }`}
          style={{
            transform: `translate3d(${scrollY * 0.20 + (scattered['single-fish'] ? 130 : 0)}px, 0, 0)`,
            transition: scattered['single-fish'] ? 'transform 0.35s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.7) contrast(0.9)',
          }}
        >
          <div className={scattered['single-fish'] ? 'anim-scatter' : ''}>
            <SingleFish className="w-22 h-22 sm:w-32 sm:h-32 transform rotate-6 group-hover:scale-110 transition-transform" />
          </div>
          {scattered['single-fish'] && (
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-orange-300/70 anim-bubble-burst" />
          )}
        </div>

        {/* CALAMAR 1: Silueta oceánica profunda */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar calamar para propulsión rápida"
          onClick={() => handleCreatureClick('squid-1')}
          className={`absolute top-[41%] left-[3%] sm:left-[8%] text-teal-400 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered['squid-1'] ? 'opacity-80' : 'opacity-35 hover:opacity-65'
          }`}
          style={{
            transform: `translate3d(${scrollY * 0.16 + (scattered['squid-1'] ? 120 : 0)}px, 0, 0)`,
            transition: scattered['squid-1'] ? 'transform 0.35s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.65) contrast(0.85)',
          }}
        >
          <div className={scattered['squid-1'] ? 'anim-scatter' : 'anim-squid'}>
            <Squid className="w-28 h-28 sm:w-40 sm:h-40 transform -scale-x-100 rotate-12 group-hover:scale-105 transition-transform" />
          </div>
          {scattered['squid-1'] && (
            <div className="absolute top-2 right-4 w-7 h-7 rounded-full bg-teal-200/70 anim-bubble-burst" />
          )}
        </div>

        {/* ------------------------------------------------------------ */}
        {/* ZONA 4: MENÚ Y RECUERDOS (50% - 70%)                         */}
        {/* ------------------------------------------------------------ */}

        {/* MEDUSA 2: Tonalidad apagada para no restar contraste a las cartas */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar medusa para acelerar"
          onClick={() => handleCreatureClick('jelly-2')}
          className={`absolute top-[53%] left-[5%] sm:left-[11%] text-teal-300 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered['jelly-2'] ? 'opacity-80' : 'opacity-30 hover:opacity-60'
          }`}
          style={{
            transform: `translate3d(${scrollY * 0.12 + (scattered['jelly-2'] ? 100 : 0)}px, 0, 0)`,
            transition: scattered['jelly-2'] ? 'transform 0.4s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.65) contrast(0.85)',
          }}
        >
          <div
            className={scattered['jelly-2'] ? 'anim-scatter' : 'anim-jelly'}
            style={!scattered['jelly-2'] ? { animationDuration: '5.2s', animationDelay: '1.2s' } : undefined}
          >
            <Jellyfish className="w-24 h-24 sm:w-32 sm:h-32 transform -scale-x-100 -rotate-12 group-hover:scale-105 transition-transform" />
          </div>
          {scattered['jelly-2'] && (
            <div className="absolute top-1 left-2 w-6 h-6 rounded-full bg-teal-200/60 anim-bubble-burst" />
          )}
        </div>

        {/* CALAMAR 2: Azul petróleo profundo */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar calamar para acelerar nado"
          onClick={() => handleCreatureClick('squid-2')}
          className={`absolute top-[66%] right-[5%] sm:right-[11%] text-cyan-400 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered['squid-2'] ? 'opacity-80' : 'opacity-35 hover:opacity-65'
          }`}
          style={{
            transform: `translate3d(${-(scrollY * 0.14 + (scattered['squid-2'] ? 120 : 0))}px, 0, 0)`,
            transition: scattered['squid-2'] ? 'transform 0.35s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.65) contrast(0.85)',
          }}
        >
          <div
            className={scattered['squid-2'] ? 'anim-scatter' : 'anim-squid'}
            style={!scattered['squid-2'] ? { animationDuration: '9.2s', animationDelay: '1.6s' } : undefined}
          >
            <Squid className="w-26 h-26 sm:w-36 sm:h-36 transform rotate-[-12deg] group-hover:scale-105 transition-transform" />
          </div>
          {scattered['squid-2'] && (
            <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-cyan-200/70 anim-bubble-burst" />
          )}
        </div>

        {/* ------------------------------------------------------------ */}
        {/* ZONA 5: REGALOS & AGUAS PROFUNDAS (70% - 85%)                */}
        {/* ------------------------------------------------------------ */}

        {/* MEDUSA 3: En el abismo oscuro, tenue silueta suave */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar medusa para acelerar"
          onClick={() => handleCreatureClick('jelly-3')}
          className={`absolute top-[76%] right-[8%] sm:right-[15%] text-cyan-300 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered['jelly-3'] ? 'opacity-80' : 'opacity-30 hover:opacity-60'
          }`}
          style={{
            transform: `translate3d(${-(scrollY * 0.10 + (scattered['jelly-3'] ? 90 : 0))}px, 0, 0)`,
            transition: scattered['jelly-3'] ? 'transform 0.4s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.65) contrast(0.85)',
          }}
        >
          <div
            className={scattered['jelly-3'] ? 'anim-scatter' : 'anim-jelly'}
            style={!scattered['jelly-3'] ? { animationDuration: '7.8s', animationDelay: '2.5s' } : undefined}
          >
            <Jellyfish className="w-26 h-26 sm:w-36 sm:h-36 transform rotate-3 group-hover:scale-105 transition-transform" />
          </div>
          {scattered['jelly-3'] && (
            <div className="absolute top-0 right-1 w-6 h-6 rounded-full bg-cyan-200/60 anim-bubble-burst" />
          )}
        </div>

        {/* PEZ ABISAL 1: Silueta atenuada */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar pez abisal para asustarlo o acelerarlo"
          onClick={() => handleCreatureClick('abyss-1')}
          className={`absolute top-[81%] right-[4%] sm:right-[10%] text-cyan-300 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered['abyss-1'] ? 'opacity-85' : 'opacity-35 hover:opacity-65'
          }`}
          style={{
            transform: `translate3d(${-(scrollY * 0.15 + (scattered['abyss-1'] ? 140 : 0))}px, 0, 0)`,
            transition: scattered['abyss-1'] ? 'transform 0.35s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.65) contrast(0.85)',
          }}
        >
          <div className={scattered['abyss-1'] ? 'anim-scatter' : 'anim-abyss'}>
            <DeepSeaFish className="w-32 h-32 sm:w-44 sm:h-44 transform -scale-x-100 group-hover:scale-105 transition-transform" />
          </div>
          {scattered['abyss-1'] && (
            <div className="absolute top-2 left-4 w-7 h-7 rounded-full bg-cyan-200/70 anim-bubble-burst" />
          )}
        </div>

        {/* ------------------------------------------------------------ */}
        {/* ZONA 6: CONFIRMACIÓN RSVP & LECHO MARINO FINAL (85% - 100%) */}
        {/* ------------------------------------------------------------ */}

        {/* PEZ ABISAL 2: Tonalidad oscura profunda */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar pez abisal para acelerarlo"
          onClick={() => handleCreatureClick('abyss-2')}
          className={`absolute top-[90%] left-[4%] sm:left-[10%] text-teal-300 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered['abyss-2'] ? 'opacity-85' : 'opacity-35 hover:opacity-65'
          }`}
          style={{
            transform: `translate3d(${scrollY * 0.12 + (scattered['abyss-2'] ? 130 : 0)}px, 0, 0)`,
            transition: scattered['abyss-2'] ? 'transform 0.35s ease-out' : 'transform 0.1s linear',
            filter: 'brightness(0.65) contrast(0.85)',
          }}
        >
          <div
            className={scattered['abyss-2'] ? 'anim-scatter' : 'anim-abyss'}
            style={!scattered['abyss-2'] ? { animationDuration: '11.5s', animationDelay: '3s' } : undefined}
          >
            <DeepSeaFish className="w-30 h-30 sm:w-40 sm:h-40 transform rotate-6 group-hover:scale-105 transition-transform" />
          </div>
          {scattered['abyss-2'] && (
            <div className="absolute -top-1 right-2 w-7 h-7 rounded-full bg-teal-200/70 anim-bubble-burst" />
          )}
        </div>

        {/* ESTRELLA DE MAR: Reposando en el lecho marino */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Tocar estrella de mar"
          onClick={() => handleCreatureClick('starfish')}
          className={`absolute top-[98%] left-[7%] sm:left-[13%] text-orange-400 will-change-transform pointer-events-auto cursor-pointer select-none group transition-opacity duration-300 ${
            scattered.starfish ? 'opacity-90' : 'opacity-45 hover:opacity-75'
          }`}
          style={{
            transform: `translate3d(${scrollY * 0.06}px, 0, 0)`,
            filter: 'brightness(0.7) contrast(0.9)',
          }}
        >
          <div className={scattered.starfish ? 'anim-scatter' : ''}>
            <Starfish className="w-22 h-22 sm:w-30 sm:h-30 transform rotate-12 group-hover:scale-110 transition-transform" />
          </div>
          {scattered.starfish && (
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-300/70 anim-bubble-burst" />
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. BURBUJAS CONTINUAS ASCENDENTES EN TODA LA PANTALLA        */}
      {/*    (Inician en el fondo ocultas, suben sin quedarse paradas) */}
      {/* ============================================================ */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      >
        <div className="cute-bubble" style={{ width: '16px', height: '16px', left: '6%', animationDuration: '13s', animationDelay: '0s' }} />
        <div className="cute-bubble" style={{ width: '26px', height: '26px', left: '18%', animationDuration: '17s', animationDelay: '2.5s' }} />
        <div className="cute-bubble" style={{ width: '12px', height: '12px', left: '27%', animationDuration: '11s', animationDelay: '4.8s' }} />
        <div className="cute-bubble" style={{ width: '32px', height: '32px', left: '42%', animationDuration: '20s', animationDelay: '1.2s' }} />
        <div className="cute-bubble" style={{ width: '18px', height: '18px', left: '55%', animationDuration: '15s', animationDelay: '6s' }} />
        <div className="cute-bubble" style={{ width: '28px', height: '28px', left: '69%', animationDuration: '18s', animationDelay: '3.8s' }} />
        <div className="cute-bubble" style={{ width: '14px', height: '14px', left: '82%', animationDuration: '12s', animationDelay: '8.2s' }} />
        <div className="cute-bubble" style={{ width: '22px', height: '22px', left: '91%', animationDuration: '16s', animationDelay: '9.5s' }} />
        <div className="cute-bubble" style={{ width: '15px', height: '15px', left: '34%', animationDuration: '14s', animationDelay: '7.2s' }} />
        <div className="cute-bubble" style={{ width: '20px', height: '20px', left: '76%', animationDuration: '19s', animationDelay: '11s' }} />
      </div>
    </>
  );
}
