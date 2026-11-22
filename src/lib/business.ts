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

// Exact location provided by the owner: the "Tacos Martín" place page on Google Maps.
export const MAPS_PLACE_URL = "https://maps.app.goo.gl/RewUSQSspEu9RWU96";

// Pin of the place page above, so the embedded map centers on the business itself.
export const BUSINESS_COORDINATES = { lat: 20.6362047, lng: -103.468758 } as const;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${BUSINESS_COORDINATES.lat},${BUSINESS_COORDINATES.lng}&z=17&output=embed`;

export const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "menu", label: "Menú" },
  { id: "contacto", label: "Contacto" },
  { id: "ubicacion", label: "Ubicación" },
] as const;

export type SectionId = (typeof NAV_LINKS)[number]["id"];
