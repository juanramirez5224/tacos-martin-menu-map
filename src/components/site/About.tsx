import { Flame, Leaf, ShoppingBag, Users } from "lucide-react";

import trompoImage from "@/assets/about-trompo.webp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const HIGHLIGHTS = [
  {
    icon: Flame,
    title: "Sabor tradicional",
    text: "Recetas y sazón de la auténtica taquería mexicana.",
  },
  {
    icon: Leaf,
    title: "Calidad y frescura",
    text: "Platillos preparados al momento, con ingredientes frescos.",
  },
  {
    icon: Users,
    title: "Ambiente familiar",
    text: "Un lugar casual para cenar en familia o con amigos.",
  },
  {
    icon: ShoppingBag,
    title: "Aquí o para llevar",
    text: "Disfruta en el local o llévate tus favoritos a casa.",
  },
] as const;

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-4xl shadow-card-hover">
            <img
              src={trompoImage}
              alt="Taquero cortando carne al pastor directamente del trompo"
              width={900}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-gold px-5 py-4 font-display text-gold-foreground shadow-card sm:block"
          >
            <p className="text-sm font-semibold">Del trompo</p>
            <p className="text-2xl font-extrabold leading-none">a tu mesa</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              id="nosotros-title"
              eyebrow="Nosotros"
              align="left"
              title={
                <>
                  Tacos con el sabor <span className="text-primary">de siempre</span>
                </>
              }
            />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              En Tacos martin nos dedicamos a ofrecer el auténtico sabor de los tacos y la comida
              mexicana. Somos una taquería de ambiente casual y familiar, ideal para disfrutar una
              buena cena, compartir con amigos o llevar tus platillos favoritos a casa.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 80}>
                <div className="flex h-full gap-4 rounded-2xl border bg-card p-5 shadow-card">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
