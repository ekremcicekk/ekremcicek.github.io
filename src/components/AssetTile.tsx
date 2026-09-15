import type { AssetItem } from "../data/assets";

export function AssetTile({ asset }: { asset: AssetItem }) {
  return (
    <a
      href={asset.href}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-[3/2] overflow-hidden rounded-md bg-ink-2"
    >
      <img
        src={asset.img}
        alt={asset.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/0 to-ink/0 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <p className="font-display text-sm font-semibold leading-tight text-paper">{asset.title}</p>
        <p className="text-xs text-paper/70">{asset.category}</p>
      </div>
    </a>
  );
}
