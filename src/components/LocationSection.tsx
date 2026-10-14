import { MapPin, Navigation, Car, Hotel, ExternalLink, Compass } from 'lucide-react';
import { WEDDING_INFO } from '../data/weddingData';

export function LocationSection() {
  return (
    <div
      id="ubicacion"
      role="region"
      aria-label="Ubicación y mapa interactivo del Faro de Mazarrón"
      className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-white w-full"
    >
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Header badge */}
        <div className="text-center space-y-1.5">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#07385d]/90 text-cyan-200 fluid-badge font-bold shadow-xs border border-cyan-400/50">
              <Compass className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>El Enclave • Faro de Mazarrón</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/25 text-orange-200 border border-orange-400/60 fluid-badge font-bold uppercase tracking-wider shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>Ubicación</span>
            </div>
          </div>

          <div
            role="heading"
            aria-level={2}
            className="fluid-title-section font-serif font-bold text-white tracking-tight"
          >
            Faro Puerto de Mazarrón
            <span className="block text-lg sm:text-2xl font-serif italic text-orange-400 font-normal mt-1">
              "Farero Santiago Acarreta Vicondoa"
            </span>
          </div>

          {/* Exact address badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#093e68]/90 border border-cyan-400/40 fluid-subtitle text-cyan-50 font-semibold max-w-xl mx-auto shadow-xs text-left">
            <MapPin className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
            <span>
              Dirección: <strong className="text-white">{WEDDING_INFO.couple.address}</strong>
            </span>
          </div>
        </div>

        {/* Wider 2-Column Desktop Layout (Map + Info side-by-side) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Interactive Map (7 columns on desktop) */}
          <div className="lg:col-span-7 bg-[#08355a]/85 backdrop-blur-md rounded-3xl p-3 sm:p-4 shadow-xl shadow-cyan-950/30 border border-cyan-400/35 flex flex-col justify-between space-y-3">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-inner border border-cyan-500/20">
              <iframe
                title="Mapa de ubicación en Faro Puerto de Mazarrón Farero Santiago Acarreta Vicondoa"
                src={WEDDING_INFO.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick GPS Action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={WEDDING_INFO.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:via-amber-400 text-slate-950 text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-md"
                aria-label="Abrir C. Cta. del Faro en Google Maps (se abre en pestaña nueva)"
              >
                <Navigation className="w-4 h-4 text-slate-950" aria-hidden="true" />
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" aria-hidden="true" />
              </a>

              <a
                href={WEDDING_INFO.appleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-2xl bg-[#072d4c] hover:bg-[#09385e] border border-orange-400/50 text-orange-200 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-xs"
                aria-label="Abrir C. Cta. del Faro en Apple Maps (se abre en pestaña nueva)"
              >
                <MapPin className="w-4 h-4 text-orange-400" aria-hidden="true" />
                <span>Abrir en Apple Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Practical Arrival Details (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Parking */}
            <div className="bg-[#08355a]/85 backdrop-blur-md rounded-3xl p-5 border border-cyan-400/35 shadow-lg hover:border-orange-400/50 transition-all flex-1">
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  <Car className="w-5 h-5" aria-hidden="true" />
                </div>
                <div role="heading" aria-level={3} className="text-base font-bold text-white">
                  Aparcamiento
                </div>
              </div>
              <div className="text-sm text-slate-100 leading-relaxed font-normal">
                Disponéis de <strong>zonas de estacionamiento señalizadas</strong> en los
                alrededores de la <strong>Cuesta del Faro</strong> y en la explanada de acceso.
                El acceso a pie desde los parkings principales es cómodo y con vistas directas a la costa.
              </div>
            </div>

            {/* Hotels */}
            <div className="bg-[#08355a]/85 backdrop-blur-md rounded-3xl p-5 border border-cyan-400/35 shadow-lg hover:border-orange-400/50 transition-all flex-1">
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  <Hotel className="w-5 h-5" aria-hidden="true" />
                </div>
                <div role="heading" aria-level={3} className="text-base font-bold text-white">
                  Alojamiento Cercano
                </div>
              </div>
              <div className="text-sm text-slate-100 leading-relaxed font-normal">
                Hoteles y apartamentos vacacionales en el <strong>paseo marítimo del Puerto de Mazarrón</strong> a
                solo <strong>5-10 minutos</strong> del faro, ideales para descansar después de la fiesta sin necesidad de largos desplazamientos.
              </div>
            </div>
          </div>
        </div>

        {/* Essential Guest Information & Recommendations Box */}
        <div className="bg-[#07243e]/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border-2 border-orange-400/50 shadow-xl space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-orange-300 font-bold text-sm uppercase tracking-wider">
              <Compass className="w-4 h-4 text-orange-400" aria-hidden="true" />
              <span>Recomendaciones Importantes para los Invitados</span>
            </div>
            <span className="text-xs text-cyan-200 font-medium">Boda en el Faro de Mazarrón</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-2xl bg-[#041a2f] border border-cyan-500/30 space-y-1">
              <div className="text-orange-400 font-bold flex items-center gap-1.5">
                <span>⏱️</span>
                <span>¡Puntualidad!</span>
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong>Si no queréis perderos cosas ser puntuales</strong>. Comenzaremos a las 20:30 h con la puesta de sol.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#041a2f] border border-cyan-500/30 space-y-1">
              <div className="text-teal-300 font-bold flex items-center gap-1.5">
                <span>👔</span>
                <span>Código de vestimenta</span>
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong>No hace falta llevar chaqueta y corbata</strong>. Venid elegantes pero frescos y veraniegos.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#041a2f] border border-cyan-500/30 space-y-1">
              <div className="text-amber-300 font-bold flex items-center gap-1.5">
                <span>👟</span>
                <span>Calzado recomendado</span>
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong>Se recomienda ir con zapato cómodo</strong> para disfrutar de los miradores y bailar toda la noche.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#041a2f] border border-cyan-500/30 space-y-1">
              <div className="text-rose-300 font-bold flex items-center gap-1.5">
                <span>🍽️</span>
                <span>Alergias e intolerancias</span>
              </div>
              <p className="text-slate-200 leading-relaxed">
                Indicadnos vuestras <strong>alergias</strong> en el formulario de confirmación para preparar un menú a medida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
