import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { WorkTile } from "../components/WorkTile";
import { PlatformsSection } from "../components/PlatformsSection";
import { companies, allGames } from "../data/companies";
import { site } from "../data/site";

const featuredSlugs = [
  "stone-skipping-3d",
  "underwater-hunting",
  "ultimate-offroad-simulator",
  "car-crash-stunt-parkour",
  "portal-runner",
  "choo-charles-pixel-demolition",
  "candy-factory-asmr",
  "blade-duo",
  "heist-day",
  "direct-the-shot",
  "spiral-drill-run",
  "dozer-race",
];

const featured = featuredSlugs
  .map((slug) => allGames.find((game) => game.slug === slug))
  .filter((game): game is (typeof allGames)[number] => Boolean(game));

export default function Home() {
  return (
    <>
      <Seo title={site.name} path="/" />

      <section className="container-page flex flex-wrap items-end justify-between gap-4 py-6 md:py-8">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-paper md:text-3xl">
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
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:gap-3 lg:grid-cols-6">
          {featured.map((game) => (
            <WorkTile key={game.slug} game={game} companyName={game.company} />
          ))}
        </div>
      </section>

      <PlatformsSection />
    </>
  );
}
