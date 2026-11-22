import { MENU_ITEMS } from "@/lib/menu";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Services } from "./Services";

export function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="menu-title"
            eyebrow="Nuestro menú"
            tone="dark"
            title="Lo que preparamos para ti"
            description="Tacos, lonches y gringas hechos al momento, con el sabor tradicional de la taquería mexicana."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MENU_ITEMS.map((item, i) => (
            <Reveal
              as="li"
              key={item.name}
              delay={(i % 4) * 80}
            >
              <ProductCard item={item} />
            </Reveal>
          ))}
          <Reveal as="li" delay={240}>
            <div className="flex h-full min-h-56 flex-col justify-center rounded-3xl border-2 border-dashed border-gold/50 p-6 text-center">
              <p className="font-display text-xl font-extrabold text-gold">¡Y mucho más!</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Pregunta por nuestras otras opciones de comida mexicana tradicional.
              </p>
            </div>
          </Reveal>
        </ul>

        <Reveal className="mt-16">
          <Services />
        </Reveal>
      </div>
    </section>
  );
}
