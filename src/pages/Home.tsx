import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { GameCard } from "../components/GameCard";
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
];

const featured = featuredSlugs
  .map((slug) => allGames.find((game) => game.slug === slug))
  .filter((game): game is (typeof allGames)[number] => Boolean(game));

const stats = [
  { label: "Studios", value: String(companies.length) },
  { label: "Shipped titles", value: `${allGames.length}+` },
  { label: "Platforms", value: "iOS & Android" },
];

export default function Home() {
  return (
    <>
      <Seo title={site.name} path="/" />

      <section className="container-page flex min-h-[70vh] flex-col justify-center gap-8 py-20 md:py-28">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-accent">
          {site.role}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl md:text-6xl">
          Building and shaping mobile games, one shipped title at a time.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {site.name} is a {site.role.toLowerCase()} who has worked across four studios,
          contributing to dozens of mobile titles released on the App Store and Google Play.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            to="/work"
            className="rounded-full bg-paper px-6 py-3 font-display text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            View the work
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-line px-6 py-3 font-display text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
          <Link
            to="/about#cv"
            className="inline-flex items-center gap-2 self-center font-display text-sm text-muted underline decoration-line underline-offset-4 hover:text-accent"
          >
            View CV
          </Link>
        </div>
      </section>

      <section className="border-y border-line/70 bg-panel/30">
        <div className="container-page grid grid-cols-1 divide-y divide-line/70 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-0 py-4 text-left first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:pr-0"
            >
              <p className="font-display text-2xl font-semibold text-paper sm:text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Selected work
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted">
              A cross-section of shipped titles across studios — see everything on the Work page.
            </p>
          </div>
          <Link
            to="/work"
            className="font-display text-sm text-muted underline decoration-line underline-offset-4 hover:text-accent"
          >
            All work →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {featured.map((game) => (
            <GameCard key={game.slug} game={game} companyName={game.company} />
          ))}
        </div>
      </section>

      <PlatformsSection />

      <section className="border-t border-line/70">
        <div className="container-page flex flex-col items-start gap-6 py-20 md:flex-row md:items-center md:justify-between md:py-24">
          <div>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Interested in working together?
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted">
              Open to new opportunities in 3D art and game art.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-accent px-6 py-3 font-display text-sm font-medium text-ink transition-colors hover:bg-paper"
          >
            Contact me
          </Link>
        </div>
      </section>
    </>
  );
}
