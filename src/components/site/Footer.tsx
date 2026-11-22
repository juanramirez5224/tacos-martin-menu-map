import { Clock, ImageIcon, MapPin, Phone } from "lucide-react";

import { BUSINESS, NAV_LINKS } from "@/lib/business";
import { Logo } from "./Logo";

const ACADEMIC_INFO = [
  { label: "Alumno", value: "Juan Pablo Ramirez Baltierra" },
  { label: "Materia", value: "Desarrollo de aplicaciones web en la nube y moviles" },
  { label: "Profesor", value: "ZEUS EMANUEL GUTIERREZ COBIAN" },
  { label: "Calendario", value: "2026B" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="papel-divider" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              Taquería mexicana de ambiente casual y familiar en Zapopan. Tacos al pastor, chorizo,
              carnaza, bistec, lengua, lonches y gringas para cenar aquí o llevar.
            </p>
          </div>

          <nav aria-label="Enlaces rápidos">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Navegación</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="inline-flex min-h-9 items-center text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Visítanos</h2>
            <ul className="mt-4 space-y-4 text-sm text-ink-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{BUSINESS.addressFull}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className="transition-colors hover:text-ink-foreground">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <section
          aria-labelledby="academic-title"
          className="mt-14 rounded-3xl border border-ink-border bg-ink-soft p-6 sm:p-8"
        >
          <h2
            id="academic-title"
            className="text-center text-sm font-bold uppercase tracking-widest text-gold sm:text-left"
          >
            Información académica
          </h2>
          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div
              role="img"
              aria-label="Espacio reservado para el logo de CUCEI / Universidad de Guadalajara"
              className="flex size-32 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink-border bg-ink text-ink-muted"
            >
              <ImageIcon className="size-7" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wide">CUCEI Logo</span>
            </div>
            <dl className="grid w-full gap-x-8 gap-y-4 sm:grid-cols-2">
              {ACADEMIC_INFO.map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <dt className="text-xs font-bold uppercase tracking-wide text-ink-muted">
                    {item.label}:
                  </dt>
                  <dd className="mt-1 break-words font-semibold text-ink-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="mt-10 border-t border-ink-border pt-6 text-center text-sm text-ink-muted">
          © {year} Tacos martin. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
