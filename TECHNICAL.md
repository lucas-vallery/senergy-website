# Senergy Website — Technical Documentation

## Overview

The Senergy website is a **fully static, multilingual site** built with Next.js 14 App Router and exported as plain HTML/CSS/JS. It requires no server at runtime and can be hosted on any static file host.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14.2.35 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^3.4 |
| i18n | next-intl | ^4.8 |
| Icons | lucide-react | ^0.577 |
| Runtime | Node.js (build-time only) | 25.x |

---

## Project Structure

```
site/
├── middleware.ts              # next-intl locale routing middleware
├── next.config.mjs            # Next.js config (static export + next-intl plugin)
├── tailwind.config.ts         # Design tokens (colors, fonts)
├── src/
│   ├── routing.ts             # Locale list + defaultLocale
│   ├── i18n.ts                # next-intl server config (message loader)
│   ├── messages/
│   │   ├── fr.json            # All French strings (13 namespaces)
│   │   └── en.json            # All English strings (13 namespaces)
│   ├── app/
│   │   ├── layout.tsx         # Root layout (pass-through, required by Next.js)
│   │   ├── page.tsx           # Root redirect → /fr
│   │   └── [locale]/
│   │       ├── layout.tsx     # Locale layout: fonts, NextIntlClientProvider
│   │       ├── page.tsx       # Homepage
│   │       ├── societe/       # About / Company page
│   │       ├── electronique/
│   │       │   ├── page.tsx           # Electronics division
│   │       │   └── radiocommandes/    # IMET radio controls detail page
│   │       ├── hydraulique/   # Hydraulics division
│   │       ├── carrosserie/   # Industrial bodywork division
│   │       ├── sav/           # After-sales service
│   │       ├── actualites/    # News
│   │       ├── contact/       # Contact page (with form)
│   │       └── produits/      # All products listing
│   └── components/
│       ├── Header.tsx         # Client component — nav, dropdowns, lang switcher
│       ├── Footer.tsx         # Server component — 4-column footer
│       ├── Hero.tsx           # Full-width hero with CTA buttons
│       ├── SectionTitle.tsx   # Reusable section heading with orange underline
│       ├── ProductCard.tsx    # Product/category card
│       └── ContactForm.tsx    # Client component — validated contact form
```

---

## Static Export

`next.config.mjs` is set to `output: 'export'`. Running `npm run build` produces a fully static `out/` directory — no Node.js server needed at runtime.

```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,   // generates /fr/contact/index.html instead of /fr/contact.html
  images: {
    unoptimized: true,   // required for static export (no Image Optimization API)
  },
};
```

**Consequence:** server-only Next.js features like Route Handlers, Server Actions, or `headers()`/`cookies()` at render time cannot be used. The contact form is frontend-only (validates client-side, shows a success message — no email is sent).

---

## Internationalisation (i18n)

### Locales

| Locale | URL prefix | Default |
|---|---|---|
| French | `/fr/` | yes |
| English | `/en/` | no |

Defined in `src/routing.ts`:

```ts
export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
});
```

### How locale routing works

`middleware.ts` uses `createMiddleware(routing)` from next-intl. Any request to `/` or `/contact` is automatically redirected to `/fr/` or `/fr/contact/`.

### Static generation requirement

Because the site is statically exported, every page must:

1. Export `generateStaticParams` returning all locales (done once in `[locale]/layout.tsx`).
2. Call `setRequestLocale(locale)` at the top of the default export function, **before** any `getTranslations()` call. This prevents next-intl from reading `headers()` at render time, which would break static export.

```ts
export default async function MyPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);                              // required
  const t = await getTranslations({ locale, namespace: 'myNamespace' });
  // ...
}
```

### Translation files

All strings are in `src/messages/fr.json` and `src/messages/en.json`, split into 13 namespaces:

| Namespace | Used by |
|---|---|
| `common` | Shared CTAs, buttons across all pages |
| `nav` | Header navigation labels |
| `home` | Homepage content |
| `company` | Société page |
| `electronics` | Electronique division page |
| `radiocontrols` | Radiocommandes detail page |
| `hydraulics` | Hydraulique division page |
| `bodywork` | Carrosserie division page |
| `sav` | SAV page |
| `news` | Actualités page |
| `contact` | Contact page + ContactForm component |
| `products` | Tous nos produits page |
| `footer` | Footer component |

Client components that need translations use `useTranslations('namespace')` from `next-intl`. Server components use `await getTranslations({ locale, namespace: '...' })`.

---

## Design System

### Colors

Defined as Tailwind custom tokens in `tailwind.config.ts`:

