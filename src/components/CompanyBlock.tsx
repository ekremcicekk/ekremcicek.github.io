import type { Company } from "../data/types";
import { WorkTile } from "./WorkTile";
import { asset } from "../lib/asset";

export function CompanyBlock({ company }: { company: Company }) {
  return (
    <section id={company.slug} className="scroll-mt-20 border-t border-line/70 py-10 first:border-t-0 first:pt-0">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <img
          src={asset(company.logo)}
          alt={`${company.name} logo`}
          loading="lazy"
          className="h-10 w-10 rounded-md border border-line/70 object-cover"
        />
        <div>
          <h2 className="font-display text-lg font-semibold text-paper">{company.name}</h2>
          <p className="text-xs text-muted">
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

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:gap-3 lg:grid-cols-6">
        {company.games.map((game) => (
          <WorkTile key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}
