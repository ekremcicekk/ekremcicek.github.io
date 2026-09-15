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
    assets.ts        # Unity Asset Store listings, shown on /asset-store and /3d-art
    site.ts          # Name, role, email, LinkedIn, CV path, nav, 3D-art platform links
  components/         # Layout, CategoryBand, WorkTile, AssetTile, Seo
  pages/              # Home, Games, AssetStore, ThreeDArt, About, Contact
public/
  images/
    companies/        # Studio logos
    games/<studio>/    # Game icons, one folder per studio
    assets/            # Unity Asset Store thumbnails
  cv/                  # CV PDF
```

## Site structure

The homepage is three full-width category bands — Mobile Games, Unity Asset Store, 3D Art — each a
collage of real thumbnails linking to its own dedicated page. These three categories are always
kept separate (their own nav items, their own pages, their own grids) rather than mixed into one
grid — that separation is a deliberate, explicit design decision, not an oversight, so don't merge
them back together when extending the site.

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

Drop the icon file at the matching path under `public/images/games/<studio-slug>/`. That's it — it
automatically appears on the Games page (and in the Home page's Mobile Games band collage, which
just pulls the first 24 game icons) with no other changes.

**Order matters for Dodo Games (the current studio):** its `games` array is newest-first — add new
titles at the *top* of that array.

### Add a new studio

Add a new object to the `companies` array in `companies.ts` with `name`, `slug`, `logo`, `devUrl`,
and a `games` array. Drop the logo at `public/images/companies/<slug>.png`.

### Add or update a Unity Asset Store listing

Add an entry to the `unityAssets` array in [`src/data/assets.ts`](src/data/assets.ts) with `id`,
`title`, `slug`, `category` (`"Templates"` or `"3D"`), `href` (the asset's store URL) and `img`
(path under `public/images/assets/`). Drop the thumbnail at that path. Shown on the `/asset-store`
page (all listings) and, if `category` is `"3D"`, also on `/3d-art`.

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
the same filename — the embedded preview and "View CV" links (Home, About, Contact) all point at
that one path, so no code changes are needed. If you want to rename the file, update `cvUrl` in
[`src/data/site.ts`](src/data/site.ts) to match.

### Update 3D art platform links

Edit the `threeDPlatforms` array in [`src/data/site.ts`](src/data/site.ts) (ArtStation, Sketchfab,
Fab). Shown on the `/3d-art` page and linked from Contact.

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

Unity Asset Store listings in `src/data/assets.ts` were pulled from the live publisher page
(assetstore.unity.com/publishers/78187, audited 2026-09-15) — all 43 listings at the time, with
thumbnails downloaded locally rather than hotlinked.
