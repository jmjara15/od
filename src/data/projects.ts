import type { ImageMetadata } from 'astro';

// Cada proyecto del portafolio. Para agregar uno nuevo:
// 1. Crear la carpeta src/assets/projects/<slug>/ con las imágenes 01.jpg, 02.jpg...
// 2. Agregar aquí su ficha. La imagen 01 es la principal.

export type Typology = 'residencial' | 'comercial' | 'hospitalidad' | 'interiores' | 'industrial' | 'urbano';
export type Country = 'mx' | 'us';
type Bi = { es: string; en: string };

export interface Project {
  slug: string;
  name: Bi;
  country: Country;
  typology: Typology;
  year: number;
  scope: Bi;
  summary: Bi;
  body: { es: string[]; en: string[] };
  featured?: boolean; // aparece en la portada
}

export const projects: Project[] = [
  {
    slug: 'garay-eventos',
    name: { es: 'Garay Eventos', en: 'Garay Eventos' },
    country: 'mx',
    typology: 'hospitalidad',
    year: 2026,
    scope: { es: 'Arquitectura, interiores y paisaje', en: 'Architecture, interiors and landscape' },
    summary: {
      es: 'Un salón de eventos organizado alrededor de un patio jardín.',
      en: 'An event venue organized around a garden courtyard.',
    },
    body: {
      es: [
        'El proyecto reúne dos lotes en un solo recinto y coloca el jardín al centro. Los salones, las terrazas y los balcones miran hacia ese patio, de modo que cada celebración ocurre entre el interior y el aire libre.',
        'Ladrillo aparente, piedra y aplanados claros dan al conjunto un carácter cálido y regional. La pérgola y la iluminación de acento preparan el espacio para la tarde y la noche, que es cuando el lugar cobra vida.',
      ],
      en: [
        'The project joins two lots into a single venue and places the garden at its center. Halls, terraces and balconies all look onto that courtyard, so every celebration unfolds between indoors and open air.',
        'Exposed brick, stone and light plaster give the complex a warm, regional character. The pergola and accent lighting prepare the space for the evening, when the place truly comes alive.',
      ],
    },
    featured: true,
  },
  {
    slug: 'la-coruna',
    name: { es: 'La Coruña', en: 'La Coruña' },
    country: 'mx',
    typology: 'residencial',
    year: 2026,
    scope: { es: 'Arquitectura y diseño de exteriores', en: 'Architecture and outdoor design' },
    summary: {
      es: 'Terraza y cocina exterior pensadas para reunir a la familia.',
      en: 'A terrace and outdoor kitchen designed to bring the family together.',
    },
    body: {
      es: [
        'Un pabellón abierto ocupa el fondo del jardín y lo convierte en el lugar de reunión de la casa. Bajo una cubierta de madera se resuelven la cocina, la barra y el área de estar en un solo gesto.',
        'La piedra de los muros y la iluminación cálida enmarcan el espacio al atardecer. Las palmas existentes se conservaron y forman parte de la composición.',
      ],
      en: [
        'An open pavilion sits at the back of the garden and turns it into the gathering place of the house. Under a timber roof, the kitchen, the bar and the lounge are resolved in a single gesture.',
        'Stone walls and warm lighting frame the space at dusk. The existing palms were kept and became part of the composition.',
      ],
    },
    featured: true,
  },
  {
    slug: 'majestic-venue',
    name: { es: 'Majestic Venue', en: 'Majestic Venue' },
    country: 'us',
    typology: 'hospitalidad',
    year: 2024,
    scope: { es: 'Arquitectura y diseño de fachada', en: 'Architecture and facade design' },
    summary: {
      es: 'Un salón de eventos con una llegada que se siente como ocasión.',
      en: 'An event venue with an arrival that feels like an occasion.',
    },
    body: {
      es: [
        'La fachada se concibe como un gran marco de piedra clara. Una marquesina en voladizo y una secuencia de columnas iluminadas señalan el acceso y acompañan al invitado desde el estacionamiento.',
        'El frente acristalado deja ver el vestíbulo y anticipa lo que sucede adentro. De noche, la luz rasante dibuja los planos del edificio y lo convierte en su propio anuncio.',
      ],
      en: [
        'The facade is conceived as a large frame of light stone. A cantilevered canopy and a sequence of illuminated columns mark the entrance and guide guests in from the parking court.',
        'The glazed front reveals the lobby and hints at what happens inside. At night, grazing light draws the planes of the building and turns it into its own sign.',
      ],
    },
    featured: true,
  },
  {
    slug: 'residencia-o',
    name: { es: 'Residencia O', en: 'O Residence' },
    country: 'us',
    typology: 'residencial',
    year: 2025,
    scope: { es: 'Arquitectura', en: 'Architecture' },
    summary: {
      es: 'Una casa familiar de ladrillo claro abierta hacia su jardín.',
      en: 'A family home in light brick that opens onto its garden.',
    },
    body: {
      es: [
        'La casa se organiza en dos alas que abrazan el jardín posterior. Al frente, los volúmenes a dos aguas dan una imagen serena y doméstica; atrás, una terraza cubierta extiende la vida diaria hacia el exterior.',
        'El ladrillo claro, las cubiertas oscuras y la cancelería negra forman una paleta sobria que envejece bien.',
      ],
      en: [
        'The house is arranged in two wings that embrace the rear garden. At the front, gabled volumes give a calm, domestic image; at the back, a covered terrace extends daily life outdoors.',
        'Light brick, dark roofs and black window frames form a restrained palette that ages well.',
      ],
    },
    featured: true,
  },
  {
    slug: '225-e-cano-st',
    name: { es: '225 E Cano St', en: '225 E Cano St' },
    country: 'us',
    typology: 'comercial',
    year: 2026,
    scope: { es: 'Arquitectura e interiores', en: 'Architecture and interiors' },
    summary: {
      es: 'Una nave existente convertida en mercado gastronómico.',
      en: 'An existing warehouse turned into a food hall.',
    },
    body: {
      es: [
        'El proyecto conserva la estructura metálica de la nave y la deja a la vista. Debajo se ordenan los locales de comida, una barra central y distintas zonas para sentarse.',
        'Madera, verde profundo y acentos terracota dan calidez a un espacio de gran altura. La barra funciona como corazón del lugar y organiza la circulación a su alrededor.',
      ],
      en: [
        'The project keeps the steel structure of the warehouse and leaves it exposed. Beneath it sit the food stalls, a central bar and a variety of seating areas.',
        'Wood, deep green and terracotta accents bring warmth to a tall space. The bar works as the heart of the hall and organizes circulation around it.',
      ],
    },
    featured: true,
  },
  {
    slug: 'casa-g',
    name: { es: 'Casa G', en: 'G House' },
    country: 'us',
    typology: 'residencial',
    year: 2025,
    scope: { es: 'Arquitectura', en: 'Architecture' },
    summary: {
      es: 'Una residencia blanca de cubiertas inclinadas y líneas limpias.',
      en: 'A white residence with pitched roofs and clean lines.',
    },
    body: {
      es: [
        'Una serie de volúmenes blancos con cubiertas inclinadas compone la casa. Las lucarnas llevan luz natural al interior y dan ritmo a la fachada.',
        'Hacia el jardín, las terrazas cubiertas en dos niveles prolongan las áreas sociales y las recámaras.',
      ],
      en: [
        'A series of white volumes with pitched roofs makes up the house. Dormers bring daylight inside and give rhythm to the facade.',
        'Toward the garden, covered terraces on two levels extend the living areas and the bedrooms.',
      ],
    },
    featured: true,
  },
  {
    slug: 'casa-p',
    name: { es: 'Casa P', en: 'P House' },
    country: 'us',
    typology: 'interiores',
    year: 2024,
    scope: { es: 'Interiores, mobiliario y gabinetes', en: 'Interiors, furniture and cabinetry' },
    summary: {
      es: 'Cocina y comedor resueltos como una sola pieza de carpintería.',
      en: 'Kitchen and dining resolved as a single piece of joinery.',
    },
    body: {
      es: [
        'El área social se abre en un solo espacio de doble altura. Los gabinetes de madera clara recorren los muros y esconden el equipamiento para que la cocina se lea limpia.',
        'Una isla de piedra y una repisa metálica separan la cocina del comedor sin cerrarlos. Todo el mobiliario fijo se diseñó a la medida.',
      ],
      en: [
        'The social area opens into a single double-height space. Light wood cabinetry runs along the walls and conceals the appliances so the kitchen reads clean.',
        'A stone island and a metal shelf separate the kitchen from the dining area without closing them off. All built-in furniture was custom designed.',
      ],
    },
  },
  {
    slug: 'casa-tk',
    name: { es: 'Casa TK', en: 'TK House' },
    country: 'us',
    typology: 'interiores',
    year: 2024,
    scope: { es: 'Interiores, mobiliario y gabinetes', en: 'Interiors, furniture and cabinetry' },
    summary: {
      es: 'Interiores cálidos en nogal para una casa familiar.',
      en: 'Warm walnut interiors for a family home.',
    },
    body: {
      es: [
        'La cocina se envuelve en madera de tono cálido de piso a techo. La isla, la campana y las ventanas en arco dan carácter al espacio central de la casa.',
        'La recámara de los niños usa la misma paleta: lambrín oscuro, muebles a la medida y luz suave.',
      ],
      en: [
        'The kitchen is wrapped in warm-toned wood from floor to ceiling. The island, the hood and the arched windows give character to the central space of the house.',
        'The children’s bedroom uses the same palette: dark wainscoting, custom furniture and soft light.',
      ],
    },
  },
  {
    slug: 'terraza-s',
    name: { es: 'Terraza S', en: 'S Terrace' },
    country: 'mx',
    typology: 'residencial',
    year: 2024,
    scope: { es: 'Arquitectura e interiores', en: 'Architecture and interiors' },
    summary: {
      es: 'Un área social con bar y terraza para recibir de noche.',
      en: 'A social area with a bar and terrace for evening gatherings.',
    },
    body: {
      es: [
        'El proyecto suma a la casa un espacio para recibir: un bar interior, una terraza cubierta con comedor y un patio que los conecta.',
        'La paleta es oscura y contenida. Piedra, madera y metal negro contrastan con los muros blancos y con una celosía que filtra la luz.',
      ],
      en: [
        'The project adds a space for entertaining to the house: an indoor bar, a covered terrace with dining, and a patio that connects them.',
        'The palette is dark and restrained. Stone, wood and black metal contrast with white walls and a screen wall that filters the light.',
      ],
    },
  },
  {
    slug: 'casa-ole',
    name: { es: 'Casa Olé', en: 'Casa Olé' },
    country: 'mx',
    typology: 'interiores',
    year: 2022,
    scope: { es: 'Interiores y mobiliario', en: 'Interiors and furniture' },
    summary: {
      es: 'Interiores claros que dejan el protagonismo a la vista al mar.',
      en: 'Light interiors that let the sea view take the lead.',
    },
    body: {
      es: [
        'Cocina, comedor y sala comparten un solo espacio abierto hacia el horizonte. Madera clara, piedra blanca y textiles naturales mantienen el interior tranquilo.',
        'El plafón de ladrillo con luz indirecta da calidez y recuerda el oficio local.',
      ],
      en: [
        'Kitchen, dining and living share a single space that opens to the horizon. Light wood, white stone and natural textiles keep the interior calm.',
        'The brick ceiling with indirect light adds warmth and recalls local craft.',
      ],
    },
  },
  {
    slug: 'bodega-fdc',
    name: { es: 'Bodega FDC', en: 'FDC Warehouse' },
    country: 'mx',
    typology: 'industrial',
    year: 2023,
    scope: { es: 'Arquitectura', en: 'Architecture' },
    summary: {
      es: 'Una nave logística de imagen sobria y operación clara.',
      en: 'A logistics warehouse with a sober image and clear operation.',
    },
    body: {
      es: [
        'La nave se resuelve con un volumen blanco y continuo. Los andenes de carga, las rampas y el patio de maniobras se ordenan para que la operación sea directa.',
        'Parteluces oscuros marcan los accesos y dan escala a una fachada de gran longitud. La caseta de control repite el mismo lenguaje.',
      ],
      en: [
        'The warehouse is resolved as one continuous white volume. Loading docks, ramps and the maneuvering yard are laid out for straightforward operation.',
        'Dark louvers mark the entrances and give scale to a very long facade. The gatehouse repeats the same language.',
      ],
    },
  },
  {
    slug: 'santa-clara-3',
    name: { es: 'Santa Clara 3', en: 'Santa Clara 3' },
    country: 'mx',
    typology: 'urbano',
    year: 2025,
    scope: { es: 'Arquitectura y paisaje', en: 'Architecture and landscape' },
    summary: {
      es: 'Un andador de tierra y vegetación del desierto.',
      en: 'A walkway of earth tones and desert planting.',
    },
    body: {
      es: [
        'El proyecto ordena el espacio exterior con un andador que conecta los edificios existentes. Muros de tono tierra, jardineras con agaves y una gran cubierta ligera acompañan el recorrido.',
        'La intención es que el camino sea parte de la experiencia y no solo un trayecto.',
      ],
      en: [
        'The project organizes the outdoor space with a walkway that connects the existing buildings. Earth-toned walls, planters with agaves and a large lightweight canopy accompany the route.',
        'The intent is for the path to be part of the experience and not just a way through.',
      ],
    },
  },
];

// Imágenes: se cargan solas desde src/assets/projects/<slug>/NN.jpg
const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/projects/*/*.jpg', { eager: true });

export function projectImages(slug: string): ImageMetadata[] {
  return Object.keys(files)
    .filter((path) => path.includes(`/projects/${slug}/`))
    .sort()
    .map((path) => files[path].default);
}

export const cover = (slug: string) => projectImages(slug)[0];
export const featured = () => projects.filter((p) => p.featured);
