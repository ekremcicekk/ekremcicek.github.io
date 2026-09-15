import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { FeaturedGameCard } from "../components/FeaturedGameCard";
import { PlatformsSection } from "../components/PlatformsSection";
import { companies, allGames } from "../data/companies";
import { site } from "../data/site";

const latestCompany = companies[0];
const latest = latestCompany.games
  .slice(0, 8)
  .map((game) => ({ ...game, company: latestCompany.name, companySlug: latestCompany.slug }));

export default function Home() {
  return (
    <>
      <Seo title={site.name} path="/" />

      <section className="container-page flex flex-wrap items-end justify-between gap-4 py-6 md:py-8">
        <div>
          <h1 className="font-display text-2xl font-extrabold tracking-tighter text-paper md:text-3xl">
            {site.name}
          </h1>
          <p className="mt-1 text-sm text-muted md:text-base">
            {site.role} — {allGames.length}+ shipped titles across {companies.length} studios
          </p>
        </div>
        <Link
          to="/work"
          className="font-display text-sm font-medium text-muted underline decoration-line underline-offset-4 hover:text-accent"
        >
          All work →
        </Link>
      </section>

      <section className="container-page pb-16">
        <h2 className="mb-4 font-display text-lg font-semibold text-paper">
          Latest work — {latestCompany.name}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {latest.map((game) => (
            <FeaturedGameCard key={game.slug} game={game} companyName={game.company} />
          ))}
        </div>
      </section>

      <PlatformsSection />
    </>
  );
}
