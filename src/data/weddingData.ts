import { TimelineEvent, MenuItem } from '../types/wedding';

export const WEDDING_DATE = new Date('2027-07-17T12:30:00+02:00');

export const WEDDING_INFO = {
  couple: {
    groom: 'Juan',
    bride: 'Belén',
    fullName: 'Juan & Belén',
    tagline: '¡Nos casamos!',
    dateFormatted: 'Sábado, 17 de Julio de 2027',
    time: '12:30 h',
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
    time: '21:00 h',
    title: 'Cena Familiar de Bienvenida • Viernes 16 de Julio',
    subtitle: 'El inicio de nuestra boda reservado en exclusiva para la familia',
    dinnerTime: '21:00 h • Cena de tapas marineras y brindis',
    location: 'Terrazas del Faro de Puerto de Mazarrón',
    address: 'C. Cta. del Faro, 30860 Puerto de Mazarrón, Murcia, España',
    dressCode: 'Casual Chic Veraniego (tonos claros y frescos)',
    description:
      'Un encuentro íntimo y especial reservado exclusivamente para nuestra familia más cercana. Nos reuniremos el viernes por la noche frente al mar para cenar juntos, brindar y comenzar a celebrar este gran fin de semana en familia antes del gran día del sábado.',
    menuHighlights:
      'Degustación de tapas marineras de la bahía, embutidos ibéricos, aperitivos calientes, vinos de la tierra y sobremesa junto a la brisa mediterránea.',
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
  time: '21:00',
  dayLabel: 'Viernes 16 Julio',
  title: 'Cena Familiar de Bienvenida',
  description:
    'Encuentro íntimo y distendido exclusivo para la familia: cena de tapas marineras y brindis con vistas al mar antes del gran día.',
  location: 'Terrazas del Faro de Mazarrón',
  iconName: 'utensils',
  badge: 'Exclusivo Familia',
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 't1',
    time: '12:30',
    title: 'Llegada y Bienvenida',
    description:
      'Recepción en el mirador con limonada fresca, copas de bienvenida y música acústica frente al Mediterráneo.',
    location: 'Mirador del Faro',
    iconName: 'glass',
    badge: 'Punto de Encuentro',
  },
  {
    id: 't2',
    time: '13:00',
    title: 'Ceremonia Civil Frente al Mar',
    description:
      'Nuestros votos de amor y el gran "sí, quiero" arropados por vosotros con la brisa marina.',
    location: 'Plaza del Faro de Mazarrón',
    iconName: 'heart',
    badge: '¡El Gran Sí!',
  },
  {
    id: 't3',
    time: '14:15',
    title: 'Cóctel Marinero al Sol',
    description:
      'Aperitivos de la zona, cortador de jamón ibérico, cerveza fría y música en directo en las terrazas.',
    location: 'Terrazas Marinas del Faro',
    iconName: 'glass',
  },
  {
    id: 't4',
    time: '16:00',
    title: 'Banquete Nupcial',
    description:
      'Comida sentados con los sabores más ricos de nuestra tierra, brindis y momentos muy emotivos.',
    location: 'Salón Panorámico Mirador',
    iconName: 'utensils',
  },
  {
    id: 't5',
    time: '19:30',
    title: 'Apertura de Baile y Fiesta',
    description:
      'Primer baile de Juan y Belén, cócteles, barra libre, rincón de fotos y DJ hasta bien entrada la noche.',
    location: 'Terraza de las Estrellas',
    iconName: 'music',
    badge: '¡A Bailar!',
  },
  {
    id: 't6',
    time: '02:30',
    title: 'Recena de Madrugada & Cierre',
    description:
      'Churritos calientes con chocolate y bocaditos recién hechos para despedir una noche inolvidable.',
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
