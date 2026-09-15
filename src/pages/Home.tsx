import { Seo } from "../components/Seo";
import { CategoryBand } from "../components/CategoryBand";
import { companies, allGames } from "../data/companies";
import { unityAssets } from "../data/assets";
import { site } from "../data/site";

const gameImages = allGames
  .map((g) => g.icon)
  .filter((icon): icon is string => Boolean(icon))
  .slice(0, 24);

const assetImages = unityAssets.map((a) => a.img).slice(0, 24);

const threeDImages = unityAssets
  .filter((a) => a.category === "3D")
  .map((a) => a.img)
  .slice(0, 24);

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
            {site.role} — {allGames.length}+ shipped titles, {unityAssets.length} Unity Asset Store
            listings, {companies.length} studios
          </p>
        </div>
      </section>

      <div className="container-page flex flex-col gap-4 pb-16 md:gap-5">
        <CategoryBand
          eyebrow="Mobile Games"
          stat={`${allGames.length}+ mobile games across ${companies.length} studios`}
          ctaLabel="View Games"
          to="/games"
          images={gameImages}
        />
        <CategoryBand
          eyebrow="Unity Asset Store"
          stat={`${unityAssets.length} templates & 3D packs`}
          ctaLabel="View Assets"
          to="/asset-store"
          images={assetImages}
        />
        <CategoryBand
          eyebrow="3D Art & Models"
          stat="On ArtStation & Sketchfab"
          ctaLabel="View 3D Art"
          to="/3d-art"
          images={threeDImages}
        />
      </div>
    </>
  );
}
