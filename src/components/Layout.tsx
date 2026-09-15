import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { nav, site } from "../data/site";
import { MailIcon, LinkedInIcon, DocumentIcon } from "./icons";
import { asset } from "../lib/asset";

function NavLinks({ onClick, vertical }: { onClick?: () => void; vertical?: boolean }) {
  return (
    <>
      {nav.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onClick}
          end={item.to === "/"}
          className={({ isActive }) =>
            [
              "font-display text-sm font-medium transition-colors",
              vertical ? "py-3 text-xl" : "",
              isActive ? "text-paper" : "text-muted hover:text-paper",
            ].join(" ")
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
}

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-ink text-paper">
      <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/90 backdrop-blur-sm">
        <div className="container-page flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent font-display text-xs font-extrabold text-ink">
              EC
            </span>
            <span className="font-display text-sm font-extrabold tracking-tighter">
              Ekrem Cicek
            </span>
          </NavLink>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              <NavLinks />
            </nav>

            <Link
              to="/contact"
              className="hidden rounded-full bg-paper px-5 py-2 font-display text-sm font-semibold text-ink transition-colors hover:bg-accent md:inline-block"
            >
              Contact
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={`block h-px w-5 bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-line/70 px-5 pb-6 md:hidden">
            <nav className="flex flex-col gap-1">
              <NavLinks vertical onClick={() => setOpen(false)} />
            </nav>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block rounded-full bg-paper px-5 py-2 font-display text-sm font-semibold text-ink"
            >
              Contact
            </Link>
          </div>
        )}
      </header>

      <main key={location.pathname} className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-1">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            title={site.email}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-panel hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-panel hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={asset(site.cvUrl)}
            target="_blank"
            rel="noreferrer"
            aria-label="CV"
            title="CV"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-panel hover:text-accent"
          >
            <DocumentIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
