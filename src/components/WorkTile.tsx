import type { Game } from "../data/types";
import { asset } from "../lib/asset";

export function WorkTile({ game, companyName }: { game: Game; companyName?: string }) {
  const href = game.links[0]?.url;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-square overflow-hidden bg-ink-2"
    >
      {game.icon ? (
        <img
          src={asset(game.icon)}
          alt={game.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-display text-3xl text-muted-2">
          {game.title.slice(0, 1)}
        </div>
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/0 to-ink/0 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <p className="font-display text-sm font-semibold leading-tight text-paper">{game.title}</p>
        {companyName && <p className="text-xs text-paper/70">{companyName}</p>}
      </div>
    </a>
  );
}
