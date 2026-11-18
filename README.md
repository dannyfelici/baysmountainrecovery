# Blue Ridge Behavioral Health

Website for Blue Ridge Behavioral Health, a 25-bed inpatient detox and residential substance use treatment center in Kingsport, TN.

- **Domain:** blueridgebhtn.com
- **Address:** 2000 Greenway Street, Kingsport, TN 37660
- **Phone:** 865-272-4000
- **Status:** Pre-launch ("Coming in 2027")
- **Stack:** Astro (static) on Cloudflare Workers, same setup as the GBAC clean-code build

## Get started

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # build to ./dist
npm run preview   # build, then serve with Wrangler (Workers runtime)
npm run deploy    # build and deploy to Cloudflare Workers
```

## Project structure

```
src/
  data/site.ts            Business info (NAP) and navigation — edit here first
  styles/global.css       Design tokens (brand colors, type, spacing)
  layouts/BaseLayout.astro  <head>, SEO meta, canonical, LocalBusiness schema
  components/             Header, Footer, PageStub
  pages/                  One file per URL
public/
  images/                 Logo and site imagery
  robots.txt
wrangler.jsonc            Cloudflare Workers config
```

## Pages

| URL | Status |
| --- | --- |
| `/` | Splash page (live pre-launch) |
| `/about` | Stub |
| `/treatment` | Stub |
| `/treatment/detox` | Stub |
| `/treatment/residential` | Stub |
| `/what-we-treat` | Stub |
| `/insurance` | Stub |
| `/contact` | Stub |

Stub pages are `noindex` and left out of the sitemap until launch.

**Not in the launch build:** Admissions, Areas We Serve, and Resources pillars. These roll out with the SEO campaign after launch.

## Launch checklist

- [ ] Align page slugs with the approved sitemap
- [ ] Add the stacked mountain-arch logo to `public/images/` and the header
- [ ] Replace placeholder colors and fonts in `global.css`
- [ ] Replace the splash page with the full homepage (GBAC layout)
- [ ] Write page content; remove `noindex` from finished pages
- [ ] Remove the pre-launch sitemap filter in `astro.config.mjs`
- [ ] Connect forms to CTM (FormReactor)
- [ ] Add the custom domain in `wrangler.jsonc`
