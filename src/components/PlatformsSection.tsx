import { platforms } from "../data/site";

export function PlatformsSection() {
  return (
    <section className="border-t border-line/70">
      <div className="container-page py-12 md:py-16">
        <h2 className="mb-6 font-display text-lg font-semibold text-paper">3D art & marketplaces</h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
