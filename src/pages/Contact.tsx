import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { site, platforms } from "../data/site";

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description={`Get in touch with ${site.name}.`} path="/contact" />

      <section className="container-page flex min-h-[60vh] flex-col justify-center py-20">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-accent">Contact</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
          Let's talk
        </h1>
        <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
          Open to new opportunities in 3D art and game art. Reach out directly.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-paper px-6 py-3 text-center font-display text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-3 text-center font-display text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn Profile
          </a>
          <Link
            to="/about#cv"
            className="rounded-full border border-line px-6 py-3 text-center font-display text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
          >
            View CV
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-line/70 pt-8">
          {platforms.map((platform) => (
            <a
              key={platform.url}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-accent"
            >
              {platform.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
