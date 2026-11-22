import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Location } from "@/components/site/Location";
import { MenuSection } from "@/components/site/MenuSection";
import { Navbar } from "@/components/site/Navbar";

const TITLE = "Tacos martin | Taquería en Arenales Tapatíos, Zapopan";
const DESCRIPTION =
  "Tacos al pastor, chorizo, carnaza, bistec, lengua, lonches y gringas en Zapopan, Jalisco. Ambiente familiar, servicio en el local y para llevar. Abierto de 2:00 PM a 12:00 AM.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#nosotros"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <ContactSection />
        <Location />
      </main>
      <Footer />
    </>
  );
}
