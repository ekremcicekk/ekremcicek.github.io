import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

interface CategoryBandProps {
  index: string;
  eyebrow: string;
  stat: string;
  ctaLabel: string;
  to: string;
  images: string[];
}

export function CategoryBand({ index, eyebrow, stat, ctaLabel, to, images }: CategoryBandProps) {
  return (
    <Link
      to={to}
      className="group relative block h-[280px] overflow-hidden rounded-2xl border border-line sm:h-[320px] md:h-[360px]"
    >
      <div className="absolute inset-0 grid grid-cols-4 gap-0.5 sm:grid-cols-6 md:grid-cols-8">
        {images.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden bg-ink-2">
            <img
              src={asset(src)}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
      <div className="relative flex h-full flex-col justify-center gap-3 px-6 md:px-12">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/60 font-display text-xs font-bold text-accent">
            {index}
          </span>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Category
          </span>
        </div>
        <h2 className="font-display text-2xl font-extrabold tracking-tighter text-paper sm:text-3xl md:text-4xl">
          {eyebrow}
        </h2>
        <p className="text-sm text-muted md:text-base">{stat}</p>
        <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-paper px-5 py-2.5 font-display text-sm font-semibold text-ink transition-colors group-hover:bg-accent">
          {ctaLabel} <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
