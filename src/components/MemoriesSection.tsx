import { useState, useRef } from 'react';
import { Camera, Upload, Image as ImageIcon, ExternalLink, Sparkles, X, Heart } from 'lucide-react';
import { WEDDING_INFO } from '../data/weddingData';
import { UploadedMemory } from '../types/wedding';

export function MemoriesSection() {
  const [memories, setMemories] = useState<UploadedMemory[]>([
    {
      id: 'demo-1',
      url: '',
      name: 'Atardecer en el Faro de Mazarrón',
      timestamp: 'Recuerdo',
    },
    {
      id: 'demo-2',
      url: '',
      name: 'Vistas a la Bahía del Mediterráneo',
      timestamp: 'Recuerdo',
    },
    {
      id: 'demo-3',
      url: '',
      name: 'Brindis y Celebración frente al Mar',
      timestamp: 'Recuerdo',
    },
    {
      id: 'demo-4',
      url: '',
      name: 'Noche de Estrellas en Mazarrón',
      timestamp: 'Recuerdo',
    },
  ]);

  const [selectedPhoto, setSelectedPhoto] = useState<UploadedMemory | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFilesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newMemories: UploadedMemory[] = [];
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      newMemories.push({
        id: `mem-${Date.now()}-${Math.random()}`,
        url,
        name: file.name,
        timestamp: 'Subida recién',
      });
    });

    setMemories((prev) => [...newMemories, ...prev]);
  };

  return (
    <div
      id="recuerdos"
      role="region"
      aria-label="Cámara y recuerdos compartidos de los invitados"
      className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-white w-full"
    >
      <div className="max-w-6xl w-full mx-auto space-y-6">
        {/* Header badge */}
        <div className="text-center space-y-1.5 relative">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#021f35] text-cyan-200 fluid-badge font-bold shadow-xs border border-cyan-400/40">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>Galería de Recuerdos • Momentos</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/25 text-orange-200 border border-orange-400/60 fluid-badge font-bold uppercase tracking-wider shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-orange-400 animate-pulse" aria-hidden="true" />
              <span>Fotos & Recuerdos</span>
            </div>
          </div>

          <div
            role="heading"
            aria-level={2}
            className="fluid-title-section font-serif font-bold text-white tracking-tight"
          >
            Inmortaliza Cada Momento
          </div>

          <div className="fluid-subtitle text-slate-100 font-medium max-w-md mx-auto">
            ¡Queremos ver la boda a través de tus ojos! Sube tus fotos y vídeos espontáneos.
          </div>
        </div>

        {/* Ocean Glass Container Box */}
        <div className="bg-[#0a426e]/90 backdrop-blur-md rounded-3xl p-4 sm:p-6 shadow-xl shadow-black/40 border-2 border-cyan-400/40 space-y-4">
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFilesUpload}
            className="hidden"
            id="weddingPhotoUploadInput"
            aria-label="Subir fotos y vídeos de la boda"
          />

          {/* Action buttons with vibrant orange accent */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-orange-950/40 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
            >
              <Upload className="w-4 h-4 text-slate-950" aria-hidden="true" />
              <span>Sube tus fotos aquí</span>
            </button>

            <a
              href={WEDDING_INFO.albumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#073052] hover:bg-[#093c66] border border-cyan-400/40 text-cyan-100 hover:text-white font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 hover:-translate-y-0.5"
            >
              <ImageIcon className="w-4 h-4 text-orange-400" aria-hidden="true" />
              <span>Álbum en Google Fotos</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
            </a>
          </div>

          {/* Warm reminder note */}
          <div className="bg-[#073052]/90 p-3 rounded-2xl border border-orange-400/40 text-center flex items-center justify-center gap-2 text-xs text-orange-200 font-medium">
            <Heart className="w-4 h-4 text-orange-400 fill-orange-400 shrink-0" aria-hidden="true" />
            <span>
              Todas las fotos que subáis formarán parte de nuestro álbum de recuerdos de boda.
            </span>
          </div>

          {/* Photo Gallery Grid */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between text-xs">
              <div
                role="heading"
                aria-level={3}
                className="font-bold text-white flex items-center gap-1.5 text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-spin" aria-hidden="true" style={{ animationDuration: '6s' }} />
                <span>Muro de Recuerdos ({memories.length})</span>
              </div>
              <span className="text-[11px] text-cyan-200 font-semibold">Toca para ampliar</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
              {memories.map((photo, i) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c4a75] via-[#09395e] to-[#062440] cursor-pointer shadow-sm hover:shadow-lg border-2 border-cyan-400/35 hover:border-orange-400 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center p-3 text-center"
                >
                  {photo.url ? (
                    <img
                      src={photo.url}
                      alt={photo.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out absolute inset-0"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 text-cyan-200">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-400/50 flex items-center justify-center text-orange-300 group-hover:scale-110 transition-transform">
                        <Camera className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-white line-clamp-2 px-1">
                        {photo.name}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-amber-300 font-bold bg-[#041a2e]/60 px-2 py-0.5 rounded-full border border-cyan-400/30">
                        Mazarrón 2027
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 pointer-events-none">
                    <span className="text-[11px] text-orange-200 font-bold truncate">
                      {photo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal for photo preview */}
        {selectedPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Vista previa de foto"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fade-in"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-lg w-full bg-[#0a426e] rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-400/60 p-5 space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 text-orange-400 hover:text-white transition-all hover:rotate-90 cursor-pointer"
                aria-label="Cerrar vista previa"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>

              <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-[#0c4a75] via-[#09395e] to-[#062440] flex flex-col items-center justify-center p-4 text-center border border-cyan-400/30">
                {selectedPhoto.url ? (
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-400/60 flex items-center justify-center text-orange-400">
                      <Camera className="w-8 h-8" />
                    </div>
                    <div className="text-white font-bold text-base">{selectedPhoto.name}</div>
                    <p className="text-xs text-cyan-100 max-w-xs">
                      Foto del álbum de boda en el Faro de Mazarrón frente al mar.
                    </p>
                  </div>
                )}
              </div>

              <div className="text-center pt-1">
                <span className="text-xs text-orange-300 font-bold">Juan & Belén • 17 Julio 2027</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
