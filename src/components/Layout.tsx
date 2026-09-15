import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { nav, site } from "../data/site";

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
              "font-display text-sm tracking-wide uppercase transition-colors",
              vertical ? "py-3 text-2xl normal-case" : "",
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
      <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/85 backdrop-blur-sm">
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <NavLink to="/" className="font-display text-lg font-semibold tracking-tight">
            {site.name}
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-6 bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-line/70 px-5 pb-6 md:hidden">
            <NavLinks vertical onClick={() => setOpen(false)} />
          </nav>
        )}
      </header>

      <main key={location.pathname} className="flex-1 reveal">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="container-page flex flex-col gap-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.role}.
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${site.email}`} className="hover:text-paper transition-colors">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
