import { CreditCard, ShoppingBag, UtensilsCrossed } from "lucide-react";

const SERVICES = [
  {
    icon: UtensilsCrossed,
    title: "Servicio en el local",
    text: "Siéntate y disfruta tu cena en un ambiente casual y familiar.",
  },
  {
    icon: ShoppingBag,
    title: "Pedidos para llevar",
    text: "Llévate tus tacos favoritos para disfrutarlos en casa.",
  },
  {
    icon: CreditCard,
    title: "Pago con tarjeta",
    text: "Aceptamos tarjetas de crédito y débito.",
  },
] as const;

export function Services() {
  return (
    <div className="rounded-4xl border border-ink-border bg-ink-soft p-6 sm:p-8">
      <h3 className="text-center font-display text-xl font-bold text-ink-foreground sm:text-2xl">
        Nuestros servicios
      </h3>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-start gap-4 rounded-2xl bg-ink p-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold text-ink-foreground">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
