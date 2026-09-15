import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
          Page not found
        </h1>
        <Link
          to="/"
          className="mt-8 rounded-full border border-line px-6 py-3 font-display text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
        >
          Back to home
        </Link>
      </section>
    </>
  );
}
