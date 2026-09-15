import { useMemo, useState } from "react";
import { Seo } from "../components/Seo";
import { GameCard } from "../components/GameCard";
import { companies, allGames } from "../data/companies";

export default function Work() {
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const byCompany = active === "all" ? allGames : allGames.filter((game) => game.companySlug === active);
    const q = query.trim().toLowerCase();
    if (!q) return byCompany;
    return byCompany.filter((game) => game.title.toLowerCase().includes(q));
  }, [active, query]);

  return (
    <>
      <Seo
        title="Work"
        description="Mobile games shipped by Ekrem Cicek across Dodo Games, Moondark, Basix Games and Duuby."
        path="/work"
      />

      <section className="container-page py-16 md:py-20">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-accent">Work</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
          Shipped titles
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted">
          {allGames.length}+ mobile games released across four studios. Every card links directly
          to its live store listing.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
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

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles…"
            aria-label="Search shipped titles"
            className="w-full rounded-full border border-line bg-panel/40 px-4 py-2 text-sm text-paper placeholder:text-muted-2 outline-none transition-colors focus:border-accent/50 sm:w-56"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filtered.map((game) => (
              <GameCard key={`${game.companySlug}-${game.slug}`} game={game} companyName={game.company} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-sm text-muted">No titles match "{query}".</p>
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
        "rounded-full border px-4 py-2 font-display text-sm transition-colors",
        isActive
          ? "border-accent bg-accent-soft text-accent"
          : "border-line text-muted hover:border-accent/40 hover:text-paper",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
