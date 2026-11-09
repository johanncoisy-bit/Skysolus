import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine principal : www.skysolus.com (skysolus.com et skysolus.fr y redirigent)
export default defineConfig({
  site: 'https://www.skysolus.com',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        const path = new URL(item.url).pathname;
        item.priority = path === '/' ? 1.0 : /^\/(prestations|france|zones)\//.test(path) ? 0.8 : 0.6;
        item.changefreq = path.startsWith('/actualites') ? 'weekly' : 'monthly';
        return item;
      },
    }),
  ],
});
