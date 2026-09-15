# Ekrem Cicek — Portfolio

Source for [ekremcicekk.github.io](https://ekremcicekk.github.io), the personal portfolio of Ekrem
Cicek (3D Artist / Game Artist). Built with React, TypeScript, Vite and Tailwind CSS, and deployed
as a static site on GitHub Pages as a user page (repo name matches the GitHub account
`ekremcicekk` exactly, so it serves at the root domain).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Router (client-side routing, with a GitHub Pages SPA fallback via `public/404.html`)
- No backend — all content lives in `src/data/`

## Project structure

```
src/
  data/
    types.ts        # Company / Game / StoreLink types
    companies.ts     # All studios + shipped games — THE content source of truth
    site.ts          # Name, role, email, LinkedIn, nav links
  components/         # Layout, GameCard, CompanyBlock, Seo
  pages/              # Home, Work, Experience, About, Contact
public/
  images/
    companies/        # Studio logos
    games/<studio>/    # Game icons, one folder per studio
```

## Everyday workflow: adding or editing a project

You do **not** need to touch any component code to update content.

### Add a new shipped game

Open [`src/data/companies.ts`](src/data/companies.ts), find the right company object, and add an
entry to its `games` array:

```ts
{
  title: "My New Game",
  slug: "my-new-game",
  icon: "/images/games/dodo-games/my-new-game.png", // optional
  links: [{ label: "App Store", url: "https://apps.apple.com/..." }],
}
```

Drop the icon file at the matching path under `public/images/games/<studio-slug>/`. That's it —
it automatically appears on the Home (if you add its slug to `featuredSlugs` in
[`src/pages/Home.tsx`](src/pages/Home.tsx)), Work, and Experience pages with no other changes.

### Add a new studio

Add a new object to the `companies` array in `companies.ts` with `name`, `slug`, `logo`, `devUrl`,
and a `games` array. Drop the logo at `public/images/companies/<slug>.png`.

### Update contact info, name, or role

Edit [`src/data/site.ts`](src/data/site.ts).

### Update the About page copy

Edit [`src/pages/About.tsx`](src/pages/About.tsx) directly — the intro paragraph and the `skills`
array at the top of the file.

### Replace an image

Overwrite the file at its existing path under `public/images/`. No code changes needed as long as
the filename stays the same (or update the `icon`/`logo` path in `companies.ts` if you rename it).

### Update the CV

Overwrite [`public/cv/ekrem-cicek-cv.pdf`](public/cv/ekrem-cicek-cv.pdf) with the new file, keeping
the same filename — every "Download CV" link (Home, About, Contact) points at that one path, so no
code changes are needed. If you want to rename the file, update `cvUrl` in
[`src/data/site.ts`](src/data/site.ts) to match.

### Update marketplace / 3D art platform links

Edit the `platforms` array in [`src/data/site.ts`](src/data/site.ts) (Unity Asset Store, Fab,
ArtStation, Sketchfab). Shown on the Home page and linked from Contact.

## Local development

```bash
npm install
npm run dev
```

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it
to GitHub Pages automatically. No manual build/deploy step is required.

To enable this the first time: in the GitHub repo, go to **Settings → Pages** and set the source to
**GitHub Actions**.

```bash
git push origin main
```

## Content notes

All company and game data in `src/data/companies.ts` was migrated from the previous GitBook
portfolio (audited 2026-09-15). That source contained only studio names, developer store pages,
and shipped game titles/icons/links — no employment dates, job titles, per-project descriptions,
or skills detail. Nothing was invented to fill those gaps; the About page and skills list state
only what's directly evidenced by the shipped work. Extend `companies.ts` and `About.tsx` directly
as more detail becomes available.
