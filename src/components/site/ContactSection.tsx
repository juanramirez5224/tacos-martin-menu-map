import { Clock, Phone } from "lucide-react";

import { BUSINESS } from "@/lib/business";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
        <Reveal className="lg:pt-4">
          <SectionHeading
            id="contacto-title"
            eyebrow="Contáctanos"
            align="left"
            title="¿Tienes alguna pregunta?"
            description="Escríbenos sobre nuestro menú, servicio en el local, pedidos para llevar o cualquier duda. Si lo prefieres, llámanos directamente."
          />

          <div className="mt-8 space-y-4">
            <a
              href={BUSINESS.phoneHref}
              className="group flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card-hover"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Llámanos</span>
                <span className="block font-display text-xl font-extrabold group-hover:text-primary">
                  {BUSINESS.phoneDisplay}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-card">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Horario</span>
                <span className="block font-display text-xl font-extrabold">{BUSINESS.hours}</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
