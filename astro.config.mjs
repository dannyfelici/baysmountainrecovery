// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static build, served by Cloudflare Workers (static assets). See wrangler.jsonc.
export default defineConfig({
  site: 'https://blueridgebhtn.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // Pre-launch: only the splash page goes in the sitemap.
      // Remove this filter when the full site launches.
      filter: (page) => new URL(page).pathname === '/',
    }),
  ],
});
