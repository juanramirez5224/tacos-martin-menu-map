import bistec from "@/assets/menu-bistec.webp";
import carnaza from "@/assets/menu-carnaza.webp";
import chorizo from "@/assets/menu-chorizo.webp";
import gringas from "@/assets/menu-gringas.webp";
import lengua from "@/assets/menu-lengua.webp";
import lonches from "@/assets/menu-lonches.webp";
import pastor from "@/assets/menu-pastor.webp";

export type MenuItem = {
  name: string;
  description: string;
  image: string;
  alt: string;
  tag?: string;
};

// Prices are intentionally omitted: none were provided by the business.
export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Tacos al pastor",
    description:
      "Carne de cerdo marinada al estilo tradicional, dorada en el trompo, con ese delicioso sabor asado que nos caracteriza.",
    image: pastor,
    alt: "Tacos al pastor con piña, cebolla y cilantro sobre tortillas de maíz",
    tag: "El favorito",
  },
  {
    name: "Tacos de chorizo",
    description:
      "Chorizo mexicano bien sazonado y doradito, lleno de sabor en cada mordida.",
    image: chorizo,
    alt: "Tacos de chorizo con cebolla, cilantro y salsa verde",
  },
  {
    name: "Tacos de carnaza",
    description:
      "Una opción tradicional de res, suave y jugosa, perfecta con tu salsa favorita.",
    image: carnaza,
    alt: "Tacos de carnaza de res con cebolla, cilantro y limón",
  },
  {
    name: "Tacos de bistec",
    description:
      "Bistec de res a la plancha con el clásico sabor de la taquería mexicana.",
    image: bistec,
    alt: "Tacos de bistec asado con cebolla asada, cilantro y salsa verde",
  },
  {
    name: "Tacos de lengua",
    description:
      "Lengua de res tradicional, suavecita y llena de sabor, como debe ser.",
    image: lengua,
    alt: "Tacos de lengua de res con salsa verde, cebolla y cilantro",
  },
  {
    name: "Lonches",
    description:
      "Nuestro lonche estilo mexicano en pan crujiente, ideal para una comida completa y satisfactoria.",
    image: lonches,
    alt: "Lonche en pan bolillo relleno de carne, aguacate, jitomate y jalapeños",
  },
  {
    name: "Gringas",
    description:
      "Tortilla de harina rellena de carne y queso derretido, dorada a la plancha.",
    image: gringas,
    alt: "Gringas de tortilla de harina con carne al pastor y queso derretido",
    tag: "Con queso",
  },
];
