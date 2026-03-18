# SENERGY — Specification Document for New Static Website

**Version:** 1.0
**Date:** 2026-03-17
**Prepared by:** Senior Web Designer (Claude Code)
**Source analysis:** http://senergy.fr/WP/ (scraped March 2026), https://www.imetsaws.com/fr (design reference), public business directories

---

## Table of Contents

1. [Company Overview & Raw Content](#1-company-overview--raw-content)
2. [Audit of the Existing Site](#2-audit-of-the-existing-site)
3. [Inspiration Analysis — IMET SAWS](#3-inspiration-analysis--imet-saws)
4. [Site Architecture & Routes](#4-site-architecture--routes)
5. [Navigation Structure](#5-navigation-structure)
6. [Page-by-Page Content Specification](#6-page-by-page-content-specification)
7. [Design System](#7-design-system)
8. [Component Library](#8-component-library)
9. [Multilanguage Requirements (FR + EN)](#9-multilanguage-requirements-fr--en)
10. [Contact Page Requirements](#10-contact-page-requirements)
11. [Technical Stack Recommendation](#11-technical-stack-recommendation)
12. [SEO & Accessibility Requirements](#12-seo--accessibility-requirements)
13. [Assets Inventory](#13-assets-inventory)
14. [Open Questions for Client](#14-open-questions-for-client)

---

## 1. Company Overview & Raw Content

### 1.1 Identity

| Field | Value |
|---|---|
| Company name | SENERGY |
| Tagline | Spécialiste secteur levage et manutention |
| Tagline (EN) | Specialist in the lifting and handling sector |
| Founded / Experience | 30+ years in operation |
| SIREN | 950 459 701 |
| Legal structure | (to confirm) |

### 1.2 Address & Contact

```
6 Rue du Capitaine Georges Madon
ZAC La Croix Blandin
51100 REIMS — France

Téléphone : (+33) (0)3.26.79.00.50
Fax        : (+33) (0)3.26.79.00.51
Email      : contactsite@senergy.fr
```

### 1.3 Team Contacts (Scraped)

| Name | Role | Email |
|---|---|---|
| Benoît LALLEMENT | Responsable SAV | blallement@senergy.fr |
| David VALLERY | Commercial — Hydraulique / Carrosserie | dvallery@senergy.fr |
| José CHAROY | Commercial — Electronique / Carrosserie | jcharoy@senergy.fr |
| Emeric BAUDOUIN | Commercial — Composants hydrauliques | ebaudouin@senergy.fr |

### 1.4 Company Description (verbatim from existing site)

**French:**
> Depuis plus de 30 ans, SENERGY met à votre service son savoir-faire et son expérience dans des domaines tels que la manutention, le levage, les machines mobiles et bien d'autres au travers de ses 3 divisions : Division ELECTRONIQUE — Division HYDRAULIQUE — Division CARROSSERIE INDUSTRIELLE.
>
> Que vous soyez dans l'industrie, l'agricole, ou le BTP, nous avons la solution à vos problématiques.
>
> Pour répondre à vos besoins, SENERGY met à votre disposition ses spécialistes qualifiés bénéficiant d'une longue expérience en tant que techniciens dans leur domaine.
>
> De plus, nous avons la possibilité de vous livrer sous 24 ou 48 heures en fonction de votre situation sur le territoire national. Nous disposons également d'un stock important afin de limiter les délais usine.
>
> Nous travaillons depuis de nombreuses années avec notre partenaire AXA, leader mondial de l'assurance en responsabilité civile afin de vous garantir un suivi dans ce domaine sur les projets que vous nous aurez confiés.

**English (from existing /en/ version):**
> For more than 30 years, SENERGY has put its know-how and experience at your service in fields such as handling, lifting, mobile machines and many others through its 3 divisions: ELECTRONICS — HYDRAULIC — INDUSTRIAL EQUIPMENTS.
>
> Whether you are in industry, agriculture or construction, we have the solution to solve your problems.
>
> To meet your needs, SENERGY provides qualified specialists that have a long experience in their domain as technicians.
>
> In addition, we have the possibility to deliver you within 24 or 48 hours according to your local situation. We also have a large stock in order to limit delays.
>
> We are working for many years with our partner AXA, world leader in insurance, in civil liability, in order to guarantee you a follow-up according to the projects you defined with us.

### 1.5 Key Selling Points (for hero / about sections)

- 30+ ans d'expérience / 30+ years of experience
- Livraison 24 / 48h sur le territoire national
- Stock important pour limiter les délais usine
- Spécialistes qualifiés, expérimentés techniciens
- Couverture RC via partenaire AXA
- Garantie 12 mois sur tous les équipements
- SAV réactif — diagnostics, dépannage, réparations
- Importateur officiel IMET depuis 1997
- Partenaire Dinamic Oil depuis 1991
- Partenaire BPE depuis plus de 30 ans

### 1.6 Partner Brands (displayed on homepage)

| Brand | Category | Since |
|---|---|---|
| IMET | Radiocommandes industrielles | 1997 |
| Dinamic Oil | Moteurs hydrauliques & réducteurs planétaires | 1991 |
| BPE / DANA | Capteurs & cartes électroniques | 30+ ans |
| Sistematica | Radiocommandes industrielles | — |
| Oil Sistem / Bosch | Centrales hydrauliques & valves | — |
| DEMAC | Enrouleurs hydrauliques & électriques | — |
| OESSE | Echangeurs, refroidisseurs | 30+ ans |

### 1.7 News / Actualités (scraped)

> **SALON INTERNATIONAL DU DEPANNAGE à REIMS 2023**
> du 23 au 25 mai 2023.
> Venez nous rencontrer sur notre **stand 22, Hall 1**, pour découvrir toute notre gamme de radiocommandes industrielles.

*(Note: The news section is sparse. The new site should have a real CMS-driven news / actualités section.)*

---

## 2. Audit of the Existing Site

### 2.1 What Works

- Complete and thorough product catalogue, covering all three divisions
- Bilingual (FR / EN) — dual-language version exists
- Contact form (Contact Form 7)
- Partner logos displayed on homepage
- Responsive theme (Customify WordPress theme)

### 2.2 Critical Problems

| Problem | Impact |
|---|---|
| **Invalid TLS certificate** (senergy.fr does not match cert alt names) | All HTTPS requests fail; browsers show security warnings; SEO penalty |
| WordPress with default "Admin" author visible | Security exposure, unprofessional |
| No hero CTA — hero slider has no button or call-to-action | Lost conversion opportunity |
| Navigation is extremely deep (3 levels) with 50+ items in one column menu | Poor UX, overwhelming on mobile |
| No "Tous nos produits" landing page with visual cards | Poor discoverability |
| News section contains a single 2023 article | Appears abandoned |
| No favicon specification found | Branding gap |
| No social media links | Missed engagement |
| Image alt texts largely empty on slider images | Accessibility & SEO failure |
| Footer links to `contact@senergy.fr` (different from `contactsite@senergy.fr`) | Inconsistent / broken link |
| WordPress version 6.1.x with outdated plugins (Jetpack 11.9.3) | Security risk |

### 2.3 Content Gaps to Fill

- Product images for most product pages are missing or old
- No "Demande de devis" (quote request) dedicated workflow
- No Google Maps embed or directions to ZAC La Croix Blandin
- No case studies or application references
- No downloadable technical sheets (PDF links are present but not organized)

---

## 3. Inspiration Analysis — IMET SAWS

Source: https://www.imetsaws.com/fr
*(This is the website of IMET's sister brand for industrial saws — used as design inspiration reference for an industrial B2B site in the same ecosystem.)*

### 3.1 Design Patterns to Adopt

| Pattern | Description |
|---|---|
| **Dark nav + light content** | Fixed/sticky top navigation with dark background (#1a1a2e or charcoal), white logo, white nav links. Creates authority and contrast. |
| **Orange / warm accent color** | CTAs, hover states, active links, icons use a vibrant orange-red accent. High visibility on dark and light backgrounds. |
| **Card-based product grid** | Products displayed as filterable grid cards: image thumbnail + product name + short description + link. Clean visual scanning. |
| **Full-width section dividers** | Alternating light/dark section blocks to separate content areas without borders. |
| **Language selector** | Discrete flag + abbreviation (FR, EN) in top-right corner of nav bar. |
| **Category filtering** | JavaScript-based isotope filtering to let users filter product cards by category without page reload. |
| **Multi-column footer** | Three or four columns: quick nav, contact info, partner logos, legal links. Dark background. |
| **Heritage messaging** | Badge or text element prominently showing "X ans d'expérience" to build trust. |
| **PDF download links** | Each product page links to its technical datasheet PDF in a clear download button. |
| **Industry event announcements** | News cards with event name, date, stand number. |

---

## 4. Site Architecture & Routes

The new site is a **static multilingual site** with French as primary language and English as secondary.

```
/                          → Home (FR)
/societe/                  → À propos / Société
/produits/                 → Tous nos produits (overview page with category cards)
  /produits/electronique/              → Division Electronique
    /produits/electronique/radiocommandes-imet/         → Radiocommandes IMET
      /produits/electronique/radiocommandes-imet/wave2/ → WAVE2
      /produits/electronique/radiocommandes-imet/zeus2/ → ZEUS2
      /produits/electronique/radiocommandes-imet/thor2/ → THOR2
      /produits/electronique/radiocommandes-imet/ares2/ → ARES2
      /produits/electronique/radiocommandes-imet/zed/   → ZED
      /produits/electronique/radiocommandes-imet/kron/  → KRON
      /produits/electronique/radiocommandes-imet/ray/   → RAY
      /produits/electronique/radiocommandes-imet/g4s/   → G4 S
      /produits/electronique/radiocommandes-imet/modin/ → MODIN
      /produits/electronique/radiocommandes-imet/axt/   → AXT
      /produits/electronique/radiocommandes-imet/kit-hydra-system/ → Kit Hydra System
    /produits/electronique/capteurs-cartes-bpe/         → Capteurs & cartes électroniques BPE
      /produits/electronique/capteurs-cartes-bpe/capteurs/         → Capteurs
      /produits/electronique/capteurs-cartes-bpe/cartes-electroniques/ → Cartes électroniques
    /produits/electronique/radiocommandes-sistematica/  → Radiocommandes Sistematica
  /produits/hydraulique/               → Division Hydraulique
    /produits/hydraulique/dinamic-oil/                  → Dinamic Oil
    /produits/hydraulique/treuils/                      → Treuils
      /produits/hydraulique/treuils/treuils-hydrauliques-levage/   → Treuils hydrauliques de levage
      /produits/hydraulique/treuils/autres-treuils/                → Autres treuils
    /produits/hydraulique/reducteurs/                   → Réducteurs, moto-réducteurs & moteurs hydrauliques
    /produits/hydraulique/oil-sistem-bosch/             → Oil Sistem / Bosch (centrales hydrauliques)
    /produits/hydraulique/composants-divers/            → Composants divers
  /produits/carrosserie-industrielle/  → Division Carrosserie Industrielle
    /produits/carrosserie-industrielle/rotators-crochets/          → Rotators et crochets
    /produits/carrosserie-industrielle/leve-palettes/              → Lève-palettes et lève-palettes hydrauliques
    /produits/carrosserie-industrielle/bennes-preneuses/           → Bennes preneuses
    /produits/carrosserie-industrielle/pinces-a-bois/              → Pinces à bois
    /produits/carrosserie-industrielle/pinces-a-parpaings/         → Pinces à parpaings
    /produits/carrosserie-industrielle/grappins-a-ferraille/       → Grappins à ferraille
    /produits/carrosserie-industrielle/grappins-speciaux/          → Grappins spéciaux
    /produits/carrosserie-industrielle/tarieres/                   → Tarières
    /produits/carrosserie-industrielle/enrouleurs/                 → Enrouleurs pour engins mobiles
    /produits/carrosserie-industrielle/stabilisateurs-plaques/     → Stabilisateurs et plaques
    /produits/carrosserie-industrielle/echangeurs-refroidisseurs/  → Echangeurs refroidisseurs
    /produits/carrosserie-industrielle/outils-divers/              → Outils divers
/sav/                      → Service Après-Vente
/actualites/               → Actualités (News)
  /actualites/[slug]/      → Individual news article
/contact/                  → Nous contacter
/mentions-legales/         → Mentions légales

--- English mirror (all above replicated under /en/) ---
/en/                       → Home (EN)
/en/about/
/en/products/
... (same tree, translated)
/en/after-sales-service/
/en/news/
/en/contact/
/en/legal-notice/
```

**Total primary pages (FR):** ~38 content pages + dynamic news articles
**Total EN pages:** Mirror of FR, same count

---

## 5. Navigation Structure

### 5.1 Primary Navigation (desktop — horizontal sticky bar)

```
LOGO | Société | Produits ▾ | SAV | Actualités | Nous contacter | [FR | EN]
```

### 5.2 Produits Mega-Menu (on hover/click)

The "Produits" item opens a **mega-menu** with three columns, one per division:

```
┌─────────────────────────────────────────────────────────────────┐
│  ELECTRONIQUE           HYDRAULIQUE          CARROSSERIE IND.   │
│  ─────────────          ──────────           ───────────────    │
│  Radiocommandes IMET    Dinamic Oil          Rotators & crochets│
│    └ WAVE2              Treuils              Lève-palettes       │
│    └ ZEUS2                └ Hydrauliques     Bennes preneuses    │
│    └ THOR2                └ Autres           Pinces à bois       │
│    └ ARES2              Réducteurs           Pinces à parpaings  │
│    └ ZED                Oil Sistem / Bosch   Grappins ferraille  │
│    └ KRON               Composants divers    Grappins spéciaux   │
│    └ RAY                                     Tarières            │
│    └ G4 S                                    Enrouleurs          │
│    └ MODIN                                   Stabilisateurs      │
│    └ AXT                                     Echangeurs          │
│    └ Kit Hydra System                        Outils divers       │
│  Capteurs & cartes BPE                                           │
│  Radiocommandes Sistematica                                      │
│                                              [Voir tous →]       │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Mobile Navigation

- Hamburger icon opens a full-screen slide-in drawer
- Top level: Société / Produits / SAV / Actualités / Contact / FR|EN
- "Produits" expands to show the three divisions as accordion sections
- Each division accordion expands to show its product list

### 5.4 Footer Navigation (secondary)

```
Column 1: Company            Column 2: Products             Column 3: Contact
──────────                   ──────────                     ──────────
Société                      Electronique                   6 Rue du Capitaine
SAV                          Hydraulique                    Georges Madon
Actualités                   Carrosserie industrielle       ZAC La Croix Blandin
Mentions légales             Tous nos produits              51100 REIMS

                                                            (+33) (0)3.26.79.00.50
                                                            contactsite@senergy.fr
```

---

## 6. Page-by-Page Content Specification

---

### 6.1 Home Page (`/`)

**Purpose:** First impression, convey expertise, surface key product categories, reassure with trust signals.

#### Sections (in order):

**A. Hero**
- Full-width banner with a high-quality industrial photograph (suggest: crane with grapple, or radio control unit in industrial setting)
- Overlay: dark semi-transparent gradient left-to-right
- Headline: `Spécialiste secteur levage et manutention`
- Subheading: `Depuis plus de 30 ans, au service de l'industrie, du BTP et de l'agriculture.`
- Primary CTA button: `Découvrir nos produits →` → links to `/produits/`
- Secondary CTA: `Nous contacter` → links to `/contact/`

**B. Three Division Cards**
- Three equal-width cards in a row, with icons or category photos:
  1. **Division Electronique** — Radiocommandes IMET, capteurs, cartes électroniques. `→ Voir les produits`
  2. **Division Hydraulique** — Treuils, réducteurs, centrales hydrauliques. `→ Voir les produits`
  3. **Division Carrosserie Industrielle** — Grappins, pinces, bennes, lève-palettes. `→ Voir les produits`

**C. Trust Signals / Stats Bar**
- Horizontal band (dark background), 4 stat pills:
  - `30+ ans` d'expérience
  - `Livraison 24/48h` sur le territoire national
  - `Garantie 12 mois` sur tous les équipements
  - `Stock important` pour limiter les délais

**D. About Snippet**
- Two-column layout: text left, image right (or reverse on mobile stack)
- Text: abbreviated version of the company description
- Sub-points: ✓ Industrie  ✓ Agriculture  ✓ BTP
- AXA insurance partnership mention
- CTA: `En savoir plus sur Senergy →` → `/societe/`

**E. Partner Brands**
- Section title: `Nos marques partenaires`
- Horizontal logo bar (grayscale default, colored on hover):
  - IMET logo
  - Dinamic Oil logo
  - BPE logo
  - Sistematica logo
  - Oil Sistem / Bosch logo
  - DEMAC logo
  - OESSE logo

**F. Latest News Teaser** (if ≥ 1 article exists)
- Section title: `Actualités`
- Up to 3 news cards (image + date + title + excerpt + link)
- CTA: `Toutes les actualités →` → `/actualites/`

**G. Contact CTA Band**
- Full-width dark section
- Text: `Une question ? Contactez nos équipes.`
- Two CTA buttons: `Nous appeler` (tel: link) and `Nous écrire` (mailto: or → /contact/)

---

### 6.2 Société / À propos (`/societe/`)

**Purpose:** Build trust and credibility.

#### Sections:

**A. Page Hero**
- Small hero banner (half-height vs homepage hero)
- Title: `À propos de Senergy`
- Breadcrumb: `Accueil / Société`

**B. Company Story**
- Full text from existing site (see §1.4)
- Highlight boxes for the 3 divisions

**C. Key Strengths** (icon + title + description grid)
- 30+ ans d'expérience dans le levage et la manutention
- Importateur officiel IMET depuis 1997
- Partenaire Dinamic Oil depuis 1991
- Partenaire BPE depuis plus de 30 ans
- Livraison 24 / 48h nationale
- Assurance RC partenaire AXA

**D. Secteurs d'activité** (icon cards)
- Industrie
- BTP (Bâtiment et Travaux Publics)
- Agriculture
- Machines mobiles

**E. Partner Logos** (same as homepage)

---

### 6.3 Tous nos produits (`/produits/`)

**Purpose:** Top-level product catalogue hub. Users land here to browse or search.

#### Sections:

**A. Page Hero**
- Title: `Nos produits`
- Short description: `Retrouvez l'ensemble de notre catalogue — électronique, hydraulique et carrosserie industrielle.`

**B. Division Cards (3 large cards)**
Each card contains:
- Division photograph (industrial)
- Division name
- 3-4 bullet point product highlights
- `Explorer la division →` button

**C. Product Search / Filter Bar**
- Text search input: `Rechercher un produit…`
- Filter buttons by division: Tous / Electronique / Hydraulique / Carrosserie
- Product cards grid (filterable)

**D. All Products Grid**
Product cards display: thumbnail image, product/category name, division tag, short description, link.
All 38 product/category pages are represented here.

---

### 6.4 Division: Electronique (`/produits/electronique/`)

**Intro text (from site):**
> Senergy vous propose un large choix de capteurs, cartes électroniques ainsi que des radiocommandes de la marque IMET et Sistematica.

**Sub-sections:**

1. **Radiocommandes IMET** — leading to IMET overview page
2. **Capteurs et cartes électroniques BPE** — leading to BPE page
3. **Radiocommandes Sistematica** — leading to Sistematica page

**Featured products listed:**
- Carte électronique LLD150I
- M880 WAVE2 L
- M880 ZEUS2 M6
- Détecteur de devers
- Carte électronique LLD300M82

---

### 6.5 Radiocommandes IMET (`/produits/electronique/radiocommandes-imet/`)

**Introduction text:**
> Depuis 1988, IMET est l'une des entreprises pionnières dans la conception et la réalisation de radiocommandes industrielles.
>
> Importateur français de IMET depuis 1997, Senergy vous propose une gamme complète de radiocommandes industrielles à destination de multiples applications :
> - Engins mobiles : Grues auxiliaires, Grues à tour, Grues mobiles, Nacelles élévatrices, Pompes à béton, machines de forage, tunneliers, Hydrocureurs, etc.
> - Machines industrielles : Ponts roulants, Potences, Convoyeurs, etc.
> - Robots de tous genres : Tondeuses, machines autonomes, etc.
> - Machines agricoles : Dépailleuses, Récolteuses de fruits, etc.
> - Toute application nécessitant une commande à distance en toute sécurité

**Contact:** José CHAROY — jcharoy@senergy.fr

**Product Cards (all 10 + 1 kit):**

| Model | Description |
|---|---|
| WAVE2 | Radiocommandes à boutons poussoirs polyvalentes à double cran avec ou sans arrêt d'urgence. Variants: S/L, S6/S8/L10/L12 |
| ZEUS2 | Radiocommandes ergonomiques et fonctionnelles. Variants: B2, M6, NJ |
| THOR2 | Radiocommandes pour grues hydrauliques pouvant accueillir jusqu'à 9 joysticks mono-axiaux. Variants: B3, M8, X |
| ARES2 | Radiocommandes satisfaisant toutes les applications demandeuses d'une quantité limitée de fonctions. Variants: E, C |
| ZED | Radiocommandes adaptées à tout type de machine. Synthèse des meilleures caractéristiques ergonomiques et fonctionnelles. Variants: B, NJ |
| KRON | Conçu pour les grues auxiliaires à 4 et 5 fonctions. |
| RAY | (contact for details) |
| G4 S | (contact for details) |
| MODIN | (contact for details) |
| AXT | Radiocommande conçue exclusivement pour les treuils forestiers. |
| Kit Hydra System | (contact for details) |

---

### 6.6 Capteurs & Cartes BPE (`/produits/electronique/capteurs-cartes-bpe/`)

**Introduction text:**
> Partenaire de SENERGY depuis plus de 30 ans, BPE est spécialisé dans les systèmes électroniques de sécurité et de contrôle, limitation de charge, limitation de moment, limitation de déport destinés à la grue, nacelle élévatrice et tout autre domaine nécessitant de la sécurité.

**Contact:** David VALLERY — dvallery@senergy.fr

**Sub-pages:**
- Capteurs (`/capteurs/`)
- Cartes électroniques (`/cartes-electroniques/`)

---

### 6.7 Radiocommandes Sistematica (`/produits/electronique/radiocommandes-sistematica/`)

**Introduction text:**
> Depuis 1987, Sistematica propose une large gamme de radiocommandes industrielles personnalisables pouvant satisfaire tous les besoins et toutes les applications.
> Nous contacter pour toute demande.

**Contacts:** José CHAROY / David VALLERY

---

### 6.8 Division: Hydraulique (`/produits/hydraulique/`)

**Introduction text:**
> SENERGY, de par son expérience de plus de trente ans, est spécialisée dans toute une gamme de produits hydrauliques (Treuils, Réducteurs, Moteurs, Centrales, Electrovalves, Valves, etc.).
>
> Les principaux composants hydrauliques sont les suivants : Treuils hydrauliques de levage, Treuils hydrauliques de halage et treuils électriques pour grue à tour, Réducteurs planétaires pour treuils sur mesure, Réducteurs planétaires, Centrales hydrauliques.

---

### 6.9 Treuils hydrauliques de levage (`/produits/hydraulique/treuils/treuils-hydrauliques-levage/`)

**Introduction:**
> Découvrez tous nos modèles de treuils hydrauliques de levage. Vous pouvez également faire une recherche par force de levage.

**Contact:** David VALLERY — dvallery@senergy.fr

**Product series with data table:**

| Série | Models | Force de levage (daN) |
|---|---|---|
| Série NP | NP05, NP08, NP10, NP12, NP A18, NP A19 | 500 – 1 650 |
| Série A | A18, A24, A30, A44, A55, A60, A62-3/4, A80, A81-5/6, A120-4, A150-5 | 816 – 6 803 |
| Série P | P6, P6/E, P9, P9/E, P15, P15/E | 750 – 2 500 |
| Série S | S15, S19, S20, S25, S27, S30/2, S35/2, S45/2, S45V/2 | up to 5 750 |
| Série SE | SE20/3, SE25/3, SE27/3, SE30, SE35, SE45, SE45V (+ V variants) | up to 5 770 |
| Série SRD | SRD A60 through SRD G230 | 8 000 – 29 300 |
| Série CW | CW08, CW12, CW13, CW13R, CW16, CW16R, CW20, CW20R | 1 010 – 2 600 |

*Each model has a downloadable "Fiche Commerciale" PDF linked.*

---

### 6.10 Autres Treuils (`/produits/hydraulique/treuils/autres-treuils/`)

**Treuils hydrauliques de halage — Série T:**

| Model | Force (daN) | Vitesse (m/min) |
|---|---|---|
| T27 IN | 2 700 | — |
| T36 IN | 3 600 | — |
| T46 IN | 4 600 | 8.5 |
| T60 | 6 000 | 6.5 |
| T100 | 10 000 | — |
| T200 | 20 000 | — |
| T300 | 30 000 | 4.5 |

**Treuils électriques pour grue à tour:**
> Cette gamme présente quelques exemples de treuils à entraînement électrique conçus pour des applications de grues à tour. Chaque entraînement de levage ou de traction est développé selon les spécifications du client. La série se caractérise par des performances élevées par rapport à des dimensions compactes.

---

### 6.11 Réducteurs, Moto-réducteurs & Moteurs hydrauliques (`/produits/hydraulique/reducteurs/`)

**Introduction:**
> La gamme de réducteurs planétaires s'étend de **1 000 Nm à 2 500 000 Nm**. De conception à hautes performances et compacte, ces réducteurs permettent de couvrir une très large gamme d'applications mobiles, forage, marines, minières et industrielles. La grande disponibilité de solutions personnalisées rend cette gamme de réducteurs adaptable à tout type d'application où une transmission mécanique compacte et fiable est nécessaire.

**Product categories:**

- **Série RE-GB** — Réducteurs épicycloïdaux coaxiaux et orthogonaux avec montage à bride, sur pieds ou pendulaires, pour applications mobiles et industrielles. Couple nominal en sortie de 100 daNm à 130 000 daNm.
- **Moto-réducteurs et réducteurs de roues** — Réducteurs et moto-réducteurs épicycloïdaux à carcasse tournante pour la translation des engins sur pneus ou chenillés. Disponibles avec frein de stationnement, système mécanique de décrabotage, valve d'équilibrage. Couple transmissible de 80 daNm à 370 daNm, charge radiale admise jusqu'à 8 000 daN.
- **Moto réducteurs complets série MR et MD** — sur demande
- **Moteurs hydrauliques et à pistons radiaux** — sur demande

**Contact:** David VALLERY — dvallery@senergy.fr
**Partner:** Dinamic Oil (partner since 1991)

---

### 6.12 Oil Sistem / Bosch (`/produits/hydraulique/oil-sistem-bosch/`)

**Contact:** David VALLERY + Benoît LALLEMENT

**Centrales hydrauliques series:**

| Série | Pompe | Puissance moteur |
|---|---|---|
| Série M-MR | Pompe engrenage Groupe 05, version réversible | 0.09 kW – 2.2 kW |
| Série K-KE | Pompe engrenage Groupe 1, blocs modulaires | 0.18 kW – 4 kW |
| Série Z-ZL | Pompe engrenage Groupe 2, flasque SAE | 1.1 kW – 7.5 kW |
| Série IM | Moteur immergé alternatif, pompe engrenage 1.1 cc à 22.8 cc | 0.55 kW – 7.5 kW |

**Valves électriques:**
> Pour le contrôle directionnel des fluides en version 2, 3, 4 voies et plusieurs positions. Débit jusqu'à 150 l/min et pression supérieure à 350 bar.

---

### 6.13 Composants divers (`/produits/hydraulique/composants-divers/`)

> Pour toute demande de composants hydrauliques pour de très nombreuses applications, nous trouverons une solution — contactez-nous!

**Contacts:** David VALLERY / José CHAROY / Emeric BAUDOUIN

---

### 6.14 Dinamic Oil (`/produits/hydraulique/dinamic-oil/`)

> Partenaire de Dinamic Oil depuis 1991, Senergy développe sur le marché français toute la gamme de moteurs hydrauliques, réducteurs et moto-réducteurs planétaires.

**Contact:** David VALLERY

---

### 6.15 Division: Carrosserie Industrielle (`/produits/carrosserie-industrielle/`)

**Introduction (from site):**
> Senergy vous propose une large gamme de rotators, crochets, et accessoires de préhension (grappins à ferraille, grappins spéciaux, pinces à bois, pinces à parpaings, bennes preneuses, lève-palettes, etc.).

**Contacts:** David VALLERY + José CHAROY

**Sub-categories:**

| Product | Description |
|---|---|
| Rotators et crochets | Suspensions SR, Rotators série SR, Crochets et dispositifs d'accroche rapide, Pack Crochet Hydraulique, Pack Rotators |
| Lève-palettes et lève-palettes hydrauliques | LPS2000, LPS2014, LPS2750, LPS3250 — capacité 1 à 3 tonnes, options auto-centrage, fourche 1150mm |
| Bennes preneuses | Série BPS (150–650L), BPSU-R (570–1220L), BRS (640–1200L), BPV (150–550L), BPVL (125–275L), HPX (sans vérin) |
| Pinces à bois | Série GBS — charge 600 à 8000 kg |
| Pinces à parpaings | (contact for details) |
| Grappins à ferraille | Série GFS (100–600L), Série GVS (150–1000L) |
| Grappins spéciaux | (contact for details) |
| Tarières | (contact for details — technical sheet available) |
| Enrouleurs pour engins mobiles | DEMAC — AG/F 270–800, AG Standard 296–1000, AG Compact 200–400, A4 Compact 230–340, A4 296–800; hydrauliques et électriques 1-6 flexibles, 2-36 fils, 2-50m |
| Stabilisateurs et plaques | Stabilisateurs fixes et mécaniques, Plaques et supports |
| Echangeurs refroidisseurs | Echangeurs Air/Huile Hautes Performances — standards et sur mesure depuis 30+ ans |
| Outils divers | (contact for details) |

---

### 6.16 SAV (`/sav/`)

**Introduction text:**
> Vous rencontrez un problème sur un produit acheté chez nous ? Notre responsable SAV, **Benoît LALLEMENT**, et son équipe sont là pour vous aider.
>
> Contactez-nous par téléphone au (+33)(0)3.26.79.00.50 ou par mail : blallement@senergy.fr ou contactsite@senergy.fr

**Section: Des réponses précises**
> Notre SAV SENERGY effectue les diagnostics, dépannages et réparations sur tous les produits commercialisés par SENERGY, dans un délai le plus court possible : Le service client est notre marque de fabrique.
>
> Notre SAV SENERGY est aussi spécialisé dans le dépannage des radiocommandes IMET et peut aussi intervenir sur toute autre marque de radiocommandes.
>
> Pour un produit SENERGY ou un autre produit, nous saurons être réactifs et vous proposer une solution, alors n'hésitez pas à nous contacter dès à présent.

**Section: Garantie**
> Senergy couvre vos équipements pendant **12 mois** de garantie.

**New SAV page sections to add on the new site:**
- Contact direct form for SAV requests (separate from the general contact form — with fields: product type, issue description, serial number, urgency)
- Clear list of what SAV covers
- Response time commitment

---

### 6.17 Actualités / News (`/actualites/`)

**Existing article:**
> **SALON INTERNATIONAL DU DEPANNAGE à REIMS 2023** — du 23 au 25 mai 2023.
> Venez nous rencontrer sur notre stand 22, Hall 1, pour découvrir toute notre gamme de radiocommandes industrielles.

**New site should:**
- Use a blog/news pattern with featured image, date, excerpt, and full article
- Allow for category tags: Salons / Nouveaux produits / Actualité entreprise
- Show empty state gracefully when no articles

---

### 6.18 Contact (`/contact/`)

See §10 for detailed contact page specification.

---

### 6.19 Mentions légales (`/mentions-legales/`)

Standard French legal notices page. Content to be provided by client.

---

## 7. Design System

### 7.1 Color Palette

The existing site's dominant colors are extracted from:
- Logo background: dark navy blue
- Navigation background: `#1c4573` (deep navy)
- Secondary navy: `#235787`
- Accent/highlight: from existing site variables and IMET inspiration → orange

**Recommended Design Tokens:**

```css
/* Primary Colors */
--color-navy-dark:     #0c2340;   /* Header, footer backgrounds */
--color-navy:          #1c4573;   /* Primary brand navy (from existing site) */
--color-navy-mid:      #235787;   /* Hover states, secondary elements */

/* Accent */
--color-orange:        #e85d1a;   /* CTAs, active nav, hover highlights, badges */
--color-orange-light:  #f0722f;   /* CTA hover state */

/* Neutral */
--color-white:         #ffffff;
--color-off-white:     #f5f6f8;   /* Section backgrounds alternating */
--color-light-gray:    #eaecee;   /* Borders, dividers */
--color-mid-gray:      #6d6d6d;   /* Body text secondary */
--color-dark-gray:     #2b2b2b;   /* Primary body text */
--color-black:         #111111;   /* Headings */

/* Status / UI */
--color-success:       #2e7d32;
--color-warning:       #f9a825;
--color-error:         #c62828;
```

**Usage Guidelines:**
- Navy dark: header background, footer, hero overlay
- Navy: navigation active states, section headings
- Orange: all CTA buttons, hover states, icon accents, tags/badges
- White: card backgrounds, content areas
- Off-white: alternating section backgrounds
- Mid-gray: secondary text, meta information (dates, tags)

### 7.2 Typography

**Font stack recommendation (Google Fonts — free, performant):**

```css
/* Headings */
font-family: 'Barlow', 'Inter', 'Arial', sans-serif;
/* Barlow: industrial, modern, slightly condensed — ideal for B2B industrial */

/* Body */
font-family: 'Inter', 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
/* Inter: exceptional readability, web-optimized, neutral */
```

**Type Scale:**

| Token | Size | Weight | Usage |
|---|---|---|---|
| `--text-xs` | 0.75rem (12px) | 400 | Labels, legal, meta |
| `--text-sm` | 0.875rem (14px) | 400 | Secondary body, captions |
| `--text-base` | 1rem (16px) | 400 | Body text |
| `--text-lg` | 1.125rem (18px) | 400 / 500 | Lead paragraphs |
| `--text-xl` | 1.25rem (20px) | 600 | Card titles, sub-headings |
| `--text-2xl` | 1.5rem (24px) | 700 | Section headings (H3) |
| `--text-3xl` | 1.875rem (30px) | 700 | Page headings (H2) |
| `--text-4xl` | 2.25rem (36px) | 800 | Hero sub-headings (H1 secondary) |
| `--text-5xl` | 3rem (48px) | 800 | Hero headings (H1) |

### 7.3 Spacing System

8px base grid:

```css
--space-1:   0.25rem  (4px)
--space-2:   0.5rem   (8px)
--space-3:   0.75rem  (12px)
--space-4:   1rem     (16px)
--space-6:   1.5rem   (24px)
--space-8:   2rem     (32px)
--space-12:  3rem     (48px)
--space-16:  4rem     (64px)
--space-24:  6rem     (96px)
--space-32:  8rem     (128px)
```

### 7.4 Border Radius

```css
--radius-sm:  4px
--radius-md:  8px
--radius-lg:  12px
--radius-xl:  16px
--radius-full: 9999px  /* for pills/badges */
```

### 7.5 Shadows

```css
--shadow-sm:  0 1px 3px rgba(0,0,0,0.08);
--shadow-md:  0 4px 12px rgba(0,0,0,0.10);
--shadow-lg:  0 8px 24px rgba(0,0,0,0.14);
--shadow-xl:  0 16px 48px rgba(0,0,0,0.18);
```

### 7.6 Breakpoints

```css
--bp-sm:   640px
--bp-md:   768px
--bp-lg:   1024px
--bp-xl:   1280px
--bp-2xl:  1536px
```

---

## 8. Component Library

### 8.1 Global Header (`<Header>`)

```
[SENERGY Logo]  [Nav Links]  [FR|EN toggle]  [Nous appeler CTA]
```

- Sticky/fixed on scroll
- Background: `--color-navy-dark` on load; remains dark
- Logo: SVG or PNG, white version for dark header
- Nav links: white text, orange underline/background on active/hover
- Language toggle: small flag icons + text (FR / EN)
- "Nous appeler" button: orange background, white text, phone icon
- Mobile: collapses to hamburger at `--bp-md`

### 8.2 Mobile Menu Drawer (`<MobileMenu>`)

- Full-height slide-in from left
- Dark navy background
- Logo at top
- Accordion items for Produits (sub-categories expand inline)
- Close (X) button top-right
- Language switcher at bottom
- Phone number + email visible

### 8.3 Hero Banner (`<HeroBanner>`)

Props: `title`, `subtitle`, `ctaPrimary`, `ctaSecondary`, `backgroundImage`

```
[Background image]
[Dark gradient overlay (left 60%)]
[Badge: "30+ ans d'expérience"]
[H1: Title]
[P: Subtitle]
[CTA Primary Button]  [CTA Secondary (ghost) Button]
```

- Min-height: 600px on desktop, 400px on mobile
- Image: use `object-fit: cover`

### 8.4 Page Hero (inner pages) (`<PageHero>`)

- Smaller banner (~240px height)
- Title + breadcrumb
- Subtle dark overlay on industrial background image
- Background can be a shared generic industrial photo or per-page

### 8.5 Division Card (`<DivisionCard>`)

```
[Icon or category image — 60px height]
[Division Title]
[Short description — 2 lines max]
[Product count or bullet list — 3 items]
[CTA Link: "Explorer →"]
```

- White background, `--shadow-md`
- Orange top-border accent (4px)
- Hover: lift effect (`transform: translateY(-4px)`)

### 8.6 Product Card (`<ProductCard>`)

```
[Product image — 16:9 or 4:3 ratio]
[Category tag (orange pill)]
[Product Name (H3)]
[Short description — 2 lines max]
[Technical specs snippet — optional]
[Link: "En savoir plus →"]
```

- White background, border radius, shadow
- Image placeholder: industrial gray gradient with Senergy watermark

### 8.7 Stats Bar (`<StatsBar>`)

```
[Value + Label]  |  [Value + Label]  |  [Value + Label]  |  [Value + Label]
```

- Dark navy background
- Large bold value (orange), smaller label (white/gray)

### 8.8 Partner Logos Strip (`<PartnersStrip>`)

- Horizontal scrollable strip on mobile, centered flex row on desktop
- Logos: grayscale default, full-color on hover
- Section heading: "Nos marques partenaires"

### 8.9 News Card (`<NewsCard>`)

```
[Featured image — 16:9]
[Category tag]
[Date]
[Title]
[Excerpt — 2-3 lines]
[Read more →]
```

### 8.10 Contact Form (`<ContactForm>`)

Fields:
- Nom *
- Prénom *
- Société
- Adresse
- Email *
- Téléphone
- Message *
- [Submit button: "Envoyer le message →"]

Implementation: HTML5 form with validation + static form backend (Netlify Forms, Formspree, or EmailJS).

### 8.11 SAV Contact Form (`<SAVContactForm>`)

Additional fields beyond base contact form:
- Type de produit (select: Radiocommande IMET / Hydraulique / Carrosserie / Autre)
- Description du problème *
- Numéro de série (optional)
- Urgence (select: Normal / Urgent / Très urgent)

### 8.12 Footer (`<Footer>`)

Four-column layout:
1. Logo + tagline + brief description
2. Navigation links
3. Product categories
4. Contact info (address, phone, email, fax)

Bottom bar: Copyright © SENERGY | Mentions légales | Réalisation: [developer]

Dark background (`--color-navy-dark`), white text, orange link hover.

### 8.13 Breadcrumb (`<Breadcrumb>`)

```
Accueil > Produits > Electronique > Radiocommandes IMET > WAVE2
```

- Small, light-gray text
- Current page: dark text, not linked
- Separator: `>` or `/`

### 8.14 CTA Button (`<Button>`)

Variants:
- `primary`: orange background, white text
- `secondary` (ghost): transparent, orange border, orange text
- `dark`: navy background, white text
- `link`: no background, orange text with arrow

Sizes: `sm`, `md`, `lg`

States: default, hover (lighter/darker), active, disabled, loading

### 8.15 Language Switcher (`<LangSwitcher>`)

```
🇫🇷 FR  |  🇬🇧 EN
```

- Current language: highlighted (orange underline or bold)
- Switches all text content without full page reload (or navigates to `/en/` equivalent)

### 8.16 Technical Data Table (`<TechTable>`)

For products like winches with many models and specs:
- Responsive table with horizontal scroll on mobile
- Sticky first column (model name)
- PDF download button per row
- Sortable by force/capacity column

### 8.17 PDF Download Button (`<PDFDownload>`)

```
[📄 icon] Télécharger la fiche technique — [Model Name].pdf
```

- Orange outlined button
- Opens in new tab

---

## 9. Multilanguage Requirements (FR + EN)

### 9.1 Approach

The site uses **static i18n** — all strings are defined in JSON translation files. No runtime server required.

```
/locales/
  fr.json       ← French strings (primary)
  en.json       ← English strings
```

All UI strings, navigation labels, page meta, form labels, CTA text, footer text are in these files.

### 9.2 URL Structure

- French (default): `/societe/`, `/produits/`, `/sav/`, `/actualites/`, `/contact/`
- English: `/en/about/`, `/en/products/`, `/en/after-sales-service/`, `/en/news/`, `/en/contact/`

French is served at the root (`/`). English lives under `/en/`.

### 9.3 Content Pages Translation

All product pages must have FR and EN versions with translated:
- Page title and H1
- Introduction paragraphs
- Section headings
- Product descriptions
- CTA button labels

Technical product model names (WAVE2, THOR2, etc.) remain the same in both languages. Technical specifications (force values, dimensions) remain the same but units stay metric.

### 9.4 Language Switcher Behavior

- Language switcher in header (top-right, always visible)
- On language switch, user navigates to the equivalent page in the other language
- Current language preference stored in `localStorage`
- `<html lang="fr">` / `<html lang="en">` set correctly per page
- `<link rel="alternate" hreflang="fr" href="…">` and `<link rel="alternate" hreflang="en" href="…">` in `<head>` for SEO

### 9.5 Translation Completeness Requirements

| Content Type | FR | EN |
|---|---|---|
| Navigation labels | Required | Required |
| Homepage sections | Required | Required |
| Société page | Required | Required |
| SAV page | Required | Required |
| All product pages (38) | Required | Required |
| Contact page | Required | Required |
| Form labels & placeholders | Required | Required |
| Error messages | Required | Required |
| Footer | Required | Required |
| Mentions légales | Required | Recommended (Legal Notice) |
| News articles | Required | Optional (EN translation per article is optional) |

### 9.6 Meta / SEO per Language

Each page must have:
- `<title>` in the page language
- `<meta name="description">` in the page language
- `<meta property="og:locale">` set to `fr_FR` or `en_GB`
- Canonical URL pointing to the primary language version

---

## 10. Contact Page Requirements

### 10.1 Page Structure (`/contact/`)

**A. Page Hero**
- Title: "Nous contacter" / "Contact us"
- Breadcrumb

**B. Two-Column Layout**

Left column — Contact Information:
```
SENERGY
6 Rue du Capitaine Georges Madon
ZAC La Croix Blandin
51100 REIMS — France

Téléphone : (+33) (0)3.26.79.00.50
Fax        : (+33) (0)3.26.79.00.51
Email      : contactsite@senergy.fr
```

Right column — Contact Form:
- Fields: Nom*, Prénom*, Société, Adresse, Email*, Téléphone, Message*
- GDPR consent checkbox: "J'accepte que mes données soient utilisées pour traiter ma demande."
- Submit button

**C. Team Contact Grid**
Visually present the sales team with their direct emails:

| Domaine | Contact | Email |
|---|---|---|
| SAV | Benoît LALLEMENT | blallement@senergy.fr |
| Commercial Hydraulique / Carrosserie | David VALLERY | dvallery@senergy.fr |
| Commercial Electronique / Carrosserie | José CHAROY | jcharoy@senergy.fr |
| Composants hydrauliques | Emeric BAUDOUIN | ebaudouin@senergy.fr |

**D. Map**
- Embedded Google Maps iframe centered on ZAC La Croix Blandin, Reims
- "Obtenir l'itinéraire" link opens Google Maps in new tab
- Fallback static map image if JS/iframe is blocked

**E. Opening Hours** *(content to confirm with client)*
- To be added once confirmed: e.g. Lundi-Vendredi: 8h-12h / 13h-17h

### 10.2 Form Backend Options

Since the site is static, use one of:
- **Netlify Forms** (if hosting on Netlify) — zero-config, free tier
- **Formspree** — free for 50 submissions/month, easy integration
- **EmailJS** — client-side email sending via EmailJS API (no backend)

### 10.3 GDPR Compliance

- Privacy notice visible near form
- Consent checkbox for data processing (non-pre-checked)
- Link to Mentions légales / Politique de confidentialité
- No data sent without consent

---

## 11. Technical Stack Recommendation

### 11.1 Recommended Stack: Next.js (Static Export)

**Primary recommendation:** Next.js 14+ with `output: 'export'` for 100% static HTML generation.

**Rationale:**
- Full i18n routing built-in (`next-i18next` or App Router i18n)
- Static site generation (SSG) with `getStaticProps` / `generateStaticParams`
- React component model maps perfectly to the component library defined in §8
- Image optimization (`next/image`) critical for product catalog images
- Excellent performance out of the box (code splitting, prefetching)
- Large ecosystem, easy for future developers to maintain
- Can be deployed to Vercel (free tier), Netlify, GitHub Pages, or any CDN
- TypeScript support for robust development

**Tech stack details:**

```
Framework:     Next.js 14+ (App Router, static export)
Language:      TypeScript
Styling:       Tailwind CSS v4  (utility-first, matches design tokens)
i18n:          next-intl  (file-based, FR + EN JSON locale files)
Forms:         react-hook-form + Formspree or Netlify Forms
Icons:         Lucide React or Phosphor Icons
Fonts:         next/font/google (Barlow + Inter, self-hosted for GDPR)
Animations:    Framer Motion (subtle entrance animations)
SEO:           next-seo or Next.js metadata API
Analytics:     Plausible (privacy-first) or Google Analytics 4
Linting:       ESLint + Prettier
Deployment:    Vercel (recommended) or Netlify
```

**Project structure:**
```
/app
  /[locale]
    /page.tsx               → Home
    /societe/page.tsx
    /produits
      /page.tsx             → All products
      /electronique
        /page.tsx
        /radiocommandes-imet
          /page.tsx
          /wave2/page.tsx
          ...
      /hydraulique/...
      /carrosserie-industrielle/...
    /sav/page.tsx
    /actualites
      /page.tsx
      /[slug]/page.tsx
    /contact/page.tsx
    /mentions-legales/page.tsx
/components
  /ui          → Button, Card, Badge, etc.
  /layout      → Header, Footer, MobileMenu
  /sections    → Hero, StatsBar, PartnersStrip, etc.
  /products    → ProductCard, TechTable, PDFDownload
/content
  /products    → JSON files per product (or MDX)
  /news        → MDX files for news articles
/locales
  /fr.json
  /en.json
/public
  /images
  /logos
  /pdfs        → technical datasheets
```

### 11.2 Alternative Stack: Plain HTML/CSS/JS

If the client requires minimal dependencies or a contractor-free approach:

```
HTML5 + CSS3 (Custom Properties) + Vanilla JS
i18n:       Custom JS locale switcher (JSON files, DOM replacement)
Forms:      Formspree
Deployment: GitHub Pages, Netlify Drop, or any web host
```

**Pros:** Zero dependencies, simpler for non-JS developers, maximum portability.
**Cons:** No component reuse, verbose HTML, manual i18n is error-prone, no image optimization, harder to maintain as content grows.

**Verdict:** Only recommended if the site will be maintained by someone without React experience. For a 38-page bilingual product catalog, Next.js is significantly more maintainable.

### 11.3 Hosting Recommendation

| Option | Cost | CDN | CI/CD | Recommendation |
|---|---|---|---|---|
| **Vercel** | Free (hobby) / $20/mo (pro) | Global edge | GitHub integration | **Best for Next.js** |
| Netlify | Free / $19/mo | Global CDN | GitHub integration | Good alternative |
| GitHub Pages | Free | Basic CDN | GitHub Actions | Budget option |
| OVH / Ionos | €3-5/mo | France-based | Manual FTP | Client may already have account |

**SSL:** Vercel/Netlify both provide automatic Let's Encrypt SSL — resolves the current TLS cert issue on senergy.fr.

**Domain:** Client owns senergy.fr. DNS CNAME/A records will need to be pointed to the new hosting provider. Recommend migrating away from whatever server currently serves the invalid certificate.

---

## 12. SEO & Accessibility Requirements

### 12.1 SEO

- Unique `<title>` and `<meta description>` per page (template: `[Page Name] — SENERGY | Levage et Manutention Reims`)
- Semantic HTML: `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`
- H1 unique per page, H2-H6 hierarchy respected
- All images have descriptive `alt` text
- `robots.txt` allowing full crawl
- `sitemap.xml` auto-generated (both FR and EN pages)
- Structured data (JSON-LD):
  - `Organization` with address, phone, email
  - `BreadcrumbList` on all inner pages
  - `Product` schema on individual product pages
- Open Graph tags: `og:title`, `og:description`, `og:image` per page
- Twitter Card meta
- Canonical URLs to prevent duplicate content between FR/EN
- `hreflang` alternate links

### 12.2 Performance

- Target: Lighthouse score ≥ 90 on all four metrics
- Images: WebP format, `next/image` with responsive sizes, lazy loading
- Fonts: self-hosted (avoid external Google Fonts CDN for GDPR + performance)
- No large JS bundles: code split per route
- CSS: Tailwind purges unused styles in production
- No jQuery or large plugin libraries

### 12.3 Accessibility (WCAG 2.1 AA)

- Color contrast ratio ≥ 4.5:1 for normal text (orange on white must be verified — adjust shade if needed)
- Focus indicators visible on all interactive elements
- `aria-label` on icon-only buttons
- `aria-expanded` on mobile menu toggle
- Skip to main content link
- Form fields with associated `<label>` elements
- Table `<th scope>` on product specification tables
- PDF links labeled with file name and size

---

## 13. Assets Inventory

### 13.1 Images from Existing Site (to re-use or replace)

| File / URL | Description | Status |
|---|---|---|
| `wp-content/uploads/2021/05/cropped-cropped-Logo-1.png` | SENERGY logo | Re-use (get SVG from client) |
| `wp-content/uploads/2021/05/IMET-logo.png` | IMET brand logo | Re-use |
| `wp-content/uploads/2021/07/bpe-logo-1.jpg` | BPE brand logo | Re-use |
| `wp-content/uploads/2021/05/image-300x67.png` | Dinamic Oil logo | Re-use |
| `wp-content/uploads/2021/05/oesse-1-300x95.jpg` | OESSE brand logo | Re-use |
| `wp-content/uploads/2021/05/logo-sistematica-e1624435073869.png` | Sistematica logo | Re-use |
| `wp-content/uploads/2021/05/DEMAC-SRL-1x1-1-300x300.jpg` | DEMAC brand logo | Re-use |
| `slider/cache/Grappin-a-ferraille-grappins-speciaux-*.png` | Hero slider — grappins | Replace with HD |
| `slider/cache/1-3.png` through `4-2.png`, `BP.png` | Hero slider images | Replace with HD |
| `wp-content/uploads/2023/03/WAVE2_S8-1024x1024.jpg` | WAVE2 S8 product image | Re-use |
| `wp-content/uploads/2023/03/WAVE2_S6-1024x1024.jpg` | WAVE2 S6 product image | Re-use |
| `wp-content/uploads/2023/03/WAVE2-S6DM-1024x796.jpg` | WAVE2 S6 DM product image | Re-use |
| `wp-content/uploads/2023/03/WAVE2-L12-1024x796.jpg` | WAVE2 L12 product image | Re-use |
| `wp-content/uploads/2023/03/WAVE2_L10-1024x1024.jpg` | WAVE2 L10 product image | Re-use |
| `wp-content/uploads/2023/03/WAVE2_L10_DM-1024x1024.jpg` | WAVE2 L10 DM product image | Re-use |
| IMET product images (M880 series) | All 10 IMET models | Re-use via imet.eu or request from IMET |
| `images/produits/oilsistem/oilmmr2.jpg` etc. | Oil Sistem centrales photos | Re-use (old server) |

### 13.2 Missing Assets (to request from client)

- SENERGY logo in SVG format (vector, for crisp rendering at all sizes)
- High-resolution hero photography (industrial setting, crane, grapple, workshop)
- Photos for each product category (Hydraulique, Carrosserie, Electronique divisions)
- Individual product photos for Carrosserie products (grappins, pinces, bennes, etc.)
- Technical datasheet PDFs (all referenced "Fiche Commerciale" PDFs)
- Company interior/team photo for the Société page

### 13.3 IMET Product Images Available

All IMET product images are available on https://www.imetradioremotecontrol.com/ — verify licensing with IMET/client before use:
- M880 WAVE2 S-2, M880 ZEUS2, M880 THOR2, M880 ARES2, M880 ZED, M880 KRON, M880 RAY, M880 G4 S, M880 MODIN, M880 AXT, Kit Hydra System

---

## 14. Open Questions for Client

Before development begins, the following must be confirmed:

1. **Logo SVG:** Can you provide the Senergy logo in vector (SVG/AI/EPS) format?
2. **Hero photography:** Do you have professional photos of your products/operations? Or should a stock photo library be used?
3. **Product PDFs:** Please provide all "Fiche Commerciale" and "Fiche Technique" PDFs for upload to the new site.
4. **Missing product content:** Pages for RAY, G4 S, MODIN, Kit Hydra System, Grappins spéciaux, Pinces à parpaings, Tarières, and Outils divers have minimal content. Please provide descriptions.
5. **Opening hours:** What are your business hours for display on the contact page?
6. **Google Maps:** Confirm the exact pin location for ZAC La Croix Blandin (6 Rue du Capitaine Georges Madon, 51100 Reims).
7. **News articles:** Do you have additional news items or press mentions to add?
8. **Social media:** Does Senergy have LinkedIn, Facebook, YouTube or other social profiles? (Not currently on the site.)
9. **Hosting preference:** Do you have an existing hosting account (OVH, Infomaniak, etc.) or should new hosting be set up (Vercel/Netlify recommended)?
10. **Domain DNS access:** Who currently manages the DNS for senergy.fr? Access will be needed to point to the new host and fix the SSL certificate.
11. **Demande de devis workflow:** Should there be a "request a quote" form/page, or is the contact form sufficient?
12. **GDPR / Politique de confidentialité:** Please provide or confirm the full Mentions légales and Privacy Policy text.
13. **Analytics:** Should the new site include analytics tracking? If so, GDPR-compliant consent banner required.
14. **Maintenance model:** Who will update product content and news articles after launch? Should there be a simple CMS (e.g., Contentlayer + GitHub, or a headless CMS like Sanity)?

---

## Appendix A: Full Navigation Tree (French)

```
Accueil
├── Société
├── Produits
│   ├── Electronique
│   │   ├── Radiocommandes IMET
│   │   │   ├── WAVE2
│   │   │   ├── ZEUS2
│   │   │   ├── THOR2
│   │   │   ├── ARES2
│   │   │   ├── ZED
│   │   │   ├── KRON
│   │   │   ├── RAY
│   │   │   ├── G4 S
│   │   │   ├── MODIN
│   │   │   ├── AXT
│   │   │   └── Kit Hydra System
│   │   ├── Capteurs & cartes BPE
│   │   │   ├── Capteurs
│   │   │   └── Cartes électroniques
│   │   └── Radiocommandes Sistematica
│   ├── Hydraulique
│   │   ├── Dinamic Oil
│   │   ├── Treuils
│   │   │   ├── Treuils hydrauliques de levage
│   │   │   └── Autres treuils
│   │   ├── Réducteurs, moto-réducteurs & moteurs hydrauliques
│   │   ├── Oil Sistem / Bosch
│   │   └── Composants divers
│   └── Carrosserie Industrielle
│       ├── Rotators et crochets
│       ├── Lève-palettes
│       ├── Bennes preneuses
│       ├── Pinces à bois
│       ├── Pinces à parpaings
│       ├── Grappins à ferraille
│       ├── Grappins spéciaux
│       ├── Tarières
│       ├── Enrouleurs pour engins mobiles
│       ├── Stabilisateurs et plaques
│       ├── Echangeurs refroidisseurs
│       └── Outils divers
├── SAV
├── Actualités
├── Nous contacter
└── Mentions légales
```

---

## Appendix B: English Navigation Mirror

```
Home
├── About / Our Firm
├── Products
│   ├── Electronics
│   │   ├── IMET Radio Controls
│   │   │   ├── WAVE2
│   │   │   ├── ZEUS2
│   │   │   ├── THOR2
│   │   │   ├── ARES 2
│   │   │   ├── ZED
│   │   │   ├── KRON
│   │   │   ├── RAY
│   │   │   ├── G4 S
│   │   │   ├── MODIN
│   │   │   ├── AXT
│   │   │   └── Hydra System Kit
│   │   ├── BPE Cards and Sensors
│   │   │   ├── Sensors
│   │   │   └── Electronic Cards
│   │   └── Sistematica Radio Controls
│   ├── Hydraulic
│   │   ├── Dinamic Oil
│   │   ├── Winches
│   │   │   ├── Hydraulic Hoisting Winches
│   │   │   └── Other Winches
│   │   ├── Reducers, Motor Reducers & Hydraulic Engines
│   │   ├── Oil Sistem / Bosch
│   │   └── Various Components
│   └── Industrial Equipments
│       ├── Rotators and Hooks
│       ├── Pallet Forks and Hydraulic Pallet Forks
│       ├── Clamshell Buckets
│       ├── Wood Grapples
│       ├── Cinder Block Grapple
│       ├── Scrap Grapple
│       ├── Specific Grapples
│       ├── Augers
│       ├── Hose Reels for Mobile Machines
│       ├── Stabilisers and Plates
│       ├── Exchangers – Coolers
│       └── Various Tools
├── After-Sales Service
├── News
├── Contact us
└── Legal Notice
```

---

## Appendix C: Recommended File Naming Conventions

All image files: lowercase, hyphenated, no spaces
e.g., `wave2-s8-radiocommande-imet.jpg`, `grappin-ferraille-gfs-serie.jpg`

PDF datasheets: `fiche-technique-[model].pdf`
e.g., `fiche-technique-thl-np05.pdf`

Translation keys: `snake_case` in JSON
e.g., `nav.products`, `home.hero.title`, `sav.warranty.description`

---

*End of Specification Document*
*For questions, contact the designer. For content questions, see §14 Open Questions.*
