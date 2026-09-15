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
    assets.ts        # Unity Asset Store listings (image-first showcase on Work)
    site.ts          # Name, role, email, LinkedIn, CV path, nav, platform links
  components/         # Layout, WorkTile, FeaturedGameCard, AssetTile, CompanyBlock, Seo
  pages/              # Home, Work, Experience, About, Contact
public/
  images/
    companies/        # Studio logos
    games/<studio>/    # Game icons, one folder per studio
    assets/            # Unity Asset Store thumbnails
  cv/                  # CV PDF
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

Drop the icon file at the matching path under `public/images/games/<studio-slug>/`. That's it — it
automatically appears on Work and Experience with no other changes.

**Order matters for Dodo Games (the current studio):** its `games` array is newest-first — add new
titles at the *top* of that array. The Home page's "Latest work" section just shows the first 8
entries of `companies[0].games`, so the newest title always leads. The other studios' order doesn't
drive anything and can stay as-is.

### Add a new studio

Add a new object to the `companies` array in `companies.ts` with `name`, `slug`, `logo`, `devUrl`,
and a `games` array. Drop the logo at `public/images/companies/<slug>.png`. If this becomes the
current/most-recent studio, move its object to the front of the `companies` array (index 0) so it
drives the Home page's "Latest work" section.

### Add or update a Unity Asset Store listing

Add an entry to the `unityAssets` array in [`src/data/assets.ts`](src/data/assets.ts) with `id`,
`title`, `slug`, `category` (`"Templates"` or `"3D"`), `href` (the asset's store URL) and `img`
(path under `public/images/assets/`). Drop the thumbnail at that path. Shown on the Work page's
"Unity Asset Store" tab.

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

Unity Asset Store listings in `src/data/assets.ts` were pulled from the live publisher page
(assetstore.unity.com/publishers/78187, audited 2026-09-15) — all 43 listings at the time, with
thumbnails downloaded locally rather than hotlinked.
