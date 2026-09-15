import type { Game } from "../data/types";
import { asset } from "../lib/asset";
import { PlatformIcon } from "./icons";

export function FeaturedGameCard({ game, companyName }: { game: Game; companyName?: string }) {
  const href = game.links[0]?.url;
  const uniquePlatforms = Array.from(new Set(game.links.map((l) => l.label)));

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-line/70 bg-panel/40 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
    >
      <div className="aspect-square w-full overflow-hidden bg-ink-2">
        {game.icon ? (
          <img
            src={asset(game.icon)}
            alt={game.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-2xl text-muted-2">
            {game.title.slice(0, 1)}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold text-paper">{game.title}</p>
          {companyName && <p className="truncate text-xs text-muted">{companyName}</p>}
        </div>
        {uniquePlatforms.length > 0 && (
          <div className="flex shrink-0 items-center gap-1.5 text-muted">
            {uniquePlatforms.map((label) => (
              <PlatformIcon key={label} label={label} className="h-4 w-4" />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
