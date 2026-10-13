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
      className="min-h-screen bg-gradient-to-b from-[#0a2342] via-[#023e54] to-[#021321] flex flex-col items-center justify-center p-3 sm:p-5 text-white relative overflow-hidden"
    >
      {/* Decorative sun & sea caustics */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-orange-500/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-400/20 blur-3xl pointer-events-none"
      />

      <div className="w-full max-w-sm sm:max-w-md bg-[#082845]/90 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-black/50 relative z-10 space-y-4">
        {/* Header cute badge */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#051c33] border border-orange-400/40 text-xs tracking-wider uppercase font-bold text-orange-300 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            <span>Faro de Mazarrón • 2027</span>
          </div>

          <div
            role="heading"
            aria-level={1}
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white drop-shadow-md"
          >
            Juan <span className="text-orange-400 font-serif italic">&</span> Belén
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-cyan-100 font-medium">
            <Heart className="w-3.5 h-3.5 text-orange-400 fill-orange-400 shrink-0 animate-pulse" aria-hidden="true" />
            <span>¡Nos casamos y queremos celebrarlo contigo!</span>
          </div>
        </div>

        {/* Access Form */}
        <form onSubmit={handleFormSubmit} className="space-y-3.5 pt-1">
          <div className="space-y-1.5">
            <label
              htmlFor="accessCodeInput"
              className="block text-xs uppercase tracking-wider font-bold text-orange-300 text-center"
            >
              Introduce tu Código de Invitación
            </label>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-cyan-400"
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
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#051b30] border border-cyan-500/30 text-white placeholder-slate-400 font-black tracking-widest text-center focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-inner text-sm sm:text-base"
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
                className="flex items-center gap-2 p-2.5 text-xs bg-rose-600/90 border border-rose-300 rounded-xl text-white font-bold"
              >
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-400 hover:via-amber-400 hover:to-rose-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-orange-950/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
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
        <div className="pt-3 border-t border-cyan-500/20 space-y-2">
          <div className="text-xs text-center text-cyan-200 font-semibold">
            Pulsa tu código para acceder directamente:
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => handleQuickDemo('FAMILIA27')}
              className="p-2.5 rounded-2xl bg-[#051c33] hover:bg-[#082b4c] border border-orange-400/40 text-left transition-all text-white group cursor-pointer hover:-translate-y-0.5"
            >
              <span className="font-black text-orange-400 block text-xs group-hover:underline">
                FAMILIA27
              </span>
              <span className="text-[11px] text-cyan-100 font-medium">Incluye pre-boda 16 de julio</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemo('AMIGOS27')}
              className="p-2.5 rounded-2xl bg-[#051c33] hover:bg-[#082b4c] border border-cyan-400/30 text-left transition-all text-white group cursor-pointer hover:-translate-y-0.5"
            >
              <span className="font-black text-cyan-200 block text-xs group-hover:underline">
                AMIGOS27
              </span>
              <span className="text-[11px] text-cyan-100 font-medium">Invitación boda oficial</span>
            </button>
          </div>
        </div>

        {/* Date line */}
        <div className="text-center pt-1">
          <span className="text-xs text-orange-300 font-semibold inline-flex items-center gap-1.5">
            <HeartHandshake className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            <strong>17 de Julio de 2027</strong> • Puerto de Mazarrón
          </span>
        </div>
      </div>
    </div>
  );
}
