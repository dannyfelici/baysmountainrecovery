import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Staging blocks all crawlers. At launch, set site.staging = false.
export const GET: APIRoute = () => {
  const body = site.staging
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
