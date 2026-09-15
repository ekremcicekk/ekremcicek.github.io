import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { site, platforms } from "../data/site";

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description={`Get in touch with ${site.name}.`} path="/contact" />

      <section className="container-page py-6 md:py-8">
        <h1 className="font-display text-2xl font-extrabold tracking-tighter text-paper md:text-3xl">
          Contact
        </h1>

        <div className="mt-6 flex flex-col gap-2 max-w-sm">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md border border-line/70 bg-panel/40 px-4 py-3 text-sm text-paper transition-colors hover:border-accent/50"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line/70 bg-panel/40 px-4 py-3 text-sm text-paper transition-colors hover:border-accent/50"
          >
            LinkedIn
          </a>
          <Link
            to="/about#cv"
            className="rounded-md border border-line/70 bg-panel/40 px-4 py-3 text-sm text-paper transition-colors hover:border-accent/50"
          >
            CV
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-line/70 pt-6">
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
