import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BUSINESS, MAPS_EMBED_URL, MAPS_PLACE_URL } from "@/lib/business";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Location() {
  return (
    <section
      id="ubicacion"
      aria-labelledby="ubicacion-title"
      className="bg-muted py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="ubicacion-title"
            eyebrow="Ubicación"
            title="Encuéntranos"
            description="Te esperamos todos los días para cenar o recoger tu pedido."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <Reveal className="flex flex-col gap-4">
            <address className="flex flex-1 flex-col gap-4 not-italic">
              <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-card">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Dirección</p>
                  <p className="mt-1 font-semibold leading-relaxed">
                    {BUSINESS.addressLines[0]}
                    <br />
                    {BUSINESS.addressLines[1]}
                  </p>
                </div>
              </div>

              <a
                href={BUSINESS.phoneHref}
                className="group flex gap-4 rounded-2xl bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-muted-foreground">Teléfono</span>
                  <span className="mt-1 block font-display text-xl font-extrabold group-hover:text-primary">
                    {BUSINESS.phoneDisplay}
                  </span>
                </span>
              </a>

              <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-card">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gold text-gold-foreground">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Horario</p>
                  <p className="mt-1 font-display text-xl font-extrabold">{BUSINESS.hours}</p>
                </div>
              </div>
            </address>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Button asChild variant="hero" size="xl">
                <a href={MAPS_PLACE_URL} target="_blank" rel="noopener noreferrer">
                  <Navigation />
                  Cómo llegar
                  <span className="sr-only">(se abre Google Maps en una pestaña nueva)</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full border-2 border-foreground/15 bg-card font-semibold">
                <a href={BUSINESS.phoneHref}>
                  <Phone />
                  Llamar ahora
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-4xl bg-card shadow-card">
            <iframe
              title="Mapa de la ubicación exacta de Tacos Martín, Calle Cobre, Arenales Tapatíos, Zapopan"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-80 w-full border-0 sm:h-[26rem] lg:h-full lg:min-h-[28rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
