# Senergy — Website

Modern static website for **Senergy Reims**, a B2B industrial company specializing in lifting and material handling equipment (levage & manutention).

## Quick Start

All commands must be run from the `site/` directory.

```bash
cd site
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The browser will redirect to `/fr` automatically.

### Build for production

```bash
npm run build
```

Generates a fully static site in the `out/` directory.

### Preview the production build locally

```bash
npx serve out
```

Or any static file server pointing at `site/out/`.

### Lint

```bash
npm run lint
```

## Adding / editing content

All text content lives in two JSON files:

| File | Language |
|---|---|
| `src/messages/fr.json` | French |
| `src/messages/en.json` | English |

Edit both files to keep translations in sync.

## Adding a new page

1. Create `src/app/[locale]/your-page/page.tsx`
2. Add the corresponding translation keys to both `fr.json` and `en.json`
3. Link to the page using `/${locale}/your-page`

## Deployment

The `out/` folder produced by `npm run build` is a self-contained static site. It can be deployed to:

- **Vercel** — push to GitHub and import the repo; set the root directory to `site/`
- **Netlify** — drag and drop the `out/` folder, or connect via Git
- **Any static host** — upload the contents of `out/` to your web server or CDN
