import type { Game } from "../data/types";
import { asset } from "../lib/asset";

interface GameCardProps {
  game: Game;
  companyName?: string;
}

export function GameCard({ game, companyName }: GameCardProps) {
  const primaryLink = game.links[0];

  return (
    <div className="group flex flex-col gap-3 rounded-lg border border-line/70 bg-panel/40 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-panel">
      <a
        href={primaryLink?.url}
        target="_blank"
        rel="noreferrer"
        className="aspect-square w-full overflow-hidden rounded-md bg-ink-2 block"
      >
        {game.icon ? (
          <img
            src={asset(game.icon)}
            alt={`${game.title} icon`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-2xl text-muted-2">
            {game.title.slice(0, 1)}
          </div>
        )}
      </a>
      <div>
        <a
          href={primaryLink?.url}
          target="_blank"
          rel="noreferrer"
          className="font-display text-sm font-medium leading-snug text-paper hover:text-accent"
        >
          {game.title}
        </a>
        {companyName && <p className="mt-0.5 text-xs text-muted">{companyName}</p>}
      </div>
      {game.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {game.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted-2 transition-colors hover:border-accent/50 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
