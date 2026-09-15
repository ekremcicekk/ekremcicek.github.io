import { Seo } from "../components/Seo";
import { AssetTile } from "../components/AssetTile";
import { unityAssets } from "../data/assets";
import { threeDPlatforms } from "../data/site";

const threeDPacks = unityAssets.filter((a) => a.category === "3D");

export default function ThreeDArt() {
  return (
    <>
      <Seo
        title="3D Art"
        description="3D art and models by Ekrem Cicek, published on ArtStation, Sketchfab and Fab."
        path="/3d-art"
      />

      <section className="container-page py-6 md:py-8">
        <h1 className="font-display text-2xl font-extrabold tracking-tighter text-paper md:text-3xl">
          3D Art
        </h1>
        <p className="mt-2 max-w-lg text-sm text-muted">
          Full body of 3D art work lives on ArtStation and Sketchfab. Fab hosts additional
          marketplace assets.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {threeDPlatforms.map((platform) => (
            <a
              key={platform.url}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between gap-6 rounded-xl border border-line/70 bg-panel/40 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/50"
            >
              <span className="font-display text-lg font-semibold text-paper group-hover:text-accent">
                {platform.name}
              </span>
              <span className="flex items-center justify-between text-sm text-muted">
                {platform.description}
                <span aria-hidden className="text-muted-2 transition-transform group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <h2 className="mb-4 font-display text-lg font-semibold text-paper">
          3D packs on the Unity Asset Store
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {threeDPacks.map((asset) => (
            <AssetTile key={asset.id} asset={asset} />
          ))}
        </div>
      </section>
    </>
  );
}
