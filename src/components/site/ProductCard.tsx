import type { MenuItem } from "@/lib/menu";

export function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card text-card-foreground shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {item.tag ? (
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-foreground shadow-card">
            {item.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <span
          aria-hidden="true"
          className="mt-auto block h-1 w-10 translate-y-3 rounded-full bg-primary transition-all duration-300 group-hover:w-16"
        />
      </div>
    </article>
  );
}
