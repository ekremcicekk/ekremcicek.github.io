import { useMemo, useState } from "react";
import { Seo } from "../components/Seo";
import { WorkTile } from "../components/WorkTile";
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

      <section className="container-page py-6 md:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-display text-2xl font-bold tracking-tight text-paper md:text-3xl">
            Work
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
