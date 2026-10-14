import { TimelineEvent, MenuItem } from '../types/wedding';

export const WEDDING_DATE = new Date('2027-07-17T20:30:00+02:00');

export const WEDDING_INFO = {
  couple: {
    groom: 'Juan',
    bride: 'Belén',
    fullName: 'Juan & Belén',
    tagline: '¡Nos casamos!',
    dateFormatted: 'Sábado, 17 de Julio de 2027',
    time: '20:30 h',
    venue: 'Faro Puerto de Mazarrón "Farero Santiago Acarreta Vicondoa"',
    venueShort: 'Faro de Mazarrón',
    address: 'C. Cta. del Faro, 30860 Puerto de Mazarrón, Murcia, España',
    city: 'Puerto de Mazarrón, Murcia, España',
    contactEmail: 'belenchaconct@hotmail.com',
  },
  codes: {
    family: 'FAMILIA27',
    friends: 'AMIGOS27',
  },
  preWedding: {
    date: 'Viernes, 16 de julio de 2027',
    dayFormatted: 'Viernes 16 de Julio de 2027',
    time: '20:30 h',
    title: 'Cena Familiar de Bienvenida • Viernes 16 de Julio',
    subtitle: 'El inicio de nuestra boda reservado en exclusiva para la familia',
    dinnerTime: '20:30 h • Cena familiar en el Faro de Mazarrón',
    location: 'Faro de Mazarrón',
    address: 'C. Cta. del Faro, 30860 Puerto de Mazarrón, Murcia, España',
    dressCode: 'Estilo fresco y relajado (no hace falta chaqueta ni corbata, zapato cómodo)',
    description:
      'Cena familiar el viernes 16 a las 20:30 en el faro de Mazarrón. Un encuentro íntimo y especial reservado exclusivamente para la familia para reunirnos frente al mar, cenar juntos, brindar y comenzar a celebrar este gran fin de semana antes del gran día del sábado.',
    menuHighlights:
      'Degustación de tapas marineras de la bahía, aperitivos calientes y fríos, vinos de la tierra y sobremesa junto a la brisa mediterránea.',
  },
  giftsHeartfelt: {
    title: 'Un detalle que nazca del corazón',
    subtitle: 'Nada de regalos por compromiso ni presión por dinero',
    description:
      'Para nosotros, el auténtico regalo es teneros a nuestro lado riendo, brindando y bailando bajo el cielo de Mazarrón. No queremos dinero ni transferencias: si os apetece tener un detalle con nosotros, nos llenará de ilusión cualquier cosa que nazca de vosotros.',
  },
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Faro+Puerto+de+Mazarr%C3%B3n+Farero+Santiago+Acarreta+Vicondoa,+C.+Cta.+del+Faro,+30860+Puerto+de+Mazarr%C3%B3n,+Murcia,+Espa%C3%B1a&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectLink:
    'https://maps.google.com/?q=Faro+Puerto+de+Mazarr%C3%B3n+Farero+Santiago+Acarreta+Vicondoa,+C.+Cta.+del+Faro,+30860+Puerto+de+Mazarr%C3%B3n,+Murcia,+Espa%C3%B1a',
  appleMapsDirectLink:
    'https://maps.apple.com/?q=Faro+Puerto+de+Mazarr%C3%B3n+Farero+Santiago+Acarreta+Vicondoa,+C.+Cta.+del+Faro,+30860+Puerto+de+Mazarr%C3%B3n,+Murcia,+Espa%C3%B1a',
  albumLink:
    'https://photos.google.com/',
};

