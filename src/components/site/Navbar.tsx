import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BUSINESS, NAV_LINKS, type SectionId } from "@/lib/business";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid ? "bg-ink/95 shadow-lg backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 text-ink-foreground sm:px-6 lg:px-8"
      >
        <a href="#inicio" className="rounded-lg" aria-label="Tacos martin, ir al inicio">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-gold",
                  active === link.id ? "text-gold" : "text-ink-foreground/85",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="lg" className="h-11 w-11 rounded-full px-0 sm:w-auto sm:px-5">
            <a href={BUSINESS.phoneHref} aria-label={`Llámanos al ${BUSINESS.phoneDisplay}`}>
              <Phone />
              <span className="hidden sm:inline">Llámanos</span>
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-full border border-ink-border text-ink-foreground transition-colors hover:bg-ink-soft lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-ink-border bg-ink px-4 pb-6 pt-2 lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "flex min-h-12 items-center rounded-xl px-3 text-lg font-semibold transition-colors hover:bg-ink-soft",
                  active === link.id ? "text-gold" : "text-ink-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={BUSINESS.phoneHref}
          className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-primary-foreground"
        >
          <Phone className="size-5" />
          {BUSINESS.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
