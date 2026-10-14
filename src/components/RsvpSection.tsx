import { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  Send,
  Heart,
  Sparkles,
  Utensils,
  User,
  Users,
  Mail,
} from 'lucide-react';
import { WEDDING_INFO } from '../data/weddingData';
import { RsvpData, AccessType } from '../types/wedding';

interface RsvpSectionProps {
  accessType: AccessType;
  accessCode: string;
}

export function RsvpSection({ accessType, accessCode }: RsvpSectionProps) {
  const [fullName, setFullName] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no'>('yes');
  const [hasCompanion, setHasCompanion] = useState(false);
  const [companionName, setCompanionName] = useState('');
  const [fridayAttendance, setFridayAttendance] = useState<'yes' | 'no'>('yes');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastRsvp, setLastRsvp] = useState<RsvpData | null>(() => {
    try {
      const saved = localStorage.getItem('juan_belen_wedding_rsvp');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) return;

    const rsvpPayload: RsvpData = {
      fullName: fullName.trim(),
      attendance,
      guestsCount: hasCompanion ? 2 : 1,
      companionName: hasCompanion ? companionName.trim() : undefined,
      fridayDinnerAttendance: accessType === 'family' ? fridayAttendance : undefined,
      allergies: dietaryNotes.trim() ? [dietaryNotes.trim()] : [],
      allergiesOther: dietaryNotes.trim() || undefined,
      message: message.trim() || undefined,
      accessCodeUsed: accessCode,
      submittedAt: new Date().toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };

    try {
      localStorage.setItem('juan_belen_wedding_rsvp', JSON.stringify(rsvpPayload));
    } catch {
      // ignore
    }
    setLastRsvp(rsvpPayload);
    setIsSubmitted(true);

    if (attendance === 'yes') {
      confetti({
        particleCount: 85,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ea580c', '#38bdf8', '#fbbf24', '#f43f5e', '#2dd4bf'],
      });
    }

    const emailSubject = `Confirmación Boda Juan & Belén - ${fullName.trim()} (${
      attendance === 'yes' ? 'SÍ asiste' : 'NO puede asistir'
    })`;

    const emailBody = `¡Hola Juan y Belén!

Aquí tenéis los datos de mi confirmación para vuestra boda en el Faro de Mazarrón:

• Nombre y Apellidos: ${fullName.trim()}
• Asistencia al Sábado: ${attendance === 'yes' ? '¡SÍ, estaré allí celebrándolo con vosotros!' : 'Lamentablemente no podré asistir'}
${
  accessType === 'family' && attendance === 'yes'
    ? `• Cena Familiar del Viernes 16: ${
        fridayAttendance === 'yes'
          ? '¡SÍ, asistiré a la cena del viernes!'
          : 'No podré el viernes (asistiré solo el sábado)'
      }\n`
    : ''
}• Acompañante: ${hasCompanion && companionName.trim() ? companionName.trim() : 'Sin acompañante'}
• Total de asistentes: ${hasCompanion ? 2 : 1}
• Código de invitación: ${accessCode} (${accessType === 'family' ? 'Familia' : 'Amigos'})
• Intolerancias, alergias o restricciones de menú: ${
      dietaryNotes.trim() || 'Ninguna especificada'
    }
• Mensaje o dedicatoria para los novios: ${message.trim() || '¡Muchas felicidades pareja!'}

¡Con muchísimas ganas de veros y celebrarlo juntos en este gran día!`;

    const mailtoUrl = `mailto:${WEDDING_INFO.couple.contactEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div
      id="confirmacion"
      role="region"
      aria-label="Confirmación de asistencia a la boda"
      className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-white w-full"
    >
      <div className="max-w-4xl w-full mx-auto space-y-6">
        {/* Header badge */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#021323] text-cyan-200 fluid-badge font-bold shadow-xs border border-cyan-400/40">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>Confirmación de Asistencia</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/25 text-orange-200 border border-orange-400/60 fluid-badge font-bold uppercase tracking-wider shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>Confirmar</span>
            </div>
          </div>

          <div
            role="heading"
            aria-level={2}
            className="fluid-title-section font-serif font-bold text-white tracking-tight"
          >
            ¿Nos Acompañas?
          </div>

          <div className="fluid-subtitle text-slate-100 font-medium max-w-lg mx-auto leading-relaxed">
            Por favor, confírmanos tu asistencia <strong>antes del 1 de Junio de 2027</strong> para organizar cada detalle del banquete con el Faro.
          </div>
        </div>

        {/* Previous submission reminder banner if already confirmed */}
        {lastRsvp && !isSubmitted && (
          <div
            role="status"
            className="p-4 rounded-3xl bg-[#092947]/90 border border-orange-400/50 text-cyan-100 flex items-center justify-between gap-3 text-xs sm:text-sm shadow-md"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" aria-hidden="true" />
              <span>
                Ya registraste tu confirmación como <strong className="text-white">{lastRsvp.fullName}</strong> ({lastRsvp.attendance === 'yes' ? 'Asiste' : 'No asiste'}). Puedes reenviar el formulario si deseas actualizar algún dato.
              </span>
            </div>
          </div>
        )}

        {/* Confirmation Success State */}
        {isSubmitted ? (
          <div
            role="status"
            className="bg-[#092947]/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/50 border-2 border-orange-400/60 text-center space-y-5 animate-in fade-in"
          >
            <div className="w-20 h-20 rounded-full bg-orange-500/25 text-orange-400 border-2 border-orange-400/60 flex items-center justify-center mx-auto shadow-lg">
              {attendance === 'yes' ? (
                <CheckCircle2 className="w-10 h-10 text-orange-400" aria-hidden="true" />
              ) : (
                <XCircle className="w-10 h-10 text-slate-300" aria-hidden="true" />
              )}
            </div>

            <div
              role="heading"
              aria-level={3}
              className="font-serif font-bold fluid-title-section text-white"
            >
              {attendance === 'yes'
                ? '¡Gracias por acompañarnos, ' + fullName + '!'
                : 'Gracias por avisarnos, ' + fullName}
            </div>

            <p className="text-sm sm:text-base text-slate-100 max-w-lg mx-auto leading-relaxed font-normal">
              {attendance === 'yes' ? (
                <span>
                  Hemos guardado tu confirmación y se ha preparado un correo electrónico directo para los novios. ¡Estamos deseando brindar juntos frente al mar de Mazarrón!
                </span>
              ) : (
                <span>
                  Lamentamos que no puedas acompañarnos físicamente, pero sabemos que estarás con nosotros en pensamiento. ¡Gracias por hacérnoslo saber con tiempo!
                </span>
              )}
            </p>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="py-3 px-6 rounded-2xl bg-[#041a2f] hover:bg-[#07243e] border border-cyan-400/40 text-cyan-200 hover:text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm"
              >
                Editar o enviar otra confirmación
              </button>
            </div>
          </div>
        ) : (
          /* RSVP Form with Perfect Symmetry and Balance */
          <form
            onSubmit={handleSubmit}
            className="bg-[#092947]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40 border border-cyan-500/30 space-y-6"
          >
            {/* Row 1: Full Name & Attendance Radio Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="fullNameInput"
                  className="block text-xs uppercase tracking-wider font-bold text-orange-300"
                >
                  Nombre y Apellidos <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-cyan-400"
                  >
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="fullNameInput"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Carmen García López"
                    className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-[#051c31] border border-cyan-500/40 text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  />
                </div>
              </div>

              {/* Attendance Choice */}
              <div className="space-y-1.5">
                <span className="block text-xs uppercase tracking-wider font-bold text-orange-300">
                  ¿Nos acompañas en el Faro? <span className="text-rose-400">*</span>
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  <label
                    className={`py-3 px-4 rounded-2xl border-2 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      attendance === 'yes'
                        ? 'border-orange-500 bg-orange-500/30 text-white font-bold shadow-md'
                        : 'border-cyan-500/30 bg-[#051c31] hover:border-cyan-500/60 text-cyan-100 font-medium'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendanceOption"
                      value="yes"
                      checked={attendance === 'yes'}
                      onChange={() => setAttendance('yes')}
                      className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                    />
                    <span className="text-xs sm:text-sm"><strong>¡Sí, asistiré!</strong></span>
                  </label>

                  <label
                    className={`py-3 px-4 rounded-2xl border-2 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      attendance === 'no'
                        ? 'border-slate-500 bg-white/15 text-white font-bold'
                        : 'border-cyan-500/30 bg-[#051c31] hover:border-cyan-500/60 text-cyan-100 font-medium'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendanceOption"
                      value="no"
                      checked={attendance === 'no'}
                      onChange={() => setAttendance('no')}
                      className="w-4 h-4 text-slate-400 focus:ring-slate-500"
                    />
                    <span className="text-xs sm:text-sm"><strong>No podré ir</strong></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Companion (+1) Toggle Row */}
            {attendance === 'yes' && (
              <div className="space-y-2.5 pt-2 border-t border-cyan-500/20">
                <label
                  htmlFor="companionCheckbox"
                  className="text-xs uppercase tracking-wider font-bold text-cyan-200 flex items-center gap-2.5 cursor-pointer select-none"
                >
                  <input
                    id="companionCheckbox"
                    type="checkbox"
                    checked={hasCompanion}
                    onChange={(e) => setHasCompanion(e.target.checked)}
                    className="w-4 h-4 rounded text-orange-500 focus:ring-orange-500 cursor-pointer"
                  />
                  <span>¿Vienes con acompañante? (+1)</span>
                </label>

                {hasCompanion && (
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-cyan-400"
                    >
                      <Users className="w-4 h-4" />
                    </div>
                    <input
                      id="companionNameInput"
                      type="text"
                      value={companionName}
                      onChange={(e) => setCompanionName(e.target.value)}
                      placeholder="Nombre y apellidos de tu acompañante"
                      className="w-full pl-10 pr-3.5 py-3 rounded-2xl bg-[#051c31] border border-cyan-500/40 text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Friday Family Dinner Attendance (Exclusively for FAMILIA27) */}
            {accessType === 'family' && attendance === 'yes' && (
              <div className="p-4 rounded-2xl bg-[#04172a] border border-orange-400/50 space-y-2.5 shadow-md">
                <div className="flex items-center gap-2 text-orange-300 font-bold text-xs uppercase tracking-wider">
                  <Utensils className="w-4 h-4 text-orange-400" aria-hidden="true" />
                  <span>Cena Familiar • Viernes 16 a las 20:30 en el Faro de Mazarrón</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  ¿Nos acompañarás también en la <strong>Cena familiar el viernes 16 a las 20:30 en el faro de Mazarrón</strong> antes del gran día?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label
                    className={`py-2.5 px-3.5 rounded-xl border flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm font-bold transition-all ${
                      fridayAttendance === 'yes'
                        ? 'bg-orange-500/30 border-orange-400 text-white shadow-sm'
                        : 'bg-[#061e36] border-cyan-500/25 text-cyan-200 hover:border-cyan-500/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="fridayDinnerOption"
                      value="yes"
                      checked={fridayAttendance === 'yes'}
                      onChange={() => setFridayAttendance('yes')}
                      className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                    />
                    <span>¡Sí, asistiré a la cena del viernes!</span>
                  </label>

                  <label
                    className={`py-2.5 px-3.5 rounded-xl border flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm font-bold transition-all ${
                      fridayAttendance === 'no'
                        ? 'bg-white/15 border-slate-400 text-white'
                        : 'bg-[#061e36] border-cyan-500/25 text-cyan-200 hover:border-cyan-500/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="fridayDinnerOption"
                      value="no"
                      checked={fridayAttendance === 'no'}
                      onChange={() => setFridayAttendance('no')}
                      className="w-4 h-4 text-slate-400 focus:ring-slate-500"
                    />
                    <span>Solo asistiré el sábado</span>
                  </label>
                </div>
              </div>
            )}

            {/* Perfectly Balanced 2-Column Row: Dietary Notes & Dedication Message */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-cyan-500/20">
              {/* Column 1: Dietary Restrictions */}
              <div className="space-y-1.5 flex flex-col justify-between">
                <label
                  htmlFor="dietaryInput"
                  className="block text-xs uppercase tracking-wider font-bold text-orange-300 flex items-center gap-1.5"
                >
                  <Utensils className="w-4 h-4 text-orange-400" aria-hidden="true" />
                  <span>Alergias o Restricciones de Menú</span>
                </label>
                <textarea
                  id="dietaryInput"
                  rows={4}
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  placeholder="Indica aquí celiaquía, alergias alimentarias o intolerancias para adaptar tu menú individualmente..."
                  className="w-full px-3.5 py-3 rounded-2xl bg-[#051c31] border border-cyan-500/40 text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none transition-all"
                />
              </div>

              {/* Column 2: Dedication Message */}
              <div className="space-y-1.5 flex flex-col justify-between">
                <label
                  htmlFor="coupleMessageInput"
                  className="block text-xs uppercase tracking-wider font-bold text-orange-300 flex items-center gap-1.5"
                >
                  <Heart className="w-4 h-4 text-orange-400" aria-hidden="true" />
                  <span>Mensaje o Dedicatoria para Juan y Belén</span>
                </label>
                <textarea
                  id="coupleMessageInput"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Unas palabras de cariño para los novios..."
                  className="w-full px-3.5 py-3 rounded-2xl bg-[#051c31] border border-cyan-500/40 text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-400 hover:via-amber-400 hover:to-rose-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-orange-950/50 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-slate-950" aria-hidden="true" />
                <span>Enviar Confirmación a los Novios</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs text-cyan-200 font-medium text-center">
              <Mail className="w-4 h-4 text-orange-400" aria-hidden="true" />
              <span>
                Se preparará un correo directo a: <strong className="text-orange-300">{WEDDING_INFO.couple.contactEmail}</strong>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
