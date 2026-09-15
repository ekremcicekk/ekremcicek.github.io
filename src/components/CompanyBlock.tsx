import type { Company } from "../data/types";
import { GameCard } from "./GameCard";

export function CompanyBlock({ company }: { company: Company }) {
  return (
    <section id={company.slug} className="scroll-mt-24 border-t border-line/70 py-14 first:border-t-0 first:pt-0">
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          loading="lazy"
          className="h-14 w-14 rounded-xl border border-line/70 object-cover"
        />
        <div>
          <h2 className="font-display text-2xl font-semibold text-paper">{company.name}</h2>
          <p className="text-sm text-muted">
            {company.games.length} shipped {company.games.length === 1 ? "title" : "titles"}
            {company.devUrl && (
              <>
                {" · "}
                <a
                  href={company.devUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-2 underline decoration-line underline-offset-4 hover:text-accent"
                >
                  {company.devUrlLabel ?? "Developer page"}
                </a>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {company.games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}