| Token | Hex | Usage |
|---|---|---|
| `navy` / `navy-DEFAULT` | `#1c4573` | Primary — nav, headings, buttons |
| `navy-dark` | `#152f50` | Hover state for navy buttons |
| `navy-light` | `#2557a0` | Lighter navy accent |
| `orange` / `orange-DEFAULT` | `#e85d1a` | Accent — highlights, icons, badges |
| `orange-dark` | `#c44e15` | Hover state for orange buttons |
| `orange-light` | `#f0763a` | Light orange variant |
| `lightbg` | `#f5f7fa` | Alternating section backgrounds |
| `textdark` | `#1a1a2e` | Body text |

### Typography

Two fonts loaded via `next/font/google` in `[locale]/layout.tsx`:

| Variable | Font | Usage |
|---|---|---|
| `--font-barlow` | Barlow (400/500/600/700/800) | Headings — `font-barlow` class |
| `--font-inter` | Inter (variable) | Body text — default |

---

## Components

### Header (`src/components/Header.tsx`)

- `'use client'` — uses `useState` for mobile menu and dropdown state.
- Fixed at top with a top bar ("Spécialiste secteur levage et manutention").
- Desktop: full nav with hover dropdowns for Electronique, Hydraulique, Carrosserie, and Tous nos produits.
- Mobile: hamburger menu with accordion-style sub-menus.
- Language switcher: links to the same path under the alternate locale prefix.

### Footer (`src/components/Footer.tsx`)

- Server component — no interactivity needed.
- 4-column layout: company info + contact / Electronique links / Hydraulique & Carrosserie links / SAV CTA.
- Dark navy background.

### Hero (`src/components/Hero.tsx`)

Accepts these props:

```ts
{
  title: string;
  subtitle?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  pattern?: 'home' | 'page';   // 'home' = large, 'page' = smaller
  size?: 'large' | 'medium' | 'small';
}
```

### ContactForm (`src/components/ContactForm.tsx`)

- `'use client'` — handles all form state with React `useState`.
- Fields: firstName, lastName, email, phone, company, subject (select), message, GDPR checkbox.
- Optional `includeEquipment` prop (used on SAV page) adds an equipment/serial number field.
- Validates on submit; shows inline errors. On success, replaces the form with a confirmation message.
- **No data is sent anywhere** — backend integration (email service, form API) must be added separately.

### SectionTitle (`src/components/SectionTitle.tsx`)

```ts
{
  title: string;
  subtitle?: string;
  center?: boolean;  // text-center
  light?: boolean;   // white text (for dark backgrounds)
}
```

### ProductCard (`src/components/ProductCard.tsx`)

Card with image placeholder, category badge, title, description, and optional link.

---

## Pages

| Route | File | Notes |
|---|---|---|
| `/fr` | `[locale]/page.tsx` | Hero, about stats, 3 division cards, 6 product cards, Why Senergy, news teaser, CTA banner |
| `/fr/societe` | `[locale]/societe/page.tsx` | Company history, values grid, team cards |
| `/fr/electronique` | `[locale]/electronique/page.tsx` | Division overview, IMET partnership callout, 3 categories |
| `/fr/electronique/radiocommandes` | `.../radiocommandes/page.tsx` | M880, MR900, Joystick, TR series cards with specs |
| `/fr/hydraulique` | `[locale]/hydraulique/page.tsx` | 4 product categories (groups, distributors, cylinders, pumps) |
| `/fr/carrosserie` | `[locale]/carrosserie/page.tsx` | 4 categories (custom bodywork, skips, cranes, tail lifts) |
| `/fr/sav` | `[locale]/sav/page.tsx` | Hotline info, 4 service cards, commitments, SAV contact form |
| `/fr/actualites` | `[locale]/actualites/page.tsx` | Category filter (static), featured article, 5-card grid |
| `/fr/contact` | `[locale]/contact/page.tsx` | ContactForm, address/phone/email/hours, map placeholder, team grid |
| `/fr/produits` | `[locale]/produits/page.tsx` | All 3 divisions listed with all their product cards |

All pages exist in both `/fr/` and `/en/` variants (25 static pages total).

---

## Known Limitations & Next Steps

### Contact form — no backend
The contact form currently only validates client-side and shows a success message. To actually send emails, integrate one of:
- [Resend](https://resend.com) or [SendGrid](https://sendgrid.com) via a serverless function (Vercel Functions, Netlify Functions)
- A third-party form service (Formspree, Typeform, etc.) by posting to their endpoint

### Images
All product images are placeholder gradients. To add real images:
1. Place files in `site/public/images/`
2. Replace placeholder `<div>` blocks with `<img src="/images/..." />` or Next.js `<Image>` (with `unoptimized` already set in config)

### News
The news page uses hardcoded items from translation strings. A simple upgrade would be to add a `src/data/news.ts` file with typed news entries, or connect to a headless CMS.

### Adding a new language
1. Add the locale to `src/routing.ts` (`locales: ['fr', 'en', 'de']`)
2. Create `src/messages/de.json` mirroring the structure of `fr.json`
3. Rebuild — `generateStaticParams` in the layout will automatically generate all routes for the new locale
