import { ArrowDown, Clock, MapPin, UtensilsCrossed } from "lucide-react";

import heroImage from "@/assets/Taqueria.jpg";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/business";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-ink-foreground md:items-center"
    >
      <img
        src={heroImage.url}
        alt="Fachada de Tacos martin: toldo rojo, mesas del comedor a la izquierda y barra de cocina de acero inoxidable a la derecha"
        width={408}
        height={306}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div aria-hidden="true" className="bg-hero-overlay absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/50 px-4 py-1.5 text-sm font-semibold text-gold backdrop-blur-sm">
            <UtensilsCrossed className="size-4" aria-hidden="true" />
            Taquería mexicana · Zapopan, Jalisco
          </p>

          <h1
            id="hero-title"
            className="animate-fade-up mt-6 text-6xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            Tacos <span className="text-gold">martin</span>
          </h1>

          <p
            className="animate-fade-up mt-5 font-display text-2xl font-semibold leading-snug text-ink-foreground sm:text-3xl"
            style={{ animationDelay: "160ms" }}
          >
            {BUSINESS.slogan}
          </p>

          <p
            className="animate-fade-up mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            Tacos al pastor, bistec, chorizo y más, preparados al momento con el sazón de siempre.
            Ven a cenar en un ambiente casual y familiar, o llévate tus favoritos a casa.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <Button asChild variant="hero" size="xl">
              <a href="#menu">
                Explora nuestro menú
                <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#contacto">Contáctanos</a>
            </Button>
          </div>

          <dl
            className="animate-fade-up mt-10 flex flex-col gap-3 text-sm text-ink-muted sm:flex-row sm:gap-8"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-2">
              <dt>
                <Clock className="size-4 text-gold" aria-hidden="true" />
                <span className="sr-only">Horario</span>
              </dt>
              <dd>Abierto de {BUSINESS.hours}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt>
                <MapPin className="size-4 text-gold" aria-hidden="true" />
                <span className="sr-only">Ubicación</span>
              </dt>
              <dd>Arenales Tapatíos, Zapopan</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
