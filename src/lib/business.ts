// Single source of truth for Tacos martin business details (from the project brief).
// Do not add prices, promotions, social accounts or exact street numbers here.

export const BUSINESS = {
  name: "Tacos martin",
  slogan: "El auténtico sabor que se disfruta en cada taco.",
  phoneDisplay: "33 3551 2254",
  phoneHref: "tel:+523335512254",
  hours: "2:00 PM – 12:00 AM",
  addressLines: [
    "Calle Cobre, Colonia Arenales Tapatíos",
    "C.P. 45065 / 45066, Zapopan, Jalisco, México",
  ],
  addressFull:
    "Calle Cobre, Colonia Arenales Tapatíos, C.P. 45065 / 45066, Zapopan, Jalisco, México",
} as const;

// No street number or coordinates were provided, so Maps receives the address as a search query.
const MAPS_QUERY = "Calle Cobre, Arenales Tapatíos, Zapopan, Jalisco, México";

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=15&output=embed`;

export const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "menu", label: "Menú" },
  { id: "contacto", label: "Contacto" },
  { id: "ubicacion", label: "Ubicación" },
] as const;

export type SectionId = (typeof NAV_LINKS)[number]["id"];
