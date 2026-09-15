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

      <section className="container-page py-6 md:py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-2xl font-bold tracking-tight text-paper md:text-3xl">
            Experience
          </h1>
          <nav className="flex flex-wrap gap-2">
            {companies.map((company) => (
              <a
                key={company.slug}
                href={`#${company.slug}`}
                className="rounded-md border border-line px-3 py-1.5 font-display text-sm text-muted transition-colors hover:border-accent/40 hover:text-paper"
              >
                {company.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-2">
          {companies.map((company) => (
            <CompanyBlock key={company.slug} company={company} />
          ))}
        </div>
      </section>
    </>
  );
}
