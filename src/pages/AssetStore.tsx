import { useMemo, useState } from "react";
import { Seo } from "../components/Seo";
import { AssetTile } from "../components/AssetTile";
import { unityAssets } from "../data/assets";
import { unityAssetStoreUrl } from "../data/site";

type Category = "all" | "Templates" | "3D";

export default function AssetStore() {
  const [active, setActive] = useState<Category>("all");
  const [query, setQuery] = useState("");

  const templatesCount = unityAssets.filter((a) => a.category === "Templates").length;
  const threeDCount = unityAssets.filter((a) => a.category === "3D").length;

  const filtered = useMemo(() => {
    const byCategory = active === "all" ? unityAssets : unityAssets.filter((a) => a.category === active);
    const q = query.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter((a) => a.title.toLowerCase().includes(q));
  }, [active, query]);

  return (
    <>
      <Seo
        title="Asset Store"
        description="Unity Asset Store templates and 3D packs published by Ekrem Cicek (EK Studio)."
        path="/asset-store"
      />

      <section className="container-page py-6 md:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-display text-2xl font-extrabold tracking-tighter text-paper md:text-3xl">
            Unity Asset Store
          </h1>

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search listings…"
            aria-label="Search Unity Asset Store listings"
            className="w-full rounded-md border border-line bg-panel/40 px-4 py-2 text-sm text-paper placeholder:text-muted-2 outline-none transition-colors focus:border-accent/50 sm:w-56"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <FilterButton label={`All (${unityAssets.length})`} isActive={active === "all"} onClick={() => setActive("all")} />
          <FilterButton label={`Templates (${templatesCount})`} isActive={active === "Templates"} onClick={() => setActive("Templates")} />
          <FilterButton label={`3D (${threeDCount})`} isActive={active === "3D"} onClick={() => setActive("3D")} />
          <a
            href={unityAssetStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-sm text-muted underline decoration-line underline-offset-4 hover:text-accent"
          >
            View publisher page ↗
          </a>
        </div>
      </section>

      <section className="container-page pb-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
            {filtered.map((asset) => (
              <AssetTile key={asset.id} asset={asset} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">No listings match "{query}".</p>
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
