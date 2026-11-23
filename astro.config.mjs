// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static build, served by Cloudflare Workers (static assets). See wrangler.jsonc.
export default defineConfig({
  site: 'https://baysmountainrecovery.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
