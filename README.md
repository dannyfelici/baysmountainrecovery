# Bays Mountain Recovery

Website for Bays Mountain Recovery, a 25-bed medical detox and residential addiction treatment center in Kingsport, TN.

- **Domain:** baysmountainrecovery.com
- **Address:** 2000 Greenway Street, Kingsport, TN 37660
- **Phone:** (423) 214-1113
- **Stack:** Astro (static) on Cloudflare Workers, same setup as the GBAC clean-code build
- **Status:** Staging. Every page is `noindex` and `robots.txt` blocks crawlers while `site.staging` is `true` in `src/data/site.ts`.

## Get started

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # build to ./dist
npm run preview   # build, then serve with Wrangler (Workers runtime)
npm run deploy    # build and deploy to Cloudflare Workers
```

## How content works

Page copy comes from the content docs in Google Drive (one doc per URL). Each doc becomes a markdown file in `src/content/pages/`, named after its URL (`/detox/alcohol/` → `detox--alcohol.md`). The frontmatter holds:

| Field | From the doc |
| --- | --- |
| `path` | URL |
| `metaTitle` | Meta Title |
| `metaDescription` | Meta Description |
| `title` | H1 |
| `lede` | First paragraph under the H1 (shown in the hero) |
| `faqs` | The FAQ section (also output as FAQPage schema) |

The interior template (`src/pages/[...slug].astro`) builds the breadcrumb, the "On this page" jumplinks from the H2s, and the FAQ accordion. The homepage (`src/pages/index.astro`) and contact page (`src/pages/contact.astro`) are hand-built from their docs.

## Pages

| URL | Source doc |
| --- | --- |
| `/` | Homepage |
| `/about/` | About |
| `/about/our-team/` | Our Team |
| `/about/facility/` | Facility |
| `/contact/` | Contact |
| `/detox/` | Detox |
| `/detox/alcohol/` | Alcohol Detox |
| `/detox/opioids/` | Opioid Detox |
| `/detox/benzodiazepine/` | Benzodiazepine Detox |
| `/detox/meth/` | Meth Detox |
| `/residential-treatment/` | Residential Treatment |
| `/addiction/` | Addiction |
| `/addiction/alcohol/` | Alcohol Addiction |
| `/addiction/opioids/` | Opioid Addiction |
| `/addiction/heroin/` | Heroin Addiction |
| `/addiction/meth/` | Meth Addiction |
| `/therapies/` | Therapies |

## Before launch

- [x] Contact form is the CTM FormReactor "Contact Form" (set routing in CTM)
- [ ] Add the CTM tracking script (account embed code) to BaseLayout for number swap and source attribution
- [ ] Add staff names, credentials, bios, and headshots to `/about/our-team/`
- [ ] Fill in the "Clinically reviewed by" line on interior pages
- [ ] Replace the Kingsport photos with full-resolution originals and facility photos
- [ ] Add the Privacy Policy and Terms and Conditions pages linked in the footer
- [ ] Add social links to the footer
- [ ] Set `site.staging` to `false` in `src/data/site.ts`
- [ ] Add the custom domain in `wrangler.jsonc`