export const FAMILY_FRIDAY_TIMELINE_EVENT: TimelineEvent = {
  id: 't0-family',
  time: '20:30',
  dayLabel: 'Viernes 16 Julio',
  title: 'Cena Familiar en el Faro de Mazarrón',
  description:
    'Cena familiar el viernes 16 a las 20:30 en el faro de Mazarrón. Encuentro íntimo y distendido exclusivo para la familia frente al mar para brindar y cenar antes del gran día.',
  location: 'Faro de Mazarrón',
  iconName: 'utensils',
  badge: 'Exclusivo Familia',
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 't1',
    time: '20:30',
    title: 'Boda en el Faro de Mazarrón',
    description:
      'Boda el Sábado 17 a las 20:30 en el faro de Mazarrón. Llegada de invitados y ceremonia con la puesta de sol mediterránea. Si no queréis perderos cosas, ¡sed puntuales!',
    location: 'Faro de Mazarrón',
    iconName: 'heart',
    badge: '¡El Gran Sí!',
  },
  {
    id: 't2',
    time: '21:30',
    title: 'Cóctel & Aperitivos Marineros',
    description:
      'Aperitivos de la bahía, jamón ibérico, copas frías y música en directo en las terrazas del faro.',
    location: 'Terrazas del Faro de Mazarrón',
    iconName: 'glass',
    badge: 'Cóctel',
  },
  {
    id: 't3',
    time: '22:30',
    title: 'Cena y Banquete Nupcial',
    description:
      'Cena bajo las estrellas frente al mar, menú adaptado a cualquier alergia o intolerancia alimentaria, y brindis inolvidables.',
    location: 'Salón Panorámico del Faro',
    iconName: 'utensils',
    badge: 'Banquete',
  },
  {
    id: 't4',
    time: '00:30',
    title: 'Apertura de Baile y Fiesta',
    description:
      'Baile de Juan y Belén, barra libre, rincón de fotos y DJ hasta la madrugada. Recordad: ¡zapato cómodo para bailar sin parar!',
    location: 'Terraza de las Estrellas',
    iconName: 'music',
    badge: '¡A Bailar!',
  },
  {
    id: 't5',
    time: '04:00',
    title: 'Recena de Madrugada & Cierre',
    description:
      'Churritos calientes con chocolate para despedir una noche mágica frente al mar de Mazarrón.',
    location: 'Faro de Mazarrón',
    iconName: 'heart',
  },
];

export const MENU_COCKTAIL: MenuItem[] = [
  {
    category: 'Cóctel de Bienvenida',
    title: 'Gildas del Cantábrico y Mazarrón',
    description: 'Anchoa de costera, piparra suave, aceituna gordal y AOVE.',
    tags: ['Aperitivo fresco'],
  },
  {
    category: 'Cóctel de Bienvenida',
    title: 'Mini Tostas de Almadraba',
    description: 'Hueva de mújol de la bahía con mojama de atún rojo y almendra marcona frita.',
    tags: ['Sabor marinero'],
  },
  {
    category: 'Cóctel de Bienvenida',
    title: 'Croquetitas Melosas de Gamba Roja de Mazarrón',
    description: 'Bechamel fina con todo el jugo y sabor de la gamba roja fresca.',
    tags: ['Especialidad'],
  },
  {
    category: 'Cóctel de Bienvenida',
    title: 'Chupito de Salmorejo de Cerezas',
    description: 'Con crujiente de jamón ibérico y perlas de aceite virgen extra.',
    tags: ['Refrescante'],
  },
];

export const MENU_BANQUET: MenuItem[] = [
  {
    category: 'Entrante',
    title: 'Tartar de Bogavante y Aguacate con Aliño Cítrico',
    description:
      'Acompañado de brotes tiernos, vinagreta de fruta de la pasión y tostas crujientes.',
  },
  {
    category: 'Pescado',
    title: 'Lubina Salvaje a la Espalda sobre Lecho de Verduras Confitadas',
    description:
      'Con velouté de hinojo marino, patatitas baby al romero y aceite de pimentón murciano.',
  },
  {
    category: 'Sorbete Intermedio',
    title: 'Sorbete de Mandarina de la Huerta al Cava Brut',
    description: 'Un toque fresco y ligero para continuar el banquete.',
  },
  {
    category: 'Carne',
    title: 'Solomillo de Ternera con Reducción al Vino de Jumilla',
    description:
      'Gratén de patata trufada, setas silvestres salteadas y espárragos verdes a la brasa.',
  },
  {
    category: 'Postre Nupcial',
    title: 'Tarta Nupcial de Frambuesas Silvestres y Crema de Maracuyá',
    description:
      'Hojaldre fino caramelizado con crema ligera y helado artesano de turrón de Jijona.',
  },
  {
    category: 'Bodega & Brindis',
    title: 'Selección de Vinos D.O. Jumilla, Cavas & Coctelería',
    description:
      'Blanco verdejo D.O. Rueda, Tinto Crianza D.O. Jumilla, Cava Brut Nature y barra libre completa.',
  },
];
