import { Seo } from "../components/Seo";
import { CompanyBlock } from "../components/CompanyBlock";
import { companies } from "../data/companies";

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience"
        description="Studios Ekrem Cicek has worked with: Dodo Games, Moondark, Basix Games and Duuby."
        path="/experience"
      />

      <section className="container-page py-16 md:py-20">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-accent">Experience</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
          Studios & shipped work
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted">
          A studio-by-studio breakdown of released titles.
        </p>

        <nav className="mt-8 flex flex-wrap gap-2">
          {companies.map((company) => (
            <a
              key={company.slug}
              href={`#${company.slug}`}
              className="rounded-full border border-line px-4 py-2 font-display text-sm text-muted transition-colors hover:border-accent/40 hover:text-paper"
            >
              {company.name}
            </a>
          ))}
        </nav>

        <div className="mt-6">
          {companies.map((company) => (
            <CompanyBlock key={company.slug} company={company} />
          ))}
        </div>
      </section>
    </>
  );
}
