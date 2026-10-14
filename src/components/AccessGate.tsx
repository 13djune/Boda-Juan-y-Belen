import { useState } from 'react';
import confetti from 'canvas-confetti';
import { KeyRound, Sparkles, HeartHandshake, Compass, AlertCircle, Heart } from 'lucide-react';
import { WEDDING_INFO } from '../data/weddingData';
import { AccessType } from '../types/wedding';

interface AccessGateProps {
  onUnlock: (type: AccessType, codeUsed: string) => void;
}

export function AccessGate({ onUnlock }: AccessGateProps) {
  const [inputCode, setInputCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateCode = (rawCode: string) => {
    const cleaned = rawCode.trim().toUpperCase();
    if (!cleaned) {
      setErrorMsg('Por favor, escribe el código que te enviamos.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    if (cleaned === WEDDING_INFO.codes.family || cleaned === 'FAMILIA') {
      triggerConfetti();
      setTimeout(() => {
        onUnlock('family', cleaned);
        setIsSubmitting(false);
      }, 450);
    } else if (cleaned === WEDDING_INFO.codes.friends || cleaned === 'AMIGOS') {
      triggerConfetti();
      setTimeout(() => {
        onUnlock('friends', cleaned);
        setIsSubmitting(false);
      }, 450);
    } else {
      setTimeout(() => {
        setErrorMsg('El código no es correcto. Revisa el mensaje de tu invitación.');
        setIsSubmitting(false);
      }, 300);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#ea580c', '#38bdf8', '#fbbf24', '#f43f5e', '#2dd4bf'],
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateCode(inputCode);
  };

  const handleQuickDemo = (code: string) => {
    setInputCode(code);
    validateCode(code);
  };

  return (
    <div
      role="region"
      aria-label="Pantalla de acceso con código de invitación"
      className="min-h-screen bg-gradient-to-b from-[#5eead4] via-[#22d3ee] via-30% via-[#0284c7] via-70% to-[#082f49] flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden"
    >
      {/* Decorative sun & sea caustics */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-300/40 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-300/30 blur-3xl pointer-events-none"
      />

      <div className="w-full max-w-sm sm:max-w-md bg-white/95 sm:bg-white/90 backdrop-blur-xl border-2 border-teal-300/80 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-teal-950/30 relative z-10 space-y-4 text-slate-900">
        {/* Header cute badge */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-400/50 text-xs tracking-wider uppercase font-black text-teal-950 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
            <span>Faro de Mazarrón • 2027</span>
          </div>

          <div
            role="heading"
            aria-level={1}
            className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#022842] drop-shadow-xs"
          >
            Juan <span className="text-orange-500 font-serif italic">&</span> Belén
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-teal-950 font-bold">
            <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500 shrink-0 animate-pulse" aria-hidden="true" />
            <span>¡Nos casamos y queremos celebrarlo contigo!</span>
          </div>
        </div>

        {/* Access Form */}
        <form onSubmit={handleFormSubmit} className="space-y-3.5 pt-1">
          <div className="space-y-1.5">
            <label
              htmlFor="accessCodeInput"
              className="block text-xs uppercase tracking-wider font-black text-teal-950 text-center"
            >
              Introduce tu Código de Invitación
            </label>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-teal-700"
              >
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                id="accessCodeInput"
                type="text"
                value={inputCode}
                onChange={(e) => {
                  setInputCode(e.target.value.toUpperCase());
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="FAMILIA27 o AMIGOS27"
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-teal-50/80 border-2 border-teal-300 text-[#022842] placeholder:text-teal-700/60 font-black tracking-widest text-center focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-inner text-sm sm:text-base"
                autoComplete="off"
                autoCapitalize="characters"
                required
                aria-invalid={!!errorMsg}
                aria-describedby={errorMsg ? 'code-error' : undefined}
              />
            </div>

            {errorMsg && (
              <div
                id="code-error"
                role="alert"
                aria-live="assertive"
                className="flex items-center gap-2 p-2.5 text-xs bg-rose-600 border border-rose-300 rounded-xl text-white font-bold"
              >
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-400 hover:via-amber-400 hover:to-rose-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-orange-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                <span>Accediendo a la invitación...</span>
              </div>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" aria-hidden="true" />
                <span>Entrar a la Invitación</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Switcher */}
        <div className="pt-3 border-t border-teal-200 space-y-2">
          <div className="text-xs text-center text-teal-950 font-black flex items-center justify-center gap-1.5">
            <KeyRound className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
            <span>Códigos de acceso rápido:</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemo(WEDDING_INFO.codes.family)}
              className="px-3 py-2 text-xs font-bold rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 border-2 border-amber-300 transition-all text-center flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95"
            >
              <span className="font-mono font-black tracking-wider text-sm">{WEDDING_INFO.codes.family}</span>
              <span className="text-[10px] text-amber-900 font-medium">Familia (+ Cena Viernes)</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemo(WEDDING_INFO.codes.friends)}
              className="px-3 py-2 text-xs font-bold rounded-xl bg-teal-100 hover:bg-teal-200 text-teal-950 border-2 border-teal-300 transition-all text-center flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95"
            >
              <span className="font-mono font-black tracking-wider text-sm">{WEDDING_INFO.codes.friends}</span>
              <span className="text-[10px] text-teal-900 font-medium">Amigos (Boda Sábado)</span>
            </button>
          </div>
          <p className="text-[11px] text-center text-teal-900 font-medium leading-tight">
            Pulsa en cualquiera de los dos o escríbelo arriba.
          </p>
        </div>

        {/* Date line */}
        <div className="text-center pt-1 border-t border-teal-200">
          <span className="text-xs text-orange-600 font-bold inline-flex items-center gap-1.5">
            <HeartHandshake className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
            <strong>Sábado 17 de Julio • 20:30 h</strong> • Faro de Mazarrón
          </span>
        </div>
      </div>
    </div>
  );
}
