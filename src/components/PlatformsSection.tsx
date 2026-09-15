import { platforms } from "../data/site";

export function PlatformsSection() {
  return (
    <section className="border-t border-line/70">
      <div className="container-page py-20 md:py-24">
        <div className="mb-10">
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            3D art & marketplaces
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted">
            Unity assets and 3D work published across these platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform) => (
            <a
              key={platform.url}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between gap-6 rounded-lg border border-line/70 bg-panel/40 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-panel"
            >
              <span className="font-display text-lg font-medium text-paper group-hover:text-accent">
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
      </div>
    </section>
  );
}
