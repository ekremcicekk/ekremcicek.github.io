import { useMemo, useState } from "react";
import { Seo } from "../components/Seo";
import { WorkTile } from "../components/WorkTile";
import { companies, allGames } from "../data/companies";
import { asset } from "../lib/asset";

export default function Games() {
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");

  const activeCompany = companies.find((c) => c.slug === active);

  const filtered = useMemo(() => {
    const byCompany = active === "all" ? allGames : allGames.filter((game) => game.companySlug === active);
    const q = query.trim().toLowerCase();
    if (!q) return byCompany;
    return byCompany.filter((game) => game.title.toLowerCase().includes(q));
  }, [active, query]);

  return (
    <>
      <Seo
        title="Games"
        description="Mobile games shipped by Ekrem Cicek across Dodo Games, Moondark, Basix Games and Duuby."
        path="/games"
      />

      <section className="container-page py-6 md:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-display text-2xl font-extrabold tracking-tighter text-paper md:text-3xl">
            Games
          </h1>

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles…"
            aria-label="Search shipped titles"
            className="w-full rounded-md border border-line bg-panel/40 px-4 py-2 text-sm text-paper placeholder:text-muted-2 outline-none transition-colors focus:border-accent/50 sm:w-56"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <FilterButton label={`All (${allGames.length})`} isActive={active === "all"} onClick={() => setActive("all")} />
          {companies.map((company) => (
            <FilterButton
              key={company.slug}
              label={`${company.name} (${company.games.length})`}
              isActive={active === company.slug}
              onClick={() => setActive(company.slug)}
            />
          ))}
        </div>

        {activeCompany && (
          <div className="mt-6 flex items-center gap-3">
            <img
              src={asset(activeCompany.logo)}
              alt={`${activeCompany.name} logo`}
              className="h-10 w-10 rounded-md border border-line/70 object-cover"
            />
            <div>
              <p className="font-display text-sm font-semibold text-paper">{activeCompany.name}</p>
              {activeCompany.devUrl && (
                <a
                  href={activeCompany.devUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-muted underline decoration-line underline-offset-4 hover:text-accent"
                >
                  {activeCompany.devUrlLabel ?? "Developer page"}
                </a>
              )}
            </div>
          </div>
        )}
      </section>

      <section className="container-page pb-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:gap-3 lg:grid-cols-6">
            {filtered.map((game) => (
              <WorkTile key={`${game.companySlug}-${game.slug}`} game={game} companyName={game.company} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">No titles match "{query}".</p>
        )}
      </section>
    </>
  );
}

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={[
        "rounded-md border px-3 py-1.5 font-display text-sm transition-colors",
        isActive
          ? "border-accent bg-accent-soft text-accent"
          : "border-line text-muted hover:border-accent/40 hover:text-paper",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
